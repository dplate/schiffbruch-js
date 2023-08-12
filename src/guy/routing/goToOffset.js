import goTo from './goTo.js';
import state from '../../state/state.js';

const goToOffset = (offsetX, offsetY) => {
  goTo({
    x: state.guy.position.x + offsetX,
    y: state.guy.position.y + offsetY
  });
};

export default goToOffset;