chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
      // Check if the request matches a blocked site
      chrome.storage.sync.get(["sitelist"], function (data) {
        const blockedSites = data.sitelist || [];
        const url = new URL(details.url);
        const hostname = url.hostname.toLowerCase();
        if (blockedSites.includes(hostname)) {
          return { cancel: true };
        }
      });
    },
    { urls: ["<all_urls>"] },
    ["blocking"]
  );
  