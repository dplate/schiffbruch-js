import isRiver from './objects/isRiver.js';
import grounds from './tiles/grounds.js';

const updateWetlands = (terrain) => {
  terrain.forEach((terrainColumn, x) => {
    terrainColumn.forEach((tile, y) => {
      if (tile.ground === grounds.GRASS || tile.ground === grounds.WETLAND) {
        tile.ground = grounds.GRASS;
        for (let neighborX = x - 1; neighborX <= x + 1; neighborX++) {
          for (let neighborY = y - 1; neighborY <= y + 1; neighborY++) {
            const neighborTile = terrain[neighborX]?.[neighborY];
            if (isRiver(neighborTile?.object)) {
              tile.ground = grounds.WETLAND;
            }
          }
        }
      }
    });
  });
};

export default updateWetlands;