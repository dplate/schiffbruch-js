import grounds from '../terrain/tiles/grounds.js';
import tileTypes from '../terrain/tiles/tileTypes.js';

const hideTreasure = (gameData) => {
  const terrain = gameData.terrain;
  while (true) {
    const x = Math.floor(Math.random() * (terrain.length - 1));
    const y = Math.floor(Math.random() * (terrain[0].length - 1));
    const tile = terrain[x][y];
    
    if (!tile.object && tile.type === tileTypes.FLAT && tile.ground !== grounds.QUICKSAND && tile.ground !== grounds.SEA) {
      return { 
        x, 
        y, 
        found: false
      };
    }
  }
};

export default hideTreasure;