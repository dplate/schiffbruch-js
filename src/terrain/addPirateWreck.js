import spriteTypes from '../images/spriteTypes.js';
import state from '../state/state.js';
import grounds from './tiles/grounds.js';
import tileEdges from './tiles/tileEdges.js';

const isGoodPosition = (x, y) => {
  const terrain = state.terrain;

  if (terrain[x][y].ground !== grounds.SEA) {
    return false;
  }

  // Avoid position in vertical center, because there is the players wreck
  if (y === Math.floor(terrain[0].length / 2)) {
    return false;
  }

  // Do not place it left of a beach (left part of island) to make it harder to find
  for (let neighborX = Math.max(0, x - 1); neighborX <= Math.min(x, terrain.length - 1); neighborX++) {
    for (let neighborY = Math.max(0, y - 1); neighborY <= Math.min(y + 1, terrain[0].length - 1); neighborY++) {
      if (neighborX !== x && neighborY !== y) {
        if (terrain[neighborX][neighborY].ground !== grounds.SEA) {
          return true;
        }
      }    
    }
  }
  return false;
}

const addPirateWreck = () => {
  const terrain = state.terrain;
  
  while(true) {
    const x = Math.floor(Math.random() * terrain.length);
    const y = Math.floor(Math.random() * terrain[0].length);
    if (isGoodPosition(x, y)) {
      const tile = terrain[x][y];
      const center = tileEdges[tile.type].center;
      tile.object = {
        sprite: spriteTypes.PIRATE_WRECK,
        x: center.x + 7,
        y: center.y + 5,
        frame: 0
      };
      return;
    }
  }
};

export default addPirateWreck;