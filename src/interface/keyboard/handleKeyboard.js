import phases from '../../state/phases.js';
import state from '../../state/state.js';
import pressedKeyCodes from './pressedKeyCodes.js';
import sounds from '../../sounds/sounds.js';
import startNewGame from '../../state/startNewGame.js';
import loadState from '../../state/loadState.js';
import actions from '../../action/actions.js';
import startAction from '../../action/startAction.js';
import actionTypes from '../../action/actionTypes.js';
import changeItem from '../../guy/inventory/changeItem.js';
import updateMinimap from '../minimap/updateMinimap.js';
import items from '../../guy/inventory/items.js';

const hasPressedCancel = () => 
  pressedKeyCodes['Escape'] || 
  pressedKeyCodes['Enter'] || 
  pressedKeyCodes['Space'];

const handleKeysDuringLogo = () => {
  if (hasPressedCancel()) {
    sounds.LOGO.instance.stop();
    if (!loadState()) {
      startNewGame();
    }
    return true;
  }
  return false;
};

const handleCameraMovement = () => {
  const movement = {
    x: 0,
    y: 0
  };

  if (pressedKeyCodes['ArrowRight']) {
    movement.x += 10;
  }
  if (pressedKeyCodes['ArrowLeft']) {
    movement.x -= 10;
  }
  if (pressedKeyCodes['ArrowDown']) {
    movement.y += 10;
  }
  if (pressedKeyCodes['ArrowUp']) {
    movement.y -= 10;
  }
  return movement;
}

const handleKeyDuringPlay = () => {
  const fastForward = actions[state.guy.action?.type]?.fastForward;
  if (fastForward && hasPressedCancel()) {
    fastForward();
    return true;
  }

  const movement = handleCameraMovement();
  state.camera.x += movement.x;
  state.camera.y += movement.y;

  if (pressedKeyCodes['Escape']) {
    startAction(actionTypes.STOPPING_GAME);
    return true;
  }
  if (pressedKeyCodes['F11']) {
    startAction(actionTypes.RESTARTING_GAME);
    return true;
  }
  if (pressedKeyCodes['KeyG']) {
    state.options.grid = !state.options.grid;
    return true;
  }

  if (pressedKeyCodes['KeyD']) {
    if (pressedKeyCodes['KeyC']) {
      state.terrain.forEach((terrainColumn) => {
        terrainColumn.forEach((tile) => {
          tile.discovered = true;
        });
      });
      updateMinimap();
      return true;
    }
    if (pressedKeyCodes['KeyI']) {
      changeItem(items.BRANCH, 10);
      changeItem(items.STONE, 10);
      changeItem(items.LEAF, 10);
      changeItem(items.LIANA, 10);
      changeItem(items.LOG, 10);
      return true;
    }
    if (pressedKeyCodes['KeyW']) {
      changeItem(items.AXE, 1);
      changeItem(items.HARROW, 1);
      changeItem(items.FISHING_ROD, 1);
      changeItem(items.HAMMER, 1);
      changeItem(items.SPYGLASS, 1);
      changeItem(items.MATCHES, 1);
      changeItem(items.SHOVEL, 1);
      changeItem(items.MAP, 1);
      changeItem(items.SLING, 1);
      return true;
    }
    if (pressedKeyCodes['KeyE']) {
      state.guy.cheatChance = (state.guy.cheatChance || 0) + 1;
      return false;
    }
  }
  return false;
};

const handleKeysDuringCredits = () => {
  if (hasPressedCancel()) {
    state.phase = phases.EXIT;
    return true;
  }
  return false;
};

const handleKeys = () => {
  switch(state.phase) {
    case phases.LOGO:
      return handleKeysDuringLogo();
    case phases.PLAY:
      return handleKeyDuringPlay();
    case phases.CREDITS:
      return handleKeysDuringCredits();  
  }
  return false;
};

const handleKeyboard = () => {
  const keysProcessed = handleKeys();
  if (keysProcessed) {
    Object.keys(pressedKeyCodes).forEach(code => 
      pressedKeyCodes[code] = false
    );
  }
};

export default handleKeyboard;