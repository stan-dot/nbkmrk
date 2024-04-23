import { GridRowsProp } from "@mui/x-data-grid";
import { MockBookmarkTreeNode } from "./mockdata";
import { idID } from "@mui/material/locale";


export type MainTableRow = {
  id: number;
  url: string;
  title: string;
};

export default class Node {
  object: chrome.bookmarks.BookmarkTreeNode | MockBookmarkTreeNode
  domain: string | undefined;
  isFolder: boolean;

  constructor(item: chrome.bookmarks.BookmarkTreeNode) {
    const o: MockBookmarkTreeNode = {
      title: item.title,
      id: item.id
    };
    this.object = o;
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

  public intoRow(): MainTableRow {
    // todo change this
    return { id: parseInt(this.object.id), url: this.object.url ?? "", title: this.object.title }
  }

  public async getChildren(): Promise<chrome.bookmarks.BookmarkTreeNode[]> {
    return await chrome.bookmarks.getChildren(this.object.id);
  }
}

