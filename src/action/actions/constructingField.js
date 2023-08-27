import constructionTypes from '../../construction/constructionTypes.js';
import texts from '../../interface/text/texts.js';
import grounds from '../../terrain/tiles/grounds.js';
import tileTypes from '../../terrain/tiles/tileTypes.js';
import tileEdges from '../../terrain/tiles/tileEdges.js';
import goToObject from '../../guy/routing/goToObject.js';
import construct from '../../construction/construct.js';
import spriteTypes from '../../images/spriteTypes.js';
import startGuyAnimation from '../../guy/startGuyAnimation.js';
import changeWaterAndFood from '../../guy/changeWaterAndFood.js';
import spendMinutes from '../spendMinutes.js';
import goToCenterOfTile from '../../guy/routing/goToCenterOfTile.js';

const harrow = () => startGuyAnimation(spriteTypes.GUY_HARROWING);

const useResources = () => {
  changeWaterAndFood(-2, -2);
  spendMinutes(30);
};

const constructingField = {
  construction: constructionTypes.FIELD,

  getImpossibleText: (tile) => {
    if (!tile.object && tile.type === tileTypes.FLAT && tile.ground === grounds.WETLAND) {
      return null;
    } 
    return texts.IMPOSSIBLE_CONSTRUCTION_FIELD;
  },
  getConstructionPosition: (tile) => tileEdges[tile.type].center,
  steps: [
    () => goToObject(6, 7),
    harrow,
    harrow,
    construct,
    useResources,
    () => goToObject(9, 5),
    harrow,
    harrow,
    construct,
    useResources,
    () => goToObject(12, 3),
    harrow,
    harrow,
    construct,
    useResources,
    () => goToObject(15, 1),
    harrow,
    harrow,
    construct,
    useResources,
    () => goToObject(18, -1),
    harrow,
    harrow,
    construct,
    useResources,
    () => goToObject(20, -3),
    harrow,
    harrow,
    construct,
    useResources,
    goToCenterOfTile
  ]
};

export default constructingField;