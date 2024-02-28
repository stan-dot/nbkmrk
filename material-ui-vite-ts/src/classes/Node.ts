
export default class Node {
  object: chrome.bookmarks.BookmarkTreeNode | undefined

  constructor(item: chrome.bookmarks.BookmarkTreeNode) {


  }

  public open(): void {
    this.object && window.open(this.object.url)
  }

  public openPrivate(): void {
    // this.object && chrome.tabs.create({ url: this.object.url, incognito: true })
  }
}