import openPaper from './openPaper.js';
import state from '../../state/state.js';

const openDayEndPaper = (text) => {
  const filledText = text
    .replaceAll('{day}', state.calendar.day)
    .replaceAll('{health}', Math.round(state.guy.health))
    .replaceAll('{chance}', state.guy.chance.toFixed(1))
    
  openPaper(filledText, false);
};

export default openDayEndPaper;