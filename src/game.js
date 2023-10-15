import loadImages from './images/loadImages.js';
import loadSounds from './sounds/loadSounds.js';
import texts from './interface/text/texts.js';
import state from './state/state.js';
import phases from './state/phases.js';
import refresh from './refresh.js';
import initControl from './interface/control/initControl.js';
import initCanvases from './images/initCanvases.js';
import resizeCanvases from './images/resizeCanvases.js';

const run = async (window) => {
  await loadImages();
  await initCanvases(window);
  await loadSounds();
  initControl(window);
  texts.init('de');
  resizeCanvases(window.innerWidth, window.innerHeight)

  return new Promise((resolve) => {
    const loop = (timestamp) => {
      refresh(timestamp);
      if (state.phase === phases.EXIT) {
        resolve();
      } else {
        window.requestAnimationFrame(loop);        
      }
    }
    window.requestAnimationFrame(loop);
  })
}

window.document.getElementById('start').onclick = async (event) => {
  event.target.style.display = 'none';
  await run(window);
  window.location.reload();
}

window.addEventListener(
  'resize', 
  () => {
    resizeCanvases(window.innerWidth, window.innerHeight)
  }, 
  false
);
