import audio from './sounds/audio.js';
import generateIsland from './terrain/generateIsland.js';
import setGrounds from './terrain/setGrounds.js';
import grounds from './terrain/tiles/grounds.js';
import tileEdges from './terrain/tiles/tileEdges.js';
import loadImages from './images/loadImages.js';
import drawSprite from './images/drawSprite.js';
import createWaves from './terrain/objects/createWaves.js';
import animateTerrain from './terrain/animateTerrain.js';
import loadSounds from './sounds/loadSounds.js';
import playTerrainSounds from './terrain/playTerrainSounds.js';
import addRiver from './terrain/addRiver.js';
import spriteTypes from './images/spriteTypes.js';
import addTrees from './terrain/addTrees.js';
import sprites from './images/sprites.js';
import hideTreasure from './treasure/hideTreasure.js';
import drawTerrain from './terrain/drawTerrain.js';
import drawTreasureMap from './treasure/drawTreasureMap.js';
import addPirateWreck from './terrain/addPirateWreck.js';
import addShipWreck from './terrain/addShipWreck.js';
import updateCamera from './camera/updateCamera.js';
import restrictCamera from './camera/restrictCamera.js';
import findRoute from './guy/routing/findRoute.js';
import goToOnTile from './guy/routing/goToOnTile.js';
import goTo from './guy/routing/goTo.js';
import goToCenterOfTile from './guy/routing/goToCenterOfTile.js';
import goToEastOfTile from './guy/routing/goToEastOfTile.js';
import isOnSea from './guy/isOnSea.js';
import changeHealth from './guy/changeHealth.js';
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
import isUsableTent from './terrain/objects/isUsableTent.js';
import isUsableTreeHouse from './terrain/objects/isUsableTreeHouse.js';
import findNeighbor from './guy/findNeighbor.js';
import pauseConstruction from './construction/pauseConstruction.js';
import textAreas from './interface/text/textAreas.js';
import clearText from './interface/text/clearText.js';
import closePaper from './interface/text/closePaper.js';
import drawPaper from './interface/text/drawPaper.js';
import blitText from './interface/text/blitText.js';
import openPaper from './interface/text/openPaper.js';
import canvases from './images/canvases.js';
import getTileByPosition from './terrain/getTileByPosition.js';
import texts from './interface/text/texts.js';
import openDayEndPaper from './interface/text/openDayEndPaper.js';
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

const MAXXKACH = 61    //Anzahl der Kacheln
const MAXYKACH = 61;
const MAXX = 800; //Bildschirmauflösung
const MAXY = 600;

const CUPFEIL = 34;
const CURICHTUNG = CUPFEIL + 1;
const CUUHR = CUPFEIL + 2;
const PROGRAMMIERUNG = 164;
const DIRKPLATE = PROGRAMMIERUNG + 1;
const MATTHIAS = PROGRAMMIERUNG + 2;
const TOBIAS = PROGRAMMIERUNG + 3;
const SIGRID = PROGRAMMIERUNG + 4;
const SOUNDS = PROGRAMMIERUNG + 5;
const PATHFINDING = PROGRAMMIERUNG + 6;
const JOHN = PROGRAMMIERUNG + 7;
const HEIKO = PROGRAMMIERUNG + 8;
const GISELA = PROGRAMMIERUNG + 9;
const WEITEREHILFE = PROGRAMMIERUNG + 10;
const TESTSPIELER = PROGRAMMIERUNG + 11;
const SCHWARZ = PROGRAMMIERUNG + 12;
const MUSIK = PROGRAMMIERUNG + 13;
const DPSOFTWARE = PROGRAMMIERUNG + 14;
const BILDANZ = DPSOFTWARE + 1; //Wieviele Bilder

//Spielzustände
const GAME_WAIT = 'wait';
const GAME_INTRO = 'intro';
const GAME_PLAY = 'play';
const GAME_CREDITS = 'credits';
const GAME_OUTRO = 'outro';
const GAME_LOGO = 'logo';

//ddraw
let textfieldImage = null;
let creditsImage = null;
let logoImage = null;
let cursorsImage = null;

// Input
const mouseUpdates = {
  x: 0,
  y: 0,
  rgbButtons: []
};
const pressedKeyCodes = {};

let Spielzustand = GAME_LOGO;       // in welchem Zustand ist das Spiel?
let MouseAktiv = false;    // Mouse angestellt?
let CursorTyp;        //Welcher Cursortyp?
let Button0down;    //linke Maustaste gedrückt gehalten
let Button1down;    //rechte Maustaste gedrückt gehalten
let timestampInSeconds;            //Start der Sekunde
let frame, framesPerSecond;    //Anzahl der Bilder in der Sekunde
let rcRectdes = { left: null, top: null, right: null, bottom: null }; //Ständig benötigte Variable zum Blitten
let rcRectsrc = { left: null, top: null, right: null, bottom: null }; //Ständig benötigte Variable zum Blitten
let SelectedItem;                //Für Aktionen mit zwei Mausklicks
let Nacht;                    //Wird die Tageszusammenfassung angezeigt?
let Spielbeenden = false;    //Wenn true wird das Spiel sofort beendet
const pi = 3.1415926535;        //pi, was sonst
let AbspannNr = 0;            //Zähler für Abspann
let AbspannZustand = 0;            //Wo im Abspann

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

const AbspannListe = Array.from(Array(10), () => Array.from(Array(10), () => ({
  Aktiv: null,       //Bewegt sich gerade
  Bild: null,        //welches Bild
})));    //Namenabfolge im Abspann

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
  creditsImage = await loadImage('credits.png');
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

const SaveGame = () => {
  window.localStorage.setItem('stateV10', JSON.stringify({
    ...state,
    Spielzustand
  }));
}

const LoadGame = () => {
  const rawState = window.localStorage.getItem('stateV10');
  if (!rawState) {
    return false;
  }

  let parsedState = null;
  try {
    parsedState = JSON.parse(rawState);
  } catch (error) {
    console.warn('Cannot parse saved game, ignoring...', error)
    return false;
  };
  for (const key in parsedState) {
    state[key] = parsedState[key];
  }
  state.paper = null;

  Spielzustand = state.Spielzustand;

  return true;
}

const InitStructs = async () => {
  let i, k;

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

  //PROGRAMMIERUNG
  Bmp[PROGRAMMIERUNG].rcSrc.left = 0;
  Bmp[PROGRAMMIERUNG].rcSrc.top = 0;
  Bmp[PROGRAMMIERUNG].rcSrc.right = Bmp[PROGRAMMIERUNG].rcSrc.left + 348;
  Bmp[PROGRAMMIERUNG].rcSrc.bottom = Bmp[PROGRAMMIERUNG].rcSrc.top + 49;
  Bmp[PROGRAMMIERUNG].Breite = (Bmp[PROGRAMMIERUNG].rcSrc.right - Bmp[PROGRAMMIERUNG].rcSrc.left);
  Bmp[PROGRAMMIERUNG].Hoehe = (Bmp[PROGRAMMIERUNG].rcSrc.bottom - Bmp[PROGRAMMIERUNG].rcSrc.top);
  Bmp[PROGRAMMIERUNG].rcDes.left = Math.floor(MAXX / 2 - Bmp[PROGRAMMIERUNG].Breite / 2);
  Bmp[PROGRAMMIERUNG].rcDes.top = Math.floor(MAXY - Bmp[PROGRAMMIERUNG].Hoehe / 2);
  Bmp[PROGRAMMIERUNG].rcDes.right = Bmp[PROGRAMMIERUNG].rcDes.left + Bmp[PROGRAMMIERUNG].Breite;
  Bmp[PROGRAMMIERUNG].rcDes.bottom = Bmp[PROGRAMMIERUNG].rcDes.top + Bmp[PROGRAMMIERUNG].Hoehe;
  Bmp[PROGRAMMIERUNG].Surface = creditsImage;

  //DIRKPLATE
  Bmp[DIRKPLATE].rcSrc.left = 0;
  Bmp[DIRKPLATE].rcSrc.top = 49;
  Bmp[DIRKPLATE].rcSrc.right = Bmp[DIRKPLATE].rcSrc.left + 196;
  Bmp[DIRKPLATE].rcSrc.bottom = Bmp[DIRKPLATE].rcSrc.top + 47;
  Bmp[DIRKPLATE].Breite = (Bmp[DIRKPLATE].rcSrc.right - Bmp[DIRKPLATE].rcSrc.left);
  Bmp[DIRKPLATE].Hoehe = (Bmp[DIRKPLATE].rcSrc.bottom - Bmp[DIRKPLATE].rcSrc.top);
  Bmp[DIRKPLATE].rcDes.left = Math.floor(MAXX / 2 - Bmp[DIRKPLATE].Breite / 2);
  Bmp[DIRKPLATE].rcDes.top = Math.floor(MAXY - Bmp[DIRKPLATE].Hoehe / 2);
  Bmp[DIRKPLATE].rcDes.right = Bmp[DIRKPLATE].rcDes.left + Bmp[DIRKPLATE].Breite;
  Bmp[DIRKPLATE].rcDes.bottom = Bmp[DIRKPLATE].rcDes.top + Bmp[DIRKPLATE].Hoehe;
  Bmp[DIRKPLATE].Surface = creditsImage;

  //MATTHIAS
  Bmp[MATTHIAS].rcSrc.left = 0;
  Bmp[MATTHIAS].rcSrc.top = 96;
  Bmp[MATTHIAS].rcSrc.right = Bmp[MATTHIAS].rcSrc.left + 379;
  Bmp[MATTHIAS].rcSrc.bottom = Bmp[MATTHIAS].rcSrc.top + 47;
  Bmp[MATTHIAS].Breite = (Bmp[MATTHIAS].rcSrc.right - Bmp[MATTHIAS].rcSrc.left);
  Bmp[MATTHIAS].Hoehe = (Bmp[MATTHIAS].rcSrc.bottom - Bmp[MATTHIAS].rcSrc.top);
  Bmp[MATTHIAS].rcDes.left = Math.floor(MAXX / 2 - Bmp[MATTHIAS].Breite / 2);
  Bmp[MATTHIAS].rcDes.top = Math.floor(MAXY - Bmp[MATTHIAS].Hoehe / 2);
  Bmp[MATTHIAS].rcDes.right = Bmp[MATTHIAS].rcDes.left + Bmp[MATTHIAS].Breite;
  Bmp[MATTHIAS].rcDes.bottom = Bmp[MATTHIAS].rcDes.top + Bmp[MATTHIAS].Hoehe;
  Bmp[MATTHIAS].Surface = creditsImage;

  //TESTSPIELER
  Bmp[TESTSPIELER].rcSrc.left = 0;
  Bmp[TESTSPIELER].rcSrc.top = 143;
  Bmp[TESTSPIELER].rcSrc.right = Bmp[TESTSPIELER].rcSrc.left + 210;
  Bmp[TESTSPIELER].rcSrc.bottom = Bmp[TESTSPIELER].rcSrc.top + 55;
  Bmp[TESTSPIELER].Breite = (Bmp[TESTSPIELER].rcSrc.right - Bmp[TESTSPIELER].rcSrc.left);
  Bmp[TESTSPIELER].Hoehe = (Bmp[TESTSPIELER].rcSrc.bottom - Bmp[TESTSPIELER].rcSrc.top);
  Bmp[TESTSPIELER].rcDes.left = Math.floor(MAXX / 2 - Bmp[TESTSPIELER].Breite / 2);
  Bmp[TESTSPIELER].rcDes.top = Math.floor(MAXY - Bmp[TESTSPIELER].Hoehe / 2);
  Bmp[TESTSPIELER].rcDes.right = Bmp[TESTSPIELER].rcDes.left + Bmp[TESTSPIELER].Breite;
  Bmp[TESTSPIELER].rcDes.bottom = Bmp[TESTSPIELER].rcDes.top + Bmp[TESTSPIELER].Hoehe;
  Bmp[TESTSPIELER].Surface = creditsImage;

  //TOBIAS
  Bmp[TOBIAS].rcSrc.left = 0;
  Bmp[TOBIAS].rcSrc.top = 198;
  Bmp[TOBIAS].rcSrc.right = Bmp[TOBIAS].rcSrc.left + 273;
  Bmp[TOBIAS].rcSrc.bottom = Bmp[TOBIAS].rcSrc.top + 56;
  Bmp[TOBIAS].Breite = (Bmp[TOBIAS].rcSrc.right - Bmp[TOBIAS].rcSrc.left);
  Bmp[TOBIAS].Hoehe = (Bmp[TOBIAS].rcSrc.bottom - Bmp[TOBIAS].rcSrc.top);
  Bmp[TOBIAS].rcDes.left = Math.floor(MAXX / 2 - Bmp[TOBIAS].Breite / 2);
  Bmp[TOBIAS].rcDes.top = Math.floor(MAXY - Bmp[TOBIAS].Hoehe / 2);
  Bmp[TOBIAS].rcDes.right = Bmp[TOBIAS].rcDes.left + Bmp[TOBIAS].Breite;
  Bmp[TOBIAS].rcDes.bottom = Bmp[TOBIAS].rcDes.top + Bmp[TOBIAS].Hoehe;
  Bmp[TOBIAS].Surface = creditsImage;

  //SIGRID
  Bmp[SIGRID].rcSrc.left = 0;
  Bmp[SIGRID].rcSrc.top = 254;
  Bmp[SIGRID].rcSrc.right = Bmp[SIGRID].rcSrc.left + 226;
  Bmp[SIGRID].rcSrc.bottom = Bmp[SIGRID].rcSrc.top + 56;
  Bmp[SIGRID].Breite = (Bmp[SIGRID].rcSrc.right - Bmp[SIGRID].rcSrc.left);
  Bmp[SIGRID].Hoehe = (Bmp[SIGRID].rcSrc.bottom - Bmp[SIGRID].rcSrc.top);
  Bmp[SIGRID].rcDes.left = Math.floor(MAXX / 2 - Bmp[SIGRID].Breite / 2);
  Bmp[SIGRID].rcDes.top = Math.floor(MAXY - Bmp[SIGRID].Hoehe / 2);
  Bmp[SIGRID].rcDes.right = Bmp[SIGRID].rcDes.left + Bmp[SIGRID].Breite;
  Bmp[SIGRID].rcDes.bottom = Bmp[SIGRID].rcDes.top + Bmp[SIGRID].Hoehe;
  Bmp[SIGRID].Surface = creditsImage;

  //PATHFINDING
  Bmp[PATHFINDING].rcSrc.left = 0;
  Bmp[PATHFINDING].rcSrc.top = 353;
  Bmp[PATHFINDING].rcSrc.right = Bmp[PATHFINDING].rcSrc.left + 233;
  Bmp[PATHFINDING].rcSrc.bottom = Bmp[PATHFINDING].rcSrc.top + 59;
  Bmp[PATHFINDING].Breite = (Bmp[PATHFINDING].rcSrc.right - Bmp[PATHFINDING].rcSrc.left);
  Bmp[PATHFINDING].Hoehe = (Bmp[PATHFINDING].rcSrc.bottom - Bmp[PATHFINDING].rcSrc.top);
  Bmp[PATHFINDING].rcDes.left = Math.floor(MAXX / 2 - Bmp[PATHFINDING].Breite / 2);
  Bmp[PATHFINDING].rcDes.top = Math.floor(MAXY - Bmp[PATHFINDING].Hoehe / 2);
  Bmp[PATHFINDING].rcDes.right = Bmp[PATHFINDING].rcDes.left + Bmp[PATHFINDING].Breite;
  Bmp[PATHFINDING].rcDes.bottom = Bmp[PATHFINDING].rcDes.top + Bmp[PATHFINDING].Hoehe;
  Bmp[PATHFINDING].Surface = creditsImage;

  //JOHN
  Bmp[JOHN].rcSrc.left = 0;
  Bmp[JOHN].rcSrc.top = 412;
  Bmp[JOHN].rcSrc.right = Bmp[JOHN].rcSrc.left + 347;
  Bmp[JOHN].rcSrc.bottom = Bmp[JOHN].rcSrc.top + 56;
  Bmp[JOHN].Breite = (Bmp[JOHN].rcSrc.right - Bmp[JOHN].rcSrc.left);
  Bmp[JOHN].Hoehe = (Bmp[JOHN].rcSrc.bottom - Bmp[JOHN].rcSrc.top);
  Bmp[JOHN].rcDes.left = Math.floor(MAXX / 2 - Bmp[JOHN].Breite / 2);
  Bmp[JOHN].rcDes.top = Math.floor(MAXY - Bmp[JOHN].Hoehe / 2);
  Bmp[JOHN].rcDes.right = Bmp[JOHN].rcDes.left + Bmp[JOHN].Breite;
  Bmp[JOHN].rcDes.bottom = Bmp[JOHN].rcDes.top + Bmp[JOHN].Hoehe;
  Bmp[JOHN].Surface = creditsImage;

  //HEIKO
  Bmp[HEIKO].rcSrc.left = 0;
  Bmp[HEIKO].rcSrc.top = 468;
  Bmp[HEIKO].rcSrc.right = Bmp[HEIKO].rcSrc.left + 236;
  Bmp[HEIKO].rcSrc.bottom = Bmp[HEIKO].rcSrc.top + 47;
  Bmp[HEIKO].Breite = (Bmp[HEIKO].rcSrc.right - Bmp[HEIKO].rcSrc.left);
  Bmp[HEIKO].Hoehe = (Bmp[HEIKO].rcSrc.bottom - Bmp[HEIKO].rcSrc.top);
  Bmp[HEIKO].rcDes.left = Math.floor(MAXX / 2 - Bmp[HEIKO].Breite / 2);
  Bmp[HEIKO].rcDes.top = Math.floor(MAXY - Bmp[HEIKO].Hoehe / 2);
  Bmp[HEIKO].rcDes.right = Bmp[HEIKO].rcDes.left + Bmp[HEIKO].Breite;
  Bmp[HEIKO].rcDes.bottom = Bmp[HEIKO].rcDes.top + Bmp[HEIKO].Hoehe;
  Bmp[HEIKO].Surface = creditsImage;

  //GISELA
  Bmp[GISELA].rcSrc.left = 0;
  Bmp[GISELA].rcSrc.top = 515;
  Bmp[GISELA].rcSrc.right = Bmp[GISELA].rcSrc.left + 232;
  Bmp[GISELA].rcSrc.bottom = Bmp[GISELA].rcSrc.top + 47;
  Bmp[GISELA].Breite = (Bmp[GISELA].rcSrc.right - Bmp[GISELA].rcSrc.left);
  Bmp[GISELA].Hoehe = (Bmp[GISELA].rcSrc.bottom - Bmp[GISELA].rcSrc.top);
  Bmp[GISELA].rcDes.left = Math.floor(MAXX / 2 - Bmp[GISELA].Breite / 2);
  Bmp[GISELA].rcDes.top = Math.floor(MAXY - Bmp[GISELA].Hoehe / 2);
  Bmp[GISELA].rcDes.right = Bmp[GISELA].rcDes.left + Bmp[GISELA].Breite;
  Bmp[GISELA].rcDes.bottom = Bmp[GISELA].rcDes.top + Bmp[GISELA].Hoehe;
  Bmp[GISELA].Surface = creditsImage;

  //WEITEREHILFE
  Bmp[WEITEREHILFE].rcSrc.left = 0;
  Bmp[WEITEREHILFE].rcSrc.top = 562;
  Bmp[WEITEREHILFE].rcSrc.right = Bmp[WEITEREHILFE].rcSrc.left + 258;
  Bmp[WEITEREHILFE].rcSrc.bottom = Bmp[WEITEREHILFE].rcSrc.top + 46;
  Bmp[WEITEREHILFE].Breite = (Bmp[WEITEREHILFE].rcSrc.right - Bmp[WEITEREHILFE].rcSrc.left);
  Bmp[WEITEREHILFE].Hoehe = (Bmp[WEITEREHILFE].rcSrc.bottom - Bmp[WEITEREHILFE].rcSrc.top);
  Bmp[WEITEREHILFE].rcDes.left = Math.floor(MAXX / 2 - Bmp[WEITEREHILFE].Breite / 2);
  Bmp[WEITEREHILFE].rcDes.top = Math.floor(MAXY - Bmp[WEITEREHILFE].Hoehe / 2);
  Bmp[WEITEREHILFE].rcDes.right = Bmp[WEITEREHILFE].rcDes.left + Bmp[WEITEREHILFE].Breite;
  Bmp[WEITEREHILFE].rcDes.bottom = Bmp[WEITEREHILFE].rcDes.top + Bmp[WEITEREHILFE].Hoehe;
  Bmp[WEITEREHILFE].Surface = creditsImage;

  //DPSOFTWARE
  Bmp[DPSOFTWARE].rcSrc.left = 0;
  Bmp[DPSOFTWARE].rcSrc.top = 608;
  Bmp[DPSOFTWARE].rcSrc.right = Bmp[DPSOFTWARE].rcSrc.left + 291;
  Bmp[DPSOFTWARE].rcSrc.bottom = Bmp[DPSOFTWARE].rcSrc.top + 99;
  Bmp[DPSOFTWARE].Breite = (Bmp[DPSOFTWARE].rcSrc.right - Bmp[DPSOFTWARE].rcSrc.left);
  Bmp[DPSOFTWARE].Hoehe = (Bmp[DPSOFTWARE].rcSrc.bottom - Bmp[DPSOFTWARE].rcSrc.top);
  Bmp[DPSOFTWARE].rcDes.left = Math.floor(MAXX / 2 - Bmp[DPSOFTWARE].Breite / 2);
  Bmp[DPSOFTWARE].rcDes.top = Math.floor(MAXY - Bmp[DPSOFTWARE].Hoehe / 2);
  Bmp[DPSOFTWARE].rcDes.right = Bmp[DPSOFTWARE].rcDes.left + Bmp[DPSOFTWARE].Breite;
  Bmp[DPSOFTWARE].rcDes.bottom = Bmp[DPSOFTWARE].rcDes.top + Bmp[DPSOFTWARE].Hoehe;
  Bmp[DPSOFTWARE].Surface = creditsImage;

  //SCHWARZ
  Bmp[SCHWARZ].rcSrc.left = 0;
  Bmp[SCHWARZ].rcSrc.top = 608;
  Bmp[SCHWARZ].rcSrc.right = Bmp[SCHWARZ].rcSrc.left + 1;
  Bmp[SCHWARZ].rcSrc.bottom = Bmp[SCHWARZ].rcSrc.top + 1;
  Bmp[SCHWARZ].Breite = (Bmp[SCHWARZ].rcSrc.right - Bmp[SCHWARZ].rcSrc.left);
  Bmp[SCHWARZ].Hoehe = (Bmp[SCHWARZ].rcSrc.bottom - Bmp[SCHWARZ].rcSrc.top);
  Bmp[SCHWARZ].rcDes.left = Math.floor(MAXX / 2 - Bmp[SCHWARZ].Breite / 2);
  Bmp[SCHWARZ].rcDes.top = Math.floor(MAXY - Bmp[SCHWARZ].Hoehe / 2);
  Bmp[SCHWARZ].rcDes.right = Bmp[SCHWARZ].rcDes.left + Bmp[SCHWARZ].Breite;
  Bmp[SCHWARZ].rcDes.bottom = Bmp[SCHWARZ].rcDes.top + Bmp[SCHWARZ].Hoehe;
  Bmp[SCHWARZ].Surface = creditsImage;

  //SOUNDS
  Bmp[SOUNDS].rcSrc.left = 0;
  Bmp[SOUNDS].rcSrc.top = 310;
  Bmp[SOUNDS].rcSrc.right = Bmp[SOUNDS].rcSrc.left + 144;
  Bmp[SOUNDS].rcSrc.bottom = Bmp[SOUNDS].rcSrc.top + 43;
  Bmp[SOUNDS].Breite = (Bmp[SOUNDS].rcSrc.right - Bmp[SOUNDS].rcSrc.left);
  Bmp[SOUNDS].Hoehe = (Bmp[SOUNDS].rcSrc.bottom - Bmp[SOUNDS].rcSrc.top);
  Bmp[SOUNDS].rcDes.left = Math.floor(MAXX / 2 - Bmp[SOUNDS].Breite / 2);
  Bmp[SOUNDS].rcDes.top = Math.floor(MAXY - Bmp[SOUNDS].Hoehe / 2);
  Bmp[SOUNDS].rcDes.right = Bmp[SOUNDS].rcDes.left + Bmp[SOUNDS].Breite;
  Bmp[SOUNDS].rcDes.bottom = Bmp[SOUNDS].rcDes.top + Bmp[SOUNDS].Hoehe;
  Bmp[SOUNDS].Surface = creditsImage;

  //MUSIK
  Bmp[MUSIK].rcSrc.left = 160;
  Bmp[MUSIK].rcSrc.top = 310;
  Bmp[MUSIK].rcSrc.right = Bmp[MUSIK].rcSrc.left + 124;
  Bmp[MUSIK].rcSrc.bottom = Bmp[MUSIK].rcSrc.top + 39;
  Bmp[MUSIK].Breite = (Bmp[MUSIK].rcSrc.right - Bmp[MUSIK].rcSrc.left);
  Bmp[MUSIK].Hoehe = (Bmp[MUSIK].rcSrc.bottom - Bmp[MUSIK].rcSrc.top);
  Bmp[MUSIK].rcDes.left = Math.floor(MAXX / 2 - Bmp[MUSIK].Breite / 2);
  Bmp[MUSIK].rcDes.top = Math.floor(MAXY - Bmp[MUSIK].Hoehe / 2);
  Bmp[MUSIK].rcDes.right = Bmp[MUSIK].rcDes.left + Bmp[MUSIK].Breite;
  Bmp[MUSIK].rcDes.bottom = Bmp[MUSIK].rcDes.top + Bmp[MUSIK].Hoehe;
  Bmp[MUSIK].Surface = creditsImage;

  for (i = 0; i < 10; i++) for (k = 0; k < 10; k++) {
    AbspannListe[i][k].Aktiv = false;
    AbspannListe[i][k].Bild = -1;
  }
  AbspannListe[0][0].Bild = PROGRAMMIERUNG;
  AbspannListe[0][1].Aktiv = true; //nur den hier true setzen, löst dann alles andere aus
  AbspannListe[0][1].Bild = DIRKPLATE;
  AbspannListe[1][0].Bild = MUSIK;
  AbspannListe[1][1].Bild = HEIKO;
  AbspannListe[2][0].Bild = SOUNDS;
  AbspannListe[2][1].Bild = DIRKPLATE;
  AbspannListe[3][0].Bild = TESTSPIELER;
  AbspannListe[3][1].Bild = MATTHIAS;
  AbspannListe[3][2].Bild = TOBIAS;
  AbspannListe[3][3].Bild = SIGRID;
  AbspannListe[4][0].Bild = PATHFINDING;
  AbspannListe[4][1].Bild = JOHN;
  AbspannListe[5][0].Bild = WEITEREHILFE;
  AbspannListe[5][1].Bild = HEIKO;
  AbspannListe[5][2].Bild = GISELA;
  AbspannListe[6][0].Bild = SCHWARZ;
  AbspannListe[6][1].Bild = DPSOFTWARE;

  CursorTyp = CUPFEIL;
  MouseAktiv = true;
  SelectedItem = null;
  Nacht = false;
  framesPerSecond = 100;
  frame = 0;
  timestampInSeconds = 0;
  Spielbeenden = false;
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

  if (Spielzustand === GAME_LOGO) {
    //Logo Abbrechen
    if (pressedKeyCodes[DIK_ESCAPE] || pressedKeyCodes[DIK_RETURN] || pressedKeyCodes[DIK_SPACE]) {
      sounds.LOGO.instance.stop();
      startGame(false);
      return (2);
    }
  } else if (Spielzustand === GAME_INTRO) {
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
      Spielzustand = GAME_PLAY;
      SaveGame();
      return (2);
    }
  } else if (Spielzustand === GAME_OUTRO) {
    if (pressedKeyCodes[DIK_ESCAPE] || pressedKeyCodes[DIK_RETURN] || pressedKeyCodes[DIK_SPACE]) {
      audio.stopAll();
      Spielzustand = GAME_CREDITS;
      return (2);
    }
  } else if (Spielzustand === GAME_PLAY) {
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
  } else if (Spielzustand === GAME_CREDITS) {
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
  Spielzustand = GAME_WAIT;

  await InitStructs();

  if (newGame || !LoadGame()) {
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

    Spielzustand = GAME_INTRO;
    state.guy.sprite = spriteTypes.GUY_SAILING;
    startAction(actionTypes.ARRIVING);
  }

  closePaper();

  drawTreasureMap();

  updateMinimap();
}

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
  if (Nacht) {
    rcRectdes.left = 0;
    rcRectdes.top = 0;
    rcRectdes.right = MAXX;
    rcRectdes.bottom = MAXY;
    fillCanvas(rcRectdes, 0, 0, 0, 1, canvases.PRIMARY);

    if (state.paper) {
      drawPaper();
    };
  
    Fade(100, 0);
  }

  //Cursor
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

  if (Nacht) Fade(100, 0); //Das muß hier stehen, damit man die Textnachricht in der Nacht lesen kann
}

const ZeigeAbspann = () => {
  let z;

  sounds.OUTRO.instance.play(true);

  rcRectdes.left = 0;
  rcRectdes.top = 0;
  rcRectdes.right = MAXX;
  rcRectdes.bottom = MAXY;
  fillCanvas(rcRectdes, 0, 0, 0, 1, canvases.PRIMARY);

  if (AbspannZustand === 0) {
    ZeichneBilder(Math.floor(MAXX / 2 - Bmp[AbspannListe[AbspannNr][0].Bild].Breite / 2), 100,
      AbspannListe[AbspannNr][0].Bild, rcGesamt);
    for (z = 1; z < 10; z++) {
      if (AbspannListe[AbspannNr][z].Aktiv)
        AbspannBlt(AbspannListe[AbspannNr][z].Bild,
          (100 * Math.sin(pi / MAXY * (Bmp[AbspannListe[AbspannNr][z].Bild].rcDes.top +
            Bmp[AbspannListe[AbspannNr][z].Bild].Hoehe / 2))));
    }
  }
  else if (AbspannZustand === 1) {
    drawSprite(guySpritesForAbspann[Math.floor(AbspannNr / 10)], AbspannNr % 10, MAXX / 2, MAXY / 2 + 50, 10)
  }
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

const AbspannBlt = (Bild, Prozent) => {
  rcRectsrc.left = Bmp[Bild].rcSrc.left;
  rcRectsrc.top = Bmp[Bild].rcSrc.top;
  rcRectsrc.right = Bmp[Bild].rcSrc.right;
  rcRectsrc.bottom = Bmp[Bild].rcSrc.bottom;
  rcRectdes.left = Bmp[Bild].rcDes.left;
  rcRectdes.top = Bmp[Bild].rcDes.top;
  rcRectdes.right = Bmp[Bild].rcDes.right;
  rcRectdes.bottom = Bmp[Bild].rcDes.bottom;
  canvases.PRIMARY.globalAlpha = Prozent / 100;
  drawImage(creditsImage, canvases.PRIMARY);
  canvases.PRIMARY.globalAlpha = 1;
}

const guySpritesForAbspann = [
  spriteTypes.GUY_WALKING_WEST,
  spriteTypes.GUY_WALKING_NORTH,
  spriteTypes.GUY_WALKING_EAST,
  spriteTypes.GUY_WALKING_SOUTH,
  spriteTypes.GUY_SEARCHING,
  spriteTypes.GUY_EATING,
  spriteTypes.GUY_DRINKING,
  spriteTypes.GUY_CHOPPING,
  spriteTypes.GUY_HARROWING,
  spriteTypes.GUY_LIGHTNING,
  spriteTypes.GUY_LOOKING,
  spriteTypes.GUY_SHOVELING,
  spriteTypes.GUY_KNOTTING_NORTH,
  spriteTypes.GUY_KNOTTING_SOUTH,
  spriteTypes.GUY_SLINGING,
  spriteTypes.GUY_LAYING_DOWN,
  spriteTypes.GUY_SLEEPING,
  spriteTypes.GUY_STANDING_UP,
  spriteTypes.GUY_FISHING_SWINGING_WEST,
  spriteTypes.GUY_FISHING_WEST,
  spriteTypes.GUY_FISHING_CATCHING_WEST,
  spriteTypes.GUY_FISHING_SWINGING_NORTH,
  spriteTypes.GUY_FISHING_NORTH,
  spriteTypes.GUY_FISHING_CATCHING_NORTH,
  spriteTypes.GUY_FISHING_SWINGING_EAST,
  spriteTypes.GUY_FISHING_EAST,
  spriteTypes.GUY_FISHING_CATCHING_EAST,
  spriteTypes.GUY_FISHING_SWINGING_SOUTH,
  spriteTypes.GUY_FISHING_SOUTH,
  spriteTypes.GUY_FISHING_CATCHING_SOUTH,
  spriteTypes.GUY_HITTING,
  spriteTypes.GUY_HAMMERING,
  spriteTypes.GUY_CLIMBING_UP,
  spriteTypes.GUY_CLIMBING_DOWN,
  spriteTypes.GUY_WAITING,
  spriteTypes.GUY_LAYING_DOWN,
  spriteTypes.GUY_DYING,
  spriteTypes.GUY_SAILING,
  spriteTypes.GUY_TANKING,
  spriteTypes.GUY_SWIMMING,
  spriteTypes.GUY_PADDLING_WEST,
  spriteTypes.GUY_PADDLING_NORTH,
  spriteTypes.GUY_PADDLING_EAST,
  spriteTypes.GUY_PADDLING_SOUTH,
  spriteTypes.GUY_FISHING_SWINGING_BOAT,
  spriteTypes.GUY_FISHING_BOAT,
  spriteTypes.GUY_FISHING_CATCHING_BOAT,
  spriteTypes.GUY_DIVING_JUMPING,
  spriteTypes.GUY_DIVING,
  spriteTypes.GUY_DIVING_CLIMBING,
  spriteTypes.GUY_WAITING_BOAT,
  spriteTypes.GUY_DYING_BOAT,
];

const AbspannCalc = () => {
  let i, k;

  if (AbspannZustand === 0) {
    for (k = 1; k < 10; k++) {
      if (AbspannListe[AbspannNr][k].Bild === -1) break;
      if (!AbspannListe[AbspannNr][k].Aktiv) continue;
      i = Math.floor(150 / framesPerSecond);
      Bmp[AbspannListe[AbspannNr][k].Bild].rcDes.top -= i;
      Bmp[AbspannListe[AbspannNr][k].Bild].rcDes.bottom -= i;

      if (Bmp[AbspannListe[AbspannNr][k].Bild].rcDes.top < MAXY - 400) {
        if ((!AbspannListe[AbspannNr][k + 1].Aktiv) &&
          (AbspannListe[AbspannNr][k + 1].Bild !== -1))
          AbspannListe[AbspannNr][k + 1].Aktiv = true;
      }
      if (Bmp[AbspannListe[AbspannNr][k].Bild].rcDes.top < 0) {
        AbspannListe[AbspannNr][k].Aktiv = false;
        Bmp[AbspannListe[AbspannNr][k].Bild].rcDes.top = Math.floor(MAXY - Bmp[AbspannListe[AbspannNr][k].Bild].Hoehe / 2);
        Bmp[AbspannListe[AbspannNr][k].Bild].rcDes.bottom = Bmp[AbspannListe[AbspannNr][k].Bild].rcDes.top + Bmp[AbspannListe[AbspannNr][k].Bild].Hoehe;
        if (!AbspannListe[AbspannNr][k + 1].Aktiv) {
          if (AbspannListe[AbspannNr + 1][0].Bild !== -1) {
            AbspannNr++;
            AbspannListe[AbspannNr][1].Aktiv = true;
          } else {
            AbspannNr = 0;
            AbspannZustand = 1;
            break;
          }
        }
      }
    }
  }
  else if (AbspannZustand === 1) {
    const sprite = sprites[guySpritesForAbspann[Math.floor(AbspannNr / 10)]];
    i = Math.round(framesPerSecond / sprite.speed);
    if (i < 1) i = 1;
    if (frame % i === 0) {
      AbspannNr++;
      const frame = AbspannNr % 10;
      if (frame >= sprite.frameCount) {
        AbspannNr = Math.floor(AbspannNr / 10) * 10 + 10;
        if (Math.floor(AbspannNr / 10) >= guySpritesForAbspann.length) AbspannNr = 0;
      }
    }
  }
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
    case actionTypes.ENDING_DAY:
      AkTagEnde();
      break;
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
      Spielzustand = GAME_PLAY;
      state.guy.action = null;
      openPaper(texts.INTROTEXT, false);
      SaveGame();
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
        return;
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
          SaveGame();
        }
        audio.stopAll();
        Spielzustand = GAME_CREDITS;
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
      Nacht = false;
      Fade(100, 1);
      startGuyAnimation(isOnSea() ? spriteTypes.GUY_DYING_BOAT : spriteTypes.GUY_DYING);
      break;
    case 4:
      Nacht = true;
      openPaper(texts.TAGNEU, true);
      break;
    case 5:
      Nacht = false;
      state.guy.action = null;
      if (state.paper.question.answer) {
        startGame(false)
      } else {
        audio.stopAll();
        Spielzustand = GAME_CREDITS;
      };
      closePaper();
      break;
  }
}

const AkTagEnde = () => {
  const alreadyAtSleepPosition = state.guy.sprite === spriteTypes.GUY_SLEEPING_TENT ||
    state.guy.sprite === spriteTypes.GUY_SLEEPING ||
    state.guy.sprite === spriteTypes.GUY_SLEEPING_HOUSE ||
    isOnSea();
  const tile = state.terrain[state.guy.tile.x][state.guy.tile.y];
  const tent = isUsableTent(tile);
  const house = isUsableTreeHouse(tile);

  state.guy.action.step++;
  switch (state.guy.action.step) {
    case 1:
      state.calendar.minutes = 12 * 60;
      if (alreadyAtSleepPosition) break;
      pauseConstruction();
      break;
    case 2:
      state.calendar.minutes = 12 * 60;
      if (alreadyAtSleepPosition) break;
      const neighborWithHouse = findNeighbor(isUsableTreeHouse, false);
      const neighborWithTent = findNeighbor(isUsableTent, false);
      const neighbor = neighborWithHouse || neighborWithTent;
      if (neighbor) {
        state.guy.tile.x = neighbor.x;
        state.guy.tile.y = neighbor.y;
        const tile = state.terrain[neighbor.x][neighbor.y];
        if (neighborWithHouse) {
          goToOnTile({
            x: tile.object.x + 1,
            y: tile.object.y + 1
          });
        } else {
          goToOnTile({
            x: tile.object.x - 10,
            y: tile.object.y + 5
          });
        }
      }
      break;
    case 3:
      state.calendar.minutes = 12 * 60;
      if (alreadyAtSleepPosition) break;
      if (house) {
        startGuyAnimation(spriteTypes.GUY_CLIMBING_UP);
      }
      break;
    case 4:
      Fade(0, 3);
      state.calendar.minutes = 12 * 60;
      if (alreadyAtSleepPosition) break;
      if (tent) {
        startGuyAnimation(spriteTypes.GUY_LAYING_DOWN_TENT);
      } else if (house) {
        startGuyAnimation(spriteTypes.GUY_LAYING_DOWN_HOUSE);
      } else {
        startGuyAnimation(spriteTypes.GUY_LAYING_DOWN);
      }
      break;
    case 5:
      state.calendar.minutes = 12 * 60;
      if (isOnSea()) break;
      if (tent) {
        startGuyAnimation(spriteTypes.GUY_SLEEPING_TENT);
      } else if (house) {
        startGuyAnimation(spriteTypes.GUY_SLEEPING_HOUSE);
      } else startGuyAnimation(spriteTypes.GUY_SLEEPING);
      sounds.SNORING.instance.play();
      break;
    case 6:
      state.calendar.minutes = 12 * 60;
      if (isOnSea()) break;
      if (tent)
        startGuyAnimation(spriteTypes.GUY_SLEEPING_TENT);
      else if (house)
        startGuyAnimation(spriteTypes.GUY_SLEEPING_HOUSE);
      else startGuyAnimation(spriteTypes.GUY_SLEEPING);
      sounds.SNORING.instance.play();
      break;
    case 7:
      Nacht = true;
      state.calendar.minutes = 12 * 60;
      sounds.WOLF.instance.play();

      //Je nach Schlafort Zustand verändern
      if (tent) {
        changeHealth(-5);
        if (state.guy.health <= 0) {
          openDayEndPaper(texts.TAGENDE5);
          startAction(actionTypes.DYING);
          state.guy.action.step = 2;
          state.calendar.minutes = 0;
        } else {
          openPaper(texts.TAGENDE2, false);
        }
      } else if (house) {
        changeHealth(20);
        openDayEndPaper(texts.TAGENDE4);
      } else if (isOnSea()) {
        openDayEndPaper(texts.TAGENDE3);
        startAction(actionTypes.DYING);
        state.guy.action.step = 2;
        state.calendar.minutes = 0;
      } else {
        changeHealth(-20);
        if (state.guy.health <= 0) {
          openDayEndPaper(texts.TAGENDE5);
          startAction(actionTypes.DYING);
          state.guy.action.step = 2;
          state.calendar.minutes = 0;
        } else {
          openDayEndPaper(texts.TAGENDE1);
        }
      }
      break;
    case 8:
      Fade(0, 0);
      Nacht = false;
      state.calendar.day++;
      state.calendar.minutes = 0;
      if (tent)
        startGuyAnimation(spriteTypes.GUY_SLEEPING_TENT);
      else if (house)
        startGuyAnimation(spriteTypes.GUY_SLEEPING_HOUSE);
      else startGuyAnimation(spriteTypes.GUY_SLEEPING);
      sounds.SNORING.instance.play();
      break;
    case 9:
      Fade(100, 2);
      state.calendar.minutes = 0;
      if (tent)
        startGuyAnimation(spriteTypes.GUY_SLEEPING_TENT);
      else if (house)
        startGuyAnimation(spriteTypes.GUY_SLEEPING_HOUSE);
      else startGuyAnimation(spriteTypes.GUY_SLEEPING);
      sounds.SNORING.instance.play();
      break;
    case 10:
      state.calendar.minutes = 0;
      sounds.SNORING.instance.stop();
      if (house) {
        startGuyAnimation(spriteTypes.GUY_STANDING_UP_HOUSE);
      } else startGuyAnimation(spriteTypes.GUY_STANDING_UP);
      break;
    case 11:
      state.calendar.minutes = 0;
      if (house) {
        startGuyAnimation(spriteTypes.GUY_CLIMBING_DOWN);
      }
      break;
    case 12:
      state.calendar.minutes = 0;

      goToCenterOfTile();
      state.guy.action = null;
      if (state.guy.health > 10) SaveGame();
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
      if (state.paper.question.answer) {
        Spielzustand = GAME_OUTRO;
      } else {
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
      Spielzustand = GAME_CREDITS;
      break;
  }
}

const Fade = (intensity, smooth) => {
  canvases.PRIMARY.canvas.style.transition = `${smooth}s filter ease-in-out`;
  canvases.PRIMARY.canvas.style.filter = `brightness(${intensity}%) saturate(${intensity}%)`;
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

  if (Spielzustand === GAME_WAIT) {
    return true;
  } else if (Spielzustand === GAME_LOGO) {
    if (CheckKey() === 2) return true;    //Das Keyboard abfragen
    ZeigeLogo(); //Bild auffrischen

  } else if ((Spielzustand === GAME_INTRO) || (Spielzustand === GAME_OUTRO)) {
    if (CheckKey() === 2) return true;    //Das Keyboard abfragen
    Animationen();  //Animationen weiterschalten
    discoverTerrain();
    playTerrainSounds();
    updateCamera(state.guy.position, true);
    processAction();
    Event(); //Aktionen starten
    drawTerrain(state.camera, false);
  } else if (Spielzustand === GAME_PLAY) {
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
    if (Spielbeenden) return false;

  } else if (Spielzustand === GAME_CREDITS) {
    if (CheckKey() === 0) return false;
    AbspannCalc();
    ZeigeAbspann();
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
