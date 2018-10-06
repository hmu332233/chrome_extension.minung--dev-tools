import { calcRemToPx, calcPxToRem } from "./modules/calcRem.js";

const REM_VALUE = 16;

const doInCurrentTab = (tabCallback) => {
  chrome.tabs.query(
    { currentWindow: true, active: true },
    (tabArray) => { tabCallback(tabArray[0]); }
  );
}

chrome.commands.onCommand.addListener(command => {
  if (command === "calcPxToRem") {
    chrome.tabs.executeScript({
      code: "window.getSelection().toString();"
    }, selection => {
        const targetValue = parseInt(selection[0]);
        const calculatedRem = calcPxToRem({ targetValue, remValue: REM_VALUE });
        
        const remText = `${calculatedRem}rem; // ${targetValue}px`;
        doInCurrentTab(tab =>{ 
          chrome.tabs.sendMessage(tab.id, { action: 'calcPxToRem', value: remText });
        });
      }
    );
  }
});