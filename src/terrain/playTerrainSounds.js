import sprites from '../images/sprites.js';
import state from '../state/state.js';

const playTerrainSounds = () => {
  const terrain = state.terrain;
  const terrainSounds = [];
  for (let x in terrain) {
    for (let y in terrain[x]) {
      const object = terrain[x][y].object;
      if (object) {
        const sound = sprites[object.sprite].sound;
        if (sound) {
          const xDiff = state.guy.tile.x - x;
          const yDiff = state.guy.tile.y - y;
          const distance = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
          const gain = 1 / (2 ** distance);
          const terrainSound = terrainSounds.find(terrainSound => terrainSound.sound === sound);
          if (terrainSound) {
            terrainSound.gain = Math.max(gain, terrainSound.gain);
          } else {
            terrainSounds.push({ sound, gain });
          }
        }
      }
    }
  }
  terrainSounds.forEach((terrainSound) => {
    terrainSound.sound.instance.play(true);
    terrainSound.sound.instance.setGain(terrainSound.gain);
  });
};

export default playTerrainSounds;