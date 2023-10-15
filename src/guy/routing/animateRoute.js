import spriteTypes from '../../images/spriteTypes.js';
import sprites from '../../images/sprites.js';
import directions from '../../terrain/directions.js';
import changeWaterAndFood from '../changeWaterAndFood.js';
import isOnSea from '../isOnSea.js';
import getCostsOfTile from './getCostsOfTile.js';
import state from '../../state/state.js';
import spendMinutes from '../../action/spendMinutes.js';

const getDirection = (wayPoint, distance) => {
  if (wayPoint.direction) {
    return wayPoint.direction;
  }
  if (distance.x < 0 && distance.y <= 0) {
    return directions.WEST;
  }
  if (distance.x >= 0 && distance.y < 0) {
    return directions.NORTH;
  }
  if (distance.x > 0 && distance.y >= 0) {
    return directions.EAST;
  }
  return directions.SOUTH;
};

const getSpriteForDirection = (direction) => {
  const onSea = isOnSea();
  if (onSea && (state.guy.sprite === spriteTypes.GUY_SAILING || state.guy.sprite === spriteTypes.GUY_SWIMMING)) {
    return state.guy.sprite;
  }
  
  switch(direction) {
    case directions.WEST: return onSea ? spriteTypes.GUY_PADDLING_WEST : spriteTypes.GUY_WALKING_WEST;
    case directions.NORTH: return onSea ? spriteTypes.GUY_PADDLING_NORTH : spriteTypes.GUY_WALKING_NORTH;
    case directions.EAST: return onSea ? spriteTypes.GUY_PADDLING_EAST : spriteTypes.GUY_WALKING_EAST;
    default: return onSea ? spriteTypes.GUY_PADDLING_SOUTH : spriteTypes.GUY_WALKING_SOUTH;
  }
};

const animateRoute = (elapsedTime) => {
  const guy = state.guy;
  let routePoint = guy.route[0];
  let wayPoint = routePoint?.wayPoints[0];
  let tileCosts = getCostsOfTile(state.terrain[guy.tile.x][guy.tile.y]);
  if (!wayPoint) {
    guy.route.shift();
    if (!guy.route.length) {
      guy.frame = 0;
      guy.active = false;
      return;
    }
    routePoint = guy.route[0];
    wayPoint = routePoint.wayPoints[0];
    tileCosts = getCostsOfTile(state.terrain[routePoint.x][routePoint.y]);
    guy.tile.x = routePoint.x;
    guy.tile.y = routePoint.y;
    
    spendMinutes(tileCosts * (isOnSea() ? 3 : 5));
    changeWaterAndFood(-1, -1);
  }
  
  const distance = {
    x: wayPoint.x - guy.position.x,
    y: wayPoint.y - guy.position.y
  };
  const direction = getDirection(wayPoint, distance);
  guy.sprite = getSpriteForDirection(direction);
  const sprite = sprites[guy.sprite];

  const animationSpeed = (isOnSea() ? 5 : 10) / tileCosts;
  guy.frame += elapsedTime * animationSpeed / 1000;
  if (guy.frame >= sprite.frameCount) {
    guy.frame = 0;
  }

  const movementSpeed = (isOnSea() ? 30 : 15) / tileCosts;
  const length = Math.sqrt(distance.x * distance.x + distance.y * distance.y);
  if (length > 0) {
    state.guy.position.x += (distance.x / length) * elapsedTime * (movementSpeed / 1000);
    state.guy.position.y += (distance.y / length) * elapsedTime * (movementSpeed / 1000);
  }

  if (length < 1) {
    routePoint.wayPoints.shift();
    return;
  }
};

export default animateRoute;