
export default class Node {
  object: chrome.bookmarks.BookmarkTreeNode | undefined
  domain: string | undefined;
  isFolder: boolean;

  constructor(item: chrome.bookmarks.BookmarkTreeNode) {
    this.domain = item.url?.substring(0, 4); // todo correct this
    this.isFolder = !!!(item.url)

  }

  public open(): void {
    this.object && window.open(this.object.url)
  }

  public openPrivate(): void {
    // this.object && chrome.tabs.create({ url: this.object.url, incognito: true })
  }

  // todo lazy get path
  public async getPath(): Promise<void> {

  }

}
