const createSound = (audioContext, audioBuffer, baseGain) => {
  let source = null;

  const gainNode = audioContext.createGain();
  gainNode.connect(audioContext.destination);

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

const setupAudio = () => {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const sounds = [];

  return {
    suspend: () => {
      audioContext.suspend();
    },
    resume: () => {
      audioContext.resume();
    },
    isRunning: () => audioContext.state === 'running',
    load: async (name, baseGain = 1) => {
      const response = await fetch('./sounds/' + name + '.mp3');
      const buffer = await response.arrayBuffer();
      const audioBuffer = await audioContext.decodeAudioData(buffer);
      const sound = createSound(audioContext, audioBuffer, baseGain);
      sounds.push(sound);
      return sound;
    },
  };
};

export default setupAudio;