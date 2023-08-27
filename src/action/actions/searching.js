import isOnSea from '../../guy/isOnSea.js';
import spriteTypes from '../../images/spriteTypes.js';
import sounds from '../../sounds/sounds.js';
import startGuyAnimation from '../../guy/startGuyAnimation.js';
import calculatePositionInTile from '../../terrain/tiles/calculatePositionInTile.js';
import goTo from '../../guy/routing/goTo.js';
import spendMinutes from '../spendMinutes.js';
import changeItem from '../../guy/inventory/changeItem.js';
import items from '../../guy/inventory/items.js';
import texts from '../../interface/text/texts.js';
import grounds from '../../terrain/tiles/grounds.js';
import isRiver from '../../terrain/objects/isRiver.js';
import isNormalTree from '../../terrain/objects/isNormalTree.js';
import isBigTree from '../../terrain/objects/isBigTree.js';
import openPaper from '../../interface/text/openPaper.js';
import goToCenterOfTile from '../../guy/routing/goToCenterOfTile.js';

const startDiving = () => {
  startGuyAnimation(spriteTypes.GUY_DIVING_JUMPING);
  sounds.SPLASH.instance.play();
};

const endDiving = () => {
  startGuyAnimation(spriteTypes.GUY_DIVING_CLIMBING);
  sounds.SPLASH.instance.play();
};

const walkToRandomPosition = (tile) => {
  if (!isOnSea()) {
    const targetPosition = calculatePositionInTile(tile, Math.random(), Math.random());
    goTo({ x: tile.position.x + targetPosition.x, y: tile.position.y + targetPosition.y });
  }
};

const search = () => {
  if (isOnSea()) {
    startGuyAnimation(spriteTypes.GUY_DIVING);
  } else {
    startGuyAnimation(spriteTypes.GUY_SEARCHING);
    sounds.CRACKLING.instance.play();
  }
  spendMinutes(4);
};

const findStone = () => changeItem(items.STONE, 3) ? texts.SEARCHING_STONE : texts.SEARCHING_STONE_TOO_MANY;
const findBranch = () => changeItem(items.BRANCH, 1) ? texts.SEARCHING_BRANCH : texts.SEARCHING_BRANCH_TOO_MANY;
const findLeaf = () => changeItem(items.LEAF, 1) ? texts.SEARCHING_LEAF : texts.SEARCHING_LEAF_TOO_MANY;
const findLiana = () => changeItem(items.LIANA, 1) ? texts.SEARCHING_LIANA : texts.SEARCHING_LIANA_TOO_MANY;

const find = (tile) => {
  if (tile.ground === grounds.BEACH || isRiver(tile.object)) {
    return findStone();
  }
  if (tile.object?.sprite === spriteTypes.BUSH) {
    switch (Math.floor(Math.random() * 2)) {
      case 0: return findBranch();
      case 1: return findLeaf();
    }
  }
  if (isNormalTree(tile.object) || isBigTree(tile.object)) {
    switch (Math.floor(Math.random() * 3)) {
      case 0: return findBranch();
      case 1: return findLeaf();
      case 2: return findLiana();
    }
  }
  if (tile.object?.sprite === spriteTypes.SHIP_WRECK && 
    changeItem(items.SPYGLASS, 1) && changeItem(items.HAMMER, 1)) {
    return texts.SEARCHING_SPYGLASS_AND_HAMMER;
  }
  if (tile.object?.sprite === spriteTypes.PIRATE_WRECK && 
    changeItem(items.MAP, 1) && changeItem(items.SHOVEL, 1)) {
    return texts.SEARCHING_MAP_AND_SHOVEL;
  }
  return isOnSea() ? texts.SEARCHING_NOTHING_ON_SEA : texts.SEARCHING_NOTHING;
};

const searching = {
  getImpossibleText: () => null,
  steps: [
    (tile) => isOnSea() ? startDiving() : walkToRandomPosition(tile),
    search,
    walkToRandomPosition,
    search,
    walkToRandomPosition,
    search,
    walkToRandomPosition,
    search,
    () => isOnSea() ? endDiving() : goToCenterOfTile(),
    (tile) => openPaper(find(tile))
  ]
};

export default searching;