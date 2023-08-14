import items from '../../guy/inventory/items.js';
import spriteTypes from '../../images/spriteTypes.js';
import state from '../../state/state.js';
import menuTypes from './menuTypes.js';
import startAction from '../../action/startAction.js';
import actionTypes from '../../action/actionTypes.js';
import drawStatusText from '../text/drawStatusText.js';
import texts from '../text/texts.js';
import constructionTypes from '../../construction/constructionTypes.js';
import drawStartConstructionText from '../../construction/drawStartConstructionText.js';

const buttonDefault = {
  frame: 0,
  isVisible: () => true
};

const buttons = [
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_ACTIONS,
    position: {
      x: 29,
      y: 157
    },
    isVisible: () => state.options.openedMenu !== menuTypes.ACTIONS,
    onTap: () => state.options.openedMenu = menuTypes.ACTIONS,
    onHover: () => drawStatusText(texts.BUTTON_ACTIONS)
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_ACTIONS_CHECKED,
    position: {
      x: 29,
      y: 157
    },
    isVisible: () => state.options.openedMenu === menuTypes.ACTIONS,
    onTap: () => state.options.openedMenu = null,
    onHover: () => drawStatusText(texts.BUTTON_ACTIONS_CHECKED)
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_CONSTRUCTIONS,
    position: {
      x: 70,
      y: 157
    },
    isVisible: () => state.options.openedMenu !== menuTypes.CONSTRUCTIONS,
    onTap: () => state.options.openedMenu = menuTypes.CONSTRUCTIONS,
    onHover: () => drawStatusText(texts.BUTTON_CONSTRUCTIONS)
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_CONSTRUCTIONS_CHECKED,
    position: {
      x: 70,
      y: 157
    },
    isVisible: () => state.options.openedMenu === menuTypes.CONSTRUCTIONS,
    onTap: () => state.options.openedMenu = null,
    onHover: () => drawStatusText(texts.BUTTON_CONSTRUCTIONS_CHECKED)
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_INVENTORY,
    position: {
      x: 152,
      y: 157
    },
    isVisible: () => state.options.openedMenu !== menuTypes.INVENTORY,
    onTap: () => state.options.openedMenu = menuTypes.INVENTORY,
    onHover: () => drawStatusText(texts.BUTTON_INVENTORY)
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_INVENTORY_CHECKED,
    position: {
      x: 152,
      y: 157
    },
    isVisible: () => state.options.openedMenu === menuTypes.INVENTORY,
    onTap: () => state.options.openedMenu = null,
    onHover: () => drawStatusText(texts.BUTTON_INVENTORY_CHECKED)
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_SEARCHING,
    position: {
      x: 29,
      y: 220
    },
    isVisible: () => state.options.openedMenu === menuTypes.ACTIONS,
    onTap: () => startAction(actionTypes.SEARCHING),
    onHover: () => drawStatusText(texts.BUTTON_SEARCHING)
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_EATING_AND_DRINKING,
    position: {
      x: 70,
      y: 220
    },
    isVisible: () => state.options.openedMenu === menuTypes.ACTIONS,
    onTap: () => startAction(actionTypes.EATING_AND_DRINKING),
    onHover: () => drawStatusText(texts.BUTTON_EATING_AND_DRINKING)
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_SLEEPING,
    position: {
      x: 111,
      y: 220
    },
    isVisible: () => state.options.openedMenu === menuTypes.ACTIONS,
    onTap: () => startAction(actionTypes.SLEEPING),
    onHover: () => drawStatusText(texts.BUTTON_SLEEPING)
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_CHOPPING,
    position: {
      x: 152,
      y: 220
    },
    isVisible: () => state.options.openedMenu === menuTypes.ACTIONS && state.guy.inventory[items.AXE],
    onTap: () => startAction(actionTypes.CHOPPING),
    onHover: () => drawStatusText(texts.BUTTON_CHOPPING)
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_UNKNOWN,
    position: {
      x: 152,
      y: 220
    },
    isVisible: () => state.options.openedMenu === menuTypes.ACTIONS && !state.guy.inventory[items.AXE],
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_FISHING,
    position: {
      x: 29,
      y: 268
    },
    isVisible: () => state.options.openedMenu === menuTypes.ACTIONS && state.guy.inventory[items.FISHING_ROD],
    onTap: () => startAction(actionTypes.FISHING),
    onHover: () => drawStatusText(texts.BUTTON_FISHING)
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_UNKNOWN,
    position: {
      x: 29,
      y: 268
    },
    isVisible: () => state.options.openedMenu === menuTypes.ACTIONS && !state.guy.inventory[items.FISHING_ROD],
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_LIGHTNING,
    position: {
      x: 70,
      y: 268
    },
    isVisible: () => state.options.openedMenu === menuTypes.ACTIONS && state.guy.inventory[items.MATCHES],
    onTap: () => startAction(actionTypes.LIGHTNING),
    onHover: () => drawStatusText(texts.BUTTON_LIGHTNING)
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_UNKNOWN,
    position: {
      x: 70,
      y: 268
    },
    isVisible: () => state.options.openedMenu === menuTypes.ACTIONS && !state.guy.inventory[items.MATCHES],
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_LOOKING,
    position: {
      x: 111,
      y: 268
    },
    isVisible: () => state.options.openedMenu === menuTypes.ACTIONS && state.guy.inventory[items.SPYGLASS],
    onTap: () => startAction(actionTypes.LOOKING),
    onHover: () => drawStatusText(texts.BUTTON_LOOKING)
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_UNKNOWN,
    position: {
      x: 111,
      y: 268
    },
    isVisible: () => state.options.openedMenu === menuTypes.ACTIONS && !state.guy.inventory[items.SPYGLASS],
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_HUNTING_TREASURE,
    position: {
      x: 152,
      y: 268
    },
    isVisible: () => state.options.openedMenu === menuTypes.ACTIONS && state.guy.inventory[items.MAP],
    onTap: () => startAction(actionTypes.openTreasureMap),
    onHover: () => drawStatusText(texts.BUTTON_HUNTING_TREASURE)
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_UNKNOWN,
    position: {
      x: 152,
      y: 268
    },
    isVisible: () => state.options.openedMenu === menuTypes.ACTIONS && !state.guy.inventory[items.MAP],
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_SHOVELING,
    position: {
      x: 29,
      y: 316
    },
    isVisible: () => state.options.openedMenu === menuTypes.ACTIONS && state.guy.inventory[items.SHOVEL],
    onTap: () => startAction(actionTypes.SHOVELING),
    onHover: () => drawStatusText(texts.BUTTON_SHOVELING)
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_UNKNOWN,
    position: {
      x: 29,
      y: 316
    },
    isVisible: () => state.options.openedMenu === menuTypes.ACTIONS && !state.guy.inventory[items.SHOVEL],
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_SLINGING,
    position: {
      x: 70,
      y: 316
    },
    isVisible: () => state.options.openedMenu === menuTypes.ACTIONS && state.guy.inventory[items.SLING],
    onTap: () => startAction(actionTypes.SLINGING),
    onHover: () => drawStatusText(texts.BUTTON_SLINGING)
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_UNKNOWN,
    position: {
      x: 70,
      y: 316
    },
    isVisible: () => state.options.openedMenu === menuTypes.ACTIONS && !state.guy.inventory[items.SLING],
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_TENT,
    position: {
      x: 29,
      y: 220
    },
    isVisible: () => state.options.openedMenu === menuTypes.CONSTRUCTIONS,
    onTap: () => startAction(actionTypes.CONSTRUCTING_TENT),
    onHover: () => drawStartConstructionText(constructionTypes.TENT)
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_FIELD,
    position: {
      x: 70,
      y: 220
    },
    isVisible: () => state.options.openedMenu === menuTypes.CONSTRUCTIONS && state.guy.inventory[items.HARROW],
    onTap: () => startAction(actionTypes.CONSTRUCTING_FIELD),
    onHover: () => drawStartConstructionText(constructionTypes.FIELD)
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_UNKNOWN,
    position: {
      x: 70,
      y: 220
    },
    isVisible: () => state.options.openedMenu === menuTypes.CONSTRUCTIONS && !state.guy.inventory[items.HARROW],
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_BOAT,
    position: {
      x: 111,
      y: 220
    },
    isVisible: () => state.options.openedMenu === menuTypes.CONSTRUCTIONS && state.guy.inventory[items.AXE],
    onTap: () => startAction(actionTypes.CONSTRUCTING_BOAT),
    onHover: () => drawStartConstructionText(constructionTypes.BOAT)
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_UNKNOWN,
    position: {
      x: 111,
      y: 220
    },
    isVisible: () => state.options.openedMenu === menuTypes.CONSTRUCTIONS && !state.guy.inventory[items.AXE],
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_PIPE,
    position: {
      x: 152,
      y: 220
    },
    isVisible: () => state.options.openedMenu === menuTypes.CONSTRUCTIONS && state.guy.inventory[items.AXE],
    onTap: () => startAction(actionTypes.CONSTRUCTING_PIPE),
    onHover: () => drawStartConstructionText(constructionTypes.PIPE)
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_UNKNOWN,
    position: {
      x: 152,
      y: 220
    },
    isVisible: () => state.options.openedMenu === menuTypes.CONSTRUCTIONS && !state.guy.inventory[items.AXE],
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_SOS,
    position: {
      x: 29,
      y: 268
    },
    isVisible: () => state.options.openedMenu === menuTypes.CONSTRUCTIONS,
    onTap: () => startAction(actionTypes.CONSTRUCTING_SOS),
    onHover: () => drawStartConstructionText(constructionTypes.SOS)
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_LADDER,
    position: {
      x: 70,
      y: 268
    },
    isVisible: () => state.options.openedMenu === menuTypes.CONSTRUCTIONS && state.guy.inventory[items.HAMMER],
    onTap: () => startAction(actionTypes.CONSTRUCTING_LADDER),
    onHover: () => drawStartConstructionText(constructionTypes.LADDER)
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_UNKNOWN,
    position: {
      x: 70,
      y: 268
    },
    isVisible: () => state.options.openedMenu === menuTypes.CONSTRUCTIONS && !state.guy.inventory[items.HAMMER],
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_PLATFORM,
    position: {
      x: 111,
      y: 268
    },
    isVisible: () => state.options.openedMenu === menuTypes.CONSTRUCTIONS && state.guy.inventory[items.HAMMER],
    onTap: () => startAction(actionTypes.CONSTRUCTING_PLATFORM),
    onHover: () => drawStartConstructionText(constructionTypes.PLATFORM)
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_UNKNOWN,
    position: {
      x: 111,
      y: 268
    },
    isVisible: () => state.options.openedMenu === menuTypes.CONSTRUCTIONS && !state.guy.inventory[items.HAMMER],
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_TREE_HOUSE,
    position: {
      x: 152,
      y: 268
    },
    isVisible: () => state.options.openedMenu === menuTypes.CONSTRUCTIONS && state.guy.inventory[items.HAMMER],
    onTap: () => startAction(actionTypes.CONSTRUCTING_TREE_HOUSE),
    onHover: () => drawStartConstructionText(constructionTypes.TREE_HOUSE)
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_UNKNOWN,
    position: {
      x: 152,
      y: 268
    },
    isVisible: () => state.options.openedMenu === menuTypes.CONSTRUCTIONS && !state.guy.inventory[items.HAMMER]
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_FIREPLACE,
    position: {
      x: 29,
      y: 316
    },
    isVisible: () => state.options.openedMenu === menuTypes.CONSTRUCTIONS,
    onTap: () => startAction(actionTypes.CONSTRUCTING_FIREPLACE),
    onHover: () => drawStartConstructionText(constructionTypes.FIREPLACE)
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_DESTROYING,
    position: {
      x: 152,
      y: 316
    },
    isVisible: () => state.options.openedMenu === menuTypes.CONSTRUCTIONS,
    onTap: () => startAction(actionTypes.DESTROYING),
    onHover: () => drawStatusText(texts.BUTTON_DESTROYING)
  }
];

export default buttons;