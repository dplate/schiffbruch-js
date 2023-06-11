import isDryPipe from './objects/isDryPipe.js';

const fillNeighbor = (gameData, x, y) => {
  if (isDryPipe(gameData.terrain[x]?.[y]?.object)) {
    fillPipeWithWater(gameData, x, y);
  }
};

const fillPipeWithWater = (gameData, x, y) => {
  gameData.terrain[x][y].object.frame = 1;
  fillNeighbor(gameData, x - 1, y);
  fillNeighbor(gameData, x, y - 1);
  fillNeighbor(gameData, x + 1, y);
  fillNeighbor(gameData, x, y + 1);
};

export default fillPipeWithWater;