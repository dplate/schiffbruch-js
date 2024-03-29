import spriteTypes from '../../images/spriteTypes.js';
import sprites from '../../images/sprites.js';

const createWaves = () => {
  if (Math.random() < 0.5) {
    return null;
  }
  return {
    sprite: spriteTypes.WAVES,
    x: Math.floor(Math.random() * 5),
    y: -Math.floor(Math.random() * 5),
    reverse: Math.random() < 0.5,
    frame: Math.floor(Math.random() * sprites[spriteTypes.WAVES].frameCount)
  };
};

export default createWaves;