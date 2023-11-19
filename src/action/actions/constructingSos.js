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
import isSea from '../../terrain/tiles/isSea.js';

const sitDown = () => {
  startGuyAnimation(spriteTypes.GUY_LAYING_DOWN);
      changeWaterAndFood(-1, -1);
      spendMinutes(1);
};

const standUp = () => {
  startGuyAnimation(spriteTypes.GUY_STANDING_UP);
  changeWaterAndFood(-1, -1);
  spendMinutes(1);
}

const constructingSos = {
  construction: constructionTypes.SOS,

  getImpossibleText: (tile) => {
    if (!tile.object && tile.type === tileTypes.FLAT && !isSea(tile)) {
      return null;
    }
    return texts.IMPOSSIBLE_CONSTRUCTING_SOS;
  },
  getConstructionPosition: (tile) => tileEdges[tile.type].center,
  steps: [
    () => goToObject(-12, 4),
    sitDown,
    construct,
    standUp,
    () => goToObject(-4, 8),
    sitDown,
    construct,
    standUp,
    () => goToObject(-4, 0),
    sitDown,
    construct,
    standUp,
    () => goToObject(3, 3),
    sitDown,
    construct,
    standUp,
    () => goToObject(5, -4),
    sitDown,
    construct,
    standUp,
    () => goToObject(12, -1),
    sitDown,
    construct,
    standUp,
    goToCenterOfTile
  ],
};

export default constructingSos;