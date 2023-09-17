import drawPanel from './drawPanel.js';
import drawStatusBar from './drawStatusBar.js';
import drawPaper from './text/drawPaper.js';
import state from '../state/state.js';
import drawCursor from './cursor/drawCursor.js';
import actions from '../action/actions.js';

const drawInterface = () => {
  const movie = actions[state.guy.action?.type]?.movie;
  if (!state.paper?.darkMode && !movie) {
    drawPanel();
    drawStatusBar();
  }

  drawPaper();

  if (!movie || state.paper) {
    drawCursor();
  }  
};

export default drawInterface;