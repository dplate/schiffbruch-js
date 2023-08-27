import finishConstruction from '../construction/finishConstruction.js';
import useItemsForConstruction from '../construction/useItemsForConstruction.js';
import state from '../state/state.js';
import actions from './actions.js';

const processAction = () => {
  if (!state.guy.active && state.guy.action) {
    state.guy.route = [];

    const action = actions[state.guy.action.type];
    if (action.steps) {

      const tile = state.terrain[state.guy.tile.x][state.guy.tile.y];
      const step = action.construction ? tile.construction?.actionStep : state.guy.action.step;

      if (step >= action.steps.length) {
        state.guy.action = null;
        if (action.construction) {
          finishConstruction(tile);
        }
        if (action.finish) {
          action.finish(tile);
        }
        return;
      }
    
      if (action.construction && !useItemsForConstruction(tile)) {
        return;
      }
      action.steps[step](tile);

      if (action.construction) {
        tile.construction.actionStep++;
      } else {
        state.guy.action.step++;
      }
    }
  };
};

export default processAction;