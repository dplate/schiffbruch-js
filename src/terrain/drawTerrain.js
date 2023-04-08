import drawTile from './tiles/drawTile.js';

const drawTerrain = (gameData, area, forTreasureMap, canvasContext) => {
  canvasContext.fillStyle = `rgba(0, 0, 0, 1)`;
  canvasContext.fillRect(0, 0, area.width, area.height);

  gameData.terrain.forEach((terrainColumn, x) => {
    terrainColumn.forEach((tile, y) => {
      drawTile(gameData, area, x, y, forTreasureMap, canvasContext);
    });
  });
};

export default drawTerrain;