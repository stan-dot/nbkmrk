import React, { createContext, useContext, useState, useEffect } from 'react';
import Node from './classes/Node';

type BookmarksContextType = {
  addBookmark: (args: chrome.bookmarks.BookmarkCreateArg) => Promise<unknown>;
  deleteBookmark: (id: string, resolve: () => void) => Promise<unknown>;
  fetchBookmarks: () => Promise<void>
  bookmarks: Node[]
  searchBookmarks: (searchString: string, resolve: (a: any[]) => void) => void
}
const dev: boolean = import.meta.env.DEV;
// Define the context

const t: BookmarksContextType = {
  addBookmark: function (args: chrome.bookmarks.BookmarkCreateArg): Promise<unknown> {
    throw new Error('Function not implemented.');
  },
  deleteBookmark: function (id: string): Promise<unknown> {
    throw new Error('Function not implemented.');
  },
  bookmarks: [],
  fetchBookmarks: () => {
    throw Error('function not defined')
  },
  searchBookmarks: (searchString: string) => {
    throw Error('not implemented for the default object')
  }
};

const BookmarksContext = createContext<BookmarksContextType>(t);
export const useBookmarksContext = () => useContext(BookmarksContext);

// Provider component
export const BookmarksProvider = ({ children }: { children: React.ReactNode }) => {

  const [bookmarks, setBookmarks] = useState<Node[]>([]); // State to hold the list of bookmarks

  // Function to fetch bookmarks
  const fetchBookmarks = async (newDb?: IDBDatabase) => {
    chrome.bookmarks.getTree((result: chrome.bookmarks.BookmarkTreeNode[]) => {
      const nodes = result.map(r => {
        const n = new Node(r);
        return n
      });
      setBookmarks(nodes);
    });
  };

  const searchBookmarks = async (searchString: string, resolve: (a: any[]) => void) => {
    const r = await chrome.bookmarks.search(searchString);
    resolve(r)
  };

  const addBookmark = async (args: chrome.bookmarks.BookmarkCreateArg) => {
    // chrome.bookmarks for production
    return new Promise((resolve, reject) => {
      chrome.bookmarks.create(args, (result) => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          resolve(result);
        }
      });
    });
  };

  const deleteBookmark = async (id: string, callback: () => void) => {
    return new Promise((resolve, reject) => {
      chrome.bookmarks.remove(id, () => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          resolve(() => callback());
        }
      });
    });
  };

  const value = { addBookmark, deleteBookmark, fetchBookmarks, bookmarks, searchBookmarks };

  return <BookmarksContext.Provider value={value}>{children}</BookmarksContext.Provider>;
};
