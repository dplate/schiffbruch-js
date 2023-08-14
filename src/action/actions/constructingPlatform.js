import constructionTypes from '../../construction/constructionTypes.js';
import spriteTypes from '../../images/spriteTypes.js';
import texts from '../../interface/text/texts.js';
import isNormalTree from '../../terrain/objects/isNormalTree.js';

const constructingPlatform = {
  construction: constructionTypes.PLATFORM,

  getImpossibleText: (tile) => {
    if (isNormalTree(tile.object)) {
      return texts.IMPOSSIBLE_TREE_TOO_SMALL;
    } 
    if (tile.object?.sprite === spriteTypes.BIG_TREE) {
      return texts.IMPOSSIBLE_NO_LADDER;
    } 
    if (tile.object?.sprite === spriteTypes.BIG_TREE_WITH_LADDER) {
      return null;
    }
    return texts.IMPOSSIBLE_GENERAL;
  },
};

export default constructingPlatform;