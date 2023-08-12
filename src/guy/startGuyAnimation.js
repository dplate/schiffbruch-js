import state from '../state/state.js';
const startGuyAnimation = (sprite) => {
  state.guy.sprite = sprite;
  state.guy.frame = 0;
  state.guy.active = true;
};

export default startGuyAnimation;