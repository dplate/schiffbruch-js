import positionTransformer from '../terrain/positionTransformer.js';
import minimapScaling from './minimapScaling.js';

const moveCameraFromMinimap = (positionInMinimap, gameData) => {
  const position = positionTransformer.toPixel(
    gameData.terrain, 
    positionInMinimap.x / minimapScaling,
    positionInMinimap.y / minimapScaling
  )

  gameData.camera.x = Math.round(position.x - gameData.camera.width / 2);
  gameData.camera.y = Math.round(position.y - gameData.camera.height / 2);
};

export default moveCameraFromMinimap