import createWaves from './objects/createWaves.js';
import grounds from './tiles/grounds.js';
import tileTypes from './tiles/tileTypes.js';

const initGrounds = (terrain) => {
  for (let x in terrain) {
    for (let y in terrain[x]) {
      terrain[x][y].ground = null;
      terrain[x][y].object = null;
    }
  }
};

const isOpenSea = (terrain, x, y) => {
  for (let xOffset = -1; xOffset <= 1; xOffset++) {
    for (let yOffset = -1; yOffset <= 1; yOffset++) {
      const neighborTile = terrain[x + xOffset]?.[y + yOffset];
      if (neighborTile && neighborTile.type !== tileTypes.FLAT) {
        return false;
      }
    }
  }
  return true;
};

const setSea = (terrain, x, y) => {
  const tile = terrain[x]?.[y];
  if (tile && !tile.ground && tile.type === tileTypes.FLAT && tile.height === 0) {
    if (isOpenSea(terrain, x, y)) {
      tile.ground = grounds.SEA;
      tile.object = createWaves();
      setSea(terrain, x, y - 1);
      setSea(terrain, x + 1, y);
      setSea(terrain, x, y + 1);
      setSea(terrain, x - 1, y);
    }
  }
};

const findBeachStart = (terrain) => {
  for (let x = 0; x < terrain.length; x++) {
    for (let y = 0; y < terrain[x].length; y++) {
      if (!terrain[x][y].ground) {
        return { x, y };
      }
    }
  }
};

const setBeach = (terrain, x, y) => {
  const tile = terrain[x]?.[y];
  if (tile && !tile.ground && tile.type === tileTypes.FLAT && tile.height === 0) {
    tile.ground = grounds.BEACH;
    setBeach(terrain, x, y - 1);
    setBeach(terrain, x + 1, y);
    setBeach(terrain, x, y + 1);
    setBeach(terrain, x - 1, y);
  }
};

const setLand = (terrain) => {
  terrain.forEach((terrainColumn) => {
    terrainColumn.forEach((tile) => {
      if (!tile.ground) {
        if (tile.type === tileTypes.FLAT && tile.height === 0) {
          tile.ground = grounds.QUICKSAND;
        } else {
          tile.ground = grounds.GRASS;
        }
      }
    });
  });
};

const setGrounds = (terrain) => {
  initGrounds(terrain);
  setSea(terrain, 0, 0);
  const beachStart = findBeachStart(terrain);
  setBeach(terrain, beachStart.x, beachStart.y);
  setLand(terrain);
};

export default setGrounds;