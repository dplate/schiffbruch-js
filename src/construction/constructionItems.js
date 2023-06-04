import items from '../guy/inventory/items.js';
import constructionTypes from './constructionTypes.js';

const constructionItems = {
  [constructionTypes.FIELD]: {},
  [constructionTypes.TENT]: {
    [items.BRANCH]: 5,
    [items.LEAF]: 5
  },
  [constructionTypes.BOAT]: {
    [items.BRANCH]: 2,
    [items.LOG]: 1
  },
  [constructionTypes.PIPE]: {
    [items.LOG]: 1
  },
  [constructionTypes.SOS]: {
    [items.STONE]: 10
  },
  [constructionTypes.FIREPLACE]: {
    [items.BRANCH]: 5,
    [items.LOG]: 4
  },
  [constructionTypes.LADDER]: {
    [items.BRANCH]: 4
  },
  [constructionTypes.PLATFORM]: {
    [items.BRANCH]: 3,
    [items.LOG]: 3
  },
  [constructionTypes.TREE_HOUSE]: {
    [items.BRANCH]: 4,
    [items.LOG]: 4,
    [items.LEAF]: 5
  }
};

export default constructionItems;