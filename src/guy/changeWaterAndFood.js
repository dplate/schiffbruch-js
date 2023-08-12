import state from '../state/state.js';

const changeWaterAndFood = (waterDifference, foodDifference) => {
  state.guy.water = Math.max(0, Math.min(100, state.guy.water + waterDifference));
  state.guy.food = Math.max(0, Math.min(100, state.guy.food + foodDifference));
};

export default changeWaterAndFood;