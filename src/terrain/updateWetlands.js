import spriteTypes from '../images/spriteTypes.js';
import isRiver from './objects/isRiver.js';
import isWateredPipe from './objects/isWateredPipe.js';
import grounds from './tiles/grounds.js';

const updateWetlands = (terrain) => {
  terrain.forEach((terrainColumn, x) => {
    terrainColumn.forEach((tile, y) => {
      if (tile.ground === grounds.GRASS || tile.ground === grounds.WETLAND) {
        tile.ground = grounds.GRASS;
        for (let neighborX = x - 1; neighborX <= x + 1; neighborX++) {
          for (let neighborY = y - 1; neighborY <= y + 1; neighborY++) {
            const neighborObject = terrain[neighborX]?.[neighborY]?.object;
            if (isRiver(neighborObject) || isWateredPipe(neighborObject)) {
              tile.ground = grounds.WETLAND;
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