import { Provider } from "../features/privacy/types";
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

  // native bookmarks use one level
  public async open(): Promise<void> {
    if (this.object && this.object.url) {
      // window.open(this.object.url)
      chrome.tabs.create({ url: this.object.url })
    } else if (this.isFolder) {
      const c = await this.getChildren();
      const ns = c.map(b => new Node(b))
      ns.map(b => b.open())
    }
  }

  public async openPrivate(): Promise<void> {
    if (!this.isFolder && this.object && this.object.url) {
      chrome.windows.create({ url: this.object.url, incognito: true })
    }
    if (this.isFolder) {
      const c = await this.getChildren();
      const ns = c.map(b => new Node(b))
      ns.map(b => b.openPrivate())
    }
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

  // Function to process each URL in the bookmarks
  public async clean(bookmarks: chrome.bookmarks.BookmarkTreeNode[], config: Provider): Promise<void> {
    const urlRegex = new RegExp(config.urlPattern);
    const exceptionRegexes = config.exceptions.map(pattern => new RegExp(pattern));

    // Check for exceptions
    if (this.object.url && !exceptionRegexes.some(regex => regex.test(this.object.url!))) {
      const u = this.object.url;
      // Apply rules
      console.log(`Processing URL: ${u}`);
      config.rules.forEach(rule => {
        const ruleRegex = new RegExp(rule);
        if (ruleRegex.test(u)) {
          console.log(`Rule ${rule} matches for ${u}`);
          this.object.url = u.replace(ruleRegex, '');
        }
      });
    }
  }

}
