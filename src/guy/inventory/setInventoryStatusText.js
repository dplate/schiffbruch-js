import setStatusText from '../../interface/text/setStatusText.js';
import texts from '../../interface/text/texts.js';
import itemTextIds from './itemTextIds.js';
import workbench from './workbench.js';

const setInventoryStatusText = (hoverItem = null) => {
  if (workbench.selectedItem) {
    const selectedItemText = texts['WORKBENCH_SELECTED'].replace(
      '{item1}', 
      texts[itemTextIds[workbench.selectedItem]]
    ).replace(
      '{item2}', 
      (hoverItem && hoverItem !== workbench.selectedItem) ? texts[itemTextIds[hoverItem]] : '?'
    );
    setStatusText(selectedItemText);
    return;
  }
  
  if (hoverItem) {
    setStatusText(texts[itemTextIds[hoverItem]]);
    return;
  }
};

export default setInventoryStatusText;