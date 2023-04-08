import sounds from '../sounds/sounds.js';
import images from './images.js';
import spriteTypes from './spriteTypes.js';

const riverDefault = {
  image: images.WATER,
  sound: sounds.RIVER,
  frameCount: 7,
  speed: 7
};

const treeDefault = {
  image: images.TREES,
  sound: sounds.FOREST,
  frameCount: 4,
  speed: 4
};

const sprites = {
  [spriteTypes.WAVES]: {
    image: images.WATER,
    sound: sounds.WAVES,
    x: 0,
    y: 0,
    width: 28,
    height: 13,
    frameCount: 7,
    speed: 3
  },
  [spriteTypes.RIVER_SPRING_EAST]: {
    ...riverDefault,
    x: 500,
    y: 0,
    width: 30,
    height: 19,
  },
  [spriteTypes.RIVER_SPRING_SOUTH]: {
    ...riverDefault,
    x: 530,
    y: 0,
    width: 26,
    height: 19,
  },
  [spriteTypes.RIVER_SPRING_NORTH]: {
    ...riverDefault,
    x: 556,
    y: 0,
    width: 25,
    height: 16,
  },
  [spriteTypes.RIVER_SPRING_WEST]: {
    ...riverDefault,
    x: 581,
    y: 0,
    width: 25,
    height: 15,
  },
  [spriteTypes.RIVER_MOUTH_WEST]: {
    ...riverDefault,
    x: 336,
    y: 0,
    width: 42,
    height: 22,
  },
  [spriteTypes.RIVER_MOUTH_NORTH]: {
    ...riverDefault,
    x: 378,
    y: 0,
    width: 40,
    height: 22,
  },
  [spriteTypes.RIVER_MOUTH_EAST]: {
    ...riverDefault,
    x: 418,
    y: 0,
    width: 40,
    height: 22,
  },
  [spriteTypes.RIVER_MOUTH_SOUTH]: {
    ...riverDefault,
    x: 458,
    y: 0,
    width: 42,
    height: 22,
  },
  [spriteTypes.RIVER_NORTH_EAST]: {
    ...riverDefault,
    x: 250,
    y: 0,
    width: 18,
    height: 18,
  },
  [spriteTypes.RIVER_NORTH_SOUTH]: {
    ...riverDefault,
    x: 198,
    y: 0,
    width: 34,
    height: 18,
  },
  [spriteTypes.RIVER_WEST_NORTH]: {
    ...riverDefault,
    x: 268,
    y: 0,
    width: 34,
    height: 15,
  },
  [spriteTypes.RIVER_SOUTH_EAST]: {
    ...riverDefault,
    x: 302,
    y: 0,
    width: 34,
    height: 13,
  },
  [spriteTypes.RIVER_WEST_EAST]: {
    ...riverDefault,
    x: 164,
    y: 0,
    width: 34,
    height: 18,
  },
  [spriteTypes.RIVER_WEST_SOUTH]: {
    ...riverDefault,
    x: 232,
    y: 0,
    width: 18,
    height: 18,
  },
  [spriteTypes.RIVER_SLOPE_NORTH]: {
    ...riverDefault,
    x: 28,
    y: 0,
    width: 34,
    height: 8,
  },
  [spriteTypes.RIVER_SLOPE_EAST]: {
    ...riverDefault,
    x: 130,
    y: 0,
    width: 34,
    height: 34,
  },
  [spriteTypes.RIVER_SLOPE_SOUTH]: {
    ...riverDefault,
    x: 96,
    y: 0,
    width: 34,
    height: 34,
  },
  [spriteTypes.RIVER_SLOPE_WEST]: {
    ...riverDefault,
    x: 62,
    y: 0,
    width: 34,
    height: 8,
  },
  [spriteTypes.TREE_HARDWOOD]: {
    ...treeDefault,
    x: 0,
    y: 0,
    width: 21,
    height: 26,
  },
  [spriteTypes.TREE_PALM]: {
    ...treeDefault,
    x: 21,
    y: 0,
    width: 21,
    height: 26,
  },
  [spriteTypes.TREE_EVERGREEN]: {
    ...treeDefault,
    x: 42,
    y: 0,
    width: 22,
    height: 27,
  },
  [spriteTypes.TREE_SMALL]: {
    ...treeDefault,
    x: 64,
    y: 0,
    width: 17,
    height: 16,
  },
  [spriteTypes.BUSH]: {
    ...treeDefault,
    frameCount: 3,
    speed: 0,
    x: 81,
    y: 0,
    width: 20,
    height: 13
  },
  [spriteTypes.BIG_TREE]: {
    ...treeDefault,
    frameCount: 0,
    speed: 0,
    x: 238,
    y: 0,
    width: 26,
    height: 41
  },
  [spriteTypes.PIRATE_WRECK]: {
    image: images.BUILDINGS,
    sound: sounds.WAVES,
    x: 415,
    y: 0,
    width: 27,
    height: 26,
    frameCount: 3,
    speed: 5
  },
  [spriteTypes.SHIP_WRECK]: {
    image: images.BUILDINGS,
    sound: sounds.WAVES,
    x: 391,
    y: 0,
    width: 24,
    height: 18,
    frameCount: 3,
    speed: 5
  },
};

export default sprites;