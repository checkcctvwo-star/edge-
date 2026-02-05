const PANEL_STATE_KEY = "panelOpen";

async function isPanelOpen() {
  const result = await chrome.storage.session.get(PANEL_STATE_KEY);
  return Boolean(result[PANEL_STATE_KEY]);
}

async function setPanelOpen(isOpen) {
  await chrome.storage.session.set({ [PANEL_STATE_KEY]: isOpen });
}

async function openPanel() {
  await chrome.sidePanel.setOptions({ enabled: true });
  await chrome.sidePanel.open({ windowId: chrome.windows.WINDOW_ID_CURRENT });
  await setPanelOpen(true);
}

async function closePanel() {
  await chrome.sidePanel.setOptions({ enabled: false });
  await setPanelOpen(false);
}

async function togglePanel() {
  const open = await isPanelOpen();
  if (open) {
    await closePanel();
  } else {
    await openPanel();
  }
}

chrome.runtime.onInstalled.addListener(async () => {
  await closePanel();
});

chrome.commands.onCommand.addListener(async (command) => {
  if (command === "toggle-panel") {
    await togglePanel();
  }
});

chrome.action.onClicked.addListener(async () => {
  await togglePanel();
});
