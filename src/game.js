import loadImages from './images/loadImages.js';
import loadSounds from './sounds/loadSounds.js';
import texts from './interface/text/texts.js';
import state from './state/state.js';
import phases from './state/phases.js';
import refresh from './refresh.js';
import initControl from './interface/control/initControl.js';
import initCanvases from './images/initCanvases.js';
import resizeCanvases from './images/resizeCanvases.js';
import audio from './sounds/audio.js';
import saveState from './state/saveState.js';
import actions from './action/actions.js';

const run = async (window, language) => {
  window.document.getElementById('start').style.display = 'none';
  window.document.body.style.background = 'none';
  
  await loadImages(language);
  await initCanvases(window);
  await loadSounds();
  initControl(window);
  texts.init(language);
  resizeCanvases(window.innerWidth, window.innerHeight)

  await new Promise((resolve) => {
    const loop = (timestamp) => {
      refresh(timestamp);
      if (state.phase === phases.EXIT) {
        resolve();
      } else {
        window.requestAnimationFrame(loop);        
      }
    }
    window.requestAnimationFrame(loop);
  });

  window.location.reload();
};

const setFullScreenAndRun = (event, window, language) => {
  window.document.body.requestFullscreen({ navigationUI: 'hide' });
  run(window, language);
  event.stopPropagation();
};

const language = navigator.language.split('-')[0] === 'de' ? 'de' : 'en';
window.document.getElementById('ship').onclick = (event) => setFullScreenAndRun(event, window, language);
window.document.getElementById('start-de').onclick = (event) => setFullScreenAndRun(event, window, 'de');
window.document.getElementById('start-en').onclick = (event) => setFullScreenAndRun(event, window, 'en');

window.addEventListener(
  'resize', 
  () => resizeCanvases(window.innerWidth, window.innerHeight), 
  false
);

window.document.addEventListener("visibilitychange", () => {
  if (window.document.visibilityState === "visible") {
    audio?.resume()
  } else {
    audio?.suspend();
    if (state.phase === phases.PLAY && !actions[state.guy.action?.type]?.movie) {
      saveState();
    } 
  }
});
