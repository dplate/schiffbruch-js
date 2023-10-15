import sprites from '../images/sprites.js';
import state from '../state/state.js';
import animateRoute from './routing/animateRoute.js';

const animateGuy = (elapsedTime) => {
  if (!state.guy.active) {
    return;
  }

  if (state.guy.route.length) {
    animateRoute(elapsedTime);
    return;
  }
   
  const sprite = sprites[state.guy.sprite];
  state.guy.frame += elapsedTime * sprite.speed / 1000;
  if (state.guy.frame >= sprite.frameCount) {
    state.guy.frame = sprite.frameCount - 1;
    state.guy.active = false;
  }
};

export default animateGuy;