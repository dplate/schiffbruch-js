import texts from '../../interface/text/texts.js';
import startGuyAnimation from '../../guy/startGuyAnimation.js';
import spriteTypes from '../../images/spriteTypes.js';
import sounds from '../../sounds/sounds.js';
import goToCenterOfTile from '../../guy/routing/goToCenterOfTile.js';
import state from '../../state/state.js';
import openPaper from '../../interface/text/openPaper.js';
import saveState from '../../state/saveState.js';
import addShipWreck from '../../terrain/addShipWreck.js';
import goToEastOfTile from '../../guy/routing/goToEastOfTile.js';
import discoverTerrain from '../../guy/discoverTerrain.js';
import updateCamera from '../../camera/updateCamera.js';
import grounds from '../../terrain/tiles/grounds.js';
import findRoute from '../../guy/routing/findRoute.js';
import updateMinimap from '../../interface/minimap/updateMinimap.js';
import tileEdges from '../../terrain/tiles/tileEdges.js';

const findBeachPositionX = () => {
  return state.terrain.findIndex(terrainColumn => {
    return terrainColumn[state.guy.tile.y].ground !== grounds.SEA;
  })
};

const sail = () => {
  const beachPositionX = findBeachPositionX();
  state.guy.active = true;
  state.guy.route = findRoute({ x: beachPositionX - 2, y: state.guy.tile.y });
  sounds.STORM.instance.play(true);
};

const tank = () => {
  startGuyAnimation(spriteTypes.GUY_TANKING);
  sounds.STORM.instance.stop();
  sounds.SPLASH.instance.play();
  sounds.CRASHING.instance.play();
};

const swim = (tile) => {
  addShipWreck(tile);
  state.guy.tile.x += 1;
  goToEastOfTile();
  discoverTerrain();
  state.guy.sprite = spriteTypes.GUY_SWIMMING;
  sounds.SWIMMING.instance.play(true);
};

const walk = () => {
  sounds.SWIMMING.instance.stop();
  state.guy.tile.x += 1;
  goToCenterOfTile();
};

const arrive = () => {
  updateCamera(state.guy.position, false);
  saveState();
};

const fastForward = () => {
  sounds.STORM.instance.stop();
  sounds.SWIMMING.instance.stop();
  
  const beachPositionX = findBeachPositionX();
  for (let x = state.guy.tile.x; x <= beachPositionX; x++) {
    state.guy.tile.x = x;
    discoverTerrain();
  }
  addShipWreck(state.terrain[beachPositionX - 2][state.guy.tile.y]);

  const tile = state.terrain[beachPositionX][state.guy.tile.y];
  state.guy.position.x = tile.position.x + tileEdges[tile.type].center.x;
  state.guy.position.y = tile.position.y + tileEdges[tile.type].center.y;
  state.guy.route = [];
  state.guy.active = false;
  state.guy.sprite = spriteTypes.GUY_WAITING;
  state.guy.action = null;

  arrive();
};

const arriving = {
  steps: [
    sail,
    tank,
    swim,
    walk,
    arrive
  ],
  finish: () => openPaper(texts.ARRIVING, false),
  movie: true,
  fastForward
};

export default arriving;