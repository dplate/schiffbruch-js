import goToObject from '../../guy/routing/goToObject.js';
import state from '../../state/state.js';
import grounds from '../../terrain/tiles/grounds.js';
import findNeighbor from '../../guy/findNeighbor.js';
import goToCenterOfTile from '../../guy/routing/goToCenterOfTile.js';

const switchToBoat = (tile) => {
  const neighbor = findNeighbor((tile) => tile.ground === grounds.SEA);
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