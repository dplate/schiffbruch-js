import texts from './texts-de.js';
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
import getTreasureMapCanvasContext from './treasure/getTreasureMapCanvasContext.js';
import drawTreasureMap from './treasure/drawTreasureMap.js';
import addPirateWreck from './terrain/addPirateWreck.js';
import addShipWreck from './terrain/addShipWreck.js';
import isDrinkable from './terrain/objects/isDrinkable.js';
import isEatable from './terrain/objects/isEatable.js';
import isNormalTree from './terrain/objects/isNormalTree.js';
import isFishable from './terrain/objects/isFishable.js';
import isOnGround from './terrain/objects/isOnGround.js';
import isRiver from './terrain/objects/isRiver.js';
import updateCamera from './camera/updateCamera.js';
import restrictCamera from './camera/restrictCamera.js';
import findRoute from './guy/findRoute.js';
import goToOnTile from './guy/goToOnTile.js';
import goTo from './guy/goTo.js';
import goToCenterOfTile from './guy/goToCenterOfTile.js';
import goToWestOfTile from './guy/goToWestOfTile.js';
import goToStoredPosition from './guy/goToStoredPosition.js';
import goToObject from './guy/goToObject.js';
import goToEastOfTile from './guy/goToEastOfTile.js';
import goToNorthOfTile from './guy/goToNorthOfTile.js';
import goToSouthOfTile from './guy/goToSouthOfTile.js';
import directions from './terrain/directions.js';
import goToOffset from './guy/goToOffset.js';
import isOnSea from './guy/isOnSea.js';

const KXPIXEL = 54 //Breite der Kacheln
const KYPIXEL = 44; //Hoehe der Kacheln
const S1XPIXEL = 20; //Breite der Schrift1
const S1YPIXEL = 20; //Höhe der Schrift1
const S1ABSTAND = 13; //Abstand zum nächsten Buchstaben
const S2XPIXEL = 10; //Breite der Schrift2
const S2YPIXEL = 15; //Höhe der Schrift2
const S2ABSTAND = 10; //Abstand zum nächsten Buchstaben
const MAXXKACH = 61    //Anzahl der Kacheln
const MAXYKACH = 61;
const MAXX = 800; //Bildschirmauflösung
const MAXY = 600;

const SCHLEUSE1 = 19;
const SCHLEUSE2 = SCHLEUSE1 + 1;
const SCHLEUSE3 = SCHLEUSE1 + 2;
const SCHLEUSE4 = SCHLEUSE1 + 3;
const SCHLEUSE5 = SCHLEUSE1 + 4;
const SCHLEUSE6 = SCHLEUSE1 + 5;
const BAUM1DOWN = 30;
const BAUM2DOWN = BAUM1DOWN + 1;
const BAUM3DOWN = BAUM1DOWN + 2;
const BAUM4DOWN = BAUM1DOWN + 3;
const FEUER = BAUM1DOWN + 5;
const FELD = 38;
const ZELT = FELD + 1;
const BOOT = FELD + 2;
const ROHR = FELD + 3;
const SOS = FELD + 4;
const HAUS1 = FELD + 5;
const HAUS2 = FELD + 6;
const HAUS3 = FELD + 7;
const FEUERSTELLE = FELD + 8;
const CUPFEIL = 47;
const CURICHTUNG = CUPFEIL + 1;
const CUUHR = CUPFEIL + 2;
const GUYLINKS = 50;
// noinspection JSUnusedLocalSymbols
const GUYOBEN = GUYLINKS + 1;
// noinspection JSUnusedLocalSymbols
const GUYRECHTS = GUYLINKS + 2;
const GUYUNTEN = GUYLINKS + 3;
const GUYSUCHEN = GUYLINKS + 4;
const GUYESSEN = GUYLINKS + 5;
const GUYTRINKEN = GUYLINKS + 6;
const GUYFAELLEN = GUYLINKS + 7;
const GUYWARTEN = GUYLINKS + 8;
const GUYFELD = GUYLINKS + 9;
const GUYBINDENOBEN = GUYLINKS + 10;
const GUYBINDENUNTEN = GUYLINKS + 11;
const GUYSCHLAFEN = GUYLINKS + 12;
const GUYSCHLAFZELT = GUYLINKS + 13;
const GUYGEHINZELT = GUYLINKS + 14;
const GUYHINLEGEN = GUYLINKS + 15;
const GUYAUFSTEHEN = GUYLINKS + 16;
const GUYANGELN1LINKS = GUYLINKS + 17;
const GUYANGELN1OBEN = GUYLINKS + 18;
const GUYANGELN1RECHTS = GUYLINKS + 19;
const GUYANGELN1UNTEN = GUYLINKS + 20;
const GUYANGELN2LINKS = GUYLINKS + 21;
const GUYANGELN2OBEN = GUYLINKS + 22;
const GUYANGELN2RECHTS = GUYLINKS + 23;
const GUYANGELN2UNTEN = GUYLINKS + 24;
const GUYANGELN3LINKS = GUYLINKS + 25;
const GUYANGELN3OBEN = GUYLINKS + 26;
const GUYANGELN3RECHTS = GUYLINKS + 27;
const GUYANGELN3UNTEN = GUYLINKS + 28;
const GUYSCHLAGEN = GUYLINKS + 29;
const GUYBOOTLINKS = GUYLINKS + 30;
const GUYBOOTOBEN = GUYLINKS + 31;
const GUYBOOTRECHTS = GUYLINKS + 32;
const GUYBOOTUNTEN = GUYLINKS + 33;
const GUYBOOTANGELN1 = GUYLINKS + 34;
const GUYBOOTANGELN2 = GUYLINKS + 35;
const GUYBOOTANGELN3 = GUYLINKS + 36;
const GUYTAUCHEN1 = GUYLINKS + 37;
const GUYTAUCHEN2 = GUYLINKS + 38;
const GUYTAUCHEN3 = GUYLINKS + 39;
const GUYHAMMER = GUYLINKS + 40;
const GUYKLETTERN1 = GUYLINKS + 41;
const GUYKLETTERN2 = GUYLINKS + 42;
const GUYHAMMER2 = GUYLINKS + 43;
const GUYGEHINHAUS = GUYLINKS + 44;
const GUYSCHLAFHAUS = GUYLINKS + 45;
const GUYGEHAUSHAUS = GUYLINKS + 46;
const GUYANZUENDEN = GUYLINKS + 47;
const GUYAUSSCHAU = GUYLINKS + 48;
const GUYSCHAUFELN = GUYLINKS + 49;
const GUYSCHIFF = GUYLINKS + 50;
const GUYSCHIFFDOWN = GUYLINKS + 51;
const GUYSCHWIMMEN = GUYLINKS + 52;
const GUYTOD = GUYLINKS + 53;
const GUYBOOTTOD = GUYLINKS + 54;
const GUYBOOTWARTEN = GUYLINKS + 55;
const GUYSCHLEUDER = GUYLINKS + 56;
const BUTTGITTER = 107;
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
const ROHAST = 143;
const ROHSTAMM = ROHAST + 1;
const ROHSTEIN = ROHAST + 2;
const ROHAXT = ROHAST + 3;
const ROHBLATT = ROHAST + 4;
const ROHEGGE = ROHAST + 5;
const ROHLIANE = ROHAST + 6;
const ROHANGEL = ROHAST + 7;
const ROHHAMMER = ROHAST + 8;
const ROHFERNROHR = ROHAST + 9;
const ROHSTREICHHOLZ = ROHAST + 10;
const ROHSCHAUFEL = ROHAST + 11;
const ROHKARTE = ROHAST + 12;
const ROHSCHLEUDER = ROHAST + 13;
const ROEMISCH1 = 157;
const ROEMISCH2 = ROEMISCH1 + 1;
const INVPAPIER = 159;
const RING = INVPAPIER + 1;
const JA = INVPAPIER + 2;
const NEIN = INVPAPIER + 3;
const SONNE = INVPAPIER + 4;
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

//Sounds
const WAVSTURM = 1;
const WAVSCHWIMMEN = WAVSTURM + 1;
const WAVPLATSCH = WAVSTURM + 2;
const WAVFAELLEN = WAVSTURM + 3;
const WAVSCHLAGEN = WAVSTURM + 4;
const WAVSCHLEUDER = WAVSTURM + 5;
const WAVSCHAUFELN = WAVSTURM + 6;
const WAVHAMMER = WAVSTURM + 7;
const WAVCRASH = WAVSTURM + 8;
const WAVSCHNARCHEN = WAVSTURM + 9;
const WAVTRINKEN = WAVSTURM + 10;
const WAVKNISTERN = WAVSTURM + 11;
const WAVANGEL = WAVSTURM + 12;
const WAVWALD = 14;
const WAVFEUER = WAVWALD + 1;
const WAVBRANDUNG = WAVWALD + 2;
const WAVBAUMFAELLT = WAVWALD + 3;
const WAVFLUSS = WAVWALD + 4;
const WAVKLICK = 19;
const WAVKLICK2 = WAVKLICK + 1;
const WAVLOGO = WAVKLICK + 2;
const WAVABSPANN = WAVKLICK + 3;
const WAVWOLF = WAVKLICK + 4;
const WAVERFINDUNG = WAVKLICK + 5;
const WAVANZ = WAVERFINDUNG + 1    //Anzahl; der Sounds

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

//Textfelder
const TXTTEXTFELD = 0;
const TXTFPS = 1;
const TXTTAGESZEIT = 2;
const TXTCHANCE = 3;
const TXTPAPIER = 4; //Muß!!! als letztes stehen
const TEXTANZ = 5; //Wieviele Textbreiche

//Resourcen
const WASSER = 0;
const NAHRUNG = 1;
const GESUNDHEIT = 2;

//Spielzustände
const GAME_WAIT = 'wait';
const GAME_INTRO = 'intro';
const GAME_PLAY = 'play';
const GAME_CREDITS = 'credits';
const GAME_OUTRO = 'outro';
const GAME_LOGO = 'logo';

//ddraw
let primaryCanvasContext = null;
let minimapCanvasContext = null;
let textCanvasContext = null;

let panelImage = null;
let guyImage = null;
let waterImage = null;
let font1Image = null;
let font2Image = null;
let textfieldImage = null;
let paperImage = null;
let treesImage = null;
let buildingsImage = null;
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
const lpdsbWav = Array(WAVANZ); //Wavedateispeicher

let Spielzustand = GAME_LOGO;       // in welchem Zustand ist das Spiel?
let MouseAktiv = false;    // Mouse angestellt?
let CursorTyp;        //Welcher Cursortyp?
let Button0down;    //linke Maustaste gedrückt gehalten
let Button1down;    //rechte Maustaste gedrückt gehalten
let timestampInSeconds;            //Start der Sekunde
let frame, framesPerSecond;    //Anzahl der Bilder in der Sekunde
let rcRectdes = { left: null, top: null, right: null, bottom: null }; //Ständig benötigte Variable zum Blitten
let rcRectsrc = { left: null, top: null, right: null, bottom: null }; //Ständig benötigte Variable zum Blitten
let Tag, Stunden, Minuten;        //Wieviel Uhr (0-12h)
let StdString = '';    //Standard string
let RohString = '';    //Darin wird gespeichert, wieviel Rohstoffe noch benötigt werden
let PapierText;            //Wieviel Papier? (in Pixel) -1 = Kein Text
let HauptMenue;            //Welches Menü?
let TwoClicks;                //Für Aktionen mit zwei Mausklicks
let Chance;                    //Wie groß ist die Chance am Tag gerettet zu werden
let Nacht;                    //Wird die Tageszusammenfassung angezeigt?
let Spielbeenden = false;    //Wenn true wird das Spiel sofort beendet
let Frage;                    //-1=KeineFrage;0=Frage wird gestellt;1=Ja;2=Nein
const pi = 3.1415926535;        //pi, was sonst
let AbspannNr = 0;            //Zähler für Abspann
let AbspannZustand = 0;            //Wo im Abspann

//Bereiche
const rcGesamt = { left: 0, top: 0, right: MAXX, bottom: MAXY };
const rcPanel = { left: MAXX - 205, top: 0, right: MAXX, bottom: MAXY };
const rcKarte = { left: MAXX - 158, top: 23, right: MAXX - 158 + MAXXKACH * 2, bottom: 23 + MAXYKACH * 2 };
const rcTextFeld1 = { left: 0, top: MAXY - 20, right: MAXX - 195, bottom: MAXY };

let TextBereich = Array.from(Array(TEXTANZ), () => ({
  Aktiv: null, //Steht Text in diesem Bereich?
  rcText: { left: null, top: null, right: null, bottom: null } //Die Position des Ausgabe
}));

const MousePosition = { x: null, y: null }; // Aktuelle Mauskoordinaten

let Guy = {
  Aktion: null,              //Welche Aktion (Suchen, fischen ...) (Übergeordnet über Zustand)
  Zustand: null,             //Was macht er gerade? (Animation)(linkslaufen,rechtslaufen...,angeln..)
  AkNummer: null,            //Bei welcher Aktion (für die Aktionsprozeduren)
  Resource: Array(3),     //Wieviel Wasservorrat usw
  Inventar: Array(BILDANZ) //Welche Rohstoffe usw. besitzt man
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
  Sound: null,    //Welcher Sound gehört dazu
  //zum bauen
  Rohstoff: Array(BILDANZ), //Anzahl des i.Rohstoffs, den man zum Bau benötigt
  AkAnzahl: null,    //Anzahl der Aktionsfaellen, die zum Bau benötigt werden
  First: null        //Ist es das erstemal gebaut, dann Hilfetext
}));

const Wav = Array.from(Array(WAVANZ), () => ({
  Dateiname: null, //Dateiname der Wavdatei
  Loop: null,      //Nur einmal abspielen und ständig
  Volume: null,    //Die Standardlautstärke in Prozent
}));

const AbspannListe = Array.from(Array(10), () => Array.from(Array(10), () => ({
  Aktiv: null,       //Bewegt sich gerade
  Bild: null,        //welches Bild
})));    //Namenabfolge im Abspann

const gameData = {
  terrain: Array.from(Array(MAXXKACH), () => Array.from(Array(MAXYKACH), () => ({}))),
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
    position: {
      x: 0,
      y: 0
    },
    prevPosition: {
      x: 0,
      y: 0
    },
    tile: {
      x: 0,
      y: 0
    }
  }
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
  guyImage = await loadImage('guy.png');
  waterImage = await loadImage('water.png');
  font1Image = await loadImage('font1.png');
  font2Image = await loadImage('font2.png');
  paperImage = await loadImage('paper.png');
  treesImage = await loadImage('trees.png');
  cursorsImage = await loadImage('cursors.png');
  buttonsImage = await loadImage('buttons.png');
  textfieldImage = await loadImage('textfield.png');
  inventarImage = await loadImage('inventar.png');
  buildingsImage = await loadImage('buildings.png');
  creditsImage = await loadImage('credits.png');
  logoImage = await loadImage('logo.png');

  const primaryCanvas = window.document.createElement('canvas');
  primaryCanvas.id = 'primaryCanvas';
  primaryCanvas.width = MAXX;
  primaryCanvas.height = MAXY;
  window.document.body.appendChild(primaryCanvas);
  //window.document.body.requestFullscreen();
  primaryCanvasContext = primaryCanvas.getContext('2d');
  primaryCanvasContext.imageSmoothingEnabled = false;

  //In diese Surface soll die MiniMap gespeichert werden
  const minimapCanvas = window.document.createElement('canvas');
  minimapCanvas.width = 2 * MAXXKACH;
  minimapCanvas.height = 2 * MAXYKACH;
  minimapCanvasContext = minimapCanvas.getContext('2d');

  //In diese Surface soll die Schrift gespeichert werden
  const textCanvas = window.document.createElement('canvas');
  textCanvas.width = MAXX;
  textCanvas.height = MAXY;
  textCanvasContext = textCanvas.getContext('2d');
}


const initInput = (window) => {
  window.document.onmousemove = (event) => {
    const rect = primaryCanvasContext.canvas.getBoundingClientRect();
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

const LoadSound = async (Sound) => {
  lpdsbWav[Sound] = await audio.load(Wav[Sound].Dateiname);
}

const PlaySound = (Sound, Volume) => {
  let z;

  if (Sound === 0) return;

  lpdsbWav[Sound].setGain((Wav[Sound].Volume / 100) * (Volume / 100));
  lpdsbWav[Sound].play(Wav[Sound].Loop);
}

const StopSound = (Sound) => {
  if (Sound === 0) return;
  lpdsbWav[Sound].stop();
}

const SaveGame = () => {
  let i;

  const animations = [];
  for (i = 0; i < BILDANZ; i++) {
    animations.push({
      Animation: Bmp[i].Animation,
      Phase: Bmp[i].Phase,
      First: Bmp[i].First
    });
  }
  
  window.localStorage.setItem('gameDataV6', JSON.stringify({
    ...gameData,
    Guy,
    Chance,
    HauptMenue,
    Minuten,
    Spielzustand,
    Stunden,
    Tag,
    TextBereich,
    animations
  }));
}

const LoadGame = () => {
  let i;

  const rawGameData = window.localStorage.getItem('gameDataV6');
  if (!rawGameData) {
    return false;  
  }

  let parsedGameData = null;
  try {
    parsedGameData = JSON.parse(rawGameData);
  } catch(error) {
    console.warn('Cannot parse saved gamed, ignoring...', error)
    return false;
  };
  for(const key in parsedGameData) {
    gameData[key] = parsedGameData[key];
  }

  Guy = gameData.Guy;
  Chance = gameData.Chance;
  HauptMenue = gameData.HauptMenue;
  Minuten = gameData.Minuten;
  Spielzustand = gameData.Spielzustand;
  Stunden = gameData.Stunden;
  Tag = gameData.Tag;
  TextBereich = gameData.TextBereich;

  for (i = 0; i < BILDANZ; i++) {
    Bmp[i].Animation = gameData.animations[i].Animation;
    Bmp[i].Phase = gameData.animations[i].Phase;
    Bmp[i].First = gameData.animations[i].First;
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
    Bmp[i].Sound = 0;
    for (k = 0; k < BILDANZ; k++)
      Bmp[i].Rohstoff[k] = 0;
    Bmp[i].AkAnzahl = 0;
    Bmp[i].First = true;
  }

  //Guy
  for (i = GUYLINKS; i <= GUYUNTEN; i++) {
    Bmp[i].Animation = false;
    Bmp[i].Anzahl = 4;
    Bmp[i].Geschwindigkeit = 20;
    Bmp[i].Phase = 0;
    Bmp[i].Surface = guyImage;
    Bmp[i].rcSrc.left = 7 * (i - GUYLINKS);
    Bmp[i].rcSrc.right = 7 + 7 * (i - GUYLINKS);
    Bmp[i].rcSrc.top = 0;
    Bmp[i].rcSrc.bottom = 18;
    Bmp[i].Breite = 7;
    Bmp[i].Hoehe = 18;
  }

  for (i = GUYSUCHEN; i <= GUYSCHLEUDER; i++) {
    Bmp[i].Animation = false;
    Bmp[i].Phase = 0;
    Bmp[i].Surface = guyImage;
  }
  Bmp[GUYSUCHEN].Anzahl = 4;
  Bmp[GUYSUCHEN].Geschwindigkeit = 4;
  Bmp[GUYSUCHEN].rcSrc.left = 28;
  Bmp[GUYSUCHEN].rcSrc.right = 39;
  Bmp[GUYSUCHEN].rcSrc.top = 0;
  Bmp[GUYSUCHEN].rcSrc.bottom = 14;
  Bmp[GUYSUCHEN].Breite = 11;
  Bmp[GUYSUCHEN].Hoehe = 14;
  Bmp[GUYSUCHEN].Sound = WAVKNISTERN;

  Bmp[GUYESSEN].Anzahl = 4;
  Bmp[GUYESSEN].Geschwindigkeit = 4;
  Bmp[GUYESSEN].rcSrc.left = 39;
  Bmp[GUYESSEN].rcSrc.right = 39 + 7;
  Bmp[GUYESSEN].rcSrc.top = 0;
  Bmp[GUYESSEN].rcSrc.bottom = 17;
  Bmp[GUYESSEN].Breite = 7;
  Bmp[GUYESSEN].Hoehe = 17;
  Bmp[GUYESSEN].Sound = WAVKNISTERN;

  Bmp[GUYTRINKEN].Anzahl = 5;
  Bmp[GUYTRINKEN].Geschwindigkeit = 4;
  Bmp[GUYTRINKEN].rcSrc.left = 46;
  Bmp[GUYTRINKEN].rcSrc.right = 46 + 9;
  Bmp[GUYTRINKEN].rcSrc.top = 0;
  Bmp[GUYTRINKEN].rcSrc.bottom = 13;
  Bmp[GUYTRINKEN].Breite = 9;
  Bmp[GUYTRINKEN].Hoehe = 13;
  Bmp[GUYTRINKEN].Sound = WAVTRINKEN;

  Bmp[GUYFAELLEN].Anzahl = 4;
  Bmp[GUYFAELLEN].Geschwindigkeit = 6;
  Bmp[GUYFAELLEN].rcSrc.left = 55;
  Bmp[GUYFAELLEN].rcSrc.right = 55 + 15;
  Bmp[GUYFAELLEN].rcSrc.top = 0;
  Bmp[GUYFAELLEN].rcSrc.bottom = 19;
  Bmp[GUYFAELLEN].Breite = 15;
  Bmp[GUYFAELLEN].Hoehe = 19;
  Bmp[GUYFAELLEN].Sound = WAVFAELLEN;

  Bmp[GUYWARTEN].Anzahl = 4;
  Bmp[GUYWARTEN].Geschwindigkeit = 2;
  Bmp[GUYWARTEN].rcSrc.left = 70;
  Bmp[GUYWARTEN].rcSrc.right = 70 + 7;
  Bmp[GUYWARTEN].rcSrc.top = 0;
  Bmp[GUYWARTEN].rcSrc.bottom = 18;
  Bmp[GUYWARTEN].Breite = 7;
  Bmp[GUYWARTEN].Hoehe = 18;

  Bmp[GUYFELD].Anzahl = 4;
  Bmp[GUYFELD].Geschwindigkeit = 4;
  Bmp[GUYFELD].rcSrc.left = 78;
  Bmp[GUYFELD].rcSrc.right = 78 + 19;
  Bmp[GUYFELD].rcSrc.top = 0;
  Bmp[GUYFELD].rcSrc.bottom = 18;
  Bmp[GUYFELD].Breite = 19;
  Bmp[GUYFELD].Hoehe = 18;

  Bmp[GUYBINDENOBEN].Anzahl = 2;
  Bmp[GUYBINDENOBEN].Geschwindigkeit = 1;
  Bmp[GUYBINDENOBEN].rcSrc.left = 97;
  Bmp[GUYBINDENOBEN].rcSrc.right = 97 + 8;
  Bmp[GUYBINDENOBEN].rcSrc.top = 0;
  Bmp[GUYBINDENOBEN].rcSrc.bottom = 18;
  Bmp[GUYBINDENOBEN].Breite = 8;
  Bmp[GUYBINDENOBEN].Hoehe = 18;

  Bmp[GUYBINDENUNTEN].Anzahl = 2;
  Bmp[GUYBINDENUNTEN].Geschwindigkeit = 1;
  Bmp[GUYBINDENUNTEN].rcSrc.left = 98;
  Bmp[GUYBINDENUNTEN].rcSrc.right = 98 + 7;
  Bmp[GUYBINDENUNTEN].rcSrc.top = 36;
  Bmp[GUYBINDENUNTEN].rcSrc.bottom = 36 + 18;
  Bmp[GUYBINDENUNTEN].Breite = 7;
  Bmp[GUYBINDENUNTEN].Hoehe = 18;

  Bmp[GUYSCHLAFZELT].Anzahl = 2;
  Bmp[GUYSCHLAFZELT].Geschwindigkeit = 1;
  Bmp[GUYSCHLAFZELT].rcSrc.left = 105;
  Bmp[GUYSCHLAFZELT].rcSrc.right = 105 + 20;
  Bmp[GUYSCHLAFZELT].rcSrc.top = 54;
  Bmp[GUYSCHLAFZELT].rcSrc.bottom = 54 + 10;
  Bmp[GUYSCHLAFZELT].Breite = 20;
  Bmp[GUYSCHLAFZELT].Hoehe = 10;
  Bmp[GUYSCHLAFZELT].Sound = WAVSCHNARCHEN;

  Bmp[GUYSCHLAFEN].Anzahl = 2;
  Bmp[GUYSCHLAFEN].Geschwindigkeit = 1;
  Bmp[GUYSCHLAFEN].rcSrc.left = 125;
  Bmp[GUYSCHLAFEN].rcSrc.right = 125 + 17;
  Bmp[GUYSCHLAFEN].rcSrc.top = 36;
  Bmp[GUYSCHLAFEN].rcSrc.bottom = 36 + 18;
  Bmp[GUYSCHLAFEN].Breite = 17;
  Bmp[GUYSCHLAFEN].Hoehe = 18;
  Bmp[GUYSCHLAFEN].Sound = WAVSCHNARCHEN;

  Bmp[GUYGEHINZELT].Anzahl = 3;
  Bmp[GUYGEHINZELT].Geschwindigkeit = 4;
  Bmp[GUYGEHINZELT].rcSrc.left = 105;
  Bmp[GUYGEHINZELT].rcSrc.right = 105 + 7;
  Bmp[GUYGEHINZELT].rcSrc.top = 0;
  Bmp[GUYGEHINZELT].rcSrc.bottom = 18;
  Bmp[GUYGEHINZELT].Breite = 7;
  Bmp[GUYGEHINZELT].Hoehe = 18;

  Bmp[GUYHINLEGEN].Anzahl = 2;
  Bmp[GUYHINLEGEN].Geschwindigkeit = 2;
  Bmp[GUYHINLEGEN].rcSrc.left = 125;
  Bmp[GUYHINLEGEN].rcSrc.right = 125 + 17;
  Bmp[GUYHINLEGEN].rcSrc.top = 0;
  Bmp[GUYHINLEGEN].rcSrc.bottom = 18;
  Bmp[GUYHINLEGEN].Breite = 17;
  Bmp[GUYHINLEGEN].Hoehe = 18;

  Bmp[GUYAUFSTEHEN].Anzahl = 2;
  Bmp[GUYAUFSTEHEN].Geschwindigkeit = 2;
  Bmp[GUYAUFSTEHEN].rcSrc.left = 142;
  Bmp[GUYAUFSTEHEN].rcSrc.right = 142 + 9;
  Bmp[GUYAUFSTEHEN].rcSrc.top = 0;
  Bmp[GUYAUFSTEHEN].rcSrc.bottom = 18;
  Bmp[GUYAUFSTEHEN].Breite = 9;
  Bmp[GUYAUFSTEHEN].Hoehe = 18;

  Bmp[GUYANGELN1LINKS].Anzahl = 6;
  Bmp[GUYANGELN1LINKS].Geschwindigkeit = 6;
  Bmp[GUYANGELN1LINKS].rcSrc.left = 151;
  Bmp[GUYANGELN1LINKS].rcSrc.right = 151 + 16;
  Bmp[GUYANGELN1LINKS].rcSrc.top = 0;
  Bmp[GUYANGELN1LINKS].rcSrc.bottom = 17;
  Bmp[GUYANGELN1LINKS].Breite = 16;
  Bmp[GUYANGELN1LINKS].Hoehe = 17;

  Bmp[GUYANGELN1OBEN].Anzahl = 6;
  Bmp[GUYANGELN1OBEN].Geschwindigkeit = 6;
  Bmp[GUYANGELN1OBEN].rcSrc.left = 167;
  Bmp[GUYANGELN1OBEN].rcSrc.right = 167 + 16;
  Bmp[GUYANGELN1OBEN].rcSrc.top = 0;
  Bmp[GUYANGELN1OBEN].rcSrc.bottom = 17;
  Bmp[GUYANGELN1OBEN].Breite = 16;
  Bmp[GUYANGELN1OBEN].Hoehe = 17;

  Bmp[GUYANGELN1RECHTS].Anzahl = 6;
  Bmp[GUYANGELN1RECHTS].Geschwindigkeit = 6;
  Bmp[GUYANGELN1RECHTS].rcSrc.left = 183;
  Bmp[GUYANGELN1RECHTS].rcSrc.right = 183 + 14;
  Bmp[GUYANGELN1RECHTS].rcSrc.top = 0;
  Bmp[GUYANGELN1RECHTS].rcSrc.bottom = 17;
  Bmp[GUYANGELN1RECHTS].Breite = 14;
  Bmp[GUYANGELN1RECHTS].Hoehe = 17;

  Bmp[GUYANGELN1UNTEN].Anzahl = 6;
  Bmp[GUYANGELN1UNTEN].Geschwindigkeit = 6;
  Bmp[GUYANGELN1UNTEN].rcSrc.left = 197;
  Bmp[GUYANGELN1UNTEN].rcSrc.right = 197 + 14;
  Bmp[GUYANGELN1UNTEN].rcSrc.top = 0;
  Bmp[GUYANGELN1UNTEN].rcSrc.bottom = 17;
  Bmp[GUYANGELN1UNTEN].Breite = 14;
  Bmp[GUYANGELN1UNTEN].Hoehe = 17;

  Bmp[GUYANGELN2LINKS].Anzahl = 4;
  Bmp[GUYANGELN2LINKS].Geschwindigkeit = 3;
  Bmp[GUYANGELN2LINKS].rcSrc.left = 211;
  Bmp[GUYANGELN2LINKS].rcSrc.right = 211 + 16;
  Bmp[GUYANGELN2LINKS].rcSrc.top = 0;
  Bmp[GUYANGELN2LINKS].rcSrc.bottom = 16;
  Bmp[GUYANGELN2LINKS].Breite = 16;
  Bmp[GUYANGELN2LINKS].Hoehe = 16;

  Bmp[GUYANGELN2OBEN].Anzahl = 4;
  Bmp[GUYANGELN2OBEN].Geschwindigkeit = 3;
  Bmp[GUYANGELN2OBEN].rcSrc.left = 227;
  Bmp[GUYANGELN2OBEN].rcSrc.right = 227 + 16;
  Bmp[GUYANGELN2OBEN].rcSrc.top = 0;
  Bmp[GUYANGELN2OBEN].rcSrc.bottom = 16;
  Bmp[GUYANGELN2OBEN].Breite = 16;
  Bmp[GUYANGELN2OBEN].Hoehe = 16;

  Bmp[GUYANGELN2RECHTS].Anzahl = 4;
  Bmp[GUYANGELN2RECHTS].Geschwindigkeit = 3;
  Bmp[GUYANGELN2RECHTS].rcSrc.left = 243;
  Bmp[GUYANGELN2RECHTS].rcSrc.right = 243 + 14;
  Bmp[GUYANGELN2RECHTS].rcSrc.top = 0;
  Bmp[GUYANGELN2RECHTS].rcSrc.bottom = 15;
  Bmp[GUYANGELN2RECHTS].Breite = 14;
  Bmp[GUYANGELN2RECHTS].Hoehe = 15;

  Bmp[GUYANGELN2UNTEN].Anzahl = 4;
  Bmp[GUYANGELN2UNTEN].Geschwindigkeit = 3;
  Bmp[GUYANGELN2UNTEN].rcSrc.left = 257;
  Bmp[GUYANGELN2UNTEN].rcSrc.right = 257 + 14;
  Bmp[GUYANGELN2UNTEN].rcSrc.top = 0;
  Bmp[GUYANGELN2UNTEN].rcSrc.bottom = 15;
  Bmp[GUYANGELN2UNTEN].Breite = 14;
  Bmp[GUYANGELN2UNTEN].Hoehe = 15;

  Bmp[GUYANGELN3LINKS].Anzahl = 3;
  Bmp[GUYANGELN3LINKS].Geschwindigkeit = 2;
  Bmp[GUYANGELN3LINKS].rcSrc.left = 271;
  Bmp[GUYANGELN3LINKS].rcSrc.right = 271 + 16;
  Bmp[GUYANGELN3LINKS].rcSrc.top = 0;
  Bmp[GUYANGELN3LINKS].rcSrc.bottom = 16;
  Bmp[GUYANGELN3LINKS].Breite = 16;
  Bmp[GUYANGELN3LINKS].Hoehe = 16;

  Bmp[GUYANGELN3OBEN].Anzahl = 3;
  Bmp[GUYANGELN3OBEN].Geschwindigkeit = 2;
  Bmp[GUYANGELN3OBEN].rcSrc.left = 285;
  Bmp[GUYANGELN3OBEN].rcSrc.right = 285 + 16;
  Bmp[GUYANGELN3OBEN].rcSrc.top = 0;
  Bmp[GUYANGELN3OBEN].rcSrc.bottom = 16;
  Bmp[GUYANGELN3OBEN].Breite = 16;
  Bmp[GUYANGELN3OBEN].Hoehe = 16;

  Bmp[GUYANGELN3RECHTS].Anzahl = 3;
  Bmp[GUYANGELN3RECHTS].Geschwindigkeit = 2;
  Bmp[GUYANGELN3RECHTS].rcSrc.left = 299;
  Bmp[GUYANGELN3RECHTS].rcSrc.right = 299 + 14;
  Bmp[GUYANGELN3RECHTS].rcSrc.top = 0;
  Bmp[GUYANGELN3RECHTS].rcSrc.bottom = 15;
  Bmp[GUYANGELN3RECHTS].Breite = 14;
  Bmp[GUYANGELN3RECHTS].Hoehe = 15;

  Bmp[GUYANGELN3UNTEN].Anzahl = 3;
  Bmp[GUYANGELN3UNTEN].Geschwindigkeit = 2;
  Bmp[GUYANGELN3UNTEN].rcSrc.left = 313;
  Bmp[GUYANGELN3UNTEN].rcSrc.right = 313 + 14;
  Bmp[GUYANGELN3UNTEN].rcSrc.top = 0;
  Bmp[GUYANGELN3UNTEN].rcSrc.bottom = 15;
  Bmp[GUYANGELN3UNTEN].Breite = 14;
  Bmp[GUYANGELN3UNTEN].Hoehe = 15;

  Bmp[GUYSCHLAGEN].Anzahl = 4;
  Bmp[GUYSCHLAGEN].Geschwindigkeit = 7;
  Bmp[GUYSCHLAGEN].rcSrc.left = 327;
  Bmp[GUYSCHLAGEN].rcSrc.right = 327 + 12;
  Bmp[GUYSCHLAGEN].rcSrc.top = 0;
  Bmp[GUYSCHLAGEN].rcSrc.bottom = 24;
  Bmp[GUYSCHLAGEN].Breite = 12;
  Bmp[GUYSCHLAGEN].Hoehe = 24;
  Bmp[GUYSCHLAGEN].Sound = WAVSCHLAGEN;

  Bmp[GUYBOOTLINKS].Anzahl = 6;
  Bmp[GUYBOOTLINKS].Geschwindigkeit = 10;
  Bmp[GUYBOOTLINKS].rcSrc.left = 339;
  Bmp[GUYBOOTLINKS].rcSrc.right = 339 + 26;
  Bmp[GUYBOOTLINKS].rcSrc.top = 0;
  Bmp[GUYBOOTLINKS].rcSrc.bottom = 21;
  Bmp[GUYBOOTLINKS].Breite = 26;
  Bmp[GUYBOOTLINKS].Hoehe = 21;

  Bmp[GUYBOOTOBEN].Anzahl = 6;
  Bmp[GUYBOOTOBEN].Geschwindigkeit = 10;
  Bmp[GUYBOOTOBEN].rcSrc.left = 365;
  Bmp[GUYBOOTOBEN].rcSrc.right = 365 + 26;
  Bmp[GUYBOOTOBEN].rcSrc.top = 0;
  Bmp[GUYBOOTOBEN].rcSrc.bottom = 21;
  Bmp[GUYBOOTOBEN].Breite = 26;
  Bmp[GUYBOOTOBEN].Hoehe = 21;

  Bmp[GUYBOOTRECHTS].Anzahl = 6;
  Bmp[GUYBOOTRECHTS].Geschwindigkeit = 10;
  Bmp[GUYBOOTRECHTS].rcSrc.left = 391;
  Bmp[GUYBOOTRECHTS].rcSrc.right = 391 + 26;
  Bmp[GUYBOOTRECHTS].rcSrc.top = 0;
  Bmp[GUYBOOTRECHTS].rcSrc.bottom = 21;
  Bmp[GUYBOOTRECHTS].Breite = 26;
  Bmp[GUYBOOTRECHTS].Hoehe = 21;

  Bmp[GUYBOOTUNTEN].Anzahl = 6;
  Bmp[GUYBOOTUNTEN].Geschwindigkeit = 10;
  Bmp[GUYBOOTUNTEN].rcSrc.left = 417;
  Bmp[GUYBOOTUNTEN].rcSrc.right = 417 + 26;
  Bmp[GUYBOOTUNTEN].rcSrc.top = 0;
  Bmp[GUYBOOTUNTEN].rcSrc.bottom = 21;
  Bmp[GUYBOOTUNTEN].Breite = 26;
  Bmp[GUYBOOTUNTEN].Hoehe = 21;

  Bmp[GUYBOOTANGELN1].Anzahl = 6;
  Bmp[GUYBOOTANGELN1].Geschwindigkeit = 6;
  Bmp[GUYBOOTANGELN1].rcSrc.left = 443;
  Bmp[GUYBOOTANGELN1].rcSrc.right = 443 + 26;
  Bmp[GUYBOOTANGELN1].rcSrc.top = 0;
  Bmp[GUYBOOTANGELN1].rcSrc.bottom = 25;
  Bmp[GUYBOOTANGELN1].Breite = 26;
  Bmp[GUYBOOTANGELN1].Hoehe = 25;

  Bmp[GUYBOOTANGELN2].Anzahl = 4;
  Bmp[GUYBOOTANGELN2].Geschwindigkeit = 3;
  Bmp[GUYBOOTANGELN2].rcSrc.left = 469;
  Bmp[GUYBOOTANGELN2].rcSrc.right = 469 + 26;
  Bmp[GUYBOOTANGELN2].rcSrc.top = 0;
  Bmp[GUYBOOTANGELN2].rcSrc.bottom = 25;
  Bmp[GUYBOOTANGELN2].Breite = 26;
  Bmp[GUYBOOTANGELN2].Hoehe = 25;

  Bmp[GUYBOOTANGELN3].Anzahl = 3;
  Bmp[GUYBOOTANGELN3].Geschwindigkeit = 2;
  Bmp[GUYBOOTANGELN3].rcSrc.left = 495;
  Bmp[GUYBOOTANGELN3].rcSrc.right = 495 + 26;
  Bmp[GUYBOOTANGELN3].rcSrc.top = 0;
  Bmp[GUYBOOTANGELN3].rcSrc.bottom = 25;
  Bmp[GUYBOOTANGELN3].Breite = 26;
  Bmp[GUYBOOTANGELN3].Hoehe = 25;

  Bmp[GUYTAUCHEN1].Anzahl = 5;
  Bmp[GUYTAUCHEN1].Geschwindigkeit = 5;
  Bmp[GUYTAUCHEN1].rcSrc.left = 521;
  Bmp[GUYTAUCHEN1].rcSrc.right = 521 + 26;
  Bmp[GUYTAUCHEN1].rcSrc.top = 0;
  Bmp[GUYTAUCHEN1].rcSrc.bottom = 27;
  Bmp[GUYTAUCHEN1].Breite = 26;
  Bmp[GUYTAUCHEN1].Hoehe = 27;

  Bmp[GUYTAUCHEN2].Anzahl = 4;
  Bmp[GUYTAUCHEN2].Geschwindigkeit = 3;
  Bmp[GUYTAUCHEN2].rcSrc.left = 547;
  Bmp[GUYTAUCHEN2].rcSrc.right = 547 + 26;
  Bmp[GUYTAUCHEN2].rcSrc.top = 0;
  Bmp[GUYTAUCHEN2].rcSrc.bottom = 17;
  Bmp[GUYTAUCHEN2].Breite = 26;
  Bmp[GUYTAUCHEN2].Hoehe = 17;

  Bmp[GUYTAUCHEN3].Anzahl = 2;
  Bmp[GUYTAUCHEN3].Geschwindigkeit = 2;
  Bmp[GUYTAUCHEN3].rcSrc.left = 573;
  Bmp[GUYTAUCHEN3].rcSrc.right = 573 + 26;
  Bmp[GUYTAUCHEN3].rcSrc.top = 0;
  Bmp[GUYTAUCHEN3].rcSrc.bottom = 17;
  Bmp[GUYTAUCHEN3].Breite = 26;
  Bmp[GUYTAUCHEN3].Hoehe = 17;

  Bmp[GUYHAMMER].Anzahl = 2;
  Bmp[GUYHAMMER].Geschwindigkeit = 4;
  Bmp[GUYHAMMER].rcSrc.left = 599;
  Bmp[GUYHAMMER].rcSrc.right = 599 + 9;
  Bmp[GUYHAMMER].rcSrc.top = 0;
  Bmp[GUYHAMMER].rcSrc.bottom = 18;
  Bmp[GUYHAMMER].Breite = 9;
  Bmp[GUYHAMMER].Hoehe = 18;
  Bmp[GUYHAMMER].Sound = WAVHAMMER;

  Bmp[GUYKLETTERN1].Anzahl = 6;
  Bmp[GUYKLETTERN1].Geschwindigkeit = 2;
  Bmp[GUYKLETTERN1].rcSrc.left = 608;
  Bmp[GUYKLETTERN1].rcSrc.right = 608 + 7;
  Bmp[GUYKLETTERN1].rcSrc.top = 0;
  Bmp[GUYKLETTERN1].rcSrc.bottom = 34;
  Bmp[GUYKLETTERN1].Breite = 7;
  Bmp[GUYKLETTERN1].Hoehe = 34;

  Bmp[GUYKLETTERN2].Anzahl = 6;
  Bmp[GUYKLETTERN2].Geschwindigkeit = 2;
  Bmp[GUYKLETTERN2].rcSrc.left = 615;
  Bmp[GUYKLETTERN2].rcSrc.right = 615 + 7;
  Bmp[GUYKLETTERN2].rcSrc.top = 0;
  Bmp[GUYKLETTERN2].rcSrc.bottom = 34;
  Bmp[GUYKLETTERN2].Breite = 7;
  Bmp[GUYKLETTERN2].Hoehe = 34;

  Bmp[GUYHAMMER2].Anzahl = 2;
  Bmp[GUYHAMMER2].Geschwindigkeit = 4;
  Bmp[GUYHAMMER2].rcSrc.left = 622;
  Bmp[GUYHAMMER2].rcSrc.right = 622 + 7;
  Bmp[GUYHAMMER2].rcSrc.top = 0;
  Bmp[GUYHAMMER2].rcSrc.bottom = 34;
  Bmp[GUYHAMMER2].Breite = 7;
  Bmp[GUYHAMMER2].Hoehe = 34;
  Bmp[GUYHAMMER2].Sound = WAVHAMMER;

  Bmp[GUYGEHINHAUS].Anzahl = 3;
  Bmp[GUYGEHINHAUS].Geschwindigkeit = 2;
  Bmp[GUYGEHINHAUS].rcSrc.left = 631;
  Bmp[GUYGEHINHAUS].rcSrc.right = 631 + 9;
  Bmp[GUYGEHINHAUS].rcSrc.top = 0;
  Bmp[GUYGEHINHAUS].rcSrc.bottom = 34;
  Bmp[GUYGEHINHAUS].Breite = 9;
  Bmp[GUYGEHINHAUS].Hoehe = 34;

  Bmp[GUYSCHLAFHAUS].Anzahl = 2;
  Bmp[GUYSCHLAFHAUS].Geschwindigkeit = 1;
  Bmp[GUYSCHLAFHAUS].rcSrc.left = 640;
  Bmp[GUYSCHLAFHAUS].rcSrc.right = 640 + 10;
  Bmp[GUYSCHLAFHAUS].rcSrc.top = 0;
  Bmp[GUYSCHLAFHAUS].rcSrc.bottom = 34;
  Bmp[GUYSCHLAFHAUS].Breite = 10;
  Bmp[GUYSCHLAFHAUS].Hoehe = 34;
  Bmp[GUYSCHLAFHAUS].Sound = WAVSCHNARCHEN;

  Bmp[GUYGEHAUSHAUS].Anzahl = 3;
  Bmp[GUYGEHAUSHAUS].Geschwindigkeit = 2;
  Bmp[GUYGEHAUSHAUS].rcSrc.left = 650;
  Bmp[GUYGEHAUSHAUS].rcSrc.right = 650 + 9;
  Bmp[GUYGEHAUSHAUS].rcSrc.top = 0;
  Bmp[GUYGEHAUSHAUS].rcSrc.bottom = 34;
  Bmp[GUYGEHAUSHAUS].Breite = 9;
  Bmp[GUYGEHAUSHAUS].Hoehe = 34;

  Bmp[GUYANZUENDEN].Anzahl = 6;
  Bmp[GUYANZUENDEN].Geschwindigkeit = 5;
  Bmp[GUYANZUENDEN].rcSrc.left = 659;
  Bmp[GUYANZUENDEN].rcSrc.right = 659 + 19;
  Bmp[GUYANZUENDEN].rcSrc.top = 0;
  Bmp[GUYANZUENDEN].rcSrc.bottom = 18;
  Bmp[GUYANZUENDEN].Breite = 19;
  Bmp[GUYANZUENDEN].Hoehe = 18;

  Bmp[GUYAUSSCHAU].Anzahl = 4;
  Bmp[GUYAUSSCHAU].Geschwindigkeit = 1;
  Bmp[GUYAUSSCHAU].rcSrc.left = 678;
  Bmp[GUYAUSSCHAU].rcSrc.right = 678 + 10;
  Bmp[GUYAUSSCHAU].rcSrc.top = 0;
  Bmp[GUYAUSSCHAU].rcSrc.bottom = 18;
  Bmp[GUYAUSSCHAU].Breite = 10;
  Bmp[GUYAUSSCHAU].Hoehe = 18;

  Bmp[GUYSCHAUFELN].Anzahl = 10;
  Bmp[GUYSCHAUFELN].Geschwindigkeit = 3;
  Bmp[GUYSCHAUFELN].rcSrc.left = 688;
  Bmp[GUYSCHAUFELN].rcSrc.right = 688 + 17;
  Bmp[GUYSCHAUFELN].rcSrc.top = 0;
  Bmp[GUYSCHAUFELN].rcSrc.bottom = 19;
  Bmp[GUYSCHAUFELN].Breite = 17;
  Bmp[GUYSCHAUFELN].Hoehe = 19;
  Bmp[GUYSCHAUFELN].Sound = WAVSCHAUFELN;

  Bmp[GUYSCHIFF].Anzahl = 4;
  Bmp[GUYSCHIFF].Geschwindigkeit = 10;
  Bmp[GUYSCHIFF].rcSrc.left = 297;
  Bmp[GUYSCHIFF].rcSrc.right = 297 + 48;
  Bmp[GUYSCHIFF].rcSrc.top = 0;
  Bmp[GUYSCHIFF].rcSrc.bottom = 38;
  Bmp[GUYSCHIFF].Breite = 48;
  Bmp[GUYSCHIFF].Hoehe = 38;
  Bmp[GUYSCHIFF].Surface = buildingsImage;
  Bmp[GUYSCHIFF].Sound = WAVSTURM;

  Bmp[GUYSCHIFFDOWN].Anzahl = 6;
  Bmp[GUYSCHIFFDOWN].Geschwindigkeit = 3;
  Bmp[GUYSCHIFFDOWN].rcSrc.left = 345;
  Bmp[GUYSCHIFFDOWN].rcSrc.right = 345 + 46;
  Bmp[GUYSCHIFFDOWN].rcSrc.top = 0;
  Bmp[GUYSCHIFFDOWN].rcSrc.bottom = 40;
  Bmp[GUYSCHIFFDOWN].Breite = 46;
  Bmp[GUYSCHIFFDOWN].Hoehe = 40;
  Bmp[GUYSCHIFFDOWN].Surface = buildingsImage;
  Bmp[GUYSCHIFFDOWN].Sound = WAVPLATSCH;

  Bmp[GUYSCHWIMMEN].Anzahl = 4;
  Bmp[GUYSCHWIMMEN].Geschwindigkeit = 10;
  Bmp[GUYSCHWIMMEN].rcSrc.left = 705;
  Bmp[GUYSCHWIMMEN].rcSrc.right = 705 + 15;
  Bmp[GUYSCHWIMMEN].rcSrc.top = 0;
  Bmp[GUYSCHWIMMEN].rcSrc.bottom = 9;
  Bmp[GUYSCHWIMMEN].Breite = 15;
  Bmp[GUYSCHWIMMEN].Hoehe = 9;
  Bmp[GUYSCHWIMMEN].Sound = WAVSCHWIMMEN;

  Bmp[GUYTOD].Anzahl = 6;
  Bmp[GUYTOD].Geschwindigkeit = 1;
  Bmp[GUYTOD].rcSrc.left = 743;
  Bmp[GUYTOD].rcSrc.right = 743 + 16;
  Bmp[GUYTOD].rcSrc.top = 0;
  Bmp[GUYTOD].rcSrc.bottom = 10;
  Bmp[GUYTOD].Breite = 16;
  Bmp[GUYTOD].Hoehe = 10;

  Bmp[GUYBOOTTOD].Anzahl = 6;
  Bmp[GUYBOOTTOD].Geschwindigkeit = 1;
  Bmp[GUYBOOTTOD].rcSrc.left = 759;
  Bmp[GUYBOOTTOD].rcSrc.right = 759 + 26;
  Bmp[GUYBOOTTOD].rcSrc.top = 0;
  Bmp[GUYBOOTTOD].rcSrc.bottom = 18;
  Bmp[GUYBOOTTOD].Breite = 26;
  Bmp[GUYBOOTTOD].Hoehe = 18;

  Bmp[GUYBOOTWARTEN].Anzahl = 4;
  Bmp[GUYBOOTWARTEN].Geschwindigkeit = 2;
  Bmp[GUYBOOTWARTEN].rcSrc.left = 0;
  Bmp[GUYBOOTWARTEN].rcSrc.right = 26;
  Bmp[GUYBOOTWARTEN].rcSrc.top = 72;
  Bmp[GUYBOOTWARTEN].rcSrc.bottom = 72 + 18;
  Bmp[GUYBOOTWARTEN].Breite = 26;
  Bmp[GUYBOOTWARTEN].Hoehe = 20;

  Bmp[GUYSCHLEUDER].Anzahl = 5;
  Bmp[GUYSCHLEUDER].Geschwindigkeit = 4;
  Bmp[GUYSCHLEUDER].rcSrc.left = 720;
  Bmp[GUYSCHLEUDER].rcSrc.right = 720 + 23;
  Bmp[GUYSCHLEUDER].rcSrc.top = 0;
  Bmp[GUYSCHLEUDER].rcSrc.bottom = 20;
  Bmp[GUYSCHLEUDER].Breite = 23;
  Bmp[GUYSCHLEUDER].Hoehe = 20;

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

  //Landschaftsanimationen
  for (i = SCHLEUSE1; i <= SCHLEUSE6; i++) {
    Bmp[i].Animation = true;
    Bmp[i].Anzahl = 7;
    Bmp[i].Geschwindigkeit = 7;
    Bmp[i].Phase = 0;
    Bmp[i].Surface = waterImage;
    Bmp[i].Sound = WAVFLUSS;
  }

  Bmp[SCHLEUSE1].Breite = 35;
  Bmp[SCHLEUSE1].Hoehe = 22;
  Bmp[SCHLEUSE1].rcSrc.left = 164;
  Bmp[SCHLEUSE1].rcSrc.right = Bmp[SCHLEUSE1].rcSrc.left + Bmp[SCHLEUSE1].Breite;
  Bmp[SCHLEUSE1].rcSrc.top = 126;
  Bmp[SCHLEUSE1].rcSrc.bottom = Bmp[SCHLEUSE1].rcSrc.top + Bmp[SCHLEUSE1].Hoehe;
  Bmp[SCHLEUSE1].rcDes.left = 10;
  Bmp[SCHLEUSE1].rcDes.right = Bmp[SCHLEUSE1].rcDes.left + Bmp[SCHLEUSE1].Breite;
  Bmp[SCHLEUSE1].rcDes.top = 17;
  Bmp[SCHLEUSE1].rcDes.bottom = Bmp[SCHLEUSE1].rcDes.top + Bmp[SCHLEUSE1].Hoehe;

  Bmp[SCHLEUSE2].Breite = 34;
  Bmp[SCHLEUSE2].Hoehe = 23;
  Bmp[SCHLEUSE2].rcSrc.left = 199;
  Bmp[SCHLEUSE2].rcSrc.right = Bmp[SCHLEUSE2].rcSrc.left + Bmp[SCHLEUSE2].Breite;
  Bmp[SCHLEUSE2].rcSrc.top = 126;
  Bmp[SCHLEUSE2].rcSrc.bottom = Bmp[SCHLEUSE2].rcSrc.top + Bmp[SCHLEUSE2].Hoehe;
  Bmp[SCHLEUSE2].rcDes.left = 10;
  Bmp[SCHLEUSE2].rcDes.right = Bmp[SCHLEUSE2].rcDes.left + Bmp[SCHLEUSE2].Breite;
  Bmp[SCHLEUSE2].rcDes.top = 16;
  Bmp[SCHLEUSE2].rcDes.bottom = Bmp[SCHLEUSE2].rcDes.top + Bmp[SCHLEUSE2].Hoehe;

  Bmp[SCHLEUSE3].Breite = 34;
  Bmp[SCHLEUSE3].Hoehe = 22;
  Bmp[SCHLEUSE3].rcSrc.left = 233;
  Bmp[SCHLEUSE3].rcSrc.right = Bmp[SCHLEUSE3].rcSrc.left + Bmp[SCHLEUSE3].Breite;
  Bmp[SCHLEUSE3].rcSrc.top = 126;
  Bmp[SCHLEUSE3].rcSrc.bottom = Bmp[SCHLEUSE3].rcSrc.top + Bmp[SCHLEUSE3].Hoehe;
  Bmp[SCHLEUSE3].rcDes.left = 10;
  Bmp[SCHLEUSE3].rcDes.right = Bmp[SCHLEUSE3].rcDes.left + Bmp[SCHLEUSE3].Breite;
  Bmp[SCHLEUSE3].rcDes.top = 17;
  Bmp[SCHLEUSE3].rcDes.bottom = Bmp[SCHLEUSE3].rcDes.top + Bmp[SCHLEUSE3].Hoehe;

  Bmp[SCHLEUSE4].Breite = 33;
  Bmp[SCHLEUSE4].Hoehe = 23;
  Bmp[SCHLEUSE4].rcSrc.left = 268;
  Bmp[SCHLEUSE4].rcSrc.right = Bmp[SCHLEUSE4].rcSrc.left + Bmp[SCHLEUSE4].Breite;
  Bmp[SCHLEUSE4].rcSrc.top = 105;
  Bmp[SCHLEUSE4].rcSrc.bottom = Bmp[SCHLEUSE4].rcSrc.top + Bmp[SCHLEUSE4].Hoehe;
  Bmp[SCHLEUSE4].rcDes.left = 11;
  Bmp[SCHLEUSE4].rcDes.right = Bmp[SCHLEUSE4].rcDes.left + Bmp[SCHLEUSE4].Breite;
  Bmp[SCHLEUSE4].rcDes.top = 16;
  Bmp[SCHLEUSE4].rcDes.bottom = Bmp[SCHLEUSE4].rcDes.top + Bmp[SCHLEUSE4].Hoehe;

  Bmp[SCHLEUSE5].Breite = 34;
  Bmp[SCHLEUSE5].Hoehe = 17;
  Bmp[SCHLEUSE5].rcSrc.left = 302;
  Bmp[SCHLEUSE5].rcSrc.right = Bmp[SCHLEUSE5].rcSrc.left + Bmp[SCHLEUSE5].Breite;
  Bmp[SCHLEUSE5].rcSrc.top = 91;
  Bmp[SCHLEUSE5].rcSrc.bottom = Bmp[SCHLEUSE5].rcSrc.top + Bmp[SCHLEUSE5].Hoehe;
  Bmp[SCHLEUSE5].rcDes.left = 10;
  Bmp[SCHLEUSE5].rcDes.right = Bmp[SCHLEUSE5].rcDes.left + Bmp[SCHLEUSE5].Breite;
  Bmp[SCHLEUSE5].rcDes.top = 20;
  Bmp[SCHLEUSE5].rcDes.bottom = Bmp[SCHLEUSE5].rcDes.top + Bmp[SCHLEUSE5].Hoehe;

  Bmp[SCHLEUSE6].Breite = 35;
  Bmp[SCHLEUSE6].Hoehe = 23;
  Bmp[SCHLEUSE6].rcSrc.left = 336;
  Bmp[SCHLEUSE6].rcSrc.right = Bmp[SCHLEUSE6].rcSrc.left + Bmp[SCHLEUSE6].Breite;
  Bmp[SCHLEUSE6].rcSrc.top = 154;
  Bmp[SCHLEUSE6].rcSrc.bottom = Bmp[SCHLEUSE6].rcSrc.top + Bmp[SCHLEUSE6].Hoehe;
  Bmp[SCHLEUSE6].rcDes.left = 10;
  Bmp[SCHLEUSE6].rcDes.right = Bmp[SCHLEUSE6].rcDes.left + Bmp[SCHLEUSE6].Breite;
  Bmp[SCHLEUSE6].rcDes.top = 16;
  Bmp[SCHLEUSE6].rcDes.bottom = Bmp[SCHLEUSE6].rcDes.top + Bmp[SCHLEUSE6].Hoehe;

  //Bauwerke
  for (i = FELD; i <= FEUERSTELLE; i++) {
    Bmp[i].Animation = false;
    Bmp[i].Geschwindigkeit = 0;
    Bmp[i].Phase = 0;
  }

  Bmp[FELD].Anzahl = 3;
  Bmp[FELD].Surface = buildingsImage;
  Bmp[FELD].Breite = 42;
  Bmp[FELD].Hoehe = 27;
  Bmp[FELD].rcSrc.left = 0;
  Bmp[FELD].rcSrc.right = 0 + Bmp[FELD].Breite;
  Bmp[FELD].rcSrc.top = 0;
  Bmp[FELD].rcSrc.bottom = 0 + Bmp[FELD].Hoehe;
  Bmp[FELD].rcDes.left = 5;
  Bmp[FELD].rcDes.right = Bmp[FELD].rcDes.left + Bmp[FELD].Breite;
  Bmp[FELD].rcDes.top = 15;
  Bmp[FELD].rcDes.bottom = Bmp[FELD].rcDes.top + Bmp[FELD].Hoehe;
  Bmp[FELD].AkAnzahl = 20;

  Bmp[ZELT].Anzahl = 1;
  Bmp[ZELT].Surface = buildingsImage;
  Bmp[ZELT].Breite = 23;
  Bmp[ZELT].Hoehe = 20;
  Bmp[ZELT].rcSrc.left = 42;
  Bmp[ZELT].rcSrc.right = 42 + Bmp[ZELT].Breite;
  Bmp[ZELT].rcSrc.top = 0;
  Bmp[ZELT].rcSrc.bottom = 0 + Bmp[ZELT].Hoehe;
  Bmp[ZELT].rcDes.left = 14;
  Bmp[ZELT].rcDes.right = Bmp[ZELT].rcDes.left + Bmp[ZELT].Breite;
  Bmp[ZELT].rcDes.top = 9;
  Bmp[ZELT].rcDes.bottom = Bmp[ZELT].rcDes.top + Bmp[ZELT].Hoehe;
  Bmp[ZELT].Rohstoff[ROHAST] = 5;
  Bmp[ZELT].Rohstoff[ROHBLATT] = 5;
  Bmp[ZELT].AkAnzahl = 16;

  Bmp[BOOT].Anzahl = 2;
  Bmp[BOOT].Surface = buildingsImage;
  Bmp[BOOT].Breite = 26;
  Bmp[BOOT].Hoehe = 18;
  Bmp[BOOT].rcSrc.left = 65;
  Bmp[BOOT].rcSrc.right = 65 + Bmp[BOOT].Breite;
  Bmp[BOOT].rcSrc.top = 0;
  Bmp[BOOT].rcSrc.bottom = 0 + Bmp[BOOT].Hoehe;
  Bmp[BOOT].rcDes.left = 14;
  Bmp[BOOT].rcDes.right = Bmp[BOOT].rcDes.left + Bmp[BOOT].Breite;
  Bmp[BOOT].rcDes.top = 20;
  Bmp[BOOT].rcDes.bottom = Bmp[BOOT].rcDes.top + Bmp[BOOT].Hoehe;
  Bmp[BOOT].Rohstoff[ROHAST] = 2;
  Bmp[BOOT].Rohstoff[ROHSTAMM] = 1;
  Bmp[BOOT].AkAnzahl = 16;

  Bmp[ROHR].Anzahl = 2;
  Bmp[ROHR].Surface = buildingsImage;
  Bmp[ROHR].Breite = 34;
  Bmp[ROHR].Hoehe = 21;
  Bmp[ROHR].rcSrc.left = 91;
  Bmp[ROHR].rcSrc.right = 91 + Bmp[ROHR].Breite;
  Bmp[ROHR].rcSrc.top = 0;
  Bmp[ROHR].rcSrc.bottom = 0 + Bmp[ROHR].Hoehe;
  Bmp[ROHR].rcDes.left = 11;
  Bmp[ROHR].rcDes.right = Bmp[ROHR].rcDes.left + Bmp[ROHR].Breite;
  Bmp[ROHR].rcDes.top = 16;
  Bmp[ROHR].rcDes.bottom = Bmp[ROHR].rcDes.top + Bmp[ROHR].Hoehe;
  Bmp[ROHR].Rohstoff[ROHSTAMM] = 1;
  Bmp[ROHR].AkAnzahl = 18;

  Bmp[SOS].Anzahl = 1;
  Bmp[SOS].Surface = buildingsImage;
  Bmp[SOS].Breite = 36;
  Bmp[SOS].Hoehe = 19;
  Bmp[SOS].rcSrc.left = 125;
  Bmp[SOS].rcSrc.right = 125 + Bmp[SOS].Breite;
  Bmp[SOS].rcSrc.top = 0;
  Bmp[SOS].rcSrc.bottom = 0 + Bmp[SOS].Hoehe;
  Bmp[SOS].rcDes.left = 11;
  Bmp[SOS].rcDes.right = Bmp[SOS].rcDes.left + Bmp[SOS].Breite;
  Bmp[SOS].rcDes.top = 20;
  Bmp[SOS].rcDes.bottom = Bmp[SOS].rcDes.top + Bmp[SOS].Hoehe;
  Bmp[SOS].Rohstoff[ROHSTEIN] = 10;
  Bmp[SOS].AkAnzahl = 20;

  Bmp[HAUS1].Anzahl = 1;
  Bmp[HAUS1].Surface = buildingsImage;
  Bmp[HAUS1].Breite = 26;
  Bmp[HAUS1].Hoehe = 41;
  Bmp[HAUS1].rcSrc.left = 161;
  Bmp[HAUS1].rcSrc.right = 161 + Bmp[HAUS1].Breite;
  Bmp[HAUS1].rcSrc.top = 0;
  Bmp[HAUS1].rcSrc.bottom = 0 + Bmp[HAUS1].Hoehe;
  Bmp[HAUS1].rcDes.left = 0;
  Bmp[HAUS1].rcDes.right = Bmp[HAUS1].rcDes.left + Bmp[HAUS1].Breite;
  Bmp[HAUS1].rcDes.top = 0;
  Bmp[HAUS1].rcDes.bottom = Bmp[HAUS1].rcDes.top + Bmp[HAUS1].Hoehe;
  Bmp[HAUS1].Rohstoff[ROHAST] = 4;
  Bmp[HAUS1].AkAnzahl = 19;
  Bmp[HAUS1].Sound = WAVWALD;

  Bmp[HAUS2].Anzahl = 1;
  Bmp[HAUS2].Surface = buildingsImage;
  Bmp[HAUS2].Breite = 34;
  Bmp[HAUS2].Hoehe = 41;
  Bmp[HAUS2].rcSrc.left = 187;
  Bmp[HAUS2].rcSrc.right = 187 + Bmp[HAUS2].Breite;
  Bmp[HAUS2].rcSrc.top = 0;
  Bmp[HAUS2].rcSrc.bottom = 0 + Bmp[HAUS2].Hoehe;
  Bmp[HAUS2].rcDes.left = 0;
  Bmp[HAUS2].rcDes.right = Bmp[HAUS2].rcDes.left + Bmp[HAUS2].Breite;
  Bmp[HAUS2].rcDes.top = 0;
  Bmp[HAUS2].rcDes.bottom = Bmp[HAUS2].rcDes.top + Bmp[HAUS2].Hoehe;
  Bmp[HAUS2].Rohstoff[ROHAST] = 3;
  Bmp[HAUS2].Rohstoff[ROHSTAMM] = 3;
  Bmp[HAUS2].AkAnzahl = 21;
  Bmp[HAUS2].Sound = WAVWALD;

  Bmp[HAUS3].Anzahl = 1;
  Bmp[HAUS3].Surface = buildingsImage;
  Bmp[HAUS3].Breite = 34;
  Bmp[HAUS3].Hoehe = 41;
  Bmp[HAUS3].rcSrc.left = 221;
  Bmp[HAUS3].rcSrc.right = 221 + Bmp[HAUS3].Breite;
  Bmp[HAUS3].rcSrc.top = 0;
  Bmp[HAUS3].rcSrc.bottom = 0 + Bmp[HAUS3].Hoehe;
  Bmp[HAUS3].rcDes.left = 0;
  Bmp[HAUS3].rcDes.right = Bmp[HAUS3].rcDes.left + Bmp[HAUS3].Breite;
  Bmp[HAUS3].rcDes.top = 0;
  Bmp[HAUS3].rcDes.bottom = Bmp[HAUS3].rcDes.top + Bmp[HAUS3].Hoehe;
  Bmp[HAUS3].Rohstoff[ROHAST] = 4;
  Bmp[HAUS3].Rohstoff[ROHSTAMM] = 4;
  Bmp[HAUS3].Rohstoff[ROHBLATT] = 5;
  Bmp[HAUS3].AkAnzahl = 21;
  Bmp[HAUS3].Sound = WAVWALD;

  Bmp[FEUERSTELLE].Anzahl = 1;
  Bmp[FEUERSTELLE].Surface = buildingsImage;
  Bmp[FEUERSTELLE].Breite = 21;
  Bmp[FEUERSTELLE].Hoehe = 19;
  Bmp[FEUERSTELLE].rcSrc.left = 255;
  Bmp[FEUERSTELLE].rcSrc.right = 255 + Bmp[FEUERSTELLE].Breite;
  Bmp[FEUERSTELLE].rcSrc.top = 0;
  Bmp[FEUERSTELLE].rcSrc.bottom = 0 + Bmp[FEUERSTELLE].Hoehe;
  Bmp[FEUERSTELLE].rcDes.left = 15;
  Bmp[FEUERSTELLE].rcDes.right = Bmp[FEUERSTELLE].rcDes.left + Bmp[FEUERSTELLE].Breite;
  Bmp[FEUERSTELLE].rcDes.top = 10;
  Bmp[FEUERSTELLE].rcDes.bottom = Bmp[FEUERSTELLE].rcDes.top + Bmp[FEUERSTELLE].Hoehe;
  Bmp[FEUERSTELLE].Rohstoff[ROHAST] = 5;
  Bmp[FEUERSTELLE].Rohstoff[ROHSTAMM] = 4;
  Bmp[FEUERSTELLE].AkAnzahl = 9;

  //Feuer
  Bmp[FEUER].Anzahl = 3;
  Bmp[FEUER].Surface = buildingsImage;
  Bmp[FEUER].Breite = 21;
  Bmp[FEUER].Hoehe = 28;
  Bmp[FEUER].rcSrc.left = 276;
  Bmp[FEUER].rcSrc.right = 276 + Bmp[FEUER].Breite;
  Bmp[FEUER].rcSrc.top = 0;
  Bmp[FEUER].rcSrc.bottom = 0 + Bmp[FEUER].Hoehe;
  Bmp[FEUER].rcDes.left = 15;
  Bmp[FEUER].rcDes.right = Bmp[FEUER].rcDes.left + Bmp[FEUER].Breite;
  Bmp[FEUER].rcDes.top = 1;
  Bmp[FEUER].rcDes.bottom = Bmp[FEUER].rcDes.top + Bmp[FEUER].Hoehe;
  Bmp[FEUER].Animation = true;
  Bmp[FEUER].Geschwindigkeit = 6;
  Bmp[FEUER].Phase = 0;
  Bmp[FEUER].Sound = WAVFEUER;

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

  //SpzAni
  for (i = BAUM1DOWN; i <= BAUM4DOWN; i++) {
    Bmp[i].Animation = true;
    Bmp[i].Surface = treesImage;
    Bmp[i].Phase = 0;
    Bmp[i].rcDes.left = 0;
    Bmp[i].rcDes.top = 0;
    Bmp[i].rcDes.right = 0;
    Bmp[i].rcDes.bottom = 0;
    Bmp[i].Anzahl = 3;
    Bmp[i].Geschwindigkeit = 4;
  }
  //BAUM1DOWN
  Bmp[BAUM1DOWN].rcSrc.left = 101;
  Bmp[BAUM1DOWN].rcSrc.top = 0;
  Bmp[BAUM1DOWN].rcSrc.right = 101 + 35;
  Bmp[BAUM1DOWN].rcSrc.bottom = 27;
  Bmp[BAUM1DOWN].Breite = (Bmp[BAUM1DOWN].rcSrc.right - Bmp[BAUM1DOWN].rcSrc.left);
  Bmp[BAUM1DOWN].Hoehe = (Bmp[BAUM1DOWN].rcSrc.bottom - Bmp[BAUM1DOWN].rcSrc.top);

  //BAUM2DOWN
  Bmp[BAUM2DOWN].rcSrc.left = 136;
  Bmp[BAUM2DOWN].rcSrc.top = 0;
  Bmp[BAUM2DOWN].rcSrc.right = 136 + 36;
  Bmp[BAUM2DOWN].rcSrc.bottom = 27;
  Bmp[BAUM2DOWN].Breite = (Bmp[BAUM2DOWN].rcSrc.right - Bmp[BAUM2DOWN].rcSrc.left);
  Bmp[BAUM2DOWN].Hoehe = (Bmp[BAUM2DOWN].rcSrc.bottom - Bmp[BAUM2DOWN].rcSrc.top);

  //BAUM3DOWN
  Bmp[BAUM3DOWN].rcSrc.left = 172;
  Bmp[BAUM3DOWN].rcSrc.top = 0;
  Bmp[BAUM3DOWN].rcSrc.right = 172 + 34;
  Bmp[BAUM3DOWN].rcSrc.bottom = 28;
  Bmp[BAUM3DOWN].Breite = (Bmp[BAUM3DOWN].rcSrc.right - Bmp[BAUM3DOWN].rcSrc.left);
  Bmp[BAUM3DOWN].Hoehe = (Bmp[BAUM3DOWN].rcSrc.bottom - Bmp[BAUM3DOWN].rcSrc.top);

  //BAUM4DOWN
  Bmp[BAUM4DOWN].rcSrc.left = 206;
  Bmp[BAUM4DOWN].rcSrc.top = 0;
  Bmp[BAUM4DOWN].rcSrc.right = 206 + 32;
  Bmp[BAUM4DOWN].rcSrc.bottom = 17;
  Bmp[BAUM4DOWN].Breite = (Bmp[BAUM4DOWN].rcSrc.right - Bmp[BAUM4DOWN].rcSrc.left);
  Bmp[BAUM4DOWN].Hoehe = (Bmp[BAUM4DOWN].rcSrc.bottom - Bmp[BAUM4DOWN].rcSrc.top);

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

  //Rohstoffe
  for (i = ROHAST; i <= ROHSCHLEUDER; i++) {
    Bmp[i].Anzahl = 1;
    Bmp[i].rcSrc.left = 18 + (i - ROHAST) * 16;
    Bmp[i].rcSrc.top = 0;
    Bmp[i].rcSrc.right = Bmp[i].rcSrc.left + 16;
    Bmp[i].rcSrc.bottom = Bmp[i].rcSrc.top + 15;
    Bmp[i].Breite = (Bmp[i].rcSrc.right - Bmp[i].rcSrc.left);
    Bmp[i].Hoehe = (Bmp[i].rcSrc.bottom - Bmp[i].rcSrc.top);
    Bmp[i].Surface = inventarImage;
  }
  //RohAst
  Bmp[ROHAST].rcDes.left = rcPanel.left + 34;
  Bmp[ROHAST].rcDes.top = rcPanel.top + 230;
  Bmp[ROHAST].rcDes.right = Bmp[ROHAST].rcDes.left + 16;
  Bmp[ROHAST].rcDes.bottom = Bmp[ROHAST].rcDes.top + 15;
  //ROHSTEIN
  Bmp[ROHSTEIN].rcDes.left = rcPanel.left + 34;
  Bmp[ROHSTEIN].rcDes.top = rcPanel.top + 250;
  Bmp[ROHSTEIN].rcDes.right = Bmp[ROHSTEIN].rcDes.left + 16;
  Bmp[ROHSTEIN].rcDes.bottom = Bmp[ROHSTEIN].rcDes.top + 15;
  //ROHSTAMM
  Bmp[ROHSTAMM].rcDes.left = rcPanel.left + 34;
  Bmp[ROHSTAMM].rcDes.top = rcPanel.top + 310;
  Bmp[ROHSTAMM].rcDes.right = Bmp[ROHSTAMM].rcDes.left + 16;
  Bmp[ROHSTAMM].rcDes.bottom = Bmp[ROHSTAMM].rcDes.top + 15;
  //ROHAXT
  Bmp[ROHAXT].rcDes.left = rcPanel.left + 150;
  Bmp[ROHAXT].rcDes.top = rcPanel.top + 230;
  Bmp[ROHAXT].rcDes.right = Bmp[ROHAXT].rcDes.left + 16;
  Bmp[ROHAXT].rcDes.bottom = Bmp[ROHAXT].rcDes.top + 15;
  //ROHBLATT
  Bmp[ROHBLATT].rcDes.left = rcPanel.left + 34;
  Bmp[ROHBLATT].rcDes.top = rcPanel.top + 270;
  Bmp[ROHBLATT].rcDes.right = Bmp[ROHBLATT].rcDes.left + 16;
  Bmp[ROHBLATT].rcDes.bottom = Bmp[ROHBLATT].rcDes.top + 15;
  //ROHEGGE
  Bmp[ROHEGGE].rcDes.left = rcPanel.left + 150;
  Bmp[ROHEGGE].rcDes.top = rcPanel.top + 250;
  Bmp[ROHEGGE].rcDes.right = Bmp[ROHEGGE].rcDes.left + 16;
  Bmp[ROHEGGE].rcDes.bottom = Bmp[ROHEGGE].rcDes.top + 15;
  //ROHLIANE
  Bmp[ROHLIANE].rcDes.left = rcPanel.left + 34;
  Bmp[ROHLIANE].rcDes.top = rcPanel.top + 290;
  Bmp[ROHLIANE].rcDes.right = Bmp[ROHLIANE].rcDes.left + 16;
  Bmp[ROHLIANE].rcDes.bottom = Bmp[ROHLIANE].rcDes.top + 15;
  //ROHANGEL
  Bmp[ROHANGEL].rcDes.left = rcPanel.left + 150;
  Bmp[ROHANGEL].rcDes.top = rcPanel.top + 270;
  Bmp[ROHANGEL].rcDes.right = Bmp[ROHANGEL].rcDes.left + 16;
  Bmp[ROHANGEL].rcDes.bottom = Bmp[ROHANGEL].rcDes.top + 15;
  //ROHHAMMER
  Bmp[ROHHAMMER].rcDes.left = rcPanel.left + 150;
  Bmp[ROHHAMMER].rcDes.top = rcPanel.top + 290;
  Bmp[ROHHAMMER].rcDes.right = Bmp[ROHHAMMER].rcDes.left + 16;
  Bmp[ROHHAMMER].rcDes.bottom = Bmp[ROHHAMMER].rcDes.top + 15;
  //ROHFERNROHR
  Bmp[ROHFERNROHR].rcDes.left = rcPanel.left + 150;
  Bmp[ROHFERNROHR].rcDes.top = rcPanel.top + 310;
  Bmp[ROHFERNROHR].rcDes.right = Bmp[ROHFERNROHR].rcDes.left + 16;
  Bmp[ROHFERNROHR].rcDes.bottom = Bmp[ROHFERNROHR].rcDes.top + 15;
  //ROHSTREICHHOLZ
  Bmp[ROHSTREICHHOLZ].rcDes.left = rcPanel.left + 105;
  Bmp[ROHSTREICHHOLZ].rcDes.top = rcPanel.top + 230;
  Bmp[ROHSTREICHHOLZ].rcDes.right = Bmp[ROHSTREICHHOLZ].rcDes.left + 16;
  Bmp[ROHSTREICHHOLZ].rcDes.bottom = Bmp[ROHSTREICHHOLZ].rcDes.top + 15;
  //ROHSCHAUFEL
  Bmp[ROHSCHAUFEL].rcDes.left = rcPanel.left + 105;
  Bmp[ROHSCHAUFEL].rcDes.top = rcPanel.top + 250;
  Bmp[ROHSCHAUFEL].rcDes.right = Bmp[ROHSCHAUFEL].rcDes.left + 16;
  Bmp[ROHSCHAUFEL].rcDes.bottom = Bmp[ROHSCHAUFEL].rcDes.top + 15;
  //ROHKARTE
  Bmp[ROHKARTE].rcDes.left = rcPanel.left + 105;
  Bmp[ROHKARTE].rcDes.top = rcPanel.top + 270;
  Bmp[ROHKARTE].rcDes.right = Bmp[ROHKARTE].rcDes.left + 16;
  Bmp[ROHKARTE].rcDes.bottom = Bmp[ROHKARTE].rcDes.top + 15;
  //ROHSCHLEUDER
  Bmp[ROHSCHLEUDER].rcDes.left = rcPanel.left + 105;
  Bmp[ROHSCHLEUDER].rcDes.top = rcPanel.top + 290;
  Bmp[ROHSCHLEUDER].rcDes.right = Bmp[ROHSCHLEUDER].rcDes.left + 16;
  Bmp[ROHSCHLEUDER].rcDes.bottom = Bmp[ROHSCHLEUDER].rcDes.top + 15;

  //ROEMISCH1
  Bmp[ROEMISCH1].Anzahl = 1;
  Bmp[ROEMISCH1].rcSrc.left = 0;
  Bmp[ROEMISCH1].rcSrc.top = 0;
  Bmp[ROEMISCH1].rcSrc.right = Bmp[ROEMISCH1].rcSrc.left + 3;
  Bmp[ROEMISCH1].rcSrc.bottom = Bmp[ROEMISCH1].rcSrc.top + 13;
  Bmp[ROEMISCH1].rcDes.left = rcPanel.left + 50;
  Bmp[ROEMISCH1].rcDes.top = rcPanel.top;
  Bmp[ROEMISCH1].rcDes.right = Bmp[ROEMISCH1].rcDes.left + 3;
  Bmp[ROEMISCH1].rcDes.bottom = Bmp[ROEMISCH1].rcDes.top + 13;
  Bmp[ROEMISCH1].Breite = (Bmp[ROEMISCH1].rcSrc.right - Bmp[ROEMISCH1].rcSrc.left);
  Bmp[ROEMISCH1].Hoehe = (Bmp[ROEMISCH1].rcSrc.bottom - Bmp[ROEMISCH1].rcSrc.top);
  Bmp[ROEMISCH1].Surface = inventarImage;

  //ROEMISCH2
  Bmp[ROEMISCH2].Anzahl = 1;
  Bmp[ROEMISCH2].rcSrc.left = 3;
  Bmp[ROEMISCH2].rcSrc.top = 0;
  Bmp[ROEMISCH2].rcSrc.right = Bmp[ROEMISCH2].rcSrc.left + 15;
  Bmp[ROEMISCH2].rcSrc.bottom = Bmp[ROEMISCH2].rcSrc.top + 10;
  Bmp[ROEMISCH2].rcDes.left = rcPanel.left + 50;
  Bmp[ROEMISCH2].rcDes.top = rcPanel.top;
  Bmp[ROEMISCH2].rcDes.right = Bmp[ROEMISCH2].rcDes.left + 15;
  Bmp[ROEMISCH2].rcDes.bottom = Bmp[ROEMISCH2].rcDes.top + 10;
  Bmp[ROEMISCH2].Breite = (Bmp[ROEMISCH2].rcSrc.right - Bmp[ROEMISCH2].rcSrc.left);
  Bmp[ROEMISCH2].Hoehe = (Bmp[ROEMISCH2].rcSrc.bottom - Bmp[ROEMISCH2].rcSrc.top);
  Bmp[ROEMISCH2].Surface = inventarImage;


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

  //JA
  Bmp[JA].Anzahl = 1;
  Bmp[JA].rcSrc.left = 0;
  Bmp[JA].rcSrc.top = 154;
  Bmp[JA].rcSrc.right = Bmp[JA].rcSrc.left + 41;
  Bmp[JA].rcSrc.bottom = Bmp[JA].rcSrc.top + 42;
  Bmp[JA].Breite = (Bmp[JA].rcSrc.right - Bmp[JA].rcSrc.left);
  Bmp[JA].Hoehe = (Bmp[JA].rcSrc.bottom - Bmp[JA].rcSrc.top);
  Bmp[JA].Surface = paperImage;

  //NEIN
  Bmp[NEIN].Anzahl = 1;
  Bmp[NEIN].rcSrc.left = 41;
  Bmp[NEIN].rcSrc.top = 154;
  Bmp[NEIN].rcSrc.right = Bmp[NEIN].rcSrc.left + 100;
  Bmp[NEIN].rcSrc.bottom = Bmp[NEIN].rcSrc.top + 39;
  Bmp[NEIN].Breite = (Bmp[NEIN].rcSrc.right - Bmp[NEIN].rcSrc.left);
  Bmp[NEIN].Hoehe = (Bmp[NEIN].rcSrc.bottom - Bmp[NEIN].rcSrc.top);
  Bmp[NEIN].Surface = paperImage;

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

  //Sounds
  for (i = 0; i < WAVANZ; i++) {
    Wav[i].Dateiname = 'click';
    Wav[i].Loop = false;
    Wav[i].Volume = 100;
  }

  Wav[WAVSTURM].Dateiname = 'storm';
  Wav[WAVSTURM].Volume = 85;

  Wav[WAVSCHWIMMEN].Dateiname = 'swimming';
  Wav[WAVSCHWIMMEN].Volume = 90;

  Wav[WAVPLATSCH].Dateiname = 'splash';
  Wav[WAVPLATSCH].Volume = 95;

  Wav[WAVFAELLEN].Dateiname = 'chopping';
  Wav[WAVFAELLEN].Volume = 100;

  Wav[WAVSCHLAGEN].Dateiname = 'hitting';
  Wav[WAVSCHLAGEN].Volume = 100;

  Wav[WAVSCHLEUDER].Dateiname = 'slinging';
  Wav[WAVSCHLEUDER].Volume = 100;

  Wav[WAVSCHAUFELN].Dateiname = 'shoveling';
  Wav[WAVSCHAUFELN].Volume = 90;

  Wav[WAVHAMMER].Dateiname = 'hammering';
  Wav[WAVHAMMER].Volume = 100;

  Wav[WAVCRASH].Dateiname = 'crashing';
  Wav[WAVCRASH].Volume = 100;

  Wav[WAVSCHNARCHEN].Dateiname = 'snoring';
  Wav[WAVSCHNARCHEN].Volume = 90;

  Wav[WAVTRINKEN].Dateiname = 'drinking';
  Wav[WAVTRINKEN].Volume = 95;

  Wav[WAVKNISTERN].Dateiname = 'crackling';
  Wav[WAVKNISTERN].Volume = 90;

  Wav[WAVANGEL].Dateiname = 'fishing';
  Wav[WAVANGEL].Volume = 100;

  Wav[WAVWALD].Dateiname = 'forest';
  Wav[WAVWALD].Volume = 90;

  Wav[WAVFEUER].Dateiname = 'fire';
  Wav[WAVFEUER].Volume = 100;

  Wav[WAVBRANDUNG].Dateiname = 'waves';
  Wav[WAVBRANDUNG].Volume = 100;

  Wav[WAVBAUMFAELLT].Dateiname = 'treefall';
  Wav[WAVBAUMFAELLT].Volume = 100;

  Wav[WAVFLUSS].Dateiname = 'river';
  Wav[WAVFLUSS].Volume = 85;

  Wav[WAVKLICK].Dateiname = 'click';
  Wav[WAVKLICK].Volume = 95;

  Wav[WAVKLICK2].Dateiname = 'click2';
  Wav[WAVKLICK2].Volume = 95;

  Wav[WAVABSPANN].Dateiname = 'outro';
  Wav[WAVABSPANN].Volume = 100;
  Wav[WAVABSPANN].Loop = true;

  Wav[WAVLOGO].Dateiname = 'logo';
  Wav[WAVLOGO].Volume = 100;
  Wav[WAVLOGO].Loop = true;

  Wav[WAVWOLF].Dateiname = 'wolf';
  Wav[WAVWOLF].Volume = 90;

  Wav[WAVERFINDUNG].Dateiname = 'invention';
  Wav[WAVERFINDUNG].Volume = 95;

  //Testweise alle Sounds gleich in den Speicher laden
  for (i = 1; i < WAVANZ; i++) await LoadSound(i);

  //Textausgabe
  TextBereich[TXTTEXTFELD].Aktiv = false;
  TextBereich[TXTTEXTFELD].rcText.left = 9;
  TextBereich[TXTTEXTFELD].rcText.top = MAXY - 17;
  TextBereich[TXTTEXTFELD].rcText.right = MAXX - 200;
  TextBereich[TXTTEXTFELD].rcText.bottom = MAXY - 2;

  TextBereich[TXTFPS].Aktiv = false;
  TextBereich[TXTFPS].rcText.left = MAXX - 40;
  TextBereich[TXTFPS].rcText.top = 3;
  TextBereich[TXTFPS].rcText.right = TextBereich[TXTFPS].rcText.left + 2 * S1XPIXEL;
  TextBereich[TXTFPS].rcText.bottom = TextBereich[TXTFPS].rcText.top + S1YPIXEL;

  TextBereich[TXTTAGESZEIT].Aktiv = true;
  TextBereich[TXTTAGESZEIT].rcText.left = MAXX - 110;
  TextBereich[TXTTAGESZEIT].rcText.top = MAXY - 20;
  TextBereich[TXTTAGESZEIT].rcText.right = TextBereich[TXTTAGESZEIT].rcText.left + 5 * S2XPIXEL;
  TextBereich[TXTTAGESZEIT].rcText.bottom = TextBereich[TXTTAGESZEIT].rcText.top + S2YPIXEL;

  TextBereich[TXTPAPIER].Aktiv = false;
  TextBereich[TXTPAPIER].rcText.left = 150;
  TextBereich[TXTPAPIER].rcText.top = 100;
  TextBereich[TXTPAPIER].rcText.right = 530;
  TextBereich[TXTPAPIER].rcText.bottom = 500;

  TextBereich[TXTCHANCE].Aktiv = false;
  TextBereich[TXTCHANCE].rcText.left = Bmp[RING].rcDes.left + 5;
  TextBereich[TXTCHANCE].rcText.top = Bmp[RING].rcDes.top + Bmp[RING].Hoehe + 10;
  TextBereich[TXTCHANCE].rcText.right = TextBereich[TXTCHANCE].rcText.left + 3 * S2XPIXEL;
  TextBereich[TXTCHANCE].rcText.bottom = TextBereich[TXTCHANCE].rcText.top + S2YPIXEL;

  Guy.Resource[WASSER] = 100;
  Guy.Resource[NAHRUNG] = 100;
  Guy.Resource[GESUNDHEIT] = 100;

  for (i = ROHAST; i <= ROHSCHLEUDER; i++) {
    Guy.Inventar[i] = 0;
  }
  CursorTyp = CUPFEIL;
  MouseAktiv = true;
  PapierText = -1;
  HauptMenue = 0;
  TwoClicks = -1;
  Nacht = false;
  Frage = -1;
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
  if (PapierText !== -1) {
    if (Frage === 0) {
      if (InRect(MousePosition.x, MousePosition.y, Bmp[JA].rcDes)) {
        CursorTyp = CUPFEIL;
        if ((Button === 0) && (Push === 1)) {
          Frage = 1;
          Textloeschen(TXTPAPIER);
          PapierText = -1;
          gameData.guy.active = false;
          PlaySound(WAVKLICK2, 100);
        }
      } else if (InRect(MousePosition.x, MousePosition.y, Bmp[NEIN].rcDes)) {
        CursorTyp = CUPFEIL;
        if ((Button === 0) && (Push === 1)) {
          Frage = 2;
          Textloeschen(TXTPAPIER);
          PapierText = -1;
          gameData.guy.active = false;
          PlaySound(WAVKLICK2, 100);
        }
      } else if ((Button === 0) && (Push === 1)) PlaySound(WAVKLICK, 100);
    } else if ((Button !== -1) && (Push === 1)) {
      Textloeschen(TXTPAPIER);
      PapierText = -1;
      gameData.guy.active = false;
    }
    return;

  }

  //Animationen und Text löschen (werden dann von den MouseIn.. Sachen neu angestellt
  Textloeschen(TXTTEXTFELD);
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

  let x;

  if (Spielzustand === GAME_LOGO) {
    //Logo Abbrechen
    if (pressedKeyCodes[DIK_ESCAPE] || pressedKeyCodes[DIK_RETURN] || pressedKeyCodes[DIK_SPACE]) {
      StopSound(WAVLOGO);
      startGame(false);
      return (2);
    }
  } else if (Spielzustand === GAME_INTRO) {
    //Intro Abbrechen
    if (pressedKeyCodes[DIK_ESCAPE] || pressedKeyCodes[DIK_RETURN] || pressedKeyCodes[DIK_SPACE]) {
      StopSound(WAVSTURM); //Sound hier sofort stoppen
      StopSound(WAVSCHWIMMEN); //Sound hier sofort stoppen
      gameData.guy.active = false;
      for (x = gameData.guy.tile.x; x < MAXXKACH; x++) {
        gameData.guy.tile.x = x;
        Entdecken();
        if (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].ground !== grounds.SEA) break;
      }
      addShipWreck(gameData.terrain[gameData.guy.tile.x - 2][gameData.guy.tile.y]);

      const tile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];
      gameData.guy.position.x = tile.position.x + tileEdges[tile.type].center.x;
      gameData.guy.position.y = tile.position.y + tileEdges[tile.type].center.y;
      gameData.guy.route = [];
      updateCamera(gameData.camera, gameData.guy.position, primaryCanvasContext, false);

      Guy.Zustand = GUYLINKS;
      Guy.Aktion = AKNICHTS;
      Spielzustand = GAME_PLAY;
      gameData.guy.storedPosition = { ...gameData.guy.position };
      SaveGame();
      return (1);
    }
  } else if (Spielzustand === GAME_OUTRO) {
    if (pressedKeyCodes[DIK_ESCAPE] || pressedKeyCodes[DIK_RETURN] || pressedKeyCodes[DIK_SPACE]) {
      Spielzustand = GAME_CREDITS;
      return (1);
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
      let x,y;
      for (y=0;y<MAXYKACH;y++)
        for (x=0;x<MAXXKACH;x++)
          gameData.terrain[x][y].discovered = true;
        updateMinimap();
    }

    if (pressedKeyCodes[DIK_I])  //Zum testen
    {
      Guy.Inventar[ROHAST] = 10;
      Guy.Inventar[ROHSTEIN] = 10;
      Guy.Inventar[ROHBLATT] = 10;
      Guy.Inventar[ROHLIANE] = 10;
      Guy.Inventar[ROHSTAMM] = 9;
    }
    if (pressedKeyCodes[DIK_W])  //Zum testen
    {
      Guy.Inventar[ROHAXT]   = 1;
      Guy.Inventar[ROHEGGE]  = 1;
      Guy.Inventar[ROHANGEL]  = 1;
      Guy.Inventar[ROHHAMMER]   = 1;
      Guy.Inventar[ROHFERNROHR] = 1;
      Guy.Inventar[ROHSTREICHHOLZ] = 1;
      Guy.Inventar[ROHSCHAUFEL] = 1;
      Guy.Inventar[ROHKARTE] = 1;
      Guy.Inventar[ROHSCHLEUDER] = 1;

      Bmp[BUTTFAELLEN].Phase  = 0;
      Bmp[BUTTANGELN].Phase  = 0;
      Bmp[BUTTANZUENDEN].Phase  = 0;
      Bmp[BUTTAUSSCHAU].Phase = 0;
      Bmp[BUTTSCHATZKARTE].Phase = 0;
      Bmp[BUTTSCHATZ].Phase = 0;
      Bmp[BUTTSCHLEUDER].Phase = 0;
      Bmp[BUTTFELD].Phase  = 0;
      Bmp[BUTTBOOT].Phase  = 0;
      Bmp[BUTTROHR].Phase  = 0;
      Bmp[BUTTHAUS1].Phase = 0;
      Bmp[BUTTHAUS2].Phase = 0;
      Bmp[BUTTHAUS3].Phase = 0;

      Chance += 100;
    }
  } else if (Spielzustand === GAME_CREDITS) {
    if (pressedKeyCodes[DIK_ESCAPE] || pressedKeyCodes[DIK_RETURN] || pressedKeyCodes[DIK_SPACE]) {
      StopSound(WAVABSPANN);
      return (0);
    }
  }
  return (1);
}

const AddTime = (h, m) => {
  let x, y, i;

  Stunden += h;
  Minuten += m;
  if (Minuten >= 60) {
    Minuten -= 60;
    Stunden++;
  }
  for (y = 0; y < MAXYKACH; y++)
    for (x = 0; x < MAXXKACH; x++) {
      const tile = gameData.terrain[x][y];
      //Feuer nach einer bestimmten Zeit ausgehen lassen
      if (tile.Objekt === FEUER) {
        tile.Timer += (60 * h + m) * 0.0005;
        if (tile.Timer >= 1) {
          tile.Objekt = -1;
          tile.Timer = 0;
          tile.ObPos.x = 0;
          tile.ObPos.y = 0;
          tile.Phase = -1;
          Chance -= 2 + 2 * tile.height;
        }
      }
      //pro Minute Reifungsprozess fortführen
      if (tile.Objekt === FELD && tile.Phase < Bmp[tile.Objekt].Anzahl) {
        tile.Phase += (60 * h + m) * 0.005;
        if (tile.Phase > Bmp[tile.Objekt].Anzahl - 1) {
          tile.Phase = Bmp[tile.Objekt].Anzahl - 1;
        }
      } else if (tile.object?.sprite === spriteTypes.BUSH) {
        tile.object.frame += (60 * h + m) * 0.0005; 
        tile.object.frame = Math.min(tile.object.frame, sprites[tile.object.sprite].frameCount - 1);
      }
    }
  AddResource(GESUNDHEIT, (60 * h + m) * (Guy.Resource[WASSER] - 50 + Guy.Resource[NAHRUNG] - 50) / 1000);

  if ((Spielzustand === GAME_PLAY) && (!isOnSea(gameData))) {
    if (Math.random() < (Chance / 100) * ((60 * h + m) / 720)) {
      gameData.guy.active = false;
      Guy.AkNummer = 0;
      Guy.Aktion = AKGERETTET;
    }
  }
}

const AddResource = (Art, Anzahl) => //Fügt wassser usw hinzu
{
  Guy.Resource[Art] += Anzahl;
  if (Guy.Resource[Art] > 100) Guy.Resource[Art] = 100;
  if (Guy.Resource[Art] < 0) Guy.Resource[Art] = 0;
  //Wann tod
  if ((Guy.Resource[GESUNDHEIT] <= 0) && (Guy.Aktion !== AKTOD) &&
    (Guy.Aktion !== AKTAGENDE) && (Spielzustand === GAME_PLAY)) {
    gameData.guy.active = false;
    Guy.AkNummer = 0;
    Guy.Aktion = AKTOD;
  }
}

const GetKachel = (PosX, PosY) => {
  let x, y;

  for (y = 0; y < MAXYKACH; y++)
    for (x = 0; x < MAXXKACH; x++) {    //Die in Betracht kommenden Kacheln rausfinden
      const tile = gameData.terrain[x][y];
      if ((PosX > tile.position.x) && (PosX < tile.position.x + KXPIXEL) &&
        (PosY > tile.position.y) && (PosY < tile.position.y + KYPIXEL)) {
        const tileEdge = tileEdges[tile.type];
        if ((InDreieck(PosX, PosY,
          tile.position.x + tileEdge.left.x,
          tile.position.y + tileEdge.left.y,
          tile.position.x + tileEdge.top.x,
          tile.position.y + tileEdge.top.y,
          tile.position.x + tileEdge.bottom.x,
          tile.position.y + tileEdge.bottom.y)) ||
          (InDreieck(PosX, PosY,
            tile.position.x + tileEdge.right.x,
            tile.position.y + tileEdge.right.y,
            tile.position.x + tileEdge.top.x,
            tile.position.y + tileEdge.top.y,
            tile.position.x + tileEdge.bottom.x,
            tile.position.y + tileEdge.bottom.y))) {
          return { x, y };
        }
      }
    }
  return null;
}

const MakeRohString = (x, y, Objekt) => {
  let TmpString;
  let keinRohstoff;
  let i;

  RohString = '';
  keinRohstoff = true;
  if (Objekt === -1) {
    for (i = 0; i < BILDANZ; i++) {
      if (gameData.terrain[x][y].Rohstoff[i] !== 0) keinRohstoff = false;
    }
  } else {
    for (i = 0; i < BILDANZ; i++) {
      if (Bmp[Objekt].Rohstoff[i] !== 0) keinRohstoff = false;
    }
  }
  if (keinRohstoff) return;
  RohString += ': ';
  for (i = 0; i < BILDANZ; i++) {
    if (Objekt === -1) {
      if (gameData.terrain[x][y].Rohstoff[i] === 0) continue;
    } else {
      if (Bmp[Objekt].Rohstoff[i] === 0) continue;
    }
    RohString += ' ';
    switch (i) {
      case ROHAST:
        TmpString = texts.AST;
        break;
      case ROHSTEIN:
        TmpString = texts.STEIN;
        break;
      case ROHBLATT:
        TmpString = texts.BLATT;
        break;
      case ROHLIANE:
        TmpString = texts.LIANE;
        break;
      case ROHSTAMM:
        TmpString = texts.STAMM;
        break;
    }
    RohString += TmpString;
    RohString += '=';
    if (Objekt === -1) TmpString = gameData.terrain[x][y].Rohstoff[i];
    else TmpString = Bmp[Objekt].Rohstoff[i];
    RohString += TmpString;
  }
}

const MouseInSpielflaeche = (Button, Push, xDiff, yDiff) => {
  let Erg; //Die angeklickte Kachel
  let Text = ''; //Text für Infoleiste
  let TextTmp = ''; //Text für Infoleiste

  //Info anzeigen
  Erg = GetKachel((MousePosition.x + gameData.camera.x), (MousePosition.y + gameData.camera.y));
  if (Erg && gameData.terrain[Erg.x][Erg.y].discovered) {
    const tile = gameData.terrain[Erg.x][Erg.y];
    switch (tile.ground) {
      case grounds.GRASS:
        Text = texts.GROUND_GRASS;
        break;
      case grounds.SEA:
        Text = texts.GROUND_SEA;
        break;
      case grounds.BEACH:
        Text = texts.GROUND_BEACH;
        break;
      case grounds.QUICKSAND:
        Text = texts.GROUND_QUICKSAND;
        break;
      case grounds.WETLAND:
        Text = texts.GROUND_WETLAND;
        break;
      default:
        Text = '?';
    }
    if ((tile.Objekt !== -1 || tile.object) && (tile.object?.sprite !== spriteTypes.WAVES)) {
      Text += ' ' + texts.MIT + ' ';

      if (isNormalTree(tile.object))
        TextTmp = texts.BAUMTEXT;
      else if (
        isRiver(tile.object) ||
        ((tile.Objekt >= SCHLEUSE1) && (tile.Objekt <= SCHLEUSE6))
      )
        TextTmp = texts.FLUSSTEXT;
      else if (tile.object?.sprite === spriteTypes.BUSH)
        TextTmp = texts.BUSCHTEXT;
      else if (tile.Objekt === ZELT)
        TextTmp = texts.ZELTTEXT;
      else if (tile.Objekt === FELD)
        TextTmp = texts.FELDTEXT;
      else if (tile.Objekt === BOOT)
        TextTmp = texts.BOOTTEXT;
      else if (tile.Objekt === ROHR)
        TextTmp = texts.ROHRTEXT;
      else if (tile.Objekt === SOS)
        TextTmp = texts.SOSTEXT;
      else if (tile.Objekt === HAUS1)
        TextTmp = texts.HAUS1TEXT;
      else if (tile.Objekt === HAUS2)
        TextTmp = texts.HAUS2TEXT;
      else if (tile.Objekt === HAUS3)
        TextTmp = texts.HAUS3TEXT;
      else if (tile.object?.sprite === spriteTypes.BIG_TREE)
        TextTmp = texts.BAUMGROSSTEXT;
      else if (tile.Objekt === FEUERSTELLE)
        TextTmp = texts.FEUERSTELLETEXT;
      else if (tile.Objekt === FEUER)
        TextTmp = texts.FEUERTEXT;
      else if ((tile.object?.sprite === spriteTypes.SHIP_WRECK) || (tile.object?.sprite === spriteTypes.PIRATE_WRECK))
        TextTmp = texts.WRACKTEXT;
      Text += TextTmp;

      if ((tile.Objekt >= FELD) &&
        (tile.Objekt <= FEUERSTELLE)) {
        //Baufortschrittanzeigen
        Text += ' (';
        TextTmp = Math.floor((tile.AkNummer * 100) / Bmp[tile.Objekt].AkAnzahl);
        Text += TextTmp + '%)';
        //benötigte Rohstoffe anzeigen
        MakeRohString(Erg.x, Erg.y, -1);
        Text += RohString;
      }

    }
    TextBereich[TXTTEXTFELD].Aktiv = true;
    DrawString(Text, TextBereich[TXTTEXTFELD].rcText.left,
      TextBereich[TXTTEXTFELD].rcText.top, 2);
  }

  //rechte Maustastescrollen
  if ((Button === 1) && (Push === 0)) {
    gameData.camera.x += xDiff;
    gameData.camera.y += yDiff;
    CursorTyp = CURICHTUNG;
  }

  //Wenn Maustaste gedrückt wird
  if ((Button === 0) && (Push === 1)) {
    if (Erg &&
      (gameData.terrain[Erg.x][Erg.y].discovered) && !gameData.guy.active &&
      ((Erg.x !== gameData.guy.tile.x) || (Erg.y !== gameData.guy.tile.y)) &&
      (Erg.x > 0) && (Erg.x < MAXXKACH - 1) &&
      (Erg.y > 0) && (Erg.y < MAXYKACH - 1)) {

      console.log(gameData.terrain[Erg.x][Erg.y]);
      //Klicksound abspielen
      PlaySound(WAVKLICK2, 100);
      if (gameData.guy.route.length && 
        (Erg.x === gameData.guy.route[gameData.guy.route.length - 1].x) && 
        (Erg.y === gameData.guy.route[gameData.guy.route.length - 1].y)) {
        Bmp[BUTTSTOP].Phase = 0;
        gameData.guy.active = true;
      } else {
        gameData.guy.route = findRoute(gameData, Erg);
      }
    } else PlaySound(WAVKLICK, 100);
  }
}

const ButtAniAus = () => {
  let i;

  for (i = BUTTGITTER; i <= BUTTDESTROY; i++) {
    Bmp[i].Animation = false;
  }
}

const MouseInPanel = (Button, Push) => {
  let mx, my, i;  //Mauskoordinaten in Minimap

  //wenn die Maus in der Minimap ist .
  if ((InRect(MousePosition.x, MousePosition.y, rcKarte)) && (Button === 0) && (Push !== -1)) {
    mx = MousePosition.x - rcKarte.left;
    my = MousePosition.y - rcKarte.top;
    gameData.camera.x = Math.floor(((KXPIXEL / 4) * (mx - my) + MAXXKACH * KXPIXEL / 2) - gameData.camera.width / 2);
    gameData.camera.y = Math.floor(((KXPIXEL / 7) * (my + mx)) - gameData.camera.height / 2);
  } else if (InRect(MousePosition.x, MousePosition.y, Bmp[BUTTGITTER].rcDes)) {
    if (gameData.options.grid) DrawText(texts.GITTERAUS, TXTTEXTFELD, 2);
    else DrawText(texts.GITTERAN, TXTTEXTFELD, 2);

    if ((Button === 0) && (Push === 1)) {
      PlaySound(WAVKLICK2, 100);
      gameData.options.grid = !gameData.options.grid;
    }
  } else if (InRect(MousePosition.x, MousePosition.y, Bmp[BUTTSOUND].rcDes)) {
    if (audio.isRunning()) DrawText(texts.SOUNDAUS, TXTTEXTFELD, 2);
    else DrawText(texts.SOUNDAN, TXTTEXTFELD, 2);
    
    if ((Button === 0) && (Push === 1)) {
      if (audio.isRunning()) {
        audio.suspend();
      } else {
        audio.resume();
        PlaySound(WAVKLICK2, 100);
      } 
    }
  } else if (InRect(MousePosition.x, MousePosition.y, Bmp[BUTTBEENDEN].rcDes)) {
    DrawText(texts.BEENDEN, TXTTEXTFELD, 2);
    Bmp[BUTTBEENDEN].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      PlaySound(WAVKLICK2, 100);
      Guy.AkNummer = 0;
      gameData.guy.active = false;
      Guy.Aktion = AKSPIELVERLASSEN;
    }
  } else if (InRect(MousePosition.x, MousePosition.y, Bmp[BUTTNEU].rcDes)) {
    DrawText(texts.NEU, TXTTEXTFELD, 2);
    Bmp[BUTTNEU].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      PlaySound(WAVKLICK2, 100);
      Guy.AkNummer = 0;
      gameData.guy.active = false;
      Guy.Aktion = AKNEUBEGINNEN;
    }
  } else if (InRect(MousePosition.x, MousePosition.y, Bmp[BUTTTAGNEU].rcDes)) {
    DrawText(texts.TAGNEU2, TXTTEXTFELD, 2);
    Bmp[BUTTTAGNEU].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      PlaySound(WAVKLICK2, 100);
      Guy.AkNummer = 0;
      gameData.guy.active = false;
      Guy.Aktion = AKTAGNEUBEGINNEN;
    }
  } else if (InRect(MousePosition.x, MousePosition.y, Bmp[BUTTAKTION].rcDes)) {
    if (HauptMenue === MEAKTION) DrawText(texts.MEAKTIONZU, TXTTEXTFELD, 2);
    else DrawText(texts.MEAKTIONAUF, TXTTEXTFELD, 2);
    Bmp[BUTTAKTION].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      PlaySound(WAVKLICK2, 100);
      if (HauptMenue === MEAKTION) HauptMenue = MEKEINS;
      else HauptMenue = MEAKTION;
    }
  } else if (InRect(MousePosition.x, MousePosition.y, Bmp[BUTTBAUEN].rcDes) &&
    (Bmp[BUTTBAUEN].Phase !== -1)) {
    if (HauptMenue === MEBAUEN) DrawText(texts.MEBAUENZU, TXTTEXTFELD, 2);
    else DrawText(texts.MEBAUENAUF, TXTTEXTFELD, 2);
    Bmp[BUTTBAUEN].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      PlaySound(WAVKLICK2, 100);
      if (HauptMenue === MEBAUEN) HauptMenue = MEKEINS;
      else HauptMenue = MEBAUEN;
    }
  } else if (InRect(MousePosition.x, MousePosition.y, Bmp[BUTTINVENTAR].rcDes)) {
    if (HauptMenue === MEINVENTAR) DrawText(texts.MEINVENTARZU, TXTTEXTFELD, 2);
    else DrawText(texts.MEINVENTARAUF, TXTTEXTFELD, 2);
    Bmp[BUTTINVENTAR].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      PlaySound(WAVKLICK2, 100);
      if (HauptMenue === MEINVENTAR) HauptMenue = MEKEINS;
      else HauptMenue = MEINVENTAR;
    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[BUTTWEITER].rcDes)) &&
    (Bmp[BUTTWEITER].Phase !== -1)) {
    DrawText(texts.WEITER, TXTTEXTFELD, 2);

    Bmp[BUTTWEITER].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      PlaySound(WAVKLICK2, 100);
      Bmp[BUTTSTOP].Phase = 0;
      gameData.guy.storedPosition = { ...gameData.guy.position };
      goTo(gameData, gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].GPosAlt);
      switch (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt) {
        case ZELT:
          Guy.Aktion = AKZELT;
          break;
        case FELD:
          Guy.Aktion = AKFELD;
          break;
        case BOOT:
          Guy.Aktion = AKBOOT;
          break;
        case ROHR:
          Guy.Aktion = AKROHR;
          break;
        case SOS:
          Guy.Aktion = AKSOS;
          break;
        case HAUS1:
          Guy.Aktion = AKHAUS1;
          break;
        case HAUS2:
          Guy.Aktion = AKHAUS2;
          break;
        case HAUS3:
          Guy.Aktion = AKHAUS3;
          break;
        case FEUERSTELLE:
          Guy.Aktion = AKFEUERSTELLE;
          break;
      }
    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[BUTTSTOP].rcDes)) &&
    (Bmp[BUTTSTOP].Phase !== -1)) {
    DrawText(texts.STOP, TXTTEXTFELD, 2);

    Bmp[BUTTSTOP].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      PlaySound(WAVKLICK2, 100);
      Guy.AkNummer = 0;
      Guy.Aktion = AKABBRUCH;
      Bmp[BUTTSTOP].Phase = -1;
    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[BUTTABLEGEN].rcDes)) &&
    (Bmp[BUTTABLEGEN].Phase !== -1)) {
    DrawText(texts.BEGINNABLEGEN, TXTTEXTFELD, 2);
    Bmp[BUTTABLEGEN].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      PlaySound(WAVKLICK2, 100);
      Guy.AkNummer = 0;
      if (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].ground !== grounds.SEA) Guy.Aktion = AKABLEGEN;
      else Guy.Aktion = AKANLEGEN;

    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[BUTTSUCHEN].rcDes)) &&
    (HauptMenue === MEAKTION) && (Bmp[BUTTSUCHEN].Phase !== -1)) {
    DrawText(texts.BEGINNSUCHEN, TXTTEXTFELD, 2);
    Bmp[BUTTSUCHEN].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      PlaySound(WAVKLICK2, 100);
      Guy.AkNummer = 0;
      Guy.Aktion = AKSUCHEN;
    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[BUTTESSEN].rcDes)) &&
    (HauptMenue === MEAKTION) && (Bmp[BUTTESSEN].Phase !== -1)) {
    DrawText(texts.BEGINNESSEN, TXTTEXTFELD, 2);
    Bmp[BUTTESSEN].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      PlaySound(WAVKLICK2, 100);
      Guy.AkNummer = 0;
      if (isEatable(gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].object) ||
        (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt === FELD &&
         gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Phase === Bmp[gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt].Anzahl - 1)) {
        Guy.Aktion = AKESSEN;
      }else if (
        isDrinkable(gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].object) ||
        (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt >= SCHLEUSE1 && gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt <= SCHLEUSE6) ||
        (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt === ROHR && gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Phase === 1)
      )
        Guy.Aktion = AKTRINKEN;
      else PapierText = DrawText(texts.KEINESSENTRINKEN, TXTPAPIER, 1);
    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[BUTTSCHLAFEN].rcDes)) &&
    (HauptMenue === MEAKTION) && (Bmp[BUTTSCHLAFEN].Phase !== -1)) {
    DrawText(texts.BEGINNSCHLAFEN, TXTTEXTFELD, 2);
    Bmp[BUTTSCHLAFEN].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      PlaySound(WAVKLICK2, 100);
      if (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].ground !== grounds.SEA) {
        Guy.AkNummer = 0;
        Guy.Aktion = AKSCHLAFEN;
      } else PapierText = DrawText(texts.NICHTAUFWASSERSCHLAFEN, TXTPAPIER, 1);
    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[BUTTFAELLEN].rcDes)) &&
    (HauptMenue === MEAKTION) && (Bmp[BUTTFAELLEN].Phase !== -1)) {
    DrawText(texts.BEGINNFAELLEN, TXTTEXTFELD, 2);
    Bmp[BUTTFAELLEN].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      PlaySound(WAVKLICK2, 100);
      Guy.AkNummer = 0;
      if (Guy.Inventar[ROHSTAMM] <= 10) {
        if (isNormalTree(gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].object)) {
          Guy.Aktion = AKFAELLEN;
        } else if (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].object?.sprite === spriteTypes.BIG_TREE ||
          (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt >= HAUS1 &&
            gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt <= HAUS3))
          PapierText = DrawText(texts.BAUMZUGROSS, TXTPAPIER, 1);
        else PapierText = DrawText(texts.KEINBAUM, TXTPAPIER, 1);
      } else PapierText = DrawText(texts.ROHSTAMMZUVIEL, TXTPAPIER, 1);
    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[BUTTANGELN].rcDes)) &&
    (HauptMenue === MEAKTION) && (Bmp[BUTTANGELN].Phase !== -1)) {
    DrawText(texts.BEGINNANGELN, TXTTEXTFELD, 2);
    Bmp[BUTTANGELN].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      PlaySound(WAVKLICK2, 100);
      Guy.AkNummer = 0;
      if (isFishable(gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y]) ||
        (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt >= SCHLEUSE1 && gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt <= SCHLEUSE6)
      ) Guy.Aktion = AKANGELN;
      else PapierText = DrawText(texts.KEINWASSER, TXTPAPIER, 1);
    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[BUTTANZUENDEN].rcDes)) &&
    (HauptMenue === MEAKTION) && (Bmp[BUTTANZUENDEN].Phase !== -1)) {
    DrawText(texts.BEGINNANZUENDEN, TXTTEXTFELD, 2);
    Bmp[BUTTANZUENDEN].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      PlaySound(WAVKLICK2, 100);
      Guy.AkNummer = 0;
      if ((gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt === FEUERSTELLE) &&
        (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Phase < Bmp[gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt].Anzahl))
        Guy.Aktion = AKANZUENDEN;
      else PapierText = DrawText(texts.KEINEFEUERST, TXTPAPIER, 1);
    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[BUTTAUSSCHAU].rcDes)) &&
    (HauptMenue === MEAKTION) && (Bmp[BUTTAUSSCHAU].Phase !== -1)) {
    DrawText(texts.BEGINNAUSSCHAU, TXTTEXTFELD, 2);
    Bmp[BUTTAUSSCHAU].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      PlaySound(WAVKLICK2, 100);
      Guy.AkNummer = 0;
      if (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].ground !== grounds.SEA) {
        Guy.AkNummer = 0;
        Guy.Aktion = AKAUSSCHAU;
      } else PapierText = DrawText(texts.WELLENZUHOCH, TXTPAPIER, 1);
    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[BUTTSCHATZ].rcDes)) &&
    (HauptMenue === MEAKTION) && (Bmp[BUTTSCHATZ].Phase !== -1)) {
    DrawText(texts.BEGINNSCHATZ, TXTTEXTFELD, 2);
    Bmp[BUTTSCHATZ].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      PlaySound(WAVKLICK2, 100);
      Guy.AkNummer = 0;
      if (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].ground !== grounds.SEA &&
        gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].type === tileTypes.FLAT &&
        gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt === -1 &&
        !gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].object) {
        Guy.AkNummer = 0;
        Guy.Aktion = AKSCHATZ;
      } else PapierText = DrawText(texts.GRABENBEDINGUNGEN, TXTPAPIER, 1);
    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[BUTTSCHLEUDER].rcDes)) &&
    (HauptMenue === MEAKTION) && (Bmp[BUTTSCHLEUDER].Phase !== -1)) {
    DrawText(texts.BEGINNSCHLEUDER, TXTTEXTFELD, 2);
    Bmp[BUTTSCHLEUDER].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      PlaySound(WAVKLICK2, 100);
      Guy.AkNummer = 0;
      if (isNormalTree(gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].object)) {
        Guy.AkNummer = 0;
        Guy.Aktion = AKSCHLEUDER;
      } else if ((gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].object?.sprite === spriteTypes.BIG_TREE) ||
        ((gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt >= HAUS1) &&
          (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt <= HAUS3)))
        PapierText = DrawText(texts.BAUMZUGROSS, TXTPAPIER, 1);
      else PapierText = DrawText(texts.KEINVOGEL, TXTPAPIER, 1);
    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[BUTTSCHATZKARTE].rcDes)) &&
    (HauptMenue === MEAKTION) && (Bmp[BUTTSCHATZKARTE].Phase !== -1)) {
    DrawText(texts.BEGINNSCHATZKARTE, TXTTEXTFELD, 2);
    Bmp[BUTTSCHATZKARTE].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      PlaySound(WAVKLICK2, 100);
      DrawSchatzkarte();
    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[BUTTFELD].rcDes)) &&
    (HauptMenue === MEBAUEN) && (Bmp[BUTTFELD].Phase !== -1)) {
    StdString = texts.BEGINNFELD;
    MakeRohString(-1, -1, FELD);
    StdString += RohString;
    TextBereich[TXTTEXTFELD].Aktiv = true;
    DrawString(StdString, TextBereich[TXTTEXTFELD].rcText.left,
      TextBereich[TXTTEXTFELD].rcText.top, 2);

    Bmp[BUTTFELD].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      PlaySound(WAVKLICK2, 100);
      if (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt === -1 &&
        !gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].object &&
        gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].type === tileTypes.FLAT &&
        gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].ground === grounds.WETLAND) {
        gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].AkNummer = 0;
        Bmp[BUTTSTOP].Phase = 0;
        Guy.Aktion = AKFELD;
      } else if ((Bmp[BUTTWEITER].Phase !== -1) && (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt === FELD)) {
        Bmp[BUTTSTOP].Phase = 0;
        gameData.guy.storedPosition = { ...gameData.guy.position };
        goTo(gameData, gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].GPosAlt);
        Guy.Aktion = AKFELD;
      } else PapierText = DrawText(texts.FELDBEDINGUNGEN, TXTPAPIER, 1);
    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[BUTTZELT].rcDes)) &&
    (HauptMenue === MEBAUEN) && (Bmp[BUTTZELT].Phase !== -1)) {
    StdString = texts.BEGINNZELT;
    MakeRohString(-1, -1, ZELT);
    StdString += RohString;
    TextBereich[TXTTEXTFELD].Aktiv = true;
    DrawString(StdString, TextBereich[TXTTEXTFELD].rcText.left,
      TextBereich[TXTTEXTFELD].rcText.top, 2);

    Bmp[BUTTZELT].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      PlaySound(WAVKLICK2, 100);
      if (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt === -1 &&
        !gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].object &&
        gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].type === tileTypes.FLAT) {
        gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].AkNummer = 0;
        Bmp[BUTTSTOP].Phase = 0;
        Guy.Aktion = AKZELT;
      } else if ((Bmp[BUTTWEITER].Phase !== -1) &&
        (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt === ZELT)) {
        Bmp[BUTTSTOP].Phase = 0;
        gameData.guy.storedPosition = { ...gameData.guy.position };
        goTo(gameData, gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].GPosAlt);
        Guy.Aktion = AKZELT;
      } else PapierText = DrawText(texts.ZELTBEDINGUNGEN, TXTPAPIER, 1);
    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[BUTTBOOT].rcDes)) &&
    (HauptMenue === MEBAUEN) && (Bmp[BUTTBOOT].Phase !== -1)) {
    StdString = texts.BEGINNBOOT;
    MakeRohString(-1, -1, BOOT);
    StdString += RohString;
    TextBereich[TXTTEXTFELD].Aktiv = true;
    DrawString(StdString, TextBereich[TXTTEXTFELD].rcText.left,
      TextBereich[TXTTEXTFELD].rcText.top, 2);

    Bmp[BUTTBOOT].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      PlaySound(WAVKLICK2, 100);
      if ((gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt === -1) &&
        !gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].object &&
        (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].ground === grounds.BEACH) &&
        ((gameData.terrain[gameData.guy.tile.x - 1][gameData.guy.tile.y].ground === grounds.SEA) ||
          (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y - 1].ground === grounds.SEA) ||
          (gameData.terrain[gameData.guy.tile.x + 1][gameData.guy.tile.y].ground === grounds.SEA) ||
          (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y + 1].ground === grounds.SEA))) {
        gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].AkNummer = 0;
        Bmp[BUTTSTOP].Phase = 0;
        Guy.Aktion = AKBOOT;
      } else if ((Bmp[BUTTWEITER].Phase !== -1) &&
        (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt === BOOT)) {
        Bmp[BUTTSTOP].Phase = 0;
        gameData.guy.storedPosition = { ...gameData.guy.position };
        goTo(gameData, gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].GPosAlt);
        Guy.Aktion = AKBOOT;
      } else PapierText = DrawText(texts.BOOTBEDINGUNGEN, TXTPAPIER, 1);
    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[BUTTROHR].rcDes)) &&
    (HauptMenue === MEBAUEN) && (Bmp[BUTTROHR].Phase !== -1)) {
    StdString = texts.BEGINNROHR;
    MakeRohString(-1, -1, ROHR);
    StdString += RohString;
    TextBereich[TXTTEXTFELD].Aktiv = true;
    DrawString(StdString, TextBereich[TXTTEXTFELD].rcText.left,
      TextBereich[TXTTEXTFELD].rcText.top, 2);

    Bmp[BUTTROHR].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      PlaySound(WAVKLICK2, 100);
      if (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt === -1 &&
        !gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].object &&
        (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].type === tileTypes.FLAT)) {
        gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].AkNummer = 0;
        Bmp[BUTTSTOP].Phase = 0;
        Guy.Aktion = AKROHR;
      } else if ((Bmp[BUTTWEITER].Phase !== -1) &&
        (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt === ROHR)) {
        Bmp[BUTTSTOP].Phase = 0;
        gameData.guy.storedPosition = { ...gameData.guy.position };
        goTo(gameData, gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].GPosAlt);
        Guy.Aktion = AKROHR;
      } else PapierText = DrawText(texts.ROHRBEDINGUNGEN, TXTPAPIER, 1);
    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[BUTTSOS].rcDes)) &&
    (HauptMenue === MEBAUEN) && (Bmp[BUTTSOS].Phase !== -1)) {
    StdString = texts.BEGINNSOS;
    MakeRohString(-1, -1, SOS);
    StdString += RohString;
    TextBereich[TXTTEXTFELD].Aktiv = true;
    DrawString(StdString, TextBereich[TXTTEXTFELD].rcText.left,
      TextBereich[TXTTEXTFELD].rcText.top, 2);

    Bmp[BUTTSOS].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      PlaySound(WAVKLICK2, 100);
      if (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt === -1 &&
        !gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].object &&
        (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].type === tileTypes.FLAT)) {
        gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].AkNummer = 0;
        Bmp[BUTTSTOP].Phase = 0;
        Guy.Aktion = AKSOS;
      } else if ((Bmp[BUTTWEITER].Phase !== -1) &&
        (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt === SOS)) {
        Bmp[BUTTSTOP].Phase = 0;
        gameData.guy.storedPosition = { ...gameData.guy.position };
        goTo(gameData, gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].GPosAlt);
        Guy.Aktion = AKSOS;
      } else PapierText = DrawText(texts.SOSBEDINGUNGEN, TXTPAPIER, 1);
    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[BUTTHAUS1].rcDes)) &&
    (HauptMenue === MEBAUEN) && (Bmp[BUTTHAUS1].Phase !== -1)) {
    StdString = texts.BEGINNHAUS1;
    MakeRohString(-1, -1, HAUS1);
    StdString += RohString;
    TextBereich[TXTTEXTFELD].Aktiv = true;
    DrawString(StdString, TextBereich[TXTTEXTFELD].rcText.left,
      TextBereich[TXTTEXTFELD].rcText.top, 2);

    Bmp[BUTTHAUS1].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      PlaySound(WAVKLICK2, 100);
      if (isNormalTree(gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].object))
        PapierText = DrawText(texts.BAUMZUKLEIN, TXTPAPIER, 1);
      else if (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].object?.sprite === spriteTypes.BIG_TREE) {
        gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].AkNummer = 0;
        Bmp[BUTTSTOP].Phase = 0;
        Guy.Aktion = AKHAUS1;
      } else if ((Bmp[BUTTWEITER].Phase !== -1) &&
        (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt === HAUS1)) {
        Bmp[BUTTSTOP].Phase = 0;
        gameData.guy.storedPosition = { ...gameData.guy.position };
        goTo(gameData, gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].GPosAlt);
        Guy.Aktion = AKHAUS1;
      } else PapierText = DrawText(texts.GEGENDNICHT, TXTPAPIER, 1);
    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[BUTTHAUS2].rcDes)) &&
    (HauptMenue === MEBAUEN) && (Bmp[BUTTHAUS2].Phase !== -1)) {
    StdString = texts.BEGINNHAUS2;
    MakeRohString(-1, -1, HAUS2);
    StdString += RohString;
    TextBereich[TXTTEXTFELD].Aktiv = true;
    DrawString(StdString, TextBereich[TXTTEXTFELD].rcText.left,
      TextBereich[TXTTEXTFELD].rcText.top, 2);

    Bmp[BUTTHAUS2].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      PlaySound(WAVKLICK2, 100);
      if (isNormalTree(gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].object))
        PapierText = DrawText(texts.BAUMZUKLEIN, TXTPAPIER, 1);
      else if (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].object?.sprite === spriteTypes.BIG_TREE)
        PapierText = DrawText(texts.NICHTOHNELEITER, TXTPAPIER, 1);
      else if (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt === HAUS1) {
        gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].AkNummer = 0;
        Bmp[BUTTSTOP].Phase = 0;
        Guy.Aktion = AKHAUS2;
      } else if ((Bmp[BUTTWEITER].Phase !== -1) &&
        (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt === HAUS2)) {
        Bmp[BUTTSTOP].Phase = 0;
        gameData.guy.storedPosition = { ...gameData.guy.position };
        goTo(gameData, gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].GPosAlt);
        Guy.Aktion = AKHAUS2;
      } else PapierText = DrawText(texts.GEGENDNICHT, TXTPAPIER, 1);
    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[BUTTHAUS3].rcDes)) &&
    (HauptMenue === MEBAUEN) && (Bmp[BUTTHAUS3].Phase !== -1)) {
    StdString = texts.BEGINNHAUS3;
    MakeRohString(-1, -1, HAUS3);
    StdString += RohString;
    TextBereich[TXTTEXTFELD].Aktiv = true;
    DrawString(StdString, TextBereich[TXTTEXTFELD].rcText.left,
      TextBereich[TXTTEXTFELD].rcText.top, 2);

    Bmp[BUTTHAUS3].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      PlaySound(WAVKLICK2, 100);
      if (isNormalTree(gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].object))
        PapierText = DrawText(texts.BAUMZUKLEIN, TXTPAPIER, 1);
      else if (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].object?.sprite === spriteTypes.BIG_TREE ||
        gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt === HAUS1)
        PapierText = DrawText(texts.NICHTOHNEPLATTFORM, TXTPAPIER, 1);
      else if (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt === HAUS2) {
        gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].AkNummer = 0;
        Bmp[BUTTSTOP].Phase = 0;
        Guy.Aktion = AKHAUS3;
      } else if ((Bmp[BUTTWEITER].Phase !== -1) &&
        (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt === HAUS3)) {
        Bmp[BUTTSTOP].Phase = 0;
        gameData.guy.storedPosition = { ...gameData.guy.position };
        goTo(gameData, gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].GPosAlt);
        Guy.Aktion = AKHAUS3;
      } else PapierText = DrawText(texts.GEGENDNICHT, TXTPAPIER, 1);
    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[BUTTFEUERST].rcDes)) &&
    (HauptMenue === MEBAUEN) && (Bmp[BUTTFEUERST].Phase !== -1)) {
    StdString = texts.BEGINNFEUERSTELLE;
    MakeRohString(-1, -1, FEUERSTELLE);
    StdString += RohString;
    TextBereich[TXTTEXTFELD].Aktiv = true;
    DrawString(StdString, TextBereich[TXTTEXTFELD].rcText.left,
      TextBereich[TXTTEXTFELD].rcText.top, 2);

    Bmp[BUTTFEUERST].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      PlaySound(WAVKLICK2, 100);
      if (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt === -1 &&
        !gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].object &&
        (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].type === tileTypes.FLAT)) {
        gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].AkNummer = 0;
        Bmp[BUTTSTOP].Phase = 0;
        Guy.Aktion = AKFEUERSTELLE;
      } else if ((Bmp[BUTTWEITER].Phase !== -1) &&
        (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt === FEUERSTELLE)) {
        Bmp[BUTTSTOP].Phase = 0;
        gameData.guy.storedPosition = { ...gameData.guy.position };
        goTo(gameData, gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].GPosAlt);
        Guy.Aktion = AKFEUERSTELLE;
      } else PapierText = DrawText(texts.FEUERSTELLENBEDINGUNGEN, TXTPAPIER, 1);
    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[BUTTDESTROY].rcDes)) &&
    (HauptMenue === MEBAUEN) && (Bmp[BUTTDESTROY].Phase !== -1)) {
    DrawText(texts.BEGINNDESTROY, TXTTEXTFELD, 2);
    Bmp[BUTTDESTROY].Animation = true;
    if ((Button === 0) && (Push === 1)) {
      PlaySound(WAVKLICK2, 100);
      if ((gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt >= FELD) &&
        (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt <= FEUERSTELLE)) {
        Guy.AkNummer = 0;
        Guy.Aktion = AKDESTROY;
      } else PapierText = DrawText(texts.KEINBAUWERK, TXTPAPIER, 1);
    }
  } else if ((InRect(MousePosition.x, MousePosition.y, Bmp[INVPAPIER].rcDes)) && (HauptMenue === MEINVENTAR)) {
    for (i = ROHAST; i <= ROHSCHLEUDER; i++) {
      if (InRect(MousePosition.x, MousePosition.y, Bmp[i].rcDes) && (Guy.Inventar[i] > 0)) {
        if ((Button === 0) && (Push === 1)) {
          if (TwoClicks === -1) {
            CursorTyp = i;
            TwoClicks = i;
          } else CheckBenutze(i);
        }
        switch (i) {
          case ROHAST:
            DrawText(texts.AST, TXTTEXTFELD, 2);
            break;
          case ROHSTEIN:
            DrawText(texts.STEIN, TXTTEXTFELD, 2);
            break;
          case ROHAXT:
            DrawText(texts.AXT, TXTTEXTFELD, 2);
            break;
          case ROHBLATT:
            DrawText(texts.BLATT, TXTTEXTFELD, 2);
            break;
          case ROHSTAMM:
            DrawText(texts.STAMM, TXTTEXTFELD, 2);
            break;
          case ROHEGGE:
            DrawText(texts.EGGE, TXTTEXTFELD, 2);
            break;
          case ROHLIANE:
            DrawText(texts.LIANE, TXTTEXTFELD, 2);
            break;
          case ROHANGEL:
            DrawText(texts.ANGEL, TXTTEXTFELD, 2);
            break;
          case ROHHAMMER:
            DrawText(texts.HAMMER, TXTTEXTFELD, 2);
            break;
          case ROHFERNROHR:
            DrawText(texts.FERNROHR, TXTTEXTFELD, 2);
            break;
          case ROHSTREICHHOLZ:
            DrawText(texts.STREICHHOLZ, TXTTEXTFELD, 2);
            break;
          case ROHSCHAUFEL:
            DrawText(texts.SCHAUFEL, TXTTEXTFELD, 2);
            break;
          case ROHKARTE:
            DrawText(texts.KARTE, TXTTEXTFELD, 2);
            break;
          case ROHSCHLEUDER:
            DrawText(texts.SCHLEUDER, TXTTEXTFELD, 2);
            break;
        }

        break;
      }
    }
  } else if (InRect(MousePosition.x, MousePosition.y, TextBereich[TXTTAGESZEIT].rcText))
    DrawText(texts.SOSPAET, TXTTEXTFELD, 2);
  else if (InRect(MousePosition.x, MousePosition.y, TextBereich[TXTCHANCE].rcText))
    DrawText(texts.CHANCETEXT, TXTTEXTFELD, 2);
  else //TwoClicks löschen
  {
    if ((Button === 0) && (Push === 1)) PlaySound(WAVKLICK, 100);
    TwoClicks = -1;
  }
}
const InDreieck = (x, y, x0, y0, x1, y1, x3, y3) => {
  const c = (x - x1) / (x0 - x1);
  if (c < 0) return false;
  const d = ((y - y3) * (x0 - x1) - (x - x1) * (y0 - y3)) / ((y1 - y3) * (x0 - x1));
  if (d < 0) return false;
  const b = ((y - y0) * (x1 - x0) - (x - x0) * (y1 - y0)) / ((x1 - x0) * (y3 - y1));
  if (b < 0) return false;
  const a = (x - x0) / (x1 - x0) - b;
  return a >= 0;
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
    fillCanvas(rcRectdes, 70, 70, 100, 1, primaryCanvasContext);
    clearCanvas(rcRectdes, textCanvasContext);

    //Landschaft erzeugen
    DrawString('Erschaffe Landschaft...', 5, 5, 2, primaryCanvasContext);
    await new Promise(window.requestAnimationFrame);
    generateIsland(gameData.terrain);

    DrawString('Ueberflute Land...', 5, 35, 2, primaryCanvasContext);
    await new Promise(window.requestAnimationFrame);
    setGrounds(gameData.terrain);

    DrawString('Lege Fluss fest...', 5, 65, 2, primaryCanvasContext);
    await new Promise(window.requestAnimationFrame);
    addRiver(gameData.terrain);

    DrawString('Pflanze Baeume...', 5, 95, 2, primaryCanvasContext);
    await new Promise(window.requestAnimationFrame);
    addTrees(gameData.terrain);

    DrawString('Vergrabe Schatz...', 5, 125, 2, primaryCanvasContext);
    await new Promise(window.requestAnimationFrame);
    gameData.treasure = hideTreasure(gameData);
    addPirateWreck(gameData.terrain);
    
    for (let x = 0; x < MAXXKACH; x++) {
      for (let y = 0; y < MAXYKACH; y++) {
        const tile = gameData.terrain[x][y];
        tile.LaufZeit = tile.type === tileTypes.FLAT ? 1 : 2;
        tile.Objekt = -1;
        tile.ObPos = { x: 0, y: 0 };
        tile.Reverse = false;
        tile.Phase = -1;
        tile.AkNummer = 0;
        tile.GPosAlt = { x: 0, y: 0 };
        tile.Timer = 0;
        tile.Rohstoff = Array(BILDANZ).fill(0);
      }
    }

    //Guy Position
    gameData.guy.tile.x = 1;
    gameData.guy.tile.y = Math.floor(MAXYKACH / 2);
    const tile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];
    gameData.guy.position.x = tile.position.x + tileEdges[tile.type].center.x;
    gameData.guy.position.y = tile.position.y + tileEdges[tile.type].center.y;

    Chance = 0;

    Tag = 1;
    Stunden = 0;
    Minuten = 0;

    Spielzustand = GAME_INTRO;
    gameData.guy.active = false;
    Guy.Zustand = GUYSCHIFF;
    Guy.AkNummer = 0;
    Guy.Aktion = AKINTRO;
  }

  //SchriftSurface löschen
  rcRectdes.left = 0;
  rcRectdes.top = 0;
  rcRectdes.right = MAXX;
  rcRectdes.bottom = MAXY;
  clearCanvas(rcRectdes, textCanvasContext);

  drawTreasureMap(gameData);
  updateMinimap();

  Entdecken();
  gameData.guy.storedPosition = { ...gameData.guy.position };
}

const updateMinimap = () => {
  let x, y;

  //Die Kartehintergrundfarbe
  rcRectdes.left = 0;
  rcRectdes.top = 0;
  rcRectdes.right = 2 * MAXXKACH;
  rcRectdes.bottom = 2 * MAXYKACH;
  fillCanvas(rcRectdes, 247, 222, 191, 1, minimapCanvasContext);

  for (y = 0; y < MAXYKACH; y++)
    for (x = 0; x < MAXXKACH; x++) {
      if (!gameData.terrain[x][y].discovered) continue; //Nicht entdeckte Felder nicht malen
      //MiniMap zeichnen
      rcRectdes.left = 2 * x;
      rcRectdes.top = 2 * y;
      rcRectdes.right = rcRectdes.left + 2;
      rcRectdes.bottom = rcRectdes.top + 2;

      if (gameData.terrain[x][y].ground === grounds.SEA)
        fillCanvas(rcRectdes, 228, 207, 182, 1, minimapCanvasContext);
      else {
        if (gameData.terrain[x][y].ground === grounds.BEACH || gameData.terrain[x][y].ground === grounds.QUICKSAND)
          fillCanvas(rcRectdes, 112, 103, 93, 1, minimapCanvasContext);
        else
          //Land
          fillCanvas(rcRectdes, 139 + gameData.terrain[x][y].height * 20, 128 + gameData.terrain[x][y].height * 20, 115 + gameData.terrain[x][y].height * 20, 1, minimapCanvasContext);
      }
    }
}

const Zeige = () => {
  let i;
  let Stringsave1 = '';
  let Stringsave2 = ''; //Für die Zeitausgabe

  drawTerrain(gameData, gameData.camera, false, primaryCanvasContext);

  ZeichneObjekte();

  ZeichnePanel();

  //Die TagesZeit ausgeben
  Textloeschen(TXTTAGESZEIT);
  TextBereich[TXTTAGESZEIT].Aktiv = true;
  Stringsave1 = Stunden + 6;
  Stringsave2 = Minuten;
  StdString = '';
  if (Stunden + 6 < 10) StdString += '0';;
  StdString += Stringsave1;
  StdString += ':';
  if (Minuten < 10) StdString += '0';
  StdString += Stringsave2;
  DrawString(StdString, (TextBereich[TXTTAGESZEIT].rcText.left),
    (TextBereich[TXTTAGESZEIT].rcText.top), 2);

  if (PapierText !== -1) ZeichnePapier();

  //Die Textsurface blittenrcRectsrc
  for (i = 0; i < TEXTANZ; i++) {
    if (!TextBereich[i].Aktiv) continue; //Die nicht aktiven Felder auslassen
    rcRectsrc = { ...TextBereich[i].rcText };
    rcRectdes = { ...TextBereich[i].rcText };
    drawImage(textCanvasContext.canvas, primaryCanvasContext);
  }
  //Alles schwarz übermalen und nur das Papier mit Text anzeigen
  if (Nacht) {
    rcRectdes.left = 0;
    rcRectdes.top = 0;
    rcRectdes.right = MAXX;
    rcRectdes.bottom = MAXY;
    fillCanvas(rcRectdes, 0, 0, 0, 1, primaryCanvasContext);

    if (PapierText !== -1) {
      ZeichnePapier();
      rcRectsrc = { ...TextBereich[TXTPAPIER].rcText };
      rcRectdes = { ...TextBereich[TXTPAPIER].rcText };
      drawImage(textCanvasContext.canvas, primaryCanvasContext);
    }
    Fade(100, 0);
  }

  //Cursor
  if (CursorTyp === CUPFEIL) ZeichneBilder(MousePosition.x, MousePosition.y,
    CursorTyp, rcGesamt, false, -1);
  else ZeichneBilder(MousePosition.x - Bmp[CursorTyp].Breite / 2,
    MousePosition.y - Bmp[CursorTyp].Hoehe / 2,
    CursorTyp, rcGesamt, false, -1);

  if (Nacht) Fade(100, 0); //Das muß hier stehen, damit man die Textnachricht in der Nacht lesen kann

}

const ZeigeIntro = () => {
  drawTerrain(gameData, gameData.camera, false, primaryCanvasContext);

  ZeichneObjekte();
}

const ZeigeAbspann = () => {
  let z;

  PlaySound(WAVABSPANN, 100);

  rcRectdes.left = 0;
  rcRectdes.top = 0;
  rcRectdes.right = MAXX;
  rcRectdes.bottom = MAXY;
  fillCanvas(rcRectdes, 0, 0, 0, 1, primaryCanvasContext);

  if (AbspannZustand === 0) {
    ZeichneBilder(Math.floor(MAXX / 2 - Bmp[AbspannListe[AbspannNr][0].Bild].Breite / 2), 100,
      AbspannListe[AbspannNr][0].Bild, rcGesamt, false, -1);
    for (z = 1; z < 10; z++) {
      if (AbspannListe[AbspannNr][z].Aktiv)
        AbspannBlt(AbspannListe[AbspannNr][z].Bild,
          (100 * Math.sin(pi / MAXY * (Bmp[AbspannListe[AbspannNr][z].Bild].rcDes.top +
            Bmp[AbspannListe[AbspannNr][z].Bild].Hoehe / 2))));
    }
  } else if (AbspannZustand === 1) {
    rcRectsrc = { ...Bmp[AbspannNr].rcSrc };
    rcRectsrc.top += Bmp[AbspannNr].Phase * Bmp[AbspannNr].Hoehe;
    rcRectsrc.bottom = rcRectsrc.top + Bmp[AbspannNr].Hoehe;

    rcRectdes.left = Math.floor(MAXX / 2 - Bmp[AbspannNr].Breite * 10 / 2);
    rcRectdes.top = Math.floor(MAXY / 2 - Bmp[AbspannNr].Hoehe * 10 / 2);
    rcRectdes.right = rcRectdes.left + Bmp[AbspannNr].Breite * 10;
    rcRectdes.bottom = rcRectdes.top + Bmp[AbspannNr].Hoehe * 10;

    drawImage(Bmp[AbspannNr].Surface, primaryCanvasContext);
  }
}

const ZeigeLogo = () => {
  fillCanvas({ left: 0, top: 0, right: MAXX, bottom: MAXY }, 0, 0, 0, 1, primaryCanvasContext);

  rcRectsrc.left = 0;
  rcRectsrc.right = 500;
  rcRectsrc.top = 0;
  rcRectsrc.bottom = 500;
  rcRectdes.left = MAXX / 2 - 250;
  rcRectdes.right = MAXX / 2 + 250;
  rcRectdes.top = MAXY / 2 - 250;
  rcRectdes.bottom = MAXY / 2 + 250;

  drawImage(logoImage, primaryCanvasContext);

  PlaySound(WAVLOGO, 100);
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
  primaryCanvasContext.globalAlpha = Prozent / 100;
  drawImage(creditsImage, primaryCanvasContext);
  primaryCanvasContext.globalAlpha = 1;
}

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
            AbspannNr = GUYLINKS;
            AbspannZustand = 1;
            break;
          }
        }
      }
    }
  } else if (AbspannZustand === 1) {
    i = Math.floor(framesPerSecond / Bmp[AbspannNr].Geschwindigkeit);
    if (i < 1) i = 1;
    if (frame % i === 0) {
      Bmp[AbspannNr].Phase++;
      if (Bmp[AbspannNr].Phase >= Bmp[AbspannNr].Anzahl) {
        Bmp[AbspannNr].Phase = 0;
        AbspannNr++;
        if (AbspannNr > GUYSCHLEUDER) AbspannNr = GUYLINKS;
      }
    }
  }
}

const ZeichneBilder = (x, y, i, Ziel, Reverse, Frucht) => {
  let Phase;

  if (Frucht === -1) Phase = Bmp[i].Phase; else Phase = Math.floor(Frucht);
  rcRectsrc = { ...Bmp[i].rcSrc };
  if (!Reverse) {
    rcRectsrc.top += Math.floor(Phase * Bmp[i].Hoehe);
  } else {
    rcRectsrc.top = Math.floor(Bmp[i].rcSrc.top + (Bmp[i].Anzahl - 1) * Bmp[i].Hoehe - Phase * Bmp[i].Hoehe);
  }
  rcRectsrc.bottom = rcRectsrc.top + Bmp[i].Hoehe;
  rcRectdes.left = x;
  rcRectdes.top = y;
  rcRectdes.right = x + Bmp[i].Breite;
  rcRectdes.bottom = y + Bmp[i].Hoehe;
  CalcRect(Ziel);
  drawImage(Bmp[i].Surface, primaryCanvasContext);
}

const ZeichneObjekte = () => {
  let x, y;
  let Guyzeichnen;

  for (y = 0; y < MAXYKACH; y++)
    for (x = 0; x < MAXXKACH; x++) {

      Guyzeichnen = (gameData.guy.tile.x === x) && (gameData.guy.tile.y === y);

      //Die nichtsichbaren Kacheln (oder nicht betroffenen) ausfiltern
      if ((gameData.terrain[x][y].position.x <= gameData.camera.x - KXPIXEL ||
        gameData.terrain[x][y].position.x >= gameData.camera.x + gameData.camera.width + KXPIXEL ||
        gameData.terrain[x][y].position.y <= gameData.camera.y - KYPIXEL ||
        gameData.terrain[x][y].position.y >= gameData.camera.y + gameData.camera.height + KYPIXEL ||
        !gameData.terrain[x][y].discovered) &&
        !Guyzeichnen) {
        continue;
      }

      //Der Guy ist immer vor diesen Objekten
      if (isOnGround(gameData.terrain[x][y].object)) {
        //this happens in drawObject now
      } else if (gameData.terrain[x][y].Objekt > -1 &&
        (gameData.terrain[x][y].Objekt <= SCHLEUSE6
        || gameData.terrain[x][y].Objekt === FELD   
        || gameData.terrain[x][y].Objekt === ROHR
        || gameData.terrain[x][y].Objekt === SOS)) {
        //Sound abspielen
        if (((gameData.guy.tile.x - 1 <= x) && (x <= gameData.guy.tile.x + 1)) &&
          ((gameData.guy.tile.y - 1 <= y) && (y <= gameData.guy.tile.y + 1))) {
          if ((x === gameData.guy.tile.x) && (y === gameData.guy.tile.y))
            PlaySound(Bmp[gameData.terrain[x][y].Objekt].Sound, 100);
          else if (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt === -1 || (
            Bmp[gameData.terrain[x][y].Objekt].Sound !== Bmp[gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt].Sound
          ))
            PlaySound(Bmp[gameData.terrain[x][y].Objekt].Sound, 50);
        }

        ZeichneBilder(
          gameData.terrain[x][y].position.x + gameData.terrain[x][y].ObPos.x - gameData.camera.x,
          gameData.terrain[x][y].position.y + gameData.terrain[x][y].ObPos.y - gameData.camera.y,
          gameData.terrain[x][y].Objekt, 
          { left: 0, top: 0, right: gameData.camera.width, bottom: gameData.camera.height },
          gameData.terrain[x][y].Reverse,
          gameData.terrain[x][y].Phase);
      } else {
        if (gameData.terrain[x][y].Objekt === -1 && gameData.terrain[x][y].object) {
          const object = gameData.terrain[x][y].object;
          if (Guyzeichnen) {
            if ((gameData.guy.position.y) < (gameData.terrain[x][y].position.y + object.y + sprites[object.sprite].height)) {
              ZeichneGuy();
              Guyzeichnen = false;
            }
          }
          
          drawSprite(
            object.sprite, 
            object.frame, 
            gameData.terrain[x][y].position.x + object.x - gameData.camera.x, 
            gameData.terrain[x][y].position.y + object.y - gameData.camera.y,
            primaryCanvasContext
          );
        } else if (gameData.terrain[x][y].Objekt === FEUER ||
          gameData.terrain[x][y].Objekt === BAUM1DOWN || 
          gameData.terrain[x][y].Objekt === BAUM2DOWN || 
          gameData.terrain[x][y].Objekt === BAUM3DOWN || 
          gameData.terrain[x][y].Objekt === BAUM4DOWN || 
          gameData.terrain[x][y].Objekt >= ZELT)
        {
          //Sound abspielen
          if (((gameData.guy.tile.x - 1 <= x) && (x <= gameData.guy.tile.x + 1)) &&
            ((gameData.guy.tile.y - 1 <= y) && (y <= gameData.guy.tile.y + 1))) {
            if ((x === gameData.guy.tile.x) && (y === gameData.guy.tile.y))
              PlaySound(Bmp[gameData.terrain[x][y].Objekt].Sound, 100);
            else if (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt === -1 || (
              Bmp[gameData.terrain[x][y].Objekt].Sound !== Bmp[gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt].Sound
            ))
              PlaySound(Bmp[gameData.terrain[x][y].Objekt].Sound, 50);
          }
          if (Guyzeichnen) {
            if ((gameData.guy.position.y) < (gameData.terrain[x][y].position.y + gameData.terrain[x][y].ObPos.y
              + Bmp[gameData.terrain[x][y].Objekt].Hoehe)) {
              ZeichneGuy();
              Guyzeichnen = false;
            }
          }

          ZeichneBilder(
            gameData.terrain[x][y].position.x + gameData.terrain[x][y].ObPos.x - gameData.camera.x,
            gameData.terrain[x][y].position.y + gameData.terrain[x][y].ObPos.y - gameData.camera.y,
            gameData.terrain[x][y].Objekt, 
            { left: 0, top: 0, right: gameData.camera.width, bottom: gameData.camera.height }, 
            false,
            gameData.terrain[x][y].Phase
          );
        }
      }
      if (Guyzeichnen) {
        ZeichneGuy();
      }
    }
}

const ZeichneGuy = () => {
  if (isOnSea(gameData)) {
    if (Guy.Zustand === GUYSCHIFF) {
      ZeichneBilder(
        Math.floor(gameData.guy.position.x - 30 - gameData.camera.x),
        Math.floor(gameData.guy.position.y - 28 - gameData.camera.y),
        Guy.Zustand, 
        { left: 0, top: 0, right: gameData.camera.width, bottom: gameData.camera.height }, 
        false, 
        -1
      );
    } else {
      ZeichneBilder(
        Math.floor(gameData.guy.position.x - (Bmp[Guy.Zustand].Breite) / 2 - gameData.camera.x),
        Math.floor(gameData.guy.position.y - (Bmp[Guy.Zustand].Hoehe) / 2 - gameData.camera.y),
        Guy.Zustand, 
        { left: 0, top: 0, right: gameData.camera.width, bottom: gameData.camera.height }, 
        false, 
        -1
      );
    }
  } else ZeichneBilder(
    Math.floor(gameData.guy.position.x - (Bmp[Guy.Zustand].Breite) / 2 - gameData.camera.x),
    Math.floor(gameData.guy.position.y - (Bmp[Guy.Zustand].Hoehe) - gameData.camera.y),
    Guy.Zustand, 
    { left: 0, top: 0, right: gameData.camera.width, bottom: gameData.camera.height }, 
    false, 
    -1
  );
  //Sound abspielen
  if (gameData.guy.active) PlaySound(Bmp[Guy.Zustand].Sound, 100);
}

const ZeichnePapier = () => {
  rcRectsrc.left = 0;
  rcRectsrc.top = 0;
  rcRectsrc.right = 464;
  rcRectsrc.bottom = 77;
  rcRectdes.left = TextBereich[TXTPAPIER].rcText.left - 60;
  rcRectdes.top = TextBereich[TXTPAPIER].rcText.top - 30;
  rcRectdes.right = rcRectdes.left + 464;
  rcRectdes.bottom = rcRectdes.top + 77;
  drawImage(paperImage, primaryCanvasContext);
  rcRectdes.left = rcRectdes.left + 34;
  rcRectdes.top = rcRectdes.top + 77;
  rcRectdes.bottom = TextBereich[TXTPAPIER].rcText.top + PapierText;
  fillCanvas(rcRectdes, 236, 215, 179, 1, primaryCanvasContext);
  rcRectsrc.left = 0;
  rcRectsrc.top = 77;
  rcRectsrc.right = 464;
  rcRectsrc.bottom = 154;
  rcRectdes.left = TextBereich[TXTPAPIER].rcText.left - 60;
  rcRectdes.top = rcRectdes.bottom - 47;
  rcRectdes.right = rcRectdes.left + 464;
  rcRectdes.bottom = rcRectdes.top + 77;
  drawImage(paperImage, primaryCanvasContext);
}

const ZeichnePanel = () => {
  let diffx, diffy, TagesZeit, i, j, Ringtmp;  //für die Sonnenanzeige

  //Karte
  rcRectsrc.left = 0;
  rcRectsrc.top = 0;
  rcRectsrc.right = 2 * MAXXKACH;
  rcRectsrc.bottom = 2 * MAXYKACH;
  rcRectdes.left = rcKarte.left;
  rcRectdes.top = rcKarte.top;
  rcRectdes.right = rcKarte.right;
  rcRectdes.bottom = rcKarte.bottom;
  drawImage(minimapCanvasContext.canvas, primaryCanvasContext);

  //Spielfigur
  rcRectdes.left = rcKarte.left + 2 * gameData.guy.tile.x;
  rcRectdes.top = rcKarte.top + 2 * gameData.guy.tile.y;
  rcRectdes.right = rcRectdes.left + 2;
  rcRectdes.bottom = rcRectdes.top + 2;
  fillCanvas(rcRectdes, 255, 0, 0, 1, primaryCanvasContext);

  //Position einmalen
  rcRectsrc.left = 205;
  rcRectsrc.top = 0;
  rcRectsrc.right = 205 + 65;
  rcRectsrc.bottom = 65;
  rcRectdes.left = rcKarte.left + (gameData.camera.x + 2 * gameData.camera.y) / (KXPIXEL / 2) - MAXXKACH - 2;
  rcRectdes.top = rcKarte.top + (2 * gameData.camera.y - gameData.camera.x) / (KXPIXEL / 2) + MAXYKACH - 21 - 2;
  rcRectdes.right = rcRectdes.left + 65;
  rcRectdes.bottom = rcRectdes.top + 65;
  CalcRect(rcKarte);
  drawImage(panelImage, primaryCanvasContext);

  //Panel malen
  rcRectsrc.left = 0;
  rcRectsrc.top = 0;
  rcRectsrc.right = 205;
  rcRectsrc.bottom = 600;
  rcRectdes.left = rcPanel.left;
  rcRectdes.top = rcPanel.top;
  rcRectdes.right = rcPanel.right;
  rcRectdes.bottom = rcPanel.bottom;
  drawImage(panelImage, primaryCanvasContext);

  //Gitternetzknopf
  if (gameData.options.grid) Bmp[BUTTGITTER].Phase = 1; else Bmp[BUTTGITTER].Phase = 0;
  ZeichneBilder(Bmp[BUTTGITTER].rcDes.left,
    Bmp[BUTTGITTER].rcDes.top,
    BUTTGITTER, rcPanel, false, -1);

  //SOUNDknopf
  if (audio.isRunning()) Bmp[BUTTSOUND].Phase = 0; else Bmp[BUTTSOUND].Phase = 1;
  ZeichneBilder(Bmp[BUTTSOUND].rcDes.left,
    Bmp[BUTTSOUND].rcDes.top,
    BUTTSOUND, rcPanel, false, -1);

  //BEENDENknopf
  ZeichneBilder(Bmp[BUTTBEENDEN].rcDes.left,
    Bmp[BUTTBEENDEN].rcDes.top,
    BUTTBEENDEN, rcPanel, false, -1);

  //NEUknopf
  ZeichneBilder(Bmp[BUTTNEU].rcDes.left,
    Bmp[BUTTNEU].rcDes.top,
    BUTTNEU, rcPanel, false, -1);

  //TAGNEUknopf
  ZeichneBilder(Bmp[BUTTTAGNEU].rcDes.left,
    Bmp[BUTTTAGNEU].rcDes.top,
    BUTTTAGNEU, rcPanel, false, -1);

  //Aktionsknopf
  if (HauptMenue === MEAKTION) Bmp[BUTTAKTION].Phase = Bmp[BUTTAKTION].Anzahl;
  else if (Bmp[BUTTAKTION].Phase === Bmp[BUTTAKTION].Anzahl) Bmp[BUTTAKTION].Phase = 0;
  ZeichneBilder(Bmp[BUTTAKTION].rcDes.left,
    Bmp[BUTTAKTION].rcDes.top,
    BUTTAKTION, rcPanel, false, -1);

  //BauKnopf
  if (HauptMenue === MEBAUEN) Bmp[BUTTBAUEN].Phase = Bmp[BUTTBAUEN].Anzahl;
  else if (Bmp[BUTTBAUEN].Phase === Bmp[BUTTBAUEN].Anzahl) Bmp[BUTTBAUEN].Phase = 0;
  ZeichneBilder(Bmp[BUTTBAUEN].rcDes.left,
    Bmp[BUTTBAUEN].rcDes.top,
    BUTTBAUEN, rcPanel, false, -1);

  //Inventarknopf
  if (HauptMenue === MEINVENTAR) Bmp[BUTTINVENTAR].Phase = Bmp[BUTTINVENTAR].Anzahl;
  else if (Bmp[BUTTINVENTAR].Phase === Bmp[BUTTINVENTAR].Anzahl) Bmp[BUTTINVENTAR].Phase = 0;
  ZeichneBilder(Bmp[BUTTINVENTAR].rcDes.left,
    Bmp[BUTTINVENTAR].rcDes.top,
    BUTTINVENTAR, rcPanel, false, -1);

  //WEITERknopf
  if (Bmp[BUTTWEITER].Phase !== -1) ZeichneBilder(Bmp[BUTTWEITER].rcDes.left,
    Bmp[BUTTWEITER].rcDes.top,
    BUTTWEITER, rcPanel, false, -1);

  //STOPknopf
  if (Bmp[BUTTSTOP].Phase !== -1) ZeichneBilder(Bmp[BUTTSTOP].rcDes.left,
    Bmp[BUTTSTOP].rcDes.top,
    BUTTSTOP, rcPanel, false, -1);

  //ABLEGENknopf
  if (Bmp[BUTTABLEGEN].Phase !== -1) ZeichneBilder(Bmp[BUTTABLEGEN].rcDes.left,
    Bmp[BUTTABLEGEN].rcDes.top,
    BUTTABLEGEN, rcPanel, false, -1);

  //Welches Menü zeichnen?
  switch (HauptMenue) {
    case MEAKTION:
      for (i = BUTTSUCHEN; i <= BUTTSCHLEUDER; i++) {
        if (Bmp[i].Phase === -1) {
          ZeichneBilder(Bmp[i].rcDes.left,
            Bmp[i].rcDes.top,
            BUTTFRAGEZ, rcPanel, false, -1);
          continue;
        }
        ZeichneBilder(Bmp[i].rcDes.left,
          Bmp[i].rcDes.top,
          i, rcPanel, false, -1);
      }
      break;
    case MEBAUEN:
      for (i = BUTTZELT; i <= BUTTDESTROY; i++) {
        if (Bmp[i].Phase === -1) {
          ZeichneBilder(Bmp[i].rcDes.left,
            Bmp[i].rcDes.top,
            BUTTFRAGEZ, rcPanel, false, -1);
          continue;
        }
        ZeichneBilder(Bmp[i].rcDes.left,
          Bmp[i].rcDes.top,
          i, rcPanel, false, -1);
      }
      break;
    case MEINVENTAR:
      ZeichneBilder(Bmp[INVPAPIER].rcDes.left,
        Bmp[INVPAPIER].rcDes.top,
        INVPAPIER, rcPanel, false, -1);
      for (i = ROHAST; i <= ROHSCHLEUDER; i++) {
        if (Guy.Inventar[i] <= 0) continue;
        ZeichneBilder(Bmp[i].rcDes.left,
          Bmp[i].rcDes.top,
          i, rcPanel, false, -1);
        Bmp[ROEMISCH1].rcDes.top = Bmp[i].rcDes.top;
        Bmp[ROEMISCH2].rcDes.top = Bmp[i].rcDes.top;
        for (j = 1; j <= Guy.Inventar[i]; j++) {
          if (j < 5) {
            ZeichneBilder(Bmp[i].rcDes.left + 20 + j * 4,
              Bmp[ROEMISCH1].rcDes.top,
              ROEMISCH1, rcPanel, false, -1);
          } else if (j === 5) ZeichneBilder(Bmp[i].rcDes.left + 23,
            Bmp[ROEMISCH2].rcDes.top,
            ROEMISCH2, rcPanel, false, -1);
          else if ((j > 5) && (j < 10)) {
            ZeichneBilder(Bmp[i].rcDes.left + 20 + j * 4,
              Bmp[ROEMISCH1].rcDes.top,
              ROEMISCH1, rcPanel, false, -1);
          } else if (j === 10)
            ZeichneBilder(Bmp[i].rcDes.left + 43,
              Bmp[ROEMISCH2].rcDes.top,
              ROEMISCH2, rcPanel, false, -1);
        }
      }
      break;

  }

  //Säule1
  i = Bmp[SAEULE1].Hoehe - Guy.Resource[WASSER] * Bmp[SAEULE1].Hoehe / 100;
  rcRectsrc = { ...Bmp[SAEULE1].rcSrc };
  rcRectsrc.top += i;
  rcRectdes = { ...Bmp[SAEULE1].rcDes };
  rcRectdes.top += i;
  drawImage(Bmp[SAEULE1].Surface, primaryCanvasContext);

  //Säule2
  i = Bmp[SAEULE2].Hoehe - Guy.Resource[NAHRUNG] * Bmp[SAEULE2].Hoehe / 100;
  rcRectsrc = { ...Bmp[SAEULE2].rcSrc };
  rcRectsrc.top += i;
  rcRectdes = { ...Bmp[SAEULE2].rcDes };
  rcRectdes.top += i;
  drawImage(Bmp[SAEULE2].Surface, primaryCanvasContext);

  //Säule3
  i = Bmp[SAEULE3].Hoehe - Guy.Resource[GESUNDHEIT] * Bmp[SAEULE3].Hoehe / 100;
  rcRectsrc = { ...Bmp[SAEULE3].rcSrc };
  rcRectsrc.top += i;
  rcRectdes = { ...Bmp[SAEULE3].rcDes };
  rcRectdes.top += i;
  drawImage(Bmp[SAEULE3].Surface, primaryCanvasContext);

  //Sonnenanzeige
  diffx = (Bmp[SONNE].rcDes.right - Bmp[SONNE].rcDes.left - Bmp[SONNE].Breite) / 2;
  diffy = Bmp[SONNE].rcDes.bottom - Bmp[SONNE].rcDes.top - Bmp[SONNE].Hoehe / 2;
  TagesZeit = (Stunden * 10 + Minuten * 10 / 60);

  ZeichneBilder(Math.floor(Bmp[SONNE].rcDes.left + diffx * Math.cos(pi - pi * TagesZeit / 120) + diffx),
    Math.floor(Bmp[SONNE].rcDes.top + (-diffy * Math.sin(pi - pi * TagesZeit / 120) + diffy)),
    SONNE, Bmp[SONNE].rcDes, false, -1);

  //Rettungsring
  if (Chance < 100) Ringtmp = (100 * Math.sin(pi / 200 * Chance));
  else Ringtmp = 100;
  if (Ringtmp > 100) Ringtmp = 100;
  ZeichneBilder(Math.floor(Bmp[RING].rcDes.left),
    Math.floor(Bmp[RING].rcDes.top + Ringtmp),
    RING, rcPanel, false, -1);

  //Die ChanceZahl ausgeben
  Textloeschen(TXTCHANCE);
  TextBereich[TXTCHANCE].Aktiv = true;
  TextBereich[TXTCHANCE].rcText.top = Math.floor(Bmp[RING].rcDes.top + Ringtmp + Bmp[RING].Hoehe);
  TextBereich[TXTCHANCE].rcText.bottom = TextBereich[TXTCHANCE].rcText.top + S2YPIXEL;
  StdString = Chance.toFixed(1);
  DrawString(StdString, (TextBereich[TXTCHANCE].rcText.left),
    (TextBereich[TXTCHANCE].rcText.top), 2);

  //TextFeld malen
  rcRectsrc.left = 0;
  rcRectsrc.top = 0;
  rcRectsrc.right = 605;
  rcRectsrc.bottom = 20;
  rcRectdes = { ...rcTextFeld1 };
  drawImage(textfieldImage, primaryCanvasContext);
}

const DrawString = (string, x, y, Art, canvasContext = textCanvasContext) => {
  let length, index, cindex, Breite, Hoehe;

  if (Art === 1) {
    Breite = S1XPIXEL;
    Hoehe = S1YPIXEL;
  }
  if (Art === 2) {
    Breite = S2XPIXEL;
    Hoehe = S2YPIXEL;
  }

  // Länge der Schrift ermitteln
  length = string.length;

  // Alle Zeichen durchgehen
  for (index = 0; index < length; index++) {
    //Korrekte indexNummer ermitteln
    cindex = string.charCodeAt(index) - ' '.charCodeAt(0);

    if ((string[index] >= ' ') && (string[index] <= '/')) {
      rcRectsrc.left = cindex * Breite;
      rcRectsrc.top = 0;
    }
    if ((string[index] >= '0') && (string[index] <= '?')) {
      rcRectsrc.left = (cindex - 16) * Breite;
      rcRectsrc.top = Hoehe;
    }
    if ((string[index] >= '@') && (string[index] <= 'O')) {
      rcRectsrc.left = (cindex - 16 * 2) * Breite;
      rcRectsrc.top = 2 * Hoehe;
    }
    if ((string[index] >= 'P') && (string[index] <= '_')) {
      rcRectsrc.left = (cindex - 16 * 3) * Breite;
      rcRectsrc.top = 3 * Hoehe;
    }
    if ((string[index] > '_') && (string[index] <= 'o')) {
      rcRectsrc.left = (cindex - 16 * 4) * Breite;
      rcRectsrc.top = 4 * Hoehe;
    }
    if ((string[index] >= 'p') && (string[index] <= '~')) {
      rcRectsrc.left = (cindex - 16 * 5) * Breite;
      rcRectsrc.top = 5 * Hoehe;
    }

    rcRectsrc.right = rcRectsrc.left + Breite;
    rcRectsrc.bottom = rcRectsrc.top + Hoehe;
    rcRectdes.left = x;
    rcRectdes.top = y;
    rcRectdes.right = x + Breite;
    rcRectdes.bottom = y + Hoehe;
    //Zeichen zeichnen
    if (Art === 1) {
      drawImage(font1Image, canvasContext);
      //x Position weiterschieben
      x += S1ABSTAND;
    }
    if (Art === 2) {
      drawImage(font2Image, canvasContext);
      //x Position weiterschieben
      x += S2ABSTAND;
    }
  }
}

const DrawText = (TEXT, Bereich, Art) => {
  let BBreite, BHoehe, Posx, Posy;
  let Pos;
  let Posnext, Posnext2;
  let Text = TEXT;
  const blank = ' ';
  const slash = '/';
  let scratch;//Zur Variablenausgabe
  let StdString2 = '';//Zur Variablenausgabe
  let Erg;

  Textloeschen(Bereich);
  TextBereich[Bereich].Aktiv = true;

  if (Art === 1) {
    BBreite = S1ABSTAND;
    BHoehe = S1YPIXEL;
  }
  if (Art === 2) {
    BBreite = S2ABSTAND;
    BHoehe = S2YPIXEL;
  }
  Posx = TextBereich[Bereich].rcText.left;
  Posy = TextBereich[Bereich].rcText.top;
  Posnext = 0;

  while (1) {
    StdString = '';
    Pos = Posnext;
    Posnext = Text.indexOf(blank, Pos + 1);
    Posnext2 = Text.indexOf(slash, Pos + 1);
    if ((Posnext !== -1) && (Posnext2 !== -1) && (Posnext2 <= Posnext)) {
      scratch = Text[Posnext2 + 1];
      switch (scratch) {
        case 'a':
          StdString2 = ' ' + Tag;
          DrawString(StdString2, Posx, Posy, Art);
          Posx += BBreite * StdString2.length;
          break;
        case 'b':
          StdString2 = ' ' + Math.round(Guy.Resource[GESUNDHEIT]).toString();
          DrawString(StdString2, Posx, Posy, Art);
          Posx += BBreite * StdString2.length;
          break;
        case 'c':
          StdString2 = ' ' + Chance.toFixed(1);
          DrawString(StdString2, Posx, Posy, Art);
          Posx += BBreite * StdString2.length;
          break;
        case 'd':
          Frage = 0;
          rcRectsrc = { ...Bmp[JA].rcSrc };
          rcRectdes.left = TextBereich[Bereich].rcText.left + 50;
          rcRectdes.top = Posy + 50;
          rcRectdes.right = rcRectdes.left + Bmp[JA].Breite;
          rcRectdes.bottom = rcRectdes.top + Bmp[JA].Hoehe;
          Bmp[JA].rcDes = { ...rcRectdes };
          drawImage(Bmp[JA].Surface, textCanvasContext);

          rcRectsrc = { ...Bmp[NEIN].rcSrc };
          rcRectdes.left = TextBereich[Bereich].rcText.left + 220;
          rcRectdes.top = Posy + 50;
          rcRectdes.right = rcRectdes.left + Bmp[NEIN].Breite;
          rcRectdes.bottom = rcRectdes.top + Bmp[NEIN].Hoehe;
          Bmp[NEIN].rcDes = { ...rcRectdes };
          drawImage(Bmp[NEIN].Surface, textCanvasContext);
          Posy += 115;
          break;
        case 'z':
          Posx = TextBereich[Bereich].rcText.left - BBreite;
          Posy += BHoehe + 3;
          break;
      }
      Pos = Pos + 3;
      Posnext = Posnext2 + 2;
    }
    if (Posnext === -1) Posnext = Text.length;
    StdString = Text.substring(Pos, Posnext);
    if (Posx + BBreite * (Posnext - Pos) > TextBereich[Bereich].rcText.right) {
      Posx = TextBereich[Bereich].rcText.left - BBreite;
      Posy += BHoehe + 3;
    }
    DrawString(StdString, Posx, Posy, Art);
    if (Posnext >= Text.length) break;
    Posx += BBreite * (Posnext - Pos);
    Pos++;
  }
  Erg = (Posy + BHoehe - TextBereich[Bereich].rcText.top);
  if (Erg < 100) Erg = 100;
  return Erg;
}

const Textloeschen = (Bereich) => {
  TextBereich[Bereich].Aktiv = false;
  clearCanvas(TextBereich[Bereich].rcText, textCanvasContext);
}

const DrawSchatzkarte = () => {
  const treasureMapCanvas = getTreasureMapCanvasContext().canvas;

  Textloeschen(TXTPAPIER);
  TextBereich[TXTPAPIER].Aktiv = true;
  PapierText = treasureMapCanvas.height;
  
  rcRectsrc.left = 0;
  rcRectsrc.right = treasureMapCanvas.width;
  rcRectsrc.top = 0;
  rcRectsrc.bottom = treasureMapCanvas.height;
  rcRectdes.left = TextBereich[TXTPAPIER].rcText.left;
  rcRectdes.top = TextBereich[TXTPAPIER].rcText.top;
  rcRectdes.right = rcRectdes.left + treasureMapCanvas.width;
  rcRectdes.bottom = rcRectdes.top + treasureMapCanvas.height;

  drawImage(treasureMapCanvas, textCanvasContext);
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
  if (tile.Objekt >= FELD && tile.Objekt <= FEUERSTELLE && tile.Phase >= Bmp[tile.Objekt].Anzahl && Bmp[BUTTSTOP].Phase === -1) {
    if (Bmp[BUTTWEITER].Phase === -1) Bmp[BUTTWEITER].Phase = 0;
  } else Bmp[BUTTWEITER].Phase = -1;

  if (Bmp[BUTTSTOP].Phase === -1 && ((tile.Objekt === BOOT && tile.Phase < Bmp[tile.Objekt].Anzahl) || 
    (isOnSea(gameData) &&
      ((tileWest.ground !== grounds.SEA && tileWest.Objekt === -1 && !tileWest.object) ||
        (tileNorth.ground !== grounds.SEA && tileNorth.Objekt === -1 && !tileNorth.object) ||
        (tileEast.ground !== grounds.SEA && tileEast.Objekt === -1 && !tileEast.object) ||
        (tileSouth.ground !== grounds.SEA && tileSouth.Objekt === -1 && !tileSouth.object))))) {
    if (Bmp[BUTTABLEGEN].Phase === -1) Bmp[BUTTABLEGEN].Phase = 0;
  } else Bmp[BUTTABLEGEN].Phase = -1;
}

const CheckRohstoff = () => {
  let i;
  let Benoetigt; //Anzahl der Gesamtbenötigten Rohstoffe
  let GebrauchtTmp; //Soviel Rohstoffe werden für diesen Schritt benötigt
  let Gebraucht; //Soviel Rohstoffe werden für diesen Schritt benötigt
  let Check;     //Wenn kein Rohstoff mehr vorhanden nur noch einmal die While-Schleife

  Benoetigt = 0;
  for (i = 0; i < BILDANZ; i++) Benoetigt += Bmp[gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt].Rohstoff[i];

  GebrauchtTmp = Benoetigt / Bmp[gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt].AkAnzahl;
  Gebraucht = Math.floor(GebrauchtTmp * gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].AkNummer) -
    Math.floor(GebrauchtTmp * (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].AkNummer - 1));

  while (1) {
    Check = false;
    for (i = 0; i < BILDANZ; i++) {
      if (Gebraucht === 0) return true;
      if ((gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Rohstoff[i] > 0) &&
        (Guy.Inventar[i] > 0)) {
        Guy.Inventar[i]--;
        gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Rohstoff[i]--;
        Gebraucht--;
        if (Gebraucht === 0) return true;
        Check = true;
      }
    }
    if (Check === false) break;
  }
  PapierText = DrawText(texts.ROHSTOFFNICHT, TXTPAPIER, 1);
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
  const Erg = GetKachel(gameData.guy.storedPosition.x, gameData.guy.storedPosition.y);
  if (Erg && Erg.x === gameData.guy.tile.x && Erg.y === gameData.guy.tile.y) {
    goTo(gameData, gameData.guy.storedPosition);
  } else {
    const tile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];
    goToCenterOfTile(gameData);
  }
}

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
      break;
    case 2:
      gameData.guy.position.y -= 10;
      gameData.guy.active = true;
      Guy.Zustand = GUYSCHIFFDOWN;
      PlaySound(WAVPLATSCH, 100);
      PlaySound(WAVCRASH, 100);
      break;
    case 3:
      addShipWreck(tile);
      gameData.guy.tile.x += 2;
      gameData.guy.position.y += 10;
      goToWestOfTile(gameData);
      Entdecken();
      Guy.Zustand = GUYSCHWIMMEN;
      break;
    case 4:
      StopSound(WAVSCHWIMMEN); //Sound hier sofort stoppen
      Guy.Zustand = GUYLINKS;
      goToCenterOfTile(gameData);
      break;
    case 5:
      updateCamera(gameData.camera, gameData.guy.position, primaryCanvasContext, false);
      gameData.guy.storedPosition = { ...gameData.guy.position };
      Spielzustand = GAME_PLAY;
      Guy.Aktion = AKNICHTS;
      PapierText = DrawText(texts.INTROTEXT, TXTPAPIER, 1);
      SaveGame();
      break;
  }
}

const AkNeubeginnen = () => {
  let Erg;
  Guy.AkNummer++;
  switch (Guy.AkNummer) {
    case 1:
      goToInitialPosition();
      TwoClicks = -1; //Keine Ahnung warum ich das hier machen muß
      break;
    case 2:
      gameData.guy.active = true;
      if (isOnSea(gameData)) Guy.Zustand = GUYBOOTWARTEN;
      else Guy.Zustand = GUYWARTEN;
      PapierText = DrawText(texts.NEUBEGINNEN, TXTPAPIER, 1);
      break;
    case 3:
      Guy.Aktion = AKNICHTS;
      if (isOnSea(gameData)) Guy.Zustand = GUYBOOTLINKS;
      else Guy.Zustand = GUYLINKS;
      if (Frage === 1) {
        startGame(true);
        return;
      }
      Frage = -1;
      break;
  }
}

const AkTagNeubeginnen = () => {
  let Erg;
  Guy.AkNummer++;
  switch (Guy.AkNummer) {
    case 1:
      goToInitialPosition();
      TwoClicks = -1; //Keine Ahnung warum ich das hier machen muß
      break;
    case 2:
      gameData.guy.active = true;
      if (isOnSea(gameData)) Guy.Zustand = GUYBOOTWARTEN;
      else Guy.Zustand = GUYWARTEN;
      PapierText = DrawText(texts.TAGNEU, TXTPAPIER, 1);
      break;
    case 3:
      Guy.Aktion = AKNICHTS;
      if (isOnSea(gameData)) Guy.Zustand = GUYBOOTLINKS;
      else Guy.Zustand = GUYLINKS;
      if (Frage === 1) {
        startGame(false);
        return;
      }
      Frage = -1;
      break;
  }
}

const AkSpielverlassen = () => {
  let Erg;
  Guy.AkNummer++;
  switch (Guy.AkNummer) {
    case 1:
      goToInitialPosition();
      TwoClicks = -1; //Keine Ahnung warum ich das hier machen muß
      break;
    case 2:
      gameData.guy.active = true;
      if (isOnSea(gameData)) Guy.Zustand = GUYBOOTWARTEN;
      else Guy.Zustand = GUYWARTEN;
      PapierText = DrawText(texts.SPIELVERLASSEN, TXTPAPIER, 1);
      break;
    case 3:
      Guy.Aktion = AKNICHTS;
      if (isOnSea(gameData)) Guy.Zustand = GUYBOOTLINKS;
      else Guy.Zustand = GUYLINKS;
      if (Frage === 1) {
        if (Guy.Resource[GESUNDHEIT] > 10) SaveGame();
        Spielzustand = GAME_CREDITS;
      }
      Frage = -1;
      break;
  }
}

const AkTod = () => {
  Guy.AkNummer++;
  switch (Guy.AkNummer) {
    case 1:
      gameData.guy.active = true;
      if (isOnSea(gameData)) Guy.Zustand = GUYBOOTWARTEN;
      else Guy.Zustand = GUYWARTEN;
      PapierText = DrawText(texts.TOD, TXTPAPIER, 1);
      break;
    case 2:
      if (!isOnSea(gameData)) {
        gameData.guy.active = true;
        Guy.Zustand = GUYHINLEGEN;
      }
      break;
    case 3:
      gameData.guy.active = true;
      Nacht = false;
      Fade(100, 1);
      if (isOnSea(gameData)) Guy.Zustand = GUYBOOTTOD;
      else Guy.Zustand = GUYTOD;
      break;
    case 4:
      gameData.guy.active = true;
      Nacht = true;
      Guy.Zustand = GUYWARTEN;
      PapierText = DrawText(texts.TAGNEU, TXTPAPIER, 1);
      break;
    case 5:
      Nacht = false;
      if (isOnSea(gameData)) Guy.Zustand = GUYBOOTLINKS;
      else Guy.Zustand = GUYLINKS;
      Guy.Aktion = AKNICHTS;
      if (Frage === 2) {
        Spielzustand = GAME_CREDITS;
      } else startGame(false);
      Frage = -1;
      break;
  }
}

const AkAbbruch = () => {
  Guy.AkNummer++;
  switch (Guy.AkNummer) {
    case 1:
      const tile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];
      tile.GPosAlt.x = gameData.guy.position.x;
      tile.GPosAlt.y = gameData.guy.position.y;
      goToCenterOfTile(gameData);
      break;
    case 2:
      Guy.Aktion = AKNICHTS;
      break;
  }
}


const AkDestroy = () => {
  let i; //Um sich kurz das Objekt zu merken

  if (Guy.AkNummer === 0) {
    gameData.guy.storedPosition = { ...gameData.guy.position };  //Die Originalposition merken
  }
  Guy.AkNummer++;
  switch (Guy.AkNummer) {
    case 1:
      goToOnTile(gameData, {
        x: gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].ObPos.x
          + Bmp[gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt].Breite + 4,
        y: gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].ObPos.y
          + Bmp[gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt].Hoehe
      });
      break;
    case 2:
    case 4:
      gameData.guy.active = true;
      Guy.Zustand = GUYFAELLEN;
      AddResource(WASSER, -1);
      AddResource(NAHRUNG, -1);
      AddTime(0, 5);
      break;
    case 3:
    case 5:
      gameData.guy.active = true;
      Guy.Zustand = GUYSCHLAGEN;
      AddResource(WASSER, -1);
      AddResource(NAHRUNG, -1);
      AddTime(0, 5);
      break;
    case 6:
      i = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt;
      
      gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt = -1;
      gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].ObPos.x = 0;
      gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].ObPos.y = 0;
      gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Phase = -1;
      gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].object = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].originalObject;
      gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].originalObject = null
      gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].AkNummer = 0;
      if (i === SOS) Chance -= 0.1;
      else if (i === ROHR) FillRohr();
      goToStoredPosition();
      break;
    case 7:
      Guy.Aktion = AKNICHTS;
      break;
  }
}

const AkSuchen = () => {
  const Ziel = { x: null, y: null };
  let Erg;
  let i;

  if (Guy.AkNummer === 0) {
    gameData.guy.storedPosition = { ...gameData.guy.position };  //Die Originalposition merken
  }
  while (1) {
    Ziel.x = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].position.x + Math.floor(Math.random() * KXPIXEL);
    Ziel.y = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].position.y + Math.floor(Math.random() * KYPIXEL);
    Erg = GetKachel(Ziel.x, Ziel.y);
    if (Erg && Erg.x === gameData.guy.tile.x && Erg.y === gameData.guy.tile.y) break; //Wenn das gefundene Ziel in der Kachel, dann fertig
  }
  Guy.AkNummer++;
  switch (Guy.AkNummer) {
    case 1:
    case 3:
    case 5:
    case 7:
      if (isOnSea(gameData)) {
        if (Guy.AkNummer === 1) {
          gameData.guy.active = true;
          gameData.guy.position.y -= 2;
          Guy.Zustand = GUYTAUCHEN1;
          PlaySound(WAVPLATSCH, 100);
        }
      } else {
        goTo(gameData, Ziel);
      }
      break;
    case 2:
    case 4:
    case 6:
    case 8:
      gameData.guy.active = true;
      if (isOnSea(gameData)) {
        if (Guy.AkNummer === 2) {
          gameData.guy.position.y += 5;
        }
        Guy.Zustand = GUYTAUCHEN2;
      } else Guy.Zustand = GUYSUCHEN;
      AddTime(0, 4);
      break;
    case 9:
      if (isOnSea(gameData)) {
        gameData.guy.active = true;
        Guy.Zustand = GUYTAUCHEN3;
        PlaySound(WAVPLATSCH, 100);
      }
      break;
    case 10:
      goToStoredPosition(gameData);
      break;
    case 11:
      gameData.guy.active = true;
      if (isOnSea(gameData)) Guy.Zustand = GUYBOOTLINKS;
      //Auf Strand und Fluss
      if (
        gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].ground === grounds.BEACH ||
        isRiver(gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].object) ||
        (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt >= SCHLEUSE1 && gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt <= SCHLEUSE6)
      ) {
        if (Guy.Inventar[ROHSTEIN] < 10) {
          PapierText = DrawText(texts.ROHSTEINGEFUNDEN, TXTPAPIER, 1);
          Guy.Inventar[ROHSTEIN] += 3;
          if (Guy.Inventar[ROHSTEIN] > 10) Guy.Inventar[ROHSTEIN] = 10;
        } else PapierText = DrawText(texts.ROHSTEINZUVIEL, TXTPAPIER, 1);

      } else if (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].object?.sprite === spriteTypes.BUSH) {
        i = Math.floor(Math.random() * 2);
        switch (i) {
          case 0:
            if (Guy.Inventar[ROHAST] < 10) {
              PapierText = DrawText(texts.ROHASTGEFUNDEN, TXTPAPIER, 1);
              Guy.Inventar[ROHAST]++;
            } else PapierText = DrawText(texts.ROHASTZUVIEL, TXTPAPIER, 1);
            break;
          case 1:
            if (Guy.Inventar[ROHBLATT] < 10) {
              PapierText = DrawText(texts.ROHBLATTGEFUNDEN, TXTPAPIER, 1);
              Guy.Inventar[ROHBLATT]++;
            } else PapierText = DrawText(texts.ROHBLATTZUVIEL, TXTPAPIER, 1);
            break;
        }
      } else if (isNormalTree(gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].object) || 
        gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].object?.sprite === spriteTypes.BIG_TREE || 
        (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt >= HAUS1 && gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt <= HAUS3)) {
        i = Math.floor(Math.random() * 3);
        switch (i) {
          case 0:
            if (Guy.Inventar[ROHAST] < 10) {
              PapierText = DrawText(texts.ROHASTGEFUNDEN, TXTPAPIER, 1);
              Guy.Inventar[ROHAST]++;
            } else PapierText = DrawText(texts.ROHASTZUVIEL, TXTPAPIER, 1);
            break;
          case 1:
            if (Guy.Inventar[ROHBLATT] < 10) {
              PapierText = DrawText(texts.ROHBLATTGEFUNDEN, TXTPAPIER, 1);
              Guy.Inventar[ROHBLATT]++;
            } else PapierText = DrawText(texts.ROHBLATTZUVIEL, TXTPAPIER, 1);
            break;
          case 2:
            if (Guy.Inventar[ROHLIANE] < 10) {
              PapierText = DrawText(texts.ROHLIANEGEFUNDEN, TXTPAPIER, 1);
              Guy.Inventar[ROHLIANE]++;
            } else PapierText = DrawText(texts.ROHLIANEZUVIEL, TXTPAPIER, 1);
            break;
        }
      } else if (isOnSea(gameData)) {
        if (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].object?.sprite === spriteTypes.SHIP_WRECK) {
          if (Guy.Inventar[ROHFERNROHR] === 0) {
            PapierText = DrawText(texts.FERNROHRGEFUNDEN, TXTPAPIER, 1);
            Guy.Inventar[ROHFERNROHR] = 1;
            Bmp[BUTTAUSSCHAU].Phase = 0;
            Guy.Inventar[ROHHAMMER] = 1;
            Bmp[BUTTHAUS1].Phase = 0;
            Bmp[BUTTHAUS2].Phase = 0;
            Bmp[BUTTHAUS3].Phase = 0;
          } else PapierText = DrawText(texts.NICHTSGEFUNDEN2, TXTPAPIER, 1);
        } else if (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].object?.sprite === spriteTypes.PIRATE_WRECK) {
          if (Guy.Inventar[ROHKARTE] === 0) {
            PapierText = DrawText(texts.KARTEGEFUNDEN, TXTPAPIER, 1);
            Guy.Inventar[ROHKARTE] = 1;
            Bmp[BUTTSCHATZKARTE].Phase = 0;
            Guy.Inventar[ROHSCHAUFEL] = 1;
            Bmp[BUTTSCHATZ].Phase = 0;
          } else PapierText = DrawText(texts.NICHTSGEFUNDEN2, TXTPAPIER, 1);
        } else PapierText = DrawText(texts.NICHTSGEFUNDEN2, TXTPAPIER, 1);
      } else {
        PapierText = DrawText(texts.NICHTSGEFUNDEN, TXTPAPIER, 1);
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
      } else {
        goToOnTile(gameData, {
          x: tile.ObPos.x + Bmp[tile.Objekt].Breite / 2,
          y: tile.ObPos.y + Bmp[tile.Objekt].Hoehe + 2
        });
      }
      break;
    case 2:
    case 3:
      gameData.guy.active = true;
      Guy.Zustand = GUYESSEN;
      AddResource(NAHRUNG, 15);
      AddTime(0, 2);
      break;
    case 4:
      if (tile.object) {
        tile.object.frame = 0;
      } else {
        tile.Phase = 0;
      }
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
      gameData.guy.active = true;
      Guy.Zustand = GUYSCHLEUDER;
      gameData.guy.position.x += 5;
      AddTime(0, 2);
      PlaySound(WAVSCHLEUDER, 100);
      break;
    case 3:
      gameData.guy.position.x -= 5;
      goToObject(gameData, 6, 2);
      break;
    case 4:
      gameData.guy.active = true;
      Guy.Zustand = GUYSUCHEN;
      AddResource(NAHRUNG, 5);
      AddTime(0, 20);
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
      gameData.guy.active = true;
      Guy.Zustand = GUYTRINKEN;
      AddResource(WASSER, 30);
      AddTime(0, 3);
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
      gameData.guy.active = true;
      Guy.Zustand = GUYFAELLEN;
      AddResource(WASSER, -2);
      AddResource(NAHRUNG, -2);
      AddTime(0, 10);
      break;
    case 7:
      gameData.guy.active = true;
      Guy.Zustand = GUYWARTEN;
      if (tree.sprite === spriteTypes.TREE_HARDWOOD) {
        i = BAUM1DOWN;
      } else if (tree.sprite === spriteTypes.TREE_PALM) {
        i = BAUM2DOWN;
      } else if (tree.sprite === spriteTypes.TREE_EVERGREEN) {
        i = BAUM3DOWN;
      } else if (tree.sprite === spriteTypes.TREE_SMALL) {
        i = BAUM4DOWN;
      }
      tile.object = null;
      tile.Objekt = i;
      tile.Phase = 0;
      tile.ObPos.x = tree.x - 17;
      tile.ObPos.y = tree.y;
      PlaySound(WAVBAUMFAELLT, 100);
      break;
    case 8:
      goToStoredPosition(gameData);
      break;
    case 9:
      tile.Objekt = -1;
      Guy.Inventar[ROHSTAMM]++;
      if (Guy.Inventar[ROHSTAMM] > 10) Guy.Inventar[ROHSTAMM] = 10;
      Guy.Inventar[ROHAST] += 5;
      if (Guy.Inventar[ROHAST] > 10) Guy.Inventar[ROHAST] = 10;
      Guy.Inventar[ROHBLATT] += 5;
      if (Guy.Inventar[ROHBLATT] > 10) Guy.Inventar[ROHBLATT] = 10;
      Guy.Inventar[ROHLIANE] += 2;
      if (Guy.Inventar[ROHLIANE] > 10) Guy.Inventar[ROHLIANE] = 10;
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
            goToOnTile(gameData, { x: 35, y: 26});
            break;
          case spriteTypes.RIVER_SLOPE_WEST:
            goToOnTile(gameData, { x: 19, y: 26});
            break;
          case spriteTypes.RIVER_SLOPE_SOUTH:
            goToOnTile(gameData, { x: 22, y: 20});
            break;
          case spriteTypes.RIVER_SLOPE_EAST:
            goToOnTile(gameData, { x: 34, y: 23});
            break;
          case spriteTypes.RIVER_NORTH_SOUTH:  
          case spriteTypes.RIVER_WEST_SOUTH:
          case spriteTypes.RIVER_MOUTH_NORTH:
          case spriteTypes.RIVER_SPRING_SOUTH:
            goToOnTile(gameData, { x: 34, y: 33});
            break;
          case spriteTypes.RIVER_WEST_EAST:  
          case spriteTypes.RIVER_WEST_NORTH:
          case spriteTypes.RIVER_MOUTH_WEST:
          case spriteTypes.RIVER_SPRING_EAST:
            goToOnTile(gameData, { x: 20, y: 33});
            break;
          case spriteTypes.RIVER_NORTH_EAST:
          case spriteTypes.RIVER_MOUTH_SOUTH:
          case spriteTypes.RIVER_SPRING_NORTH:
            goToOnTile(gameData, { x: 22, y: 26});
            break;
          case spriteTypes.RIVER_SOUTH_EAST:
          case spriteTypes.RIVER_MOUTH_EAST:
          case spriteTypes.RIVER_SPRING_WEST:
            goToOnTile(gameData, { x: 32, y: 26});
            break;
        }
      } else {
        switch (tile.Objekt) {
          case SCHLEUSE2:
          case SCHLEUSE3:
            goToOnTile(gameData, { x: 34, y: 33});
            break;
          case SCHLEUSE1:
          case SCHLEUSE5:
            goToOnTile(gameData, { x: 20, y: 33});
            break;
          case SCHLEUSE4:
            goToOnTile(gameData, { x: 22, y: 26});
            break;
          case SCHLEUSE6:
            goToOnTile(gameData, { x: 32, y: 26});
            break;
        }
      }
      break;
    case 2:
      gameData.guy.active = true;
      PlaySound(WAVANGEL, 100);
      if (isOnSea(gameData)) {
        gameData.guy.position.y -= 2;
        Guy.Zustand = GUYBOOTANGELN1;
      }
      if (tile.object) {
        switch (tile.object.sprite) {
          case spriteTypes.RIVER_SLOPE_NORTH:
          case spriteTypes.RIVER_NORTH_SOUTH:  
          case spriteTypes.RIVER_WEST_SOUTH:  
          case spriteTypes.RIVER_MOUTH_NORTH:  
          case spriteTypes.RIVER_SPRING_SOUTH:  
            Guy.Zustand = GUYANGELN1LINKS;
            break;
          case spriteTypes.RIVER_SLOPE_WEST:
          case spriteTypes.RIVER_WEST_EAST:  
          case spriteTypes.RIVER_WEST_NORTH:  
          case spriteTypes.RIVER_MOUTH_WEST:  
          case spriteTypes.RIVER_SPRING_EAST:  
            Guy.Zustand = GUYANGELN1OBEN;
            break;
          case spriteTypes.RIVER_SLOPE_SOUTH:
          case spriteTypes.RIVER_NORTH_EAST:  
          case spriteTypes.RIVER_MOUTH_SOUTH:  
          case spriteTypes.RIVER_SPRING_NORTH:  
            Guy.Zustand = GUYANGELN1RECHTS;
            break;
          case spriteTypes.RIVER_SLOPE_EAST:
          case spriteTypes.RIVER_SOUTH_EAST:  
          case spriteTypes.RIVER_MOUTH_EAST:  
          case spriteTypes.RIVER_SPRING_WEST:  
            Guy.Zustand = GUYANGELN1UNTEN;
            break;
        }
      } else {
        switch (tile.Objekt) {
          case SCHLEUSE2:
          case SCHLEUSE3:
            Guy.Zustand = GUYANGELN1LINKS;
            break;
          case SCHLEUSE1:
          case SCHLEUSE5:
            Guy.Zustand = GUYANGELN1OBEN;
            break;
          case SCHLEUSE4:
            Guy.Zustand = GUYANGELN1RECHTS;
            break;
          case SCHLEUSE6:
            Guy.Zustand = GUYANGELN1UNTEN;
            break;
        }
      }
      break;
    case 3:
    case 4:
    case 5:
    case 6:
      gameData.guy.active = true;
      if (isOnSea(gameData)) Guy.Zustand = GUYBOOTANGELN2;

      if (tile.object) {
        switch (tile.object.sprite) {
          case spriteTypes.RIVER_SLOPE_NORTH:
          case spriteTypes.RIVER_NORTH_SOUTH:  
          case spriteTypes.RIVER_WEST_SOUTH:  
          case spriteTypes.RIVER_MOUTH_NORTH:  
          case spriteTypes.RIVER_SPRING_SOUTH:  
            Guy.Zustand = GUYANGELN2LINKS;
            break;
          case spriteTypes.RIVER_SLOPE_WEST:
          case spriteTypes.RIVER_WEST_EAST:  
          case spriteTypes.RIVER_WEST_NORTH:  
          case spriteTypes.RIVER_MOUTH_WEST:  
          case spriteTypes.RIVER_SPRING_EAST:  
            Guy.Zustand = GUYANGELN2OBEN;
            break;
          case spriteTypes.RIVER_SLOPE_SOUTH:
          case spriteTypes.RIVER_NORTH_EAST:  
          case spriteTypes.RIVER_MOUTH_SOUTH:  
          case spriteTypes.RIVER_SPRING_NORTH:  
            Guy.Zustand = GUYANGELN2RECHTS;
            break;
          case spriteTypes.RIVER_SLOPE_EAST:
          case spriteTypes.RIVER_SOUTH_EAST:  
          case spriteTypes.RIVER_MOUTH_EAST:  
          case spriteTypes.RIVER_SPRING_WEST:  
            Guy.Zustand = GUYANGELN2UNTEN;
            break;
        }
      } else {
        switch (tile.Objekt) {
          case SCHLEUSE2:
          case SCHLEUSE3:
            Guy.Zustand = GUYANGELN2LINKS;
            break;
          case SCHLEUSE1:
          case SCHLEUSE5:
            Guy.Zustand = GUYANGELN2OBEN;
            break;
          case SCHLEUSE4:
            Guy.Zustand = GUYANGELN2RECHTS;
            break;
          case SCHLEUSE6:
            Guy.Zustand = GUYANGELN2UNTEN;
            break;
        }
      }
      Guy.Resource[GESUNDHEIT] += 2;
      AddTime(0, 20);
      break;
    case 7:
      gameData.guy.active = true;
      if (isOnSea(gameData)) Guy.Zustand = GUYBOOTANGELN3;

      if (tile.object) {
        switch (tile.object.sprite) {
          case spriteTypes.RIVER_SLOPE_NORTH:
          case spriteTypes.RIVER_NORTH_SOUTH:  
          case spriteTypes.RIVER_WEST_SOUTH:  
          case spriteTypes.RIVER_MOUTH_NORTH:  
          case spriteTypes.RIVER_SPRING_SOUTH:  
            Guy.Zustand = GUYANGELN3LINKS;
            break;
          case spriteTypes.RIVER_SLOPE_WEST:
          case spriteTypes.RIVER_WEST_EAST:  
          case spriteTypes.RIVER_WEST_NORTH:  
          case spriteTypes.RIVER_MOUTH_WEST:  
          case spriteTypes.RIVER_SPRING_EAST:  
            Guy.Zustand = GUYANGELN3OBEN;
            break;
          case spriteTypes.RIVER_SLOPE_SOUTH:
          case spriteTypes.RIVER_NORTH_EAST:  
          case spriteTypes.RIVER_MOUTH_SOUTH:  
          case spriteTypes.RIVER_SPRING_NORTH:  
            Guy.Zustand = GUYANGELN3RECHTS;
            break;
          case spriteTypes.RIVER_SLOPE_EAST:
          case spriteTypes.RIVER_SOUTH_EAST:  
          case spriteTypes.RIVER_MOUTH_EAST:  
          case spriteTypes.RIVER_SPRING_WEST:  
            Guy.Zustand = GUYANGELN3UNTEN;
            break;
        }
      } else {
        switch (tile.Objekt) {
          case SCHLEUSE2:
          case SCHLEUSE3:
            Guy.Zustand = GUYANGELN3LINKS;
            break;
          case SCHLEUSE1:
          case SCHLEUSE5:
            Guy.Zustand = GUYANGELN3OBEN;
            break;
          case SCHLEUSE4:
            Guy.Zustand = GUYANGELN3RECHTS;
            break;
          case SCHLEUSE6:
            Guy.Zustand = GUYANGELN3UNTEN;
            break;
        }
      }
      break;
    case 8:
      goToStoredPosition(gameData);
      break;
    case 9:
      Guy.Resource[NAHRUNG] += 20;
      Guy.Aktion = AKNICHTS;
      break;
  }
}

const AkAnzuenden = () => {
  if (Guy.AkNummer === 0) {
    gameData.guy.storedPosition = { ...gameData.guy.position };  //Die Originalposition merken
  }
  Guy.AkNummer++;
  switch (Guy.AkNummer) {
    case 1:
      const tile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];
      goToOnTile(gameData, {
        x: tile.ObPos.x + Bmp[tile.Objekt].Breite / 2 - 10,
        y: tile.ObPos.y + Bmp[tile.Objekt].Hoehe + 1
      });
      break;
    case 2:
      gameData.guy.active = true;
      Guy.Zustand = GUYANZUENDEN;
      gameData.guy.position.x += 5;
      AddTime(0, 1);
      break;
    case 3:
      gameData.guy.active = true;
      Guy.Zustand = GUYWARTEN;
      gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt = FEUER;
      gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].ObPos.x = Bmp[FEUER].rcDes.left;
      gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].ObPos.y = Bmp[FEUER].rcDes.top;
      Chance += 2 + 2 * gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].height;
      AddTime(0, 2);
      gameData.guy.position.x -= 5;
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
      gameData.guy.active = true;
      Guy.Zustand = GUYAUSSCHAU;
      AddTime(0, 40);
      Chance += 1 + gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].height;
      break;
    case 2:
      gameData.guy.active = true;
      Guy.Zustand = GUYWARTEN;
      AddTime(0, 40);
      break;
    case 3:
      gameData.guy.active = true;
      Guy.Zustand = GUYAUSSCHAU;
      AddTime(0, 40);
      break;
    case 4:
      goToStoredPosition(gameData);
      break;
    case 5:
      Chance -= 1 + gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].height;
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
      gameData.guy.position.x -= 5;
      gameData.guy.position.y += 1;
      gameData.guy.active = true;
      Guy.Zustand = GUYSCHAUFELN;
      break;
    case 2:
      AddTime(0, 20);
      AddResource(WASSER, -10);
      AddResource(NAHRUNG, -10);
      gameData.guy.position.x += 5;
      gameData.guy.position.y -= 1;
      goToStoredPosition(gameData);
      if (gameData.guy.tile.x === gameData.treasure.x && gameData.guy.tile.y === gameData.treasure.y && !gameData.treasure.found) {
        PapierText = DrawText(texts.SCHATZGEFUNDEN, TXTPAPIER, 1);
        Guy.Inventar[ROHSTREICHHOLZ] = 1;
        Bmp[BUTTANZUENDEN].Phase = 0;
        gameData.treasure.found = true;
      } else PapierText = DrawText(texts.KEINSCHATZ, TXTPAPIER, 1);
      break;
    case 3:
      Guy.Aktion = AKNICHTS;
      break;
  }
}

const AkFeld = () => {
  let i;
  const tile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];

  if (tile.AkNummer === 0) {
    gameData.guy.storedPosition = { ...gameData.guy.position };  //Die Originalposition merken
    for (i = 0; i < BILDANZ; i++)
      tile.Rohstoff[i] = Bmp[FELD].Rohstoff[i];
    tile.Objekt = FELD;
    tile.ObPos.x = Bmp[FELD].rcDes.left;
    tile.ObPos.y = Bmp[FELD].rcDes.top;
    tile.Phase = Bmp[FELD].Anzahl;
  }
  tile.AkNummer++;
  if (!CheckRohstoff()) {
    tile.AkNummer--;
    return;
  }
  
  switch (tile.AkNummer) {
    case 1:
      goToOnTile(gameData, {
        x: tile.ObPos.x + 22,
        y: tile.ObPos.y + 23
      });
      break;
    case 4:
      tile.Phase = 4;
      goToOnTile(gameData, {
        x: tile.ObPos.x + 25,
        y: tile.ObPos.y + 21
      });
      AddResource(WASSER, -2);
      AddResource(NAHRUNG, -2);
      AddTime(0, 30);
      break;
    case 7:
      tile.Phase = 5;
      goToOnTile(gameData, {
        x: tile.ObPos.x + 28,
        y: tile.ObPos.y + 19
      });
      AddResource(WASSER, -2);
      AddResource(NAHRUNG, -2);
      AddTime(0, 30);
      break;
    case 10:
      tile.Phase = 6;
      goToOnTile(gameData, {
        x: tile.ObPos.x + 31,
        y: tile.ObPos.y + 17
      });
      AddResource(WASSER, -2);
      AddResource(NAHRUNG, -2);
      AddTime(0, 30);
      break;
    case 13:
      tile.Phase = 7;
      goToOnTile(gameData, {
        x: tile.ObPos.x + 34,
        y: tile.ObPos.y + 15
      });
      AddResource(WASSER, -2);
      AddResource(NAHRUNG, -2);
      AddTime(0, 30);
      break;
    case 16:
      tile.Phase = 8;
      goToOnTile(gameData, {
        x: tile.ObPos.x + 36,
        y: tile.ObPos.y + 13
      });
      AddResource(WASSER, -2);
      AddResource(NAHRUNG, -2);
      AddTime(0, 30);
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
      gameData.guy.active = true;
      Guy.Zustand = GUYFELD;
      break;
    case 19:
      goToStoredPosition(gameData);
      tile.Objekt = FELD;
      tile.ObPos.x = Bmp[FELD].rcDes.left;
      tile.ObPos.y = Bmp[FELD].rcDes.top;
      break;
    case 20:
      tile.Phase = 0;
      Bmp[BUTTSTOP].Phase = -1;
      if (Bmp[FELD].First) {
        PapierText = DrawText(texts.FELDHILFE, TXTPAPIER, 1);
        Bmp[FELD].First = false;
      }
      Guy.Aktion = AKNICHTS;
      break;
  }
}

const AkTagEnde = () => {
  let Erg;
  Guy.AkNummer++;
  switch (Guy.AkNummer) {
    case 1:
      Fade(0, 3);
      Stunden = 12;
      Minuten = 0;
      TwoClicks = -1; //Keine Ahnung warum ich das hier machen muß
      Bmp[BUTTSTOP].Phase = -1;
      if ((Guy.Zustand === GUYSCHLAFZELT) || (Guy.Zustand === GUYSCHLAFEN) ||
        (Guy.Zustand === GUYSCHLAFHAUS) || isOnSea(gameData)) break;
      gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].GPosAlt.x = gameData.guy.position.x;
      gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].GPosAlt.y = gameData.guy.position.y;
      goToInitialPosition();
      break;
    case 2:
      Stunden = 12;
      Minuten = 0;
      if ((Guy.Zustand === GUYSCHLAFZELT) || (Guy.Zustand === GUYSCHLAFEN) ||
        (Guy.Zustand === GUYSCHLAFHAUS) || isOnSea(gameData)) break;
      //Wohnbare Objekte in der Umgebung suchen
      Erg = {
        x: -1,
        y: -1
      };
      if ((gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt === ZELT) || (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt === HAUS3)) {
        Erg.x = gameData.guy.tile.x;
        Erg.y = gameData.guy.tile.y;
      } else if (gameData.terrain[gameData.guy.tile.x - 1][gameData.guy.tile.y].Objekt === HAUS3) {
        Erg.x = gameData.guy.tile.x - 1;
        Erg.y = gameData.guy.tile.y;
      } else if (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y - 1].Objekt === HAUS3) {
        Erg.x = gameData.guy.tile.x;
        Erg.y = gameData.guy.tile.y - 1;
      } else if (gameData.terrain[gameData.guy.tile.x + 1][gameData.guy.tile.y].Objekt === HAUS3) {
        Erg.x = gameData.guy.tile.x + 1;
        Erg.y = gameData.guy.tile.y;
      } else if (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y + 1].Objekt === HAUS3) {
        Erg.x = gameData.guy.tile.x;
        Erg.y = gameData.guy.tile.y + 1;
      } else if (gameData.terrain[gameData.guy.tile.x - 1][gameData.guy.tile.y].Objekt === ZELT) {
        Erg.x = gameData.guy.tile.x - 1;
        Erg.y = gameData.guy.tile.y;
      } else if (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y - 1].Objekt === ZELT) {
        Erg.x = gameData.guy.tile.x;
        Erg.y = gameData.guy.tile.y - 1;
      } else if (gameData.terrain[gameData.guy.tile.x + 1][gameData.guy.tile.y].Objekt === ZELT) {
        Erg.x = gameData.guy.tile.x + 1;
        Erg.y = gameData.guy.tile.y;
      } else if (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y + 1].Objekt === ZELT) {
        Erg.x = gameData.guy.tile.x;
        Erg.y = gameData.guy.tile.y + 1;
      }
      if ((Erg.x !== -1) && (Erg.y !== -1)) {
        gameData.guy.tile.x = Erg.x;
        gameData.guy.tile.y = Erg.y;
        const tile = gameData.terrain[Erg.x][Erg.y];
        if ((tile.Objekt === ZELT) && (tile.Phase < Bmp[tile.Objekt].Anzahl))
          goToOnTile(gameData, {
            x: tile.ObPos.x + 3,
            y: tile.ObPos.y + 20
          });
        else if ((tile.Objekt === HAUS3) && (tile.Phase < Bmp[tile.Objekt].Anzahl))
          goToOnTile(gameData, {
            x: tile.ObPos.x + sprites[spriteTypes.BIG_TREE].width / 2,
            y: tile.ObPos.y + sprites[spriteTypes.BIG_TREE].height + 1
          });
      }
      break;
    case 3:
      Stunden = 12;
      Minuten = 0;
      if ((Guy.Zustand === GUYSCHLAFZELT) || (Guy.Zustand === GUYSCHLAFEN) ||
        (Guy.Zustand === GUYSCHLAFHAUS) || isOnSea(gameData)) break;
      if ((gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt === HAUS3) &&
        (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Phase < Bmp[gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt].Anzahl)) {
        gameData.guy.active = true;
        Guy.Zustand = GUYKLETTERN1;
      }
      break;
    case 4:
      Stunden = 12;
      Minuten = 0;
      if ((Guy.Zustand === GUYSCHLAFZELT) || (Guy.Zustand === GUYSCHLAFEN) ||
        (Guy.Zustand === GUYSCHLAFHAUS) || isOnSea(gameData)) break;
      if ((gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt === ZELT) &&
        (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Phase < Bmp[gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt].Anzahl)) {
        gameData.guy.active = true;
        Guy.Zustand = GUYGEHINZELT;
      } else if ((gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt === HAUS3) &&
        (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Phase < Bmp[gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt].Anzahl)) {
        gameData.guy.active = true;
        Guy.Zustand = GUYGEHINHAUS;
      } else {
        gameData.guy.position.x += 3;
        gameData.guy.active = true;
        Guy.Zustand = GUYHINLEGEN;
      }
      break;
    case 5:
      Stunden = 12;
      Minuten = 0;
      if (isOnSea(gameData)) break;
      gameData.guy.active = true;
      if ((gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt === ZELT) &&
        (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Phase < Bmp[gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt].Anzahl)) {
        if (Guy.Zustand !== GUYSCHLAFZELT) gameData.guy.position.x += 4;
        Guy.Zustand = GUYSCHLAFZELT;
      } else if ((gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt === HAUS3) &&
        (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Phase < Bmp[gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt].Anzahl)) {
        if (Guy.Zustand !== GUYSCHLAFHAUS) gameData.guy.position.x += 14;
        Guy.Zustand = GUYSCHLAFHAUS;
      } else Guy.Zustand = GUYSCHLAFEN;
      break;
    case 6:
      Stunden = 12;
      Minuten = 0;
      if (isOnSea(gameData)) break;
      gameData.guy.active = true;
      if ((gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt === ZELT) &&
        (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Phase < Bmp[gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt].Anzahl))
        Guy.Zustand = GUYSCHLAFZELT;
      else if ((gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt === HAUS3) &&
        (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Phase < Bmp[gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt].Anzahl))
        Guy.Zustand = GUYSCHLAFHAUS;
      else Guy.Zustand = GUYSCHLAFEN;
      break;
    case 7:
      Nacht = true;
      Stunden = 12;
      Minuten = 0;
      PlaySound(WAVWOLF, 100);
      //Falsche Objekte Löschen
      if ((gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt >= BAUM1DOWN) &&
        (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt <= BAUM4DOWN)) {
        gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt = -1;
        Guy.Inventar[ROHSTAMM]++;
        if (Guy.Inventar[ROHSTAMM] > 10) Guy.Inventar[ROHSTAMM] = 10;
      }

      //Je nach Schlafort Zustand verändern
      if ((gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt === ZELT) &&
        (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Phase < Bmp[gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt].Anzahl)) {
        AddResource(GESUNDHEIT, -5);
        if (Guy.Resource[GESUNDHEIT] <= 0) {
          gameData.guy.active = true;
          PapierText = DrawText(texts.TAGENDE5, TXTPAPIER, 1);
          Guy.AkNummer = 2;
          Guy.Aktion = AKTOD;
          Stunden = 0;
          Minuten = 0;
        } else {
          gameData.guy.active = true;
          PapierText = DrawText(texts.TAGENDE2, TXTPAPIER, 1);
        }
      } else if ((gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt === HAUS3) &&
        (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Phase < Bmp[gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt].Anzahl)) {
        AddResource(GESUNDHEIT, +20);
        gameData.guy.active = true;
        PapierText = DrawText(texts.TAGENDE4, TXTPAPIER, 1);
      } else if (isOnSea(gameData)) {
        gameData.guy.active = true;
        Guy.Zustand = GUYBOOTWARTEN;
        PapierText = DrawText(texts.TAGENDE3, TXTPAPIER, 1);
        Guy.AkNummer = 2;
        Guy.Aktion = AKTOD;
        Stunden = 0;
        Minuten = 0;
      } else {
        AddResource(GESUNDHEIT, -20);
        if (Guy.Resource[GESUNDHEIT] <= 0) {
          gameData.guy.active = true;
          PapierText = DrawText(texts.TAGENDE5, TXTPAPIER, 1);
          Guy.AkNummer = 2;
          Guy.Aktion = AKTOD;
          Stunden = 0;
          Minuten = 0;
        } else {
          gameData.guy.active = true;
          PapierText = DrawText(texts.TAGENDE1, TXTPAPIER, 1);
        }
      }
      break;
    case 8:
      Fade(0, 0);
      Nacht = false;
      Tag++;
      Stunden = 0;
      Minuten = 0;
      //if (isOnSea(gameData)) NeuesSpiel(true); //Später hier tot!!

      gameData.guy.active = true;
      if ((gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt === ZELT) &&
        (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Phase < Bmp[gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt].Anzahl))
        Guy.Zustand = GUYSCHLAFZELT;
      else if ((gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt === HAUS3) &&
        (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Phase < Bmp[gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt].Anzahl))
        Guy.Zustand = GUYSCHLAFHAUS;
      else Guy.Zustand = GUYSCHLAFEN;
      break;
    case 9:
      Fade(100, 2);
      Stunden = 0;
      Minuten = 0;

      Stunden = 0;
      Minuten = 0;
      gameData.guy.active = true;
      if ((gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt === ZELT) &&
        (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Phase < Bmp[gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt].Anzahl))
        Guy.Zustand = GUYSCHLAFZELT;
      else if ((gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt === HAUS3) &&
        (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Phase < Bmp[gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt].Anzahl))
        Guy.Zustand = GUYSCHLAFHAUS;
      else Guy.Zustand = GUYSCHLAFEN;
      break;
    case 10:
      Stunden = 0;
      Minuten = 0;
      StopSound(WAVSCHNARCHEN);
      gameData.guy.active = true;
      if ((gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt === HAUS3) &&
        (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Phase < Bmp[gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt].Anzahl)) {
        gameData.guy.position.x -= 14;
        Guy.Zustand = GUYGEHAUSHAUS;
      } else Guy.Zustand = GUYAUFSTEHEN;
      break;
    case 11:
      Stunden = 0;
      Minuten = 0;
      if ((gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt === HAUS3) &&
        (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Phase < Bmp[gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt].Anzahl)) {
        gameData.guy.active = true;
        Guy.Zustand = GUYKLETTERN2;
      }
      break;
    case 12:
      Stunden = 0;
      Minuten = 0;
      Guy.Zustand = GUYLINKS;
      Guy.Aktion = AKNICHTS;
      if (Guy.Resource[GESUNDHEIT] > 10) SaveGame();
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
      gameData.guy.active = true;
      Guy.Zustand = GUYWARTEN;
      PapierText = DrawText(texts.GERETTET, TXTPAPIER, 1);
      break;
    case 3:
      if (Frage === 2) {
        Guy.Aktion = AKNICHTS;
        Frage = -1;
        break;
      }
      Spielzustand = GAME_OUTRO;
      Frage = -1;
      break;
    case 4:
      // Route herstellen
      gameData.guy.active = true;
      Guy.Zustand = GUYRECHTS;
      for (x = MAXXKACH - 1; x > 1; x--)//Position des Rettungsschiffs festlegen
      {
        if (gameData.terrain[x][gameData.guy.tile.y].ground !== grounds.SEA) break;
      }
      //Schiff hinbauen
      gameData.terrain[x + 2][gameData.guy.tile.y].Phase = 0;
      gameData.terrain[x + 2][gameData.guy.tile.y].object = null;
      gameData.terrain[x + 2][gameData.guy.tile.y].Objekt = GUYSCHIFF;
      gameData.terrain[x + 2][gameData.guy.tile.y].ObPos.x = 10;
      gameData.terrain[x + 2][gameData.guy.tile.y].ObPos.y = 10;

      gameData.guy.route = findRoute(gameData, { x, y: gameData.guy.tile.y });
      Guy.Zustand = GUYRECHTS;
      break;
    case 5:
      Guy.Zustand = GUYRECHTS;
      goToEastOfTile(gameData);
      break;
    case 6:
      gameData.guy.tile.x += 2;
      Entdecken();
      Guy.Zustand = GUYSCHWIMMEN;
      goToCenterOfTile(gameData);
      break;
    case 7:
      gameData.guy.active = true;
      Guy.Zustand = GUYSCHIFF;
      gameData.guy.route = findRoute(gameData, { x: gameData.terrain.length - 1, y: gameData.guy.tile.y });
      gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Objekt = -1;
      gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].object = createWaves();
      break;
    case 8:
      gameData.guy.active = true;
      Guy.Zustand = GUYSCHIFF;
      break;
    case 9:
      Guy.Aktion = AKNICHTS;
      Guy.Zustand = GUYLINKS;
      Spielzustand = GAME_CREDITS;
      break;
  }
}

const AkZelt = () => {
  let i;

  const tile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];
  if (tile.AkNummer === 0) {
    gameData.guy.storedPosition = { ...gameData.guy.position };  //Die Originalposition merken
    tile.Objekt = ZELT;
    for (i = 0; i < BILDANZ; i++)
      tile.Rohstoff[i] = Bmp[ZELT].Rohstoff[i];
    tile.Phase = Bmp[tile.Objekt].Anzahl;
    tile.ObPos.x = Bmp[ZELT].rcDes.left;
    tile.ObPos.y = Bmp[ZELT].rcDes.top;
  }
  tile.AkNummer++;
  if (!CheckRohstoff()) {
    tile.AkNummer--;
    return;
  }
  switch (tile.AkNummer) {
    case 1:
      goToOnTile(gameData, {
        x: tile.ObPos.x + 22,
        y: tile.ObPos.y + 12
      });
      break;
    case 2:
    case 3:
    case 12:
    case 13:
      gameData.guy.active = true;
      Guy.Zustand = GUYBINDENUNTEN;
      AddResource(WASSER, -2);
      AddResource(NAHRUNG, -2);
      AddTime(0, 15);
      break;
    case 4:
      tile.Phase = 2;
      goToOnTile(gameData, {
        x: tile.ObPos.x + 31,
        y: tile.ObPos.y + 20
      });
      break;
    case 5:
      goToStoredPosition(gameData);
      break;
    case 6:
      goToOnTile(gameData, {
        x: tile.ObPos.x + 3,
        y: tile.ObPos.y + 20
      });
      break;
    case 7:
    case 8:
      gameData.guy.active = true;
      Guy.Zustand = GUYBINDENOBEN;
      AddResource(WASSER, -2);
      AddResource(NAHRUNG, -2);
      AddTime(0, 15);
      break;
    case 9:
      tile.Phase = 3;
      goToStoredPosition(gameData);
      break;
    case 10:
      goToOnTile(gameData, {
        x: tile.ObPos.x + 31,
        y: tile.ObPos.y + 20
      });
      break;
    case 11:
      goToOnTile(gameData, {
        x: tile.ObPos.x + 22,
        y: tile.ObPos.y + 12
      });
      break;
    case 14:
      goToOnTile(gameData, {
        x: tile.ObPos.x + 31,
        y: tile.ObPos.y + 20
      });
      break;
    case 15:
      goToStoredPosition(gameData);
      break;
    case 16:
      tile.Phase = 0;
      Bmp[BUTTSTOP].Phase = -1;
      if (Bmp[ZELT].First) {
        PapierText = DrawText(texts.ZELTHILFE, TXTPAPIER, 1);
        Bmp[ZELT].First = false;
      }
      Guy.Aktion = AKNICHTS;
      break;
  }
}

const AkBoot = () => {
  let i;

  const tile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];
  if (tile.AkNummer === 0) {
    gameData.guy.storedPosition = { ...gameData.guy.position };  //Die Originalposition merken
    tile.Objekt = BOOT;
    for (i = 0; i < BILDANZ; i++)
      tile.Rohstoff[i] = Bmp[BOOT].Rohstoff[i];
    tile.Phase = Bmp[BOOT].Anzahl;
    tile.ObPos.x = Bmp[BOOT].rcDes.left;
    tile.ObPos.y = Bmp[BOOT].rcDes.top;
  }
  tile.AkNummer++;
  if (!CheckRohstoff()) {
    tile.AkNummer--;
    return;
  }
  switch (tile.AkNummer) {
    case 1:
      goToOnTile(gameData, {
        x: tile.ObPos.x + 30,
        y: tile.ObPos.y + 21
      });
      break;
    case 2:
      goToOnTile(gameData, {
        x: tile.ObPos.x + 29,
        y: tile.ObPos.y + 20
      });
    case 3:
      goToOnTile(gameData, {
        x: tile.ObPos.x + 28,
        y: tile.ObPos.y + 19
      });
      tile.Phase = (Bmp[BOOT].Anzahl + 1);
      break;
    case 4:
    case 5:
    case 6:
    case 8:
    case 9:
    case 10:
    case 12:
    case 13:
    case 14:
      gameData.guy.active = true;
      Guy.Zustand = GUYSCHLAGEN;
      AddResource(WASSER, -2);
      AddResource(NAHRUNG, -2);
      AddTime(0, 15);
      break;
    case 7:
      goToOnTile(gameData, {
        x: tile.ObPos.x + 22,
        y: tile.ObPos.y + 16
      });
      tile.Phase = (Bmp[BOOT].Anzahl + 2);
      break;
    case 11:
      goToOnTile(gameData, {
        x: tile.ObPos.x + 14,
        y: tile.ObPos.y + 11
      });
      tile.Phase = (Bmp[BOOT].Anzahl + 3);
      break;
    case 15:
      goToStoredPosition(gameData);
      break;
    case 16:
      if (gameData.terrain[gameData.guy.tile.x - 1][gameData.guy.tile.y].ground === grounds.SEA) {
        tile.Phase = 0;
        tile.ObPos.x = 0;
        tile.ObPos.y = 10;
      } else if (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y - 1].ground === grounds.SEA) {
        tile.Phase = 1;
        tile.ObPos.x = 25;
        tile.ObPos.y = 10;
      } else if (gameData.terrain[gameData.guy.tile.x + 1][gameData.guy.tile.y].ground === grounds.SEA) {
        tile.Phase = 0;
        tile.ObPos.x = 30;
        tile.ObPos.y = 27;
      } else if (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y + 1].ground === grounds.SEA) {
        tile.Phase = 1;
        tile.ObPos.x = 0;
        tile.ObPos.y = 28;
      }
      Bmp[BUTTSTOP].Phase = -1;
      if (Bmp[BOOT].First) {
        PapierText = DrawText(texts.BOOTHILFE, TXTPAPIER, 1);
        Bmp[BOOT].First = false;
      }
      Guy.Aktion = AKNICHTS;
      break;
  }
}

const AkRohr = () => {
  let i;

  const tile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];
  if (tile.AkNummer === 0) {
    gameData.guy.storedPosition = { ...gameData.guy.position };  //Die Originalposition merken
    tile.Objekt = ROHR;
    for (i = 0; i < BILDANZ; i++)
      tile.Rohstoff[i] = Bmp[ROHR].Rohstoff[i];
    tile.Phase = Bmp[ROHR].Anzahl;
    tile.ObPos.x = Bmp[ROHR].rcDes.left;
    tile.ObPos.y = Bmp[ROHR].rcDes.top;
  }
  tile.AkNummer++;
  if (!CheckRohstoff()) {
    tile.AkNummer--;
    return;
  }
  switch (tile.AkNummer) {
    case 1:
      goToOnTile(gameData, {
        x: tile.ObPos.x + 30,
        y: tile.ObPos.y + 21
      });
      break;
    case 2:
      goToOnTile(gameData, {
        x: tile.ObPos.x + 29,
        y: tile.ObPos.y + 20
      });
      break;
    case 3:
      goToOnTile(gameData, {
        x: tile.ObPos.x + 28,
        y: tile.ObPos.y + 15
      });
      tile.Phase = (Bmp[ROHR].Anzahl + 1);
      break;
    case 4:
    case 5:
    case 6:
    case 11:
    case 12:
    case 13:
      gameData.guy.active = true;
      Guy.Zustand = GUYSCHLAGEN;
      AddResource(WASSER, -1);
      AddResource(NAHRUNG, -1);
      AddTime(0, 5);
      break;
    case 7:
    case 8:
    case 9:
    case 14:
    case 15:
    case 16:
      gameData.guy.active = true;
      Guy.Zustand = GUYFAELLEN;
      AddResource(WASSER, -1);
      AddResource(NAHRUNG, -1);
      AddTime(0, 5);
      break;
    case 10:
      goToOnTile(gameData, {
        x: tile.ObPos.x + 17,
        y: tile.ObPos.y + 13
      });
      tile.Phase = (Bmp[ROHR].Anzahl + 2);
      break;
    case 17:
      goToStoredPosition(gameData);
      break;
    case 18:
      tile.Phase = 0;
      FillRohr();
      Bmp[BUTTSTOP].Phase = -1;
      if (Bmp[ROHR].First) {
        PapierText = DrawText(texts.ROHRHILFE, TXTPAPIER, 1);
        Bmp[ROHR].First = false;
      }
      Guy.Aktion = AKNICHTS;
      break;
  }
}

const AkSOS = () => {
  let i;

  const tile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];
  if (tile.AkNummer === 0) {
    gameData.guy.storedPosition = { ...gameData.guy.position };  //Die Originalposition merken
    tile.Objekt = SOS;
    for (i = 0; i < BILDANZ; i++)
      tile.Rohstoff[i] = Bmp[SOS].Rohstoff[i];
    tile.Phase = Bmp[SOS].Anzahl;
    tile.ObPos.x = Bmp[SOS].rcDes.left;
    tile.ObPos.y = Bmp[SOS].rcDes.top;
  }
  tile.AkNummer++;
  if (!CheckRohstoff()) {
    tile.AkNummer--;
    return;
  }
  switch (tile.AkNummer) {
    case 1:
      goToOnTile(gameData, {
        x: tile.ObPos.x + 4,
        y: tile.ObPos.y + 13
      });
      break;
    case 4:
      goToOnTile(gameData, {
        x: tile.ObPos.x + 12,
        y: tile.ObPos.y + 17
      });
      tile.Phase = (Bmp[SOS].Anzahl + 1);
      break;
    case 7:
      goToOnTile(gameData, {
        x: tile.ObPos.x + 12,
        y: tile.ObPos.y + 9
      });
      tile.Phase = (Bmp[SOS].Anzahl + 2);
      break;
    case 10:
      goToOnTile(gameData, {
        x: tile.ObPos.x + 19,
        y: tile.ObPos.y + 12
      });
      tile.Phase = (Bmp[SOS].Anzahl + 3);
      break;
    case 13:
      goToOnTile(gameData, {
        x: tile.ObPos.x + 21,
        y: tile.ObPos.y + 5
      });
      tile.Phase = (Bmp[SOS].Anzahl + 4);
      break;
    case 16:
      goToOnTile(gameData, {
        x: tile.ObPos.x + 28,
        y: tile.ObPos.y + 8
      });
      tile.Phase = (Bmp[SOS].Anzahl + 5);
      break;
    case 2:
    case 5:
    case 8:
    case 11:
    case 14:
    case 17:
      gameData.guy.active = true;
      gameData.guy.position.x += 4;
      Guy.Zustand = GUYHINLEGEN;
      AddResource(WASSER, -1);
      AddResource(NAHRUNG, -1);
      AddTime(0, 1);
      break;
    case 3:
    case 6:
    case 9:
    case 12:
    case 15:
    case 18:
      gameData.guy.active = true;
      gameData.guy.position.x -= 4;
      Guy.Zustand = GUYAUFSTEHEN;
      AddResource(WASSER, -1);
      AddResource(NAHRUNG, -1);
      AddTime(0, 1);
      break;
    case 19:
      goToStoredPosition(gameData);
      break;
    case 20:
      tile.Phase = 0;
      if ((tile.ground === grounds.GRASS) || (tile.ground === grounds.WETLAND))
        Chance += 1;
      else Chance += 2; //Dürfte nur noch der Strand übrig sein
      Bmp[BUTTSTOP].Phase = -1;
      if (Bmp[SOS].First) {
        PapierText = DrawText(texts.SOSHILFE, TXTPAPIER, 1);
        Bmp[SOS].First = false;
      }
      Guy.Aktion = AKNICHTS;
      break;
  }
}

const AkFeuerstelle = () => {
  let i;

  const tile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];
  if (tile.AkNummer === 0) {
    gameData.guy.storedPosition = { ...gameData.guy.position };  //Die Originalposition merken
    tile.Objekt = FEUERSTELLE;
    for (i = 0; i < BILDANZ; i++)
      tile.Rohstoff[i] = Bmp[FEUERSTELLE].Rohstoff[i];
    tile.Phase = Bmp[FEUERSTELLE].Anzahl;
    tile.ObPos.x = Bmp[FEUERSTELLE].rcDes.left;
    tile.ObPos.y = Bmp[FEUERSTELLE].rcDes.top;
  }
  tile.AkNummer++;
  if (!CheckRohstoff()) {
    tile.AkNummer--;
    return;
  }
  switch (tile.AkNummer) {
    case 1:
      goToOnTile(gameData, {
        x: tile.ObPos.x + 4,
        y: tile.ObPos.y + 16
      });
      break;
    case 2:
      gameData.guy.active = true;
      gameData.guy.position.x += 4;
      Guy.Zustand = GUYHINLEGEN;
      AddResource(WASSER, -1);
      AddResource(NAHRUNG, -1);
      AddTime(0, 1);
      break;
    case 3:
      gameData.guy.active = true;
      gameData.guy.position.x -= 4;
      Guy.Zustand = GUYAUFSTEHEN;
      AddResource(WASSER, -1);
      AddResource(NAHRUNG, -1);
      AddTime(0, 1);
      tile.Phase = (Bmp[FEUERSTELLE].Anzahl + 1);
      break;
    case 4:
      goToOnTile(gameData, {
        x: tile.ObPos.x,
        y: tile.ObPos.y + 15
      });
      break;
    case 5:
    case 6:
    case 7:
      gameData.guy.active = true;
      Guy.Zustand = GUYBINDENOBEN;
      AddResource(WASSER, -1);
      AddResource(NAHRUNG, -1);
      AddTime(0, 1);
      if (tile.AkNummer !== 5)
      tile.Phase = (Bmp[FEUERSTELLE].Anzahl + tile.AkNummer - 4);
      break;
    case 8:
      goToStoredPosition(gameData);
      break;
    case 9:
      tile.Phase = 0;
      Bmp[BUTTSTOP].Phase = -1;
      if (Bmp[FEUERSTELLE].First) {
        PapierText = DrawText(texts.FEUERSTELLEHILFE, TXTPAPIER, 1);
        Bmp[FEUERSTELLE].First = false;
      }
      Guy.Aktion = AKNICHTS;
      break;
  }
}

const AkHaus1 = () => {
  let i;
  const tile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];

  if (tile.AkNummer === 0) {
    gameData.guy.storedPosition = { ...gameData.guy.position };  //Die Originalposition merken
    for (i = 0; i < BILDANZ; i++)
      tile.Rohstoff[i] = Bmp[HAUS1].Rohstoff[i];
    tile.Phase = Bmp[HAUS1].Anzahl;
    tile.originalObject = tile.object;
    tile.object = null;
    tile.Objekt = HAUS1;
    tile.ObPos.x = tile.originalObject.x;
    tile.ObPos.y = tile.originalObject.y;
  }
  tile.AkNummer++;
  if (!CheckRohstoff()) {
    tile.AkNummer--;
    return;
  }
  switch (tile.AkNummer) {
    case 1:
      goToOnTile(gameData, {
        x: tile.ObPos.x + sprites[spriteTypes.BIG_TREE].width / 2 - 3,
        y: tile.ObPos.y + sprites[spriteTypes.BIG_TREE].height + 1
      });
      break;
    case 2:
    case 3:
    case 4:
    case 5:
      gameData.guy.active = true;
      Guy.Zustand = GUYHAMMER;
      AddResource(NAHRUNG, -0.5);
      AddResource(WASSER, -0.5);
      AddTime(0, 1);
      break;
    case 6:
    case 7:
    case 8:
    case 9:
      gameData.guy.active = true;
      Guy.Zustand = GUYHAMMER;
      tile.Phase = (Bmp[HAUS1].Anzahl + 1);
      AddResource(NAHRUNG, -0.5);
      AddResource(WASSER, -0.5);
      AddTime(0, 1);
      break;
    case 10:
    case 11:
    case 12:
    case 13:
      gameData.guy.active = true;
      Guy.Zustand = GUYHAMMER;
      tile.Phase = (Bmp[HAUS1].Anzahl + 2);
      AddResource(NAHRUNG, -0.5);
      AddResource(WASSER, -0.5);
      AddTime(0, 1);
      break;
    case 14:
    case 15:
    case 16:
    case 17:
      gameData.guy.active = true;
      Guy.Zustand = GUYHAMMER;
      tile.Phase = (Bmp[HAUS1].Anzahl + 3);
      AddResource(NAHRUNG, -0.5);
      AddResource(WASSER, -0.5);
      AddTime(0, 1);
      break;
    case 18:
      goToStoredPosition(gameData);
      break;
    case 19:
      tile.Phase = 0;
      Bmp[BUTTSTOP].Phase = -1;
      Guy.Aktion = AKNICHTS;
      break;
  }
}

const AkHaus2 = () => {
  let i;

  const tile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];
  if (tile.AkNummer === 0) {
    gameData.guy.storedPosition = { ...gameData.guy.position };  //Die Originalposition merken
    for (i = 0; i < BILDANZ; i++)
      tile.Rohstoff[i] = Bmp[HAUS2].Rohstoff[i];
    tile.Phase = Bmp[HAUS2].Anzahl;
    tile.Objekt = HAUS2;
  }
  tile.AkNummer++;
  if (!CheckRohstoff()) {
    tile.AkNummer--;
    return;
  }
  switch (tile.AkNummer) {
    case 1:
      goToOnTile(gameData, {
        x: tile.ObPos.x + sprites[spriteTypes.BIG_TREE].width / 2,
        y: tile.ObPos.y + sprites[spriteTypes.BIG_TREE].height + 1
      });
      break;
    case 2:
      gameData.guy.active = true;
      Guy.Zustand = GUYKLETTERN1;
      AddResource(NAHRUNG, -1);
      AddResource(WASSER, -1);
      AddTime(0, 1);
      break;
    case 3:
    case 4:
    case 5:
    case 6:
      gameData.guy.active = true;
      Guy.Zustand = GUYHAMMER2;
      AddResource(NAHRUNG, -0.5);
      AddResource(WASSER, -0.5);
      AddTime(0, 1);
      break;
    case 7:
    case 8:
    case 9:
    case 10:
      gameData.guy.active = true;
      Guy.Zustand = GUYHAMMER2;
      tile.Phase = (Bmp[HAUS2].Anzahl + 1);
      AddResource(NAHRUNG, -0.5);
      AddResource(WASSER, -0.5);
      AddTime(0, 1);
      break;
    case 11:
    case 12:
    case 13:
    case 14:
      gameData.guy.active = true;
      Guy.Zustand = GUYHAMMER2;
      tile.Phase = (Bmp[HAUS2].Anzahl + 2);
      AddResource(NAHRUNG, -0.5);
      AddResource(WASSER, -0.5);
      AddTime(0, 1);
      break;
    case 15:
    case 16:
    case 17:
    case 18:
      gameData.guy.active = true;
      Guy.Zustand = GUYHAMMER2;
      tile.Phase = (Bmp[HAUS2].Anzahl + 3);
      AddResource(NAHRUNG, -0.5);
      AddResource(WASSER, -0.5);
      AddTime(0, 1);
      break;
    case 19:
      gameData.guy.active = true;
      Guy.Zustand = GUYKLETTERN2;
      tile.Phase = (Bmp[HAUS2].Anzahl + 4);
      AddResource(NAHRUNG, -1);
      AddResource(WASSER, -1);
      AddTime(0, 1);
      break;
    case 20:
      goToStoredPosition(gameData);
      break;
    case 21:
      tile.Phase = 0;
      Bmp[BUTTSTOP].Phase = -1;
      Guy.Aktion = AKNICHTS;
      break;
  }
}

const AkHaus3 = () => {
  let i;

  const tile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];
  if (tile.AkNummer === 0) {
    gameData.guy.storedPosition = { ...gameData.guy.position };  //Die Originalposition merken
    for (i = 0; i < BILDANZ; i++)
      tile.Rohstoff[i] = Bmp[HAUS3].Rohstoff[i];
    tile.Phase = Bmp[HAUS3].Anzahl;
    tile.Objekt = HAUS3;
  }
  tile.AkNummer++;
  if (!CheckRohstoff()) {
    tile.AkNummer--;
    return;
  }
  switch (tile.AkNummer) {
    case 1:
      goToOnTile(gameData, {
        x: tile.ObPos.x + sprites[spriteTypes.BIG_TREE].width / 2,
        y: tile.ObPos.y + sprites[spriteTypes.BIG_TREE].height + 1
      });
      break;
    case 2:
      gameData.guy.active = true;
      Guy.Zustand = GUYKLETTERN1;
      AddResource(NAHRUNG, -1);
      AddResource(WASSER, -1);
      AddTime(0, 1);
      break;
    case 3:
    case 4:
    case 5:
    case 6:
      gameData.guy.active = true;
      Guy.Zustand = GUYHAMMER2;
      AddResource(NAHRUNG, -0.5);
      AddResource(WASSER, -0.5);
      AddTime(0, 1);
      break;
    case 7:
    case 8:
    case 9:
    case 10:
      gameData.guy.active = true;
      Guy.Zustand = GUYHAMMER2;
      tile.Phase = (Bmp[HAUS3].Anzahl + 1);
      AddResource(NAHRUNG, -0.5);
      AddResource(WASSER, -0.5);
      AddTime(0, 1);
      break;
    case 11:
    case 12:
    case 13:
    case 14:
      gameData.guy.active = true;
      Guy.Zustand = GUYHAMMER2;
      tile.Phase = (Bmp[HAUS3].Anzahl + 2);
      AddResource(NAHRUNG, -0.5);
      AddResource(WASSER, -0.5);
      AddTime(0, 1);
      break;
    case 15:
    case 16:
    case 17:
    case 18:
      gameData.guy.active = true;
      Guy.Zustand = GUYHAMMER2;
      tile.Phase = (Bmp[HAUS3].Anzahl + 3);
      AddResource(NAHRUNG, -0.5);
      AddResource(WASSER, -0.5);
      AddTime(0, 1);
      break;
    case 19:
      gameData.guy.active = true;
      Guy.Zustand = GUYKLETTERN2;
      tile.Phase = (Bmp[HAUS3].Anzahl + 4);
      AddResource(NAHRUNG, -1);
      AddResource(WASSER, -1);
      AddTime(0, 1);
      break;
    case 20:
      goToStoredPosition(gameData);
      break;
    case 21:
      tile.Phase = 0;
      Bmp[BUTTSTOP].Phase = -1;
      if (Bmp[HAUS3].First) {
        PapierText = DrawText(texts.HAUS3HILFE, TXTPAPIER, 1);
        Bmp[HAUS3].First = false;
      }
      Guy.Aktion = AKNICHTS;
      break;
  }
}

const AkSchlafen = () => {
  const tile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];
  if (Guy.AkNummer === 0) {
    gameData.guy.storedPosition = { ...gameData.guy.position };  //Die Originalposition merken
  }
  Guy.AkNummer++;
  switch (Guy.AkNummer) {
    case 1:
      if ((tile.Objekt === ZELT) && (tile.Phase < Bmp[tile.Objekt].Anzahl))
        goToOnTile(gameData, {
          x: tile.ObPos.x + 3,
          y: tile.ObPos.y + 20
        });
      else if ((tile.Objekt === HAUS3) && (tile.Phase < Bmp[tile.Objekt].Anzahl))
        goToOnTile(gameData, {
          x: tile.ObPos.x + sprites[spriteTypes.BIG_TREE].width / 2 + 1,
          y: tile.ObPos.y + sprites[spriteTypes.BIG_TREE].height + 1
        });
      break;
    case 2:
      if ((tile.Objekt === HAUS3) &&(tile.Phase < Bmp[tile.Objekt].Anzahl)) {
        gameData.guy.active = true;
        Guy.Zustand = GUYKLETTERN1;
        AddResource(NAHRUNG, -1);
        AddResource(WASSER, -1);
      }
      break;
    case 3:
      if ((tile.Objekt === ZELT) && (tile.Phase < Bmp[tile.Objekt].Anzahl)) {
        gameData.guy.active = true;
        Guy.Zustand = GUYGEHINZELT;
      } else if ((tile.Objekt === HAUS3) && (tile.Phase < Bmp[tile.Objekt].Anzahl)) {
        gameData.guy.active = true;
        Guy.Zustand = GUYGEHINHAUS;
      } else {
        gameData.guy.position.x += 3;
        gameData.guy.active = true;
        Guy.Zustand = GUYHINLEGEN;
      }
      break;
    case 4:
    case 5:
      gameData.guy.active = true;
      if ((tile.Objekt === ZELT) && (tile.Phase < Bmp[tile.Objekt].Anzahl)) {
        if (Guy.AkNummer === 4) gameData.guy.position.x += 4;
        Guy.Zustand = GUYSCHLAFZELT;
      } else if ((tile.Objekt === HAUS3) && (tile.Phase < Bmp[tile.Objekt].Anzahl)) {
        if (Guy.AkNummer === 4) gameData.guy.position.x += 14;
        Guy.Zustand = GUYSCHLAFHAUS;
      } else Guy.Zustand = GUYSCHLAFEN;
      AddResource(GESUNDHEIT, 5);
      AddTime(0, 30);
      break;
    case 6:
      gameData.guy.active = true;
      StopSound(WAVSCHNARCHEN);
      if ((tile.Objekt === HAUS3) && (tile.Phase < Bmp[tile.Objekt].Anzahl)) {
        gameData.guy.position.x -= 14;
        Guy.Zustand = GUYGEHAUSHAUS;
      } else Guy.Zustand = GUYAUFSTEHEN;
      break;
    case 7:
      if ((tile.Objekt === HAUS3) && (tile.Phase < Bmp[tile.Objekt].Anzahl)) {
        gameData.guy.active = true;
        Guy.Zustand = GUYKLETTERN2;
        AddResource(NAHRUNG, -1);
        AddResource(WASSER, -1);
      } else {
        Guy.Zustand = GUYOBEN;
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
        x: tile.ObPos.x + 14,
        y: tile.ObPos.y + 11
      });
      break;
    case 2:
      gameData.guy.position.x = tile.position.x + tile.ObPos.x + Bmp[tile.Objekt].Breite / 2;
      gameData.guy.position.y = tile.position.y + tile.ObPos.y + Bmp[tile.Objekt].Hoehe / 2;
      tile.Objekt = -1;
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
      if (gameData.terrain[gameData.guy.tile.x - 1][gameData.guy.tile.y].ground !== grounds.SEA) {
        gameData.guy.tile.x--;
        gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Phase = 0;
      } else if (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y - 1].ground !== grounds.SEA) {
        gameData.guy.tile.y--;
        gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Phase = 1;
      } else if (gameData.terrain[gameData.guy.tile.x + 1][gameData.guy.tile.y].ground !== grounds.SEA) {
        gameData.guy.tile.x++;
        gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Phase = 0;
      } else if (gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y + 1].ground !== grounds.SEA) {
        gameData.guy.tile.y++;
        gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].Phase = 1;
      }

      const tile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];
      tile.Objekt = BOOT;
      tile.AkNummer = Bmp[BOOT].AkAnzahl;

      tile.ObPos.x = Math.floor(gameData.guy.position.x - tile.position.x - Bmp[tile.Objekt].Breite / 2);
      tile.ObPos.y = Math.floor(gameData.guy.position.y - tile.position.y - Bmp[tile.Objekt].Hoehe / 2);

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
  primaryCanvasContext.canvas.style.transition = `${smooth}s filter ease-in-out`;
  primaryCanvasContext.canvas.style.filter = `brightness(${intensity}%) saturate(${intensity}%)`;
}

const CheckRohr = (x, y) => {
  gameData.terrain[x][y].Phase = 1;
  if (gameData.terrain[x][y].ground === grounds.GRASS) gameData.terrain[x][y].ground = grounds.WETLAND;
  if (gameData.terrain[x - 1][y].ground === grounds.GRASS) gameData.terrain[x - 1][y].ground = grounds.WETLAND;
  if (gameData.terrain[x - 1][y - 1].ground === grounds.GRASS) gameData.terrain[x - 1][y - 1].ground = grounds.WETLAND;
  if (gameData.terrain[x][y - 1].ground === grounds.GRASS) gameData.terrain[x][y - 1].ground = grounds.WETLAND;
  if (gameData.terrain[x + 1][y - 1].ground === grounds.GRASS) gameData.terrain[x + 1][y - 1].ground = grounds.WETLAND;
  if (gameData.terrain[x + 1][y].ground === grounds.GRASS) gameData.terrain[x + 1][y].ground = grounds.WETLAND;
  if (gameData.terrain[x + 1][y + 1].ground === grounds.GRASS) gameData.terrain[x + 1][y + 1].ground = grounds.WETLAND;
  if (gameData.terrain[x][y + 1].ground === grounds.GRASS) gameData.terrain[x][y + 1].ground = grounds.WETLAND;
  if (gameData.terrain[x - 1][y + 1].ground === grounds.GRASS) gameData.terrain[x - 1][y + 1].ground = grounds.WETLAND;

  if ((gameData.terrain[x - 1][y].Objekt === ROHR) && (gameData.terrain[x - 1][y].Phase === 0)) CheckRohr(x - 1, y);
  if ((gameData.terrain[x][y - 1].Objekt === ROHR) && (gameData.terrain[x][y - 1].Phase === 0)) CheckRohr(x, y - 1);
  if ((gameData.terrain[x + 1][y].Objekt === ROHR) && (gameData.terrain[x + 1][y].Phase === 0)) CheckRohr(x + 1, y);
  if ((gameData.terrain[x][y + 1].Objekt === ROHR) && (gameData.terrain[x][y + 1].Phase === 0)) CheckRohr(x, y + 1);
}

const isStartRohr = (x, y) => {
  const tile = gameData.terrain[x][y];

  if ((tile.Objekt >= SCHLEUSE1) && (tile.Objekt <= SCHLEUSE6)) {
    return true;
  }

  switch (tile.object?.sprite) {
    case spriteTypes.RIVER_NORTH_EAST:
      tile.Objekt = SCHLEUSE4;
      break;
    case spriteTypes.RIVER_NORTH_SOUTH:
      tile.Objekt = SCHLEUSE2;
      break;
    case spriteTypes.RIVER_SOUTH_EAST:
      tile.Objekt = SCHLEUSE6;
      break;
    case spriteTypes.RIVER_WEST_NORTH:
      tile.Objekt = SCHLEUSE5;
      break;
    case spriteTypes.RIVER_WEST_EAST:
      tile.Objekt = SCHLEUSE1;
      break;
    case spriteTypes.RIVER_WEST_SOUTH:
      tile.Objekt = SCHLEUSE3;
      break;
    default:
      return false;
  }
  tile.originalObject = tile.object;
  tile.object = null;
  tile.Reverse = tile.originalObject.reverse;
  tile.Phase = tile.originalObject.frame;
  tile.ObPos.x = Bmp[tile.Objekt].rcDes.left;
  tile.ObPos.y = Bmp[tile.Objekt].rcDes.top;
  return true;
}

const FillRohr = () => {
  let x, y;

  for (y = 0; y < MAXYKACH; y++) {
    for (x = 0; x < MAXXKACH; x++) {
      if (gameData.terrain[x][y].Objekt === ROHR && gameData.terrain[x][y].Phase < Bmp[ROHR].Anzahl)
        gameData.terrain[x][y].Phase = 0;
      if (gameData.terrain[x][y].ground === grounds.WETLAND) gameData.terrain[x][y].ground = grounds.GRASS;
      if (gameData.terrain[x][y].Objekt >= SCHLEUSE1 && gameData.terrain[x][y].Objekt <= SCHLEUSE6) {
        gameData.terrain[x][y].originalObject.frame = gameData.terrain[x][y].Phase;
        gameData.terrain[x][y].object = gameData.terrain[x][y].originalObject;
        gameData.terrain[x][y].originalObject = null;
        gameData.terrain[x][y].Objekt = -1;
      }
    }
  }
  //StartRohr finden
  for (y = 0; y < MAXYKACH; y++) {
    for (x = 0; x < MAXXKACH; x++) {
      if (
        isRiver(gameData.terrain[x][y].object) ||
        (gameData.terrain[x][y].Objekt >= SCHLEUSE1 && gameData.terrain[x][y].Objekt <= SCHLEUSE6)
      ) {
        for (let neighborX = x - 1; neighborX <= x + 1; neighborX++) {
          for (let neighborY = y - 1; neighborY <= y + 1; neighborY++) {
            if (gameData.terrain[neighborX][neighborY].ground === grounds.GRASS) {
              gameData.terrain[neighborX][neighborY].ground = grounds.WETLAND;
            }
          }
        }
      }
      if ((gameData.terrain[x][y].Objekt !== ROHR) || (gameData.terrain[x][y].Phase >= Bmp[ROHR].Anzahl))
        continue;
      if (
        isStartRohr(x - 1, y) ||
        isStartRohr(x, y - 1) ||
        isStartRohr(x + 1, y) ||
        isStartRohr(x, y + 1)
      ) {
        CheckRohr(x, y);
      }
    }
  }
  //Felder auf trockenen Wiesen löschen
  for (y = 0; y < MAXYKACH; y++)
    for (x = 0; x < MAXXKACH; x++) {
      if ((gameData.terrain[x][y].Objekt === FELD) && (gameData.terrain[x][y].ground === grounds.GRASS)) {
        gameData.terrain[x][y].Objekt = -1;
        gameData.terrain[x][y].ObPos.x = 0;
        gameData.terrain[x][y].ObPos.y = 0;
        gameData.terrain[x][y].Phase = -1;
        gameData.terrain[x][y].AkNummer = 0;
      }
    }
}

const CheckBenutze = (Objekt) => {
  if (((Objekt === ROHSTEIN) && (TwoClicks === ROHAST)) ||
    ((Objekt === ROHAST) && (TwoClicks === ROHSTEIN))) {
    if (Guy.Inventar[ROHAXT] < 1) {
      Guy.Inventar[ROHSTEIN]--;
      Guy.Inventar[ROHAST]--;
      Guy.Inventar[ROHAXT] = 1;
      Bmp[BUTTFAELLEN].Phase = 0;
      Bmp[BUTTBOOT].Phase = 0;
      Bmp[BUTTROHR].Phase = 0;
      PapierText = DrawText(texts.BAUEAXT, TXTPAPIER, 1);
      PlaySound(WAVERFINDUNG, 100);
    } else if (Guy.Inventar[ROHEGGE] < 1) {
      Guy.Inventar[ROHSTEIN]--;
      Guy.Inventar[ROHAST]--;
      Guy.Inventar[ROHEGGE] = 1;
      Bmp[BUTTFELD].Phase = 0;
      PapierText = DrawText(texts.BAUEEGGE, TXTPAPIER, 1);
      PlaySound(WAVERFINDUNG, 100);
    } else {
      PapierText = DrawText(texts.STEINPLUSASTNICHTS, TXTPAPIER, 1);
    }
  } else if (((Objekt === ROHLIANE) && (TwoClicks === ROHAST)) ||
    ((Objekt === ROHAST) && (TwoClicks === ROHLIANE))) {
    if (Guy.Inventar[ROHANGEL] < 1) {
      Guy.Inventar[ROHLIANE]--;
      Guy.Inventar[ROHAST]--;
      Guy.Inventar[ROHANGEL] = 1;
      Bmp[BUTTANGELN].Phase = 0;
      PapierText = DrawText(texts.BAUEANGEL, TXTPAPIER, 1);
      PlaySound(WAVERFINDUNG, 100);
    } else {
      PapierText = DrawText(texts.ASTPLUSLIANENICHTS, TXTPAPIER, 1);
    }
  } else if (((Objekt === ROHLIANE) && (TwoClicks === ROHSTEIN)) ||
    ((Objekt === ROHSTEIN) && (TwoClicks === ROHLIANE))) {
    if (Guy.Inventar[ROHSCHLEUDER] < 1) {
      Guy.Inventar[ROHLIANE]--;
      Guy.Inventar[ROHSTEIN]--;
      Guy.Inventar[ROHSCHLEUDER] = 1;
      Bmp[BUTTSCHLEUDER].Phase = 0;
      PapierText = DrawText(texts.BAUESCHLEUDER, TXTPAPIER, 1);
      PlaySound(WAVERFINDUNG, 100);
    } else {
      PapierText = DrawText(texts.STEINPLUSLIANENICHTS, TXTPAPIER, 1);
    }
  } else {
    PapierText = DrawText(texts.NICHTBASTELN, TXTPAPIER, 1);
  }
  TwoClicks = -1;
}

const Animationen = () => {
  animateTerrain(gameData.terrain, frame, framesPerSecond);

  let x, y, i, j, k, loop; //Zwischenspeicher

  for (y = 0; y < MAXYKACH; y++) {
    for (x = 0; x < MAXXKACH; x++) {
      j = gameData.terrain[x][y].Objekt;
      if ((j === -1) || (!Bmp[j].Animation)) continue;
      i = Math.floor(framesPerSecond / Bmp[j].Geschwindigkeit);
      if (i < 1) i = 1;
      if (frame % i === 0) {
        gameData.terrain[x][y].Phase++;

        if (gameData.terrain[x][y].Phase >= Bmp[j].Anzahl) {
          gameData.terrain[x][y].Phase = 0;
          //Die Baumfällenanimation nur ein mal abspielen
          if (j >= BAUM1DOWN && j <= BAUM4DOWN) {
            gameData.terrain[x][y].Objekt = -1;
          }
        }
      }
    }
  }

  for (j = BUTTGITTER; j <= BUTTDESTROY; j++) {
    if (!Bmp[j].Animation) continue;
    i = Math.floor(framesPerSecond / Bmp[j].Geschwindigkeit);
    if (i < 1) i = 1;
    if (frame % i === 0) {
      Bmp[j].Phase++;
      if (Bmp[j].Phase >= Bmp[j].Anzahl) Bmp[j].Phase = 0;
    }
  }

  //Spielfigur

  //laufen
  if (gameData.guy.active && gameData.guy.route.length) {
    i = Math.floor(framesPerSecond / Bmp[Guy.Zustand].Geschwindigkeit);
    if (i < 1) i = 1;
    if (framesPerSecond - Bmp[Guy.Zustand].Geschwindigkeit < 0) loop = 2; else loop = 1;
    if (isOnSea(gameData)) loop = loop * 2;
    for (k = 0; k < loop; k++) {
      if (frame % i === 0) {
        CalcGuyKoor();
      }
    }
    return;
  }
  //sonstige Aktionen
  if (gameData.guy.active && Guy.Zustand >= GUYSUCHEN && Guy.Zustand <= GUYSCHLEUDER &&
    Bmp[Guy.Zustand].Phase !== Bmp[Guy.Zustand].Anzahl) {
    i = Math.floor(framesPerSecond / Bmp[Guy.Zustand].Geschwindigkeit);
    if (i < 1) i = 1;
    if (frame % i === 0) {
      Bmp[Guy.Zustand].Phase++;
      if (Bmp[Guy.Zustand].Phase >= Bmp[Guy.Zustand].Anzahl) {
        Bmp[Guy.Zustand].Phase = 0;
        if (PapierText === -1) gameData.guy.active = false;
      }
    }
  }
}

const CalcGuyKoor = () => {
  let routePoint = gameData.guy.route[0];
  let wayPoint = routePoint?.wayPoints[0];
  if (!wayPoint) {
    gameData.guy.route.shift();
    if (!gameData.guy.route.length) {
      gameData.guy.active = false;
      return;
    }
    if (Guy.Aktion === AKABBRUCH) {
      Bmp[Guy.Zustand].Phase = 0;
      gameData.guy.active = false;
      gameData.guy.route = [];
      return;
    }
    routePoint = gameData.guy.route[0];
    wayPoint = routePoint.wayPoints[0];
    gameData.guy.tile.x = routePoint.x;
    gameData.guy.tile.y = routePoint.y;
    Entdecken();

    if (isOnSea(gameData))
      AddTime(0, gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].LaufZeit * 3);
    else AddTime(0, gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].LaufZeit * 5);
    AddResource(NAHRUNG, -1);
    AddResource(WASSER, -1);
  }

  if (frame % gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].LaufZeit === 0) {
    const Dx = wayPoint.x - gameData.guy.position.x;
    const Dy = wayPoint.y - gameData.guy.position.y;

    if (Guy.Zustand !== GUYSCHIFF && Guy.Zustand !== GUYSCHWIMMEN) {
      if (isOnSea(gameData)) Guy.Zustand = GUYBOOTLINKS;
      else Guy.Zustand = GUYLINKS;

      const direction = wayPoint.direction;
      if (wayPoint.direction === directions.WEST || (!direction && Dx < 0 && Dy <= 0)) Guy.Zustand += 0;
      else if (wayPoint.direction === directions.NORTH || (!direction && Dx >= 0 && Dy < 0)) Guy.Zustand += 1;
      else if (wayPoint.direction === directions.EAST || (!direction && Dx > 0 && Dy >= 0)) Guy.Zustand += 2;
      else Guy.Zustand += 3;
    }

    let i;
    if (isOnSea(gameData)) i = 4; else i = 2;
    if ((frame / gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].LaufZeit) % i === 0) {
      Bmp[Guy.Zustand].Phase++;
      if (Bmp[Guy.Zustand].Phase >= Bmp[Guy.Zustand].Anzahl) Bmp[Guy.Zustand].Phase = 0;
    }

    if (Math.round(Dx) === 0 && Math.round(Dy) === 0) {
      routePoint.wayPoints.shift();
      return;
    }

    let Schrittx = 0;
    let Schritty = 0;
    if (Math.abs(Dx) > Math.abs(Dy)) {
      if (Dx > 0) Schrittx = 1; else Schrittx = -1;
      if (Dx !== 0) Schritty = Dy / ((Dx * Schrittx));
    } else {
      if (Dy > 0) Schritty = 1; else Schritty = -1;
      if (Dy !== 0) Schrittx = Dx / ((Dy * Schritty));
    }

    gameData.guy.position.x += Schrittx;
    gameData.guy.position.y += Schritty;
    if ((Spielzustand === GAME_INTRO) || (Spielzustand === GAME_OUTRO)) //Beim Intro und Outra fährt die Kamera mit
    {
      updateCamera(gameData.camera, gameData.guy.position, primaryCanvasContext, true);
    }
  }
}

const Entdecken = () => {
  let Aenderung = false;
  let i, j;

  for (i = -1; i <= 1; i++)
    for (j = -1; j <= 1; j++) {
      const tile = gameData.terrain[gameData.guy.tile.x + i][gameData.guy.tile.y + j];
      if (tile && !tile.discovered) {
        tile.discovered = true;
        Aenderung = true;
      }
    }

  if (Aenderung) updateMinimap();
}

const refresh = (timestamp) => {
  frame++;
  const newTimestampInSeconds = timestamp / 1000;
  if (timestampInSeconds + 5 < newTimestampInSeconds) {
    timestampInSeconds = newTimestampInSeconds;
    framesPerSecond = (framesPerSecond + frame / 5) / 2;
    frame = 0;
    if (framesPerSecond === 0) framesPerSecond = 50;

    //BilderproSec ausgeben
    /*Textloeschen(TXTFPS);
    TextBereich[TXTFPS].Aktiv = true;
    DrawString(LastBild,TextBereich[TXTFPS].rcText.left,TextBereich[TXTFPS].rcText.top,1);
*/
  }

  if (Spielzustand === GAME_WAIT) {
    return true;
  } else if (Spielzustand === GAME_LOGO) {
    if (CheckKey() === 2) return true;    //Das Keyboard abfragen
    ZeigeLogo(); //Bild auffrischen

  } else if ((Spielzustand === GAME_INTRO) || (Spielzustand === GAME_OUTRO)) {
    if (CheckKey() === 0) return false;    //Das Keyboard abfragen
    Animationen();  //Animationen weiterschalten
    playTerrainSounds(gameData.terrain, { tile: gameData.guy.tile });

    if (!gameData.guy.active) Event(Guy.Aktion); //Aktionen starten

    ZeigeIntro(); //Bild auffrischen

  } else if (Spielzustand === GAME_PLAY) {
    if ((Stunden >= 12) && (Minuten !== 0) && (Guy.Aktion !== AKTAGENDE))  //Hier ist der Tag zuende
    {
      if (Guy.Aktion === AKAUSSCHAU) Chance -= 1 + gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y].height;
      gameData.guy.active = false;
      Guy.AkNummer = 0;
      Guy.Aktion = AKTAGENDE;
    }

    CheckSpzButton();          //Die Spezialknöpfe umschalten
    if (MouseAktiv) CheckMouse();    //Den MouseZustand abchecken
    if (CheckKey() === 0) return false;    //Das Keyboard abfragen
    restrictCamera(gameData.camera, gameData.terrain);            //Das Scrollen an die Grenzen der Landschaft anpassen
    Animationen();            //Die Animationsphasen weiterschalten
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
