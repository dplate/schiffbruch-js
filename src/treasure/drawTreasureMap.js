import images from '../images/images.js';
import drawTerrain from '../terrain/drawTerrain.js';
import tileEdges from '../terrain/tiles/tileEdges.js';
import getTreasureMapCanvasContext from './getTreasureMapCanvasContext.js';

const drawTreasureMap = (gameData) => {
  const tile = gameData.terrain[gameData.treasure.x][gameData.treasure.y];
  const canvasContext = getTreasureMapCanvasContext();
  const canvas = canvasContext.canvas;

  const tileCenter = tileEdges[tile.type].center;
  const area = {
    x: Math.round(tile.position.x + tileCenter.x - canvas.width / 2),
    y: Math.round(tile.position.y + tileCenter.y - canvas.height / 2),
    width: canvas.width,
    height: canvas.height
  };
  drawTerrain(gameData, area, true, canvasContext);
  
  canvasContext.filter = 'blur(2px) sepia(1)';
  canvasContext.drawImage(canvas, 0, 0);
  
  const crossWidth = 40;
  const crossHeight = 22;
  canvasContext.drawImage(
    images.PANEL.instance, 
    205,
    360, 
    crossWidth, 
    crossHeight, 
    Math.round(canvas.width / 2 - crossWidth / 2), 
    Math.round(canvas.height / 2 - crossHeight / 2), 
    crossWidth, 
    crossHeight
  );
  canvasContext.filter = 'none';
 
  canvasContext.fillStyle = 'rgba(255, 255, 255, 1)';
  canvasContext.globalCompositeOperation = 'destination-atop';
  canvasContext.filter = 'blur(20px)';
  canvasContext.fillRect(40, 40, canvas.width - 80, canvas.height - 80);
  canvasContext.globalCompositeOperation = 'source-over';
  canvasContext.filter = 'none';
};

export default drawTreasureMap;