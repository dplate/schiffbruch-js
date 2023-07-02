import animateObject from './objects/animateObject.js';

const animateTerrain = (terrain, frame, framesPerSecond) => {
  for (let x in terrain) {
    for (let y in terrain[x]) {
      const tile = terrain[x][y];
      if (tile.object) {
        animateObject(tile, frame, framesPerSecond);
      }
    }
  }
};

export default animateTerrain;