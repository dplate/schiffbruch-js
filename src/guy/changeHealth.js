const changeHealth = (gameData, healthDifference) => {
  gameData.guy.health = Math.max(0, Math.min(100, gameData.guy.health + healthDifference));
};

export default changeHealth;