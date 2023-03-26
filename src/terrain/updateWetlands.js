import objectTypes from './objects/objectTypes.js';
import grounds from './tiles/grounds.js';

const updateWetlands = (terrain) => {
  terrain.forEach((terrainColumn, x) => {
    terrainColumn.forEach((tile, y) => {
      if (tile.ground === grounds.GRASS || tile.ground === grounds.WETLAND) {
        tile.ground = grounds.GRASS;
        for (let neighborX = x - 1; neighborX <= x + 1; neighborX++) {
          for (let neighborY = y - 1; neighborY <= y + 1; neighborY++) {
            const neighborTile = terrain[neighborX]?.[neighborY];
            if (neighborTile?.object?.type === objectTypes.RIVER) {
              tile.ground = grounds.WETLAND;
            }
          }
        }
      }
    });
  });
};

export default updateWetlands;