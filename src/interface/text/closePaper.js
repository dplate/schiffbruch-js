import state from '../../state/state.js';

const closePaper = () => {
  state.paper = null;
  state.guy.active = false;
};

export default closePaper;