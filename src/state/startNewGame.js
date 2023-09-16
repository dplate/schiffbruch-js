import actionTypes from '../action/actionTypes.js';
import startAction from '../action/startAction.js';
import initGuy from '../guy/initGuy.js';
import canvases from '../images/canvases.js';
import generateTerrain from '../terrain/generateTerrain.js';
import phases from './phases.js';
import state from './state.js';

const startNewGame = () => {
  canvases.PRIMARY.fillStyle = 'rgba(70, 70, 100, 1)';
  canvases.PRIMARY.fillRect(0, 0, canvases.PRIMARY.canvas.width, canvases.PRIMARY.canvas.height);

  generateTerrain();
  initGuy();

  state.calendar.day = 1;
  state.calendar.minutes = 0;

  state.phase = phases.PLAY;
  startAction(actionTypes.ARRIVING);
};

export default startNewGame;