import updateMinimap from '../interface/minimap/updateMinimap.js';
import state from '../state/state.js';

const discoverTerrain = () => {
  let newDiscovery = false;
  
  for (let x = state.guy.tile.x - 1; x <= state.guy.tile.x + 1; x++) {
    for (let y = state.guy.tile.y - 1; y <= state.guy.tile.y + 1; y++) {
      const tile = state.terrain[x]?.[y];
      if (tile && !tile.discovered) {
        tile.discovered = true;
        newDiscovery = true;
      }
    }
  }

  if (newDiscovery) {
    updateMinimap();
  }
}

export default discoverTerrain;