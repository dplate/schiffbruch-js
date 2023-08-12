import canvases from '../images/canvases.js';
import images from '../images/images.js';
import drawTerrain from '../terrain/drawTerrain.js';
import tileEdges from '../terrain/tiles/tileEdges.js';
import state from '../state/state.js';

const drawTreasureMap = () => {
  const tile = state.terrain[state.treasure.x][state.treasure.y];
   const canvas = canvases.TREASURE_MAP.canvas;

  const tileCenter = tileEdges[tile.type].center;
  const area = {
    x: Math.round(tile.position.x + tileCenter.x - canvas.width / 2),
    y: Math.round(tile.position.y + tileCenter.y - canvas.height / 2),
    width: canvas.width,
    height: canvas.height
  };
  drawTerrain(area, true, canvases.TREASURE_MAP);
  
  canvases.TREASURE_MAP.filter = 'blur(2px) sepia(1)';
  canvases.TREASURE_MAP.drawImage(canvas, 0, 0);
  
  const crossWidth = 40;
  const crossHeight = 22;
  canvases.TREASURE_MAP.drawImage(
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
  canvases.TREASURE_MAP.filter = 'none';
 
  canvases.TREASURE_MAP.fillStyle = 'rgba(255, 255, 255, 1)';
  canvases.TREASURE_MAP.globalCompositeOperation = 'destination-atop';
  canvases.TREASURE_MAP.filter = 'blur(20px)';
  canvases.TREASURE_MAP.fillRect(40, 40, canvas.width - 80, canvas.height - 80);
  canvases.TREASURE_MAP.globalCompositeOperation = 'source-over';
  canvases.TREASURE_MAP.filter = 'none';
};

export default drawTreasureMap;