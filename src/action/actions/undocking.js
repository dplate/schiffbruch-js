import goToObject from '../../guy/routing/goToObject.js';
import state from '../../state/state.js';
import findNeighbor from '../../guy/findNeighbor.js';
import goToCenterOfTile from '../../guy/routing/goToCenterOfTile.js';
import isSea from '../../terrain/tiles/isSea.js';

const switchToBoat = (tile) => {
  const neighbor = findNeighbor(isSea);
  state.guy.tile.x = neighbor.x;
  state.guy.tile.y = neighbor.y;
  goToCenterOfTile();
  tile.object = null;
};

const undocking = {
  steps: [
    () => goToObject(),
    switchToBoat
  ]
};

export default undocking;