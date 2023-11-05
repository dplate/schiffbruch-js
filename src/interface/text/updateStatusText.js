import setInventoryStatusText from '../../guy/inventory/setInventoryStatusText.js';
import state from '../../state/state.js';
import formatTime from './formatTime.js';
import setStatusText from './setStatusText.js';
import texts from './texts.js';
import drawTileText from '../../terrain/tiles/drawTileText.js';

const updateStatusText = () => {
  const time = formatTime();
  const water = Math.round(state.guy.water);
  const food = Math.round(state.guy.food);
  const health = Math.round(state.guy.health);
  const chance = state.guy.chance.toFixed(0).toString();
  setStatusText(`${time} ${texts.LABEL_WATER}:${water} ${texts.LABEL_FOOD}:${food} ${texts.LABEL_HEALTH}:${health} ${texts.LABEL_CHANCE}:${chance}`);

  if (state.guy.route.length && !state.guy.active) {
    drawTileText(state.terrain[state.guy.route[state.guy.route.length - 1].x][state.guy.route[state.guy.route.length - 1].y]);
  }

  setInventoryStatusText();
};

export default updateStatusText;