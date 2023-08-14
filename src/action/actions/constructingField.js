import constructionTypes from '../../construction/constructionTypes.js';
import texts from '../../interface/text/texts.js';
import grounds from '../../terrain/tiles/grounds.js';
import tileTypes from '../../terrain/tiles/tileTypes.js';

const constructingField = {
  construction: constructionTypes.FIELD,

  getImpossibleText: (tile) => {
    if (!tile.object && tile.type === tileTypes.FLAT && tile.ground === grounds.WETLAND) {
      return null;
    } 
    return texts.IMPOSSIBLE_CONSTRUCTION_FIELD;
  },
};

export default constructingField;