import goToCenterOfTile from '../../guy/routing/goToCenterOfTile.js';
import goToObject from '../../guy/routing/goToObject.js';
import startGuyAnimation from '../../guy/startGuyAnimation.js';
import spriteTypes from '../../images/spriteTypes.js';
import texts from '../../interface/text/texts.js';
import state from '../../state/state.js';
import isUsableFireplace from '../../terrain/objects/isUsableFireplace.js';
import spendMinutes from '../spendMinutes.js';

const lightIt = () => {
  startGuyAnimation(spriteTypes.GUY_LIGHTNING);
  spendMinutes(1);
};

const watchFire = (tile) => {
  tile.object.sprite = spriteTypes.FIRE;
  tile.object.chance = 2 + 2 * tile.height;
  tile.object.lifetime = 35 * 60;
  state.guy.chance += tile.object.chance;
  startGuyAnimation(spriteTypes.GUY_WAITING);
  spendMinutes(2);
};

const lightning = {
  getImpossibleText: (tile) => {
    if (isUsableFireplace(tile)) {
      return null;
    }
    return texts.IMPOSSIBLE_NO_FIREPLACE;
  },
  steps: [
    () => goToObject(-12, 5),
    lightIt,
    watchFire,
    goToCenterOfTile
  ]
};

export default lightning;