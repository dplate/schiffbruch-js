import sprites from '../images/sprites.js';
import state from '../state/state.js';
import animateRoute from './routing/animateRoute.js';

const animateGuy = (frame, framesPerSecond) => {
  if (!state.guy.active) {
    return;
  }

  const sprite = sprites[state.guy.sprite];
  const animateEveryThisFrame = Math.round(framesPerSecond / sprite.speed) || 1;
  if (frame % animateEveryThisFrame !== 0) {
    return;
  }

  if (state.guy.route.length) {
    animateRoute(frame);
    return;
  }
   
  state.guy.frame++;
  if (state.guy.frame >= sprite.frameCount) {
    state.guy.frame = sprite.frameCount - 1;
    state.guy.active = false;
  }
};

export default animateGuy;