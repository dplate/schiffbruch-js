import state from '../state/state.js';
import actions from './actions.js';

const processAction = () => {
  if (!state.guy.active && state.guy.action) {
    state.guy.route = [];

    const action = actions[state.guy.action.type];
    if (action.steps) {
      action.steps[state.guy.action.step](state.terrain[state.guy.tile.x][state.guy.tile.y]);

      if (state.guy.action.step < action.steps.length - 1) {
        state.guy.action.step++;
      } else {
        state.guy.action = null;
      }
    }
  };
};

export default processAction;