import canvases from '../images/canvases.js';
import drawObject from './objects/drawObject.js';
import drawTile from './tiles/drawTile.js';
import state from '../state/state.js';

const drawTerrain = (area, forTreasureMap, canvasContext = canvases.PRIMARY) => {
  state.terrain.forEach((terrainColumn, x) => {
    terrainColumn.forEach((tile, y) => {
      drawTile(area, x, y, forTreasureMap, canvasContext);
    });
  });
  
  state.terrain.forEach((terrainColumn, x) => {
    terrainColumn.forEach((tile, y) => {
      if ((tile.discovered && tile.object) || forTreasureMap) {
        drawObject(area, tile, forTreasureMap, true, false, canvasContext);
      }

      if (tile.discovered && !forTreasureMap) {
        const mustDrawGuy = state.guy.tile.x === x && state.guy.tile.y === y;
        drawObject(area, tile, forTreasureMap, false, mustDrawGuy, canvasContext);
      }
    });
  });
};

export default drawTerrain;