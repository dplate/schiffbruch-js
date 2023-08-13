import positionTransformer from '../../terrain/positionTransformer.js';
import minimapScaling from './minimapScaling.js';
import state from '../../state/state.js';

const moveCameraFromMinimap = (positionInMinimap) => {
  const position = positionTransformer.toPixel(
    positionInMinimap.x / minimapScaling,
    positionInMinimap.y / minimapScaling
  )

  state.camera.x = Math.round(position.x - state.camera.width / 2);
  state.camera.y = Math.round(position.y - state.camera.height / 2);
};

export default moveCameraFromMinimap