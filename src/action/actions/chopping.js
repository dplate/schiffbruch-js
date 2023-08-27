import texts from '../../interface/text/texts.js';
import state from '../../state/state.js';
import isBigTree from '../../terrain/objects/isBigTree.js';
import isNormalTree from '../../terrain/objects/isNormalTree.js';
import goToObject from '../../guy/routing/goToObject.js';
import startGuyAnimation from '../../guy/startGuyAnimation.js';
import spriteTypes from '../../images/spriteTypes.js';
import sounds from '../../sounds/sounds.js';
import changeWaterAndFood from '../../guy/changeWaterAndFood.js';
import spendMinutes from '../spendMinutes.js';
import createTreeFallObject from '../../terrain/objects/createTreeFallObject.js';
import changeItem from '../../guy/inventory/changeItem.js';
import items from '../../guy/inventory/items.js';
import goToCenterOfTile from '../../guy/routing/goToCenterOfTile.js';

const chop = () => {
  startGuyAnimation(spriteTypes.GUY_CHOPPING);
  sounds.CHOPPING.instance.play();
  changeWaterAndFood(-2, -2);
  spendMinutes(10);
};

const watchTreeFall = (tile) => {
  startGuyAnimation(spriteTypes.GUY_WAITING);
  createTreeFallObject(tile);
  sounds.TREEFALL.instance.play();
  changeItem(items.LOG, 1);
  changeItem(items.BRANCH, 5);
  changeItem(items.LEAF, 5);
  changeItem(items.LIANA, 2);
};

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
  steps: [
    () => goToObject(9, 3),
    chop,
    chop,
    chop,
    chop,
    chop,
    watchTreeFall,
    goToCenterOfTile
  ]
};

export default chopping;