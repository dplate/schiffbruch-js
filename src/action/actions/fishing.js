import texts from '../../interface/text/texts.js';
import directions from '../../terrain/directions.js';
import isFishable from '../../terrain/objects/isFishable.js';
import goToOnTile from '../../guy/routing/goToOnTile.js';
import spriteTypes from '../../images/spriteTypes.js';
import startGuyAnimation from '../../guy/startGuyAnimation.js';
import sounds from '../../sounds/sounds.js';
import changeHealth from '../../guy/changeHealth.js';
import spendMinutes from '../spendMinutes.js';
import goToStoredPosition from '../../guy/routing/goToStoredPosition.js';
import changeWaterAndFood from '../../guy/changeWaterAndFood.js';

const getDirection = (tile) => {
  switch (tile.object?.sprite) {
    case spriteTypes.RIVER_SLOPE_NORTH:
    case spriteTypes.RIVER_NORTH_SOUTH:
    case spriteTypes.RIVER_WEST_SOUTH:
    case spriteTypes.RIVER_MOUTH_NORTH:
    case spriteTypes.RIVER_SPRING_SOUTH:
    case spriteTypes.RIVER_DAM_NORTH_SOUTH:
    case spriteTypes.RIVER_DAM_WEST_SOUTH:
      return directions.WEST;
    case spriteTypes.RIVER_SLOPE_WEST:
    case spriteTypes.RIVER_WEST_EAST:
    case spriteTypes.RIVER_WEST_NORTH:
    case spriteTypes.RIVER_MOUTH_WEST:
    case spriteTypes.RIVER_SPRING_EAST:
    case spriteTypes.RIVER_DAM_WEST_EAST:
    case spriteTypes.RIVER_DAM_WEST_NORTH:  
      return directions.NORTH;
    case spriteTypes.RIVER_SLOPE_SOUTH:
    case spriteTypes.RIVER_NORTH_EAST:
    case spriteTypes.RIVER_MOUTH_SOUTH:
    case spriteTypes.RIVER_SPRING_NORTH:
    case spriteTypes.RIVER_DAM_NORTH_EAST:  
      return directions.EAST;
    case spriteTypes.RIVER_SLOPE_EAST:
    case spriteTypes.RIVER_SOUTH_EAST:
    case spriteTypes.RIVER_MOUTH_EAST:
    case spriteTypes.RIVER_SPRING_WEST:
    case spriteTypes.RIVER_DAM_SOUTH_EAST:
      return directions.SOUTH;
  };
  return null;
};

const goToRiver = (tile) => {
  switch (tile.object?.sprite) { 
    case spriteTypes.RIVER_SLOPE_NORTH:
      goToOnTile({ x: 35, y: 26 });
      return;
    case spriteTypes.RIVER_SLOPE_WEST:
      goToOnTile({ x: 19, y: 26 });
      return;
    case spriteTypes.RIVER_SLOPE_SOUTH:
      goToOnTile({ x: 22, y: 20 });
      return;
    case spriteTypes.RIVER_SLOPE_EAST:
      goToOnTile({ x: 34, y: 23 });
      return;
  }
  switch (getDirection(tile)) {
    case directions.WEST:
      goToOnTile({ x: 34, y: 33 });
      return;
    case directions.NORTH:
      goToOnTile({ x: 20, y: 33 });
      return;
    case directions.EAST:
      goToOnTile({ x: 22, y: 26 });
      return;
    case directions.SOUTH:
      goToOnTile({ x: 32, y: 26 });
      return;        
  }
};

const swing = (tile) => {
  sounds.FISHING.instance.play();

  switch (getDirection(tile)) {
    case directions.WEST:
      startGuyAnimation(spriteTypes.GUY_FISHING_SWINGING_WEST);
      return;
    case directions.NORTH:
      startGuyAnimation(spriteTypes.GUY_FISHING_SWINGING_NORTH);
      return;
    case directions.EAST:
      startGuyAnimation(spriteTypes.GUY_FISHING_SWINGING_EAST);
      return;
    case directions.SOUTH:
      startGuyAnimation(spriteTypes.GUY_FISHING_SWINGING_SOUTH);
      return;        
  }
  startGuyAnimation(spriteTypes.GUY_FISHING_SWINGING_BOAT);
};

const fish = (tile) => {
  changeHealth(2);
  spendMinutes(20);

  switch (getDirection(tile)) {
    case directions.WEST:
      startGuyAnimation(spriteTypes.GUY_FISHING_WEST);
      return;
    case directions.NORTH:
      startGuyAnimation(spriteTypes.GUY_FISHING_NORTH);
      return;
    case directions.EAST:
      startGuyAnimation(spriteTypes.GUY_FISHING_EAST);
      return;
    case directions.SOUTH:
      startGuyAnimation(spriteTypes.GUY_FISHING_SOUTH);
      return;        
  }
  startGuyAnimation(spriteTypes.GUY_FISHING_BOAT);
};

const catchIt = (tile) => {
  switch (getDirection(tile)) {
    case directions.WEST:
      startGuyAnimation(spriteTypes.GUY_FISHING_CATCHING_WEST);
      return;
    case directions.NORTH:
      startGuyAnimation(spriteTypes.GUY_FISHING_CATCHING_NORTH);
      return;
    case directions.EAST:
      startGuyAnimation(spriteTypes.GUY_FISHING_CATCHING_EAST);
      return;
    case directions.SOUTH:
      startGuyAnimation(spriteTypes.GUY_FISHING_CATCHING_SOUTH);
      return;        
  }
  startGuyAnimation(spriteTypes.GUY_FISHING_CATCHING_BOAT);
};

const fishing = {
  getImpossibleText: (tile) => {
    if (isFishable(tile)) {
      return null;
    } 
    return texts.IMPOSSIBLE_NOT_FISHABLE;
  },
  steps: [
    goToRiver,
    swing,
    fish,
    fish,
    fish,
    fish,
    catchIt,
    goToStoredPosition,
    () => changeWaterAndFood(0, 20)
  ]
};

export default fishing;