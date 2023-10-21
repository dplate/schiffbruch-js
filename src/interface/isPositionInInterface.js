import interfaces from './interfaces.js';

const isPositionInInterface = (position, interfaceType) => {
  const settings = interfaces[interfaceType]();
  if (settings.hidden) {
    return false;
  }
  const area = settings.area;
  return position.x >= area.x && 
    position.x < area.x + area.width &&
    position.y >= area.y && 
    position.y < area.y + area.height;
};

export default isPositionInInterface;