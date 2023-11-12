import spriteTypes from '../images/spriteTypes.js';
import state from '../state/state.js';
import tileEdges from '../terrain/tiles/tileEdges.js';
import createInventory from './inventory/createInventory.js';

const initGuy = () => {
  state.guy.tile.x = 1;
  state.guy.tile.y = Math.floor(state.terrain[0].length / 2);
  const tile = state.terrain[state.guy.tile.x][state.guy.tile.y];
  state.guy.position.x = tile.position.x + tileEdges[tile.type].center.x;
  state.guy.position.y = tile.position.y + tileEdges[tile.type].center.y;

  state.guy.water = 100;
  state.guy.food = 100;
  state.guy.health = 100;
  state.guy.chance = 0;
  state.guy.cheatChance = 0;
  state.guy.inventory = createInventory();

  state.guy.sprite = spriteTypes.GUY_SAILING;
};

export default initGuy;