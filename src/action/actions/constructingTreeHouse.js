import constructionTypes from '../../construction/constructionTypes.js';
import spriteTypes from '../../images/spriteTypes.js';
import texts from '../../interface/text/texts.js';
import isNormalTree from '../../terrain/objects/isNormalTree.js';

const constructingTreeHouse = {
  construction: constructionTypes.TREE_HOUSE,

  getImpossibleText: (tile) => {
    if (isNormalTree(tile.object)) {
      return texts.IMPOSSIBLE_TREE_TOO_SMALL;
    } 
    if (tile.object?.sprite === spriteTypes.BIG_TREE || tile.object?.sprite === spriteTypes.BIG_TREE_WITH_LADDER) {
      return texts.IMPOSSIBLE_NO_PLATFORM;
    }
    if (tile.object?.sprite === spriteTypes.BIG_TREE_WITH_PLATFORM) {
      return null;
    } 
    return texts.IMPOSSIBLE_GENERAL;
  }
};

export default constructingTreeHouse;