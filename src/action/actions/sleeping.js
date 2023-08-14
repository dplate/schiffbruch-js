import texts from '../../interface/text/texts.js';
import grounds from '../../terrain/tiles/grounds.js';

const sleeping = {
  getImpossibleText: (tile) => {
    if (tile.ground !== grounds.SEA) {
      return null;
    }
    return texts.IMPOSSIBLE_NO_SLEEPING_ON_BOAT;
  },
};

export default sleeping;