import spriteTypes from '../../images/spriteTypes.js';
import objectTypes from './objectTypes.js';
import directions from '../directions.js';
import tileTypes from '../tiles/tileTypes.js';
import grounds from '../tiles/grounds.js';

const getSpringSprite = (toDirection) => {
  switch (toDirection) {
    case directions.EAST:
      return {
        sprite: spriteTypes.RIVER_SPRING_EAST,
        x: 16,
        y: 19,
      };
    case directions.SOUTH:
      return {
        sprite: spriteTypes.RIVER_SPRING_SOUTH,
        x: 9,
        y: 20,
      };
    case directions.NORTH:
      return {
        sprite: spriteTypes.RIVER_SPRING_NORTH,
        x: 19,
        y: 19,
      };
    case directions.WEST:
      return {
        sprite: spriteTypes.RIVER_SPRING_WEST,
        x: 8,
        y: 21,
      };
    default:
      return null;
  }
};

const getMouthSprite = (fromDirection) => {
  switch (fromDirection) {
    case directions.EAST:
      return {
        sprite: spriteTypes.RIVER_MOUTH_WEST,
        x: 2,
        y: 17,
      };
    case directions.SOUTH:
      return {
        sprite: spriteTypes.RIVER_MOUTH_NORTH,
        x: 10,
        y: 17,
      };
    case directions.WEST:
      return {
        sprite: spriteTypes.RIVER_MOUTH_EAST,
        x: 10,
        y: 21,
      };
    case directions.NORTH:
      return {
        sprite: spriteTypes.RIVER_MOUTH_SOUTH,
        x: 2,
        y: 21,
      };
    default:
      return null;
  }
};

const getFlatSprite = (fromDirection, toDirection) => {
  switch (fromDirection) {
    case directions.NORTH:
      switch (toDirection) {
        case directions.EAST:
          return {
            sprite: spriteTypes.RIVER_NORTH_EAST,
            x: 26,
            y: 21,
          };
        case directions.SOUTH:
          return {
            sprite: spriteTypes.RIVER_NORTH_SOUTH,
            x: 10,
            y: 21,
          };
        case directions.WEST:
          return {
            sprite: spriteTypes.RIVER_WEST_NORTH,
            x: 10,
            y: 20,
            reverse: true
          };
        default:
          return null;
      }
    case directions.EAST:
      switch (toDirection) {
        case directions.SOUTH:
          return {
            sprite: spriteTypes.RIVER_SOUTH_EAST,
            x: 10,
            y: 26,
            reverse: true
          };
        case directions.WEST:
          return {
            sprite: spriteTypes.RIVER_WEST_EAST,
            x: 10,
            y: 21,
            reverse: true
          };
        case directions.NORTH:
          return {
            sprite: spriteTypes.RIVER_NORTH_EAST,
            x: 26,
            y: 21,
            reverse: true
          };
        default:
          return null;
      }
    case directions.SOUTH:
      switch (toDirection) {
        case directions.WEST:
          return {
            sprite: spriteTypes.RIVER_WEST_SOUTH,
            x: 10,
            y: 21,
            reverse: true
          };
        case directions.NORTH:
          return {
            sprite: spriteTypes.RIVER_NORTH_SOUTH,
            x: 10,
            y: 21,
            reverse: true
          };
        case directions.EAST:
          return {
            sprite: spriteTypes.RIVER_SOUTH_EAST,
            x: 10,
            y: 26
          };
        default:
          return null;
      }
    case directions.WEST:
      switch (toDirection) {
        case directions.NORTH:
          return {
            sprite: spriteTypes.RIVER_WEST_NORTH,
            x: 10,
            y: 20
          };
        case directions.EAST:
          return {
            sprite: spriteTypes.RIVER_WEST_EAST,
            x: 10,
            y: 21
          };
        case directions.SOUTH:
          return {
            sprite: spriteTypes.RIVER_WEST_SOUTH,
            x: 10,
            y: 21
          };
        default:
          return null;
      }
    default:
      return null;
  }
}

const getRiverSprite = (tile, fromDirection, toDirection) => {
  if (!fromDirection) {
    return getSpringSprite(toDirection);
  }
  if (!toDirection) {
    return getMouthSprite(fromDirection);
  }
  switch(tile.type) {
    case tileTypes.FLAT:
      return getFlatSprite(fromDirection, toDirection);
    case tileTypes.SLOPE_NORTH:
      if (fromDirection === directions.SOUTH && toDirection === directions.NORTH) {
        return {
          sprite: spriteTypes.RIVER_SLOPE_NORTH,
          x: 10,
          y: 18
        };
      }
      return null;
    case tileTypes.SLOPE_EAST:
      if (fromDirection === directions.WEST && toDirection === directions.EAST) {
        return {
          sprite: spriteTypes.RIVER_SLOPE_EAST,
          x: 10,
          y: 5
        };
      }
      return null;
    case tileTypes.SLOPE_SOUTH:
      if (fromDirection === directions.NORTH && toDirection === directions.SOUTH) {
        return {
          sprite: spriteTypes.RIVER_SLOPE_SOUTH,
          x: 10,
          y: 5
        };
      }
      return null;
    case tileTypes.SLOPE_WEST:
      if (fromDirection === directions.EAST && toDirection === directions.WEST) {
        return {
          sprite: spriteTypes.RIVER_SLOPE_WEST,
          x: 10,
          y: 19
        };
      }
      return null;
    default:
      return null;    
  }
};

const createRiverObject = (tile, fromDirection, toDirection) => {
  if (!tile || 
    tile.ground === grounds.SEA || 
    tile.ground === grounds.QUICKSAND ||
    (tile.ground === grounds.BEACH && toDirection)) {
    return null;
  }
  const sprite = getRiverSprite(tile, fromDirection, toDirection);
  if (!sprite) {
    return null;
  }
  return {
    type: objectTypes.RIVER,
    frame: 0,
    reverse: false,
    ...sprite
  }
};

export default createRiverObject;