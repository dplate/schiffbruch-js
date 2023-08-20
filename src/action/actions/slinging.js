import texts from '../../interface/text/texts.js';
import isNormalTree from '../../terrain/objects/isNormalTree.js';
import isBigTree from '../../terrain/objects/isBigTree.js';
import goToObject from '../../guy/routing/goToObject.js';
import spriteTypes from '../../images/spriteTypes.js';
import startGuyAnimation from '../../guy/startGuyAnimation.js';
import spendMinutes from '../spendMinutes.js';
import sounds from '../../sounds/sounds.js';
import changeWaterAndFood from '../../guy/changeWaterAndFood.js';
import goToStoredPosition from '../../guy/routing/goToStoredPosition.js';

const sling = () => {
  startGuyAnimation(spriteTypes.GUY_SLINGING);
  spendMinutes(2);
  sounds.SLINGING.instance.play();
};

const search = () => {
  startGuyAnimation(spriteTypes.GUY_SEARCHING);
  sounds.CRACKLING.instance.play();
  changeWaterAndFood(0, 5);
  spendMinutes(20);
};

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
  steps: [
    () => goToObject(-14, 9),
    sling,
    () => goToObject(6, 2),
    search,
    goToStoredPosition
  ]
};

export default slinging;