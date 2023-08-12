import state from '../state/state.js';
import isDryPipe from './objects/isDryPipe.js';

const fillNeighbor = (x, y) => {
  if (isDryPipe(state.terrain[x]?.[y]?.object)) {
    fillPipeWithWater(x, y);
  }
};

const fillPipeWithWater = (x, y) => {
  state.terrain[x][y].object.frame = 1;
  fillNeighbor(x - 1, y);
  fillNeighbor(x, y - 1);
  fillNeighbor(x + 1, y);
  fillNeighbor(x, y + 1);
};

export default fillPipeWithWater;