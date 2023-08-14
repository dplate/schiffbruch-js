import texts from '../../interface/text/texts.js';
import isDestroyable from '../../terrain/objects/isDestroyable.js';

const destroying = {
  getImpossibleText: (tile) => {
    if (isDestroyable(tile.object)) {
      return null;
    }
    return texts.IMPOSSIBLE_DESTROYING;
  },
};

export default destroying;