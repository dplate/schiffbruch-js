import clearText from './clearText.js';
import drawString from './drawString.js';

const drawText = (text, textArea) => {
  clearText(textArea); 

  const position = {
    x: textArea.x,
    y: textArea.y
  };

  const words = text.split(' ');
  words.forEach(word => {
    if (word === '/z') {
      position.x = textArea.x;
      position.y += textArea.font.height + 5
    } else {
      const wordWidth = word.length * textArea.font.distance;
      if ((position.x + wordWidth) > (textArea.x + textArea.width)) {
        position.x = textArea.x;
        position.y += textArea.font.height + 3;
      }
      position.x += drawString(word + ' ', position, textArea.font);
    }
  });

  return position.y + textArea.font.height - textArea.y;
};

export default drawText;