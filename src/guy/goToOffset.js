import goTo from './goTo.js';

const goToOffset = (gameData, offsetX, offsetY) => {
  goTo(gameData, {
    x: gameData.guy.position.x + offsetX,
    y: gameData.guy.position.y + offsetY
  });
};

export default goToOffset;