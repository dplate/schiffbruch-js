import actionTypes from '../action/actionTypes.js';
import menuTypes from './menuTypes.js';

const menus = {
  [menuTypes.ACTIONS]: {
    actions: [
      actionTypes.SEARCHING,
      actionTypes.EATING,
      actionTypes.SLEEPING,
      actionTypes.CHOPPING,
      actionTypes.FISHING,
      actionTypes.LIGHTNING,
      actionTypes.LOOKING,
      actionTypes.HUNTING_TREASURE,
      actionTypes.SHOVELING,
      actionTypes.SLINGING
    ]
  },
  [menuTypes.CONSTRUCTIONS]: {
    actions: [
      actionTypes.CONSTRUCTING_TENT,
      actionTypes.CONSTRUCTING_FIELD,
      actionTypes.CONSTRUCTING_BOAT,
      actionTypes.CONSTRUCTING_PIPE,
      actionTypes.CONSTRUCTING_SOS,
      actionTypes.CONSTRUCTING_LADDER,
      actionTypes.CONSTRUCTING_PLATFORM,
      actionTypes.CONSTRUCTING_TREE_HOUSE,
      actionTypes.CONSTRUCTING_FIREPLACE,
      actionTypes.DESTROYING
    ]
  },
  [menuTypes.INVENTORY]: {
    actions: []
  }
};

export default menus;