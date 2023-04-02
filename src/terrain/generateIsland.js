import tileTypes from './tiles/tileTypes.js';
import tileEdges from './tiles/tileEdges.js';
import directions from './directions.js';
import allowedNeighbors from './tiles/allowedNeighbors.js';

// Min and max size of the island in amount of tiles
const MIN_ISLAND_TILES = 200;
const MAX_ISLAND_TILES = 500;

// Height of highest point of island
const MAX_HEIGHT = 3;

const initTerrain = (terrain) => {
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

const getTileFromDirection = (tiles, x, y, direction) => {
  return tiles[x + directions.xDiff[direction]]?.[y + directions.yDiff[direction]];
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

const findPossibleTiles = (tiles, x, y, doRecursiveCheck = true) => {
  // if sea level reached for all direct neighbors then this tile is also sea (no other islands)
  if (directions.list.every(direction => {
    const tile = getTileFromDirection(tiles, x, y, direction);
    return !tile || tile.type === null || (tile.type === tileTypes.FLAT && tile.height === 0);
  })) {
    return [{
      type: tileTypes.FLAT,
      height: 0
    }];
  }

  // get allowed tiles from direct neighbors
  const allowedTilesGroups = directions.list.map(direction => {
      const tile = getTileFromDirection(tiles, x, y, direction);
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
    tiles[x][y].type = candidate.type;
    tiles[x][y].height = candidate.height;
    return directions.list.every(direction => {
      const tile = getTileFromDirection(tiles, x, y, direction);
      if (!tile) {
        return true;
      }
      const possibleOtherTiles = findPossibleTiles(tiles, x + directions.xDiff[direction], y + directions.yDiff[direction], false);
      return possibleOtherTiles.length > 0
    });
  });
  tiles[x][y].type = null;
  tiles[x][y].height = null;

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

const setTile = (terrain, x, y, direction) => {
  const possibleTiles = findPossibleTiles(terrain, x, y);
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

const validateTerrain = (terrain) => {
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

const calculateTilePositions = (terrain) => {
  const flatTileEdges = tileEdges[tileTypes.FLAT];
  const flatHalfWidth = flatTileEdges.top.x + 2;
  const flatHalfHeight = flatTileEdges.left.y - flatTileEdges.top.y ;
  const heightMultiplier = flatTileEdges.top.y + 1;
  const offsetX = Math.floor(flatHalfWidth * (terrain.length - 1));

  terrain.forEach((terrainColumn, x) => {
    terrainColumn.forEach((tile, y) => {
      terrain[x][y].position = {
        x: offsetX + flatHalfWidth * (x - y),
        y: flatHalfHeight * (x + y) - heightMultiplier * tile.height
      };
    });
  });
};

const generateIsland = (terrain) => {
  const center = Math.floor(terrain.length / 2);

  for (let terrainAttempt = 0; terrainAttempt < 1000; terrainAttempt++) {
    initTerrain(terrain);
    terrain[center][center].type = tileTypes.FLAT;
    terrain[center][center].height = MAX_HEIGHT;

    // Go from the center of the island to the outside
    for (let radius = 1; radius <= center; radius++) {
      // North row
      for (let x = center - radius + 1; x <= center + radius; x++) {
        setTile(terrain, x, center + directions.yDiff[directions.NORTH] * radius, directions.NORTH);
      }
      // East col
      for (let y = center - radius + 1; y <= center + radius; y++) {
        setTile(terrain, center + directions.xDiff[directions.EAST] * radius, y, directions.EAST);
      }
      // South row
      for (let x = center + radius - 1; x >= center - radius; x--) {
        setTile(terrain, x, center + directions.yDiff[directions.SOUTH] * radius, directions.SOUTH);
      }
      // West col
      for (let y = center + radius - 1; y >= center - radius; y--) {
        setTile(terrain, center + directions.xDiff[directions.WEST] * radius, y, directions.WEST);
      }
    }
    if (validateTerrain(terrain)) {
      break;
    }
  }

  calculateTilePositions(terrain);
}

export default generateIsland;