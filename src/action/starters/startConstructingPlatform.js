import actionTypes from '../actionTypes.js';
import startAction from '../startAction.js';
import state from '../../state/state.js';
import openPaper from '../../interface/text/openPaper.js';
import texts from '../../interface/text/texts.js';
import constructionTypes from '../../construction/constructionTypes.js';
import continueConstruction from '../../construction/continueConstruction.js';
import isNormalTree from '../../terrain/objects/isNormalTree.js';
import spriteTypes from '../../images/spriteTypes.js';

const startConstructingPlatform = () => {
  const tile = state.terrain[state.guy.tile.x][state.guy.tile.y];
  if (isNormalTree(tile.object)) {
    openPaper(texts.IMPOSSIBLE_TREE_TOO_SMALL, false);
  } else if (tile.object?.sprite === spriteTypes.BIG_TREE) {
    openPaper(texts.IMPOSSIBLE_NO_LADDER, false);
  } else if (tile.object?.sprite === spriteTypes.BIG_TREE_WITH_LADDER) {
    startAction(actionTypes.CONSTRUCTING_PLATFORM);
  } else if (tile.construction?.type === constructionTypes.PLATFORM) {
    continueConstruction()
    startAction(actionTypes.CONSTRUCTING_PLATFORM);
  } else {
    openPaper(texts.IMPOSSIBLE_GENERAL, false);
  }
};

export default startConstructingPlatform;