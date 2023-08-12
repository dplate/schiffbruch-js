import tileEdges from '../../terrain/tiles/tileEdges.js';
import goToOnTile from './goToOnTile.js';
import state from '../../state/state.js';

const goToWestOfTile = () => {
  const tile = state.terrain[state.guy.tile.x][state.guy.tile.y];
  goToOnTile(tileEdges[tile.type].west);
};

export default goToWestOfTile;