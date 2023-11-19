import state from '../state/state.js';
import createWaves from './objects/createWaves.js';
import grounds from './tiles/grounds.js';
import tileTypes from './tiles/tileTypes.js';

const initGrounds = () => {
  const terrain = state.terrain;
  for (let x in terrain) {
    for (let y in terrain[x]) {
      terrain[x][y].ground = null;
      terrain[x][y].object = null;
    }
  }
};

const isOpenSea = (x, y) => {
  for (let xOffset = -2; xOffset <= 2; xOffset++) {
    for (let yOffset = -2; yOffset <= 2; yOffset++) {
      const neighborTile = state.terrain[x + xOffset]?.[y + yOffset];
      if (neighborTile && neighborTile.type !== tileTypes.FLAT) {
        return false;
      }
    }
  }
  return true;
};

const isShore = (x, y) => {
  for (let xOffset = -1; xOffset <= 1; xOffset++) {
    for (let yOffset = -1; yOffset <= 1; yOffset++) {
      const neighborTile = state.terrain[x + xOffset]?.[y + yOffset];
      if (neighborTile && neighborTile.type !== tileTypes.FLAT) {
        return false;
      }
    }
  }
  return true;
};

const setSea = (x, y) => {
  const tile = state.terrain[x]?.[y];
  if (tile && !tile.ground && tile.type === tileTypes.FLAT && tile.height === 0) {
    if (isOpenSea(x, y)) {
      tile.ground = grounds.SEA;
    } else if (isShore(x, y)) {
      tile.ground = grounds.SHORE;
    }
    if (tile.ground) {
      tile.object = createWaves();
      setSea(x, y - 1);
      setSea(x + 1, y);
      setSea(x, y + 1);
      setSea(x - 1, y);
    }
  }
};

const findBeachStart = () => {
  const terrain = state.terrain;
  for (let x = 0; x < terrain.length; x++) {
    for (let y = 0; y < terrain[x].length; y++) {
      if (!terrain[x][y].ground) {
        return { x, y };
      }
    }
  }
};

const setBeach = (x, y) => {
  const tile = state.terrain[x]?.[y];
  if (tile && !tile.ground && tile.type === tileTypes.FLAT && tile.height === 0) {
    tile.ground = grounds.BEACH;
    setBeach(x, y - 1);
    setBeach(x + 1, y);
    setBeach(x, y + 1);
    setBeach(x - 1, y);
  }
};

const setLand = () => {
  state.terrain.forEach((terrainColumn) => {
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

const setGrounds = () => {
  initGrounds();
  setSea(0, 0);
  const beachStart = findBeachStart();
  setBeach(beachStart.x, beachStart.y);
  setLand();
};

export default setGrounds;