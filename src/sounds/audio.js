const createSound = (audioContext, audioBuffer, baseGain) => {
  let source = null;

  const gainNode = audioContext.createGain();
  gainNode.connect(audioContext.destination);
  gainNode.gain.value = baseGain;

  return {
    stop: () => {
      if (source) {
        source.stop();
        source.disconnect();
        source = null;
      }
    },
    setGain: (gain) => {
      if (source) {
        gainNode.gain.value = baseGain * gain;
      }
    },
    isPlaying: () => Boolean(source),
    play: (loop = false) => {
      if (!source) {
        source = audioContext.createBufferSource();
        source.connect(gainNode);
        source.loop = loop;
        source.buffer = audioBuffer;
        source.onended = () => {
          if (source) {
            source.disconnect();
            source = null;
          }
        };
        source.start();
      }
    }
  };
};

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const sounds = [];

const loadFile = (path) => {
  return new Promise((resolve, reject) => {
      try {
        const req = new XMLHttpRequest();
        req.open("GET", path, true);
        req.responseType = "arraybuffer";
        req.onload = () => resolve(req.response);
        req.send();
      } catch (e) {
          reject(e);
      }
  });
}

const audio = {
  suspend: () => {
    audioContext.suspend();
  },
  resume: () => {
    audioContext.resume();
  },
  isRunning: () => audioContext.state === 'running',
  load: async (name, baseGain = 1) => {
    const buffer = await loadFile('./sounds/' + name + '.mp3');
    const audioBuffer = await audioContext.decodeAudioData(buffer);
    const sound = createSound(audioContext, audioBuffer, baseGain);
    sounds.push(sound);
    return sound;
  },
  stopAll: () => {
    sounds.forEach(sound => sound.stop());
  }
};

export default audio;