import drawPanel from './drawPanel.js';
import drawStatusBar from './drawStatusBar.js';
import drawPaper from './text/drawPaper.js';
import state from '../state/state.js';

const drawInterface = (darkMode) => {
  if (!state.paper?.darkMode) {
    drawPanel();
    drawStatusBar();
  }

  drawPaper();
};

export default drawInterface;