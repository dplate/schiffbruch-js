import texts from '../../interface/text/texts.js';
import isNormalTree from '../../terrain/objects/isNormalTree.js';
import isBigTree from '../../terrain/objects/isBigTree.js';

const slinging = {
  getImpossibleText: (tile) => {
    if (isNormalTree(tile.object)) {
      return null;
    } 
    if (isBigTree(tile.object)) {
      return texts.IMPOSSIBLE_TREE_TOO_BIG;
    }
    return texts.IMPOSSIBLE_NO_BIRDS;
  },
};

export default slinging;