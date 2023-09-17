import goToOnTile from '../../guy/routing/goToOnTile.js';
import texts from '../../interface/text/texts.js';
import isUsableTent from '../../terrain/objects/isUsableTent.js';
import isUsableTreeHouse from '../../terrain/objects/isUsableTreeHouse.js';
import startGuyAnimation from '../../guy/startGuyAnimation.js';
import spriteTypes from '../../images/spriteTypes.js';
import sounds from '../../sounds/sounds.js';
import changeHealth from '../../guy/changeHealth.js';
import goToCenterOfTile from '../../guy/routing/goToCenterOfTile.js';
import state from '../../state/state.js';
import isOnSea from '../../guy/isOnSea.js';
import pauseConstruction from '../../construction/pauseConstruction.js';
import findNeighbor from '../../guy/findNeighbor.js';
import fade from '../../images/fade.js';
import openDayEndPaper from '../../interface/text/openDayEndPaper.js';
import openPaper from '../../interface/text/openPaper.js';
import loadState from '../../state/loadState.js';
import audio from '../../sounds/audio.js';
import phases from '../../state/phases.js';
import closePaper from '../../interface/text/closePaper.js';
import saveState from '../../state/saveState.js';

const isAlreadySleeping = () => {
  return state.guy.sprite === spriteTypes.GUY_SLEEPING_TENT ||
    state.guy.sprite === spriteTypes.GUY_SLEEPING ||
    state.guy.sprite === spriteTypes.GUY_SLEEPING_HOUSE ||
    isOnSea();
};

const abortConstruction = () => {
  if (isAlreadySleeping()) {
    return;
  }
  pauseConstruction();
};

const goToSleepingPlace = () => {
  if (isAlreadySleeping()) {
    return;
  }
  const neighborWithHouse = findNeighbor(isUsableTreeHouse, false);
  const neighborWithTent = findNeighbor(isUsableTent, false);
  const neighbor = neighborWithHouse || neighborWithTent;
  if (neighbor) {
    state.guy.tile.x = neighbor.x;
    state.guy.tile.y = neighbor.y;
    const tile = state.terrain[neighbor.x][neighbor.y];
    if (neighborWithHouse) {
      goToOnTile({
        x: tile.object.x + 1,
        y: tile.object.y + 1
      });
    } else {
      goToOnTile({
        x: tile.object.x - 10,
        y: tile.object.y + 5
      });
    }
  }
};

const climbUpLadder = (tile) => {
  if (isAlreadySleeping()) {
    return;
  }
  if (isUsableTreeHouse(tile)) {
    startGuyAnimation(spriteTypes.GUY_CLIMBING_UP);
  }
};

const layDown = (tile) => {
  fade(0, 3);
  if (isAlreadySleeping()) {
    return;
  }
  if (isUsableTent(tile)) {
    startGuyAnimation(spriteTypes.GUY_LAYING_DOWN_TENT);
  } else if (isUsableTreeHouse(tile)) {
    startGuyAnimation(spriteTypes.GUY_LAYING_DOWN_HOUSE);
  } else {
    startGuyAnimation(spriteTypes.GUY_LAYING_DOWN);
  }
};

const sleep = (tile) => {
  if (isOnSea()) {
    return;
  }
  if (isUsableTent(tile)) {
    startGuyAnimation(spriteTypes.GUY_SLEEPING_TENT);
  } else if (isUsableTreeHouse(tile)) {
    startGuyAnimation(spriteTypes.GUY_SLEEPING_HOUSE);
  } else {
    startGuyAnimation(spriteTypes.GUY_SLEEPING);
  }
  sounds.SNORING.instance.play();
};

const summarizeDay = (tile) => {
  sounds.WOLF.instance.play();
  
  if (isOnSea()) {
    changeHealth(-100);
    openDayEndPaper(texts.ENDING_DAY_SEA);
  } else if (isUsableTent(tile)) {
    changeHealth(-5);
    if (state.guy.health <= 0) {
      openDayEndPaper(texts.ENDING_DAY_DYING);
    } else {
      openDayEndPaper(texts.ENDING_DAY_TENT);
    }
  } else if (isUsableTreeHouse(tile)) {
    changeHealth(20);
    openDayEndPaper(texts.ENDING_DAY_TREE_HOUSE);
  } else {
    changeHealth(-20);
    if (state.guy.health <= 0) {
      openDayEndPaper(texts.ENDING_DAY_DYING);
    } else {
      openDayEndPaper(texts.ENDING_DAY_OUTSIDE);
    }
  }

  state.calendar.day++;
  state.calendar.minutes = 0;
};

const die = () => {
  if (state.guy.health <= 0) {
    openPaper(texts.RESTARTING_DAY, true);
  } else {
    fade(0, 0);
  }
};

const loadOrExit = () => {
  if (state.paper) {
    if (state.paper.question.answer) {
      loadState()
    } else {
      audio.stopAll();
      state.phase = phases.CREDITS;
    };
    closePaper();
  } else {
    fade(100, 3);
  }
};

const standUp = (tile) => {
  sounds.SNORING.instance.stop();
  if (isUsableTreeHouse(tile)) {
    startGuyAnimation(spriteTypes.GUY_STANDING_UP_HOUSE);
  } else {
    startGuyAnimation(spriteTypes.GUY_STANDING_UP);
  }
};

const climbDownLadder = (tile) => {
  if (isUsableTreeHouse(tile)) {
    startGuyAnimation(spriteTypes.GUY_CLIMBING_DOWN);
  }
};

const endingDay = {
  steps: [
    abortConstruction,
    goToSleepingPlace,
    climbUpLadder,
    layDown,
    sleep,
    sleep,
    summarizeDay,
    die,
    loadOrExit,
    sleep,
    sleep,
    standUp,
    climbDownLadder,
    goToCenterOfTile,
    saveState,
  ],
  movie: true
};

export default endingDay;