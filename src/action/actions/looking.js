import texts from '../../interface/text/texts.js';
import spriteTypes from '../../images/spriteTypes.js';
import startGuyAnimation from '../../guy/startGuyAnimation.js';
import spendMinutes from '../spendMinutes.js';
import goToCenterOfTile from '../../guy/routing/goToCenterOfTile.js';
import discoverTerrain from '../../guy/discoverTerrain.js';
import changeWaterAndFood from '../../guy/changeWaterAndFood.js';
import isSea from '../../terrain/tiles/isSea.js';

const look = (distance) => {
  startGuyAnimation(spriteTypes.GUY_LOOKING);
  spendMinutes(40);
  changeWaterAndFood(-3, -3);
  discoverTerrain(distance);
};

const looking = {
  getImpossibleText: (tile) => {
    if (!isSea(tile)) {
      return null;
    }
    return texts.IMPOSSIBLE_NO_LOOKING_ON_BOAT;
  },
  steps: [
    () => look(2),
    () => {
      startGuyAnimation(spriteTypes.GUY_WAITING);
      spendMinutes(40);
    },
    () => look(3),
    goToCenterOfTile,
  ]
};

export default looking;