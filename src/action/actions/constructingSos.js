import constructionTypes from '../../construction/constructionTypes.js';
import texts from '../../interface/text/texts.js';
import tileTypes from '../../terrain/tiles/tileTypes.js';

const constructingSos = {
  construction: constructionTypes.SOS,

  getImpossibleText: (tile) => {
    if (!tile.object && tile.type === tileTypes.FLAT) {
      return null;
    }
    return texts.IMPOSSIBLE_CONSTRUCTING_SOS;
  },
};

export default constructingSos;