import drawPanel from './drawPanel.js';
import drawStatusBar from './drawStatusBar.js';
import drawPaper from './text/drawPaper.js';
import state from '../state/state.js';
import actions from '../action/actions.js';
import drawCursor from './control/mouse/drawCursor.js';

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