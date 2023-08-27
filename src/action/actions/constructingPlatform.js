import constructionTypes from '../../construction/constructionTypes.js';
import spriteTypes from '../../images/spriteTypes.js';
import texts from '../../interface/text/texts.js';
import isNormalTree from '../../terrain/objects/isNormalTree.js';
import construct from '../../construction/construct.js';
import goToObject from '../../guy/routing/goToObject.js';
import changeWaterAndFood from '../../guy/changeWaterAndFood.js';
import startGuyAnimation from '../../guy/startGuyAnimation.js';
import sounds from '../../sounds/sounds.js';
import spendMinutes from '../spendMinutes.js';
import goToCenterOfTile from '../../guy/routing/goToCenterOfTile.js';

const climbUp = () => {
  startGuyAnimation(spriteTypes.GUY_CLIMBING_UP);
  changeWaterAndFood(-1, -1);
  spendMinutes(1);
};

const climbDown = () => {
  startGuyAnimation(spriteTypes.GUY_CLIMBING_DOWN);
  changeWaterAndFood(-1, -1);
  spendMinutes(1);
};

const hammerTop = () => {
  startGuyAnimation(spriteTypes.GUY_HAMMERING_TOP);
  sounds.HAMMERING.instance.play();
  changeWaterAndFood(-0.5, -0.5);
  spendMinutes(1);
};

const hammer = () => {
  startGuyAnimation(spriteTypes.GUY_HAMMERING);
  sounds.HAMMERING.instance.play();
  changeWaterAndFood(-0.5, -0.5);
  spendMinutes(1);
};

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
  getConstructionPosition: (tile) => tile.object,
  steps: [
    () => goToObject(0, 1),
    climbUp,
    hammerTop,
    hammerTop,
    hammerTop,
    hammerTop,
    construct,
    hammerTop,
    hammerTop,
    hammerTop,
    hammerTop,
    construct,
    hammerTop,
    hammerTop,
    hammerTop,
    hammerTop,
    construct,
    hammerTop,
    hammerTop,
    hammerTop,
    hammerTop,
    construct,
    climbDown,
    hammer,
    hammer,
    hammer,
    hammer,
    construct,
    goToCenterOfTile
  ]
};

export default constructingPlatform;