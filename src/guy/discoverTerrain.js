import updateMinimap from '../interface/minimap/updateMinimap.js';
import state from '../state/state.js';

const discoverTerrain = (distance = 1) => {
  let newDiscovery = false;
  
  const guyTile = state.terrain[state.guy.tile.x][state.guy.tile.y];
  for (let x = state.guy.tile.x - distance; x <= state.guy.tile.x + distance; x++) {
    for (let y = state.guy.tile.y - distance; y <= state.guy.tile.y + distance; y++) {
      const tile = state.terrain[x]?.[y];
      const currentDistance = Math.max(Math.abs(state.guy.tile.x - x), Math.abs(state.guy.tile.y - y));
      const visible = currentDistance <= 1 ||
        (currentDistance === 2 && guyTile.height >= tile?.height) ||
        (currentDistance > 2 && guyTile.height > tile?.height);
      if (tile && !tile.discovered && visible) {
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