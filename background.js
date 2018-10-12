import { replaceSelectedPxToRem } from "./modules/goormModules.js";

const REM_VALUE = 16;

chrome.commands.onCommand.addListener(command => {
  switch (command) {
    case 'calcPxToRem':
      replaceSelectedPxToRem();
    break;
  }
});