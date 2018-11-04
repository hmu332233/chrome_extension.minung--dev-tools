const getActiveEditor = () => {
  const window_manager = core.module.layout.workspace.window_manager;
  const active_workspace = window_manager.workspace[window_manager.active_window.position];
  if (active_workspace) {
    const active_window = active_workspace.window[window_manager.active_window.index];
    return active_window.editor.editor;
  }

  return null;
}

const changeSelectedTextInEditor = (value) => {
  const editor = getActiveEditor();
  if (editor) {
    editor.replaceSelection(value.toString());
  }
}

const getWordUnderCursor = () => {
  const editor = getActiveEditor();
  if (editor) {
    const A1 = editor.getCursor().line;
    const A2 = editor.getCursor().ch;

    const B1 = editor.findWordAt({line: A1, ch: A2}).anchor.ch;
    const B2 = editor.findWordAt({line: A1, ch: A2}).head.ch;

    return editor.getRange({line: A1,ch: B1}, {line: A1,ch: B2});
  }

  return null;
}

window.addEventListener('replaceSelection', event => {
  changeSelectedTextInEditor(event.detail.value);
}, false);

window.addEventListener('getWordUnderCursor', event => {
  const word = getWordUnderCursor();
  window.postMessage({ action: 'getWordUnderCursor', value: word }, '*');
}, false);