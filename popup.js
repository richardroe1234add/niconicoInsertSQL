document.addEventListener('DOMContentLoaded', () => {
    // アクティブなタブにメッセージを送信してデータを取得
    chrome.runtime.sendMessage({ action: "getListItems" }, (response) => {
      const listContainer = document.getElementById('list-container');
      if (response && response.data.length > 0) {
        response.data.forEach(item => {
          const li = document.createElement('li');
          li.innerText = item;
          listContainer.appendChild(li);
        });
      } else {
        listContainer.innerText = "No list items found or failed to get data.";
      }
    });
  });