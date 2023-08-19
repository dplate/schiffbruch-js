import audio from './audio.js';
import sounds from './sounds.js';

const loadSounds = () => {
  const promises = Object.keys(sounds).map(async (soundType) => {
    sounds[soundType].instance = await audio.load(sounds[soundType].file, sounds[soundType].baseGain);
  })
  return Promise.all(promises);
};

export default loadSounds;