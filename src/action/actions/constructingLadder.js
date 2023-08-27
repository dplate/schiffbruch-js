import construct from '../../construction/construct.js';
import constructionTypes from '../../construction/constructionTypes.js';
import changeWaterAndFood from '../../guy/changeWaterAndFood.js';
import goToCenterOfTile from '../../guy/routing/goToCenterOfTile.js';
import goToObject from '../../guy/routing/goToObject.js';
import startGuyAnimation from '../../guy/startGuyAnimation.js';
import spriteTypes from '../../images/spriteTypes.js';
import texts from '../../interface/text/texts.js';
import sounds from '../../sounds/sounds.js';
import isNormalTree from '../../terrain/objects/isNormalTree.js';
import spendMinutes from '../spendMinutes.js';

const hammer = () => {
  startGuyAnimation(spriteTypes.GUY_HAMMERING);
  sounds.HAMMERING.instance.play();
  changeWaterAndFood(-0.5, -0.5);
  spendMinutes(1);
};

const constructingLadder = {
  construction: constructionTypes.LADDER,

  getImpossibleText: (tile) => {
    if (isNormalTree(tile.object)) {
      return texts.IMPOSSIBLE_TREE_TOO_SMALL;
    }
    if (tile.object?.sprite === spriteTypes.BIG_TREE) {
      return null;
    } 
    return texts.IMPOSSIBLE_GENERAL;
  },
  getConstructionPosition: (tile) => tile.object,
  steps: [
    () => goToObject(-2, 2),
    hammer,
    hammer,
    hammer,
    hammer,
    construct,
    hammer,
    hammer,
    hammer,
    hammer,
    construct,
    hammer,
    hammer,
    hammer,
    hammer,
    construct,
    hammer,
    hammer,
    hammer,
    hammer,
    construct,
    goToCenterOfTile
  ]
};

export default constructingLadder;