import state from '../../state/state.js';

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
  if (isOverAnswer(position, state.paper.question.yes)) {
    return true;
  };
  if (isOverAnswer(position, state.paper.question.no)) {
    return false;
  };
  return null;
};

export default getPaperAnswerAtPosition;