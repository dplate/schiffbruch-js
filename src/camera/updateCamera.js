import canvases from '../images/canvases.js';
import state from '../state/state.js';

const updateCamera = (newCenter, movie) => {
  const camera = state.camera;
  camera.width = canvases.PRIMARY.canvas.width - (movie ? 0 : 195);
  camera.height = canvases.PRIMARY.canvas.height - (movie ? 0 : 20);
  camera.x = Math.round(newCenter.x - camera.width / 2);
  camera.y = Math.round(newCenter.y - camera.height / 2);
};

export default updateCamera;