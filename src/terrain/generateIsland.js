import tileTypes from './tiles/tileTypes.js';
import directions from './directions.js';
import allowedNeighbors from './tiles/allowedNeighbors.js';
import positionTransformer from './positionTransformer.js';
import state from '../state/state.js';

// Min and max size of the island in amount of tiles
const MIN_ISLAND_TILES = 200;
const MAX_ISLAND_TILES = 500;

// Height of highest point of island
const MAX_HEIGHT = 3;

const initTerrain = () => {
  const terrain = state.terrain;
  for (let x in terrain) {
    for (let y in terrain[x]) {
      terrain[x][y].type = null;
      terrain[x][y].height = null;
      terrain[x][y].position = null;
      terrain[x][y].discovered = false;
    }
  }
};

const preferredTileTypes = {
  [directions.NORTH]: {
    [tileTypes.FLAT]: 25, 
    [tileTypes.SLOPE_NORTH]: 10,
    [tileTypes.RIDGE_NORTH_EAST]: 5,
    [tileTypes.RIDGE_NORTH_WEST]: 2,
    [tileTypes.CANYON_NORTH_EAST]: 2,
    [tileTypes.CANYON_NORTH_WEST]: 2,
  },
  [directions.EAST]: {
    [tileTypes.FLAT]: 25, 
    [tileTypes.SLOPE_EAST]: 10,
    [tileTypes.RIDGE_SOUTH_EAST]: 5,
    [tileTypes.RIDGE_NORTH_EAST]: 2,
    [tileTypes.CANYON_SOUTH_EAST]: 2,
    [tileTypes.CANYON_NORTH_EAST]: 2,
  },
  [directions.SOUTH]: {
    [tileTypes.FLAT]: 25, 
    [tileTypes.SLOPE_SOUTH]: 10,
    [tileTypes.RIDGE_SOUTH_WEST]: 5,
    [tileTypes.RIDGE_SOUTH_EAST]: 2,
    [tileTypes.CANYON_SOUTH_WEST]: 2,
    [tileTypes.CANYON_SOUTH_EAST]: 2,
  },
  [directions.WEST]: {
    [tileTypes.FLAT]: 25, 
    [tileTypes.SLOPE_WEST]: 10,
    [tileTypes.RIDGE_NORTH_WEST]: 5,
    [tileTypes.RIDGE_SOUTH_WEST]: 2,
    [tileTypes.CANYON_NORTH_WEST]: 2,
    [tileTypes.CANYON_SOUTH_WEST]: 2,
  },
};

const getTileFromDirection = (x, y, direction) => {
  return state.terrain[x + directions.xDiff[direction]]?.[y + directions.yDiff[direction]];
}

const getAllowedTiles = (tile, direction) => {
  if (!tile || tile.type === null) {
    return null;
  }
  const relations = allowedNeighbors[tile.type][direction];
  const allowedTiles = relations.map(relation => ({
    type: relation.type,
    height: tile.height + relation.heightChange
  }));

  return allowedTiles.filter(allowedTile => allowedTile.height >= 0);
}

const findPossibleTiles = (x, y, doRecursiveCheck = true) => {
  const terrain = state.terrain;

  // if sea level reached for all direct neighbors then this tile is also sea (no other islands)
  if (directions.list.every(direction => {
    const tile = getTileFromDirection(x, y, direction);
    return !tile || tile.type === null || (tile.type === tileTypes.FLAT && tile.height === 0);
  })) {
    return [{
      type: tileTypes.FLAT,
      height: 0
    }];
  }

  // get allowed tiles from direct neighbors
  const allowedTilesGroups = directions.list.map(direction => {
      const tile = getTileFromDirection(x, y, direction);
      return getAllowedTiles(tile, directions.opposite[direction]);
    }
  );

  // only keep tiles which are allowed by all neighbors
  const candidates = allowedTilesGroups.reduce((mergedCandidates, allowedTiles) => {
    if (allowedTiles === null) {
      return mergedCandidates;
    }
    if (mergedCandidates === null) {
      return allowedTiles;
    }
    return mergedCandidates.filter(mergeCandidate => 
      allowedTiles.some(allowedTile =>
        allowedTile.type === mergeCandidate.type && 
        allowedTile.height === mergeCandidate.height
      )
    );
  }, null);

  if (!doRecursiveCheck) {
    return candidates;
  }

  // only keep tiles which do not produce an impossible situation
  const possibleTiles = candidates.filter(candidate => {
    terrain[x][y].type = candidate.type;
    terrain[x][y].height = candidate.height;
    return directions.list.every(direction => {
      const tile = getTileFromDirection(x, y, direction);
      if (!tile) {
        return true;
      }
      const possibleOtherTiles = findPossibleTiles(x + directions.xDiff[direction], y + directions.yDiff[direction], false);
      return possibleOtherTiles.length > 0
    });
  });
  terrain[x][y].type = null;
  terrain[x][y].height = null;

  return possibleTiles;
};

const findRandomTile = (possibleTiles, direction) => {
  // Multiply preferred tile types to make the selection more likely
  const multipliedTiles = possibleTiles.reduce((newTiles, possibleTile) => {
    const probability = preferredTileTypes[direction][possibleTile.type] || 1;
    return [ ...newTiles, ...(Array(probability).fill(possibleTile)) ];
  }, []);

  return multipliedTiles[Math.floor(Math.random() * multipliedTiles.length)];
};

const setTile = (x, y, direction) => {
  const terrain = state.terrain;
  const possibleTiles = findPossibleTiles(x, y);
  if (!possibleTiles.length) {
    console.error('No possible tile found', [
      terrain[x - 1][y - 1], terrain[x][y - 1], terrain[x + 1][y - 1], 
      terrain[x - 1][y + 0], terrain[x][y + 0], terrain[x + 1][y + 0],
      terrain[x - 1][y + 1], terrain[x][y + 1], terrain[x + 1][y + 1], 
    ], x, y, direction);
    throw new Error('No possible tile found');
  }
  const randomTile = findRandomTile(possibleTiles, direction);
  terrain[x][y].type = randomTile.type;
  terrain[x][y].height = randomTile.height;
};

const validateTerrain = () => {
  const terrain = state.terrain;
  let islandTiles = 0;
  for (let x in terrain) {
    for (let y in terrain[x]) {
      const tile = terrain[x][y];
      if (tile.height > 0) {
        islandTiles++;
        if (islandTiles > MAX_ISLAND_TILES) {
          return false;
        }
      }
      if (tile.type !== tileTypes.FLAT && 
        ((x <= 4) || (x >= terrain.length - 5) || (y <= 4) || (y >= terrain[x].length - 5))) {
        return false;
      }
    }
  }
  return islandTiles >= MIN_ISLAND_TILES; 
};

const calculateTilePositions = () => {
  const terrain = state.terrain;
  terrain.forEach((terrainColumn, x) => {
    terrainColumn.forEach((tile, y) => {
      terrain[x][y].position = positionTransformer.toPixel(x, y, tile.height);
    });
  });
};

const generateIsland = () => {
  const terrain = state.terrain;
  const center = Math.floor(terrain.length / 2);

  for (let terrainAttempt = 0; terrainAttempt < 1000; terrainAttempt++) {
    initTerrain();
    terrain[center][center].type = tileTypes.FLAT;
    terrain[center][center].height = MAX_HEIGHT;

    // Go from the center of the island to the outside
    for (let radius = 1; radius <= center; radius++) {
      // North row
      for (let x = center - radius + 1; x <= center + radius; x++) {
        setTile(x, center + directions.yDiff[directions.NORTH] * radius, directions.NORTH);
      }
      // East col
      for (let y = center - radius + 1; y <= center + radius; y++) {
        setTile(center + directions.xDiff[directions.EAST] * radius, y, directions.EAST);
      }
      // South row
      for (let x = center + radius - 1; x >= center - radius; x--) {
        setTile(x, center + directions.yDiff[directions.SOUTH] * radius, directions.SOUTH);
      }
      // West col
      for (let y = center + radius - 1; y >= center - radius; y--) {
        setTile(center + directions.xDiff[directions.WEST] * radius, y, directions.WEST);
      }
    }
    if (validateTerrain()) {
      break;
    }
  }

  calculateTilePositions();
}

export default generateIsland;