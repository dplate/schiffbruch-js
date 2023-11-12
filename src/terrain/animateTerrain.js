import state from '../state/state.js';
import animateObject from './objects/animateObject.js';

const animateTerrain = (elapsedTime) => {
  const terrain = state.terrain;
  const terrainWidth = terrain.length;
  const terrainHeight = terrain[0].length;
  for (let x = 0; x < terrainWidth; x++) {
    for (let y = 0; y < terrainHeight; y++) {
      const tile = terrain[x][y];
      if (tile.object) {
        animateObject(tile, elapsedTime);
      }
    }
  }
};

export default animateTerrain;