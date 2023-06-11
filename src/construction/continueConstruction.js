import goTo from '../guy/routing/goTo.js';

const continueConstruction = (gameData) => {
  const construction = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].construction;
  if (construction) {
    gameData.guy.storedPosition = { ...gameData.guy.position };
    goTo(gameData, construction.lastGuyPosition);
    return construction;
  }
  return null;
};

export default continueConstruction;