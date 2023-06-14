import directions from '../terrain/directions.js';

const findNeighbor = (gameData, isSuitable, realNeighborsOnly = true) => {
  for (let diffX = -1; diffX <= 1; diffX++) {
    for (let diffY = -1; diffY <= 1; diffY++) {
      const direction = directions.byDiff[diffX]?.[diffY];
      if (direction || !realNeighborsOnly) {
        const x = gameData.guy.tile.x + diffX;
        const y = gameData.guy.tile.y + diffY;
        const tile = gameData.terrain[x][y];
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