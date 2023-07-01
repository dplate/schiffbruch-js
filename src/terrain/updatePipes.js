import fillPipeWithWater from './fillPipeWithWater.js';
import isDryPipe from './objects/isDryPipe.js';
import isRiverDam from './objects/isRiverDam.js';
import isWateredPipe from './objects/isWateredPipe.js';
import tryCreateRiverDam from './objects/tryCreateRiverDam.js';
import updateWetlands from './updateWetlands.js';

const resetPipes = (terrain) => {
  terrain.forEach((terrainColumn, x) => {
    terrainColumn.forEach((tile, y) => {
      if (isWateredPipe(tile.object)) {
        tile.object.frame = 0;
      }
      if (isRiverDam(tile.object)) {
        tile.originalObject.frame = tile.object.frame;
        tile.object = tile.originalObject;
        tile.originalObject = null;
      }
    });
  });
};

const startFillingPipes = (terrain) => {
  terrain.forEach((terrainColumn, x) => {
    terrainColumn.forEach((tile, y) => {
      if (
        (
          isWateredPipe(tile.object) || 
          isDryPipe(tile.object)
        ) &&
        (
          tryCreateRiverDam(terrain[x - 1][y]) ||
          tryCreateRiverDam(terrain[x][y - 1]) ||
          tryCreateRiverDam(terrain[x + 1][y]) ||
          tryCreateRiverDam(terrain[x][y + 1])
        )
      ) {
        fillPipeWithWater(terrain, x, y);
      }
    });
  });
};

const updatePipes = (terrain) => {
  resetPipes(terrain);
  startFillingPipes(terrain);
  updateWetlands(terrain);
};

export default updatePipes;