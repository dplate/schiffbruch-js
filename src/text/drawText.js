import clearText from './clearText.js';
import drawPlaceholder from './drawPlaceholder.js';
import drawString from './drawString.js';
import textAreas from './textAreas.js';

const blank = ' ';
const slash = '/';

const drawText = (text, textArea, gameData, canvasContext) => {
  clearText(textArea, canvasContext); 

  const position = {
    x: textArea.x,
    y: textArea.y
  };

  const words = text.split(blank);
  words.forEach(word => {
    if (word.startsWith(slash)) {
      Object.assign(
        position,
        drawPlaceholder(word, position, textArea, gameData, canvasContext)
      );
    } else {
      const wordWidth = word.length * textArea.font.distance;
      if ((position.x + wordWidth) > (textArea.x + textArea.width)) {
        position.x = textArea.x;
        position.y += textArea.font.height + 3;
      }
      position.x += drawString(word + ' ', position, textArea.font, canvasContext);
    }
  });

  return position.y + textArea.font.height - textArea.y;
};

export default drawText;