import state from '../../state/state.js';

const formatTime = () => {
  const hour = String(6 + Math.floor(state.calendar.minutes / 60));
  const minute =  String(state.calendar.minutes % 60);
  return `${hour.padStart(2, '0')}:${minute.padStart(2, '0')}`;
};

export default formatTime;