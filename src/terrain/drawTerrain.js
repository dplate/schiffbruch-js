import canvases from '../images/canvases.js';
import drawObject from './objects/drawObject.js';
import drawTile from './tiles/drawTile.js';
import state from '../state/state.js';

const drawTerrain = (area, forTreasureMap, canvasContext = canvases.PRIMARY) => {
  const terrainWidth = state.terrain.length;
  const terrainHeight = state.terrain[0].length;
  for (let x = 0; x < terrainWidth; x++) {
    for (let y = 0; y < terrainHeight; y++) {
      drawTile(area, x, y, forTreasureMap, canvasContext);
    }
  }
  for (let x = 0; x < terrainWidth; x++) {
    for (let y = 0; y < terrainHeight; y++) {
      const tile = state.terrain[x][y];
      if ((tile.discovered && tile.object) || forTreasureMap) {
        drawObject(area, tile, forTreasureMap, true, false, canvasContext);
      }
    }
  }
  for (let x = 0; x < terrainWidth; x++) {
    for (let y = 0; y < terrainHeight; y++) {
      const tile = state.terrain[x][y];
      if (tile.discovered && !forTreasureMap) {
        const mustDrawGuy = state.guy.tile.x === x && state.guy.tile.y === y;
        drawObject(area, tile, forTreasureMap, false, mustDrawGuy, canvasContext);
      }
    }
  }
};

export default drawTerrain;