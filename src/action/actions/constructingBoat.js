import constructionTypes from '../../construction/constructionTypes.js';
import texts from '../../interface/text/texts.js';
import grounds from '../../terrain/tiles/grounds.js';
import findNeighbor from '../../guy/findNeighbor.js';

const constructingBoat = {
  construction: constructionTypes.BOAT,

  getImpossibleText: (tile) => {
    const nextToSea = findNeighbor(tile => tile.ground === grounds.SEA);
    if (!tile.object && nextToSea) {
      return null;
    }
    return texts.IMPOSSIBLE_CONSTRUCTING_BOAT;
  },
};

export default constructingBoat;