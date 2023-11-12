import state from '../../state/state.js';
import textAreas from './textAreas.js';

const answerArea = {
  getYes: () => {
    const area = textAreas.PAPER.getArea();
    return {
      x: area.x + 80,
      y: area.y + state.paper.height - 90,
      width: 68,
      height: 41
    };
  },
  getNo: () => {
    const area = textAreas.PAPER.getArea();
    return {
      x: area.x + 250,
      y: area.y + state.paper.height - 90,
      width: 97,
      height: 39
    };
  }
};

export default answerArea;