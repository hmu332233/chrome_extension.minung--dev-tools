// Append your pageScript.js to "real" webpage. So will it can full access to webpate.
var s = document.createElement('script');
s.src = chrome.extension.getURL('pagescript.js');
(document.head || document.documentElement).appendChild(s);
// Our pageScript.js only add listener to window object, 
// so we don't need it after it finish its job. But depend your case, 
// you may want to keep it.
s.parentNode.removeChild(s);


chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {

  switch (message.action) {
    case 'replaceSelection':
      let event = new CustomEvent('replaceSelection', { detail: { value: message.value }});
      window.dispatchEvent(event);
    break;
  }
});