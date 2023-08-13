import actionTypes from '../actionTypes.js';
import startAction from '../startAction.js';
import state from '../../state/state.js';
import openPaper from '../../interface/text/openPaper.js';
import texts from '../../interface/text/texts.js';
import grounds from '../../terrain/tiles/grounds.js';

const startSleeping = () => {
  const ground = state.terrain[state.guy.tile.x][state.guy.tile.y].ground;
  if (ground !== grounds.SEA) {
    startAction(actionTypes.SLEEPING);
  } else {
    openPaper(texts.IMPOSSIBLE_NO_SLEEPING_ON_BOAT, false);
  }
};

export default startSleeping;