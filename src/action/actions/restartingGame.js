import texts from '../../interface/text/texts.js';
import goToCenterOfTile from '../../guy/routing/goToCenterOfTile.js';
import state from '../../state/state.js';
import openPaper from '../../interface/text/openPaper.js';
import closePaper from '../../interface/text/closePaper.js';
import startNewGame from '../../state/startNewGame.js';

const processAnswer = () => {
  if (state.paper.question.answer) {
    startNewGame();
  }
  closePaper();
};

const restartingGame = {
  steps: [
    goToCenterOfTile,
    () => openPaper(texts.RESTARTING_GAME, true),
  ],
  finish: processAnswer
};

export default restartingGame;