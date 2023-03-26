import tileTypes from './tileTypes.js';

const tileTypeOffsets = {
  [tileTypes.FLAT]: 0,
  [tileTypes.SLOPE_NORTH]: 1,
  [tileTypes.SLOPE_WEST]: 2,
  [tileTypes.SLOPE_SOUTH]: 3,
  [tileTypes.SLOPE_EAST]: 4,
  [tileTypes.RIDGE_NORTH_EAST]: 5,
  [tileTypes.RIDGE_NORTH_WEST]: 6,
  [tileTypes.RIDGE_SOUTH_WEST]: 7,
  [tileTypes.RIDGE_SOUTH_EAST]: 8,
  [tileTypes.CANYON_SOUTH_EAST]: 9,
  [tileTypes.CANYON_NORTH_EAST]: 10,
  [tileTypes.CANYON_NORTH_WEST]: 11,
  [tileTypes.CANYON_SOUTH_WEST]: 12,
};

export default tileTypeOffsets;