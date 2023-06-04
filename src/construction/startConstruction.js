import constructionItems from './constructionItems.js';

const startConstruction = (tile, constructionType) => {
  tile.construction = {
    type: constructionType,
    neededItems: {
      ...constructionItems[constructionType]
    }
  }
};

export default startConstruction;