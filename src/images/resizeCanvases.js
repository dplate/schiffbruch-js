import state from '../state/state.js';
import canvases from './canvases.js';

const resizeCanvases = async (screenWidth, screenHeight) => {
  if (canvases.PRIMARY) {
    const primaryCanvas = canvases.PRIMARY.canvas;
    const optimalScaleFactor = Math.min(screenWidth / 800, screenHeight / 600);
    if (optimalScaleFactor > 1) {
      primaryCanvas.width = screenWidth;
      primaryCanvas.height = screenHeight;
      primaryCanvas.style.transform = '';
      primaryCanvas.dataset.scaling = 1;
      //canvases.PRIMARY.scale(Math.floor(optimalScaleFactor), Math.floor(optimalScaleFactor));
    } else {
      canvases.PRIMARY.scale(1, 1);
      primaryCanvas.width = 800;
      primaryCanvas.height = 600;
      primaryCanvas.style.transform = `scale(${optimalScaleFactor})`;
      primaryCanvas.style.transformOrigin = 'top left';
      primaryCanvas.dataset.scaling = optimalScaleFactor;
    }
    state.camera.width = primaryCanvas.width;
    state.camera.height = primaryCanvas.height;
  }
};

export default resizeCanvases;