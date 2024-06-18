chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "getListItems") {
      const targetUl = document.querySelector('ul.d_flex.flex-wrap_wrap.justify_center.gap_16px');
      if (targetUl) {
        const listItems = Array.from(targetUl.querySelectorAll('li')).map(li => li.innerText);
        sendResponse({ data: listItems });
      } else {
        sendResponse({ data: [] });
      }
    }
    return true; // 応答が非同期の場合は true を返す必要があります
  });