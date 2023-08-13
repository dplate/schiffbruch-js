import drawText from '../interface/text/drawText.js';
import textAreas from '../interface/text/textAreas.js';
import texts from '../interface/text/texts.js';
import constructionTextIds from './constructionTextIds.js';
import constructions from './constructions.js';
import createNeededItemsText from './createNeededItemsText.js';

const drawStartConstructionText = (constructionType) => {
  const text = texts[constructionTextIds.start[constructionType]] + createNeededItemsText(constructions[constructionType].items);
  drawText(text, textAreas.STATUS);
};

export default drawStartConstructionText;