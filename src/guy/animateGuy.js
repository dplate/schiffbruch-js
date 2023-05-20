import sprites from '../images/sprites.js';
import animateRoute from './routing/animateRoute.js';

const animateGuy = (gameData, frame, framesPerSecond, addTimeLegacy) => {
  if (!gameData.guy.active) {
    return;
  }

  const sprite = sprites[gameData.guy.sprite];
  const animateEveryThisFrame = Math.round(framesPerSecond / sprite.speed) || 1;
  if (frame % animateEveryThisFrame !== 0) {
    return;
  }

  if (gameData.guy.route.length) {
    animateRoute(gameData, frame, addTimeLegacy);
    return;
  }
   
  gameData.guy.frame++;
  if (gameData.guy.frame >= sprite.frameCount) {
    gameData.guy.frame = sprite.frameCount - 1;
    gameData.guy.active = false;
  }
};

export default animateGuy;