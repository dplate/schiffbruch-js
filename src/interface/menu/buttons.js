import items from '../../guy/inventory/items.js';
import spriteTypes from '../../images/spriteTypes.js';
import state from '../../state/state.js';
import menuTypes from './menuTypes.js';
import startAction from '../../action/startAction.js';
import actionTypes from '../../action/actionTypes.js';
import setStatusText from '../text/setStatusText.js';
import texts from '../text/texts.js';
import constructionTypes from '../../construction/constructionTypes.js';
import setStartConstructionText from '../../construction/setStartConstructionText.js';
import grounds from '../../terrain/tiles/grounds.js';
import isUsableBoat from '../../terrain/objects/isUsableBoat.js';
import findNeighbor from '../../guy/findNeighbor.js';
import openTreasureMap from '../../treasure/openTreasureMap.js';
import isOnSea from '../../guy/isOnSea.js';
import actions from '../../action/actions.js';
import audio from '../../sounds/audio.js';
import interfaces from '../interfaces.js';
import interfaceTypes from '../interfaceTypes.js';
import sprites from '../../images/sprites.js';

const buttonDefault = {
  frame: null,
  isVisible: () => true
};

const buttons = [
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_STOPPING_GAME,
    position: {
      x: 0,
      y: 0
    },
    isVisible: () => !interfaces[interfaceTypes.PANEL]().compact || state.options.openedMenu,
    onTap: () => startAction(actionTypes.STOPPING_GAME),
    onHover: () => setStatusText(texts.BUTTON_STOPPING_GAME),
    getInterface: interfaces[interfaceTypes.GAME_BUTTONS]
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_RESTARTING_GAME,
    position: {
      x: 40,
      y: 0
    },
    isVisible: () => !interfaces[interfaceTypes.PANEL]().compact || state.options.openedMenu,
    onTap: () => startAction(actionTypes.RESTARTING_GAME),
    onHover: () => setStatusText(texts.BUTTON_RESTARTING_GAME),
    getInterface: interfaces[interfaceTypes.GAME_BUTTONS]
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_RESTARTING_DAY,
    position: {
      x: 80,
      y: 0
    },
    isVisible: () => !interfaces[interfaceTypes.PANEL]().compact || state.options.openedMenu,
    onTap: () => startAction(actionTypes.RESTARTING_DAY),
    onHover: () => setStatusText(texts.BUTTON_RESTARTING_DAY),
    getInterface: interfaces[interfaceTypes.GAME_BUTTONS]
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_GRID,
    position: {
      x: 173,
      y: 26
    },
    isVisible: () => !interfaces[interfaceTypes.PANEL]().compact && !state.options.grid,
    onTap: () => state.options.grid = true,
    onHover: () => setStatusText(texts.BUTTON_GRID),
    getInterface: interfaces[interfaceTypes.PANEL]
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_GRID_CHECKED,
    position: {
      x: 173,
      y: 26
    },
    isVisible: () => !interfaces[interfaceTypes.PANEL]().compact && state.options.grid,
    onTap: () => state.options.grid = false,
    onHover: () => setStatusText(texts.BUTTON_GRID_CHECKED),
    getInterface: interfaces[interfaceTypes.PANEL]
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_MUTE,
    position: {
      x: 173,
      y: 60
    },
    isVisible: () => !interfaces[interfaceTypes.PANEL]().compact && audio.isRunning(),
    onTap: () => audio.suspend(),
    onHover: () => setStatusText(texts.BUTTON_MUTE),
    getInterface: interfaces[interfaceTypes.PANEL]
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_MUTE_CHECKED,
    position: {
      x: 173,
      y: 60
    },
    isVisible: () => !interfaces[interfaceTypes.PANEL]().compact && !audio.isRunning(),
    onTap: () => audio.resume(),
    onHover: () => setStatusText(texts.BUTTON_MUTE_CHECKED),
    getInterface: interfaces[interfaceTypes.PANEL]
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_ACTIONS,
    position: {
      x: 0,
      y: 0
    },
    isVisible: () => state.options.openedMenu !== menuTypes.ACTIONS,
    onTap: () => state.options.openedMenu = menuTypes.ACTIONS,
    onHover: () => setStatusText(texts.BUTTON_ACTIONS),
    getInterface: interfaces[interfaceTypes.CONTROL_BUTTONS]
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_ACTIONS_CHECKED,
    position: {
      x: 0,
      y: 0
    },
    isVisible: () => state.options.openedMenu === menuTypes.ACTIONS,
    onTap: () => state.options.openedMenu = null,
    onHover: () => setStatusText(texts.BUTTON_ACTIONS_CHECKED),
    getInterface: interfaces[interfaceTypes.CONTROL_BUTTONS]
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_CONSTRUCTIONS,
    position: {
      x: 41,
      y: 0
    },
    isVisible: () => state.options.openedMenu !== menuTypes.CONSTRUCTIONS,
    onTap: () => state.options.openedMenu = menuTypes.CONSTRUCTIONS,
    onHover: () => setStatusText(texts.BUTTON_CONSTRUCTIONS),
    getInterface: interfaces[interfaceTypes.CONTROL_BUTTONS]
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_CONSTRUCTIONS_CHECKED,
    position: {
      x: 41,
      y: 0
    },
    isVisible: () => state.options.openedMenu === menuTypes.CONSTRUCTIONS,
    onTap: () => state.options.openedMenu = null,
    onHover: () => setStatusText(texts.BUTTON_CONSTRUCTIONS_CHECKED),
    getInterface: interfaces[interfaceTypes.CONTROL_BUTTONS]
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_DOCKING_AND_UNDOCKING,
    position: {
      x: 82,
      y: 0
    },
    isVisible: () => !state.guy.active && isUsableBoat(state.terrain[state.guy.tile.x][state.guy.tile.y]),
    onTap: () => startAction(actionTypes.UNDOCKING),
    onHover: () => setStatusText(texts.BUTTON_UNDOCKING),
    getInterface: interfaces[interfaceTypes.CONTROL_BUTTONS]
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_DOCKING_AND_UNDOCKING,
    position: {
      x: 82,
      y: 0
    },
    isVisible: () => !state.guy.active && isOnSea() && findNeighbor((tile) => tile.ground !== grounds.SEA),
    onTap: () => startAction(actionTypes.DOCKING),
    onHover: () => setStatusText(texts.BUTTON_DOCKING),
    getInterface: interfaces[interfaceTypes.CONTROL_BUTTONS]
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_STOPPING,
    position: {
      x: 82,
      y: 0
    },
    isVisible: () => state.guy.active,
    onTap: () => startAction(actionTypes.STOPPING),
    onHover: () => setStatusText(texts.BUTTON_STOPPING),
    getInterface: interfaces[interfaceTypes.CONTROL_BUTTONS]
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_RESTARTING_CONSTRUCTION,
    position: {
      x: 82,
      y: 0
    },
    isVisible: () => !state.guy.active && state.terrain[state.guy.tile.x][state.guy.tile.y].construction,
    onTap: () => {
      const construction = state.terrain[state.guy.tile.x][state.guy.tile.y].construction;
      for (const [actionType, action] of Object.entries(actions)) {
        if (action.construction === construction.type) {
          startAction(actionType);
          return;
        }
      }
    },
    onHover: () => setStatusText(texts.BUTTON_RESTARTING_CONSTRUCTION),
    getInterface: interfaces[interfaceTypes.CONTROL_BUTTONS]
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_INVENTORY,
    position: {
      x: 123,
      y: 0
    },
    isVisible: () => state.options.openedMenu !== menuTypes.INVENTORY,
    onTap: () => state.options.openedMenu = menuTypes.INVENTORY,
    onHover: () => setStatusText(texts.BUTTON_INVENTORY),
    getInterface: interfaces[interfaceTypes.CONTROL_BUTTONS]
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_INVENTORY_CHECKED,
    position: {
      x: 123,
      y: 0
    },
    isVisible: () => state.options.openedMenu === menuTypes.INVENTORY,
    onTap: () => state.options.openedMenu = null,
    onHover: () => setStatusText(texts.BUTTON_INVENTORY_CHECKED),
    getInterface: interfaces[interfaceTypes.CONTROL_BUTTONS]
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_SEARCHING,
    position: {
      x: 0,
      y: 63
    },
    isVisible: () => state.options.openedMenu === menuTypes.ACTIONS,
    onTap: () => startAction(actionTypes.SEARCHING),
    onHover: () => setStatusText(texts.BUTTON_SEARCHING),
    getInterface: interfaces[interfaceTypes.CONTROL_BUTTONS]
  },
  {
    ...buttonDefault,
    frame: 0,
    sprite: spriteTypes.BUTTON_CONSUMING,
    position: {
      x: 41,
      y: 63
    },
    isVisible: () => state.options.openedMenu === menuTypes.ACTIONS,
    onTap: () => startAction(actionTypes.CONSUMING),
    onHover: () => setStatusText(texts.BUTTON_CONSUMING),
    getInterface: interfaces[interfaceTypes.CONTROL_BUTTONS]
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_SLEEPING,
    position: {
      x: 82,
      y: 63
    },
    isVisible: () => state.options.openedMenu === menuTypes.ACTIONS,
    onTap: () => startAction(actionTypes.SLEEPING),
    onHover: () => setStatusText(texts.BUTTON_SLEEPING),
    getInterface: interfaces[interfaceTypes.CONTROL_BUTTONS]
  },
  {
    ...buttonDefault,
    frame: 1,
    sprite: spriteTypes.BUTTON_CHOPPING,
    position: {
      x: 123,
      y: 63
    },
    isVisible: () => state.options.openedMenu === menuTypes.ACTIONS && state.guy.inventory[items.AXE],
    onTap: () => startAction(actionTypes.CHOPPING),
    onHover: () => setStatusText(texts.BUTTON_CHOPPING),
    getInterface: interfaces[interfaceTypes.CONTROL_BUTTONS]
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_UNKNOWN,
    position: {
      x: 123,
      y: 63
    },
    isVisible: () => state.options.openedMenu === menuTypes.ACTIONS && !state.guy.inventory[items.AXE],
    getInterface: interfaces[interfaceTypes.CONTROL_BUTTONS]
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_FISHING,
    position: {
      x: 0,
      y: 104
    },
    isVisible: () => state.options.openedMenu === menuTypes.ACTIONS && state.guy.inventory[items.FISHING_ROD],
    onTap: () => startAction(actionTypes.FISHING),
    onHover: () => setStatusText(texts.BUTTON_FISHING),
    getInterface: interfaces[interfaceTypes.CONTROL_BUTTONS]
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_UNKNOWN,
    position: {
      x: 0,
      y: 104
    },
    isVisible: () => state.options.openedMenu === menuTypes.ACTIONS && !state.guy.inventory[items.FISHING_ROD],
    getInterface: interfaces[interfaceTypes.CONTROL_BUTTONS]
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_LIGHTNING,
    position: {
      x: 41,
      y: 104
    },
    isVisible: () => state.options.openedMenu === menuTypes.ACTIONS && state.guy.inventory[items.MATCHES],
    onTap: () => startAction(actionTypes.LIGHTNING),
    onHover: () => setStatusText(texts.BUTTON_LIGHTNING),
    getInterface: interfaces[interfaceTypes.CONTROL_BUTTONS]
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_UNKNOWN,
    position: {
      x: 41,
      y: 104
    },
    isVisible: () => state.options.openedMenu === menuTypes.ACTIONS && !state.guy.inventory[items.MATCHES],
    getInterface: interfaces[interfaceTypes.CONTROL_BUTTONS]
  },
  {
    ...buttonDefault,
    frame: 0,
    sprite: spriteTypes.BUTTON_LOOKING,
    position: {
      x: 82,
      y: 104
    },
    isVisible: () => state.options.openedMenu === menuTypes.ACTIONS && state.guy.inventory[items.SPYGLASS],
    onTap: () => startAction(actionTypes.LOOKING),
    onHover: () => setStatusText(texts.BUTTON_LOOKING),
    getInterface: interfaces[interfaceTypes.CONTROL_BUTTONS]
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_UNKNOWN,
    position: {
      x: 82,
      y: 104
    },
    isVisible: () => state.options.openedMenu === menuTypes.ACTIONS && !state.guy.inventory[items.SPYGLASS],
    getInterface: interfaces[interfaceTypes.CONTROL_BUTTONS]
  },
  {
    ...buttonDefault,
    frame: 0,
    sprite: spriteTypes.BUTTON_HUNTING_TREASURE,
    position: {
      x: 123,
      y: 104
    },
    isVisible: () => state.options.openedMenu === menuTypes.ACTIONS && state.guy.inventory[items.MAP],
    onTap: () => openTreasureMap(),
    onHover: () => setStatusText(texts.BUTTON_HUNTING_TREASURE),
    getInterface: interfaces[interfaceTypes.CONTROL_BUTTONS]
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_UNKNOWN,
    position: {
      x: 123,
      y: 104
    },
    isVisible: () => state.options.openedMenu === menuTypes.ACTIONS && !state.guy.inventory[items.MAP],
    getInterface: interfaces[interfaceTypes.CONTROL_BUTTONS]
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_SHOVELING,
    position: {
      x: 0,
      y: 145
    },
    isVisible: () => state.options.openedMenu === menuTypes.ACTIONS && state.guy.inventory[items.SHOVEL],
    onTap: () => startAction(actionTypes.SHOVELING),
    onHover: () => setStatusText(texts.BUTTON_SHOVELING),
    getInterface: interfaces[interfaceTypes.CONTROL_BUTTONS]
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_UNKNOWN,
    position: {
      x: 0,
      y: 145
    },
    isVisible: () => state.options.openedMenu === menuTypes.ACTIONS && !state.guy.inventory[items.SHOVEL],
    getInterface: interfaces[interfaceTypes.CONTROL_BUTTONS]
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_SLINGING,
    position: {
      x: 41,
      y: 145
    },
    isVisible: () => state.options.openedMenu === menuTypes.ACTIONS && state.guy.inventory[items.SLING],
    onTap: () => startAction(actionTypes.SLINGING),
    onHover: () => setStatusText(texts.BUTTON_SLINGING),
    getInterface: interfaces[interfaceTypes.CONTROL_BUTTONS]
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_UNKNOWN,
    position: {
      x: 41,
      y: 145
    },
    isVisible: () => state.options.openedMenu === menuTypes.ACTIONS && !state.guy.inventory[items.SLING],
    getInterface: interfaces[interfaceTypes.CONTROL_BUTTONS]
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_TENT,
    position: {
      x: 0,
      y: 63
    },
    isVisible: () => state.options.openedMenu === menuTypes.CONSTRUCTIONS,
    onTap: () => startAction(actionTypes.CONSTRUCTING_TENT),
    onHover: () => setStartConstructionText(constructionTypes.TENT),
    getInterface: interfaces[interfaceTypes.CONTROL_BUTTONS]
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_FIELD,
    position: {
      x: 41,
      y: 63
    },
    isVisible: () => state.options.openedMenu === menuTypes.CONSTRUCTIONS && state.guy.inventory[items.HARROW],
    onTap: () => startAction(actionTypes.CONSTRUCTING_FIELD),
    onHover: () => setStartConstructionText(constructionTypes.FIELD),
    getInterface: interfaces[interfaceTypes.CONTROL_BUTTONS]
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_UNKNOWN,
    position: {
      x: 41,
      y: 63
    },
    isVisible: () => state.options.openedMenu === menuTypes.CONSTRUCTIONS && !state.guy.inventory[items.HARROW],
    getInterface: interfaces[interfaceTypes.CONTROL_BUTTONS]
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_BOAT,
    position: {
      x: 82,
      y: 63
    },
    isVisible: () => state.options.openedMenu === menuTypes.CONSTRUCTIONS && state.guy.inventory[items.AXE],
    onTap: () => startAction(actionTypes.CONSTRUCTING_BOAT),
    onHover: () => setStartConstructionText(constructionTypes.BOAT),
    getInterface: interfaces[interfaceTypes.CONTROL_BUTTONS]
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_UNKNOWN,
    position: {
      x: 82,
      y: 63
    },
    isVisible: () => state.options.openedMenu === menuTypes.CONSTRUCTIONS && !state.guy.inventory[items.AXE],
    getInterface: interfaces[interfaceTypes.CONTROL_BUTTONS]
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_PIPE,
    position: {
      x: 123,
      y: 63
    },
    isVisible: () => state.options.openedMenu === menuTypes.CONSTRUCTIONS && state.guy.inventory[items.AXE],
    onTap: () => startAction(actionTypes.CONSTRUCTING_PIPE),
    onHover: () => setStartConstructionText(constructionTypes.PIPE),
    getInterface: interfaces[interfaceTypes.CONTROL_BUTTONS]
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_UNKNOWN,
    position: {
      x: 123,
      y: 63
    },
    isVisible: () => state.options.openedMenu === menuTypes.CONSTRUCTIONS && !state.guy.inventory[items.AXE],
    getInterface: interfaces[interfaceTypes.CONTROL_BUTTONS]
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_SOS,
    position: {
      x: 0,
      y: 104
    },
    isVisible: () => state.options.openedMenu === menuTypes.CONSTRUCTIONS,
    onTap: () => startAction(actionTypes.CONSTRUCTING_SOS),
    onHover: () => setStartConstructionText(constructionTypes.SOS),
    getInterface: interfaces[interfaceTypes.CONTROL_BUTTONS]
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_LADDER,
    position: {
      x: 41,
      y: 104
    },
    isVisible: () => state.options.openedMenu === menuTypes.CONSTRUCTIONS && state.guy.inventory[items.HAMMER],
    onTap: () => startAction(actionTypes.CONSTRUCTING_LADDER),
    onHover: () => setStartConstructionText(constructionTypes.LADDER),
    getInterface: interfaces[interfaceTypes.CONTROL_BUTTONS]
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_UNKNOWN,
    position: {
      x: 41,
      y: 104
    },
    isVisible: () => state.options.openedMenu === menuTypes.CONSTRUCTIONS && !state.guy.inventory[items.HAMMER],
    getInterface: interfaces[interfaceTypes.CONTROL_BUTTONS]
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_PLATFORM,
    position: {
      x: 82,
      y: 104
    },
    isVisible: () => state.options.openedMenu === menuTypes.CONSTRUCTIONS && state.guy.inventory[items.HAMMER],
    onTap: () => startAction(actionTypes.CONSTRUCTING_PLATFORM),
    onHover: () => setStartConstructionText(constructionTypes.PLATFORM),
    getInterface: interfaces[interfaceTypes.CONTROL_BUTTONS]
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_UNKNOWN,
    position: {
      x: 82,
      y: 104
    },
    isVisible: () => state.options.openedMenu === menuTypes.CONSTRUCTIONS && !state.guy.inventory[items.HAMMER],
    getInterface: interfaces[interfaceTypes.CONTROL_BUTTONS]
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_TREE_HOUSE,
    position: {
      x: 123,
      y: 104
    },
    isVisible: () => state.options.openedMenu === menuTypes.CONSTRUCTIONS && state.guy.inventory[items.HAMMER],
    onTap: () => startAction(actionTypes.CONSTRUCTING_TREE_HOUSE),
    onHover: () => setStartConstructionText(constructionTypes.TREE_HOUSE),
    getInterface: interfaces[interfaceTypes.CONTROL_BUTTONS]
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_UNKNOWN,
    position: {
      x: 123,
      y: 104
    },
    isVisible: () => state.options.openedMenu === menuTypes.CONSTRUCTIONS && !state.guy.inventory[items.HAMMER],
    getInterface: interfaces[interfaceTypes.CONTROL_BUTTONS]
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_FIREPLACE,
    position: {
      x: 0,
      y: 145
    },
    isVisible: () => state.options.openedMenu === menuTypes.CONSTRUCTIONS,
    onTap: () => startAction(actionTypes.CONSTRUCTING_FIREPLACE),
    onHover: () => setStartConstructionText(constructionTypes.FIREPLACE),
    getInterface: interfaces[interfaceTypes.CONTROL_BUTTONS]
  },
  {
    ...buttonDefault,
    sprite: spriteTypes.BUTTON_DESTROYING,
    position: {
      x: 123,
      y: 145
    },
    isVisible: () => state.options.openedMenu === menuTypes.CONSTRUCTIONS,
    onTap: () => startAction(actionTypes.DESTROYING),
    onHover: () => setStatusText(texts.BUTTON_DESTROYING),
    getInterface: interfaces[interfaceTypes.CONTROL_BUTTONS]
  }
];

buttons.forEach(button => button.frame = button.frame === null ? sprites[button.sprite].frameCount - 1 : button.frame);

export default buttons;