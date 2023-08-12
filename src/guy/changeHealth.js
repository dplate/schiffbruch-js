import state from '../state/state.js';

const changeHealth = (healthDifference) => {
  state.guy.health = Math.max(0, Math.min(100, state.guy.health + healthDifference));
};

export default changeHealth;