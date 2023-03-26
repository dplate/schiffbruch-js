import animateObject from './objects/animateObject.js';

const animateTerrain = (terrain, frame, framesPerSecond) => {
  for (let x in terrain) {
    for (let y in terrain[x]) {
      const object = terrain[x][y].object;
      if (object) {
        animateObject(object, frame, framesPerSecond);
      }
    }
  }
};

export default animateTerrain;