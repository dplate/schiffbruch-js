import state from '../state/state.js';

const startAction = (actionType) => {
  state.guy.active = false;
  state.guy.action = {
    type: actionType,
    step: 0
  };
};

export default startAction;