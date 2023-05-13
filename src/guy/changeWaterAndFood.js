const changeWaterAndFood = (gameData, waterDifference, foodDifference) => {
  gameData.guy.water = Math.max(0, Math.min(100, gameData.guy.water + waterDifference));
  gameData.guy.food = Math.max(0, Math.min(100, gameData.guy.food + foodDifference));
};

export default changeWaterAndFood;