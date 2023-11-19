import state from '../state/state.js';
import isSea from '../terrain/tiles/isSea.js';

const isOnSea = () => isSea(state.terrain[state.guy.tile.x][state.guy.tile.y]);

export default isOnSea;