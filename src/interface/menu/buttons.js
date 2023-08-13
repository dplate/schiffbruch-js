import items from '../../guy/inventory/items.js';
import spriteTypes from '../../images/spriteTypes.js';
import state from '../../state/state.js';
import menuTypes from './menuTypes.js';
import startAction from '../../action/startAction.js';
import actionTypes from '../../action/actionTypes.js';
import startEatingAndDrinking from '../../action/starters/startEatingAndDrinking.js';
import startSleeping from '../../action/starters/startSleeping.js';
import startChopping from '../../action/starters/startChopping.js';
import startFishing from '../../action/starters/startFishing.js';
import startLightning from '../../action/starters/startLightning.js';
import startLooking from '../../action/starters/startLooking.js';
import openTreasureMap from '../../treasure/openTreasureMap.js';
import startShoveling from '../../action/starters/startShoveling.js';
import startSlinging from '../../action/starters/startSlinging.js';
import drawStatusText from '../text/drawStatusText.js';
import texts from '../text/texts.js';
import startConstructingTent from '../../action/starters/startConstructingTent.js';
import constructionTypes from '../../construction/constructionTypes.js';
import drawStartConstructionText from '../../construction/drawStartConstructionText.js';
import startConstructingField from '../../action/starters/startConstructingField.js';
import startConstructingBoat from '../../action/starters/startConstructingBoat.js';
import startConstructingPipe from '../../action/starters/startConstructingPipe.js';
import startConstructingSos from '../../action/starters/startConstructingSos.js';
import startConstructingLadder from '../../action/starters/startConstructingLadder.js';
import startConstructingPlatform from '../../action/starters/startConstructingPlatform.js';
import startConstructingTreeHouse from '../../action/starters/startConstructingTreeHouse.js';
import startConstructingFireplace from '../../action/starters/startConstructingFireplace.js';
import startDestroying from '../../action/starters/startDestroying.js';

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
    onTap: startEatingAndDrinking,
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
    onTap: startSleeping,
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
    onTap: startChopping,
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
    onTap: startFishing,
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
    onTap: startLightning,
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
    onTap: startLooking,
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
    onTap: openTreasureMap,
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
    onTap: startShoveling,
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
    onTap: startSlinging,
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
    onTap: startConstructingTent,
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
    onTap: startConstructingField,
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
    onTap: startConstructingBoat,
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
    onTap: startConstructingPipe,
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
    onTap: startConstructingSos,
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
    onTap: startConstructingLadder,
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
    onTap: startConstructingPlatform,
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
    onTap: startConstructingTreeHouse,
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
    onTap: startConstructingFireplace,
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
    onTap: startDestroying,
    onHover: () => drawStatusText(texts.BUTTON_DESTROYING)
  }
];

export default buttons;