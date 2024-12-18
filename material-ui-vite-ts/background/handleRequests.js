chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    const url = new URL(details.url);
    const path = url.pathname;
    return {
      redirectUrl: `chrome-extension://kkheodblffhogppkdpjiegjniecpfnjo/index.html#${path}`
    };
  },
  { urls: ["chrome-extension://kkheodblffhogppkdpjiegjniecpfnjo/*"] },
  ["blocking"]
);
