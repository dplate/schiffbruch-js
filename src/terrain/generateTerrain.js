import updateMinimap from '../interface/minimap/updateMinimap.js';
import state from '../state/state.js';
import drawTreasureMap from '../treasure/drawTreasureMap.js';
import hideTreasure from '../treasure/hideTreasure.js';
import addPirateWreck from './addPirateWreck.js';
import addRiver from './addRiver.js';
import addTrees from './addTrees.js';
import generateIsland from './generateIsland.js';
import setGrounds from './setGrounds.js';

const generateTerrain = () => {
  generateIsland();
  setGrounds();
  addRiver();
  addTrees();
  state.treasure = hideTreasure();
  addPirateWreck();
  drawTreasureMap();
  updateMinimap();
};

export default generateTerrain;