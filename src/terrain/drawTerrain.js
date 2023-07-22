import canvases from '../images/canvases.js';
import drawObject from './objects/drawObject.js';
import drawTile from './tiles/drawTile.js';

const drawTerrain = (gameData, area, forTreasureMap, canvasContext = canvases.PRIMARY) => {
  canvasContext.fillStyle = `rgba(0, 0, 0, 1)`;
  canvasContext.fillRect(0, 0, area.width, area.height);

  gameData.terrain.forEach((terrainColumn, x) => {
    terrainColumn.forEach((tile, y) => {
      drawTile(gameData, area, x, y, forTreasureMap, canvasContext);
    });
  });

  if (!forTreasureMap) {
    gameData.terrain.forEach((terrainColumn, x) => {
      terrainColumn.forEach((tile, y) => {
        if (tile.discovered) {
          const mustDrawGuy = gameData.guy.tile.x === x && gameData.guy.tile.y === y;
          drawObject(gameData, area, tile, forTreasureMap, false, mustDrawGuy, canvasContext);
        }
      });
    });
  }
};

export default drawTerrain;