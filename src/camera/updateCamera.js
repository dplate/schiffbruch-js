import canvases from '../images/canvases.js';
import interfaceTypes from '../interface/interfaceTypes.js';
import interfaces from '../interface/interfaces.js';
import state from '../state/state.js';

const updateCamera = (newCenter, movie) => {
  const panelArea = interfaces[interfaceTypes.PANEL]().area;
  const statusBarArea = interfaces[interfaceTypes.STATUS_BAR]().area;
  const camera = state.camera;
  camera.width = canvases.PRIMARY.canvas.width;
  camera.height = canvases.PRIMARY.canvas.height;
  camera.x = Math.round(newCenter.x - (movie ? camera.width : panelArea.x) / 2);
  camera.y = Math.round(newCenter.y - (movie ? camera.height : statusBarArea.y) / 2);
};

export default updateCamera;