import texts from '../../interface/text/texts.js';
import grounds from '../../terrain/tiles/grounds.js';
import tileTypes from '../../terrain/tiles/tileTypes.js';

const shoveling = {
  getImpossibleText: (tile) => {
    if (tile.ground !== grounds.SEA &&
      tile.type === tileTypes.FLAT &&
      !tile.object) {
      return null;
    } 
    return texts.IMPOSSIBLE_NO_SHOVELING;
  },
};

export default shoveling;