import canvases from '../images/canvases.js';
import drawInterface from '../interface/drawInterface.js';
import drawTerrain from '../terrain/drawTerrain.js';
import state from './state.js';

const drawPlay = () => {
  canvases.PRIMARY.clearRect(0, 0, canvases.PRIMARY.canvas.width, canvases.PRIMARY.canvas.height);

  if (!state.paper?.darkMode) {
    drawTerrain(state.camera, false);
  }

  drawInterface();
};

export default drawPlay;