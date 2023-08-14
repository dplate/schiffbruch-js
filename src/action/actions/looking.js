import texts from '../../interface/text/texts.js';
import grounds from '../../terrain/tiles/grounds.js';

const looking = {
  getImpossibleText: (tile) => {
    if (tile.ground !== grounds.SEA) {
      return null;
    }
    return texts.IMPOSSIBLE_NO_LOOKING_ON_BOAT;
  },
};

export default looking;