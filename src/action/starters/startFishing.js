import actionTypes from '../actionTypes.js';
import startAction from '../startAction.js';
import state from '../../state/state.js';
import openPaper from '../../interface/text/openPaper.js';
import texts from '../../interface/text/texts.js';
import isFishable from '../../terrain/objects/isFishable.js';

const startFishing = () => {
  const tile = state.terrain[state.guy.tile.x][state.guy.tile.y];
  if (isFishable(tile)) {
    startAction(actionTypes.FISHING);
  } else {
    openPaper(texts.IMPOSSIBLE_NOT_FISHABLE, false);
  }
};

export default startFishing;