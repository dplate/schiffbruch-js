import canvases from '../images/canvases.js';
import state from '../state/state.js';

const openTreasureMap = () => {
  const treasureMapCanvas = canvases.TREASURE_MAP.canvas;
  state.paper = {
    height: treasureMapCanvas.height,
    treasureMap: true
  };
};

export default openTreasureMap;