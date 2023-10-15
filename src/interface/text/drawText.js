import drawString from './drawString.js';

const drawText = (textArea, simulate = false) => {
  const area = textArea.getArea();

  const position = {
    x: area.x,
    y: area.y
  };

  const words = textArea.text.split(' ');
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
      const string = word + ' ';
      if (!simulate) {
        drawString(string, position, textArea.font, simulate);
      }
  
      position.x += string.length * textArea.font.distance;
    }
  });

  return position.y + textArea.font.height - area.y;
};

export default drawText;