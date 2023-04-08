import spriteTypes from '../../images/spriteTypes.js';
import sprites from '../../images/sprites.js';

const createWaves = () => ({
  sprite: spriteTypes.WAVES,
  x: 9,
  y: 23,
  reverse: Math.random() < 0.5,
  frame: Math.floor(Math.random() * sprites[spriteTypes.WAVES].frameCount)
});

export default createWaves;