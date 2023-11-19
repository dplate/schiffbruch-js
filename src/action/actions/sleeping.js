import goToOnTile from '../../guy/routing/goToOnTile.js';
import texts from '../../interface/text/texts.js';
import isUsableTent from '../../terrain/objects/isUsableTent.js';
import isUsableTreeHouse from '../../terrain/objects/isUsableTreeHouse.js';
import startGuyAnimation from '../../guy/startGuyAnimation.js';
import spriteTypes from '../../images/spriteTypes.js';
import changeWaterAndFood from '../../guy/changeWaterAndFood.js';
import sounds from '../../sounds/sounds.js';
import changeHealth from '../../guy/changeHealth.js';
import spendMinutes from '../spendMinutes.js';
import goToCenterOfTile from '../../guy/routing/goToCenterOfTile.js';
import isSea from '../../terrain/tiles/isSea.js';

const goToSleepingPlace = (tile) => {
  if (isUsableTent(tile))
    goToOnTile({
      x: tile.object.x - 10,
      y: tile.object.y + 5
    });
  else if (isUsableTreeHouse(tile))
    goToOnTile({
      x: tile.object.x + 1,
      y: tile.object.y + 1
    });
};

const climbUpLadder = (tile) => {
  if (isUsableTreeHouse(tile)) {
    startGuyAnimation(spriteTypes.GUY_CLIMBING_UP);
    changeWaterAndFood(-1, -1);
  }
};

const climbDownLadder = (tile) => {
  if (isUsableTreeHouse(tile)) {
    startGuyAnimation(spriteTypes.GUY_CLIMBING_DOWN);
    changeWaterAndFood(-1, -1);
  }
};

const layDown = (tile) => {
  if (isUsableTent(tile)) {
    startGuyAnimation(spriteTypes.GUY_LAYING_DOWN_TENT);
  } else if (isUsableTreeHouse(tile)) {
    startGuyAnimation(spriteTypes.GUY_LAYING_DOWN_HOUSE);
  } else {
    startGuyAnimation(spriteTypes.GUY_LAYING_DOWN);
  }
};

const sleep = (tile) => {
  if (isUsableTent(tile)) {
    startGuyAnimation(spriteTypes.GUY_SLEEPING_TENT);
  } else if (isUsableTreeHouse(tile)) {
    startGuyAnimation(spriteTypes.GUY_SLEEPING_HOUSE);
  } else {
    startGuyAnimation(spriteTypes.GUY_SLEEPING);
  }
  sounds.SNORING.instance.play();
  changeHealth(5);
  spendMinutes(30);
};

const standUp = (tile) => {
  sounds.SNORING.instance.stop();
  if (isUsableTreeHouse(tile)) {
    startGuyAnimation(spriteTypes.GUY_STANDING_UP_HOUSE);
  } else {
    startGuyAnimation(spriteTypes.GUY_STANDING_UP);
  }
};

const sleeping = {
  getImpossibleText: (tile) => {
    if (!isSea(tile)) {
      return null;
    }
    return texts.IMPOSSIBLE_NO_SLEEPING_ON_BOAT;
  },
  steps: [
    goToSleepingPlace,
    climbUpLadder,
    layDown,
    sleep,
    sleep,
    standUp,
    climbDownLadder,
    goToCenterOfTile
  ]
};

export default sleeping;