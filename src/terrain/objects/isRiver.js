import spriteTypes from '../../images/spriteTypes.js';
import isRiverDam from './isRiverDam.js';

const riverSprites = [
  spriteTypes.RIVER_SPRING_EAST,
  spriteTypes.RIVER_SPRING_SOUTH,
  spriteTypes.RIVER_SPRING_NORTH,
  spriteTypes.RIVER_SPRING_WEST,
  spriteTypes.RIVER_MOUTH_WEST,
  spriteTypes.RIVER_MOUTH_NORTH,
  spriteTypes.RIVER_MOUTH_EAST,
  spriteTypes.RIVER_MOUTH_SOUTH,
  spriteTypes.RIVER_NORTH_EAST,
  spriteTypes.RIVER_NORTH_SOUTH,
  spriteTypes.RIVER_WEST_NORTH,
  spriteTypes.RIVER_SOUTH_EAST,
  spriteTypes.RIVER_WEST_EAST,
  spriteTypes.RIVER_WEST_SOUTH,
  spriteTypes.RIVER_SLOPE_NORTH,
  spriteTypes.RIVER_SLOPE_EAST,
  spriteTypes.RIVER_SLOPE_SOUTH,
  spriteTypes.RIVER_SLOPE_WEST,
];

const isRiver = (object) => {
  if (riverSprites.includes(object?.sprite)) {
    return true;
  }
  if (isRiverDam(object)) {
    return true;
  }
  return false;
}

export default isRiver;