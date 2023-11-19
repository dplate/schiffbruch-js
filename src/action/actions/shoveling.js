import changeWaterAndFood from '../../guy/changeWaterAndFood.js';
import changeItem from '../../guy/inventory/changeItem.js';
import items from '../../guy/inventory/items.js';
import startGuyAnimation from '../../guy/startGuyAnimation.js';
import spriteTypes from '../../images/spriteTypes.js';
import openPaper from '../../interface/text/openPaper.js';
import texts from '../../interface/text/texts.js';
import sounds from '../../sounds/sounds.js';
import state from '../../state/state.js';
import tileTypes from '../../terrain/tiles/tileTypes.js';
import spendMinutes from '../spendMinutes.js';
import isSea from '../../terrain/tiles/isSea.js';

const shovel = () => {
  startGuyAnimation(spriteTypes.GUY_SHOVELING);
  sounds.SHOVELING.instance.play();
};

const findTreasure = () => {
  spendMinutes(20);
  changeWaterAndFood(-10, -10);
  if (state.guy.tile.x === state.treasure.x && state.guy.tile.y === state.treasure.y && !state.guy.inventory[items.MATCHES]) {
    openPaper(texts.SHOVELING_TREASURE, false);
    changeItem(items.MATCHES, 1);
  } else {
    openPaper(texts.SHOVELING_NOTHING, false);
  }
};

const shoveling = {
  getImpossibleText: (tile) => {
    if (!isSea(tile) &&
      tile.type === tileTypes.FLAT &&
      !tile.object) {
      return null;
    } 
    return texts.IMPOSSIBLE_NO_SHOVELING;
  },
  steps: [
    shovel,
    findTreasure
  ]
};

export default shoveling;