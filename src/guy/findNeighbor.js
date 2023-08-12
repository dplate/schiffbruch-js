import directions from '../terrain/directions.js';
import state from '../state/state.js';

const findNeighbor = (isSuitable, realNeighborsOnly = true) => {
  for (let diffX = -1; diffX <= 1; diffX++) {
    for (let diffY = -1; diffY <= 1; diffY++) {
      const direction = directions.byDiff[diffX]?.[diffY];
      if (direction || !realNeighborsOnly) {
        const x = state.guy.tile.x + diffX;
        const y = state.guy.tile.y + diffY;
        const tile = state.terrain[x][y];
        if (isSuitable(tile)) {
          return {
            tile,
            x,
            y,
            direction
          };
        }
      }
    }
  }
  return null;
};

export default findNeighbor;