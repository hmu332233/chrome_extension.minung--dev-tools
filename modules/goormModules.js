import { doInCurrentTab, getSelectedText } from "./extensionUtils.js";
import { calcRemToPx, calcPxToRem } from "./calcRem.js";

const replaceSelectedPxToRem = () => {
  getSelectedText((value) => {
    const targetValue = parseInt(value);
    const calculatedRem = calcPxToRem({ targetValue, remValue: REM_VALUE });
    
    const remText = `${calculatedRem}rem; // ${targetValue}px`;
    doInCurrentTab(tab =>{ 
      chrome.tabs.sendMessage(tab.id, { action: 'replaceSelection', value: remText });
    });
  });
};

export {
  replaceSelectedPxToRem
}