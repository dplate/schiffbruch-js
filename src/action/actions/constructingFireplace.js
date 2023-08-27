import constructionTypes from '../../construction/constructionTypes.js';
import texts from '../../interface/text/texts.js';
import tileTypes from '../../terrain/tiles/tileTypes.js';
import tileEdges from '../../terrain/tiles/tileEdges.js';
import goToObject from '../../guy/routing/goToObject.js';
import spriteTypes from '../../images/spriteTypes.js';
import changeWaterAndFood from '../../guy/changeWaterAndFood.js';
import startGuyAnimation from '../../guy/startGuyAnimation.js';
import spendMinutes from '../spendMinutes.js';
import construct from '../../construction/construct.js';
import goToCenterOfTile from '../../guy/routing/goToCenterOfTile.js';

const sitDown = () => {
  startGuyAnimation(spriteTypes.GUY_LAYING_DOWN);
      changeWaterAndFood(-1, -1);
      spendMinutes(1);
};

const standUp = () => {
  startGuyAnimation(spriteTypes.GUY_STANDING_UP);
      changeWaterAndFood(-1, -1);
      spendMinutes(1);
};

const knot = () => {
  startGuyAnimation(spriteTypes.GUY_KNOTTING_NORTH);
  changeWaterAndFood(-1, -1);
  spendMinutes(1);
};

const constructingFireplace = {
  construction: constructionTypes.FIREPLACE,

  getImpossibleText: (tile) => {
    if (!tile.object && tile.type === tileTypes.FLAT) {
      return null;
    } 
    return texts.IMPOSSIBLE_CONSTRUCTING_FIREPLACE;
  },
  getConstructionPosition: (tile) => {
    const center = tileEdges[tile.type].center;
    return { x: center.x, y: center.y - 5 };
  },
  steps: [
    () => goToObject(-4, 2),
    sitDown,
    construct,
    standUp,
    () => goToObject(-6, 3),
    knot,
    construct,
    knot,
    construct,
    knot,
    construct,
  ]
};

export default constructingFireplace;