import texts from '../../interface/text/texts.js';
import spriteTypes from '../../images/spriteTypes.js';
import sounds from '../../sounds/sounds.js';
import goToCenterOfTile from '../../guy/routing/goToCenterOfTile.js';
import state from '../../state/state.js';
import openPaper from '../../interface/text/openPaper.js';
import goToEastOfTile from '../../guy/routing/goToEastOfTile.js';
import discoverTerrain from '../../guy/discoverTerrain.js';
import grounds from '../../terrain/tiles/grounds.js';
import findRoute from '../../guy/routing/findRoute.js';
import closePaper from '../../interface/text/closePaper.js';
import tileEdges from '../../terrain/tiles/tileEdges.js';
import createWaves from '../../terrain/objects/createWaves.js';
import audio from '../../sounds/audio.js';
import phases from '../../state/phases.js';

const processAnswer = () => {
  if (!state.paper.question.answer) {
    state.guy.action = null;
  }
  closePaper();
};

const walkToBeach = () => {
  const targetX = state.terrain.findLastIndex(terrainColumn => {
    return terrainColumn[state.guy.tile.y].ground !== grounds.SEA;
  });

  const shipTile = state.terrain[targetX + 2][state.guy.tile.y];
  shipTile.object = {
    sprite: spriteTypes.GUY_SAILING,
    x: tileEdges[shipTile.type].center.x,
    y: tileEdges[shipTile.type].center.y,
    frame: 0
  };
  state.guy.route = findRoute({ x: targetX, y: state.guy.tile.y });
  state.guy.active = true;
};

const swim = () => {
  state.guy.tile.x += 2;
  discoverTerrain();
  state.guy.sprite = spriteTypes.GUY_SWIMMING;
  sounds.SWIMMING.instance.play(true);
  goToCenterOfTile();
};

const sail = (tile) => {
  sounds.SWIMMING.instance.stop();
  tile.object = createWaves();
  state.guy.sprite = spriteTypes.GUY_SAILING;
  sounds.STORM.instance.play(true);
  state.guy.route = findRoute({ x: state.terrain.length - 2, y: state.guy.tile.y });
  state.guy.active = true;
};

const switchToCredits = () => {
  audio.stopAll();
  state.phase = phases.CREDITS;
};

const leaving = {
  steps: [
    goToCenterOfTile,
    () => openPaper(texts.LEAVING, true),
    processAnswer,
    walkToBeach,
    goToEastOfTile,
    swim,
    sail
  ],
  finish: switchToCredits,
  noTimeProgress: true,
  movie: true
};

export default leaving;