import texts from '../../interface/text/texts.js';
import goToCenterOfTile from '../../guy/routing/goToCenterOfTile.js';
import state from '../../state/state.js';
import openPaper from '../../interface/text/openPaper.js';
import closePaper from '../../interface/text/closePaper.js';
import loadState from '../../state/loadState.js';

const processAnswer = () => {
  if (state.paper.question.answer) {
    loadState();
  }
  closePaper();
};

const restartingDay = {
  steps: [
    goToCenterOfTile,
    () => openPaper(texts.RESTARTING_DAY, true),
  ],
  finish: processAnswer
};

export default restartingDay;