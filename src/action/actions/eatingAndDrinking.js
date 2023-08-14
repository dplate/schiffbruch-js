
import isDrinkable from '../../terrain/objects/isDrinkable.js';
import isEatable from '../../terrain/objects/isEatable.js';
import texts from '../../interface/text/texts.js';

const eatingAndDrinking = {
  getImpossibleText: (tile) => {
    if (isEatable(tile.object) || isDrinkable(tile.object)) {
      return null;
    }
    return texts.IMPOSSIBLE_NO_FOOD_OR_WATER;
  }
};

export default eatingAndDrinking;