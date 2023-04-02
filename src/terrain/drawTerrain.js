import drawTile from './tiles/drawTile.js';

const drawTerrain = (gameData, camera, forTreasureMap, canvasContext) => {
  canvasContext.fillStyle = `rgba(0, 0, 0, 1)`;
  canvasContext.fillRect(0, 0, canvasContext.canvas.width, canvasContext.canvas.height);

  gameData.terrain.forEach((terrainColumn, x) => {
    terrainColumn.forEach((tile, y) => {
      drawTile(gameData, x, y, camera, forTreasureMap, canvasContext);
    });
  });
};

export default drawTerrain;