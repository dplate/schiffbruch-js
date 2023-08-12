import goToOnTile from './goToOnTile.js';
import state from '../../state/state.js';

const goToObject = (offsetX = 0, offsetY = 0) => {
  const tile = state.terrain[state.guy.tile.x][state.guy.tile.y];
  goToOnTile({
    x: tile.object.x + offsetX,
    y: tile.object.y + offsetY
  });
};

export default goToObject;