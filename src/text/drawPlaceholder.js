import drawString from './drawString.js';

const drawPlaceholder = (placeholder, position, textArea, gameData, canvasContext) => {
  switch (placeholder) {
    case '/a':
      return {
        ...position,
        x: position.x + drawString(gameData.calendar.day, position, textArea.font, canvasContext),
      };
    case '/b':
      return {
        ...position,
        x: position.x + drawString(Math.round(gameData.guy.health), position, textArea.font, canvasContext),
      };
    case '/c':
      return {
        ...position,
        x: x + drawString(gameData.guy.change.toFixed(1), position, textArea.font, canvasContext),
      };
    case '/z':
      return {
        x: textArea.x,
        y: position.y + textArea.font.height + 5
      };
  }
  return position;
};

export default drawPlaceholder;