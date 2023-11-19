import constructionTypes from '../../construction/constructionTypes.js';
import changeWaterAndFood from '../../guy/changeWaterAndFood.js';
import goToObject from '../../guy/routing/goToObject.js';
import startGuyAnimation from '../../guy/startGuyAnimation.js';
import spriteTypes from '../../images/spriteTypes.js';
import texts from '../../interface/text/texts.js';
import tileTypes from '../../terrain/tiles/tileTypes.js';
import spendMinutes from '../spendMinutes.js';
import construct from '../../construction/construct.js';
import goToCenterOfTile from '../../guy/routing/goToCenterOfTile.js';
import isSea from '../../terrain/tiles/isSea.js';

const knotSouth = () => {
  startGuyAnimation(spriteTypes.GUY_KNOTTING_SOUTH);
  changeWaterAndFood(-2, -2);
  spendMinutes(15);
};

const knotNorth = () => {
  startGuyAnimation(spriteTypes.GUY_KNOTTING_NORTH);
  changeWaterAndFood(-2, -2);
  spendMinutes(15);
};

const goNorth = () => {
  goToObject(9, -4);
};

const goAround = () => {
  goToObject(13, 2);
};

const goSouth = () => {
  goToObject(-10, 4);
};

const constructingTent = {
  construction: constructionTypes.TENT,

  getImpossibleText: (tile) => {
    if (!tile.object && tile.type === tileTypes.FLAT && !isSea(tile)) {
      return null;
    }
    return texts.IMPOSSIBLE_CONSTRUCTING_TENT;
  },
  getConstructionPosition: () => ({ x: 28, y: 22 }),
  steps: [
    goNorth,
    knotSouth,
    knotSouth,
    construct,
    goAround,
    goToCenterOfTile,
    goSouth,
    knotNorth,
    knotNorth,
    construct,
    goToCenterOfTile,
    goAround,
    goNorth,
    knotSouth,
    knotSouth,
    construct,
    goAround,
    goToCenterOfTile
  ]
};

export default constructingTent;