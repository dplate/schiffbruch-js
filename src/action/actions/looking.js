import texts from '../../interface/text/texts.js';
import grounds from '../../terrain/tiles/grounds.js';
import spriteTypes from '../../images/spriteTypes.js';
import startGuyAnimation from '../../guy/startGuyAnimation.js';
import spendMinutes from '../spendMinutes.js';
import goToCenterOfTile from '../../guy/routing/goToCenterOfTile.js';
import discoverTerrain from '../../guy/discoverTerrain.js';
import changeWaterAndFood from '../../guy/changeWaterAndFood.js';

const look = (distance) => {
  startGuyAnimation(spriteTypes.GUY_LOOKING);
  spendMinutes(40);
  changeWaterAndFood(-3, -3);
  discoverTerrain(distance);
};

const looking = {
  getImpossibleText: (tile) => {
    if (tile.ground !== grounds.SEA) {
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