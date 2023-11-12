import sprites from '../images/sprites.js';
import state from '../state/state.js';

const maxTileDistance = 3;

const playTerrainSounds = () => {
  const terrain = state.terrain;
  const terrainSounds = [];

  const terrainWidth = state.terrain.length;
  const terrainHeight = state.terrain[0].length;
  for (let x = Math.max(0, state.guy.tile.x - maxTileDistance); x < Math.min(terrainWidth, state.guy.tile.x + maxTileDistance + 1); x++) {
    for (let y = Math.max(0, state.guy.tile.y - maxTileDistance); y < Math.min(terrainHeight, state.guy.tile.y + maxTileDistance + 1); y++) {
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
    terrainSound.sound.instance.play(false);
    terrainSound.sound.instance.setGain(terrainSound.gain);
  });
};

export default playTerrainSounds;