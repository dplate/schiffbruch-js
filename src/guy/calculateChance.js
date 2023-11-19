import state from '../state/state.js';
import spriteTypes from '../images/spriteTypes.js';
import actionTypes from '../action/actionTypes.js';
import grounds from '../terrain/tiles/grounds.js';

const getChanceOnTile = (tile) => {
  if (!tile.construction && tile.object) {
    if (tile.object.sprite === spriteTypes.SOS) {
      if (tile.ground === grounds.GRASS || tile.ground === grounds.WETLAND) {
        return 1;
      }
      else {
        return 2;
      }
    }
    if (tile.object.sprite === spriteTypes.FIRE || tile.object.sprite === spriteTypes.BUSH_FIRE) {
      return 2 + 2 * tile.height;
    }
  }
  return 0;
};

const getActionChance = () => {
  if (state.guy.action?.type === actionTypes.LOOKING) {
    return 1 + state.terrain[state.guy.tile.x][state.guy.tile.y].height;
  }
  return 0;
};

const calculateChance = () => {
  let terrainChance = 0;
  const terrainWidth = state.terrain.length;
  const terrainHeight = state.terrain[0].length;
  for (let x = 0; x < terrainWidth; x++) {
    for (let y = 0; y < terrainHeight; y++) {
      terrainChance += getChanceOnTile(state.terrain[x][y])
    }
  }

  const actionChance = getActionChance();

  state.guy.chance = terrainChance + actionChance + (state.guy.cheatChance || 0);
};

export default calculateChance;