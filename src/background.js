// background.js or service worker
const chrome = typeof window !== "undefined" && window.chrome ? window.chrome : undefined;

if (typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.onMessage) {
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "fetchData") {
      fetch("https://api.example.com/data")
        .then(res => res.json())
        .then(data => {
          sendResponse({ success: true, data });
        })
        .catch(error => {
          sendResponse({ success: false, error: error.message });
        });
      return true; // Keeps the channel open for async response
    }
  });
}
