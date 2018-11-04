import { doInCurrentTab, getSelectedText, getWordUnderCursor } from "./extensionUtils.js";
import { calcRemToPx, calcPxToRem } from "./calcRem.js";
import { replaceReactSnippets } from "./replaceReactSnippets.js";

const REM_VALUE = 16;

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

const replaceSelectedFuncToFuncWithBind = () => {
  getSelectedText((value) => {
    const includesThis = /^this\./.test(value);
    
    let funcText;
    if (includesThis) {
      funcText = `${value} = ${value}.bind(this);`
    } else {
      funcText = `this.${value} = this.${value}.bind(this);`
    }

    doInCurrentTab(tab =>{ 
      chrome.tabs.sendMessage(tab.id, { action: 'replaceSelection', value: funcText });
    });
  });
}

const replaceWordUnderCursorToReactSnippets = () => {
  getWordUnderCursor((word) => {
    const snippet = replaceReactSnippets({ prefix: word });
    doInCurrentTab(tab =>{ 
      chrome.tabs.sendMessage(tab.id, { action: 'replaceSelection', value: snippet });
    });
  });
}

export {
  replaceSelectedPxToRem,
  replaceSelectedFuncToFuncWithBind,
  replaceWordUnderCursorToReactSnippets
}