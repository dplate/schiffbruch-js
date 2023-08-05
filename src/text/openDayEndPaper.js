import openPaper from './openPaper.js';

const openDayEndPaper = (text, gameData) => {
  const filledText = text
    .replaceAll('{day}', gameData.calendar.day)
    .replaceAll('{health}', Math.round(gameData.guy.health))
    .replaceAll('{chance}', gameData.guy.chance.toFixed(1))
    
  openPaper(filledText, false, gameData);
};

export default openDayEndPaper;