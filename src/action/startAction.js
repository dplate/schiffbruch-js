import state from '../state/state.js';
import actions from './actions.js';
import openPaper from '../interface/text/openPaper.js';
import goTo from '../guy/routing/goTo.js';

const startAction = (actionType) => {
  const action = actions[actionType];
  const tile = state.terrain[state.guy.tile.x][state.guy.tile.y];
  if (action.construction && tile.construction?.type === action.construction) {
    state.guy.storedPosition = { ...state.guy.position };
    goTo(tile.construction.lastGuyPosition);
  } else {
    const impossibleText = action.getImpossibleText?.(tile);
    if (impossibleText) {
      openPaper(impossibleText, false);
      return;
    }
    state.guy.active = false;
  }
  state.guy.action = {
    type: actionType,
    step: 0
  };
};

export default startAction;