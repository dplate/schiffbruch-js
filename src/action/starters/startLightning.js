import actionTypes from '../actionTypes.js';
import startAction from '../startAction.js';
import state from '../../state/state.js';
import openPaper from '../../interface/text/openPaper.js';
import texts from '../../interface/text/texts.js';
import isUsableFireplace from '../../terrain/objects/isUsableFireplace.js';

const startLightning = () => {
  const tile = state.terrain[state.guy.tile.x][state.guy.tile.y];
  if (isUsableFireplace(tile)) {
    startAction(actionTypes.LIGHTNING);
  } else {
    openPaper(texts.IMPOSSIBLE_NO_FIREPLACE, false);
  }
};

export default startLightning;