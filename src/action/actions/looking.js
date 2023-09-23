import texts from '../../interface/text/texts.js';
import grounds from '../../terrain/tiles/grounds.js';
import spriteTypes from '../../images/spriteTypes.js';
import startGuyAnimation from '../../guy/startGuyAnimation.js';
import spendMinutes from '../spendMinutes.js';
import goToCenterOfTile from '../../guy/routing/goToCenterOfTile.js';

const look = () => {
  startGuyAnimation(spriteTypes.GUY_LOOKING);
  spendMinutes(40);
};

const looking = {
  getImpossibleText: (tile) => {
    if (tile.ground !== grounds.SEA) {
      return null;
    }
    return texts.IMPOSSIBLE_NO_LOOKING_ON_BOAT;
  },
  steps: [
    look,
    () => {
      startGuyAnimation(spriteTypes.GUY_WAITING);
      spendMinutes(40);
    },
    look,
    goToCenterOfTile,
  ]
};

export default looking;