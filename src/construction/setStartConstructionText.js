import setStatusText from '../interface/text/setStatusText.js';
import texts from '../interface/text/texts.js';
import constructionTextIds from './constructionTextIds.js';
import constructions from './constructions.js';
import createNeededItemsText from './createNeededItemsText.js';

const setStartConstructionText = (constructionType) => {
  setStatusText(texts[constructionTextIds.start[constructionType]] + createNeededItemsText(constructions[constructionType].items));
};

export default setStartConstructionText;