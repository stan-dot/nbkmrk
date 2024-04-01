import React, { createContext, useContext, useState, useEffect } from 'react';

type BookmarksContextType = {
  addBookmark: (args: chrome.bookmarks.BookmarkCreateArg) => Promise<unknown>;
  deleteBookmark: (id: string) => Promise<unknown>;
}
const dev: boolean = import.meta.env.DEV;
// Define the context

const t: BookmarksContextType = {
  addBookmark: function (args: chrome.bookmarks.BookmarkCreateArg): Promise<unknown> {
    throw new Error('Function not implemented.');
  },
  deleteBookmark: function (id: string): Promise<unknown> {
    throw new Error('Function not implemented.');
  }
};

const BookmarksContext = createContext<BookmarksContextType>(t);


// Custom hook to use the bookmarks context
export const useBookmarksContext = () => useContext(BookmarksContext);

// Provider component
export const BookmarksProvider = ({ children }: { children: React.ReactNode }) => {
  const [db, setDb] = useState<IDBDatabase | null>(null);

  const [bookmarks, setBookmarks] = useState([]); // State to hold the list of bookmarks

  // Function to fetch bookmarks
  const fetchBookmarks = async () => {
    if (import.meta.env.DEV && db) {
      const transaction = db.transaction('bookmarks', 'readonly');
      const store = transaction.objectStore('bookmarks');
      const request = store.getAll();

      request.onsuccess = () => {
        setBookmarks(request.result);
      };
      request.onerror = (event) => {
        console.error('Failed to fetch bookmarks:', event.target.error);
      };
    } else {
      chrome.bookmarks.getTree((result) => {
        setBookmarks(result);
      });
    }
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
        setDb(event.target.result);
        fetchBookmarks(); // Fetch bookmarks once the DB is successfully opened

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

        request.onsuccess = () => resolve(request.result);
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

  const deleteBookmark = async (id: string) => {
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

  const value = { addBookmark, deleteBookmark, fetchBookmarks };

  return <BookmarksContext.Provider value={value}>{children}</BookmarksContext.Provider>;
};
