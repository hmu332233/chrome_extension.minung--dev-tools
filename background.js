import { 
  replaceSelectedPxToRem,
  replaceSelectedFuncToFuncWithBind
 } from "./modules/goormModules.js";

// chrome.commands.onCommand.addListener(command => {
//   switch (command) {
//     case 'calcPxToRem':
//       replaceSelectedPxToRem();
//     break;
//     case 'addFuncToBind':
//       replaceSelectedFuncToFuncWithBind();
//     break;
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
  // Handler when the DOM is fully loaded
  const $inputDom = document.querySelector('#input');
  $inputDom.focus();
  $inputDom.addEventListener('keypress', (e) => {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
      console.log(e.target.value);
      if (e.target.value === '1') {
        replaceSelectedPxToRem();
      }  else if (e.target.value === '2') {
        addFuncToBind();
      }

      setTimeout(() => {
        // window.close();
      }, 50);
    }
  });
});