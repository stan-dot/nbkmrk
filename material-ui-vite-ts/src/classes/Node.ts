import { GridRowsProp } from "@mui/x-data-grid";
import { MockBookmarkTreeNode } from "./mockdata";


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
      title: "",
      id: ""
    };
    this.object = o;
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
}

