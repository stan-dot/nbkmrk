import React, { createContext, useContext, useState } from 'react';
import { useAppStateContext } from './StateProvider';
import Node from './classes/Node';

type BookmarksContextType = {
  addBookmark: (args: chrome.bookmarks.BookmarkCreateArg) => Promise<unknown>;
  deleteBookmark: (id: string, resolve: () => void) => Promise<unknown>;
  bookmarks: Node[]
  searchBookmarks: (searchString: string, resolve: (a: any[]) => void) => void
}
const dev: boolean = import.meta.env.DEV;
// Define the context

const t: BookmarksContextType = {
  addBookmark: function (args: chrome.bookmarks.BookmarkCreateArg): Promise<unknown> {
    window.alert('function now implemented');
    throw new Error('Function not implemented.');
  },
  deleteBookmark: function (id: string): Promise<unknown> {
    throw new Error('Function not implemented.');
  },
  bookmarks: [],
  searchBookmarks: (searchString: string) => {
    throw Error('not implemented for the default object')
  }
};

const BookmarksContext = createContext<BookmarksContextType>(t);
export const useBookmarksContext = () => useContext(BookmarksContext);

// Provider component
export const BookmarksProvider = ({ children }: { children: React.ReactNode }) => {

  const [{ path }, dispatch] = useAppStateContext();
  const [bookmarks, setBookmarks] = useState<Node[]>([]); // State to hold the list of bookmarks

  const searchBookmarks = async (searchString: string, resolve: (a: any[]) => void) => {
    const r = await chrome.bookmarks.search(searchString);
    resolve(r)
  };

  const addBookmark = async (args: chrome.bookmarks.BookmarkCreateArg) => {
    window.alert('adding new bookmark')
    const b = await chrome.bookmarks.create(args);
    const n = new Node(b);
    dispatch({ type: 'REFRESH_LIST', payload: null })
    // todo not sure this is right
  };

  const deleteBookmark = async (id: string, callback: () => void) => {
    await chrome.bookmarks.remove(id);
    // return new Promise((resolve, reject) => {
    //   chrome.bookmarks.remove(id, () => {
    //     if (chrome.runtime.lastError) {
    //       reject(chrome.runtime.lastError);
    //     } else {
    //       resolve(() => callback());
    //     }
    //   });
    // });
  };

  const value = { addBookmark, deleteBookmark, bookmarks, searchBookmarks };

  return <BookmarksContext.Provider value={value}>{children}</BookmarksContext.Provider>;
};
