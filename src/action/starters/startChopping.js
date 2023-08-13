import actionTypes from '../actionTypes.js';
import startAction from '../startAction.js';
import state from '../../state/state.js';
import openPaper from '../../interface/text/openPaper.js';
import texts from '../../interface/text/texts.js';
import items from '../../guy/inventory/items.js';
import isBigTree from '../../terrain/objects/isBigTree.js';
import isNormalTree from '../../terrain/objects/isNormalTree.js';

const startChopping = () => {
  const object = state.terrain[state.guy.tile.x][state.guy.tile.y].object;
  if (state.guy.inventory[items.LOG] > 10) {
    openPaper(texts.IMPOSSIBLE_TOO_MANY_LOGS, false);
  } else if (isBigTree(object)) {
    openPaper(texts.IMPOSSIBLE_TREE_TOO_BIG, false);
  } else if (isNormalTree(object)) {
    startAction(actionTypes.CHOPPING);
  } else {
    openPaper(texts.IMPOSSIBLE_NO_TREE, false);
  }
};

export default startChopping;