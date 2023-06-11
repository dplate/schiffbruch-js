import goToCenterOfTile from '../guy/routing/goToCenterOfTile.js';

const pauseConstruction = (gameData) => {
  const construction = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].construction;
  if (construction) {
    construction.lastGuyPosition = {
      x: gameData.guy.position.x,
      y: gameData.guy.position.y
    }
  }
  goToCenterOfTile(gameData);
};

export default pauseConstruction;