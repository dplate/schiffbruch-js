import spriteTypes from '../images/spriteTypes.js';
import directions from './directions.js';
import createRiverObject from './objects/createRiverObject.js';
import grounds from './tiles/grounds.js';
import tileTypes from './tiles/tileTypes.js';
import updateWetlands from './updateWetlands.js';

const xDiff = {
  [directions.NORTH]: 0,
  [directions.EAST]: 1,
  [directions.SOUTH]: 0,
  [directions.WEST]: -1,
};

const yDiff = {
  [directions.NORTH]: -1,
  [directions.EAST]: 0,
  [directions.SOUTH]: 1,
  [directions.WEST]: 0,
};

const collectPossibleStarts = (terrain) => {
  const possibleStarts = [];
  terrain.forEach((terrainColumn, x) => {
    terrainColumn.forEach((tile, y) => {
      if (tile.type === tileTypes.FLAT && tile.height >= 2) {
        possibleStarts.push({ x, y });
      }
    });
  });
  return possibleStarts;
};

const hasEndReached = (terrain, tile, position, fromDirection) => {
  if (!fromDirection || tile?.ground !== grounds.BEACH) {
    return false;
  };
  const toDirection = directions.opposite[fromDirection];
  const nextPosition = {
    x: position.x + xDiff[toDirection],
    y: position.y + yDiff[toDirection],
  };
  return terrain[nextPosition.x]?.[nextPosition.y].ground === grounds.SEA;
};

const isAlreadyRiver = (river, position) => river.some((step) => step.position.x === position.x && step.position.y === position.y);

const findRiver = (terrain, river, position, visitedPositions, fromDirection = null) => {
  if (visitedPositions.some((visitedPosition) => visitedPosition.x === position.x && visitedPosition.y === position.y)) {
    return null;
  }
  visitedPositions.push(position);

  const tile = terrain[position.x]?.[position.y];
  if (hasEndReached(terrain, tile, position, fromDirection)) {
    const object = createRiverObject(tile, fromDirection);
    return [ ...river, { object, position } ];
  }

  const randomDirectionIndex = Math.floor(Math.random() * directions.list.length);
  for (let directionTry = 0; directionTry < directions.list.length; directionTry++) {
    const toDirection = directions.list[(randomDirectionIndex + directionTry) % directions.list.length];
    const nextPosition = {
      x: position.x + xDiff[toDirection],
      y: position.y + yDiff[toDirection],
    };

    const object = createRiverObject(tile, fromDirection, toDirection);
    if (object && !isAlreadyRiver(river, nextPosition)) {
      const extendedRiver = [ ...river, { object, position } ];
      const foundRiver = findRiver(terrain, extendedRiver, nextPosition, visitedPositions, directions.opposite[toDirection]);
      if (foundRiver) {
        return foundRiver;
      }
    }
  }
  return null;
};

const calculateRiverScore = (river) => {
  const spring = river[0];
  const mouth = river[river.length - 1];
  const xDiff = spring.position.x - mouth.position.x;
  const yDiff = spring.position.y - mouth.position.y;
  const distance = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
  return distance;
};

const addRiver = (terrain) => {
  const possibleStarts = collectPossibleStarts(terrain);
  const possibleRivers = [];
  while (possibleRivers.length < 100) {
    const start = possibleStarts[Math.floor(Math.random() * possibleStarts.length)];
    const visitedPositions = [];
    const river = findRiver(terrain, [], start, visitedPositions);
    if (river) {
      possibleRivers.push(river);
    }
  };
  
  const bestRiver = possibleRivers.sort((river1, river2) => calculateRiverScore(river2) - calculateRiverScore(river1))[0];
  bestRiver.forEach((riverStep) => terrain[riverStep.position.x][riverStep.position.y].object = riverStep.object);

  updateWetlands(terrain);
};

export default addRiver;