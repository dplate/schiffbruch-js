import setupAudio from './sounds/setupAudio.js';
import generateIsland from './terrain/generateIsland.js';
import setGrounds from './terrain/setGrounds.js';
import tileTypes from './terrain/tiles/tileTypes.js';
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
import isDrinkable from './terrain/objects/isDrinkable.js';
import isEatable from './terrain/objects/isEatable.js';
import isNormalTree from './terrain/objects/isNormalTree.js';
import isFishable from './terrain/objects/isFishable.js';
import isRiver from './terrain/objects/isRiver.js';
import updateCamera from './camera/updateCamera.js';
import restrictCamera from './camera/restrictCamera.js';
import findRoute from './guy/routing/findRoute.js';
import goToOnTile from './guy/routing/goToOnTile.js';
import goTo from './guy/routing/goTo.js';
import goToCenterOfTile from './guy/routing/goToCenterOfTile.js';
import goToWestOfTile from './guy/routing/goToWestOfTile.js';
import goToStoredPosition from './guy/routing/goToStoredPosition.js';
import goToObject from './guy/routing/goToObject.js';
import goToEastOfTile from './guy/routing/goToEastOfTile.js';
import goToNorthOfTile from './guy/routing/goToNorthOfTile.js';
import goToSouthOfTile from './guy/routing/goToSouthOfTile.js';
import goToOffset from './guy/routing/goToOffset.js';
import isOnSea from './guy/isOnSea.js';
import changeWaterAndFood from './guy/changeWaterAndFood.js';
import changeHealth from './guy/changeHealth.js';
import createInventory from './guy/inventory/createInventory.js';
import items from './guy/inventory/items.js';
import changeItem from './guy/inventory/changeItem.js';
import findItemUnderCursor from './guy/inventory/findItemUnderCursor.js';
import itemTextIds from './guy/inventory/itemTextIds.js';
import drawItems from './guy/inventory/drawItems.js';
import itemSprites from './guy/inventory/itemSprites.js';
import drawItem from './guy/inventory/drawItem.js';
import updateMinimap from './minimap/updateMinimap.js';
import discoverTerrain from './guy/discoverTerrain.js';
import animateGuy from './guy/animateGuy.js';
import sounds from './sounds/sounds.js';
import startGuyAnimation from './guy/startGuyAnimation.js';
import constructions from './construction/constructions.js';
import constructionTypes from './construction/constructionTypes.js';
import startConstruction from './construction/startConstruction.js';
import construct from './construction/construct.js';
import finishConstruction from './construction/finishConstruction.js';
import isUsableTent from './terrain/objects/isUsableTent.js';
import isUsableTreeHouse from './terrain/objects/isUsableTreeHouse.js';
import findNeighbor from './guy/findNeighbor.js';
import directions from './terrain/directions.js';
import pauseConstruction from './construction/pauseConstruction.js';
import continueConstruction from './construction/continueConstruction.js';
import isDestroyable from './terrain/objects/isDestroyable.js';
import isUsableBoat from './terrain/objects/isUsableBoat.js';
import isBigTree from './terrain/objects/isBigTree.js';
import isUsableFireplace from './terrain/objects/isUsableFireplace.js';
import updatePipes from './terrain/updatePipes.js';
import createTreeFallObject from './terrain/objects/createTreeFallObject.js';
import drawText from './text/drawText.js';
import textAreas from './text/textAreas.js';
import clearText from './text/clearText.js';
import closePaper from './text/closePaper.js';
import drawPaper from './text/drawPaper.js';
import blitText from './text/blitText.js';
import openPaper from './text/openPaper.js';
import canvases from './images/canvases.js';
import getTileByPosition from './terrain/getTileByPosition.js';
import calculatePositionInTile from './terrain/tiles/calculatePositionInTile.js';
import texts from './text/texts.js';
import drawStartConstructionText from './construction/drawStartConstructionText.js';
import openDayEndPaper from './text/openDayEndPaper.js';
import drawStatusText from './text/drawStatusText.js';
import drawTileText from './terrain/tiles/drawTileText.js';
import drawMinimap from './minimap/drawMinimap.js';
import moveCameraFromMinimap from './minimap/moveCameraFromMinimap.js';

const MAXXKACH = 61    //Anzahl der Kacheln
const MAXYKACH = 61;
const MAXX = 800; //Bildschirmauflösung
const MAXY = 600;

const CUPFEIL = 34;
const CURICHTUNG = CUPFEIL + 1;
const CUUHR = CUPFEIL + 2;
const BUTTGITTER = 51;
const BUTTBEENDEN = BUTTGITTER + 1;
const BUTTNEU = BUTTGITTER + 2;
const BUTTTAGNEU = BUTTGITTER + 3;
const BUTTSOUND = BUTTGITTER + 4;
const BUTTAKTION = BUTTGITTER + 5;
const BUTTBAUEN = BUTTGITTER + 6;
const BUTTINVENTAR = BUTTGITTER + 7;
const BUTTWEITER = BUTTGITTER + 8;
const BUTTSTOP = BUTTGITTER + 9;
const BUTTABLEGEN = BUTTGITTER + 10;
const BUTTSUCHEN = 118;
const BUTTESSEN = BUTTSUCHEN + 1;
const BUTTSCHLAFEN = BUTTSUCHEN + 2;
const BUTTFAELLEN = BUTTSUCHEN + 3;
const BUTTANGELN = BUTTSUCHEN + 4;
const BUTTANZUENDEN = BUTTSUCHEN + 5;
const BUTTAUSSCHAU = BUTTSUCHEN + 6;
const BUTTSCHATZKARTE = BUTTSUCHEN + 7;
const BUTTSCHATZ = BUTTSUCHEN + 8;
const BUTTSCHLEUDER = BUTTSUCHEN + 9;
const BUTTZELT = 128;
const BUTTFELD = BUTTZELT + 1;
const BUTTBOOT = BUTTZELT + 2;
const BUTTROHR = BUTTZELT + 3;
const BUTTSOS = BUTTZELT + 4;
const BUTTHAUS1 = BUTTZELT + 5;
const BUTTHAUS2 = BUTTZELT + 6;
const BUTTHAUS3 = BUTTZELT + 7;
const BUTTFEUERST = BUTTZELT + 8;
const BUTTFRAGEZ = BUTTZELT + 9;
const BUTTDESTROY = BUTTZELT + 10;
const SAEULE1 = 140;
const SAEULE2 = SAEULE1 + 1;
const SAEULE3 = SAEULE1 + 2;
const INVPAPIER = 157;
const RING = INVPAPIER + 1;
const SONNE = INVPAPIER + 2;
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

//Aktionen
const AKNICHTS = 0;
const AKSUCHEN = 1;
const AKESSEN = 2;
const AKTRINKEN = 3;
const AKFAELLEN = 4;
const AKFELD = 5;
const AKTAGENDE = 6;
const AKGERETTET = 7;
const AKZELT = 8;
const AKSCHLAFEN = 9;
const AKABBRUCH = 10;
const AKANGELN = 11;
const AKBOOT = 12;
const AKABLEGEN = 13;
const AKANLEGEN = 14;
const AKROHR = 15;
const AKDESTROY = 16;
const AKSOS = 17;
const AKHAUS1 = 18;
const AKHAUS2 = 19;
const AKHAUS3 = 20;
const AKFEUERSTELLE = 21;
const AKANZUENDEN = 22;
const AKAUSSCHAU = 23;
const AKSCHATZ = 24;
const AKINTRO = 25;
const AKSCHLEUDER = 26;
const AKSPIELVERLASSEN = 27;
const AKNEUBEGINNEN = 28;
const AKTOD = 29;
const AKTAGNEUBEGINNEN = 30;

//Menüs
const MEKEINS = 0;
const MEAKTION = 1;
const MEBAUEN = 2;
const MEINVENTAR = 3;

//Spielzustände
const GAME_WAIT = 'wait';
const GAME_INTRO = 'intro';
const GAME_PLAY = 'play';
const GAME_CREDITS = 'credits';
const GAME_OUTRO = 'outro';
const GAME_LOGO = 'logo';

//ddraw
let panelImage = null;
let textfieldImage = null;
let creditsImage = null;
let logoImage = null;
let cursorsImage = null;
let buttonsImage = null;
let inventarImage = null;

// Input
const mouseUpdates = {
  x: 0,
  y: 0,
  rgbButtons: []
};
const pressedKeyCodes = {};

// Sound
let audio;

let Spielzustand = GAME_LOGO;       // in welchem Zustand ist das Spiel?
let MouseAktiv = false;    // Mouse angestellt?
let CursorTyp;        //Welcher Cursortyp?
let Button0down;    //linke Maustaste gedrückt gehalten
let Button1down;    //rechte Maustaste gedrückt gehalten
let timestampInSeconds;            //Start der Sekunde
let frame, framesPerSecond;    //Anzahl der Bilder in der Sekunde
let rcRectdes = { left: null, top: null, right: null, bottom: null }; //Ständig benötigte Variable zum Blitten
let rcRectsrc = { left: null, top: null, right: null, bottom: null }; //Ständig benötigte Variable zum Blitten
let StdString = '';    //Standard string
let HauptMenue;            //Welches Menü?
let TwoClicks;                //Für Aktionen mit zwei Mausklicks
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

let Guy = {
  Aktion: null,              //Welche Aktion (Suchen, fischen ...) (Übergeordnet über Zustand)
  AkNummer: null,            //Bei welcher Aktion (für die Aktionsprozeduren)
};

const Bmp = Array.from(Array(BILDANZ), () => ({
  Surface: null, //in welcher Surface gespeichert?
  Animation: null, //Läuft die Animations?
  Anzahl: null,    //Anzahl der Animationsphasen
  Phase: null,    //die aktuelle Phase
  rcSrc: { left: null, top: null, right: null, bottom: null },     //Quelle des 1. Bildes
  rcDes: { left: null, top: null, right: null, bottom: null },        //Falls es immer an die gleiche Stelle gezeichnet wird. (Buttons)
  Breite: null,   //Die Breite des Bildes
  Hoehe: null,    //Die Hoehe des Bildes
  Geschwindigkeit: null, //Wieviel Bilder/sec
}));

const AbspannListe = Array.from(Array(10), () => Array.from(Array(10), () => ({
  Aktiv: null,       //Bewegt sich gerade
  Bild: null,        //welches Bild
})));    //Namenabfolge im Abspann

const gameData = {
  terrain: Array.from(
    Array(MAXXKACH), () => Array.from(
      Array(MAXYKACH), () => ({})
    )
  ),
  camera: {
    x: 0,
    y: 0,
    width: null,
    height: null
  },
  options: {
    grid: false
  },
  guy: {
    active: false,
    route: [],
    sprite: null,
    frame: null,
    position: {
      x: null,
      y: null
    },
    prevPosition: null,
    tile: {
      x: null,
      y: null
    },
    water: null,
    food: null,
    health: null,
    inventory: null,
    chance: null
  },
  constructionHints: {},
  calendar: {
    day: null,
    minutes: null,
  },
  paper: null
};

//Bilder
const loadImage = async (file) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.addEventListener('load', () => resolve(img), false);
    img.src = `./images/${file}`;
  });
};

const initCanvases = async (window) => {
  panelImage = await loadImage('panel.png');
  cursorsImage = await loadImage('cursors.png');
  buttonsImage = await loadImage('buttons.png');
  textfieldImage = await loadImage('textfield.png');
  inventarImage = await loadImage('inventory.png');
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

const initAudio = () => {
  audio = setupAudio();
  return audio;
}

const SaveGame = () => {
  let i;

  const animations = [];
  for (i = 0; i < BILDANZ; i++) {
    animations.push({
      Animation: Bmp[i].Animation,
      Phase: Bmp[i].Phase,
    });
  }

  window.localStorage.setItem('gameDataV9', JSON.stringify({
    ...gameData,
    Guy,
    HauptMenue,
    Spielzustand,
    animations
  }));
}

const LoadGame = () => {
  let i;

  const rawGameData = window.localStorage.getItem('gameDataV9');
  if (!rawGameData) {
    return false;
  }

  let parsedGameData = null;
  try {
    parsedGameData = JSON.parse(rawGameData);
  } catch (error) {
    console.warn('Cannot parse saved gamed, ignoring...', error)
    return false;
  };
  for (const key in parsedGameData) {
    gameData[key] = parsedGameData[key];
  }
  gameData.paper = null;

  Guy = gameData.Guy;
  HauptMenue = gameData.HauptMenue;
  Spielzustand = gameData.Spielzustand;

  for (i = 0; i < BILDANZ; i++) {
    Bmp[i].Animation = gameData.animations[i].Animation;
    Bmp[i].Phase = gameData.animations[i].Phase;
  }

  return true;
}

const InitStructs = async () => {
  let i, k;

  //BILD
  //Standardbildinitialisierung
  for (i = 0; i < BILDANZ; i++) {
    Bmp[i].Animation = false;
    Bmp[i].Anzahl = 0;
    Bmp[i].Geschwindigkeit = 0;
    Bmp[i].Phase = 0;
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
    Bmp[i].Animation = false;
    Bmp[i].Anzahl = 1;
    Bmp[i].Geschwindigkeit = 0;
    Bmp[i].Phase = 0;
    Bmp[i].Surface = cursorsImage;
    Bmp[i].rcSrc.left = (i - CUPFEIL) * 18;
    Bmp[i].rcSrc.top = 0;
    Bmp[i].rcSrc.right = Bmp[i].rcSrc.left + 18;
    Bmp[i].rcSrc.bottom = 18;
    Bmp[i].Breite = 18;
    Bmp[i].Hoehe = 18;
  }

  //Buttons

  //StandardBmponsinitialisierung
  for (i = BUTTGITTER; i <= BUTTDESTROY; i++) {
    Bmp[i].Animation = false;
    Bmp[i].Surface = buttonsImage;
    Bmp[i].Anzahl = 1;
    Bmp[i].Phase = 0;
  }

  //ButtGitter
  Bmp[BUTTGITTER].rcSrc.left = 0;
  Bmp[BUTTGITTER].rcSrc.top = 0;
  Bmp[BUTTGITTER].rcSrc.right = 28;
  Bmp[BUTTGITTER].rcSrc.bottom = 28;
  Bmp[BUTTGITTER].rcDes.left = rcPanel.left + 173;
  Bmp[BUTTGITTER].rcDes.top = rcPanel.top + 26;
  Bmp[BUTTGITTER].rcDes.right = Bmp[BUTTGITTER].rcDes.left + 28;
  Bmp[BUTTGITTER].rcDes.bottom = Bmp[BUTTGITTER].rcDes.top + 28;
  Bmp[BUTTGITTER].Breite = (Bmp[BUTTGITTER].rcSrc.right - Bmp[BUTTGITTER].rcSrc.left);
  Bmp[BUTTGITTER].Hoehe = (Bmp[BUTTGITTER].rcSrc.bottom - Bmp[BUTTGITTER].rcSrc.top);
  Bmp[BUTTGITTER].Anzahl = 2;

  //BUTTBEENDEN
  Bmp[BUTTBEENDEN].rcSrc.left = 0;
  Bmp[BUTTBEENDEN].rcSrc.top = 112;
  Bmp[BUTTBEENDEN].rcSrc.right = 20;
  Bmp[BUTTBEENDEN].rcSrc.bottom = 112 + 20;
  Bmp[BUTTBEENDEN].rcDes.left = rcPanel.left + 60;
  Bmp[BUTTBEENDEN].rcDes.top = rcPanel.top + 2;
  Bmp[BUTTBEENDEN].rcDes.right = Bmp[BUTTBEENDEN].rcDes.left + 20;
  Bmp[BUTTBEENDEN].rcDes.bottom = Bmp[BUTTBEENDEN].rcDes.top + 20;
  Bmp[BUTTBEENDEN].Breite = (Bmp[BUTTBEENDEN].rcSrc.right - Bmp[BUTTBEENDEN].rcSrc.left);
  Bmp[BUTTBEENDEN].Hoehe = (Bmp[BUTTBEENDEN].rcSrc.bottom - Bmp[BUTTBEENDEN].rcSrc.top);
  Bmp[BUTTBEENDEN].Anzahl = 4;
  Bmp[BUTTBEENDEN].Geschwindigkeit = 4;

  //BUTTNEU
  Bmp[BUTTNEU].rcSrc.left = 0;
  Bmp[BUTTNEU].rcSrc.top = 192;
  Bmp[BUTTNEU].rcSrc.right = 20;
  Bmp[BUTTNEU].rcSrc.bottom = 192 + 20;
  Bmp[BUTTNEU].rcDes.left = rcPanel.left + 100;
  Bmp[BUTTNEU].rcDes.top = rcPanel.top + 2;
  Bmp[BUTTNEU].rcDes.right = Bmp[BUTTNEU].rcDes.left + 20;
  Bmp[BUTTNEU].rcDes.bottom = Bmp[BUTTNEU].rcDes.top + 20;
  Bmp[BUTTNEU].Breite = (Bmp[BUTTNEU].rcSrc.right - Bmp[BUTTNEU].rcSrc.left);
  Bmp[BUTTNEU].Hoehe = (Bmp[BUTTNEU].rcSrc.bottom - Bmp[BUTTNEU].rcSrc.top);
  Bmp[BUTTNEU].Anzahl = 2;
  Bmp[BUTTNEU].Geschwindigkeit = 3;


  //BUTTTAGNEU
  Bmp[BUTTTAGNEU].rcSrc.left = 0;
  Bmp[BUTTTAGNEU].rcSrc.top = 232;
  Bmp[BUTTTAGNEU].rcSrc.right = 20;
  Bmp[BUTTTAGNEU].rcSrc.bottom = 232 + 20;
  Bmp[BUTTTAGNEU].rcDes.left = rcPanel.left + 140;
  Bmp[BUTTTAGNEU].rcDes.top = rcPanel.top + 2;
  Bmp[BUTTTAGNEU].rcDes.right = Bmp[BUTTTAGNEU].rcDes.left + 20;
  Bmp[BUTTTAGNEU].rcDes.bottom = Bmp[BUTTTAGNEU].rcDes.top + 20;
  Bmp[BUTTTAGNEU].Breite = (Bmp[BUTTTAGNEU].rcSrc.right - Bmp[BUTTTAGNEU].rcSrc.left);
  Bmp[BUTTTAGNEU].Hoehe = (Bmp[BUTTTAGNEU].rcSrc.bottom - Bmp[BUTTTAGNEU].rcSrc.top);
  Bmp[BUTTTAGNEU].Anzahl = 2;
  Bmp[BUTTTAGNEU].Geschwindigkeit = 2;

  //BUTTSOUND
  Bmp[BUTTSOUND].rcSrc.left = 0;
  Bmp[BUTTSOUND].rcSrc.top = 272;
  Bmp[BUTTSOUND].rcSrc.right = 28;
  Bmp[BUTTSOUND].rcSrc.bottom = 272 + 28;
  Bmp[BUTTSOUND].rcDes.left = rcPanel.left + 173;
  Bmp[BUTTSOUND].rcDes.top = rcPanel.top + 60;
  Bmp[BUTTSOUND].rcDes.right = Bmp[BUTTSOUND].rcDes.left + 28;
  Bmp[BUTTSOUND].rcDes.bottom = Bmp[BUTTSOUND].rcDes.top + 28;
  Bmp[BUTTSOUND].Breite = (Bmp[BUTTSOUND].rcSrc.right - Bmp[BUTTSOUND].rcSrc.left);
  Bmp[BUTTSOUND].Hoehe = (Bmp[BUTTSOUND].rcSrc.bottom - Bmp[BUTTSOUND].rcSrc.top);
  Bmp[BUTTSOUND].Anzahl = 2;

  //ButtAktion
  Bmp[BUTTAKTION].rcSrc.left = 28;
  Bmp[BUTTAKTION].rcSrc.top = 0;
  Bmp[BUTTAKTION].rcSrc.right = 28 + 35;
  Bmp[BUTTAKTION].rcSrc.bottom = 35;
  Bmp[BUTTAKTION].rcDes.left = rcPanel.left + 29;
  Bmp[BUTTAKTION].rcDes.top = rcPanel.top + 157;
  Bmp[BUTTAKTION].rcDes.right = Bmp[BUTTAKTION].rcDes.left + 35;
  Bmp[BUTTAKTION].rcDes.bottom = Bmp[BUTTAKTION].rcDes.top + 35;
  Bmp[BUTTAKTION].Breite = (Bmp[BUTTAKTION].rcSrc.right - Bmp[BUTTAKTION].rcSrc.left);
  Bmp[BUTTAKTION].Hoehe = (Bmp[BUTTAKTION].rcSrc.bottom - Bmp[BUTTAKTION].rcSrc.top);
  Bmp[BUTTAKTION].Anzahl = 3;
  Bmp[BUTTAKTION].Geschwindigkeit = 6;

  //BUTTBAUEN
  Bmp[BUTTBAUEN].rcSrc.left = 203;
  Bmp[BUTTBAUEN].rcSrc.top = 0;
  Bmp[BUTTBAUEN].rcSrc.right = 203 + 35;
  Bmp[BUTTBAUEN].rcSrc.bottom = 35;
  Bmp[BUTTBAUEN].rcDes.left = rcPanel.left + 70;
  Bmp[BUTTBAUEN].rcDes.top = rcPanel.top + 157;
  Bmp[BUTTBAUEN].rcDes.right = Bmp[BUTTBAUEN].rcDes.left + 35;
  Bmp[BUTTBAUEN].rcDes.bottom = Bmp[BUTTBAUEN].rcDes.top + 35;
  Bmp[BUTTBAUEN].Breite = (Bmp[BUTTBAUEN].rcSrc.right - Bmp[BUTTBAUEN].rcSrc.left);
  Bmp[BUTTBAUEN].Hoehe = (Bmp[BUTTBAUEN].rcSrc.bottom - Bmp[BUTTBAUEN].rcSrc.top);
  Bmp[BUTTBAUEN].Anzahl = 4;
  Bmp[BUTTBAUEN].Geschwindigkeit = 5;


  //BUTTINVENTAR
  Bmp[BUTTINVENTAR].rcSrc.left = 168;
  Bmp[BUTTINVENTAR].rcSrc.top = 0;
  Bmp[BUTTINVENTAR].rcSrc.right = 168 + 35;
  Bmp[BUTTINVENTAR].rcSrc.bottom = 35;
  Bmp[BUTTINVENTAR].rcDes.left = rcPanel.left + 152;
  Bmp[BUTTINVENTAR].rcDes.top = rcPanel.top + 157;
  Bmp[BUTTINVENTAR].rcDes.right = Bmp[BUTTINVENTAR].rcDes.left + 35;
  Bmp[BUTTINVENTAR].rcDes.bottom = Bmp[BUTTINVENTAR].rcDes.top + 35;
  Bmp[BUTTINVENTAR].Breite = (Bmp[BUTTINVENTAR].rcSrc.right - Bmp[BUTTINVENTAR].rcSrc.left);
  Bmp[BUTTINVENTAR].Hoehe = (Bmp[BUTTINVENTAR].rcSrc.bottom - Bmp[BUTTINVENTAR].rcSrc.top);
  Bmp[BUTTINVENTAR].Anzahl = 4;
  Bmp[BUTTINVENTAR].Geschwindigkeit = 4;

  //BUTTWEITER
  Bmp[BUTTWEITER].rcSrc.left = 343;
  Bmp[BUTTWEITER].rcSrc.top = 0;
  Bmp[BUTTWEITER].rcSrc.right = 343 + 35;
  Bmp[BUTTWEITER].rcSrc.bottom = 35;
  Bmp[BUTTWEITER].rcDes.left = rcPanel.left + 111;
  Bmp[BUTTWEITER].rcDes.top = rcPanel.top + 157;
  Bmp[BUTTWEITER].rcDes.right = Bmp[BUTTWEITER].rcDes.left + 35;
  Bmp[BUTTWEITER].rcDes.bottom = Bmp[BUTTWEITER].rcDes.top + 35;
  Bmp[BUTTWEITER].Breite = (Bmp[BUTTWEITER].rcSrc.right - Bmp[BUTTWEITER].rcSrc.left);
  Bmp[BUTTWEITER].Hoehe = (Bmp[BUTTWEITER].rcSrc.bottom - Bmp[BUTTWEITER].rcSrc.top);
  Bmp[BUTTWEITER].Anzahl = 4;
  Bmp[BUTTWEITER].Geschwindigkeit = 4;
  Bmp[BUTTWEITER].Phase = -1;

  //BUTTSTOP
  Bmp[BUTTSTOP].rcSrc.left = 378;
  Bmp[BUTTSTOP].rcSrc.top = 0;
  Bmp[BUTTSTOP].rcSrc.right = 378 + 35;
  Bmp[BUTTSTOP].rcSrc.bottom = 35;
  Bmp[BUTTSTOP].rcDes.left = rcPanel.left + 111;
  Bmp[BUTTSTOP].rcDes.top = rcPanel.top + 157;
  Bmp[BUTTSTOP].rcDes.right = Bmp[BUTTSTOP].rcDes.left + 35;
  Bmp[BUTTSTOP].rcDes.bottom = Bmp[BUTTSTOP].rcDes.top + 35;
  Bmp[BUTTSTOP].Breite = (Bmp[BUTTSTOP].rcSrc.right - Bmp[BUTTSTOP].rcSrc.left);
  Bmp[BUTTSTOP].Hoehe = (Bmp[BUTTSTOP].rcSrc.bottom - Bmp[BUTTSTOP].rcSrc.top);
  Bmp[BUTTSTOP].Anzahl = 4;
  Bmp[BUTTSTOP].Geschwindigkeit = 4;
  Bmp[BUTTSTOP].Phase = -1;

  //BUTTABLEGEN
  Bmp[BUTTABLEGEN].rcSrc.left = 483;
  Bmp[BUTTABLEGEN].rcSrc.top = 0;
  Bmp[BUTTABLEGEN].rcSrc.right = 483 + 35;
  Bmp[BUTTABLEGEN].rcSrc.bottom = 35;
  Bmp[BUTTABLEGEN].rcDes.left = rcPanel.left + 111;
  Bmp[BUTTABLEGEN].rcDes.top = rcPanel.top + 157;
  Bmp[BUTTABLEGEN].rcDes.right = Bmp[BUTTABLEGEN].rcDes.left + 35;
  Bmp[BUTTABLEGEN].rcDes.bottom = Bmp[BUTTABLEGEN].rcDes.top + 35;
  Bmp[BUTTABLEGEN].Breite = (Bmp[BUTTABLEGEN].rcSrc.right - Bmp[BUTTABLEGEN].rcSrc.left);
  Bmp[BUTTABLEGEN].Hoehe = (Bmp[BUTTABLEGEN].rcSrc.bottom - Bmp[BUTTABLEGEN].rcSrc.top);
  Bmp[BUTTABLEGEN].Anzahl = 4;
  Bmp[BUTTABLEGEN].Geschwindigkeit = 3;
  Bmp[BUTTSTOP].Phase = -1;

  //BUTTSUCHEN
  Bmp[BUTTSUCHEN].rcSrc.left = 63;
  Bmp[BUTTSUCHEN].rcSrc.top = 0;
  Bmp[BUTTSUCHEN].rcSrc.right = 63 + 35;
  Bmp[BUTTSUCHEN].rcSrc.bottom = 35;
  Bmp[BUTTSUCHEN].rcDes.left = rcPanel.left + 29;
  Bmp[BUTTSUCHEN].rcDes.top = rcPanel.top + 220;
  Bmp[BUTTSUCHEN].rcDes.right = Bmp[BUTTSUCHEN].rcDes.left + 35;
  Bmp[BUTTSUCHEN].rcDes.bottom = Bmp[BUTTSUCHEN].rcDes.top + 35;
  Bmp[BUTTSUCHEN].Breite = (Bmp[BUTTSUCHEN].rcSrc.right - Bmp[BUTTSUCHEN].rcSrc.left);
  Bmp[BUTTSUCHEN].Hoehe = (Bmp[BUTTSUCHEN].rcSrc.bottom - Bmp[BUTTSUCHEN].rcSrc.top);
  Bmp[BUTTSUCHEN].Anzahl = 4;
  Bmp[BUTTSUCHEN].Geschwindigkeit = 4;

  //BUTTESSEN
  Bmp[BUTTESSEN].rcSrc.left = 133;
  Bmp[BUTTESSEN].rcSrc.top = 0;
  Bmp[BUTTESSEN].rcSrc.right = 133 + 35;
  Bmp[BUTTESSEN].rcSrc.bottom = 35;
  Bmp[BUTTESSEN].rcDes.left = rcPanel.left + 70;
  Bmp[BUTTESSEN].rcDes.top = rcPanel.top + 220;
  Bmp[BUTTESSEN].rcDes.right = Bmp[BUTTESSEN].rcDes.left + 35;
  Bmp[BUTTESSEN].rcDes.bottom = Bmp[BUTTESSEN].rcDes.top + 35;
  Bmp[BUTTESSEN].Breite = (Bmp[BUTTESSEN].rcSrc.right - Bmp[BUTTESSEN].rcSrc.left);
  Bmp[BUTTESSEN].Hoehe = (Bmp[BUTTESSEN].rcSrc.bottom - Bmp[BUTTESSEN].rcSrc.top);
  Bmp[BUTTESSEN].Anzahl = 4;
  Bmp[BUTTESSEN].Geschwindigkeit = 4;

  //BUTTSCHLAFEN
  Bmp[BUTTSCHLAFEN].rcSrc.left = 308;
  Bmp[BUTTSCHLAFEN].rcSrc.top = 0;
  Bmp[BUTTSCHLAFEN].rcSrc.right = 308 + 35;
  Bmp[BUTTSCHLAFEN].rcSrc.bottom = 35;
  Bmp[BUTTSCHLAFEN].rcDes.left = rcPanel.left + 111;
  Bmp[BUTTSCHLAFEN].rcDes.top = rcPanel.top + 220;
  Bmp[BUTTSCHLAFEN].rcDes.right = Bmp[BUTTSCHLAFEN].rcDes.left + 35;
  Bmp[BUTTSCHLAFEN].rcDes.bottom = Bmp[BUTTSCHLAFEN].rcDes.top + 35;
  Bmp[BUTTSCHLAFEN].Breite = (Bmp[BUTTSCHLAFEN].rcSrc.right - Bmp[BUTTSCHLAFEN].rcSrc.left);
  Bmp[BUTTSCHLAFEN].Hoehe = (Bmp[BUTTSCHLAFEN].rcSrc.bottom - Bmp[BUTTSCHLAFEN].rcSrc.top);
  Bmp[BUTTSCHLAFEN].Anzahl = 4;
  Bmp[BUTTSCHLAFEN].Geschwindigkeit = 3;

  //BUTTFAELLEN
  Bmp[BUTTFAELLEN].rcSrc.left = 98;
  Bmp[BUTTFAELLEN].rcSrc.top = 0;
  Bmp[BUTTFAELLEN].rcSrc.right = 98 + 35;
  Bmp[BUTTFAELLEN].rcSrc.bottom = 35;
  Bmp[BUTTFAELLEN].rcDes.left = rcPanel.left + 152;
  Bmp[BUTTFAELLEN].rcDes.top = rcPanel.top + 220;
  Bmp[BUTTFAELLEN].rcDes.right = Bmp[BUTTFAELLEN].rcDes.left + 35;
  Bmp[BUTTFAELLEN].rcDes.bottom = Bmp[BUTTFAELLEN].rcDes.top + 35;
  Bmp[BUTTFAELLEN].Breite = (Bmp[BUTTFAELLEN].rcSrc.right - Bmp[BUTTFAELLEN].rcSrc.left);
  Bmp[BUTTFAELLEN].Hoehe = (Bmp[BUTTFAELLEN].rcSrc.bottom - Bmp[BUTTFAELLEN].rcSrc.top);
  Bmp[BUTTFAELLEN].Anzahl = 4;
  Bmp[BUTTFAELLEN].Geschwindigkeit = 4;
  Bmp[BUTTFAELLEN].Phase = -1;

  //BUTTANGELN
  Bmp[BUTTANGELN].rcSrc.left = 413;
  Bmp[BUTTANGELN].rcSrc.top = 0;
  Bmp[BUTTANGELN].rcSrc.right = 413 + 35;
  Bmp[BUTTANGELN].rcSrc.bottom = 35;
  Bmp[BUTTANGELN].rcDes.left = rcPanel.left + 29;
  Bmp[BUTTANGELN].rcDes.top = rcPanel.top + 268;
  Bmp[BUTTANGELN].rcDes.right = Bmp[BUTTANGELN].rcDes.left + 35;
  Bmp[BUTTANGELN].rcDes.bottom = Bmp[BUTTANGELN].rcDes.top + 35;
  Bmp[BUTTANGELN].Breite = (Bmp[BUTTANGELN].rcSrc.right - Bmp[BUTTANGELN].rcSrc.left);
  Bmp[BUTTANGELN].Hoehe = (Bmp[BUTTANGELN].rcSrc.bottom - Bmp[BUTTANGELN].rcSrc.top);
  Bmp[BUTTANGELN].Anzahl = 4;
  Bmp[BUTTANGELN].Geschwindigkeit = 3;
  Bmp[BUTTANGELN].Phase = -1;

  //BUTTANZUENDEN
  Bmp[BUTTANZUENDEN].rcSrc.left = 28;
  Bmp[BUTTANZUENDEN].rcSrc.top = 175;
  Bmp[BUTTANZUENDEN].rcSrc.right = 28 + 35;
  Bmp[BUTTANZUENDEN].rcSrc.bottom = 175 + 35;
  Bmp[BUTTANZUENDEN].rcDes.left = rcPanel.left + 70;
  Bmp[BUTTANZUENDEN].rcDes.top = rcPanel.top + 268;
  Bmp[BUTTANZUENDEN].rcDes.right = Bmp[BUTTANZUENDEN].rcDes.left + 35;
  Bmp[BUTTANZUENDEN].rcDes.bottom = Bmp[BUTTANZUENDEN].rcDes.top + 35;
  Bmp[BUTTANZUENDEN].Breite = (Bmp[BUTTANZUENDEN].rcSrc.right - Bmp[BUTTANZUENDEN].rcSrc.left);
  Bmp[BUTTANZUENDEN].Hoehe = (Bmp[BUTTANZUENDEN].rcSrc.bottom - Bmp[BUTTANZUENDEN].rcSrc.top);
  Bmp[BUTTANZUENDEN].Anzahl = 3;
  Bmp[BUTTANZUENDEN].Geschwindigkeit = 4;
  Bmp[BUTTANZUENDEN].Phase = -1;

  //BUTTAUSSCHAU
  Bmp[BUTTAUSSCHAU].rcSrc.left = 63;
  Bmp[BUTTAUSSCHAU].rcSrc.top = 175;
  Bmp[BUTTAUSSCHAU].rcSrc.right = 63 + 35;
  Bmp[BUTTAUSSCHAU].rcSrc.bottom = 175 + 35;
  Bmp[BUTTAUSSCHAU].rcDes.left = rcPanel.left + 111;
  Bmp[BUTTAUSSCHAU].rcDes.top = rcPanel.top + 268;
  Bmp[BUTTAUSSCHAU].rcDes.right = Bmp[BUTTAUSSCHAU].rcDes.left + 35;
  Bmp[BUTTAUSSCHAU].rcDes.bottom = Bmp[BUTTAUSSCHAU].rcDes.top + 35;
  Bmp[BUTTAUSSCHAU].Breite = (Bmp[BUTTAUSSCHAU].rcSrc.right - Bmp[BUTTAUSSCHAU].rcSrc.left);
  Bmp[BUTTAUSSCHAU].Hoehe = (Bmp[BUTTAUSSCHAU].rcSrc.bottom - Bmp[BUTTAUSSCHAU].rcSrc.top);
  Bmp[BUTTAUSSCHAU].Anzahl = 4;
  Bmp[BUTTAUSSCHAU].Geschwindigkeit = 3;
  Bmp[BUTTAUSSCHAU].Phase = -1;

  //BUTTSCHATZKARTE
  Bmp[BUTTSCHATZKARTE].rcSrc.left = 98;
  Bmp[BUTTSCHATZKARTE].rcSrc.top = 175;
  Bmp[BUTTSCHATZKARTE].rcSrc.right = 98 + 35;
  Bmp[BUTTSCHATZKARTE].rcSrc.bottom = 175 + 35;
  Bmp[BUTTSCHATZKARTE].rcDes.left = rcPanel.left + 152;
  Bmp[BUTTSCHATZKARTE].rcDes.top = rcPanel.top + 268;
  Bmp[BUTTSCHATZKARTE].rcDes.right = Bmp[BUTTSCHATZKARTE].rcDes.left + 35;
  Bmp[BUTTSCHATZKARTE].rcDes.bottom = Bmp[BUTTSCHATZKARTE].rcDes.top + 35;
  Bmp[BUTTSCHATZKARTE].Breite = (Bmp[BUTTSCHATZKARTE].rcSrc.right - Bmp[BUTTSCHATZKARTE].rcSrc.left);
  Bmp[BUTTSCHATZKARTE].Hoehe = (Bmp[BUTTSCHATZKARTE].rcSrc.bottom - Bmp[BUTTSCHATZKARTE].rcSrc.top);
  Bmp[BUTTSCHATZKARTE].Anzahl = 4;
  Bmp[BUTTSCHATZKARTE].Geschwindigkeit = 3;
  Bmp[BUTTSCHATZKARTE].Phase = -1;

  //BUTTSCHATZ
  Bmp[BUTTSCHATZ].rcSrc.left = 133;
  Bmp[BUTTSCHATZ].rcSrc.top = 175;
  Bmp[BUTTSCHATZ].rcSrc.right = 133 + 35;
  Bmp[BUTTSCHATZ].rcSrc.bottom = 175 + 35;
  Bmp[BUTTSCHATZ].rcDes.left = rcPanel.left + 29;
  Bmp[BUTTSCHATZ].rcDes.top = rcPanel.top + 316;
  Bmp[BUTTSCHATZ].rcDes.right = Bmp[BUTTSCHATZ].rcDes.left + 35;
  Bmp[BUTTSCHATZ].rcDes.bottom = Bmp[BUTTSCHATZ].rcDes.top + 35;
  Bmp[BUTTSCHATZ].Breite = (Bmp[BUTTSCHATZ].rcSrc.right - Bmp[BUTTSCHATZ].rcSrc.left);
  Bmp[BUTTSCHATZ].Hoehe = (Bmp[BUTTSCHATZ].rcSrc.bottom - Bmp[BUTTSCHATZ].rcSrc.top);
  Bmp[BUTTSCHATZ].Anzahl = 4;
  Bmp[BUTTSCHATZ].Geschwindigkeit = 3;
  Bmp[BUTTSCHATZ].Phase = -1;

  //BUTTSCHLEUDER
  Bmp[BUTTSCHLEUDER].rcSrc.left = 168;
  Bmp[BUTTSCHLEUDER].rcSrc.top = 175;
  Bmp[BUTTSCHLEUDER].rcSrc.right = 168 + 35;
  Bmp[BUTTSCHLEUDER].rcSrc.bottom = 175 + 35;
  Bmp[BUTTSCHLEUDER].rcDes.left = rcPanel.left + 70;
  Bmp[BUTTSCHLEUDER].rcDes.top = rcPanel.top + 316;
  Bmp[BUTTSCHLEUDER].rcDes.right = Bmp[BUTTSCHLEUDER].rcDes.left + 35;
  Bmp[BUTTSCHLEUDER].rcDes.bottom = Bmp[BUTTSCHLEUDER].rcDes.top + 35;
  Bmp[BUTTSCHLEUDER].Breite = (Bmp[BUTTSCHLEUDER].rcSrc.right - Bmp[BUTTSCHLEUDER].rcSrc.left);
  Bmp[BUTTSCHLEUDER].Hoehe = (Bmp[BUTTSCHLEUDER].rcSrc.bottom - Bmp[BUTTSCHLEUDER].rcSrc.top);
  Bmp[BUTTSCHLEUDER].Anzahl = 4;
  Bmp[BUTTSCHLEUDER].Geschwindigkeit = 3;
  Bmp[BUTTSCHLEUDER].Phase = -1;

  //BUTTFELD
  Bmp[BUTTFELD].rcSrc.left = 238;
  Bmp[BUTTFELD].rcSrc.top = 0;
  Bmp[BUTTFELD].rcSrc.right = 238 + 35;
  Bmp[BUTTFELD].rcSrc.bottom = 35;
  Bmp[BUTTFELD].rcDes.left = rcPanel.left + 70;
  Bmp[BUTTFELD].rcDes.top = rcPanel.top + 220;
  Bmp[BUTTFELD].rcDes.right = Bmp[BUTTFELD].rcDes.left + 35;
  Bmp[BUTTFELD].rcDes.bottom = Bmp[BUTTFELD].rcDes.top + 35;
  Bmp[BUTTFELD].Breite = (Bmp[BUTTFELD].rcSrc.right - Bmp[BUTTFELD].rcSrc.left);
  Bmp[BUTTFELD].Hoehe = (Bmp[BUTTFELD].rcSrc.bottom - Bmp[BUTTFELD].rcSrc.top);
  Bmp[BUTTFELD].Anzahl = 4;
  Bmp[BUTTFELD].Geschwindigkeit = 3;
  Bmp[BUTTFELD].Phase = -1;

  //BUTTZELT
  Bmp[BUTTZELT].rcSrc.left = 273;
  Bmp[BUTTZELT].rcSrc.top = 0;
  Bmp[BUTTZELT].rcSrc.right = 273 + 35;
  Bmp[BUTTZELT].rcSrc.bottom = 35;
  Bmp[BUTTZELT].rcDes.left = rcPanel.left + 29;
  Bmp[BUTTZELT].rcDes.top = rcPanel.top + 220;
  Bmp[BUTTZELT].rcDes.right = Bmp[BUTTZELT].rcDes.left + 35;
  Bmp[BUTTZELT].rcDes.bottom = Bmp[BUTTZELT].rcDes.top + 35;
  Bmp[BUTTZELT].Breite = (Bmp[BUTTZELT].rcSrc.right - Bmp[BUTTZELT].rcSrc.left);
  Bmp[BUTTZELT].Hoehe = (Bmp[BUTTZELT].rcSrc.bottom - Bmp[BUTTZELT].rcSrc.top);
  Bmp[BUTTZELT].Anzahl = 3;
  Bmp[BUTTZELT].Geschwindigkeit = 3;
  Bmp[BUTTZELT].Phase = 0;

  //BUTTBOOT
  Bmp[BUTTBOOT].rcSrc.left = 448;
  Bmp[BUTTBOOT].rcSrc.top = 0;
  Bmp[BUTTBOOT].rcSrc.right = 448 + 35;
  Bmp[BUTTBOOT].rcSrc.bottom = 35;
  Bmp[BUTTBOOT].rcDes.left = rcPanel.left + 111;
  Bmp[BUTTBOOT].rcDes.top = rcPanel.top + 220;
  Bmp[BUTTBOOT].rcDes.right = Bmp[BUTTBOOT].rcDes.left + 35;
  Bmp[BUTTBOOT].rcDes.bottom = Bmp[BUTTBOOT].rcDes.top + 35;
  Bmp[BUTTBOOT].Breite = (Bmp[BUTTBOOT].rcSrc.right - Bmp[BUTTBOOT].rcSrc.left);
  Bmp[BUTTBOOT].Hoehe = (Bmp[BUTTBOOT].rcSrc.bottom - Bmp[BUTTBOOT].rcSrc.top);
  Bmp[BUTTBOOT].Anzahl = 3;
  Bmp[BUTTBOOT].Geschwindigkeit = 3;
  Bmp[BUTTBOOT].Phase = -1;

  //BUTTROHR
  Bmp[BUTTROHR].rcSrc.left = 518;
  Bmp[BUTTROHR].rcSrc.top = 0;
  Bmp[BUTTROHR].rcSrc.right = 518 + 35;
  Bmp[BUTTROHR].rcSrc.bottom = 35;
  Bmp[BUTTROHR].rcDes.left = rcPanel.left + 152;
  Bmp[BUTTROHR].rcDes.top = rcPanel.top + 220;
  Bmp[BUTTROHR].rcDes.right = Bmp[BUTTROHR].rcDes.left + 35;
  Bmp[BUTTROHR].rcDes.bottom = Bmp[BUTTROHR].rcDes.top + 35;
  Bmp[BUTTROHR].Breite = (Bmp[BUTTROHR].rcSrc.right - Bmp[BUTTROHR].rcSrc.left);
  Bmp[BUTTROHR].Hoehe = (Bmp[BUTTROHR].rcSrc.bottom - Bmp[BUTTROHR].rcSrc.top);
  Bmp[BUTTROHR].Anzahl = 4;
  Bmp[BUTTROHR].Geschwindigkeit = 2;
  Bmp[BUTTROHR].Phase = -1;

  //BUTTSOS
  Bmp[BUTTSOS].rcSrc.left = 588;
  Bmp[BUTTSOS].rcSrc.top = 0;
  Bmp[BUTTSOS].rcSrc.right = 588 + 35;
  Bmp[BUTTSOS].rcSrc.bottom = 35;
  Bmp[BUTTSOS].rcDes.left = rcPanel.left + 29;
  Bmp[BUTTSOS].rcDes.top = rcPanel.top + 268;
  Bmp[BUTTSOS].rcDes.right = Bmp[BUTTSOS].rcDes.left + 35;
  Bmp[BUTTSOS].rcDes.bottom = Bmp[BUTTSOS].rcDes.top + 35;
  Bmp[BUTTSOS].Breite = (Bmp[BUTTSOS].rcSrc.right - Bmp[BUTTSOS].rcSrc.left);
  Bmp[BUTTSOS].Hoehe = (Bmp[BUTTSOS].rcSrc.bottom - Bmp[BUTTSOS].rcSrc.top);
  Bmp[BUTTSOS].Anzahl = 3;
  Bmp[BUTTSOS].Geschwindigkeit = 2;

  //BUTTHAUS1
  Bmp[BUTTHAUS1].rcSrc.left = 623;
  Bmp[BUTTHAUS1].rcSrc.top = 0;
  Bmp[BUTTHAUS1].rcSrc.right = 623 + 35;
  Bmp[BUTTHAUS1].rcSrc.bottom = 35;
  Bmp[BUTTHAUS1].rcDes.left = rcPanel.left + 70;
  Bmp[BUTTHAUS1].rcDes.top = rcPanel.top + 268;
  Bmp[BUTTHAUS1].rcDes.right = Bmp[BUTTHAUS1].rcDes.left + 35;
  Bmp[BUTTHAUS1].rcDes.bottom = Bmp[BUTTHAUS1].rcDes.top + 35;
  Bmp[BUTTHAUS1].Breite = (Bmp[BUTTHAUS1].rcSrc.right - Bmp[BUTTHAUS1].rcSrc.left);
  Bmp[BUTTHAUS1].Hoehe = (Bmp[BUTTHAUS1].rcSrc.bottom - Bmp[BUTTHAUS1].rcSrc.top);
  Bmp[BUTTHAUS1].Anzahl = 5;
  Bmp[BUTTHAUS1].Geschwindigkeit = 3;
  Bmp[BUTTHAUS1].Phase = -1;

  //BUTTHAUS2
  Bmp[BUTTHAUS2].rcSrc.left = 658;
  Bmp[BUTTHAUS2].rcSrc.top = 0;
  Bmp[BUTTHAUS2].rcSrc.right = 658 + 35;
  Bmp[BUTTHAUS2].rcSrc.bottom = 35;
  Bmp[BUTTHAUS2].rcDes.left = rcPanel.left + 111;
  Bmp[BUTTHAUS2].rcDes.top = rcPanel.top + 268;
  Bmp[BUTTHAUS2].rcDes.right = Bmp[BUTTHAUS2].rcDes.left + 35;
  Bmp[BUTTHAUS2].rcDes.bottom = Bmp[BUTTHAUS2].rcDes.top + 35;
  Bmp[BUTTHAUS2].Breite = (Bmp[BUTTHAUS2].rcSrc.right - Bmp[BUTTHAUS2].rcSrc.left);
  Bmp[BUTTHAUS2].Hoehe = (Bmp[BUTTHAUS2].rcSrc.bottom - Bmp[BUTTHAUS2].rcSrc.top);
  Bmp[BUTTHAUS2].Anzahl = 4;
  Bmp[BUTTHAUS2].Geschwindigkeit = 3;
  Bmp[BUTTHAUS2].Phase = -1;

  //BUTTHAUS3
  Bmp[BUTTHAUS3].rcSrc.left = 693;
  Bmp[BUTTHAUS3].rcSrc.top = 0;
  Bmp[BUTTHAUS3].rcSrc.right = 693 + 35;
  Bmp[BUTTHAUS3].rcSrc.bottom = 35;
  Bmp[BUTTHAUS3].rcDes.left = rcPanel.left + 152;
  Bmp[BUTTHAUS3].rcDes.top = rcPanel.top + 268;
  Bmp[BUTTHAUS3].rcDes.right = Bmp[BUTTHAUS3].rcDes.left + 35;
  Bmp[BUTTHAUS3].rcDes.bottom = Bmp[BUTTHAUS3].rcDes.top + 35;
  Bmp[BUTTHAUS3].Breite = (Bmp[BUTTHAUS3].rcSrc.right - Bmp[BUTTHAUS3].rcSrc.left);
  Bmp[BUTTHAUS3].Hoehe = (Bmp[BUTTHAUS3].rcSrc.bottom - Bmp[BUTTHAUS3].rcSrc.top);
  Bmp[BUTTHAUS3].Anzahl = 4;
  Bmp[BUTTHAUS3].Geschwindigkeit = 3;
  Bmp[BUTTHAUS3].Phase = -1;

  //BUTTFEUERST
  Bmp[BUTTFEUERST].rcSrc.left = 728;
  Bmp[BUTTFEUERST].rcSrc.top = 0;
  Bmp[BUTTFEUERST].rcSrc.right = 728 + 35;
  Bmp[BUTTFEUERST].rcSrc.bottom = 35;
  Bmp[BUTTFEUERST].rcDes.left = rcPanel.left + 29;
  Bmp[BUTTFEUERST].rcDes.top = rcPanel.top + 316;
  Bmp[BUTTFEUERST].rcDes.right = Bmp[BUTTFEUERST].rcDes.left + 35;
  Bmp[BUTTFEUERST].rcDes.bottom = Bmp[BUTTFEUERST].rcDes.top + 35;
  Bmp[BUTTFEUERST].Breite = (Bmp[BUTTFEUERST].rcSrc.right - Bmp[BUTTFEUERST].rcSrc.left);
  Bmp[BUTTFEUERST].Hoehe = (Bmp[BUTTFEUERST].rcSrc.bottom - Bmp[BUTTFEUERST].rcSrc.top);
  Bmp[BUTTFEUERST].Anzahl = 4;
  Bmp[BUTTFEUERST].Geschwindigkeit = 3;

  //BUTTFRAGEZ
  Bmp[BUTTFRAGEZ].rcSrc.left = 203;
  Bmp[BUTTFRAGEZ].rcSrc.top = 175;
  Bmp[BUTTFRAGEZ].rcSrc.right = 203 + 35;
  Bmp[BUTTFRAGEZ].rcSrc.bottom = 175 + 35;
  Bmp[BUTTFRAGEZ].rcDes.left = 0;
  Bmp[BUTTFRAGEZ].rcDes.top = 0;
  Bmp[BUTTFRAGEZ].rcDes.right = 35;
  Bmp[BUTTFRAGEZ].rcDes.bottom = 35;
  Bmp[BUTTFRAGEZ].Breite = (Bmp[BUTTFRAGEZ].rcSrc.right - Bmp[BUTTFRAGEZ].rcSrc.left);
  Bmp[BUTTFRAGEZ].Hoehe = (Bmp[BUTTFRAGEZ].rcSrc.bottom - Bmp[BUTTFRAGEZ].rcSrc.top);
  Bmp[BUTTFRAGEZ].Anzahl = 1;
  Bmp[BUTTFRAGEZ].Geschwindigkeit = 0;

  //BUTTDESTROY
  Bmp[BUTTDESTROY].rcSrc.left = 553;
  Bmp[BUTTDESTROY].rcSrc.top = 0;
  Bmp[BUTTDESTROY].rcSrc.right = 553 + 35;
  Bmp[BUTTDESTROY].rcSrc.bottom = 35;
  Bmp[BUTTDESTROY].rcDes.left = rcPanel.left + 152;
  Bmp[BUTTDESTROY].rcDes.top = rcPanel.top + 316;
  Bmp[BUTTDESTROY].rcDes.right = Bmp[BUTTDESTROY].rcDes.left + 35;
  Bmp[BUTTDESTROY].rcDes.bottom = Bmp[BUTTDESTROY].rcDes.top + 35;
  Bmp[BUTTDESTROY].Breite = (Bmp[BUTTDESTROY].rcSrc.right - Bmp[BUTTDESTROY].rcSrc.left);
  Bmp[BUTTDESTROY].Hoehe = (Bmp[BUTTDESTROY].rcSrc.bottom - Bmp[BUTTDESTROY].rcSrc.top);
  Bmp[BUTTDESTROY].Anzahl = 4;
  Bmp[BUTTDESTROY].Geschwindigkeit = 5;

  //Sonstiges

  //Säule1
  Bmp[SAEULE1].Anzahl = 1;
  Bmp[SAEULE1].rcSrc.left = 205;
  Bmp[SAEULE1].rcSrc.top = 115;
  Bmp[SAEULE1].rcSrc.right = Bmp[SAEULE1].rcSrc.left + 11;
  Bmp[SAEULE1].rcSrc.bottom = Bmp[SAEULE1].rcSrc.top + 95;
  Bmp[SAEULE1].rcDes.left = rcPanel.left + 52;
  Bmp[SAEULE1].rcDes.top = rcPanel.top + 393;
  Bmp[SAEULE1].rcDes.right = Bmp[SAEULE1].rcDes.left + 11;
  Bmp[SAEULE1].rcDes.bottom = Bmp[SAEULE1].rcDes.top + 95;
  Bmp[SAEULE1].Breite = (Bmp[SAEULE1].rcSrc.right - Bmp[SAEULE1].rcSrc.left);
  Bmp[SAEULE1].Hoehe = (Bmp[SAEULE1].rcSrc.bottom - Bmp[SAEULE1].rcSrc.top);
  Bmp[SAEULE1].Surface = panelImage;

  //Säule2
  Bmp[SAEULE2].Anzahl = 1;
  Bmp[SAEULE2].rcSrc.left = 216;
  Bmp[SAEULE2].rcSrc.top = 115;
  Bmp[SAEULE2].rcSrc.right = Bmp[SAEULE2].rcSrc.left + 11;
  Bmp[SAEULE2].rcSrc.bottom = Bmp[SAEULE2].rcSrc.top + 95;
  Bmp[SAEULE2].rcDes.left = rcPanel.left + 114;
  Bmp[SAEULE2].rcDes.top = rcPanel.top + 393;
  Bmp[SAEULE2].rcDes.right = Bmp[SAEULE2].rcDes.left + 11;
  Bmp[SAEULE2].rcDes.bottom = Bmp[SAEULE2].rcDes.top + 95;
  Bmp[SAEULE2].Breite = (Bmp[SAEULE2].rcSrc.right - Bmp[SAEULE2].rcSrc.left);
  Bmp[SAEULE2].Hoehe = (Bmp[SAEULE2].rcSrc.bottom - Bmp[SAEULE2].rcSrc.top);
  Bmp[SAEULE2].Surface = panelImage;

  //Säule3
  Bmp[SAEULE3].Anzahl = 1;
  Bmp[SAEULE3].rcSrc.left = 227;
  Bmp[SAEULE3].rcSrc.top = 115;
  Bmp[SAEULE3].rcSrc.right = Bmp[SAEULE3].rcSrc.left + 11;
  Bmp[SAEULE3].rcSrc.bottom = Bmp[SAEULE3].rcSrc.top + 95;
  Bmp[SAEULE3].rcDes.left = rcPanel.left + 175;
  Bmp[SAEULE3].rcDes.top = rcPanel.top + 393;
  Bmp[SAEULE3].rcDes.right = Bmp[SAEULE3].rcDes.left + 11;
  Bmp[SAEULE3].rcDes.bottom = Bmp[SAEULE3].rcDes.top + 95;
  Bmp[SAEULE3].Breite = (Bmp[SAEULE3].rcSrc.right - Bmp[SAEULE3].rcSrc.left);
  Bmp[SAEULE3].Hoehe = (Bmp[SAEULE3].rcSrc.bottom - Bmp[SAEULE3].rcSrc.top);
  Bmp[SAEULE3].Surface = panelImage;

  //INVPAPIER
  Bmp[INVPAPIER].Anzahl = 1;
  Bmp[INVPAPIER].rcSrc.left = 0;
  Bmp[INVPAPIER].rcSrc.top = 15;
  Bmp[INVPAPIER].rcSrc.right = Bmp[INVPAPIER].rcSrc.left + 178;
  Bmp[INVPAPIER].rcSrc.bottom = Bmp[INVPAPIER].rcSrc.top + 114;
  Bmp[INVPAPIER].rcDes.left = rcPanel.left + 15;
  Bmp[INVPAPIER].rcDes.top = rcPanel.top + 220;
  Bmp[INVPAPIER].rcDes.right = Bmp[INVPAPIER].rcDes.left + 178;
  Bmp[INVPAPIER].rcDes.bottom = Bmp[INVPAPIER].rcDes.top + 114;
  Bmp[INVPAPIER].Breite = (Bmp[INVPAPIER].rcSrc.right - Bmp[INVPAPIER].rcSrc.left);
  Bmp[INVPAPIER].Hoehe = (Bmp[INVPAPIER].rcSrc.bottom - Bmp[INVPAPIER].rcSrc.top);
  Bmp[INVPAPIER].Surface = inventarImage;

  //RING
  Bmp[RING].Anzahl = 1;
  Bmp[RING].rcSrc.left = 205;
  Bmp[RING].rcSrc.top = 210;
  Bmp[RING].rcSrc.right = Bmp[RING].rcSrc.left + 37;
  Bmp[RING].rcSrc.bottom = Bmp[RING].rcSrc.top + 150;
  Bmp[RING].rcDes.left = rcPanel.left + 5;
  Bmp[RING].rcDes.top = rcPanel.top - 113;
  Bmp[RING].rcDes.right = Bmp[RING].rcDes.left + 30;
  Bmp[RING].rcDes.bottom = Bmp[RING].rcDes.top;
  Bmp[RING].Breite = (Bmp[RING].rcSrc.right - Bmp[RING].rcSrc.left);
  Bmp[RING].Hoehe = (Bmp[RING].rcSrc.bottom - Bmp[RING].rcSrc.top);
  Bmp[RING].Surface = panelImage;

  //Sonne
  Bmp[SONNE].Anzahl = 1;
  Bmp[SONNE].rcSrc.left = 205;
  Bmp[SONNE].rcSrc.top = 65;
  Bmp[SONNE].rcSrc.right = Bmp[SONNE].rcSrc.left + 51;
  Bmp[SONNE].rcSrc.bottom = Bmp[SONNE].rcSrc.top + 50;
  Bmp[SONNE].rcDes.left = rcPanel.left + 30;
  Bmp[SONNE].rcDes.top = rcPanel.top + 518;
  Bmp[SONNE].rcDes.right = Bmp[SONNE].rcDes.left + 152;
  Bmp[SONNE].rcDes.bottom = Bmp[SONNE].rcDes.top + 55;
  Bmp[SONNE].Breite = (Bmp[SONNE].rcSrc.right - Bmp[SONNE].rcSrc.left);
  Bmp[SONNE].Hoehe = (Bmp[SONNE].rcSrc.bottom - Bmp[SONNE].rcSrc.top);
  Bmp[SONNE].Surface = panelImage;

  //PROGRAMMIERUNG
  Bmp[PROGRAMMIERUNG].Anzahl = 1;
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
  Bmp[DIRKPLATE].Anzahl = 1;
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
  Bmp[MATTHIAS].Anzahl = 1;
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
  Bmp[TESTSPIELER].Anzahl = 1;
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
  Bmp[TOBIAS].Anzahl = 1;
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
  Bmp[SIGRID].Anzahl = 1;
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
  Bmp[PATHFINDING].Anzahl = 1;
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
  Bmp[JOHN].Anzahl = 1;
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
  Bmp[HEIKO].Anzahl = 1;
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
  Bmp[GISELA].Anzahl = 1;
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
  Bmp[WEITEREHILFE].Anzahl = 1;
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
  Bmp[DPSOFTWARE].Anzahl = 1;
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
  Bmp[SCHWARZ].Anzahl = 1;
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
  Bmp[SOUNDS].Anzahl = 1;
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
  Bmp[MUSIK].Anzahl = 1;
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
  HauptMenue = 0;
  TwoClicks = -1;
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

  if (TwoClicks === -1) {
    if (gameData.guy.active) {
      if (InRect(MousePosition.x, MousePosition.y, Bmp[BUTTSTOP].rcDes) &&
        (Bmp[BUTTSTOP].Phase !== -1)) CursorTyp = CUPFEIL;
      else CursorTyp = CUUHR;
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
  if (gameData.paper) {
    if (gameData.paper.question) {
      if (InRect(
        MousePosition.x, 
        MousePosition.y, 
        { 
          left: gameData.paper.question.yes.x,
          top: gameData.paper.question.yes.y,
          right: gameData.paper.question.yes.x + gameData.paper.question.yes.width,
          bottom: gameData.paper.question.yes.y + gameData.paper.question.yes.height,
        }
      )) {
        CursorTyp = CUPFEIL;
        if ((Button === 0) && (Push === 1)) {
          gameData.paper.question.answer = true;
          gameData.guy.active = false;
          sounds.CLICK2.instance.play();
        }
      } else if (InRect(
        MousePosition.x, 
        MousePosition.y, 
        { 
          left: gameData.paper.question.no.x,
          top: gameData.paper.question.no.y,
          right: gameData.paper.question.no.x + gameData.paper.question.no.width,
          bottom: gameData.paper.question.no.y + gameData.paper.question.no.height,
        }
      )) {
        CursorTyp = CUPFEIL;
        if ((Button === 0) && (Push === 1)) {
          gameData.paper.question.answer = false;
          gameData.guy.active = false;
          sounds.CLICK2.instance.play();
        }
      } else if ((Button === 0) && (Push === 1)) {
        sounds.CLICK.instance.play();
      }
    } else if ((Button !== -1) && (Push === 1)) {
      closePaper(gameData);
    }
    return;
  }

  //Animationen und Text löschen (werden dann von den MouseIn.. Sachen neu angestellt
  clearText(textAreas.STATUS);
  ButtAniAus();

  //Wenn der Guy aktiv dann linke Mouse-Buttons ignorieren
  if (gameData.guy.active && (Button === 0)) {
    if (!((InRect(MousePosition.x, MousePosition.y, Bmp[BUTTSTOP].rcDes)) &&
      (Bmp[BUTTSTOP].Phase !== -1))) {
      Button = -1;
    }
  }

  //die Maus ist in der Spielflaeche .
  if (InRect(MousePosition.x, MousePosition.y, { left: 0, top: 0, right: gameData.camera.width, bottom: gameData.camera.height }))
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
      gameData.guy.active = false;
      for (let x = gameData.guy.tile.x; x < MAXXKACH; x++) {
        gameData.guy.tile.x = x;
        discoverTerrain(gameData);
        if (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].ground !== grounds.SEA) break;
      }
      addShipWreck(gameData.terrain[gameData.guy.tile.x - 2][gameData.guy.tile.y]);

      const tile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];
      gameData.guy.position.x = tile.position.x + tileEdges[tile.type].center.x;
      gameData.guy.position.y = tile.position.y + tileEdges[tile.type].center.y;
      gameData.guy.route = [];
      updateCamera(gameData.camera, gameData.guy.position, false);

      gameData.guy.sprite = spriteTypes.GUY_WAITING;
      Guy.Aktion = AKNICHTS;
      Spielzustand = GAME_PLAY;
      gameData.guy.storedPosition = { ...gameData.guy.position };
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
    if (pressedKeyCodes[DIK_RIGHT]) gameData.camera.x += 10;
    if (pressedKeyCodes[DIK_LEFT]) gameData.camera.x -= 10;
    if (pressedKeyCodes[DIK_DOWN]) gameData.camera.y += 10;
    if (pressedKeyCodes[DIK_UP]) gameData.camera.y -= 10;
    if (pressedKeyCodes[DIK_ESCAPE]) {
      Guy.AkNummer = 0;
      gameData.guy.active = false;
      Guy.Aktion = AKSPIELVERLASSEN;
    }
    if (pressedKeyCodes[DIK_F11]) {
      Guy.AkNummer = 0;
      gameData.guy.active = false;
      Guy.Aktion = AKNEUBEGINNEN;
    }
    if (pressedKeyCodes[DIK_G]) {
      gameData.options.grid = !gameData.options.grid;
    }

    if (pressedKeyCodes[DIK_C])  //Zum testen
    {
      let x, y;
      for (y = 0; y < MAXYKACH; y++)
        for (x = 0; x < MAXXKACH; x++)
          gameData.terrain[x][y].discovered = true;
      updateMinimap(gameData.terrain);
    }

    if (pressedKeyCodes[DIK_I])  //Zum testen
    {
      changeItem(gameData, items.BRANCH, 10);
      changeItem(gameData, items.STONE, 10);
      changeItem(gameData, items.LEAF, 10);
      changeItem(gameData, items.LIANA, 10);
      changeItem(gameData, items.LOG, 10);
    }
    if (pressedKeyCodes[DIK_W])  //Zum testen
    {
      changeItem(gameData, items.AXE, 1);
      changeItem(gameData, items.HARROW, 1);
      changeItem(gameData, items.FISHING_ROD, 1);
      changeItem(gameData, items.HAMMER, 1);
      changeItem(gameData, items.SPYGLASS, 1);
      changeItem(gameData, items.MATCHES, 1);
      changeItem(gameData, items.SHOVEL, 1);
      changeItem(gameData, items.MAP, 1);
      changeItem(gameData, items.SLING, 1);

      Bmp[BUTTFAELLEN].Phase = 0;
      Bmp[BUTTANGELN].Phase = 0;
      Bmp[BUTTANZUENDEN].Phase = 0;
      Bmp[BUTTAUSSCHAU].Phase = 0;
      Bmp[BUTTSCHATZKARTE].Phase = 0;
      Bmp[BUTTSCHATZ].Phase = 0;
      Bmp[BUTTSCHLEUDER].Phase = 0;
      Bmp[BUTTFELD].Phase = 0;
      Bmp[BUTTBOOT].Phase = 0;
      Bmp[BUTTROHR].Phase = 0;
      Bmp[BUTTHAUS1].Phase = 0;
      Bmp[BUTTHAUS2].Phase = 0;
      Bmp[BUTTHAUS3].Phase = 0;

      gameData.guy.chance += 10;
    }
  } else if (Spielzustand === GAME_CREDITS) {
    if (pressedKeyCodes[DIK_ESCAPE] || pressedKeyCodes[DIK_RETURN] || pressedKeyCodes[DIK_SPACE]) {
      return (0);
    }
  }
  return (1);
}

const AddTime = (m) => {
  let x, y;

  gameData.calendar.minutes += m;

  for (y = 0; y < MAXYKACH; y++)
    for (x = 0; x < MAXXKACH; x++) {
      const tile = gameData.terrain[x][y];
      //Feuer nach einer bestimmten Zeit ausgehen lassen
      const object = tile.object;
      if (object?.lifetime) {
        object.lifetime -= m;
        if (object.lifetime <= 0) {
          if (object.chance) {
            gameData.guy.chance -= object.chance;
          }
          tile.object = null;
        }
      }
      //pro Minute Reifungsprozess fortführen
      if (tile.object?.sprite === spriteTypes.FIELD && !tile.construction) {
        tile.object.frame += m * 0.005;
        tile.object.frame = Math.min(tile.object.frame, 2);
      } else if (tile.object?.sprite === spriteTypes.BUSH) {
        tile.object.frame += m * 0.0005;
        tile.object.frame = Math.min(tile.object.frame, sprites[tile.object.sprite].frameCount - 1);
      }
    }
  changeHealth(gameData, m * (gameData.guy.water - 50 + gameData.guy.food - 50) / 1000);
  if (gameData.guy.health <= 0 && Guy.Aktion !== AKTOD && Guy.Aktion !== AKTAGENDE && Spielzustand === GAME_PLAY) {
    gameData.guy.active = false;
    Guy.AkNummer = 0;
    Guy.Aktion = AKTOD;
  }

  if ((Spielzustand === GAME_PLAY) && (!isOnSea(gameData))) {
    if (Math.random() < (gameData.guy.chance / 100) * (m / 720)) {
      gameData.guy.active = false;
      Guy.AkNummer = 0;
      Guy.Aktion = AKGERETTET;
    }
  }
}

const MouseInSpielflaeche = (Button, Push, xDiff, yDiff) => {
  const tilePosition = getTileByPosition(gameData.terrain, { x: MousePosition.x + gameData.camera.x, y: MousePosition.y + gameData.camera.y });
  if (tilePosition && gameData.terrain[tilePosition.x][tilePosition.y].discovered) {
    drawTileText(gameData.terrain[tilePosition.x][tilePosition.y]);

    //Wenn Maustaste gedrückt wird
    if ((Button === 0) && (Push === 1)) {
      if (!gameData.guy.active &&
        (tilePosition.x !== gameData.guy.tile.x || tilePosition.y !== gameData.guy.tile.y) &&
        (tilePosition.x > 0) && (tilePosition.x < MAXXKACH - 1) &&
        (tilePosition.y > 0) && (tilePosition.y < MAXYKACH - 1)) {

        console.log(gameData, gameData.terrain[tilePosition.x][tilePosition.y]);
        sounds.CLICK2.instance.play();
        if (gameData.guy.route.length &&
          (tilePosition.x === gameData.guy.route[gameData.guy.route.length - 1].x) &&
          (tilePosition.y === gameData.guy.route[gameData.guy.route.length - 1].y)) {
          Bmp[BUTTSTOP].Phase = 0;
          gameData.guy.active = true;
        } else {
          gameData.guy.route = findRoute(gameData, tilePosition);
        }
      } else {
        sounds.CLICK.instance.play();
      }
    }
  }

  //rechte Maustastescrollen
  if ((Button === 1) && (Push === 0)) {
    gameData.camera.x += xDiff;
    gameData.camera.y += yDiff;
    CursorTyp = CURICHTUNG;
  }
}

const ButtAniAus = () => {
  let i;

  for (i = BUTTGITTER; i <= BUTTDESTROY; i++) {
    Bmp[i].Animation = false;
  }
}

const MouseInPanel = (Button, Push) => {
  const tile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];

  //wenn die Maus in der Minimap ist .
  if ((InRect(MousePosition.x, MousePosition.y, rcKarte)) && (Button === 0) && (Push !== -1)) {
    moveCameraFromMinimap({ x: MousePosition.x - rcKarte.left, y: MousePosition.y - rcKarte.top }, gameData);
  } else if (InRect(MousePosition.x, MousePosition.y, Bmp[BUTTGITTER].rcDes)) {
    if (gameData.options.grid) {
      drawStatusText(texts.GITTERAUS);
    } else {
      drawStatusText(texts.GITTERAN);
    }

    if ((Button === 0) && (Push === 1)) {
      sounds.CLICK2.instance.play();
      gameData.options.grid = !gameData.options.grid;
    }
  } else if (InRect(MousePosition.x, MousePosition.y, Bmp[BUTTSOUND].rcDes)) {
    if (audio.isRunning()) {
      drawStatusText(texts.SOUNDAUS);
    } else {
      drawStatusText(texts.SOUNDAN);
    }

    if ((Button === 0) && (Push === 1)) {
      if (audio.isRunning()) {
        audio.suspend();
      } else {
        audio.resume();
        sounds.CLICK2.instance.play();
      }
    }
  } else if (InRect(MousePosition.x, MousePosition.y, Bmp[BUTTBEENDEN].rcDes)) {
    drawStatusText(texts.BEENDEN);
    Bmp[BUTTBEENDEN].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      sounds.CLICK2.instance.play();
      Guy.AkNummer = 0;
      gameData.guy.active = false;
      Guy.Aktion = AKSPIELVERLASSEN;
    }
  } else if (InRect(MousePosition.x, MousePosition.y, Bmp[BUTTNEU].rcDes)) {
    drawStatusText(texts.NEU);
    Bmp[BUTTNEU].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      sounds.CLICK2.instance.play();
      Guy.AkNummer = 0;
      gameData.guy.active = false;
      Guy.Aktion = AKNEUBEGINNEN;
    }
  } else if (InRect(MousePosition.x, MousePosition.y, Bmp[BUTTTAGNEU].rcDes)) {
    drawStatusText(texts.TAGNEU2);
    Bmp[BUTTTAGNEU].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      sounds.CLICK2.instance.play();
      Guy.AkNummer = 0;
      gameData.guy.active = false;
      Guy.Aktion = AKTAGNEUBEGINNEN;
    }
  } else if (InRect(MousePosition.x, MousePosition.y, Bmp[BUTTAKTION].rcDes)) {
    if (HauptMenue === MEAKTION) {
      drawStatusText(texts.MEAKTIONZU);
    } else {
      drawStatusText(texts.MEAKTIONAUF);
    }
    Bmp[BUTTAKTION].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      sounds.CLICK2.instance.play();
      if (HauptMenue === MEAKTION) HauptMenue = MEKEINS;
      else HauptMenue = MEAKTION;
    }
  } else if (InRect(MousePosition.x, MousePosition.y, Bmp[BUTTBAUEN].rcDes) &&
    (Bmp[BUTTBAUEN].Phase !== -1)) {
    if (HauptMenue === MEBAUEN) {
      drawStatusText(texts.MEBAUENZU);
    } else {
      drawStatusText(texts.MEBAUENAUF);
    }
    Bmp[BUTTBAUEN].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      sounds.CLICK2.instance.play();
      if (HauptMenue === MEBAUEN) HauptMenue = MEKEINS;
      else HauptMenue = MEBAUEN;
    }
  } else if (InRect(MousePosition.x, MousePosition.y, Bmp[BUTTINVENTAR].rcDes)) {
    if (HauptMenue === MEINVENTAR) {
      drawStatusText(texts.MEINVENTARZU);
    } else {
      drawStatusText(texts.MEINVENTARAUF);
    }
    Bmp[BUTTINVENTAR].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      sounds.CLICK2.instance.play();
      if (HauptMenue === MEINVENTAR) HauptMenue = MEKEINS;
      else HauptMenue = MEINVENTAR;
    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[BUTTWEITER].rcDes)) &&
    (Bmp[BUTTWEITER].Phase !== -1)) {
    drawStatusText(texts.WEITER);

    Bmp[BUTTWEITER].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      sounds.CLICK2.instance.play();
      Bmp[BUTTSTOP].Phase = 0;
      const construction = continueConstruction(gameData);
      switch (construction.type) {
        case constructionTypes.TENT:
          Guy.Aktion = AKZELT;
          break;
        case constructionTypes.FIELD:
          Guy.Aktion = AKFELD;
          break;
        case constructionTypes.BOAT:
          Guy.Aktion = AKBOOT;
          break;
        case constructionTypes.PIPE:
          Guy.Aktion = AKROHR;
          break;
        case constructionTypes.SOS:
          Guy.Aktion = AKSOS;
          break;
        case constructionTypes.LADDER:
          Guy.Aktion = AKHAUS1;
          break;
        case constructionTypes.PLATFORM:
          Guy.Aktion = AKHAUS2;
          break;
        case constructionTypes.TREE_HOUSE:
          Guy.Aktion = AKHAUS3;
          break;
        case constructionTypes.FIREPLACE:
          Guy.Aktion = AKFEUERSTELLE;
          break;
      }
    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[BUTTSTOP].rcDes)) &&
    (Bmp[BUTTSTOP].Phase !== -1)) {
    drawStatusText(texts.STOP);

    Bmp[BUTTSTOP].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      sounds.CLICK2.instance.play();
      Guy.AkNummer = 0;
      Guy.Aktion = AKABBRUCH;
      Bmp[BUTTSTOP].Phase = -1;
    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[BUTTABLEGEN].rcDes)) &&
    (Bmp[BUTTABLEGEN].Phase !== -1)) {
    drawStatusText(texts.BEGINNABLEGEN);
    Bmp[BUTTABLEGEN].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      sounds.CLICK2.instance.play();
      Guy.AkNummer = 0;
      if (tile.ground !== grounds.SEA) Guy.Aktion = AKABLEGEN;
      else Guy.Aktion = AKANLEGEN;

    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[BUTTSUCHEN].rcDes)) &&
    (HauptMenue === MEAKTION) && (Bmp[BUTTSUCHEN].Phase !== -1)) {
    drawStatusText(texts.BEGINNSUCHEN);
    Bmp[BUTTSUCHEN].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      sounds.CLICK2.instance.play();
      Guy.AkNummer = 0;
      Guy.Aktion = AKSUCHEN;
    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[BUTTESSEN].rcDes)) &&
    (HauptMenue === MEAKTION) && (Bmp[BUTTESSEN].Phase !== -1)) {
    drawStatusText(texts.BEGINNESSEN);
    Bmp[BUTTESSEN].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      sounds.CLICK2.instance.play();
      Guy.AkNummer = 0;
      if (isEatable(tile.object)) {
        Guy.Aktion = AKESSEN;
      } else if (isDrinkable(tile.object))
        Guy.Aktion = AKTRINKEN;
      else {
        openPaper(texts.KEINESSENTRINKEN, false, gameData);
      }
    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[BUTTSCHLAFEN].rcDes)) &&
    (HauptMenue === MEAKTION) && (Bmp[BUTTSCHLAFEN].Phase !== -1)) {
    drawStatusText(texts.BEGINNSCHLAFEN);
    Bmp[BUTTSCHLAFEN].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      sounds.CLICK2.instance.play();
      if (tile.ground !== grounds.SEA) {
        Guy.AkNummer = 0;
        Guy.Aktion = AKSCHLAFEN;
      } else {
        openPaper(texts.NICHTAUFWASSERSCHLAFEN, false, gameData);
      }
    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[BUTTFAELLEN].rcDes)) &&
    (HauptMenue === MEAKTION) && (Bmp[BUTTFAELLEN].Phase !== -1)) {
    drawStatusText(texts.BEGINNFAELLEN);
    Bmp[BUTTFAELLEN].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      sounds.CLICK2.instance.play();
      Guy.AkNummer = 0;
      if (gameData.guy.inventory[items.LOG] <= 10) {
        if (isNormalTree(tile.object)) {
          Guy.Aktion = AKFAELLEN;
        } else if (isBigTree(tile.object)) {
          openPaper(texts.BAUMZUGROSS, false, gameData);
        } else {
          openPaper(texts.KEINBAUM, false, gameData);
        }
      } else {
        openPaper(texts.ROHSTAMMZUVIEL, false, gameData);
      }
    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[BUTTANGELN].rcDes)) &&
    (HauptMenue === MEAKTION) && (Bmp[BUTTANGELN].Phase !== -1)) {
    drawStatusText(texts.BEGINNANGELN);
    Bmp[BUTTANGELN].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      sounds.CLICK2.instance.play();
      Guy.AkNummer = 0;
      if (isFishable(tile)) {
        Guy.Aktion = AKANGELN;
      } else {
        openPaper(texts.KEINWASSER, false, gameData);
      }
    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[BUTTANZUENDEN].rcDes)) &&
    (HauptMenue === MEAKTION) && (Bmp[BUTTANZUENDEN].Phase !== -1)) {
    drawStatusText(texts.BEGINNANZUENDEN);
    Bmp[BUTTANZUENDEN].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      sounds.CLICK2.instance.play();
      Guy.AkNummer = 0;
      if (isUsableFireplace(tile)) {
        Guy.Aktion = AKANZUENDEN;
      } else {
        openPaper(texts.KEINEFEUERST, false, gameData);
      }
    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[BUTTAUSSCHAU].rcDes)) &&
    (HauptMenue === MEAKTION) && (Bmp[BUTTAUSSCHAU].Phase !== -1)) {
    drawStatusText(texts.BEGINNAUSSCHAU);
    Bmp[BUTTAUSSCHAU].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      sounds.CLICK2.instance.play();
      Guy.AkNummer = 0;
      if (tile.ground !== grounds.SEA) {
        Guy.AkNummer = 0;
        Guy.Aktion = AKAUSSCHAU;
      } else {
        drawStatusText(texts.WELLENZUHOCH, false, gameData);
      }
    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[BUTTSCHATZ].rcDes)) &&
    (HauptMenue === MEAKTION) && (Bmp[BUTTSCHATZ].Phase !== -1)) {
    drawStatusText(texts.BEGINNSCHATZ);
    Bmp[BUTTSCHATZ].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      sounds.CLICK2.instance.play();
      Guy.AkNummer = 0;
      if (tile.ground !== grounds.SEA &&
        tile.type === tileTypes.FLAT &&
        !tile.object) {
        Guy.AkNummer = 0;
        Guy.Aktion = AKSCHATZ;
      } else {
        openPaper(texts.GRABENBEDINGUNGEN, false, gameData);
      }
    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[BUTTSCHLEUDER].rcDes)) &&
    (HauptMenue === MEAKTION) && (Bmp[BUTTSCHLEUDER].Phase !== -1)) {
    drawStatusText(texts.BEGINNSCHLEUDER);
    Bmp[BUTTSCHLEUDER].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      sounds.CLICK2.instance.play();
      Guy.AkNummer = 0;
      if (isNormalTree(tile.object)) {
        Guy.AkNummer = 0;
        Guy.Aktion = AKSCHLEUDER;
      } else if (isBigTree(tile.object)) {
        openPaper(texts.BAUMZUGROSS, false, gameData);
      } else {
        openPaper(texts.KEINVOGEL, false, gameData);
      }
    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[BUTTSCHATZKARTE].rcDes)) &&
    (HauptMenue === MEAKTION) && (Bmp[BUTTSCHATZKARTE].Phase !== -1)) {
    drawStatusText(texts.BEGINNSCHATZKARTE);
    Bmp[BUTTSCHATZKARTE].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      sounds.CLICK2.instance.play();
      DrawSchatzkarte();
    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[BUTTFELD].rcDes)) &&
    (HauptMenue === MEBAUEN) && (Bmp[BUTTFELD].Phase !== -1)) {
    drawStartConstructionText(constructionTypes.FIELD);

    Bmp[BUTTFELD].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      sounds.CLICK2.instance.play();
      if (!tile.object &&
        tile.type === tileTypes.FLAT &&
        tile.ground === grounds.WETLAND) {
        Bmp[BUTTSTOP].Phase = 0;
        Guy.Aktion = AKFELD;
      } else if (tile.construction?.type === constructionTypes.FIELD) {
        Bmp[BUTTSTOP].Phase = 0;
        continueConstruction(gameData)
        Guy.Aktion = AKFELD;
      } else {
        openPaper(texts.FELDBEDINGUNGEN, false, gameData);
      }
    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[BUTTZELT].rcDes)) &&
    (HauptMenue === MEBAUEN) && (Bmp[BUTTZELT].Phase !== -1)) {
    drawStartConstructionText(constructionTypes.TENT);
    
    Bmp[BUTTZELT].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      sounds.CLICK2.instance.play();
      if (!tile.object &&
        tile.type === tileTypes.FLAT) {
        Bmp[BUTTSTOP].Phase = 0;
        Guy.Aktion = AKZELT;
      } else if (tile.construction?.type === constructionTypes.TENT) {
        Bmp[BUTTSTOP].Phase = 0;
        continueConstruction(gameData)
        Guy.Aktion = AKZELT;
      } else {
        openPaper(texts.ZELTBEDINGUNGEN, false, gameData);
      }
    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[BUTTBOOT].rcDes)) &&
    (HauptMenue === MEBAUEN) && (Bmp[BUTTBOOT].Phase !== -1)) {
    drawStartConstructionText(constructionTypes.BOAT);

    Bmp[BUTTBOOT].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      sounds.CLICK2.instance.play();
      if (!tile.object &&
        (tile.ground === grounds.BEACH) &&
        ((gameData.terrain[gameData.guy.tile.x - 1][gameData.guy.tile.y].ground === grounds.SEA) ||
          (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y - 1].ground === grounds.SEA) ||
          (gameData.terrain[gameData.guy.tile.x + 1][gameData.guy.tile.y].ground === grounds.SEA) ||
          (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y + 1].ground === grounds.SEA))) {
        Bmp[BUTTSTOP].Phase = 0;
        Guy.Aktion = AKBOOT;
      } else if (tile.construction?.type === constructionTypes.BOAT) {
        Bmp[BUTTSTOP].Phase = 0;
        continueConstruction(gameData)
        Guy.Aktion = AKBOOT;
      } else {
        openPaper(texts.BOOTBEDINGUNGEN, false, gameData);
      }
    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[BUTTROHR].rcDes)) &&
    (HauptMenue === MEBAUEN) && (Bmp[BUTTROHR].Phase !== -1)) {
    drawStartConstructionText(constructionTypes.PIPE);

    Bmp[BUTTROHR].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      sounds.CLICK2.instance.play();
      if (!tile.object &&
        (tile.type === tileTypes.FLAT)) {
        Bmp[BUTTSTOP].Phase = 0;
        Guy.Aktion = AKROHR;
      } else if (tile.construction?.type === constructionTypes.PIPE) {
        Bmp[BUTTSTOP].Phase = 0;
        continueConstruction(gameData)
        Guy.Aktion = AKROHR;
      } else {
        openPaper(texts.ROHRBEDINGUNGEN, false, gameData);
      }
    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[BUTTSOS].rcDes)) &&
    (HauptMenue === MEBAUEN) && (Bmp[BUTTSOS].Phase !== -1)) {
    drawStartConstructionText(constructionTypes.SOS);

    Bmp[BUTTSOS].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      sounds.CLICK2.instance.play();
      if (!tile.object &&
        (tile.type === tileTypes.FLAT)) {
        Bmp[BUTTSTOP].Phase = 0;
        Guy.Aktion = AKSOS;
      } else if (tile.construction?.type === constructionTypes.SOS) {
        Bmp[BUTTSTOP].Phase = 0;
        continueConstruction(gameData)
        Guy.Aktion = AKSOS;
      } else {
        openPaper(texts.SOSBEDINGUNGEN, false, gameData);
      }
    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[BUTTHAUS1].rcDes)) &&
    (HauptMenue === MEBAUEN) && (Bmp[BUTTHAUS1].Phase !== -1)) {
    drawStartConstructionText(constructionTypes.LADDER);

    Bmp[BUTTHAUS1].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      sounds.CLICK2.instance.play();
      if (isNormalTree(tile.object)) {
        openPaper(texts.BAUMZUKLEIN, false, gameData);
      } else if (tile.object?.sprite === spriteTypes.BIG_TREE) {
        Bmp[BUTTSTOP].Phase = 0;
        Guy.Aktion = AKHAUS1;
      } else if (tile.construction?.type === constructionTypes.LADDER) {
        Bmp[BUTTSTOP].Phase = 0;
        continueConstruction(gameData)
        Guy.Aktion = AKHAUS1;
      } else {
        openPaper(texts.GEGENDNICHT, false, gameData);
      }
    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[BUTTHAUS2].rcDes)) &&
    (HauptMenue === MEBAUEN) && (Bmp[BUTTHAUS2].Phase !== -1)) {
    drawStartConstructionText(constructionTypes.PLATFORM);

    Bmp[BUTTHAUS2].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      sounds.CLICK2.instance.play();
      if (isNormalTree(tile.object)) {
        openPaper(texts.BAUMZUKLEIN, false, gameData);
      } else if (tile.object?.sprite === spriteTypes.BIG_TREE) {
        openPaper(texts.NICHTOHNELEITER, false, gameData);
      } else if (tile.object?.sprite === spriteTypes.BIG_TREE_WITH_LADDER) {
        Bmp[BUTTSTOP].Phase = 0;
        Guy.Aktion = AKHAUS2;
      } else if (tile.construction?.type === constructionTypes.PLATFORM) {
        Bmp[BUTTSTOP].Phase = 0;
        continueConstruction(gameData)
        Guy.Aktion = AKHAUS2;
      } else {
        openPaper(texts.GEGENDNICHT, false, gameData);
      }
    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[BUTTHAUS3].rcDes)) &&
    (HauptMenue === MEBAUEN) && (Bmp[BUTTHAUS3].Phase !== -1)) {
    drawStartConstructionText(constructionTypes.TREE_HOUSE);

    Bmp[BUTTHAUS3].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      sounds.CLICK2.instance.play();
      if (isNormalTree(tile.object)) {
        openPaper(texts.BAUMZUKLEIN, false, gameData);
      } else if (tile.object?.sprite === spriteTypes.BIG_TREE || tile.object?.sprite === spriteTypes.BIG_TREE_WITH_LADDER) {
        openPaper(texts.NICHTOHNEPLATTFORM, false, gameData);
      } else if (tile.object?.sprite === spriteTypes.BIG_TREE_WITH_PLATFORM) {
        Bmp[BUTTSTOP].Phase = 0;
        Guy.Aktion = AKHAUS3;
      } else if (tile.construction?.type === constructionTypes.TREE_HOUSE) {
        Bmp[BUTTSTOP].Phase = 0;
        continueConstruction(gameData)
        Guy.Aktion = AKHAUS3;
      } else {
        openPaper(texts.GEGENDNICHT, false, gameData);
      }
    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[BUTTFEUERST].rcDes)) &&
    (HauptMenue === MEBAUEN) && (Bmp[BUTTFEUERST].Phase !== -1)) {
    drawStartConstructionText(constructionTypes.FIREPLACE);

    Bmp[BUTTFEUERST].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      sounds.CLICK2.instance.play();
      if (!tile.object &&
        (tile.type === tileTypes.FLAT)) {
        Bmp[BUTTSTOP].Phase = 0;
        Guy.Aktion = AKFEUERSTELLE;
      } else if (tile.construction?.type === constructionTypes.FIREPLACE) {
        Bmp[BUTTSTOP].Phase = 0;
        continueConstruction(gameData)
        Guy.Aktion = AKFEUERSTELLE;
      } else {
        openPaper(texts.FEUERSTELLENBEDINGUNGEN, false, gameData);
      }
    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[BUTTDESTROY].rcDes)) &&
    (HauptMenue === MEBAUEN) && (Bmp[BUTTDESTROY].Phase !== -1)) {
    drawStatusText(texts.BEGINNDESTROY);
    Bmp[BUTTDESTROY].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      sounds.CLICK2.instance.play();
      if (isDestroyable(tile.object)) {
        Guy.AkNummer = 0;
        Guy.Aktion = AKDESTROY;
      } else {
        openPaper(texts.KEINBAUWERK, false, gameData);
      }
    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[INVPAPIER].rcDes)) && (HauptMenue === MEINVENTAR)) {
    const item = findItemUnderCursor(gameData, MousePosition);
    if (item) {
      if ((Button === 0) && (Push === 1)) {
        if (TwoClicks === -1) {
          CursorTyp = item;
          TwoClicks = item;
        } else CheckBenutze(item);
      }
      drawStatusText(texts[itemTextIds[item]]);
    };
  } else if (InRect(
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
  } else if (InRect(
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
  } else {
    if ((Button === 0) && (Push === 1)) sounds.CLICK.instance.play();
    TwoClicks = -1;
  }
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
    generateIsland(gameData.terrain);
    setGrounds(gameData.terrain);
    addRiver(gameData.terrain);
    addTrees(gameData.terrain);

    gameData.treasure = hideTreasure(gameData);
    addPirateWreck(gameData.terrain);

    //Guy Position
    gameData.guy.tile.x = 1;
    gameData.guy.tile.y = Math.floor(MAXYKACH / 2);
    const tile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];
    gameData.guy.position.x = tile.position.x + tileEdges[tile.type].center.x;
    gameData.guy.position.y = tile.position.y + tileEdges[tile.type].center.y;

    gameData.guy.water = 100;
    gameData.guy.food = 100;
    gameData.guy.health = 100;
    gameData.guy.inventory = createInventory();

    gameData.guy.chance = 0;

    gameData.calendar.day = 1;
    gameData.calendar.minutes = 0;

    Spielzustand = GAME_INTRO;
    gameData.guy.active = false;
    gameData.guy.sprite = spriteTypes.GUY_SAILING;
    Guy.AkNummer = 0;
    Guy.Aktion = AKINTRO;
  }

  closePaper(gameData);

  drawTreasureMap(gameData);

  updateMinimap(gameData.terrain);
  gameData.guy.storedPosition = { ...gameData.guy.position };
}

const Zeige = () => {
  let Stringsave1 = '';
  let Stringsave2 = ''; //Für die Zeitausgabe

  drawTerrain(gameData, gameData.camera, false);

  ZeichnePanel();

  //Die TagesZeit ausgeben
  const hour = 6 + Math.floor(gameData.calendar.minutes / 60);
  const minute = gameData.calendar.minutes % 60;
  Stringsave1 = hour;
  Stringsave2 = minute;
  StdString = '';
  if (hour < 10) StdString += '0';;
  StdString += Stringsave1;
  StdString += ':';
  if (minute < 10) StdString += '0';
  StdString += Stringsave2;
  drawText(StdString, textAreas.TIME);

  if (gameData.paper) {
    drawPaper(gameData.paper);
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

    if (gameData.paper) {
      drawPaper(gameData.paper);
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
  rcRectsrc.top += Math.floor(Bmp[i].Phase * Bmp[i].Hoehe);
  rcRectsrc.bottom = rcRectsrc.top + Bmp[i].Hoehe;
  rcRectdes.left = Math.round(x);
  rcRectdes.top = Math.round(y);
  rcRectdes.right = Math.round(x) + Bmp[i].Breite;
  rcRectdes.bottom = Math.round(y) + Bmp[i].Hoehe;
  CalcRect(Ziel);
  drawImage(Bmp[i].Surface, canvases.PRIMARY);
}

const ZeichnePanel = () => {
  let diffx, diffy, i, Ringtmp;  //für die Sonnenanzeige

  drawMinimap({ x: rcKarte.left, y: rcKarte.top }, gameData);

  //Panel malen
  rcRectsrc.left = 0;
  rcRectsrc.top = 0;
  rcRectsrc.right = 205;
  rcRectsrc.bottom = 600;
  rcRectdes.left = rcPanel.left;
  rcRectdes.top = rcPanel.top;
  rcRectdes.right = rcPanel.right;
  rcRectdes.bottom = rcPanel.bottom;
  drawImage(panelImage, canvases.PRIMARY);

  //Gitternetzknopf
  if (gameData.options.grid) Bmp[BUTTGITTER].Phase = 1; else Bmp[BUTTGITTER].Phase = 0;
  ZeichneBilder(Bmp[BUTTGITTER].rcDes.left, Bmp[BUTTGITTER].rcDes.top, BUTTGITTER, rcPanel);

  //SOUNDknopf
  if (audio.isRunning()) Bmp[BUTTSOUND].Phase = 0; else Bmp[BUTTSOUND].Phase = 1;
  ZeichneBilder(Bmp[BUTTSOUND].rcDes.left, Bmp[BUTTSOUND].rcDes.top, BUTTSOUND, rcPanel);

  //BEENDENknopf
  ZeichneBilder(Bmp[BUTTBEENDEN].rcDes.left, Bmp[BUTTBEENDEN].rcDes.top, BUTTBEENDEN, rcPanel);

  //NEUknopf
  ZeichneBilder(Bmp[BUTTNEU].rcDes.left, Bmp[BUTTNEU].rcDes.top, BUTTNEU, rcPanel);

  //TAGNEUknopf
  ZeichneBilder(Bmp[BUTTTAGNEU].rcDes.left, Bmp[BUTTTAGNEU].rcDes.top, BUTTTAGNEU, rcPanel);

  //Aktionsknopf
  if (HauptMenue === MEAKTION) Bmp[BUTTAKTION].Phase = Bmp[BUTTAKTION].Anzahl;
  else if (Bmp[BUTTAKTION].Phase === Bmp[BUTTAKTION].Anzahl) Bmp[BUTTAKTION].Phase = 0;
  ZeichneBilder(Bmp[BUTTAKTION].rcDes.left, Bmp[BUTTAKTION].rcDes.top, BUTTAKTION, rcPanel);

  //BauKnopf
  if (HauptMenue === MEBAUEN) Bmp[BUTTBAUEN].Phase = Bmp[BUTTBAUEN].Anzahl;
  else if (Bmp[BUTTBAUEN].Phase === Bmp[BUTTBAUEN].Anzahl) Bmp[BUTTBAUEN].Phase = 0;
  ZeichneBilder(Bmp[BUTTBAUEN].rcDes.left, Bmp[BUTTBAUEN].rcDes.top, BUTTBAUEN, rcPanel);

  //Inventarknopf
  if (HauptMenue === MEINVENTAR) Bmp[BUTTINVENTAR].Phase = Bmp[BUTTINVENTAR].Anzahl;
  else if (Bmp[BUTTINVENTAR].Phase === Bmp[BUTTINVENTAR].Anzahl) Bmp[BUTTINVENTAR].Phase = 0;
  ZeichneBilder(Bmp[BUTTINVENTAR].rcDes.left, Bmp[BUTTINVENTAR].rcDes.top, BUTTINVENTAR, rcPanel);

  //WEITERknopf
  if (Bmp[BUTTWEITER].Phase !== -1) ZeichneBilder(Bmp[BUTTWEITER].rcDes.left, Bmp[BUTTWEITER].rcDes.top, BUTTWEITER, rcPanel);

  //STOPknopf
  if (Bmp[BUTTSTOP].Phase !== -1) ZeichneBilder(Bmp[BUTTSTOP].rcDes.left, Bmp[BUTTSTOP].rcDes.top, BUTTSTOP, rcPanel);

  //ABLEGENknopf
  if (Bmp[BUTTABLEGEN].Phase !== -1) ZeichneBilder(Bmp[BUTTABLEGEN].rcDes.left, Bmp[BUTTABLEGEN].rcDes.top, BUTTABLEGEN, rcPanel);

  //Welches Menü zeichnen?
  switch (HauptMenue) {
    case MEAKTION:
      for (i = BUTTSUCHEN; i <= BUTTSCHLEUDER; i++) {
        if (Bmp[i].Phase === -1) {
          ZeichneBilder(Bmp[i].rcDes.left, Bmp[i].rcDes.top, BUTTFRAGEZ, rcPanel);
          continue;
        }
        ZeichneBilder(Bmp[i].rcDes.left, Bmp[i].rcDes.top, i, rcPanel);
      }
      break;
    case MEBAUEN:
      for (i = BUTTZELT; i <= BUTTDESTROY; i++) {
        if (Bmp[i].Phase === -1) {
          ZeichneBilder(Bmp[i].rcDes.left, Bmp[i].rcDes.top, BUTTFRAGEZ, rcPanel);
          continue;
        }
        ZeichneBilder(Bmp[i].rcDes.left, Bmp[i].rcDes.top, i, rcPanel);
      }
      break;
    case MEINVENTAR:
      ZeichneBilder(Bmp[INVPAPIER].rcDes.left, Bmp[INVPAPIER].rcDes.top, INVPAPIER, rcPanel);
      drawItems(gameData);
      break;
  }

  //Säule1
  i = Bmp[SAEULE1].Hoehe - gameData.guy.water * Bmp[SAEULE1].Hoehe / 100;
  rcRectsrc = { ...Bmp[SAEULE1].rcSrc };
  rcRectsrc.top += i;
  rcRectdes = { ...Bmp[SAEULE1].rcDes };
  rcRectdes.top += i;
  drawImage(Bmp[SAEULE1].Surface, canvases.PRIMARY);

  //Säule2
  i = Bmp[SAEULE2].Hoehe - gameData.guy.food * Bmp[SAEULE2].Hoehe / 100;
  rcRectsrc = { ...Bmp[SAEULE2].rcSrc };
  rcRectsrc.top += i;
  rcRectdes = { ...Bmp[SAEULE2].rcDes };
  rcRectdes.top += i;
  drawImage(Bmp[SAEULE2].Surface, canvases.PRIMARY);

  //Säule3
  i = Bmp[SAEULE3].Hoehe - gameData.guy.health * Bmp[SAEULE3].Hoehe / 100;
  rcRectsrc = { ...Bmp[SAEULE3].rcSrc };
  rcRectsrc.top += i;
  rcRectdes = { ...Bmp[SAEULE3].rcDes };
  rcRectdes.top += i;
  drawImage(Bmp[SAEULE3].Surface, canvases.PRIMARY);

  //Sonnenanzeige
  diffx = (Bmp[SONNE].rcDes.right - Bmp[SONNE].rcDes.left - Bmp[SONNE].Breite) / 2;
  diffy = Bmp[SONNE].rcDes.bottom - Bmp[SONNE].rcDes.top - Bmp[SONNE].Hoehe / 2;
  
  
  ZeichneBilder(Math.floor(Bmp[SONNE].rcDes.left + diffx * Math.cos(pi - pi * gameData.calendar.minutes / 720) + diffx),
    Math.floor(Bmp[SONNE].rcDes.top + (-diffy * Math.sin(pi - pi * gameData.calendar.minutes / 720) + diffy)),
    SONNE, Bmp[SONNE].rcDes);

  //Rettungsring
  if (gameData.guy.chance < 100) Ringtmp = (100 * Math.sin(pi / 200 * gameData.guy.chance));
  else Ringtmp = 100;
  if (Ringtmp > 100) Ringtmp = 100;
  ZeichneBilder(Math.floor(Bmp[RING].rcDes.left),
    Math.floor(Bmp[RING].rcDes.top + Ringtmp),
    RING, rcPanel);

  //Die ChanceZahl ausgeben
  clearText(textAreas.CHANCE);
  textAreas.CHANCE.y = Math.floor(Bmp[RING].rcDes.top + Ringtmp + Bmp[RING].Hoehe - 25);
  StdString = gameData.guy.chance.toFixed(0);
  drawText(StdString, textAreas.CHANCE);

  //TextFeld malen
  rcRectsrc.left = 0;
  rcRectsrc.top = 0;
  rcRectsrc.right = 605;
  rcRectsrc.bottom = 20;
  rcRectdes = { ...rcTextFeld1 };
  drawImage(textfieldImage, canvases.PRIMARY);
}

const DrawSchatzkarte = () => {
  const treasureMapCanvas = canvases.TREASURE_MAP.canvas;

  gameData.paper = {
    height: treasureMapCanvas.height
  };

  rcRectsrc.left = 0;
  rcRectsrc.right = treasureMapCanvas.width;
  rcRectsrc.top = 0;
  rcRectsrc.bottom = treasureMapCanvas.height;
  rcRectdes.left = textAreas.PAPER.x;
  rcRectdes.top = textAreas.PAPER.y;
  rcRectdes.right = rcRectdes.left + treasureMapCanvas.width;
  rcRectdes.bottom = rcRectdes.top + treasureMapCanvas.height;

  drawImage(treasureMapCanvas, canvases.TEXT);
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

const CheckSpzButton = () => {
  const tile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];
  const tileWest = gameData.terrain[gameData.guy.tile.x - 1][gameData.guy.tile.y];
  const tileNorth = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y - 1];
  const tileEast = gameData.terrain[gameData.guy.tile.x + 1][gameData.guy.tile.y];
  const tileSouth = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y + 1];
  if (tile.construction && Bmp[BUTTSTOP].Phase === -1) {
    if (Bmp[BUTTWEITER].Phase === -1) Bmp[BUTTWEITER].Phase = 0;
  } else Bmp[BUTTWEITER].Phase = -1;

  if (Bmp[BUTTSTOP].Phase === -1 && (isUsableBoat(tile) ||
    (isOnSea(gameData) &&
      ((tileWest.ground !== grounds.SEA && !tileWest.object) ||
        (tileNorth.ground !== grounds.SEA && !tileNorth.object) ||
        (tileEast.ground !== grounds.SEA && !tileEast.object) ||
        (tileSouth.ground !== grounds.SEA && !tileSouth.object))))) {
    if (Bmp[BUTTABLEGEN].Phase === -1) Bmp[BUTTABLEGEN].Phase = 0;
  } else Bmp[BUTTABLEGEN].Phase = -1;
}

const CheckRohstoff = () => {
  let Benoetigt; //Anzahl der Gesamtbenötigten Rohstoffe
  let GebrauchtTmp; //Soviel Rohstoffe werden für diesen Schritt benötigt
  let Gebraucht; //Soviel Rohstoffe werden für diesen Schritt benötigt
  let Check;     //Wenn kein Rohstoff mehr vorhanden nur noch einmal die While-Schleife
  const tile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];

  Benoetigt = 0;
  Object.entries(constructions[tile.construction.type].items).forEach(([, amount]) => Benoetigt += amount);

  GebrauchtTmp = Benoetigt / constructions[tile.construction.type].actionSteps;
  Gebraucht = Math.floor(GebrauchtTmp * (tile.construction.actionStep + 1)) - Math.floor(GebrauchtTmp * tile.construction.actionStep);
  if (Gebraucht === 0) return true;

  while (1) {
    Check = false;
    const neededItems = Object.entries(tile.construction.neededItems).filter(([, amount]) => amount).map(([item]) => item);
    for (const neededItem of neededItems) {
      if (gameData.guy.inventory[neededItem] > 0) {
        changeItem(gameData, neededItem, -1);
        tile.construction.neededItems[neededItem]--;
        Gebraucht--;
        if (Gebraucht === 0) return true;
        Check = true;
      }
    }
    if (Check === false) break;
  }
  openPaper(texts.ROHSTOFFNICHT, false, gameData);
  Guy.AkNummer = 0;
  Guy.Aktion = AKABBRUCH;
  Bmp[BUTTSTOP].Phase = -1;
  return false;
}

const Event = (Eventnr) => {
  if (Eventnr !== AKNICHTS) {
    gameData.guy.route = [];
  }
  switch (Eventnr) {
    case AKNICHTS:
      break;
    case AKSUCHEN:
      AkSuchen();
      break;
    case AKESSEN:
      AkEssen();
      break;
    case AKTRINKEN:
      AkTrinken();
      break;
    case AKFAELLEN:
      AkFaellen();
      break;
    case AKFELD:
      AkFeld();
      break;
    case AKTAGENDE:
      AkTagEnde();
      break;
    case AKGERETTET:
      AkGerettet();
      break;
    case AKZELT:
      AkZelt();
      break;
    case AKSCHLAFEN:
      AkSchlafen();
      break;
    case AKABBRUCH:
      AkAbbruch();
      break;
    case AKANGELN:
      AkAngeln();
      break;
    case AKBOOT:
      AkBoot();
      break;
    case AKABLEGEN:
      AkAblegen();
      break;
    case AKANLEGEN:
      AkAnlegen();
      break;
    case AKROHR:
      AkRohr();
      break;
    case AKDESTROY:
      AkDestroy();
      break;
    case AKSOS:
      AkSOS();
      break;
    case AKHAUS1:
      AkHaus1();
      break;
    case AKHAUS2:
      AkHaus2();
      break;
    case AKHAUS3:
      AkHaus3();
      break;
    case AKFEUERSTELLE:
      AkFeuerstelle();
      break;
    case AKANZUENDEN:
      AkAnzuenden();
      break;
    case AKAUSSCHAU:
      AkAusschau();
      break;
    case AKSCHATZ:
      AkSchatz();
      break;
    case AKINTRO:
      AkIntro();
      break;
    case AKSCHLEUDER:
      AkSchleuder();
      break;
    case AKSPIELVERLASSEN:
      AkSpielverlassen();
      break;
    case AKNEUBEGINNEN:
      AkNeubeginnen();
      break;
    case AKTAGNEUBEGINNEN:
      AkTagNeubeginnen();
      break;
    case AKTOD:
      AkTod();
      break;
  }
}

const goToInitialPosition = () => {
  const tilePosition = getTileByPosition(gameData.terrain, gameData.guy.storedPosition);
  if (tilePosition && tilePosition.x === gameData.guy.tile.x && tilePosition.y === gameData.guy.tile.y) {
    goTo(gameData, gameData.guy.storedPosition);
  } else {
    goToCenterOfTile(gameData);
  }
};

const AkIntro = () => {
  let x;
  const tile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];

  Guy.AkNummer++;
  switch (Guy.AkNummer) {
    case 1:
      //Intro Route herstellen
      gameData.guy.active = true;
      for (x = gameData.guy.tile.x; x < MAXXKACH; x++)//Zielkoordinate für Introroute finden
      {
        if (gameData.terrain[x][gameData.guy.tile.y].ground !== grounds.SEA) break;
      }
      gameData.guy.route = findRoute(gameData, { x: x - 2, y: gameData.guy.tile.y });
      sounds.STORM.instance.play(true);
      break;
    case 2:
      startGuyAnimation(gameData, spriteTypes.GUY_TANKING);
      sounds.STORM.instance.stop();
      sounds.SPLASH.instance.play();
      sounds.CRASHING.instance.play();
      break;
    case 3:
      addShipWreck(tile);
      gameData.guy.tile.x += 1;
      goToEastOfTile(gameData);
      discoverTerrain(gameData);
      gameData.guy.sprite = spriteTypes.GUY_SWIMMING;
      sounds.SWIMMING.instance.play(true);
      break;
    case 4:
      gameData.guy.tile.x += 1;
      sounds.SWIMMING.instance.stop();
      goToCenterOfTile(gameData);
      break;
    case 5:
      updateCamera(gameData.camera, gameData.guy.position, false);
      gameData.guy.storedPosition = { ...gameData.guy.position };
      Spielzustand = GAME_PLAY;
      Guy.Aktion = AKNICHTS;
      openPaper(texts.INTROTEXT, false, gameData);
      SaveGame();
      break;
  }
}

const AkNeubeginnen = () => {
  Guy.AkNummer++;
  switch (Guy.AkNummer) {
    case 1:
      goToInitialPosition();
      TwoClicks = -1; //Keine Ahnung warum ich das hier machen muß
      break;
    case 2:
      openPaper(texts.NEUBEGINNEN, true, gameData);
      break;
    case 3:
      Guy.Aktion = AKNICHTS;
      if (gameData.paper.question.answer) {
        startGame(true);
        return;
      }
      closePaper(gameData);
      break;
  }
}

const AkTagNeubeginnen = () => {
  Guy.AkNummer++;
  switch (Guy.AkNummer) {
    case 1:
      goToInitialPosition();
      TwoClicks = -1; //Keine Ahnung warum ich das hier machen muß
      break;
    case 2:
      openPaper(texts.TAGNEU, true, gameData);
      break;
    case 3:
      Guy.Aktion = AKNICHTS;
      if (gameData.paper.question.answer) {
        startGame(false);
        return;
      }
      closePaper(gameData);
      break;
  }
}

const AkSpielverlassen = () => {
  Guy.AkNummer++;
  switch (Guy.AkNummer) {
    case 1:
      goToInitialPosition();
      TwoClicks = -1; //Keine Ahnung warum ich das hier machen muß
      break;
    case 2:
      openPaper(texts.SPIELVERLASSEN, true, gameData);
      break;
    case 3:
      Guy.Aktion = AKNICHTS;
      if (gameData.paper.question.answer) {
        if (gameData.guy.health > 10) {
          SaveGame();
        }
        audio.stopAll();
        Spielzustand = GAME_CREDITS;
      }
      closePaper(gameData);
      break;
  }
}

const AkTod = () => {
  Guy.AkNummer++;
  switch (Guy.AkNummer) {
    case 1:
      openPaper(texts.TOD, false, gameData);
      break;
    case 2:
      if (!isOnSea(gameData)) {
        startGuyAnimation(gameData, spriteTypes.GUY_LAYING_DOWN);
      }
      break;
    case 3:
      Nacht = false;
      Fade(100, 1);
      startGuyAnimation(gameData, isOnSea(gameData) ? spriteTypes.GUY_DYING_BOAT : spriteTypes.GUY_DYING);
      break;
    case 4:
      Nacht = true;
      openPaper(texts.TAGNEU, true, gameData);
      break;
    case 5:
      Nacht = false;
      Guy.Aktion = AKNICHTS;
      if (gameData.paper.question.answer) {
        startGame(false)
      } else {
        audio.stopAll();
        Spielzustand = GAME_CREDITS;
      };
      closePaper(gameData);
      break;
  }
}

const AkAbbruch = () => {
  Guy.AkNummer++;
  switch (Guy.AkNummer) {
    case 1:
      pauseConstruction(gameData);
      break;
    case 2:
      Guy.Aktion = AKNICHTS;
      break;
  }
}


const AkDestroy = () => {
  const tile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];

  if (Guy.AkNummer === 0) {
    gameData.guy.storedPosition = { ...gameData.guy.position };  //Die Originalposition merken
  }
  Guy.AkNummer++;
  switch (Guy.AkNummer) {
    case 1:
      goToOnTile(gameData, {
        x: tile.object.x + 4,
        y: tile.object.y + 2
      });
      break;
    case 2:
    case 4:
      startGuyAnimation(gameData, spriteTypes.GUY_CHOPPING);
      sounds.CHOPPING.instance.play();
      changeWaterAndFood(gameData, -1, -1);
      AddTime(5);
      break;
    case 3:
    case 5:
      startGuyAnimation(gameData, spriteTypes.GUY_HITTING);
      sounds.HITTING.instance.play();
      changeWaterAndFood(gameData, -1, -1);
      AddTime(5);
      break;
    case 6:
      const object = tile.object;
      tile.object = tile.originalObject;
      tile.originalObject = null
      if (tile.construction) {
        tile.construction = null;
      } else {
        if (object.chance) {
          gameData.guy.chance -= object.chance;
        }
        if (object.sprite === spriteTypes.PIPE) {
          updatePipes(gameData.terrain);
        }
      }
      goToStoredPosition(gameData);
      break;
    case 7:
      Guy.Aktion = AKNICHTS;
      break;
  }
}

const AkSuchen = () => {
  const tile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];

  if (Guy.AkNummer === 0) {
    gameData.guy.storedPosition = { ...gameData.guy.position };  //Die Originalposition merken
  }
  Guy.AkNummer++;
  switch (Guy.AkNummer) {
    case 1:
    case 3:
    case 5:
    case 7:
      if (isOnSea(gameData)) {
        if (Guy.AkNummer === 1) {
          startGuyAnimation(gameData, spriteTypes.GUY_DIVING_JUMPING);
          sounds.SPLASH.instance.play();
        }
      } else {
        const targetPosition = calculatePositionInTile(tile, Math.random(), Math.random());
        goTo(gameData, { x: tile.position.x + targetPosition.x, y: tile.position.y + targetPosition.y });
      }
      break;
    case 2:
    case 4:
    case 6:
    case 8:
      if (isOnSea(gameData)) {
        startGuyAnimation(gameData, spriteTypes.GUY_DIVING);
      } else {
        startGuyAnimation(gameData, spriteTypes.GUY_SEARCHING);
        sounds.CRACKLING.instance.play();
      }
      AddTime(4);
      break;
    case 9:
      if (isOnSea(gameData)) {
        startGuyAnimation(gameData, spriteTypes.GUY_DIVING_CLIMBING);
        sounds.SPLASH.instance.play();
      }
      break;
    case 10:
      goToStoredPosition(gameData);
      break;
    case 11:
      //Auf Strand und Fluss
      if (tile.ground === grounds.BEACH || isRiver(tile.object)) {
        if (gameData.guy.inventory[items.STONE] < 10) {
          openPaper(texts.ROHSTEINGEFUNDEN, false, gameData);
          changeItem(gameData, items.STONE, 3);
        } else {
          openPaper(texts.ROHSTEINZUVIEL, false, gameData);
        }
      } else if (tile.object?.sprite === spriteTypes.BUSH) {
        switch (Math.floor(Math.random() * 2)) {
          case 0:
            if (gameData.guy.inventory[items.BRANCH] < 10) {
              openPaper(texts.ROHASTGEFUNDEN, false, gameData);
              changeItem(gameData, items.BRANCH, 1);
            } else {
              openPaper(texts.ROHASTZUVIEL, false, gameData);
            }
            break;
          case 1:
            if (gameData.guy.inventory[items.LEAF] < 10) {
              openPaper(texts.ROHBLATTGEFUNDEN, false, gameData);
              changeItem(gameData, items.LEAF, 1);
            } else {
              openPaper(texts.ROHBLATTZUVIEL, false, gameData);
            }
            break;
        }
      } else if (isNormalTree(tile.object) || isBigTree(tile.object)) {
        switch (Math.floor(Math.random() * 3)) {
          case 0:
            if (gameData.guy.inventory[items.BRANCH] < 10) {
              openPaper(texts.ROHASTGEFUNDEN, false, gameData);
              changeItem(gameData, items.BRANCH, 1);
            } else {
              openPaper(texts.ROHASTZUVIEL, false, gameData);
            }
            break;
          case 1:
            if (gameData.guy.inventory[items.LEAF] < 10) {
              openPaper(texts.ROHBLATTGEFUNDEN, false, gameData);
              changeItem(gameData, items.LEAF, 1);
            } else {
              openPaper(texts.ROHBLATTZUVIEL, false, gameData);
            }
            break;
          case 2:
            if (gameData.guy.inventory[items.LIANA] < 10) {
              openPaper(texts.ROHLIANEGEFUNDEN, false, gameData);
              changeItem(gameData, items.LIANA, 1);
            } else {
              openPaper(texts.ROHLIANEZUVIEL, false, gameData);
            }
            break;
        }
      } else if (isOnSea(gameData)) {
        if (tile.object?.sprite === spriteTypes.SHIP_WRECK) {
          if (!gameData.guy.inventory[items.SPYGLASS]) {
            openPaper(texts.FERNROHRGEFUNDEN, false, gameData);
            changeItem(gameData, items.SPYGLASS, 1);
            Bmp[BUTTAUSSCHAU].Phase = 0;
            changeItem(gameData, items.HAMMER, 1);
            Bmp[BUTTHAUS1].Phase = 0;
            Bmp[BUTTHAUS2].Phase = 0;
            Bmp[BUTTHAUS3].Phase = 0;
          } else {
            openPaper(texts.NICHTSGEFUNDEN2, false, gameData);
          }
        } else if (tile.object?.sprite === spriteTypes.PIRATE_WRECK) {
          if (!gameData.guy.inventory[items.MAP]) {
            openPaper(texts.KARTEGEFUNDEN, false, gameData);
            changeItem(gameData, items.MAP, 1);
            Bmp[BUTTSCHATZKARTE].Phase = 0;
            changeItem(gameData, items.SHOVEL, 1);
            Bmp[BUTTSCHATZ].Phase = 0;
          } else {
            openPaper(texts.NICHTSGEFUNDEN2, false, gameData);
          }
        } else {
          openPaper(texts.NICHTSGEFUNDEN2, false, gameData);
        }
      } else {
        openPaper(texts.NICHTSGEFUNDEN, false, gameData);
      }
      break;
    case 12:
      Guy.Aktion = AKNICHTS;
      break;
  }
}

const AkEssen = () => {
  if (Guy.AkNummer === 0) {
    gameData.guy.storedPosition = { ...gameData.guy.position };  //Die Originalposition merken
  }
  const tile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];
  Guy.AkNummer++;
  switch (Guy.AkNummer) {
    case 1:
      if (tile.object) {
        goToObject(gameData, 0, 2);
      }
      break;
    case 2:
    case 3:
      startGuyAnimation(gameData, spriteTypes.GUY_EATING);
      sounds.CRACKLING.instance.play();
      changeWaterAndFood(gameData, 0, 15);
      AddTime(2);
      break;
    case 4:
      tile.object.frame = 0;
      goToStoredPosition(gameData);
      break;
    case 5:
      Guy.Aktion = AKNICHTS;
      break;
  }
}

const AkSchleuder = () => {
  if (Guy.AkNummer === 0) {
    gameData.guy.storedPosition = { ...gameData.guy.position };  //Die Originalposition merken
  }
  Guy.AkNummer++;
  switch (Guy.AkNummer) {
    case 1:
      goToObject(gameData, -14, 9);
      break;
    case 2:
      startGuyAnimation(gameData, spriteTypes.GUY_SLINGING);
      AddTime(2);
      sounds.SLINGING.instance.play();
      break;
    case 3:
      goToObject(gameData, 6, 2);
      break;
    case 4:
      startGuyAnimation(gameData, spriteTypes.GUY_SEARCHING);
      sounds.CRACKLING.instance.play();
      changeWaterAndFood(gameData, 0, 5);
      AddTime(20);
      break;
    case 5:
      goToStoredPosition(gameData);
      break;
    case 6:
      Guy.Aktion = AKNICHTS;
      break;
  }
}

const AkTrinken = () => {
  if (Guy.AkNummer === 0) {
    gameData.guy.storedPosition = { ...gameData.guy.position };  //Die Originalposition merken
  }
  Guy.AkNummer++;
  switch (Guy.AkNummer) {
    case 1:
      goToOffset(gameData, -4, -2);
      break;
    case 2:
    case 3:
      startGuyAnimation(gameData, spriteTypes.GUY_DRINKING);
      sounds.DRINKING.instance.play();
      changeWaterAndFood(gameData, 30, 0);
      AddTime(3);
      break;
    case 4:
      goToStoredPosition(gameData);
      break;
    case 5:
      Guy.Aktion = AKNICHTS;
      break;
  }
}

const AkFaellen = () => {
  let i;

  if (Guy.AkNummer === 0) {
    gameData.guy.storedPosition = { ...gameData.guy.position };  //Die Originalposition merken
  }
  const tile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];
  const tree = tile.object;
  Guy.AkNummer++;
  switch (Guy.AkNummer) {
    case 1:
      goToObject(gameData, 9, 3);
      break;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      startGuyAnimation(gameData, spriteTypes.GUY_CHOPPING);
      sounds.CHOPPING.instance.play();
      changeWaterAndFood(gameData, -2, -2);
      AddTime(10);
      break;
    case 7:
      startGuyAnimation(gameData, spriteTypes.GUY_WAITING);
      createTreeFallObject(tile);
      sounds.TREEFALL.instance.play();
      changeItem(gameData, items.LOG, 1);
      changeItem(gameData, items.BRANCH, 5);
      changeItem(gameData, items.LEAF, 5);
      changeItem(gameData, items.LIANA, 2);
      break;
    case 8:
      goToStoredPosition(gameData);
      break;
    case 9:
      Guy.Aktion = AKNICHTS;
      break;
  }
}

const AkAngeln = () => {
  if (Guy.AkNummer === 0) {
    gameData.guy.storedPosition = { ...gameData.guy.position };  //Die Originalposition merken
  }
  const tile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];
  Guy.AkNummer++;
  switch (Guy.AkNummer) {
    case 1:
      if (tile.object) {
        switch (tile.object.sprite) {
          case spriteTypes.RIVER_SLOPE_NORTH:
            goToOnTile(gameData, { x: 35, y: 26 });
            break;
          case spriteTypes.RIVER_SLOPE_WEST:
            goToOnTile(gameData, { x: 19, y: 26 });
            break;
          case spriteTypes.RIVER_SLOPE_SOUTH:
            goToOnTile(gameData, { x: 22, y: 20 });
            break;
          case spriteTypes.RIVER_SLOPE_EAST:
            goToOnTile(gameData, { x: 34, y: 23 });
            break;
          case spriteTypes.RIVER_NORTH_SOUTH:
          case spriteTypes.RIVER_WEST_SOUTH:
          case spriteTypes.RIVER_MOUTH_NORTH:
          case spriteTypes.RIVER_SPRING_SOUTH:
          case spriteTypes.RIVER_DAM_NORTH_SOUTH:
          case spriteTypes.RIVER_DAM_WEST_SOUTH:
            goToOnTile(gameData, { x: 34, y: 33 });
            break;
          case spriteTypes.RIVER_WEST_EAST:
          case spriteTypes.RIVER_WEST_NORTH:
          case spriteTypes.RIVER_MOUTH_WEST:
          case spriteTypes.RIVER_SPRING_EAST:
          case spriteTypes.RIVER_DAM_WEST_EAST:
          case spriteTypes.RIVER_DAM_WEST_NORTH:    
            goToOnTile(gameData, { x: 20, y: 33 });
            break;
          case spriteTypes.RIVER_NORTH_EAST:
          case spriteTypes.RIVER_MOUTH_SOUTH:
          case spriteTypes.RIVER_SPRING_NORTH:
          case spriteTypes.RIVER_DAM_NORTH_EAST:  
            goToOnTile(gameData, { x: 22, y: 26 });
            break;
          case spriteTypes.RIVER_SOUTH_EAST:
          case spriteTypes.RIVER_MOUTH_EAST:
          case spriteTypes.RIVER_SPRING_WEST:
          case spriteTypes.RIVER_DAM_SOUTH_EAST:
            goToOnTile(gameData, { x: 32, y: 26 });
            break;
        }
      }
      break;
    case 2:
      sounds.FISHING.instance.play();
      if (isOnSea(gameData)) {
        startGuyAnimation(gameData, spriteTypes.GUY_FISHING_SWINGING_BOAT);
      }
      if (tile.object) {
        switch (tile.object.sprite) {
          case spriteTypes.RIVER_SLOPE_NORTH:
          case spriteTypes.RIVER_NORTH_SOUTH:
          case spriteTypes.RIVER_WEST_SOUTH:
          case spriteTypes.RIVER_MOUTH_NORTH:
          case spriteTypes.RIVER_SPRING_SOUTH:
          case spriteTypes.RIVER_DAM_NORTH_SOUTH:
          case spriteTypes.RIVER_DAM_WEST_SOUTH:
            startGuyAnimation(gameData, spriteTypes.GUY_FISHING_SWINGING_WEST);
            break;
          case spriteTypes.RIVER_SLOPE_WEST:
          case spriteTypes.RIVER_WEST_EAST:
          case spriteTypes.RIVER_WEST_NORTH:
          case spriteTypes.RIVER_MOUTH_WEST:
          case spriteTypes.RIVER_SPRING_EAST:
          case spriteTypes.RIVER_DAM_WEST_EAST:
          case spriteTypes.RIVER_DAM_WEST_NORTH:  
            startGuyAnimation(gameData, spriteTypes.GUY_FISHING_SWINGING_NORTH);
            break;
          case spriteTypes.RIVER_SLOPE_SOUTH:
          case spriteTypes.RIVER_NORTH_EAST:
          case spriteTypes.RIVER_MOUTH_SOUTH:
          case spriteTypes.RIVER_SPRING_NORTH:
          case spriteTypes.RIVER_DAM_NORTH_EAST:  
            startGuyAnimation(gameData, spriteTypes.GUY_FISHING_SWINGING_EAST);
            break;
          case spriteTypes.RIVER_SLOPE_EAST:
          case spriteTypes.RIVER_SOUTH_EAST:
          case spriteTypes.RIVER_MOUTH_EAST:
          case spriteTypes.RIVER_SPRING_WEST:
          case spriteTypes.RIVER_DAM_SOUTH_EAST:
            startGuyAnimation(gameData, spriteTypes.GUY_FISHING_SWINGING_SOUTH);
            break;
        }
      }
      break;
    case 3:
    case 4:
    case 5:
    case 6:
      if (isOnSea(gameData)) {
        startGuyAnimation(gameData, spriteTypes.GUY_FISHING_BOAT);
      }

      if (tile.object) {
        switch (tile.object.sprite) {
          case spriteTypes.RIVER_SLOPE_NORTH:
          case spriteTypes.RIVER_NORTH_SOUTH:
          case spriteTypes.RIVER_WEST_SOUTH:
          case spriteTypes.RIVER_MOUTH_NORTH:
          case spriteTypes.RIVER_SPRING_SOUTH:
          case spriteTypes.RIVER_DAM_NORTH_SOUTH:
          case spriteTypes.RIVER_DAM_WEST_SOUTH:
            startGuyAnimation(gameData, spriteTypes.GUY_FISHING_WEST);
            break;
          case spriteTypes.RIVER_SLOPE_WEST:
          case spriteTypes.RIVER_WEST_EAST:
          case spriteTypes.RIVER_WEST_NORTH:
          case spriteTypes.RIVER_MOUTH_WEST:
          case spriteTypes.RIVER_SPRING_EAST:
          case spriteTypes.RIVER_DAM_WEST_EAST:
          case spriteTypes.RIVER_DAM_WEST_NORTH:  
            startGuyAnimation(gameData, spriteTypes.GUY_FISHING_NORTH);
            break;
          case spriteTypes.RIVER_SLOPE_SOUTH:
          case spriteTypes.RIVER_NORTH_EAST:
          case spriteTypes.RIVER_MOUTH_SOUTH:
          case spriteTypes.RIVER_SPRING_NORTH:
          case spriteTypes.RIVER_DAM_NORTH_EAST:  
            startGuyAnimation(gameData, spriteTypes.GUY_FISHING_EAST);
            break;
          case spriteTypes.RIVER_SLOPE_EAST:
          case spriteTypes.RIVER_SOUTH_EAST:
          case spriteTypes.RIVER_MOUTH_EAST:
          case spriteTypes.RIVER_SPRING_WEST:
          case spriteTypes.RIVER_DAM_SOUTH_EAST:
            startGuyAnimation(gameData, spriteTypes.GUY_FISHING_SOUTH);
            break;
        }
      }
      changeHealth(gameData, 2);
      AddTime(20);
      break;
    case 7:
      if (isOnSea(gameData)) {
        startGuyAnimation(gameData, spriteTypes.GUY_FISHING_CATCHING_BOAT);
      }

      if (tile.object) {
        switch (tile.object.sprite) {
          case spriteTypes.RIVER_SLOPE_NORTH:
          case spriteTypes.RIVER_NORTH_SOUTH:
          case spriteTypes.RIVER_WEST_SOUTH:
          case spriteTypes.RIVER_MOUTH_NORTH:
          case spriteTypes.RIVER_SPRING_SOUTH:
          case spriteTypes.RIVER_DAM_NORTH_SOUTH:
          case spriteTypes.RIVER_DAM_WEST_SOUTH:  
            startGuyAnimation(gameData, spriteTypes.GUY_FISHING_CATCHING_WEST);
            break;
          case spriteTypes.RIVER_SLOPE_WEST:
          case spriteTypes.RIVER_WEST_EAST:
          case spriteTypes.RIVER_WEST_NORTH:
          case spriteTypes.RIVER_MOUTH_WEST:
          case spriteTypes.RIVER_SPRING_EAST:
          case spriteTypes.RIVER_DAM_WEST_EAST:
          case spriteTypes.RIVER_DAM_WEST_NORTH:  
            startGuyAnimation(gameData, spriteTypes.GUY_FISHING_CATCHING_NORTH);
            break;
          case spriteTypes.RIVER_SLOPE_SOUTH:
          case spriteTypes.RIVER_NORTH_EAST:
          case spriteTypes.RIVER_MOUTH_SOUTH:
          case spriteTypes.RIVER_SPRING_NORTH:
          case spriteTypes.RIVER_DAM_NORTH_EAST: 
            startGuyAnimation(gameData, spriteTypes.GUY_FISHING_CATCHING_EAST);
            break;
          case spriteTypes.RIVER_SLOPE_EAST:
          case spriteTypes.RIVER_SOUTH_EAST:
          case spriteTypes.RIVER_MOUTH_EAST:
          case spriteTypes.RIVER_SPRING_WEST:
          case spriteTypes.RIVER_DAM_SOUTH_EAST:
            startGuyAnimation(gameData, spriteTypes.GUY_FISHING_CATCHING_SOUTH);
            break;
        }
      }
      break;
    case 8:
      goToStoredPosition(gameData);
      break;
    case 9:
      changeWaterAndFood(gameData, 0, 20);
      Guy.Aktion = AKNICHTS;
      break;
  }
}

const AkAnzuenden = () => {
  const tile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];

  if (Guy.AkNummer === 0) {
    gameData.guy.storedPosition = { ...gameData.guy.position };  //Die Originalposition merken
  }
  Guy.AkNummer++;
  switch (Guy.AkNummer) {
    case 1:
      goToOnTile(gameData, {
        x: tile.object.x - 12,
        y: tile.object.y + 5
      });
      break;
    case 2:
      startGuyAnimation(gameData, spriteTypes.GUY_LIGHTNING);
      AddTime(1);
      break;
    case 3:
      startGuyAnimation(gameData, spriteTypes.GUY_WAITING);
      tile.object.sprite = spriteTypes.FIRE;
      tile.object.chance = 2 + 2 * tile.height;
      tile.object.lifetime = 35 * 60;
      gameData.guy.chance += tile.object.chance;
      AddTime(2);
      break;
    case 4:
      goToStoredPosition(gameData);
      break;
    case 5:
      Guy.Aktion = AKNICHTS;
      break;
  }
}

const AkAusschau = () => {
  if (Guy.AkNummer === 0) {
    gameData.guy.storedPosition = { ...gameData.guy.position };  //Die Originalposition merken
  }
  Guy.AkNummer++;
  switch (Guy.AkNummer) {
    case 1:
      startGuyAnimation(gameData, spriteTypes.GUY_LOOKING);
      AddTime(40);
      gameData.guy.chance += 1 + gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].height;
      break;
    case 2:
      startGuyAnimation(gameData, spriteTypes.GUY_WAITING);
      AddTime(40);
      break;
    case 3:
      startGuyAnimation(gameData, spriteTypes.GUY_LOOKING);
      AddTime(40);
      break;
    case 4:
      goToStoredPosition(gameData);
      break;
    case 5:
      gameData.guy.chance -= 1 + gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].height;
      Guy.Aktion = AKNICHTS;
      break;
  }
}

const AkSchatz = () => {
  if (Guy.AkNummer === 0) {
    gameData.guy.storedPosition = { ...gameData.guy.position };
  }
  Guy.AkNummer++;

  switch (Guy.AkNummer) {
    case 1:
      startGuyAnimation(gameData, spriteTypes.GUY_SHOVELING);
      sounds.SHOVELING.instance.play();
      break;
    case 2:
      AddTime(20);
      changeWaterAndFood(gameData, -10, -10);
      goToStoredPosition(gameData);
      if (gameData.guy.tile.x === gameData.treasure.x && gameData.guy.tile.y === gameData.treasure.y && !gameData.treasure.found) {
        openPaper(texts.SCHATZGEFUNDEN, false, gameData);
        changeItem(gameData, items.MATCHES, 1);
        Bmp[BUTTANZUENDEN].Phase = 0;
        gameData.treasure.found = true;
      } else {
        openPaper(texts.KEINSCHATZ, false, gameData);
      }
      break;
    case 3:
      Guy.Aktion = AKNICHTS;
      break;
  }
}

const AkFeld = () => {
  const tile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];

  if (!tile.construction) {
    const center = tileEdges[tile.type].center;
    startConstruction(gameData, constructionTypes.FIELD, center.x, center.y);
  }
  if (!CheckRohstoff()) {
    return;
  }
  tile.construction.actionStep++;

  switch (tile.construction.actionStep) {
    case 1:
      goToOnTile(gameData, {
        x: tile.object.x + 6,
        y: tile.object.y + 7
      });
      break;
    case 4:
      construct(tile, 1);
      goToOnTile(gameData, {
        x: tile.object.x + 9,
        y: tile.object.y + 5
      });
      changeWaterAndFood(gameData, -2, -2);
      AddTime(30);
      break;
    case 7:
      construct(tile, 2);
      goToOnTile(gameData, {
        x: tile.object.x + 12,
        y: tile.object.y + 3
      });
      changeWaterAndFood(gameData, -2, -2);
      AddTime(30);
      break;
    case 10:
      construct(tile, 3);
      goToOnTile(gameData, {
        x: tile.object.x + 15,
        y: tile.object.y + 1
      });
      changeWaterAndFood(gameData, -2, -2);
      AddTime(30);
      break;
    case 13:
      construct(tile, 4);
      goToOnTile(gameData, {
        x: tile.object.x + 18,
        y: tile.object.y - 1
      });
      changeWaterAndFood(gameData, -2, -2);
      AddTime(30);
      break;
    case 16:
      construct(tile, 5);
      goToOnTile(gameData, {
        x: tile.object.x + 20,
        y: tile.object.y - 3
      });
      changeWaterAndFood(gameData, -2, -2);
      AddTime(30);
      break;
    case 2:
    case 3:
    case 5:
    case 6:
    case 8:
    case 9:
    case 11:
    case 12:
    case 14:
    case 15:
    case 17:
    case 18:
      startGuyAnimation(gameData, spriteTypes.GUY_HARROWING);
      break;
    case 19:
      goToStoredPosition(gameData);
      break;
    case 20:
      finishConstruction(tile);
      Bmp[BUTTSTOP].Phase = -1;
      if (!gameData.constructionHints[constructionTypes.FIELD]) {
        openPaper(texts.FELDHILFE, false, gameData);
        gameData.constructionHints[constructionTypes.FIELD] = true;
      }
      Guy.Aktion = AKNICHTS;
      break;
  }
}

const AkTagEnde = () => {
  const alreadyAtSleepPosition = gameData.guy.sprite === spriteTypes.GUY_SLEEPING_TENT ||
    gameData.guy.sprite === spriteTypes.GUY_SLEEPING ||
    gameData.guy.sprite === spriteTypes.GUY_SLEEPING_HOUSE ||
    isOnSea(gameData);
  const tile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];
  const tent = isUsableTent(tile);
  const house = isUsableTreeHouse(tile);

  Guy.AkNummer++;
  switch (Guy.AkNummer) {
    case 1:
      gameData.calendar.minutes = 12 * 60;
      TwoClicks = -1; //Keine Ahnung warum ich das hier machen muß
      Bmp[BUTTSTOP].Phase = -1;
      if (alreadyAtSleepPosition) break;
      pauseConstruction(gameData);
      break;
    case 2:
      gameData.calendar.minutes = 12 * 60;
      if (alreadyAtSleepPosition) break;
      const neighborWithHouse = findNeighbor(gameData, isUsableTreeHouse, false);
      const neighborWithTent = findNeighbor(gameData, isUsableTent, false);
      const neighbor = neighborWithHouse || neighborWithTent;
      if (neighbor) {
        gameData.guy.tile.x = neighbor.x;
        gameData.guy.tile.y = neighbor.y;
        const tile = gameData.terrain[neighbor.x][neighbor.y];
        if (neighborWithHouse) {
          goToOnTile(gameData, {
            x: tile.object.x + 1,
            y: tile.object.y + 1
          });
        } else {
          goToOnTile(gameData, {
            x: tile.object.x - 10,
            y: tile.object.y + 5
          });
        }
      }
      break;
    case 3:
      gameData.calendar.minutes = 12 * 60;
      if (alreadyAtSleepPosition) break;
      if (house) {
        startGuyAnimation(gameData, spriteTypes.GUY_CLIMBING_UP);
      }
      break;
    case 4:
      Fade(0, 3);
      gameData.calendar.minutes = 12 * 60;
      if (alreadyAtSleepPosition) break;
      if (tent) {
        startGuyAnimation(gameData, spriteTypes.GUY_LAYING_DOWN_TENT);
      } else if (house) {
        startGuyAnimation(gameData, spriteTypes.GUY_LAYING_DOWN_HOUSE);
      } else {
        startGuyAnimation(gameData, spriteTypes.GUY_LAYING_DOWN);
      }
      break;
    case 5:
      gameData.calendar.minutes = 12 * 60;
      if (isOnSea(gameData)) break;
      if (tent) {
        startGuyAnimation(gameData, spriteTypes.GUY_SLEEPING_TENT);
      } else if (house) {
        startGuyAnimation(gameData, spriteTypes.GUY_SLEEPING_HOUSE);
      } else startGuyAnimation(gameData, spriteTypes.GUY_SLEEPING);
      sounds.SNORING.instance.play();
      break;
    case 6:
      gameData.calendar.minutes = 12 * 60;
      if (isOnSea(gameData)) break;
      if (tent)
        startGuyAnimation(gameData, spriteTypes.GUY_SLEEPING_TENT);
      else if (house)
        startGuyAnimation(gameData, spriteTypes.GUY_SLEEPING_HOUSE);
      else startGuyAnimation(gameData, spriteTypes.GUY_SLEEPING);
      sounds.SNORING.instance.play();
      break;
    case 7:
      Nacht = true;
      gameData.calendar.minutes = 12 * 60;
      sounds.WOLF.instance.play();

      //Je nach Schlafort Zustand verändern
      if (tent) {
        changeHealth(gameData, -5);
        if (gameData.guy.health <= 0) {
          openDayEndPaper(texts.TAGENDE5, gameData);
          Guy.AkNummer = 2;
          Guy.Aktion = AKTOD;
          gameData.calendar.minutes = 0;
        } else {
          openPaper(texts.TAGENDE2, false, gameData);
        }
      } else if (house) {
        changeHealth(gameData, 20);
        openDayEndPaper(texts.TAGENDE4, gameData);
      } else if (isOnSea(gameData)) {
        openDayEndPaper(texts.TAGENDE3, gameData);
        Guy.AkNummer = 2;
        Guy.Aktion = AKTOD;
        gameData.calendar.minutes = 0;
      } else {
        changeHealth(gameData, -20);
        if (gameData.guy.health <= 0) {
          openDayEndPaper(texts.TAGENDE5, gameData);
          Guy.AkNummer = 2;
          Guy.Aktion = AKTOD;
          gameData.calendar.minutes = 0;
        } else {
          openDayEndPaper(texts.TAGENDE1, gameData);
        }
      }
      break;
    case 8:
      Fade(0, 0);
      Nacht = false;
      gameData.calendar.day++;
      gameData.calendar.minutes = 0;
      if (tent)
        startGuyAnimation(gameData, spriteTypes.GUY_SLEEPING_TENT);
      else if (house)
        startGuyAnimation(gameData, spriteTypes.GUY_SLEEPING_HOUSE);
      else startGuyAnimation(gameData, spriteTypes.GUY_SLEEPING);
      sounds.SNORING.instance.play();
      break;
    case 9:
      Fade(100, 2);
      gameData.calendar.minutes = 0;
      if (tent)
        startGuyAnimation(gameData, spriteTypes.GUY_SLEEPING_TENT);
      else if (house)
        startGuyAnimation(gameData, spriteTypes.GUY_SLEEPING_HOUSE);
      else startGuyAnimation(gameData, spriteTypes.GUY_SLEEPING);
      sounds.SNORING.instance.play();
      break;
    case 10:
      gameData.calendar.minutes = 0;
      sounds.SNORING.instance.stop();
      if (house) {
        startGuyAnimation(gameData, spriteTypes.GUY_STANDING_UP_HOUSE);
      } else startGuyAnimation(gameData, spriteTypes.GUY_STANDING_UP);
      break;
    case 11:
      gameData.calendar.minutes = 0;
      if (house) {
        startGuyAnimation(gameData, spriteTypes.GUY_CLIMBING_DOWN);
      }
      break;
    case 12:
      gameData.calendar.minutes = 0;

      goToCenterOfTile(gameData);
      Guy.Aktion = AKNICHTS;
      if (gameData.guy.health > 10) SaveGame();
      break;
  }
}

const AkGerettet = () => {
  let x;

  Guy.AkNummer++;
  switch (Guy.AkNummer) {
    case 1:
      goToInitialPosition();
      TwoClicks = -1; //Keine Ahnung warum ich das hier machen muß
      break;
    case 2:
      openPaper(texts.GERETTET, true, gameData);
      break;
    case 3:
      if (gameData.paper.question.answer) {
        Spielzustand = GAME_OUTRO;
      } else {
        Guy.Aktion = AKNICHTS;
      }
      closePaper(gameData);
      break;
    case 4:
      // Route herstellen
      for (x = MAXXKACH - 1; x > 1; x--)//Position des Rettungsschiffs festlegen
      {
        if (gameData.terrain[x][gameData.guy.tile.y].ground !== grounds.SEA) break;
      }
      //Schiff hinbauen
      const shipTile = gameData.terrain[x + 2][gameData.guy.tile.y];
      shipTile.object = {
        sprite: spriteTypes.GUY_SAILING,
        x: tileEdges[shipTile.type].center.x,
        y: tileEdges[shipTile.type].center.y,
        frame: 0
      };
      gameData.guy.route = findRoute(gameData, { x, y: gameData.guy.tile.y });
      gameData.guy.active = true;
      break;
    case 5:
      goToEastOfTile(gameData);
      break;
    case 6:
      gameData.guy.tile.x += 2;
      discoverTerrain(gameData);
      gameData.guy.sprite = spriteTypes.GUY_SWIMMING;
      sounds.SWIMMING.instance.play(true);
      goToCenterOfTile(gameData);
      break;
    case 7:
      gameData.guy.sprite = spriteTypes.GUY_SAILING;
      sounds.SWIMMING.instance.stop();
      sounds.STORM.instance.play(true);
      gameData.guy.route = findRoute(gameData, { x: gameData.terrain.length - 1, y: gameData.guy.tile.y });
      gameData.guy.active = true;
      gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].object = createWaves();
      break;
    case 8:
      sounds.STORM.instance.stop();
      audio.stopAll();
      Guy.Aktion = AKNICHTS;
      Spielzustand = GAME_CREDITS;
      break;
  }
}

const AkZelt = () => {
  const tile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];
  if (!tile.construction) {
    startConstruction(gameData, constructionTypes.TENT, 28, 22);
  }
  if (!CheckRohstoff()) {
    return;
  }
  tile.construction.actionStep++;

  switch (tile.construction.actionStep) {
    case 1:
      goToOnTile(gameData, {
        x: tile.object.x + 9,
        y: tile.object.y - 4
      });
      break;
    case 2:
    case 3:
    case 12:
    case 13:
      startGuyAnimation(gameData, spriteTypes.GUY_KNOTTING_SOUTH);
      changeWaterAndFood(gameData, -2, -2);
      AddTime(15);
      break;
    case 4:
      construct(tile, 1);
      goToOnTile(gameData, {
        x: tile.object.x + 18,
        y: tile.object.y + 4
      });
      break;
    case 5:
      goToStoredPosition(gameData);
      break;
    case 6:
      goToOnTile(gameData, {
        x: tile.object.x - 10,
        y: tile.object.y + 4
      });
      break;
    case 7:
    case 8:
      startGuyAnimation(gameData, spriteTypes.GUY_KNOTTING_NORTH);
      changeWaterAndFood(gameData, -2, -2);
      AddTime(15);
      break;
    case 9:
      construct(tile, 2);
      goToStoredPosition(gameData);
      break;
    case 10:
      goToOnTile(gameData, {
        x: tile.object.x + 18,
        y: tile.object.y + 4
      });
      break;
    case 11:
      goToOnTile(gameData, {
        x: tile.object.x + 9,
        y: tile.object.y - 4
      });
      break;
    case 14:
      goToOnTile(gameData, {
        x: tile.object.x + 18,
        y: tile.object.y + 4
      });
      break;
    case 15:
      goToStoredPosition(gameData);
      break;
    case 16:
      finishConstruction(tile);
      Bmp[BUTTSTOP].Phase = -1;
      if (!gameData.constructionHints[constructionTypes.TENT]) {
        openPaper(texts.ZELTHILFE, false, gameData);
        gameData.constructionHints[constructionTypes.TENT] = true;
      }
      Guy.Aktion = AKNICHTS;
      break;
  }
}

const AkBoot = () => {
  const tile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];
  if (!tile.construction) {
    startConstruction(gameData, constructionTypes.BOAT, 20, 33);
  }
  if (!CheckRohstoff()) {
    return;
  }
  tile.construction.actionStep++;

  switch (tile.construction.actionStep) {
    case 1:
      goToOnTile(gameData, {
        x: tile.object.x + 17,
        y: tile.object.y + 5
      });
      tile.object.frame++
      break;
    case 2:
    case 3:
    case 4:
    case 6:
    case 7:
    case 8:
    case 10:
    case 11:
    case 12:
      startGuyAnimation(gameData, spriteTypes.GUY_HITTING);
      sounds.HITTING.instance.play();
      changeWaterAndFood(gameData, -2, -2);
      AddTime(15);
      break;
    case 5:
      goToOnTile(gameData, {
        x: tile.object.x + 9,
        y: tile.object.y
      });
      tile.object.frame++
      break;
    case 9:
      goToOnTile(gameData, {
        x: tile.object.x - 3,
        y: tile.object.y - 5
      });
      tile.object.frame++
      break;
    case 13:
      goToStoredPosition(gameData);
      break;
    case 14:
      finishConstruction(tile);
      if (gameData.terrain[gameData.guy.tile.x - 1][gameData.guy.tile.y].ground === grounds.SEA) {
        const west = tileEdges[tile.type].west;
        tile.object.x = west.x;
        tile.object.y = west.y;
      } else if (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y - 1].ground === grounds.SEA) {
        tile.object.frame = 1;
        const north = tileEdges[tile.type].north;
        tile.object.x = north.x;
        tile.object.y = north.y;
      } else if (gameData.terrain[gameData.guy.tile.x + 1][gameData.guy.tile.y].ground === grounds.SEA) {
        const east = tileEdges[tile.type].east;
        tile.object.x = east.x;
        tile.object.y = east.y;
      } else if (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y + 1].ground === grounds.SEA) {
        tile.object.frame = 1;
        const south = tileEdges[tile.type].south;
        tile.object.x = south.x;
        tile.object.y = south.y;
      }
      Bmp[BUTTSTOP].Phase = -1;
      if (!gameData.constructionHints[constructionTypes.BOAT]) {
        openPaper(texts.BOOTHILFE, false, gameData);
        gameData.constructionHints[constructionTypes.BOAT] = true;
      }
      Guy.Aktion = AKNICHTS;
      break;
  }
}

const AkRohr = () => {
  const tile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];
  if (!tile.construction) {
    const center = tileEdges[tile.type].center;
    startConstruction(gameData, constructionTypes.PIPE, center.x, center.y);
  }
  if (!CheckRohstoff()) {
    return;
  }
  tile.construction.actionStep++;

  switch (tile.construction.actionStep) {
    case 1:
      goToOnTile(gameData, {
        x: tile.object.x + 21,
        y: tile.object.y + 4
      });
      construct(tile, 1);
      break;
    case 2:
    case 3:
    case 4:
    case 9:
    case 10:
    case 11:
      startGuyAnimation(gameData, spriteTypes.GUY_HITTING);
      sounds.HITTING.instance.play();
      changeWaterAndFood(gameData, -1, -1);
      AddTime(5);
      break;
    case 5:
    case 6:
    case 7:
    case 12:
    case 13:
    case 14:
      startGuyAnimation(gameData, spriteTypes.GUY_CHOPPING);
      sounds.CHOPPING.instance.play();
      changeWaterAndFood(gameData, -1, -1);
      AddTime(5);
      break;
    case 8:
      goToOnTile(gameData, {
        x: tile.object.x + 8,
        y: tile.object.y - 4
      });
      construct(tile, 2);
      break;
    case 15:
      goToStoredPosition(gameData);
      break;
    case 16:
      finishConstruction(tile);
      updatePipes(gameData.terrain);
      Bmp[BUTTSTOP].Phase = -1;
      if (!gameData.constructionHints[constructionTypes.PIPE]) {
        openPaper(texts.ROHRHILFE, false, gameData);
        gameData.constructionHints[constructionTypes.PIPE] = true;
      }
      Guy.Aktion = AKNICHTS;
      break;
  }
}

const AkSOS = () => {
  const tile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];
  if (!tile.construction) {
    const center = tileEdges[tile.type].center;
    startConstruction(gameData, constructionTypes.SOS, center.x, center.y);
  }
  if (!CheckRohstoff()) {
    return;
  }
  tile.construction.actionStep++;

  switch (tile.construction.actionStep) {
    case 1:
      goToOnTile(gameData, {
        x: tile.object.x - 12,
        y: tile.object.y + 4
      });
      break;
    case 4:
      goToOnTile(gameData, {
        x: tile.object.x - 4,
        y: tile.object.y + 8
      });
      construct(tile, 1);
      break;
    case 7:
      goToOnTile(gameData, {
        x: tile.object.x - 4,
        y: tile.object.y
      });
      construct(tile, 2);
      break;
    case 10:
      goToOnTile(gameData, {
        x: tile.object.x + 3,
        y: tile.object.y + 3
      });
      construct(tile, 3);
      break;
    case 13:
      goToOnTile(gameData, {
        x: tile.object.x + 5,
        y: tile.object.y - 4
      });
      construct(tile, 4);
      break;
    case 16:
      goToOnTile(gameData, {
        x: tile.object.x + 12,
        y: tile.object.y - 1
      });
      construct(tile, 5);
      break;
    case 2:
    case 5:
    case 8:
    case 11:
    case 14:
    case 17:
      startGuyAnimation(gameData, spriteTypes.GUY_LAYING_DOWN);
      changeWaterAndFood(gameData, -1, -1);
      AddTime(1);
      break;
    case 3:
    case 6:
    case 9:
    case 12:
    case 15:
    case 18:
      startGuyAnimation(gameData, spriteTypes.GUY_STANDING_UP);
      changeWaterAndFood(gameData, -1, -1);
      AddTime(1);
      break;
    case 19:
      goToStoredPosition(gameData);
      break;
    case 20:
      finishConstruction(tile);
      if ((tile.ground === grounds.GRASS) || (tile.ground === grounds.WETLAND)) {
        tile.object.chance = 1;
      }
      else {
        //Dürfte nur noch der Strand übrig sein
        tile.object.chance = 2;
      }
      gameData.guy.chance += tile.object.chance;
      Bmp[BUTTSTOP].Phase = -1;
      if (!gameData.constructionHints[constructionTypes.SOS]) {
        openPaper(texts.SOSHILFE, false, gameData);
        gameData.constructionHints[constructionTypes.SOS] = true;
      }
      Guy.Aktion = AKNICHTS;
      break;
  }
}

const AkFeuerstelle = () => {
  const tile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];
  if (!tile.construction) {
    const center = tileEdges[tile.type].center;
    startConstruction(gameData, constructionTypes.FIREPLACE, center.x, center.y - 5);
  }
  if (!CheckRohstoff()) {
    return;
  }
  tile.construction.actionStep++;

  switch (tile.construction.actionStep) {
    case 1:
      goToOnTile(gameData, {
        x: tile.object.x - 4,
        y: tile.object.y + 2
      });
      break;
    case 2:
      startGuyAnimation(gameData, spriteTypes.GUY_LAYING_DOWN);
      changeWaterAndFood(gameData, -1, -1);
      AddTime(1);
      break;
    case 3:
      startGuyAnimation(gameData, spriteTypes.GUY_STANDING_UP);
      changeWaterAndFood(gameData, -1, -1);
      AddTime(1);
      construct(tile, 1);
      break;
    case 4:
      goToOnTile(gameData, {
        x: tile.object.x - 6,
        y: tile.object.y + 3
      });
      break;
    case 5:
    case 6:
    case 7:
      startGuyAnimation(gameData, spriteTypes.GUY_KNOTTING_NORTH);
      changeWaterAndFood(gameData, -1, -1);
      AddTime(1);
      if (tile.construction.actionStep !== 5) {
        construct(tile, 2);
      }
      break;
    case 8:
      goToStoredPosition(gameData);
      break;
    case 9:
      finishConstruction(tile);
      Bmp[BUTTSTOP].Phase = -1;
      if (!gameData.constructionHints[constructionTypes.FIREPLACE]) {
        openPaper(texts.FEUERSTELLEHILFE, false, gameData);
        gameData.constructionHints[constructionTypes.FIREPLACE] = true;
      }
      Guy.Aktion = AKNICHTS;
      break;
  }
}

const AkHaus1 = () => {
  const tile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];

  if (!tile.construction) {
    startConstruction(gameData, constructionTypes.LADDER, tile.object.x, tile.object.y);
  }
  if (!CheckRohstoff()) {
    return;
  }
  tile.construction.actionStep++;
  
  switch (tile.construction.actionStep) {
    case 1:
      goToOnTile(gameData, {
        x: tile.object.x - 2,
        y: tile.object.y + 2
      });
      break;
    case 2:
    case 3:
    case 4:
    case 5:
      startGuyAnimation(gameData, spriteTypes.GUY_HAMMERING);
      sounds.HAMMERING.instance.play();
      changeWaterAndFood(gameData, -0.5, -0.5);
      AddTime(1);
      break;
    case 6:
    case 7:
    case 8:
    case 9:
      startGuyAnimation(gameData, spriteTypes.GUY_HAMMERING);
      sounds.HAMMERING.instance.play();
      construct(tile, 1);
      changeWaterAndFood(gameData, -0.5, 0.5);
      AddTime(1);
      break;
    case 10:
    case 11:
    case 12:
    case 13:
      startGuyAnimation(gameData, spriteTypes.GUY_HAMMERING);
      sounds.HAMMERING.instance.play();
      construct(tile, 2);
      changeWaterAndFood(gameData, -0.5, -0.5);
      AddTime(1);
      break;
    case 14:
    case 15:
    case 16:
    case 17:
      startGuyAnimation(gameData, spriteTypes.GUY_HAMMERING);
      sounds.HAMMERING.instance.play();
      construct(tile, 3);
      changeWaterAndFood(gameData, -0.5, -0.5);
      AddTime(1);
      break;
    case 18:
      goToStoredPosition(gameData);
      break;
    case 19:
      finishConstruction(tile);
      Bmp[BUTTSTOP].Phase = -1;
      Guy.Aktion = AKNICHTS;
      break;
  }
}

const AkHaus2 = () => {
  const tile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];
  if (!tile.construction) {
    startConstruction(gameData, constructionTypes.PLATFORM, tile.object.x, tile.object.y);
  }
  if (!CheckRohstoff()) {
    return;
  }
  tile.construction.actionStep++;
  
  switch (tile.construction.actionStep) {
    case 1:
      goToOnTile(gameData, {
        x: tile.object.x,
        y: tile.object.y + 1
      });
      break;
    case 2:
      startGuyAnimation(gameData, spriteTypes.GUY_CLIMBING_UP);
      changeWaterAndFood(gameData, -1, -1);
      AddTime(1);
      break;
    case 3:
    case 4:
    case 5:
    case 6:
      startGuyAnimation(gameData, spriteTypes.GUY_HAMMERING_TOP);
      sounds.HAMMERING.instance.play();
      changeWaterAndFood(gameData, -0.5, -0.5);
      AddTime(1);
      break;
    case 7:
    case 8:
    case 9:
    case 10:
      startGuyAnimation(gameData, spriteTypes.GUY_HAMMERING_TOP);
      sounds.HAMMERING.instance.play();
      construct(tile, 1);
      changeWaterAndFood(gameData, -0.5, -0.5);
      AddTime(1);
      break;
    case 11:
    case 12:
    case 13:
    case 14:
      startGuyAnimation(gameData, spriteTypes.GUY_HAMMERING_TOP);
      sounds.HAMMERING.instance.play();
      construct(tile, 2);
      changeWaterAndFood(gameData, -0.5, -0.5);
      AddTime(1);
      break;
    case 15:
    case 16:
    case 17:
    case 18:
      startGuyAnimation(gameData, spriteTypes.GUY_HAMMERING_TOP);
      sounds.HAMMERING.instance.play();
      construct(tile, 3);
      changeWaterAndFood(gameData, -0.5, -0.5);
      AddTime(1);
      break;
    case 19:
      startGuyAnimation(gameData, spriteTypes.GUY_CLIMBING_DOWN);
      construct(tile, 4);
      changeWaterAndFood(gameData, -1, -1);
      AddTime(1);
      break;
    case 20:
      goToStoredPosition(gameData);
      break;
    case 21:
      finishConstruction(tile);
      Bmp[BUTTSTOP].Phase = -1;
      Guy.Aktion = AKNICHTS;
      break;
  }
}

const AkHaus3 = () => {
  const tile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];
  if (!tile.construction) {
    startConstruction(gameData, constructionTypes.TREE_HOUSE, tile.object.x, tile.object.y);
  }
  if (!CheckRohstoff()) {
    return;
  }
  tile.construction.actionStep++;

  switch (tile.construction.actionStep) {
    case 1:
      goToOnTile(gameData, {
        x: tile.object.x,
        y: tile.object.y + 1
      });
      break;
    case 2:
      startGuyAnimation(gameData, spriteTypes.GUY_CLIMBING_UP);
      changeWaterAndFood(gameData, -1, -1);
      AddTime(1);
      break;
    case 3:
    case 4:
    case 5:
    case 6:
      startGuyAnimation(gameData, spriteTypes.GUY_HAMMERING_TOP);
      sounds.HAMMERING.instance.play();
      changeWaterAndFood(gameData, -0.5, -0.5);
      AddTime(1);
      break;
    case 7:
    case 8:
    case 9:
    case 10:
      startGuyAnimation(gameData, spriteTypes.GUY_HAMMERING_TOP);
      sounds.HAMMERING.instance.play();
      construct(tile, 1);
      changeWaterAndFood(gameData, -0.5, -0.5);
      AddTime(1);
      break;
    case 11:
    case 12:
    case 13:
    case 14:
      startGuyAnimation(gameData, spriteTypes.GUY_HAMMERING_TOP);
      sounds.HAMMERING.instance.play();
      construct(tile, 2);
      changeWaterAndFood(gameData, -0.5, -0.5);
      AddTime(1);
      break;
    case 15:
    case 16:
    case 17:
    case 18:
      startGuyAnimation(gameData, spriteTypes.GUY_HAMMERING_TOP);
      sounds.HAMMERING.instance.play();
      construct(tile, 3);
      changeWaterAndFood(gameData, -0.5, -0.5);
      AddTime(1);
      break;
    case 19:
      startGuyAnimation(gameData, spriteTypes.GUY_CLIMBING_DOWN);
      construct(tile, 4);
      changeWaterAndFood(gameData, -1, -1);
      AddTime(1);
      break;
    case 20:
      goToStoredPosition(gameData);
      break;
    case 21:
      finishConstruction(tile);
      Bmp[BUTTSTOP].Phase = -1;
      if (!gameData.constructionHints[constructionTypes.TREE_HOUSE]) {
        openPaper(texts.HAUS3HILFE, false, gameData);
        gameData.constructionHints[constructionTypes.TREE_HOUSE] = true;
      }
      Guy.Aktion = AKNICHTS;
      break;
  }
}

const AkSchlafen = () => {
  const tile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];
  const tent = isUsableTent(tile);
  const house = isUsableTreeHouse(tile);
  if (Guy.AkNummer === 0) {
    gameData.guy.storedPosition = { ...gameData.guy.position };  //Die Originalposition merken
  }
  Guy.AkNummer++;
  switch (Guy.AkNummer) {
    case 1:
      if (tent)
        goToOnTile(gameData, {
          x: tile.object.x - 10,
          y: tile.object.y + 5
        });
      else if (house)
        goToOnTile(gameData, {
          x: tile.object.x + 1,
          y: tile.object.y + 1
        });
      break;
    case 2:
      if (house) {
        startGuyAnimation(gameData, spriteTypes.GUY_CLIMBING_UP);
        changeWaterAndFood(gameData, -1, -1);
      }
      break;
    case 3:
      if (tent) {
        startGuyAnimation(gameData, spriteTypes.GUY_LAYING_DOWN_TENT);
      } else if (house) {
        startGuyAnimation(gameData, spriteTypes.GUY_LAYING_DOWN_HOUSE);
      } else {
        startGuyAnimation(gameData, spriteTypes.GUY_LAYING_DOWN);
      }
      break;
    case 4:
    case 5:
      if (tent) {
        startGuyAnimation(gameData, spriteTypes.GUY_SLEEPING_TENT);
      } else if (house) {
        startGuyAnimation(gameData, spriteTypes.GUY_SLEEPING_HOUSE);
      } else startGuyAnimation(gameData, spriteTypes.GUY_SLEEPING);
      sounds.SNORING.instance.play();
      changeHealth(gameData, 5);
      AddTime(30);
      break;
    case 6:
      sounds.SNORING.instance.stop();
      if (house) {
        startGuyAnimation(gameData, spriteTypes.GUY_STANDING_UP_HOUSE);
      } else startGuyAnimation(gameData, spriteTypes.GUY_STANDING_UP);
      break;
    case 7:
      if (house) {
        startGuyAnimation(gameData, spriteTypes.GUY_CLIMBING_DOWN);
        changeWaterAndFood(gameData, -1, -1);
      }
      break;
    case 8:
      goToStoredPosition(gameData);
      Guy.Aktion = AKNICHTS;
      break;
  }
}

const AkAblegen = () => {
  const tile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];
  Guy.AkNummer++;
  switch (Guy.AkNummer) {
    case 1:
      goToOnTile(gameData, {
        x: tile.object.x,
        y: tile.object.y
      });
      break;
    case 2:
      gameData.guy.position.x = tile.position.x + tile.object.x;
      gameData.guy.position.y = tile.position.y + tile.object.y;
      tile.object = null;
      if (gameData.terrain[gameData.guy.tile.x - 1][gameData.guy.tile.y].ground === grounds.SEA) gameData.guy.tile.x--;
      else if (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y - 1].ground === grounds.SEA) gameData.guy.tile.y--;
      else if (gameData.terrain[gameData.guy.tile.x + 1][gameData.guy.tile.y].ground === grounds.SEA) gameData.guy.tile.x++;
      else if (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y + 1].ground === grounds.SEA) gameData.guy.tile.y++;
      goToCenterOfTile(gameData);
      break;
    case 3:
      Guy.Aktion = AKNICHTS;
      gameData.guy.storedPosition.x = gameData.guy.position.x;
      gameData.guy.storedPosition.y = gameData.guy.position.y;
      break;
  }
}

const AkAnlegen = () => {
  Guy.AkNummer++;
  switch (Guy.AkNummer) {
    case 1:
      if (gameData.terrain[gameData.guy.tile.x - 1][gameData.guy.tile.y].ground !== grounds.SEA) {
        goToWestOfTile(gameData);
      } else if (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y - 1].ground !== grounds.SEA) {
        goToNorthOfTile(gameData);
      } else if (gameData.terrain[gameData.guy.tile.x + 1][gameData.guy.tile.y].ground !== grounds.SEA) {
        goToEastOfTile(gameData);
      } else if (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y + 1].ground !== grounds.SEA) {
        goToSouthOfTile(gameData);
      }
      break;
    case 2:
      const neighbor = findNeighbor(gameData, (tile) => tile.ground !== grounds.SEA);

      neighbor.tile.object = {
        sprite: spriteTypes.BOAT,
        x: Math.round(gameData.guy.position.x - neighbor.tile.position.x),
        y: Math.round(gameData.guy.position.y - neighbor.tile.position.y),
        frame: (neighbor.direction === directions.WEST || neighbor.direction === directions.EAST) ? 0 : 1
      };

      gameData.guy.tile.x = neighbor.x;
      gameData.guy.tile.y = neighbor.y;
      goToCenterOfTile(gameData);
      break;
    case 3:
      Guy.Aktion = AKNICHTS;
      gameData.guy.storedPosition.x = gameData.guy.position.x;
      gameData.guy.storedPosition.y = gameData.guy.position.y;
      break;
  }
}

const Fade = (intensity, smooth) => {
  canvases.PRIMARY.canvas.style.transition = `${smooth}s filter ease-in-out`;
  canvases.PRIMARY.canvas.style.filter = `brightness(${intensity}%) saturate(${intensity}%)`;
}

const CheckBenutze = (item) => {
  if ((item === items.STONE && TwoClicks === items.BRANCH) ||
    (item === items.BRANCH && TwoClicks === items.STONE)) {
    if (!gameData.guy.inventory[items.AXE]) {
      changeItem(gameData, items.STONE, -1);
      changeItem(gameData, items.BRANCH, -1);
      changeItem(gameData, items.AXE, 1);
      Bmp[BUTTFAELLEN].Phase = 0;
      Bmp[BUTTBOOT].Phase = 0;
      Bmp[BUTTROHR].Phase = 0;
      openPaper(texts.BAUEAXT, false, gameData);
      sounds.INVENTION.instance.play();
    } else if (!gameData.guy.inventory[items.HARROW]) {
      changeItem(gameData, items.STONE, -1);
      changeItem(gameData, items.BRANCH, -1);
      changeItem(gameData, items.HARROW, 1);
      Bmp[BUTTFELD].Phase = 0;
      openPaper(texts.BAUEEGGE, false, gameData);
      sounds.INVENTION.instance.play();
    } else {
      openPaper(texts.STEINPLUSASTNICHTS, false, gameData);
    }
  } else if ((item === items.LIANA && TwoClicks === items.BRANCH) ||
    (item === items.BRANCH && TwoClicks === items.LIANA)) {
    if (!gameData.guy.inventory[items.FISHING_ROD]) {
      changeItem(gameData, items.LIANA, -1);
      changeItem(gameData, items.BRANCH, -1);
      changeItem(gameData, items.FISHING_ROD, 1);
      Bmp[BUTTANGELN].Phase = 0;
      openPaper(texts.BAUEANGEL, false, gameData);
      sounds.INVENTION.instance.play();
    } else {
      openPaper(texts.ASTPLUSLIANENICHTS, false, gameData);
    }
  } else if (((item === items.LIANA) && (TwoClicks === items.STONE)) ||
    ((item === items.STONE) && (TwoClicks === items.LIANA))) {
    if (!gameData.guy.inventory[items.SLING]) {
      changeItem(gameData, items.LIANA, -1);
      changeItem(gameData, items.STONE, -1);
      changeItem(gameData, items.SLING, 1);
      Bmp[BUTTSCHLEUDER].Phase = 0;
      openPaper(texts.BAUESCHLEUDER, false, gameData);
      sounds.INVENTION.instance.play();
    } else {
      openPaper(texts.STEINPLUSLIANENICHTS, false, gameData);
    }
  } else {
    openPaper(texts.NICHTBASTELN, false, gameData);
  }
  TwoClicks = -1;
}

const Animationen = () => {
  animateTerrain(gameData.terrain, frame, framesPerSecond);

  let i, j; //Zwischenspeicher

  for (j = BUTTGITTER; j <= BUTTDESTROY; j++) {
    if (!Bmp[j].Animation) continue;
    i = Math.floor(framesPerSecond / Bmp[j].Geschwindigkeit);
    if (i < 1) i = 1;
    if (frame % i === 0) {
      Bmp[j].Phase++;
      if (Bmp[j].Phase >= Bmp[j].Anzahl) Bmp[j].Phase = 0;
    }
  }

  if (!gameData.paper) {
    animateGuy(gameData, frame, framesPerSecond, AddTime.bind(this));
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
    discoverTerrain(gameData);
    playTerrainSounds(gameData.terrain, { tile: gameData.guy.tile });
    updateCamera(gameData.camera, gameData.guy.position, true);

    if (!gameData.guy.active) Event(Guy.Aktion); //Aktionen starten

    drawTerrain(gameData, gameData.camera, false);

  } else if (Spielzustand === GAME_PLAY) {
    if (gameData.calendar.minutes > (12 * 60) && (Guy.Aktion !== AKTAGENDE))  //Hier ist der Tag zuende
    {
      if (Guy.Aktion === AKAUSSCHAU) gameData.guy.chance -= 1 + gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].height;
      gameData.guy.active = false;
      Guy.AkNummer = 0;
      Guy.Aktion = AKTAGENDE;
    }

    CheckSpzButton();          //Die Spezialknöpfe umschalten
    if (MouseAktiv) CheckMouse();    //Den MouseZustand abchecken
    CheckKey();
    restrictCamera(gameData.camera, gameData.terrain);            //Das Scrollen an die Grenzen der Landschaft anpassen
    Animationen();            //Die Animationsphasen weiterschalten
    discoverTerrain(gameData);
    playTerrainSounds(gameData.terrain, { tile: gameData.guy.tile });
    if (!gameData.guy.active) Event(Guy.Aktion);  //Die Aktionen starten
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
  initAudio();
  await loadSounds(audio);
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
