import goToObject from '../../guy/routing/goToObject.js';
import state from '../../state/state.js';
import directions from '../../terrain/directions.js';
import grounds from '../../terrain/tiles/grounds.js';
import findNeighbor from '../../guy/findNeighbor.js';
import goToWestOfTile from '../../guy/routing/goToWestOfTile.js';
import goToNorthOfTile from '../../guy/routing/goToNorthOfTile.js';
import goToEastOfTile from '../../guy/routing/goToEastOfTile.js';
import spriteTypes from '../../images/spriteTypes.js';
import goToCenterOfTile from '../../guy/routing/goToCenterOfTile.js';

const isCoast = (tile) => tile.ground !== grounds.SEA;

const paddleToCoast = () => {
  const neighbor = findNeighbor(isCoast);
  switch(neighbor.direction) {
    case directions.WEST:
      goToWestOfTile();
      return;
    case directions.NORTH:
      goToNorthOfTile();
      return;  
    case directions.EAST:
      goToEastOfTile();
      return;
    case directions.SOUTH:
      goToSouthOfTile();
      return;      
  }
};

const switchToBoat = () => {
  const neighbor = findNeighbor(isCoast);

  state.guy.tile.x = neighbor.x;
  state.guy.tile.y = neighbor.y;

  neighbor.tile.object = {
    sprite: spriteTypes.BOAT,
    x: Math.round(state.guy.position.x - neighbor.tile.position.x),
    y: Math.round(state.guy.position.y - neighbor.tile.position.y),
    frame: (neighbor.direction === directions.WEST || neighbor.direction === directions.EAST) ? 0 : 1
  };

  goToCenterOfTile();
};

const docking = {
  steps: [
    paddleToCoast,
    switchToBoat,
  ]
};

export default docking;