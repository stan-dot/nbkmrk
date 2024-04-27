import { MockBookmarkTreeNode } from "./mockdata";

export default class Node {
  object: chrome.bookmarks.BookmarkTreeNode | MockBookmarkTreeNode
  domain: string | undefined;
  isFolder: boolean;

  constructor(item: chrome.bookmarks.BookmarkTreeNode) {
    this.object = {
      title: item.title,
      id: item.id,
      url: item.url
    };
    if (item.url) {
      const urlObj = new URL(item.url);
      this.domain = urlObj.hostname;
      this.isFolder = false;
    } else {
      this.domain = undefined;
      this.isFolder = true;
    }

  }

  public open(): void {
    if (this.object && this.object.url) {
      // window.open(this.object.url)
      chrome.tabs.create({ url: this.object.url })
    }
  }

  public openPrivate(): void {
    if (this.object && this.object.url) {
      chrome.windows.create({ url: this.object.url, incognito: false })
    }
    // this.object && chrome.tabs.create({ url: this.object.url, incognito: true })
  }

  // todo lazy get path
  public async getPath(): Promise<void> {

  }

  public async removeTracingLink(): Promise<number> {
    return 0;
  }

  public serialize(): string {
    return JSON.stringify(self);
  }


  public async getChildren(): Promise<chrome.bookmarks.BookmarkTreeNode[]> {
    return await chrome.bookmarks.getChildren(this.object.id);
  }
}

