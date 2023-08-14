import texts from '../../interface/text/texts.js';
import state from '../../state/state.js';
import isBigTree from '../../terrain/objects/isBigTree.js';
import isNormalTree from '../../terrain/objects/isNormalTree.js';

const chopping = {
  getImpossibleText: (tile) => {
    if (state.guy.inventory[items.LOG] > 10) {
      return texts.IMPOSSIBLE_TOO_MANY_LOGS;
    } 
    if (isBigTree(tile.object)) {
      return texts.IMPOSSIBLE_TREE_TOO_BIG;
    } 
    if (isNormalTree(tile.object)) {
      return null;
    } 
    return texts.IMPOSSIBLE_NO_TREE;
  },
};

export default chopping;