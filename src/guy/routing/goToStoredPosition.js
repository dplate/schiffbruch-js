import goTo from './goTo.js';
import state from '../../state/state.js';

const goToStoredPosition = () => goTo(state.guy.storedPosition);

export default goToStoredPosition;