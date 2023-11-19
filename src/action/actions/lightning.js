import goToCenterOfTile from '../../guy/routing/goToCenterOfTile.js';
import goToObject from '../../guy/routing/goToObject.js';
import startGuyAnimation from '../../guy/startGuyAnimation.js';
import spriteTypes from '../../images/spriteTypes.js';
import texts from '../../interface/text/texts.js';
import isUsableFireplace from '../../terrain/objects/isUsableFireplace.js';
import spendMinutes from '../spendMinutes.js';

const lightIt = () => {
  startGuyAnimation(spriteTypes.GUY_LIGHTNING);
  spendMinutes(1);
};

const watchFire = (tile) => {
  if (tile.object.sprite === spriteTypes.BUSH) {
    tile.object.sprite = spriteTypes.BUSH_FIRE;
    tile.object.lifetime = 2 * 60;
  } else {
    tile.object.sprite = spriteTypes.FIRE;
    tile.object.lifetime = 35 * 60;
  }
  tile.object.frame = 0;
  tile.object.reverse = Math.random() < 0.5,
  
  startGuyAnimation(spriteTypes.GUY_WAITING);
  spendMinutes(2);
};

const lightning = {
  getImpossibleText: (tile) => {
    if (isUsableFireplace(tile) || tile.object?.sprite === spriteTypes.BUSH) {
      return null;
    }
    return texts.IMPOSSIBLE_NO_FIREPLACE_OR_BUSH;
  },
  steps: [
    () => goToObject(-12, 5),
    lightIt,
    watchFire,
    goToCenterOfTile
  ]
};

export default lightning;