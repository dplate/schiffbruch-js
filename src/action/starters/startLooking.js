import actionTypes from '../actionTypes.js';
import startAction from '../startAction.js';
import state from '../../state/state.js';
import openPaper from '../../interface/text/openPaper.js';
import texts from '../../interface/text/texts.js';
import grounds from '../../terrain/tiles/grounds.js';

const startLooking = () => {
  const ground = state.terrain[state.guy.tile.x][state.guy.tile.y].ground;
  if (ground !== grounds.SEA) {
    startAction(actionTypes.LOOKING);
  } else {
    openPaper(texts.IMPOSSIBLE_NO_LOOKING_ON_BOAT, false);
  }
};

export default startLooking;