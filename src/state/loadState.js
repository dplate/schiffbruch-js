import state from './state.js';
import drawTreasureMap from '../treasure/drawTreasureMap.js';
import updateMinimap from '../interface/minimap/updateMinimap.js';
import closePaper from '../interface/text/closePaper.js';
import updateCamera from '../camera/updateCamera.js';

const loadState = () => {
  const rawState = window.localStorage.getItem('stateV11');
  if (!rawState) {
    return false;
  }

  let parsedState = null;
  try {
    parsedState = JSON.parse(rawState);
  } catch (error) {
    console.warn('Cannot parse saved game, ignoring...', error)
    return false;
  };
  Object.assign(state, parsedState);

  drawTreasureMap();
  updateMinimap();
  closePaper();
  updateCamera(state.guy.position);

  return true;
};

export default loadState;