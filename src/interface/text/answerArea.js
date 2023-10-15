import state from '../../state/state.js';
import textAreas from './textAreas.js';

const answerArea = {
  getYes: () => {
    const area = textAreas.PAPER.getArea();
    return {
      x: area.x + 50,
      y: area.y + state.paper.height - 90,
      width: 41,
      height: 42
    };
  },
  getNo: () => {
    const area = textAreas.PAPER.getArea();
    return {
      x: area.x + 220,
      y: area.y + state.paper.height - 90,
      width: 100,
      height: 39
    };
  }
};

export default answerArea;