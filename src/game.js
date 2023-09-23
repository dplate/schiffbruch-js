import loadImages from './images/loadImages.js';
import animateTerrain from './terrain/animateTerrain.js';
import loadSounds from './sounds/loadSounds.js';
import playTerrainSounds from './terrain/playTerrainSounds.js';
import updateCamera from './camera/updateCamera.js';
import restrictCamera from './camera/restrictCamera.js';
import discoverTerrain from './guy/discoverTerrain.js';
import animateGuy from './guy/animateGuy.js';
import canvases from './images/canvases.js';
import texts from './interface/text/texts.js';
import state from './state/state.js';
import animateButtons from './interface/menu/animateButtons.js';
import startAction from './action/startAction.js';
import actionTypes from './action/actionTypes.js';
import processAction from './action/processAction.js';
import drawCredits from './credits/drawCredits.js';
import phases from './state/phases.js';
import drawLogo from './state/drawLogo.js';
import drawPlay from './state/drawPlay.js';
import actions from './action/actions.js';
import initKeyboard from './interface/control/keyboard/initKeyboard.js';
import handleKeyboard from './interface/control/keyboard/handleKeyboard.js';
import initMouse from './interface/control/mouse/initMouse.js';
import handleMouseHovers from './interface/control/mouse/handleMouseHovers.js';
import handleTap from './interface/control/handleTap.js';
import handleTouch from './interface/control/handleTouch.js';
import cursor from './interface/control/mouse/cursor.js';

const MAXXKACH = 61    //Anzahl der Kacheln
const MAXYKACH = 61;
const MAXX = 800; //Bildschirmauflösung
const MAXY = 600;

let timestampInSeconds;            //Start der Sekunde
let frame, framesPerSecond;    //Anzahl der Bilder in der Sekunde

const initCanvases = async (window) => {
  const primaryCanvas = window.document.createElement('canvas');
  primaryCanvas.id = 'primaryCanvas';
  primaryCanvas.width = MAXX;
  primaryCanvas.height = MAXY;
  window.document.body.appendChild(primaryCanvas);
  //window.document.body.requestFullscreen();
  canvases.PRIMARY = primaryCanvas.getContext('2d');
  canvases.PRIMARY.imageSmoothingEnabled = false;

  //In diese Surface soll die MiniMap gespeichert werden
  const minimapCanvas = window.document.createElement('canvas');
  minimapCanvas.width = 2 * MAXXKACH;
  minimapCanvas.height = 2 * MAXYKACH;
  canvases.MINIMAP = minimapCanvas.getContext('2d');

  //In diese Surface soll die Schrift gespeichert werden
  const textCanvas = window.document.createElement('canvas');
  textCanvas.width = MAXX;
  textCanvas.height = MAXY;
  canvases.TEXT = textCanvas.getContext('2d');

  const treasureMapCanvas = window.document.createElement('canvas');
  treasureMapCanvas.width = 370;
  treasureMapCanvas.height = 370;
  canvases.TREASURE_MAP = treasureMapCanvas.getContext('2d');
}

const initInput = (window) => {
  initMouse(window);
  initKeyboard(window);
}

const InitStructs = () => {
  framesPerSecond = 100;
  frame = 0;
  timestampInSeconds = 0;
}

const Animationen = () => {
  animateTerrain(frame, framesPerSecond);
  animateButtons(frame, framesPerSecond, cursor);
  if (!state.paper) {
    animateGuy(frame, framesPerSecond);
  }
}

const refresh = (timestamp) => {
  frame++;
  const newTimestampInSeconds = timestamp / 1000;
  if (timestampInSeconds + 5 < newTimestampInSeconds) {
    timestampInSeconds = newTimestampInSeconds;
    framesPerSecond = (framesPerSecond + frame / 5) / 2;
    frame = 0;
    if (framesPerSecond === 0) framesPerSecond = 50;
  }

  handleKeyboard();
  
  if (state.phase === phases.LOGO) {
    drawLogo()
  } else if (state.phase === phases.PLAY) {
    if (state.calendar.minutes > (12 * 60) && (state.guy.action?.type !== actionTypes.ENDING_DAY))  //Hier ist der Tag zuende
    {
      startAction(actionTypes.ENDING_DAY);
    }

    handleMouseHovers();
    if (!actions[state.guy.action?.type]?.movie || state.paper) {
      handleTap();
      handleTouch();
    }
    restrictCamera();            //Das Scrollen an die Grenzen der Landschaft anpassen
    Animationen();            //Die Animationsphasen weiterschalten
    discoverTerrain();
    playTerrainSounds();
    processAction();

    if (state.phase !== phases.PLAY) {
      return true;
    }

    if (actions[state.guy.action?.type]?.movie) {
      updateCamera(state.guy.position, true);
    }
    drawPlay();

  } else if (state.phase === phases.CREDITS) {
    drawCredits(frame, framesPerSecond);
  }
  return true;
}

const run = async (window) => {
  await loadImages();
  await initCanvases(window);
  await loadSounds();
  initInput(window);
  texts.init('de');

  InitStructs();

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
