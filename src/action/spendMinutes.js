import spriteTypes from '../images/spriteTypes.js';
import sprites from '../images/sprites.js';
import isOnSea from '../guy/isOnSea.js';
import changeHealth from '../guy/changeHealth.js';
import state from '../state/state.js';
import startAction from './startAction.js';
import actionTypes from './actionTypes.js';
import actions from './actions.js';

const removeObjectsWithLifetime = (minutes, tile) => {
  if (tile.object?.lifetime) {
    tile.object.lifetime -= minutes;
    if (tile.object.lifetime <= 0) {
      tile.object = null;
    }
  }
};

const growFood = (minutes, tile) => {
  if (tile.object?.sprite === spriteTypes.FIELD && !tile.construction) {
    tile.object.frame += minutes * 0.005;
    tile.object.frame = Math.min(tile.object.frame, 2);
  } else if (tile.object?.sprite === spriteTypes.BUSH) {
    tile.object.frame += minutes * 0.0005;
    tile.object.frame = Math.min(tile.object.frame, sprites[tile.object.sprite].frameCount - 1);
  }
};

const checkForRescue = (minutes) => {
  const rescued = Math.random() < state.guy.chance / 100 * minutes / 720;
  if (!isOnSea() && rescued) {
    startAction(actionTypes.LEAVING);
  }
};

const spendMinutes = (minutes) => {
  if (actions[state.guy.action?.type]?.movie) {
    return;
  }
  state.calendar.minutes += minutes;

  state.terrain.forEach((terrainColumn) => {
    terrainColumn.forEach((tile) => {
      removeObjectsWithLifetime(minutes, tile);
      growFood(minutes, tile);
    });
  });
  changeHealth(minutes * (state.guy.water - 50 + state.guy.food - 50) / 1000);
  checkForRescue(minutes);
};

export default spendMinutes;