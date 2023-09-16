import texts from '../../interface/text/texts.js';
import startGuyAnimation from '../../guy/startGuyAnimation.js';
import spriteTypes from '../../images/spriteTypes.js';
import sounds from '../../sounds/sounds.js';
import goToCenterOfTile from '../../guy/routing/goToCenterOfTile.js';
import state from '../../state/state.js';
import openPaper from '../../interface/text/openPaper.js';
import phases from '../../state/phases.js';
import saveState from '../../state/saveState.js';
import addShipWreck from '../../terrain/addShipWreck.js';
import goToEastOfTile from '../../guy/routing/goToEastOfTile.js';
import discoverTerrain from '../../guy/discoverTerrain.js';
import updateCamera from '../../camera/updateCamera.js';
import grounds from '../../terrain/tiles/grounds.js';
import findRoute from '../../guy/routing/findRoute.js';

const sail = () => {
  const targetX = state.terrain.findIndex(terrainColumn => {
    return terrainColumn[state.guy.tile.y].ground !== grounds.SEA;
  });
  state.guy.active = true;
  state.guy.route = findRoute({ x: targetX - 2, y: state.guy.tile.y });
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
  state.phase = phases.PLAY
  saveState();
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
  noTimeProgress: true
};

export default arriving;