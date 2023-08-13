import actionTypes from '../actionTypes.js';
import startAction from '../startAction.js';
import state from '../../state/state.js';
import openPaper from '../../interface/text/openPaper.js';
import texts from '../../interface/text/texts.js';
import isNormalTree from '../../terrain/objects/isNormalTree.js';
import isBigTree from '../../terrain/objects/isBigTree.js';

const startSlinging = () => {
  const object = state.terrain[state.guy.tile.x][state.guy.tile.y].object;
  if (isNormalTree(object)) {
    startAction(actionTypes.SLINGING);
  } else if (isBigTree(object)) {
    openPaper(texts.IMPOSSIBLE_TREE_TOO_BIG, false);
  } else {
    openPaper(texts.IMPOSSIBLE_NO_BIRDS, false);
  }
};

export default startSlinging;