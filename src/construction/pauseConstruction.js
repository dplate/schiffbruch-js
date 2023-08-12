import goToCenterOfTile from '../guy/routing/goToCenterOfTile.js';
import state from '../state/state.js';

const pauseConstruction = () => {
  const construction = state.terrain[state.guy.tile.x][state.guy.tile.y].construction;
  if (construction) {
    construction.lastGuyPosition = {
      x: state.guy.position.x,
      y: state.guy.position.y
    }
  }
  goToCenterOfTile();
};

export default pauseConstruction;