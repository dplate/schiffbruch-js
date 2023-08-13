import itemTextIds from '../guy/inventory/itemTextIds.js';
import texts from '../interface/text/texts.js';

const createNeededItemsText = (items) => {
  const neededItems = Object.entries(items).filter(([, amount]) => amount);
  if (!neededItems.length) {
    return '';
  }

  const needItemsTexts = neededItems.map(([item, amount]) => `${texts[itemTextIds[item]]}=${amount}`);
  return ': ' + needItemsTexts.join(' ');  
};

export default createNeededItemsText;
