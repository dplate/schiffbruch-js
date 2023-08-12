import spriteTypes from '../images/spriteTypes.js';
import actionTypes from './actionTypes.js';

const actions = {
  [actionTypes.SEARCHING]: {
    buttonSprite: spriteTypes.BUTTON_SEARCHING
  },
  [actionTypes.EATING]: {
    buttonSprite: spriteTypes.BUTTON_EATING
  },
  [actionTypes.SLEEPING]: {
    buttonSprite: spriteTypes.BUTTON_SLEEPING
  },
  [actionTypes.CHOPPING]: {
    buttonSprite: spriteTypes.BUTTON_CHOPPING
  },
  [actionTypes.FISHING]: {
    buttonSprite: spriteTypes.BUTTON_FISHING
  },
  [actionTypes.LIGHTNING]: {
    buttonSprite: spriteTypes.BUTTON_LIGHTNING
  },
  [actionTypes.LOOKING]: {
    buttonSprite: spriteTypes.BUTTON_LOOKING
  },
  [actionTypes.HUNTING_TREASURE]: {
    buttonSprite: spriteTypes.BUTTON_HUNTING_TREASURE
  },
  [actionTypes.SHOVELING]: {
    buttonSprite: spriteTypes.BUTTON_SHOVELING
  },
  [actionTypes.SLINGING]: {
    buttonSprite: spriteTypes.BUTTON_SLINGING
  },
  [actionTypes.CONSTRUCTING_TENT]: {
    buttonSprite: spriteTypes.CONSTRUCTING_TENT
  },
  [actionTypes.CONSTRUCTING_FIELD]: {
    buttonSprite: spriteTypes.CONSTRUCTING_FIELD
  },
  [actionTypes.CONSTRUCTING_BOAT]: {
    buttonSprite: spriteTypes.CONSTRUCTING_BOAT
  },
  [actionTypes.CONSTRUCTING_PIPE]: {
    buttonSprite: spriteTypes.CONSTRUCTING_PIPE
  },
  [actionTypes.CONSTRUCTING_SOS]: {
    buttonSprite: spriteTypes.CONSTRUCTING_SOS
  },
  [actionTypes.CONSTRUCTING_LADDER]: {
    buttonSprite: spriteTypes.CONSTRUCTING_LADDER
  },
  [actionTypes.CONSTRUCTING_PLATFORM]: {
    buttonSprite: spriteTypes.CONSTRUCTING_PLATFORM
  },
  [actionTypes.CONSTRUCTING_TREE_HOUSE]: {
    buttonSprite: spriteTypes.CONSTRUCTING_TREE_HOUSE
  },
  [actionTypes.CONSTRUCTING_FIREPLACE]: {
    buttonSprite: spriteTypes.CONSTRUCTING_FIREPLACE
  },
  [actionTypes.DESTROYING]: {
    buttonSprite: spriteTypes.DESTROYING
  }
};

export default actions;