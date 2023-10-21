import animateTerrain from './terrain/animateTerrain.js';
import playTerrainSounds from './terrain/playTerrainSounds.js';
import updateCamera from './camera/updateCamera.js';
import restrictCamera from './camera/restrictCamera.js';
import discoverTerrain from './guy/discoverTerrain.js';
import animateGuy from './guy/animateGuy.js';
import state from './state/state.js';
import animateButtons from './interface/menu/animateButtons.js';
import startAction from './action/startAction.js';
import actionTypes from './action/actionTypes.js';
import processAction from './action/processAction.js';
import drawCredits from './credits/drawCredits.js';
import phases from './state/phases.js';
import drawLogo from './state/drawLogo.js';
import drawPlay from './state/drawPlay.js';
import actions from './action/actions.js';
import handleKeyboard from './interface/control/keyboard/handleKeyboard.js';
import handleMouseHovers from './interface/control/mouse/handleMouseHovers.js';
import handleTap from './interface/control/handleTap.js';
import handleTouch from './interface/control/handleTouch.js';
import cursor from './interface/control/mouse/cursor.js';

let previousTimestamp = null;

const refresh = (timestamp) => {
  if (!previousTimestamp) {
    previousTimestamp = timestamp;
  }
  const elapsedTime = timestamp - previousTimestamp;
  if (elapsedTime <= 0) {
    return true;
  }
  previousTimestamp = timestamp;
  if (elapsedTime > 500) {
    return true;
  }

  handleKeyboard();
  
  if (state.phase === phases.LOGO) {
    drawLogo()
  } else if (state.phase === phases.PLAY) {
    if (state.calendar.minutes > (12 * 60) && (state.guy.action?.type !== actionTypes.ENDING_DAY)) {
      startAction(actionTypes.ENDING_DAY);
    }

    handleMouseHovers();
    if (!actions[state.guy.action?.type]?.movie || state.paper) {
      handleTap();
      handleTouch();
    }
    restrictCamera();  
    animateTerrain(elapsedTime);
    animateButtons(elapsedTime, cursor);
    if (!state.paper) {
      animateGuy(elapsedTime);
    }
    discoverTerrain();
    playTerrainSounds();
    processAction();

    if (state.phase !== phases.PLAY) {
      return true;
    }

    if (actions[state.guy.action?.type]?.movie) {
      updateCamera(state.guy.position, true);
    }
    drawPlay();

  } else if (state.phase === phases.CREDITS) {
    drawCredits(elapsedTime);
  }
  return true;
}

export default refresh;