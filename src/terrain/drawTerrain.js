import canvases from '../images/canvases.js';
import drawObject from './objects/drawObject.js';
import drawTile from './tiles/drawTile.js';
import state from '../state/state.js';

const drawTerrain = (area, forTreasureMap, canvasContext = canvases.PRIMARY) => {
  canvasContext.fillStyle = `rgba(0, 0, 0, 1)`;
  canvasContext.fillRect(0, 0, area.width, area.height);

  state.terrain.forEach((terrainColumn, x) => {
    terrainColumn.forEach((tile, y) => {
      drawTile(area, x, y, forTreasureMap, canvasContext);
    });
  });

  if (!forTreasureMap) {
    state.terrain.forEach((terrainColumn, x) => {
      terrainColumn.forEach((tile, y) => {
        if (tile.discovered) {
          const mustDrawGuy = state.guy.tile.x === x && state.guy.tile.y === y;
          drawObject(area, tile, forTreasureMap, false, mustDrawGuy, canvasContext);
        }
      });
    });
  }
};

export default drawTerrain;