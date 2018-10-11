import { doInCurrentTab, getSelectedText } from "./modules/extensionUtils.js";
import { calcRemToPx, calcPxToRem } from "./modules/calcRem.js";

const REM_VALUE = 16;

chrome.commands.onCommand.addListener(command => {
  if (command === "calcPxToRem") {
    getSelectedText((value) => {
      const targetValue = parseInt(value);
      const calculatedRem = calcPxToRem({ targetValue, remValue: REM_VALUE });
      
      const remText = `${calculatedRem}rem; // ${targetValue}px`;
      doInCurrentTab(tab =>{ 
        chrome.tabs.sendMessage(tab.id, { action: 'replaceSelection', value: remText });
      });
    });
  }
});