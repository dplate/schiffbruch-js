import state from './state.js';
import drawTreasureMap from '../treasure/drawTreasureMap.js';
import updateMinimap from '../interface/minimap/updateMinimap.js';
import closePaper from '../interface/text/closePaper.js';

const loadState = () => {
  const rawState = window.localStorage.getItem('stateV10');
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

  return true;
};

export default loadState;