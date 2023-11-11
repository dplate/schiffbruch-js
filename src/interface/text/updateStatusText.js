import setInventoryStatusText from '../../guy/inventory/setInventoryStatusText.js';
import state from '../../state/state.js';
import formatTime from './formatTime.js';
import setStatusText from './setStatusText.js';
import texts from './texts.js';
import createTileText from '../../terrain/tiles/createTileText.js';

const updateStatusText = () => {
  const time = formatTime();
  const tile = state.guy.route.length ? state.guy.route[state.guy.route.length - 1] : state.guy.tile;
  setStatusText(time + '  ' + createTileText(state.terrain[tile.x][tile.y]));

  if (state.guy.active) {
    const water = Math.round(state.guy.water);
    const food = Math.round(state.guy.food);
    const health = Math.round(state.guy.health);
    const chance = state.guy.chance.toFixed(0).toString();
    setStatusText(`${time}  ${texts.LABEL_WATER}:${water} ${texts.LABEL_FOOD}:${food} ${texts.LABEL_HEALTH}:${health} ${texts.LABEL_CHANCE}:${chance}`);
  }

  setInventoryStatusText();
};

export default updateStatusText;