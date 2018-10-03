import { calcRemToPx, calcPxToRem } from "./modules/calcRem.js";

const REM_VALUE = 16;

chrome.commands.onCommand.addListener(function(command) {
  // alert(command);
  if (command === "calcPxToRem") {
    chrome.tabs.executeScript({
      code: "window.getSelection().toString();"
    }, selection => {
        const targetValue = selection[0];
        const calculatedRem = calcPxToRem({ targetValue, remValue: REM_VALUE });
        alert(calculatedRem);
        // document.querySelector("body").innerText = `${calculatedRem}rem // ${targetValue}px`;
      }
    );
  }
});
