import spriteTypes from '../../images/spriteTypes.js';
import directions from '../directions.js';
import tileTypes from '../tiles/tileTypes.js';
import grounds from '../tiles/grounds.js';

const getSpringSprite = (toDirection) => {
  switch (toDirection) {
    case directions.EAST:
      return {
        sprite: spriteTypes.RIVER_SPRING_EAST,
      };
    case directions.SOUTH:
      return {
        sprite: spriteTypes.RIVER_SPRING_SOUTH,
      };
    case directions.NORTH:
      return {
        sprite: spriteTypes.RIVER_SPRING_NORTH,
      };
    case directions.WEST:
      return {
        sprite: spriteTypes.RIVER_SPRING_WEST,
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
      };
    case directions.SOUTH:
      return {
        sprite: spriteTypes.RIVER_MOUTH_NORTH,
      };
    case directions.WEST:
      return {
        sprite: spriteTypes.RIVER_MOUTH_EAST,
      };
    case directions.NORTH:
      return {
        sprite: spriteTypes.RIVER_MOUTH_SOUTH,
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
          };
        case directions.SOUTH:
          return {
            sprite: spriteTypes.RIVER_NORTH_SOUTH,
          };
        case directions.WEST:
          return {
            sprite: spriteTypes.RIVER_WEST_NORTH,
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
            reverse: true
          };
        case directions.WEST:
          return {
            sprite: spriteTypes.RIVER_WEST_EAST,
            reverse: true
          };
        case directions.NORTH:
          return {
            sprite: spriteTypes.RIVER_NORTH_EAST,
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
            reverse: true
          };
        case directions.NORTH:
          return {
            sprite: spriteTypes.RIVER_NORTH_SOUTH,
            reverse: true
          };
        case directions.EAST:
          return {
            sprite: spriteTypes.RIVER_SOUTH_EAST,
          };
        default:
          return null;
      }
    case directions.WEST:
      switch (toDirection) {
        case directions.NORTH:
          return {
            sprite: spriteTypes.RIVER_WEST_NORTH,
          };
        case directions.EAST:
          return {
            sprite: spriteTypes.RIVER_WEST_EAST,
          };
        case directions.SOUTH:
          return {
            sprite: spriteTypes.RIVER_WEST_SOUTH,
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
        };
      }
      return null;
    case tileTypes.SLOPE_EAST:
      if (fromDirection === directions.WEST && toDirection === directions.EAST) {
        return {
          sprite: spriteTypes.RIVER_SLOPE_EAST,
        };
      }
      return null;
    case tileTypes.SLOPE_SOUTH:
      if (fromDirection === directions.NORTH && toDirection === directions.SOUTH) {
        return {
          sprite: spriteTypes.RIVER_SLOPE_SOUTH,
        };
      }
      return null;
    case tileTypes.SLOPE_WEST:
      if (fromDirection === directions.EAST && toDirection === directions.WEST) {
        return {
          sprite: spriteTypes.RIVER_SLOPE_WEST,
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
    frame: 0,
    reverse: false,
    x: 0,
    y: 0,
    ...sprite
  }
};

export default createRiverObject;