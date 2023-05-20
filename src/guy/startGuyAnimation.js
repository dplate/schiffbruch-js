const startGuyAnimation = (gameData, sprite) => {
  gameData.guy.sprite = sprite;
  gameData.guy.frame = 0;
  gameData.guy.active = true;
};

export default startGuyAnimation;