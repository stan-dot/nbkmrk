
import { Provider } from "./types";
import { providersDictionary } from "./values";

// Function to process and clean URLs in the bookmarks
export function processAndCleanBookmarks(bookmarks: chrome.bookmarks.BookmarkTreeNode[], provider: Provider): void {
  window.alert('not implrmented');
  // providersDictionary.forEach(p => {
  //   doGivenProvider(p, bookmarks);
  // })
}

function doGivenProvider(provider: Provider, bookmarks: chrome.bookmarks.BookmarkTreeNode[]) {
  const urlRegex = new RegExp(provider.urlPattern);
  const exceptionRegexes = provider.exceptions.map(pattern => new RegExp(pattern));

  bookmarks.forEach(bookmark => {
    if (bookmark.url && urlRegex.test(bookmark.url)) {
      // Check for exceptions
      if (!exceptionRegexes.some(regex => bookmark.url && regex.test(bookmark.url))) {
        console.log(`Original URL: ${bookmark.url}`);
        let cleanedUrl = bookmark.url;

        // Apply rules and remove matched parts
        provider.rules.forEach(rule => {
          const ruleRegex = new RegExp(rule, 'g'); // Use global flag to replace all occurrences
          cleanedUrl = cleanedUrl.replace(ruleRegex, '');
        });

        console.log(`Cleaned URL: ${cleanedUrl}`);
      }
    }
  });
}

