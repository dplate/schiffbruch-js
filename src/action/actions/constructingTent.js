import constructionTypes from '../../construction/constructionTypes.js';
import texts from '../../interface/text/texts.js';
import tileTypes from '../../terrain/tiles/tileTypes.js';

const constructingTent = {
  construction: constructionTypes.TENT,

  getImpossibleText: (tile) => {
    if (!tile.object && tile.type === tileTypes.FLAT) {
      return null;
    }
    return texts.IMPOSSIBLE_CONSTRUCTING_TENT;
  },
};

export default constructingTent;