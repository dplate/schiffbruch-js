import state from '../../state/state.js';
import answerArea from './answerArea.js';

const isOverAnswer = (position, answer) => {
  return position.x >= answer.x && 
    position.x < answer.x + answer.width &&
    position.y >= answer.y && 
    position.y < answer.y + answer.height
};

const getPaperAnswerAtPosition = (position) => {
  if (!state.paper?.question) {
    return null;
  }
  if (isOverAnswer(position, answerArea.getYes())) {
    return true;
  };
  if (isOverAnswer(position, answerArea.getNo())) {
    return false;
  };
  return null;
};

export default getPaperAnswerAtPosition;