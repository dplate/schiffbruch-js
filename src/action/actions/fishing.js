import texts from '../../interface/text/texts.js';
import isFishable from '../../terrain/objects/isFishable.js';

const fishing = {
  getImpossibleText: (tile) => {
    if (isFishable(tile)) {
      return null;
    } 
    return texts.IMPOSSIBLE_NOT_FISHABLE;
  },
};

export default fishing;