import spriteTypes from '../../images/spriteTypes.js';
import sprites from '../../images/sprites.js';
import directions from '../../terrain/directions.js';
import changeWaterAndFood from '../changeWaterAndFood.js';
import isOnSea from '../isOnSea.js';
import getCostsOfTile from './getCostsOfTile.js';

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

const getSpriteForDirection = (gameData, direction) => {
  const onSea = isOnSea(gameData);
  if (onSea && (gameData.guy.sprite === spriteTypes.GUY_SAILING || gameData.guy.sprite === spriteTypes.GUY_SWIMMING)) {
    return gameData.guy.sprite;
  }
  
  switch(direction) {
    case directions.WEST: return onSea ? spriteTypes.GUY_PADDLING_WEST : spriteTypes.GUY_WALKING_WEST;
    case directions.NORTH: return onSea ? spriteTypes.GUY_PADDLING_NORTH : spriteTypes.GUY_WALKING_NORTH;
    case directions.EAST: return onSea ? spriteTypes.GUY_PADDLING_EAST : spriteTypes.GUY_WALKING_EAST;
    default: return onSea ? spriteTypes.GUY_PADDLING_SOUTH : spriteTypes.GUY_WALKING_SOUTH;
  }
};

const animateRoute = (gameData, frame, addTimeLegacy) => {
  const guy = gameData.guy;
  let routePoint = guy.route[0];
  let wayPoint = routePoint?.wayPoints[0];
  let tileCosts = getCostsOfTile(gameData.terrain[guy.tile.x][guy.tile.y]);
  if (!wayPoint) {
    guy.route.shift();
    if (!guy.route.length) {
      guy.frame = 0;
      guy.active = false;
      return;
    }
    routePoint = guy.route[0];
    wayPoint = routePoint.wayPoints[0];
    tileCosts = getCostsOfTile(gameData.terrain[routePoint.x][routePoint.y]);
    guy.tile.x = routePoint.x;
    guy.tile.y = routePoint.y;
    
    addTimeLegacy(tileCosts * (isOnSea(gameData) ? 3 : 5));
    changeWaterAndFood(gameData, -1, -1);
  }
  
  if (frame % tileCosts === 0) {
    const distance = {
      x: wayPoint.x - guy.position.x,
      y: wayPoint.y - guy.position.y
    };
    const direction = getDirection(wayPoint, distance);
    guy.sprite = getSpriteForDirection(gameData, direction);
    const sprite = sprites[guy.sprite];

    const speed = isOnSea(gameData) ? 2 : 1;
    if ((frame / tileCosts) % (speed * 2) === 0) {
      guy.frame++;
      if (guy.frame >= sprite.frameCount) {
        guy.frame = 0;
      }
    }

    const length = Math.sqrt(distance.x * distance.x + distance.y * distance.y);
    if (length > 0) {
      gameData.guy.position.x += distance.x * speed / length;
      gameData.guy.position.y += distance.y * speed / length;
    }

    if (speed > length) {
      routePoint.wayPoints.shift();
      return;
    }
  }
};

export default animateRoute;