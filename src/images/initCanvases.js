import canvases from './canvases.js';

const initCanvases = async (window) => {
  const primaryCanvas = window.document.createElement('canvas');
  primaryCanvas.id = 'primaryCanvas';
  primaryCanvas.width = window.innerWidth;
  primaryCanvas.height = window.innerHeight;
  window.document.body.appendChild(primaryCanvas);
  //window.document.body.requestFullscreen();
  canvases.PRIMARY = primaryCanvas.getContext('2d');
  canvases.PRIMARY.imageSmoothingEnabled = false;

  canvases.MINIMAP = window.document.createElement('canvas').getContext('2d');

  const textCanvas = window.document.createElement('canvas');
  textCanvas.width = canvases.PRIMARY.canvas.width;
  textCanvas.height = canvases.PRIMARY.canvas.height;
  canvases.TEXT = textCanvas.getContext('2d');

  canvases.TREASURE_MAP = window.document.createElement('canvas').getContext('2d');
};

export default initCanvases;