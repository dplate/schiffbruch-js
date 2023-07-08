const clearText = (textArea, canvasContext) => {
  canvasContext.clearRect(textArea.x, textArea.y, textArea.width, textArea.height);
}

export default clearText;