import clearText from './clearText.js';
import textAreas from './textAreas.js';
import state from '../../state/state.js';

const closePaper = () => {
  clearText(textAreas.PAPER);
  state.paper = null;
  state.guy.active = false;
};

export default closePaper;