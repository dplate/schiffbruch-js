import canvases from '../images/canvases.js';
import textAreas from '../interface/text/textAreas.js';
import state from '../state/state.js';

const openTreasureMap = () => {
  const treasureMapCanvas = canvases.TREASURE_MAP.canvas;

  state.paper = {
    height: treasureMapCanvas.height
  };

  canvases.TEXT.drawImage(
    treasureMapCanvas,
    0, 
    0, 
    treasureMapCanvas.width, 
    treasureMapCanvas.height,
    textAreas.PAPER.x, 
    textAreas.PAPER.y, 
    treasureMapCanvas.width, 
    treasureMapCanvas.height
  );
};

export default openTreasureMap;