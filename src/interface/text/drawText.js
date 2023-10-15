import clearText from './clearText.js';
import drawString from './drawString.js';

const drawText = (text, textArea) => {
  const area = textArea.getArea();
  clearText(textArea); 

  const position = {
    x: area.x,
    y: area.y
  };

  const words = text.split(' ');
  words.forEach(word => {
    if (word === '/z') {
      position.x = area.x;
      position.y += textArea.font.height + 5
    } else {
      const wordWidth = word.length * textArea.font.distance;
      if ((position.x + wordWidth) > (area.x + area.width)) {
        position.x = area.x;
        position.y += textArea.font.height + 3;
      }
      position.x += drawString(word + ' ', position, textArea.font);
    }
  });

  return position.y + textArea.font.height - area.y;
};

export default drawText;