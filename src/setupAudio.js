const createSound = (audioContext, audioBuffer) => {
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
        gainNode.gain.value = gain;
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
    load: async (name) => {
      const response = await fetch('/sounds/' + name + '.mp3');
      const buffer = await response.arrayBuffer();
      const audioBuffer = await audioContext.decodeAudioData(buffer);
      const sound = createSound(audioContext, audioBuffer);
      sounds.push(sound);
      return sound;
    },
  };
};

export default setupAudio;