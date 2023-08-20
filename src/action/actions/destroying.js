import changeWaterAndFood from '../../guy/changeWaterAndFood.js';
import goToObject from '../../guy/routing/goToObject.js';
import goToStoredPosition from '../../guy/routing/goToStoredPosition.js';
import startGuyAnimation from '../../guy/startGuyAnimation.js';
import spriteTypes from '../../images/spriteTypes.js';
import texts from '../../interface/text/texts.js';
import sounds from '../../sounds/sounds.js';
import isDestroyable from '../../terrain/objects/isDestroyable.js';
import spendMinutes from '../spendMinutes.js';

const chop = () => {
  startGuyAnimation(spriteTypes.GUY_CHOPPING);
  sounds.CHOPPING.instance.play();
  changeWaterAndFood(-1, -1);
  spendMinutes(5);
};

const hit = () => {
  startGuyAnimation(spriteTypes.GUY_HITTING);
  sounds.HITTING.instance.play();
  changeWaterAndFood(-1, -1);
  spendMinutes(5);
};

const destroy = (tile) => {
  const object = tile.object;
  tile.object = tile.originalObject;
  tile.originalObject = null
  if (tile.construction) {
    tile.construction = null;
  } else {
    if (object.chance) {
      state.guy.chance -= object.chance;
    }
    if (object.sprite === spriteTypes.PIPE) {
      updatePipes();
    }
  }
};

const destroying = {
  getImpossibleText: (tile) => {
    if (isDestroyable(tile.object)) {
      return null;
    }
    return texts.IMPOSSIBLE_DESTROYING;
  },
  steps: [
    () => goToObject(4, 2),
    chop,
    hit,
    chop,
    hit,
    destroy,
    goToStoredPosition
  ]
};

export default destroying;