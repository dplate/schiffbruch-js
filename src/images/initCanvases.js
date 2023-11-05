import canvases from './canvases.js';

const initCanvases = async (window) => {
  const primaryCanvas = window.document.createElement('canvas');
  primaryCanvas.id = 'primaryCanvas';
  primaryCanvas.width = window.innerWidth;
  primaryCanvas.height = window.innerHeight;
  primaryCanvas.style.imageRendering = 'pixelated';
  window.document.body.appendChild(primaryCanvas);
  canvases.PRIMARY = primaryCanvas.getContext('2d');
  canvases.PRIMARY.imageSmoothingEnabled = false;
  
  canvases.MINIMAP = window.document.createElement('canvas').getContext('2d');

  canvases.TREASURE_MAP = window.document.createElement('canvas').getContext('2d');
};

export default initCanvases;