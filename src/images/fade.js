import canvases from './canvases.js';

const fade = (intensity, smooth) => {
  canvases.PRIMARY.canvas.style.transition = `${smooth}s filter ease-in-out`;
  canvases.PRIMARY.canvas.style.filter = `brightness(${intensity}%) saturate(${intensity}%)`;
};

export default fade;