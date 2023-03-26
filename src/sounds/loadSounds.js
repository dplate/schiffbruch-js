import sounds from './sounds.js';

const loadSounds = (audio) => {
  const promises = Object.keys(sounds).map(async (soundType) => {
    sounds[soundType].instance = await audio.load(sounds[soundType].file, sounds[soundType].baseGain);
  })
  return Promise.all(promises);
};

export default loadSounds;