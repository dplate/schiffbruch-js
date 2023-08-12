import grounds from '../terrain/tiles/grounds.js';
import state from '../state/state.js';

const isOnSea = () => {
  const currentTile = state.terrain[state.guy.tile.x][state.guy.tile.y];
  return currentTile.ground === grounds.SEA;
};

export default isOnSea;