import actionTypes from '../actionTypes.js';
import startAction from '../startAction.js';
import state from '../../state/state.js';
import openPaper from '../../interface/text/openPaper.js';
import texts from '../../interface/text/texts.js';
import isDestroyable from '../../terrain/objects/isDestroyable.js';

const startDestroying = () => {
  const object = state.terrain[state.guy.tile.x][state.guy.tile.y].object;
  if (isDestroyable(object)) {
    startAction(actionTypes.DESTROYING);
  } else {
    openPaper(texts.IMPOSSIBLE_DESTROYING, false);
  }
};

export default startDestroying;