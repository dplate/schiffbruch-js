import openPaper from './openPaper.js';
import state from '../../state/state.js';
import calculateChance from '../../guy/calculateChance.js';

const openDayEndPaper = (text) => {
  const chance = calculateChance();
  const filledText = text
    .replaceAll('{day}', state.calendar.day)
    .replaceAll('{health}', Math.round(state.guy.health))
    .replaceAll('{chance}', chance.toFixed(1))
    
  openPaper(filledText, false);
};

export default openDayEndPaper;