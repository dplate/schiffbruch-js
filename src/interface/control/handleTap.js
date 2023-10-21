import control from './control.js';
import getPaperAnswerAtPosition from '../text/getPaperAnswerAtPosition.js';
import sounds from '../../sounds/sounds.js';
import state from '../../state/state.js';
import closePaper from '../text/closePaper.js';
import spriteTypes from '../../images/spriteTypes.js';
import getButtonAtPosition from '../menu/getButtonAtPosition.js';
import interfaceTypes from '../interfaceTypes.js';
import handleButtonTaps from '../menu/handleButtonTaps.js';
import getTileByPosition from '../../terrain/getTileByPosition.js';
import findRoute from '../../guy/routing/findRoute.js';
import isPositionInInterface from '../isPositionInInterface.js';
import workbench from '../../guy/inventory/workbench.js';
import combineItems from '../../guy/inventory/combineItems.js';
import findItemAtPosition from '../../guy/inventory/findItemAtPosition.js';

const handlePaperTap = () => {
  if (state.paper.question) {
    const paperAnswer = getPaperAnswerAtPosition(control.tap);
    if (paperAnswer === null) {
      sounds.CLICK.instance.play();
    } else {
      state.paper.question.answer = paperAnswer;
      state.guy.active = false;
      sounds.CLICK2.instance.play();
    }
    return;
  }
  closePaper();
};

const handleTapOnTerrain = () => {
  const tilePosition = getTileByPosition({ 
    x: control.tap.x + state.camera.x, 
    y: control.tap.y + state.camera.y 
  });
  if (!tilePosition) {
    return;
  }
  const tile = state.terrain[tilePosition.x][tilePosition.y];
  if (!tile.discovered) {
    return;
  }
  if (tilePosition.x === state.guy.tile.x && tilePosition.y === state.guy.tile.y) {
    return;
  }
  if (
    tilePosition.x < 1 || tilePosition.x >= state.terrain.length - 1 ||
    tilePosition.y < 1 || tilePosition.y >= state.terrain[0].length - 1
  ) {
    return;
  }

  console.log(state, tile);
  sounds.CLICK2.instance.play();
       
  if (state.guy.route.length &&
    (tilePosition.x === state.guy.route[state.guy.route.length - 1].x) &&
    (tilePosition.y === state.guy.route[state.guy.route.length - 1].y)) {
    state.guy.active = true;
  } else {
    state.guy.route = findRoute(tilePosition);
  }
};

const handleInventoryTap = () => {
  if (!isPositionInInterface(control.tap, interfaceTypes.INVENTORY)) {
    workbench.selectedItem = null;
  }

  const item = findItemAtPosition(control.tap);
  if (!workbench.selectedItem && item) {
    workbench.selectedItem = item;
  } else if (control.touch.released) {
    if (item && item !== workbench.selectedItem) {
      combineItems([item, workbench.selectedItem]);
    }
    workbench.selectedItem = null;
  }
};

const executeTap = () => {
  if (state.paper) {
    handlePaperTap();
    return;
  }

  if (
    state.guy.active && 
    getButtonAtPosition(control.tap)?.sprite !== spriteTypes.BUTTON_STOPPING
  ) {
    return;
  }

  handleButtonTaps(control.tap);

  handleInventoryTap(control.tap);

  if (!isPositionInInterface(control.tap, interfaceTypes.STATUS_BAR) && 
    !isPositionInInterface(control.tap, interfaceTypes.PANEL)) {
      handleTapOnTerrain();
  }
};

const handleTap = () => {
  if (!control.tap) {
    return;
  }
  executeTap();
  control.tap = null;
};

export default handleTap;