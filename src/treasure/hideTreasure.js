import grounds from '../terrain/tiles/grounds.js';
import tileTypes from '../terrain/tiles/tileTypes.js';
import state from '../state/state.js';
import isSea from '../terrain/tiles/isSea.js';

const hideTreasure = () => {
  const terrain = state.terrain;
  while (true) {
    const x = Math.floor(Math.random() * (terrain.length - 1));
    const y = Math.floor(Math.random() * (terrain[0].length - 1));
    const tile = terrain[x][y];
    
    if (!tile.object && 
      tile.type === tileTypes.FLAT && 
      tile.ground !== grounds.QUICKSAND && 
      !isSea(tile)) {
      return { 
        x, 
        y
      };
    }
  }
};

export default hideTreasure;