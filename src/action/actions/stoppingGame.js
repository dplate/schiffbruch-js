import texts from '../../interface/text/texts.js';
import goToCenterOfTile from '../../guy/routing/goToCenterOfTile.js';
import state from '../../state/state.js';
import openPaper from '../../interface/text/openPaper.js';
import closePaper from '../../interface/text/closePaper.js';
import saveState from '../../state/saveState.js';
import audio from '../../sounds/audio.js';
import phases from '../../state/phases.js';

const processAnswer = () => {
  if (state.paper.question.answer) {
    saveState();
    audio.stopAll();
    state.phase = phases.CREDITS;
  }
  closePaper();
};

const stoppingGame = {
  steps: [
    goToCenterOfTile,
    () => openPaper(texts.STOPPING_GAME, true),
  ],
  finish: processAnswer
};

export default stoppingGame;