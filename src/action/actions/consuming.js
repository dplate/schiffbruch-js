
import isDrinkable from '../../terrain/objects/isDrinkable.js';
import isEatable from '../../terrain/objects/isEatable.js';
import texts from '../../interface/text/texts.js';
import spriteTypes from '../../images/spriteTypes.js';
import sounds from '../../sounds/sounds.js';
import changeWaterAndFood from '../../guy/changeWaterAndFood.js';
import spendMinutes from '../spendMinutes.js';
import goToOffset from '../../guy/routing/goToOffset.js';
import goToStoredPosition from '../../guy/routing/goToStoredPosition.js';
import goToObject from '../../guy/routing/goToObject.js';
import startGuyAnimation from '../../guy/startGuyAnimation.js';

const goToPlace = (tile) => {
  if (isEatable(tile.object)) {
    goToObject(0, 2);
  } else {
    goToOffset(-4, -2);
  }
};

const consume = (tile) => {
  if (isEatable(tile.object)) {
    startGuyAnimation(spriteTypes.GUY_EATING);
    sounds.CRACKLING.instance.play();
    changeWaterAndFood(0, 15);
    spendMinutes(2);
  } else {
    startGuyAnimation(spriteTypes.GUY_DRINKING);
    sounds.DRINKING.instance.play();
    changeWaterAndFood(30, 0);
    spendMinutes(3);
  }
};

const resetEatableObject = (tile) => {
  if (isEatable(tile.object)) {
    tile.object.frame = 0;
  }
};

const consuming = {
  getImpossibleText: (tile) => {
    if (isEatable(tile.object) || isDrinkable(tile.object)) {
      return null;
    }
    return texts.IMPOSSIBLE_NO_FOOD_OR_WATER;
  },
  steps: [
    goToPlace,
    consume,
    consume,
    resetEatableObject,
    goToStoredPosition
  ]
};

export default consuming;