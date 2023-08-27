import constructionTypes from '../../construction/constructionTypes.js';
import texts from '../../interface/text/texts.js';
import grounds from '../../terrain/tiles/grounds.js';
import findNeighbor from '../../guy/findNeighbor.js';
import goToObject from '../../guy/routing/goToObject.js';
import construct from '../../construction/construct.js';
import spriteTypes from '../../images/spriteTypes.js';
import changeWaterAndFood from '../../guy/changeWaterAndFood.js';
import sounds from '../../sounds/sounds.js';
import startGuyAnimation from '../../guy/startGuyAnimation.js';
import spendMinutes from '../spendMinutes.js';
import tileEdges from '../../terrain/tiles/tileEdges.js';
import directions from '../../terrain/directions.js';
import goToCenterOfTile from '../../guy/routing/goToCenterOfTile.js';

const hit = () => {
  startGuyAnimation(spriteTypes.GUY_HITTING);
  sounds.HITTING.instance.play();
  changeWaterAndFood(-2, -2);
  spendMinutes(15);
};

const moveBoatToCoast = (tile) => {
  const neighbor = findNeighbor(tile => tile.ground === grounds.SEA);
  const edgePosition = tileEdges[tile.type][neighbor.direction];
  tile.object.x = edgePosition.x;
  tile.object.y = edgePosition.y;
  if (neighbor.direction === directions.NORTH || neighbor.direction === directions.SOUTH) {
    tile.object.frame = 1;
  }
};

const constructingBoat = {
  construction: constructionTypes.BOAT,

  getImpossibleText: (tile) => {
    const nextToSea = findNeighbor(tile => tile.ground === grounds.SEA);
    if (!tile.object && nextToSea) {
      return null;
    }
    return texts.IMPOSSIBLE_CONSTRUCTING_BOAT;
  },
  getConstructionPosition: () => ({ x: 20, y: 33 }),
  steps: [
    () => goToObject(17, 5),
    construct,
    hit,
    hit,
    hit,
    construct,
    () => goToObject(9, 0),
    hit,
    hit,
    hit,
    construct,
    () => goToObject(-3, -5),
    hit,
    hit,
    hit,
    construct,
    hit,
    construct,
    goToCenterOfTile
  ],
  finish: moveBoatToCoast
};

export default constructingBoat;