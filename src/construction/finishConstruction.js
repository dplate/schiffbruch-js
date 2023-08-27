import openPaper from '../interface/text/openPaper.js';
import texts from '../interface/text/texts.js';
import state from '../state/state.js';
import constructions from './constructions.js';

const finishConstruction = (tile) => {
  const construction = constructions[tile.construction.type];
  if (construction.hintTextId && !state.constructionHints[tile.construction.type]) {
    openPaper(texts[construction.hintTextId], false);
    state.constructionHints[tile.construction.typeT] = true;
  }
  tile.object.frame = 0;
  tile.construction = null;
};

export default finishConstruction;