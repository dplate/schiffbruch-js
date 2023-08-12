import goTo from '../guy/routing/goTo.js';
import state from '../state/state.js';

const continueConstruction = () => {
  const construction = state.terrain[state.guy.tile.x][state.guy.tile.y].construction;
  if (construction) {
    state.guy.storedPosition = { ...state.guy.position };
    goTo(construction.lastGuyPosition);
    return construction;
  }
  return null;
};

export default continueConstruction;