chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "protectText",
    title: "Protect selected text from AI",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "protectText" && tab?.id) {
    chrome.tabs.sendMessage(tab.id, { action: "protect" }, (response) => {
      if (chrome.runtime.lastError) {
        console.error("SendMessage failed:", chrome.runtime.lastError);
      } else {
        console.log("Response:", response);
      }
    });
  }
});

