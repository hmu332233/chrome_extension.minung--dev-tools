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

const setSelectionUnderCursor = () => {
  const editor = getActiveEditor();
  if (editor) {
    const A1 = editor.getCursor().line;
    const A2 = editor.getCursor().ch;

    const B1 = editor.findWordAt({line: A1, ch: A2}).anchor.ch;
    const B2 = editor.findWordAt({line: A1, ch: A2}).head.ch;

    return editor.setSelection({line: A1,ch: B1}, {line: A1,ch: B2});
  }
}

const indexOfAll = (str, word) => {
  if (!str || !word) return [];
  const regex = new RegExp(word,"gi");
  const indices = [];
  let result;
  while ((result = regex.exec(str))) {
    indices.push(result.index);
  }
  return indices;
}

const setSelectionsByStringAndWord = (str, word) => {
  const editor = getActiveEditor();

  const baseLine = editor.getCursor().line;
  const baseIndex = editor.getCursor().ch;

  const lines = str.split('\n');
  const strHeight = lines.length - 1;

  let selections = [];
  lines.forEach((line, lineIndex) => {
    const selectionIndexes = indexOfAll(line, word);
    const lineSelection = selectionIndexes.map(selectionIndex => {
      return {
        anchor: { line: baseLine + lineIndex - strHeight, ch: selectionIndex },
        head: { line: baseLine + lineIndex - strHeight, ch:  selectionIndex + 2 }
      }
    });

    selections = [...selections, ...lineSelection];
  });

  editor.setSelections(selections)
}

window.addEventListener('replaceWordUnderCursor', event => {
  setSelectionUnderCursor();
  changeSelectedTextInEditor(event.detail.value);
  setSelectionsByStringAndWord(event.detail.value, /\$0/);
}, false);

window.addEventListener('replaceSelection', event => {
  changeSelectedTextInEditor(event.detail.value);
}, false);

window.addEventListener('getWordUnderCursor', event => {
  const word = getWordUnderCursor();
  window.postMessage({ action: 'getWordUnderCursor', value: word }, '*');
}, false);