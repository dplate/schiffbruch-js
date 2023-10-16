import state from '../state/state.js';
import canvases from './canvases.js';

const resizeCanvases = async (screenWidth, screenHeight) => {
  if (canvases.PRIMARY) {
    const primaryCanvas = canvases.PRIMARY.canvas;
    const optimalScaleFactor = Math.min(screenWidth / 800, screenHeight / 600);
    const scaleFactor = optimalScaleFactor > 1 ? Math.floor(optimalScaleFactor) : optimalScaleFactor;
    primaryCanvas.width = Math.max(800, screenWidth / scaleFactor);
    primaryCanvas.height = Math.max(600, screenHeight / scaleFactor);
    primaryCanvas.style.transform = `scale(${scaleFactor})`;
    primaryCanvas.style.transformOrigin = 'top left';
    primaryCanvas.dataset.scaling = scaleFactor;
    state.camera.width = primaryCanvas.width;
    state.camera.height = primaryCanvas.height;
  }
};

export default resizeCanvases;