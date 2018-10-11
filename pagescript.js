const changeSelectedTextInEditor = (value) => {
  const window_manager = core.module.layout.workspace.window_manager;
  const active_workspace = window_manager.workspace[window_manager.active_window.position];
   if (active_workspace) {
    const active_window = active_workspace.window[window_manager.active_window.index];
    active_window.editor.editor.replaceSelection(value.toString());
  }
}

window.addEventListener('replaceSelection', event => {
  changeSelectedTextInEditor(event.detail.value);
}, false);