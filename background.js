chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "getListItems") {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, message, sendResponse);
      });
      return true; // 応答が非同期の場合は true を返す必要があります
    }
  });