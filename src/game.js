import loadImages from './images/loadImages.js';
import animateTerrain from './terrain/animateTerrain.js';
import loadSounds from './sounds/loadSounds.js';
import playTerrainSounds from './terrain/playTerrainSounds.js';
import spriteTypes from './images/spriteTypes.js';
import updateCamera from './camera/updateCamera.js';
import restrictCamera from './camera/restrictCamera.js';
import findRoute from './guy/routing/findRoute.js';
import items from './guy/inventory/items.js';
import changeItem from './guy/inventory/changeItem.js';
import findItemUnderCursor from './guy/inventory/findItemUnderCursor.js';
import itemTextIds from './guy/inventory/itemTextIds.js';
import updateMinimap from './interface/minimap/updateMinimap.js';
import discoverTerrain from './guy/discoverTerrain.js';
import animateGuy from './guy/animateGuy.js';
import sounds from './sounds/sounds.js';
import textAreas from './interface/text/textAreas.js';
import clearText from './interface/text/clearText.js';
import closePaper from './interface/text/closePaper.js';
import canvases from './images/canvases.js';
import getTileByPosition from './terrain/getTileByPosition.js';
import texts from './interface/text/texts.js';
import drawStatusText from './interface/text/drawStatusText.js';
import drawTileText from './terrain/tiles/drawTileText.js';
import moveCameraFromMinimap from './interface/minimap/moveCameraFromMinimap.js';
import state from './state/state.js';
import animateButtons from './interface/menu/animateButtons.js';
import menuTypes from './interface/menu/menuTypes.js';
import handleButtonTaps from './interface/menu/handleButtonTaps.js';
import handleButtonHovers from './interface/menu/handleButtonHovers.js';
import startAction from './action/startAction.js';
import actionTypes from './action/actionTypes.js';
import getButtonAtPosition from './interface/menu/getButtonAtPosition.js';
import processAction from './action/processAction.js';
import drawCredits from './credits/drawCredits.js';
import phases from './state/phases.js';
import startNewGame from './state/startNewGame.js';
import workbench from './guy/inventory/workbench.js';
import cursor from './interface/cursor/cursor.js';
import drawLogo from './state/drawLogo.js';
import drawPlay from './state/drawPlay.js';
import loadState from './state/loadState.js';
import actions from './action/actions.js';
import handleItemTap from './guy/inventory/handleItemTap.js';

const MAXXKACH = 61    //Anzahl der Kacheln
const MAXYKACH = 61;
const MAXX = 800; //Bildschirmauflösung
const MAXY = 600;

// Input
const mouseUpdates = {
  x: 0,
  y: 0,
  rgbButtons: []
};
const pressedKeyCodes = {};
let Button0down;    //linke Maustaste gedrückt gehalten
let Button1down;    //rechte Maustaste gedrückt gehalten
let timestampInSeconds;            //Start der Sekunde
let frame, framesPerSecond;    //Anzahl der Bilder in der Sekunde

//Bereiche
const rcPanel = { left: MAXX - 205, top: 0, right: MAXX, bottom: MAXY };
const rcKarte = { left: MAXX - 158, top: 23, right: MAXX - 158 + MAXXKACH * 2, bottom: 23 + MAXYKACH * 2 };

const MousePosition = { x: null, y: null }; // Aktuelle Mauskoordinaten

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
  window.document.onmousemove = (event) => {
    const rect = canvases.PRIMARY.canvas.getBoundingClientRect();
    mouseUpdates.x = Math.min(rect.width, Math.max(0, event.clientX - rect.left));
    mouseUpdates.y = Math.min(rect.height, Math.max(0, event.clientY - rect.top));
  };

  window.document.onmousedown = (event) => {
    mouseUpdates.rgbButtons[0] = event.buttons & 1;
    mouseUpdates.rgbButtons[1] = event.buttons & 2;
  };

  window.document.onmouseup = (event) => {
    mouseUpdates.rgbButtons[0] = event.buttons & 1;
    mouseUpdates.rgbButtons[1] = event.buttons & 2;
  };

  window.document.addEventListener("keydown", (event) => {
    pressedKeyCodes[event.code] = true;
  });

  window.document.addEventListener("keyup", (event) => {
    pressedKeyCodes[event.code] = false;
  });
}

const InitStructs = () => {
  framesPerSecond = 100;
  frame = 0;
  timestampInSeconds = 0;
  MousePosition.x = MAXX / 2;
  MousePosition.y = MAXY / 2;
  Button0down = false;
  Button1down = false;
}

const CheckMouse = () => {
  let Button; //Welcher Knopf ist gedrückt worden
  let Push;    //Knopf gedrückt(1) oder losgelassen(-1) oder gedrückt(0) gehalten
  let xDiff, yDiff; //Die Differenz zur vorherigen Position ((Für Scrollen)

  //Mausbewegung
  xDiff = MousePosition.x - mouseUpdates.x;
  MousePosition.x = mouseUpdates.x;
  if (MousePosition.x < 0) MousePosition.x = 0;
  if (MousePosition.x > MAXX - 2) MousePosition.x = MAXX - 2;
  yDiff = MousePosition.y - mouseUpdates.y;
  MousePosition.y = mouseUpdates.y;
  if (MousePosition.y < 0) MousePosition.y = 0;
  if (MousePosition.y > MAXY - 2) MousePosition.y = MAXY - 2;
  cursor.x = MousePosition.x;
  cursor.y = MousePosition.y;

  if (!workbench.selectedItem) {
    if (state.guy.active) {
      if (getButtonAtPosition(MousePosition)?.sprite === spriteTypes.BUTTON_STOPPING) {   
        cursor.sprite = spriteTypes.CURSOR_ARROW;
      } else {
        cursor.sprite = spriteTypes.CURSOR_WAIT;
      }
    } else cursor.sprite = spriteTypes.CURSOR_ARROW;;
  }
  Button = -1;

  if (mouseUpdates.rgbButtons[0]) {
    Button = 0;
    if (Button0down) Push = 0;
    else {
      Push = 1;
      Button0down = true;
    }
  } else {
    if (Button0down) {
      Button = 0;
      Push = -1;
      Button0down = false;
    }
  }

  if (mouseUpdates.rgbButtons[1]) {
    Button = 1;
    if (Button1down) Push = 0;
    else {
      Push = 1;
      Button1down = true;
    }
  } else {
    if (Button1down) {
      Button = 1;
      Push = -1;
      Button1down = false;
    }
  }

  //Wenn ein Text steht, dann bei Mausdruck Text weg
  if (state.paper) {
    if (state.paper.question) {
      if (InRect(
        MousePosition.x, 
        MousePosition.y, 
        { 
          left: state.paper.question.yes.x,
          top: state.paper.question.yes.y,
          right: state.paper.question.yes.x + state.paper.question.yes.width,
          bottom: state.paper.question.yes.y + state.paper.question.yes.height,
        }
      )) {
        cursor.sprite = spriteTypes.CURSOR_ARROW;
        if ((Button === 0) && (Push === 1)) {
          state.paper.question.answer = true;
          state.guy.active = false;
          sounds.CLICK2.instance.play();
        }
      } else if (InRect(
        MousePosition.x, 
        MousePosition.y, 
        { 
          left: state.paper.question.no.x,
          top: state.paper.question.no.y,
          right: state.paper.question.no.x + state.paper.question.no.width,
          bottom: state.paper.question.no.y + state.paper.question.no.height,
        }
      )) {
        cursor.sprite = spriteTypes.CURSOR_ARROW;
        if ((Button === 0) && (Push === 1)) {
          state.paper.question.answer = false;
          state.guy.active = false;
          sounds.CLICK2.instance.play();
        }
      } else if ((Button === 0) && (Push === 1)) {
        sounds.CLICK.instance.play();
      }
    } else if ((Button !== -1) && (Push === 1)) {
      closePaper();
    }
    return;
  }

  //Text löschen (werden dann von den MouseIn.. Sachen neu angestellt
  clearText(textAreas.STATUS);

  //Wenn der Guy aktiv dann linke Mouse-Buttons ignorieren
  if (state.guy.active && (Button === 0)) {
    if (getButtonAtPosition(MousePosition)?.sprite !== spriteTypes.BUTTON_STOPPING) {
      Button = -1;
    }
  }

  //die Maus ist in der Spielflaeche .
  if (InRect(MousePosition.x, MousePosition.y, { left: 0, top: 0, right: state.camera.width, bottom: state.camera.height }))
    MouseInSpielflaeche(Button, Push, xDiff, yDiff);
  //die Maus ist im Panel .
  if (InRect(MousePosition.x, MousePosition.y, rcPanel))
    MouseInPanel(Button, Push);
}

const MarkKeysAsProcessed = () => {
  Object.keys(pressedKeyCodes).forEach(code => pressedKeyCodes[code] = false);
};

const CheckKey = () => {
  const DIK_ESCAPE = 'Escape';
  const DIK_RETURN = 'Enter';
  const DIK_SPACE = 'Space';
  const DIK_UP = 'ArrowUp';
  const DIK_RIGHT = 'ArrowRight';
  const DIK_DOWN = 'ArrowDown';
  const DIK_LEFT = 'ArrowLeft';
  const DIK_F11 = 'F11';
  const DIK_G = 'KeyG';
  const DIK_C = 'KeyC';
  const DIK_I = 'KeyI';
  const DIK_W = 'KeyW';
  const DIK_E = 'KeyE';
  const pressedCancel = pressedKeyCodes[DIK_ESCAPE] || pressedKeyCodes[DIK_RETURN] || pressedKeyCodes[DIK_SPACE];

  if (state.phase === phases.LOGO) {
    //Logo Abbrechen
    if (pressedCancel) {
      sounds.LOGO.instance.stop();
      if (!loadState()) {
        startNewGame();
      }
      MarkKeysAsProcessed();
      return (2);
    }
  } else if (state.phase === phases.PLAY) {
    const fastForward = actions[state.guy.action?.type]?.fastForward;
    if (fastForward && pressedCancel) {
      fastForward();
      MarkKeysAsProcessed();
      return (2);
    }

    if (pressedKeyCodes[DIK_RIGHT]) state.camera.x += 10;
    if (pressedKeyCodes[DIK_LEFT]) state.camera.x -= 10;
    if (pressedKeyCodes[DIK_DOWN]) state.camera.y += 10;
    if (pressedKeyCodes[DIK_UP]) state.camera.y -= 10;
    if (pressedKeyCodes[DIK_ESCAPE]) {
      startAction(actionTypes.STOPPING_GAME);
      MarkKeysAsProcessed();
    }
    if (pressedKeyCodes[DIK_F11]) {
      startAction(actionTypes.RESTARTING_GAME);
      MarkKeysAsProcessed();
    }
    if (pressedKeyCodes[DIK_G]) {
      state.options.grid = !state.options.grid;
      MarkKeysAsProcessed();
    }

    if (pressedKeyCodes[DIK_C])  //Zum testen
    {
      state.terrain.forEach((terrainColumn) => {
        terrainColumn.forEach((tile) => {
          tile.discovered = true;
        });
      });
      updateMinimap();
      MarkKeysAsProcessed();
    }

    if (pressedKeyCodes[DIK_I])  //Zum testen
    {
      changeItem(items.BRANCH, 10);
      changeItem(items.STONE, 10);
      changeItem(items.LEAF, 10);
      changeItem(items.LIANA, 10);
      changeItem(items.LOG, 10);
      MarkKeysAsProcessed();
    }
    if (pressedKeyCodes[DIK_W])  //Zum testen
    {
      changeItem(items.AXE, 1);
      changeItem(items.HARROW, 1);
      changeItem(items.FISHING_ROD, 1);
      changeItem(items.HAMMER, 1);
      changeItem(items.SPYGLASS, 1);
      changeItem(items.MATCHES, 1);
      changeItem(items.SHOVEL, 1);
      changeItem(items.MAP, 1);
      changeItem(items.SLING, 1);
      MarkKeysAsProcessed();
    }
    if (pressedKeyCodes[DIK_E])  //Zum testen
    {
      state.guy.cheatChance = (state.guy.cheatChance || 0) + 1;
      MarkKeysAsProcessed();
    }
  } else if (state.phase === phases.CREDITS) {
    if (pressedCancel) {
      MarkKeysAsProcessed();
      return (0);
    }
  }
  return (1);
}

const MouseInSpielflaeche = (Button, Push, xDiff, yDiff) => {
  const tilePosition = getTileByPosition({ x: MousePosition.x + state.camera.x, y: MousePosition.y + state.camera.y });
  if (tilePosition && state.terrain[tilePosition.x][tilePosition.y].discovered) {
    drawTileText(state.terrain[tilePosition.x][tilePosition.y]);

    //Wenn Maustaste gedrückt wird
    if ((Button === 0) && (Push === 1)) {
      if (!state.guy.active &&
        (tilePosition.x !== state.guy.tile.x || tilePosition.y !== state.guy.tile.y) &&
        (tilePosition.x > 0) && (tilePosition.x < MAXXKACH - 1) &&
        (tilePosition.y > 0) && (tilePosition.y < MAXYKACH - 1)) {

        console.log(state, state.terrain[tilePosition.x][tilePosition.y]);
        sounds.CLICK2.instance.play();
        if (state.guy.route.length &&
          (tilePosition.x === state.guy.route[state.guy.route.length - 1].x) &&
          (tilePosition.y === state.guy.route[state.guy.route.length - 1].y)) {
          state.guy.active = true;
        } else {
          state.guy.route = findRoute(tilePosition);
        }
      } else {
        sounds.CLICK.instance.play();
      }
    }
  }

  //rechte Maustastescrollen
  if ((Button === 1) && (Push === 0)) {
    state.camera.x += xDiff;
    state.camera.y += yDiff;
    cursor.sprite = spriteTypes.CURSOR_MOVE;
  }
}

const MouseInPanel = (Button, Push) => {
  //wenn die Maus in der Minimap ist .
  if ((InRect(MousePosition.x, MousePosition.y, rcKarte)) && (Button === 0) && (Push !== -1)) {
    moveCameraFromMinimap({ x: MousePosition.x - rcKarte.left, y: MousePosition.y - rcKarte.top });
    return;
  } 
  
  if (state.options.openedMenu === menuTypes.INVENTORY) {
    const item = findItemUnderCursor(MousePosition);
    if (item || workbench.selectedItem) {
      if (item) {
        if ((Button === 0) && (Push === 1)) {
          handleItemTap(item);
        }
        drawStatusText(texts[itemTextIds[item]]);
      }
      return;
    };
  } 

  if (InRect(
    MousePosition.x, 
    MousePosition.y, 
    {
      left: textAreas.TIME.x,
      top: textAreas.TIME.y,
      right: textAreas.TIME.x + textAreas.TIME.width,
      bottom: textAreas.TIME.y + textAreas.TIME.height
    }
  )) {
    drawStatusText(texts.SOSPAET);
    return;
  } 

  if (InRect(
    MousePosition.x, 
    MousePosition.y, 
    {
      left: textAreas.CHANCE.x,
      top: textAreas.CHANCE.y,
      right: textAreas.CHANCE.x + textAreas.CHANCE.width,
      bottom: textAreas.CHANCE.y + textAreas.CHANCE.height
    }
  )) {
    drawStatusText(texts.CHANCETEXT);
    return;
  }

  handleButtonHovers(MousePosition);
  if ((Button === 0) && (Push === 1)) {
    handleButtonTaps(MousePosition);
  };
  workbench.selectedItem = null;
}

const InRect = (x, y, rcRect) => {
  return (x <= rcRect.right) && (x >= rcRect.left) &&
    (y <= rcRect.bottom) && (y >= rcRect.top);
}

const Animationen = () => {
  animateTerrain(frame, framesPerSecond);
  animateButtons(frame, framesPerSecond, MousePosition);
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

  if (state.phase === phases.LOGO) {
    if (CheckKey() === 2) return true;    //Das Keyboard abfragen
    drawLogo()
  } else if (state.phase === phases.PLAY) {
    if (state.calendar.minutes > (12 * 60) && (state.guy.action?.type !== actionTypes.ENDING_DAY))  //Hier ist der Tag zuende
    {
      startAction(actionTypes.ENDING_DAY);
    }

    if (!actions[state.guy.action?.type]?.movie || state.paper) {
      CheckMouse();    //Den MouseZustand abchecken
    }
    CheckKey();
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
    if (CheckKey() === 0) return false;
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
      if (refresh(timestamp)) {
        window.requestAnimationFrame(loop);
      } else {
        resolve();
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
