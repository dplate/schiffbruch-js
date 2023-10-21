import canvases from '../../images/canvases.js';

const getPositionFromEvent = (event) => {
  const rect = canvases.PRIMARY.canvas.getBoundingClientRect();
  const scaling = canvases.PRIMARY.canvas.dataset.scaling;
  return {
    x: Math.min(rect.width / scaling, Math.max(0, (event.clientX / scaling) - rect.left)),
    y: Math.min(rect.height / scaling, Math.max(0, (event.clientY / scaling) - rect.top))
  };
};

export default getPositionFromEvent;