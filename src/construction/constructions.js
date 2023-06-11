import items from '../guy/inventory/items.js';
import spriteTypes from '../images/spriteTypes.js';
import constructionTypes from './constructionTypes.js';

const constructions = {
  [constructionTypes.FIELD]: {
    sprite: spriteTypes.FIELD,
    frames: [3, 4, 5, 6, 7, 8],
    items: {},
    actionSteps: 20,
  },
  [constructionTypes.TENT]: {
    sprite: spriteTypes.TENT,
    frames: [1, 2, 3],
    items: {
      [items.BRANCH]: 5,
      [items.LEAF]: 5
    },
    actionSteps: 16,
  },
  [constructionTypes.BOAT]: {
    sprite: spriteTypes.BOAT,
    frames: [2, 3, 4, 5, 6],
    items: {
      [items.BRANCH]: 2,
      [items.LOG]: 1
    },
    actionSteps: 16,
  },
  [constructionTypes.PIPE]: {
    sprite: spriteTypes.PIPE,
    frames: [2, 3, 4],
    items: {
      [items.LOG]: 1
    },
    actionSteps: 18,
  },
  [constructionTypes.SOS]: {
    sprite: spriteTypes.SOS,
    frames: [1, 2, 3, 4, 5, 6],
    items: {
      [items.STONE]: 10
    },
    actionSteps: 20,
  },
  [constructionTypes.FIREPLACE]: {
    sprite: spriteTypes.FIREPLACE,
    frames: [1, 2, 3, 4],
    items: {
      [items.BRANCH]: 5,
      [items.LOG]: 4
    },
    actionSteps: 9,
  },
  [constructionTypes.LADDER]: {
    sprite: spriteTypes.BIG_TREE_WITH_LADDER,
    frames: [1, 2, 3, 4],
    items: {
      [items.BRANCH]: 4
    },
    actionSteps: 19,
  },
  [constructionTypes.PLATFORM]: {
    sprite: spriteTypes.BIG_TREE_WITH_PLATFORM,
    frames: [1, 2, 3, 4, 5],
    items: {
      [items.BRANCH]: 3,
      [items.LOG]: 3
    },
    actionSteps: 21,
  },
  [constructionTypes.TREE_HOUSE]: {
    sprite: spriteTypes.BIG_TREE_WITH_TREE_HOUSE,
    frames: [1, 2, 3, 4, 5],
    items: {
      [items.BRANCH]: 4,
      [items.LOG]: 4,
      [items.LEAF]: 5
    },
    actionSteps: 21,
  }
};

export default constructions;