import canvases from '../images/canvases.js';

const updateCamera = (camera, newCenter, movie) => {
  camera.width = canvases.PRIMARY.canvas.width - (movie ? 0 : 195);
  camera.height = canvases.PRIMARY.canvas.height - (movie ? 0 : 20);
  camera.x = Math.floor(newCenter.x - camera.width / 2);
  camera.y = Math.floor(newCenter.y - camera.height / 2);
};

export default updateCamera;