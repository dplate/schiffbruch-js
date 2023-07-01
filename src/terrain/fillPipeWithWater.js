import isDryPipe from './objects/isDryPipe.js';

const fillNeighbor = (terrain, x, y) => {
  if (isDryPipe(terrain[x]?.[y]?.object)) {
    fillPipeWithWater(terrain, x, y);
  }
};

const fillPipeWithWater = (terrain, x, y) => {
  terrain[x][y].object.frame = 1;
  fillNeighbor(terrain, x - 1, y);
  fillNeighbor(terrain, x, y - 1);
  fillNeighbor(terrain, x + 1, y);
  fillNeighbor(terrain, x, y + 1);
};

export default fillPipeWithWater;