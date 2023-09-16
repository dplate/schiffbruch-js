import texts from '../../interface/text/texts.js';
import startGuyAnimation from '../../guy/startGuyAnimation.js';
import spriteTypes from '../../images/spriteTypes.js';
import state from '../../state/state.js';
import openPaper from '../../interface/text/openPaper.js';
import phases from '../../state/phases.js';
import isOnSea from '../../guy/isOnSea.js';
import loadState from '../../state/loadState.js';
import audio from '../../sounds/audio.js';
import closePaper from '../../interface/text/closePaper.js';
import fade from '../../images/fade.js';

const layDown = () => {
  if (!isOnSea()) {
    startGuyAnimation(spriteTypes.GUY_LAYING_DOWN);
  }
};

const die = () => {
  fade(0, 8);
  startGuyAnimation(isOnSea() ? spriteTypes.GUY_DYING_BOAT : spriteTypes.GUY_DYING);
};

const processAnswer = () => {
  if (state.paper.question.answer) {
    loadState();
  } else {
    audio.stopAll();
    state.phase = phases.CREDITS;
  };
  closePaper();
};

const dying = {
  steps: [
    () => openPaper(texts.DYING, false),
    layDown,
    die,
    () => openPaper(texts.RESTARTING_DAY, true),
  ],
  finish: processAnswer,
  noTimeProgress: true
};

export default dying;