import state from '../state/state.js';
import startAction from '../action/startAction.js';
import actionTypes from '../action/actionTypes.js';

const changeHealth = (healthDifference) => {
  state.guy.health = Math.max(0, Math.min(100, state.guy.health + healthDifference));

  if (state.guy.health <= 0 && 
    state.guy.action?.type !== actionTypes.DYING && 
    state.guy.action?.type !== actionTypes.ENDING_DAY) {
    startAction(actionTypes.DYING);
  }
};

export default changeHealth;