import updateMinimap from '../terrain/updateMinimap.js';

const discoverTerrain = (gameData) => {
  let newDiscovery = false;
  
  for (let x = gameData.guy.tile.x - 1; x <= gameData.guy.tile.x + 1; x++) {
    for (let y = gameData.guy.tile.y - 1; y <= gameData.guy.tile.y + 1; y++) {
      const tile = gameData.terrain[x]?.[y];
      if (tile && !tile.discovered) {
        tile.discovered = true;
        newDiscovery = true;
      }
    }
  }

  if (newDiscovery) {
    updateMinimap(gameData.terrain);
  }
}

export default discoverTerrain;