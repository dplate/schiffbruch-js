import spriteTypes from '../images/spriteTypes.js';
import state from '../state/state.js';
import isRiver from './objects/isRiver.js';
import isWateredPipe from './objects/isWateredPipe.js';
import grounds from './tiles/grounds.js';
import tileTypes from './tiles/tileTypes.js';

const updateWetlands = () => {
  state.terrain.forEach((terrainColumn, x) => {
    terrainColumn.forEach((tile, y) => {
      if (tile.ground === grounds.GRASS || tile.ground === grounds.WETLAND) {
        tile.ground = grounds.GRASS;
        for (let neighborX = x - 2; neighborX <= x + 2; neighborX++) {
          for (let neighborY = y - 2; neighborY <= y + 2; neighborY++) {
            const neighborTile = state.terrain[neighborX]?.[neighborY]
            const neighborObject = neighborTile?.object;
            const flowPossible = neighborTile?.height > tile.height || 
              (neighborTile?.height === tile.height && tile.type === tileTypes.FLAT);
            if (flowPossible) {
              if (isRiver(neighborObject) && Math.abs(neighborX - x) <= 1 && Math.abs(neighborY - y) <= 1) {
                tile.ground = grounds.WETLAND;
              } else if (isWateredPipe(neighborObject)) {
                tile.ground = grounds.WETLAND;
              }
            }  
          }
        }
        if (tile.ground === grounds.GRASS && tile.object?.sprite === spriteTypes.FIELD) {
          tile.object = null;
        }
      }
    });
  });
};

export default updateWetlands;