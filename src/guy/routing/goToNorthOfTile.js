import tileEdges from '../../terrain/tiles/tileEdges.js';
import goToOnTile from './goToOnTile.js';
import state from '../../state/state.js';

const goToNorthOfTile = () => {
  const tile = state.terrain[state.guy.tile.x][state.guy.tile.y];
  goToOnTile(tileEdges[tile.type].north);
};

export default goToNorthOfTile;