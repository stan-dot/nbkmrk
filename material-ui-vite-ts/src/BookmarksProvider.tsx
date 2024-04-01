import React, { createContext, useContext, useState, useEffect } from 'react';
import Node from './classes/Node';

type BookmarksContextType = {
  addBookmark: (args: chrome.bookmarks.BookmarkCreateArg) => Promise<unknown>;
  deleteBookmark: (id: string, resolve: () => {}) => Promise<unknown>;
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
  const [db, setDb] = useState<IDBDatabase | null>(null);

  const [bookmarks, setBookmarks] = useState<Node[]>([]); // State to hold the list of bookmarks

  // Function to fetch bookmarks
  const fetchBookmarks = async (newDb?: IDBDatabase) => {
    if (dev) {
      const d = newDb ?? db ?? undefined;
      if (d) {
        const transaction = d.transaction('bookmarks', 'readonly');
        const store = transaction.objectStore('bookmarks');
        const request = store.getAll();

        request.onsuccess = () => {
          setBookmarks(request.result);
        };
        request.onerror = (event) => {
          console.error('Failed to fetch bookmarks:', event.target.error);
        };
      } else {
        throw Error('neither deployment nor database env')
      }
    } else {
      chrome.bookmarks.getTree((result: chrome.bookmarks.BookmarkTreeNode[]) => {
        const nodes = result.map(r => {
          const n = new Node(r);
          return n
        });
        setBookmarks(nodes);
      });
    }
  };

  const searchBookmarks = async (searchString: string, resolve: (a: any[]) => void) => {
    if (!db) {
      throw Error('databse must be defined');
    }
    return new Promise((resolve, reject) => {
      const transaction = db.transaction('bookmarks', 'readonly');
      const store = transaction.objectStore('bookmarks');
      const request: IDBRequest = store.openCursor(); // Open a cursor to iterate over all items
      const searchResults: any[] = [];

      request.onsuccess = (event) => {
        const cursor = event.target.result;
        if (cursor) {
          const { title, type, url } = cursor.value;
          if (type === 'bookmark' && title.toLowerCase().includes(searchString.toLowerCase())) {
            // If the item is a bookmark and the title matches the search string, add it to the results
            searchResults.push(cursor.value);
          }
          cursor.continue(); // Move to the next object in the store
        } else {
          // No more entries, resolve the promise with the search results
          resolve(searchResults);
        }
      };

      request.onerror = () => reject(request.error);
    });
  };
  // Open IndexedDB connection in development
  useEffect(() => {
    if (!dev) return; // Skip if not in development mode

    const openDB = async () => {
      const request = window.indexedDB.open('BookmarksDB', 1);

      request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
        if (event && event.target && event.target.result) {
          const db = event.target.result;
          db.createObjectStore('bookmarks', { keyPath: 'id', autoIncrement: true });
        }
      };

      request.onsuccess = (event) => {
        const d: IDBDatabase = event.target.result;
        setDb(d);
        fetchBookmarks(d); // Fetch bookmarks once the DB is successfully opened
      };

      request.onerror = (event) => {
        console.error('IndexedDB error:', event.target.error);
      };
    };

    openDB();
  }, []);

  const addBookmark = async (args: chrome.bookmarks.BookmarkCreateArg) => {
    if (dev && db) {
      // IndexedDB for development
      return new Promise((resolve, reject) => {
        const transaction = db.transaction('bookmarks', 'readwrite');
        const store = transaction.objectStore('bookmarks');
        const request = store.add(args, args.url);

        request.onsuccess = () => {
          resolve(request.result);
          fetchBookmarks();
        }
        request.onerror = () => reject(request.error);
      });
    } else {
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
    }
  };

  const deleteBookmark = async (id: string, resolve: () => {}) => {
    if (import.meta.env.DEV && db) {
      // IndexedDB for development
      return new Promise((resolve, reject) => {
        const transaction = db.transaction('bookmarks', 'readwrite');
        const store = transaction.objectStore('bookmarks');
        const request = store.delete(id);

        request.onsuccess = () => resolve();
        request.onerror = () => reject(request.error);
      });
    } else {
      // chrome.bookmarks for production

      return new Promise((resolve, reject) => {
        chrome.bookmarks.remove(id, () => {
          if (chrome.runtime.lastError) {
            reject(chrome.runtime.lastError);
          } else {
            resolve();
          }
        });
      });
    }
  };

  const value = { addBookmark, deleteBookmark, fetchBookmarks, bookmarks, searchBookmarks };

  return <BookmarksContext.Provider value={value}>{children}</BookmarksContext.Provider>;
};
