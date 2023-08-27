import construct from '../../construction/construct.js';
import constructionTypes from '../../construction/constructionTypes.js';
import changeWaterAndFood from '../../guy/changeWaterAndFood.js';
import goToObject from '../../guy/routing/goToObject.js';
import startGuyAnimation from '../../guy/startGuyAnimation.js';
import spriteTypes from '../../images/spriteTypes.js';
import texts from '../../interface/text/texts.js';
import sounds from '../../sounds/sounds.js';
import tileTypes from '../../terrain/tiles/tileTypes.js';
import updatePipes from '../../terrain/updatePipes.js';
import spendMinutes from '../spendMinutes.js';
import tileEdges from '../../terrain/tiles/tileEdges.js';
import goToCenterOfTile from '../../guy/routing/goToCenterOfTile.js';

const hit = () => {
  startGuyAnimation(spriteTypes.GUY_HITTING);
  sounds.HITTING.instance.play();
  changeWaterAndFood(-1, -1);
  spendMinutes(5);
};

const chop = () => {
  startGuyAnimation(spriteTypes.GUY_CHOPPING);
  sounds.CHOPPING.instance.play();
  changeWaterAndFood(-1, -1);
  spendMinutes(5);
};

const constructingPipe = {
  construction: constructionTypes.PIPE,

  getImpossibleText: (tile) => {
    if (!tile.object && tile.type === tileTypes.FLAT) {
      return null;
    } 
    return texts.IMPOSSIBLE_CONSTRUCTING_PIPE;
  },
  getConstructionPosition: (tile) => tileEdges[tile.type].center,
  steps: [
    () => goToObject(21, 4),
    construct,
    hit,
    hit,
    hit,
    chop,
    chop,
    chop,
    construct,
    () => goToObject(8, -4),
    hit,
    hit,
    hit,
    chop,
    chop,
    chop,
    construct,
    goToCenterOfTile
  ],
  finish: updatePipes
};

export default constructingPipe;