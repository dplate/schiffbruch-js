import texts from '../../interface/text/texts.js';
import isUsableFireplace from '../../terrain/objects/isUsableFireplace.js';

const lightning = {
  getImpossibleText: (tile) => {
    if (isUsableFireplace(tile)) {
      return null;
    }
    return texts.IMPOSSIBLE_NO_FIREPLACE;
  },
};

export default lightning;