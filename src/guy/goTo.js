import createShortRoute from './createShortRoute.js';

const goTo = (gameData, destination) => {
  gameData.guy.route = createShortRoute(gameData.guy.tile, destination);
  gameData.guy.active = true;
};

export default goTo;