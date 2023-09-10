import state from './state.js';

const saveState = () => {
  if (state.guy.health > 10) {
    window.localStorage.setItem('stateV10', JSON.stringify(state));
  }
};

export default saveState;