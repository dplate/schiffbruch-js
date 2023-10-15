import canvases from './canvases.js';

const resizeCanvases = async (screenWidth, screenHeight) => {
  const primaryCanvas = canvases.PRIMARY.canvas;
  primaryCanvas.width = screenWidth;
  primaryCanvas.height = screenHeight;

  const textCanvas = canvases.TEXT.canvas;
  textCanvas.width = screenWidth;
  textCanvas.height = screenHeight;
};

export default resizeCanvases;