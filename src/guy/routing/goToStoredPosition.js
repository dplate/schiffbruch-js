import goTo from './goTo.js';

const goToStoredPosition = (gameData) => goTo(gameData, gameData.guy.storedPosition);

export default goToStoredPosition;