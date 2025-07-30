chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "protectText",
    title: "Protect selected text from AI",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "protectText" && tab.id) {
    chrome.tabs.sendMessage(tab.id, { action: "protect" });
  }
});
