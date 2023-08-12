import createShortRoute from './createShortRoute.js';
import state from '../../state/state.js';

const goTo = (destination) => {
  state.guy.route = createShortRoute(state.guy.tile, destination);
  state.guy.active = true;
};

export default goTo;