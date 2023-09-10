import audio from './sounds/audio.js';
import generateIsland from './terrain/generateIsland.js';
import setGrounds from './terrain/setGrounds.js';
import grounds from './terrain/tiles/grounds.js';
import tileEdges from './terrain/tiles/tileEdges.js';
import loadImages from './images/loadImages.js';
import createWaves from './terrain/objects/createWaves.js';
import animateTerrain from './terrain/animateTerrain.js';
import loadSounds from './sounds/loadSounds.js';
import playTerrainSounds from './terrain/playTerrainSounds.js';
import addRiver from './terrain/addRiver.js';
import spriteTypes from './images/spriteTypes.js';
import addTrees from './terrain/addTrees.js';
import hideTreasure from './treasure/hideTreasure.js';
import drawTerrain from './terrain/drawTerrain.js';
import drawTreasureMap from './treasure/drawTreasureMap.js';
import addPirateWreck from './terrain/addPirateWreck.js';
import addShipWreck from './terrain/addShipWreck.js';
import updateCamera from './camera/updateCamera.js';
import restrictCamera from './camera/restrictCamera.js';
import findRoute from './guy/routing/findRoute.js';
import goToCenterOfTile from './guy/routing/goToCenterOfTile.js';
import goToEastOfTile from './guy/routing/goToEastOfTile.js';
import isOnSea from './guy/isOnSea.js';
import createInventory from './guy/inventory/createInventory.js';
import items from './guy/inventory/items.js';
import changeItem from './guy/inventory/changeItem.js';
import findItemUnderCursor from './guy/inventory/findItemUnderCursor.js';
import itemTextIds from './guy/inventory/itemTextIds.js';
import itemSprites from './guy/inventory/itemSprites.js';
import drawItem from './guy/inventory/drawItem.js';
import updateMinimap from './interface/minimap/updateMinimap.js';
import discoverTerrain from './guy/discoverTerrain.js';
import animateGuy from './guy/animateGuy.js';
import sounds from './sounds/sounds.js';
import startGuyAnimation from './guy/startGuyAnimation.js';
import textAreas from './interface/text/textAreas.js';
import clearText from './interface/text/clearText.js';
import closePaper from './interface/text/closePaper.js';
import drawPaper from './interface/text/drawPaper.js';
import blitText from './interface/text/blitText.js';
import openPaper from './interface/text/openPaper.js';
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
import drawPanel from './interface/drawPanel.js';
import processAction from './action/processAction.js';
import drawCredits from './credits/drawCredits.js';
import phases from './state/phases.js';
import saveState from './state/saveState.js';
import loadState from './state/loadState.js';
import fade from './images/fade.js';

const MAXXKACH = 61    //Anzahl der Kacheln
const MAXYKACH = 61;
const MAXX = 800; //Bildschirmauflösung
const MAXY = 600;

const CUPFEIL = 0;
const CURICHTUNG = 1;
const CUUHR = 2;
const BILDANZ = CUUHR + 1; //Wieviele Bilder

//ddraw
let textfieldImage = null;
let logoImage = null;
let cursorsImage = null;

// Input
const mouseUpdates = {
  x: 0,
  y: 0,
  rgbButtons: []
};
const pressedKeyCodes = {};

let MouseAktiv = false;    // Mouse angestellt?
let CursorTyp;        //Welcher Cursortyp?
let Button0down;    //linke Maustaste gedrückt gehalten
let Button1down;    //rechte Maustaste gedrückt gehalten
let timestampInSeconds;            //Start der Sekunde
let frame, framesPerSecond;    //Anzahl der Bilder in der Sekunde
let rcRectdes = { left: null, top: null, right: null, bottom: null }; //Ständig benötigte Variable zum Blitten
let rcRectsrc = { left: null, top: null, right: null, bottom: null }; //Ständig benötigte Variable zum Blitten
let SelectedItem;                //Für Aktionen mit zwei Mausklicks

//Bereiche
const rcGesamt = { left: 0, top: 0, right: MAXX, bottom: MAXY };
const rcPanel = { left: MAXX - 205, top: 0, right: MAXX, bottom: MAXY };
const rcKarte = { left: MAXX - 158, top: 23, right: MAXX - 158 + MAXXKACH * 2, bottom: 23 + MAXYKACH * 2 };
const rcTextFeld1 = { left: 0, top: MAXY - 20, right: MAXX - 195, bottom: MAXY };

const MousePosition = { x: null, y: null }; // Aktuelle Mauskoordinaten

const Bmp = Array.from(Array(BILDANZ), () => ({
  Surface: null, //in welcher Surface gespeichert?
  rcSrc: { left: null, top: null, right: null, bottom: null },     //Quelle des 1. Bildes
  rcDes: { left: null, top: null, right: null, bottom: null },        //Falls es immer an die gleiche Stelle gezeichnet wird. (Buttons)
  Breite: null,   //Die Breite des Bildes
  Hoehe: null,    //Die Hoehe des Bildes
}));

//Bilder
const loadImage = async (file) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.addEventListener('load', () => resolve(img), false);
    img.src = `./images/${file}`;
  });
};

const initCanvases = async (window) => {
  cursorsImage = await loadImage('cursors.png');
  textfieldImage = await loadImage('textfield.png');
  logoImage = await loadImage('logo.png');

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

const InitStructs = async () => {
  let i;

  //BILD
  //Standardbildinitialisierung
  for (i = 0; i < BILDANZ; i++) {
    Bmp[i].Surface = null;
    Bmp[i].rcSrc.left = 0;
    Bmp[i].rcSrc.right = 0;
    Bmp[i].rcSrc.top = 0;
    Bmp[i].rcSrc.bottom = 0;
    Bmp[i].rcDes.left = 0;
    Bmp[i].rcDes.right = 0;
    Bmp[i].rcDes.top = 0;
    Bmp[i].rcDes.bottom = 0;
    Bmp[i].Breite = 0;
    Bmp[i].Hoehe = 0;
  }

  //Cursor
  for (i = CUPFEIL; i <= CUUHR; i++) {
    Bmp[i].Surface = cursorsImage;
    Bmp[i].rcSrc.left = (i - CUPFEIL) * 18;
    Bmp[i].rcSrc.top = 0;
    Bmp[i].rcSrc.right = Bmp[i].rcSrc.left + 18;
    Bmp[i].rcSrc.bottom = 18;
    Bmp[i].Breite = 18;
    Bmp[i].Hoehe = 18;
  }

  CursorTyp = CUPFEIL;
  MouseAktiv = true;
  SelectedItem = null;
  framesPerSecond = 100;
  frame = 0;
  timestampInSeconds = 0;
  MousePosition.x = MAXX / 2;
  MousePosition.y = MAXY / 2;
  Button0down = false;
  Button1down = false;
}

const drawImage = (image, canvasContext) => {
  const sourceWidth = rcRectsrc.right - rcRectsrc.left;
  const sourceHeight = rcRectsrc.bottom - rcRectsrc.top;
  const destinationWidth = rcRectdes.right - rcRectdes.left;
  const destinationHeight = rcRectdes.bottom - rcRectdes.top;
  canvasContext.drawImage(
    image,
    rcRectsrc.left, rcRectsrc.top, sourceWidth, sourceHeight,
    rcRectdes.left, rcRectdes.top, destinationWidth, destinationHeight
  );
}

const fillCanvas = (rectangle, red, green, blue, alpha, canvasContext) => {
  const width = rectangle.right - rectangle.left;
  const height = rectangle.bottom - rectangle.top;
  canvasContext.fillStyle = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  canvasContext.fillRect(rectangle.left, rectangle.top, width, height);
}

const clearCanvas = (rectangle, canvasContext) => {
  const width = rectangle.right - rectangle.left;
  const height = rectangle.bottom - rectangle.top;
  canvasContext.clearRect(rectangle.left, rectangle.top, width, height);
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

  if (!SelectedItem) {
    if (state.guy.active) {
      if (getButtonAtPosition(MousePosition)?.sprite === spriteTypes.BUTTON_STOPPING) {   
        CursorTyp = CUPFEIL;
      } else {
        CursorTyp = CUUHR;
      }
    } else CursorTyp = CUPFEIL;
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
        CursorTyp = CUPFEIL;
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
        CursorTyp = CUPFEIL;
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

  if (state.phase === phases.LOGO) {
    //Logo Abbrechen
    if (pressedKeyCodes[DIK_ESCAPE] || pressedKeyCodes[DIK_RETURN] || pressedKeyCodes[DIK_SPACE]) {
      sounds.LOGO.instance.stop();
      startGame(false);
      return (2);
    }
  } else if (state.guy.action?.type === actionTypes.ARRIVING) {
    //Intro Abbrechen
    if (pressedKeyCodes[DIK_ESCAPE] || pressedKeyCodes[DIK_RETURN] || pressedKeyCodes[DIK_SPACE]) {
      sounds.STORM.instance.stop();
      sounds.SWIMMING.instance.stop();
      state.guy.active = false;
      for (let x = state.guy.tile.x; x < MAXXKACH; x++) {
        state.guy.tile.x = x;
        discoverTerrain();
        if (state.terrain[state.guy.tile.x][state.guy.tile.y].ground !== grounds.SEA) break;
      }
      addShipWreck(state.terrain[state.guy.tile.x - 2][state.guy.tile.y]);

      const tile = state.terrain[state.guy.tile.x][state.guy.tile.y];
      state.guy.position.x = tile.position.x + tileEdges[tile.type].center.x;
      state.guy.position.y = tile.position.y + tileEdges[tile.type].center.y;
      state.guy.route = [];
      updateCamera(state.guy.position, false);

      state.guy.sprite = spriteTypes.GUY_WAITING;
      state.guy.action = null;
      state.phase = phases.PLAY;
      saveState();
      return (2);
    }
  } else if (state.guy.action?.type === actionTypes.LEAVING) {
    if (pressedKeyCodes[DIK_ESCAPE] || pressedKeyCodes[DIK_RETURN] || pressedKeyCodes[DIK_SPACE]) {
      audio.stopAll();
      state.phase = phases.CREDITS;
      return (2);
    }
  } else if (state.phase === phases.PLAY) {
    if (pressedKeyCodes[DIK_RIGHT]) state.camera.x += 10;
    if (pressedKeyCodes[DIK_LEFT]) state.camera.x -= 10;
    if (pressedKeyCodes[DIK_DOWN]) state.camera.y += 10;
    if (pressedKeyCodes[DIK_UP]) state.camera.y -= 10;
    if (pressedKeyCodes[DIK_ESCAPE]) {
      startAction(actionTypes.STOPPING_GAME);
    }
    if (pressedKeyCodes[DIK_F11]) {
      startAction(actionTypes.RESTARTING_GAME);
    }
    if (pressedKeyCodes[DIK_G]) {
      state.options.grid = !state.options.grid;
    }

    if (pressedKeyCodes[DIK_C])  //Zum testen
    {
      let x, y;
      for (y = 0; y < MAXYKACH; y++)
        for (x = 0; x < MAXXKACH; x++)
          state.terrain[x][y].discovered = true;
      updateMinimap();
    }

    if (pressedKeyCodes[DIK_I])  //Zum testen
    {
      changeItem(items.BRANCH, 10);
      changeItem(items.STONE, 10);
      changeItem(items.LEAF, 10);
      changeItem(items.LIANA, 10);
      changeItem(items.LOG, 10);
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

      state.guy.chance += 10;
    }
  } else if (state.phase === phases.CREDITS) {
    if (pressedKeyCodes[DIK_ESCAPE] || pressedKeyCodes[DIK_RETURN] || pressedKeyCodes[DIK_SPACE]) {
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
    CursorTyp = CURICHTUNG;
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
    if (item || SelectedItem) {
      if (item) {
        if ((Button === 0) && (Push === 1)) {
          if (!SelectedItem) {
            CursorTyp = item;
            SelectedItem = item;
          } else {
            CheckBenutze(item);
          }
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
  SelectedItem = null;
}

const InRect = (x, y, rcRect) => {
  return (x <= rcRect.right) && (x >= rcRect.left) &&
    (y <= rcRect.bottom) && (y >= rcRect.top);
}

const startGame = async (newGame) => {
  await InitStructs();

  if (newGame || !loadState()) {
    //Für die Statusanzeige
    rcRectdes.left = 0;
    rcRectdes.top = 0;
    rcRectdes.right = MAXX;
    rcRectdes.bottom = MAXY;
    fillCanvas(rcRectdes, 70, 70, 100, 1, canvases.PRIMARY);
    clearCanvas(rcRectdes, canvases.TEXT);

    //Landschaft erzeugen
    generateIsland();
    setGrounds();
    addRiver();
    addTrees();

    state.treasure = hideTreasure();
    addPirateWreck();

    drawTreasureMap();
    updateMinimap();

    //Guy Position
    state.guy.tile.x = 1;
    state.guy.tile.y = Math.floor(MAXYKACH / 2);
    const tile = state.terrain[state.guy.tile.x][state.guy.tile.y];
    state.guy.position.x = tile.position.x + tileEdges[tile.type].center.x;
    state.guy.position.y = tile.position.y + tileEdges[tile.type].center.y;

    state.guy.water = 100;
    state.guy.food = 100;
    state.guy.health = 100;
    state.guy.inventory = createInventory();

    state.guy.chance = 0;

    state.calendar.day = 1;
    state.calendar.minutes = 0;

    state.phase = phases.PLAY;
    state.guy.sprite = spriteTypes.GUY_SAILING;
    startAction(actionTypes.ARRIVING);
  }
}

const ZeigeCursor = () => {
  if (CursorTyp === CUPFEIL) ZeichneBilder(MousePosition.x, MousePosition.y, CursorTyp, rcGesamt);
  else if (items.list.includes(CursorTyp)) {
    const position = {
      x: MousePosition.x - itemSprites[CursorTyp].width / 2,
      y: MousePosition.y - itemSprites[CursorTyp].height / 2
    };
    drawItem(CursorTyp, position);
  } else {
    ZeichneBilder(MousePosition.x - Bmp[CursorTyp].Breite / 2, MousePosition.y - Bmp[CursorTyp].Hoehe / 2, CursorTyp, rcGesamt);
  }
};

const Zeige = () => {
  drawTerrain(state.camera, false);

  drawPanel();
  
  //TextFeld malen
  rcRectsrc.left = 0;
  rcRectsrc.top = 0;
  rcRectsrc.right = 605;
  rcRectsrc.bottom = 20;
  rcRectdes = { ...rcTextFeld1 };
  drawImage(textfieldImage, canvases.PRIMARY);

  if (state.paper) {
    drawPaper();
  };

  blitText(textAreas.CHANCE);
  blitText(textAreas.STATUS);
  blitText(textAreas.TIME);

  //Alles schwarz übermalen und nur das Papier mit Text anzeigen
  if ((state.guy.action?.type === actionTypes.ENDING_DAY ||
    state.guy.action?.type === actionTypes.DYING) && state.paper) {
    rcRectdes.left = 0;
    rcRectdes.top = 0;
    rcRectdes.right = MAXX;
    rcRectdes.bottom = MAXY;
    fillCanvas(rcRectdes, 0, 0, 0, 1, canvases.PRIMARY);
    fade(100, 0);
    drawPaper();
  }

  //Cursor
  ZeigeCursor();
}

const ZeigeLogo = () => {
  fillCanvas({ left: 0, top: 0, right: MAXX, bottom: MAXY }, 0, 0, 0, 1, canvases.PRIMARY);

  rcRectsrc.left = 0;
  rcRectsrc.right = 500;
  rcRectsrc.top = 0;
  rcRectsrc.bottom = 500;
  rcRectdes.left = MAXX / 2 - 250;
  rcRectdes.right = MAXX / 2 + 250;
  rcRectdes.top = MAXY / 2 - 250;
  rcRectdes.bottom = MAXY / 2 + 250;

  drawImage(logoImage, canvases.PRIMARY);

  sounds.LOGO.instance.play(true);
}

const ZeichneBilder = (x, y, i, Ziel) => {
  rcRectsrc = { ...Bmp[i].rcSrc };
  rcRectsrc.bottom = rcRectsrc.top + Bmp[i].Hoehe;
  rcRectdes.left = Math.round(x);
  rcRectdes.top = Math.round(y);
  rcRectdes.right = Math.round(x) + Bmp[i].Breite;
  rcRectdes.bottom = Math.round(y) + Bmp[i].Hoehe;
  CalcRect(Ziel);
  drawImage(Bmp[i].Surface, canvases.PRIMARY);
}

const CalcRect = (rcBereich) => {
  if (rcRectdes.left < rcBereich.left) {
    rcRectsrc.left = rcRectsrc.left + rcBereich.left - rcRectdes.left;
    rcRectdes.left = rcBereich.left;
  }
  if (rcRectdes.top < rcBereich.top) {
    rcRectsrc.top = rcRectsrc.top + rcBereich.top - rcRectdes.top;
    rcRectdes.top = rcBereich.top;
  }
  if (rcRectdes.right > rcBereich.right) {
    rcRectsrc.right = rcRectsrc.right + rcBereich.right - rcRectdes.right;
    rcRectdes.right = rcBereich.right;
  }
  if (rcRectdes.bottom > rcBereich.bottom) {
    rcRectsrc.bottom = rcRectsrc.bottom + rcBereich.bottom - rcRectdes.bottom;
    rcRectdes.bottom = rcBereich.bottom;
  }
  rcRectdes.right = Math.max(rcRectdes.left, rcRectdes.right);
  rcRectdes.bottom = Math.max(rcRectdes.top, rcRectdes.bottom);
}

const Event = () => {
  if (state.guy.active || !state.guy.action) {
    return;
  }
  state.guy.route = [];
  switch (state.guy.action.type) {
    case actionTypes.LEAVING:
      AkGerettet();
      break;
    case actionTypes.ARRIVING:
      AkIntro();
      break;
    case actionTypes.STOPPING_GAME:
      AkSpielverlassen();
      break;
    case actionTypes.RESTARTING_GAME:
      AkNeubeginnen();
      break;
    case actionTypes.RESTARTING_DAY:
      AkTagNeubeginnen();
      break;
    case actionTypes.DYING:
      AkTod();
      break;
  }
}

const AkIntro = () => {
  let x;
  const tile = state.terrain[state.guy.tile.x][state.guy.tile.y];

  state.guy.action.step++;
  switch (state.guy.action.step) {
    case 1:
      //Intro Route herstellen
      state.guy.active = true;
      for (x = state.guy.tile.x; x < MAXXKACH; x++)//Zielkoordinate für Introroute finden
      {
        if (state.terrain[x][state.guy.tile.y].ground !== grounds.SEA) break;
      }
      state.guy.route = findRoute({ x: x - 2, y: state.guy.tile.y });
      sounds.STORM.instance.play(true);
      break;
    case 2:
      startGuyAnimation(spriteTypes.GUY_TANKING);
      sounds.STORM.instance.stop();
      sounds.SPLASH.instance.play();
      sounds.CRASHING.instance.play();
      break;
    case 3:
      addShipWreck(tile);
      state.guy.tile.x += 1;
      goToEastOfTile();
      discoverTerrain();
      state.guy.sprite = spriteTypes.GUY_SWIMMING;
      sounds.SWIMMING.instance.play(true);
      break;
    case 4:
      state.guy.tile.x += 1;
      sounds.SWIMMING.instance.stop();
      goToCenterOfTile();
      break;
    case 5:
      updateCamera(state.guy.position, false);
      state.phase = phases.PLAY
      state.guy.action = null;
      openPaper(texts.INTROTEXT, false);
      saveState();
      break;
  }
}

const AkNeubeginnen = () => {
  state.guy.action.step++;
  switch (state.guy.action.step) {
    case 1:
      goToCenterOfTile();
      break;
    case 2:
      openPaper(texts.NEUBEGINNEN, true);
      break;
    case 3:
      state.guy.action = null;
      if (state.paper.question.answer) {
        startGame(true);
      }
      closePaper();
      break;
  }
}

const AkTagNeubeginnen = () => {
  state.guy.action.step++;
  switch (state.guy.action.step) {
    case 1:
      goToCenterOfTile();
      break;
    case 2:
      openPaper(texts.TAGNEU, true);
      break;
    case 3:
      state.guy.action = null;
      if (state.paper.question.answer) {
        startGame(false);
        return;
      }
      closePaper();
      break;
  }
}

const AkSpielverlassen = () => {
  state.guy.action.step++;
  switch (state.guy.action.step) {
    case 1:
      goToCenterOfTile();
      break;
    case 2:
      openPaper(texts.SPIELVERLASSEN, true);
      break;
    case 3:
      state.guy.action = null;
      if (state.paper.question.answer) {
        if (state.guy.health > 10) {
          saveState();
        }
        audio.stopAll();
        state.phase = phases.CREDITS;
      }
      closePaper();
      break;
  }
}

const AkTod = () => {
  state.guy.action.step++;
  switch (state.guy.action.step) {
    case 1:
      openPaper(texts.TOD, false);
      break;
    case 2:
      if (!isOnSea()) {
        startGuyAnimation(spriteTypes.GUY_LAYING_DOWN);
      }
      break;
    case 3:
      fade(100, 1);
      startGuyAnimation(isOnSea() ? spriteTypes.GUY_DYING_BOAT : spriteTypes.GUY_DYING);
      break;
    case 4:
      openPaper(texts.TAGNEU, true);
      break;
    case 5:
      state.guy.action = null;
      if (state.paper.question.answer) {
        startGame(false)
      } else {
        audio.stopAll();
        state.phase = phases.CREDITS;
      };
      closePaper();
      break;
  }
}

const AkGerettet = () => {
  let x;

  state.guy.action.step++;
  switch (state.guy.action.step) {
    case 1:
      goToCenterOfTile();
      break;
    case 2:
      openPaper(texts.GERETTET, true);
      break;
    case 3:
      if (!state.paper.question.answer) {
        state.guy.action = null;
      }
      closePaper();
      break;
    case 4:
      // Route herstellen
      for (x = MAXXKACH - 1; x > 1; x--)//Position des Rettungsschiffs festlegen
      {
        if (state.terrain[x][state.guy.tile.y].ground !== grounds.SEA) break;
      }
      //Schiff hinbauen
      const shipTile = state.terrain[x + 2][state.guy.tile.y];
      shipTile.object = {
        sprite: spriteTypes.GUY_SAILING,
        x: tileEdges[shipTile.type].center.x,
        y: tileEdges[shipTile.type].center.y,
        frame: 0
      };
      state.guy.route = findRoute({ x, y: state.guy.tile.y });
      state.guy.active = true;
      break;
    case 5:
      goToEastOfTile();
      break;
    case 6:
      state.guy.tile.x += 2;
      discoverTerrain();
      state.guy.sprite = spriteTypes.GUY_SWIMMING;
      sounds.SWIMMING.instance.play(true);
      goToCenterOfTile();
      break;
    case 7:
      state.guy.sprite = spriteTypes.GUY_SAILING;
      sounds.SWIMMING.instance.stop();
      sounds.STORM.instance.play(true);
      state.guy.route = findRoute({ x: state.terrain.length - 1, y: state.guy.tile.y });
      state.guy.active = true;
      state.terrain[state.guy.tile.x][state.guy.tile.y].object = createWaves();
      break;
    case 8:
      sounds.STORM.instance.stop();
      audio.stopAll();
      state.guy.action = null;
      state.phase = phases.CREDITS;
      break;
  }
}

const CheckBenutze = (item) => {
  if ((item === items.STONE && SelectedItem === items.BRANCH) ||
    (item === items.BRANCH && SelectedItem === items.STONE)) {
    if (!state.guy.inventory[items.AXE]) {
      changeItem(items.STONE, -1);
      changeItem(items.BRANCH, -1);
      changeItem(items.AXE, 1);
      openPaper(texts.BAUEAXT, false);
      sounds.INVENTION.instance.play();
    } else if (!state.guy.inventory[items.HARROW]) {
      changeItem(items.STONE, -1);
      changeItem(items.BRANCH, -1);
      changeItem(items.HARROW, 1);
      openPaper(texts.BAUEEGGE, false);
      sounds.INVENTION.instance.play();
    } else {
      openPaper(texts.STEINPLUSASTNICHTS, false);
    }
  } else if ((item === items.LIANA && SelectedItem === items.BRANCH) ||
    (item === items.BRANCH && SelectedItem === items.LIANA)) {
    if (!state.guy.inventory[items.FISHING_ROD]) {
      changeItem(items.LIANA, -1);
      changeItem(items.BRANCH, -1);
      changeItem(items.FISHING_ROD, 1);
      openPaper(texts.BAUEANGEL, false);
      sounds.INVENTION.instance.play();
    } else {
      openPaper(texts.ASTPLUSLIANENICHTS, false);
    }
  } else if (((item === items.LIANA) && (SelectedItem === items.STONE)) ||
    ((item === items.STONE) && (SelectedItem === items.LIANA))) {
    if (!state.guy.inventory[items.SLING]) {
      changeItem(items.LIANA, -1);
      changeItem(items.STONE, -1);
      changeItem(items.SLING, 1);
      openPaper(texts.BAUESCHLEUDER, false);
      sounds.INVENTION.instance.play();
    } else {
      openPaper(texts.STEINPLUSLIANENICHTS, false);
    }
  } else {
    openPaper(texts.NICHTBASTELN, false);
  }
  SelectedItem = null;
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
    ZeigeLogo(); //Bild auffrischen

  } else if (state.guy.action?.type === actionTypes.ARRIVING || state.guy.action?.type === actionTypes.LEAVING) {
    if (CheckKey() === 2) return true;    //Das Keyboard abfragen
    Animationen();  //Animationen weiterschalten
    discoverTerrain();
    playTerrainSounds();
    updateCamera(state.guy.position, true);
    processAction();
    Event(); //Aktionen starten
    drawTerrain(state.camera, false);

    if (state.paper) {
      if (MouseAktiv) CheckMouse();    //Den MouseZustand abchecken
      drawPaper();
      ZeigeCursor();
    };

  } else if (state.phase === phases.PLAY) {
    if (state.calendar.minutes > (12 * 60) && (state.guy.action?.type !== actionTypes.ENDING_DAY))  //Hier ist der Tag zuende
    {
      if (state.guy.action?.type === actionTypes.LOOKING) {
        state.guy.chance -= 1 + state.terrain[state.guy.tile.x][state.guy.tile.y].height;
      }
      startAction(actionTypes.ENDING_DAY);
    }

    if (MouseAktiv) CheckMouse();    //Den MouseZustand abchecken
    CheckKey();
    restrictCamera();            //Das Scrollen an die Grenzen der Landschaft anpassen
    Animationen();            //Die Animationsphasen weiterschalten
    discoverTerrain();
    playTerrainSounds();
    processAction();
    Event();  //Die Aktionen starten
    Zeige();//Das Bild zeichnen

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

  await InitStructs();

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
