import createShortRoute from './createShortRoute.js';
import state from '../../state/state.js';

const goToOnTile = (onTile) => {
  const tile = state.terrain[state.guy.tile.x][state.guy.tile.y];
  state.guy.route = createShortRoute(
    state.guy.tile, 
    {
      x: tile.position.x + onTile.x,
      y: tile.position.y + onTile.y
    }
  );
  state.guy.active = true;
};

export default goToOnTile;