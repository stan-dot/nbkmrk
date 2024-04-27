import React, { createContext, useContext, useEffect, useReducer } from 'react'
import Node from './classes/Node';

interface AppState {
  // pathLastName: string;
  path: string;
  bookmarkTree: Node[];
  bookmarksDisplay: Node[];
  searchParams: URLSearchParams;
}

type AppAction =
  | { type: 'SET_PATH'; payload: string }
  | { type: "REFRESH_LIST"; payload: null }
  | { type: 'SET_BOOKMARK_TREE'; payload: Node[] }
  | { type: 'SET_BOOKMARKS_DISPLAY'; payload: Node[] }
  | { type: 'SET_SEARCH_PARAMS'; payload: URLSearchParams };

const initialState: AppState = {
  // pathLastName: window.location.pathname,
  path: window.location.pathname,
  bookmarkTree: [],  // Assuming an object, adjust based on actual data structure
  bookmarksDisplay: [],
  searchParams: new URLSearchParams(window.location.search),
};


// Function to fetch bookmarks
async function fetchBookmarks(dispatch: React.Dispatch<AppAction>): Promise<void> {
  console.log('fetching new bookmarks');
  chrome.bookmarks.getTree((result: chrome.bookmarks.BookmarkTreeNode[]) => {
    console.log('got a result', result);
    const nodes = result[0]!.children!.map(r => new Node(r));
    dispatch({ type: 'SET_BOOKMARKS_DISPLAY', payload: nodes })
    dispatch({ type: "SET_BOOKMARK_TREE", payload: nodes })
  });
};

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_PATH':
      window.history.pushState({}, '', action.payload);  // Update URL without reloading
      return { ...state, path: action.payload };
    case 'SET_BOOKMARK_TREE':
      return { ...state, bookmarkTree: action.payload };
    case 'SET_BOOKMARKS_DISPLAY':
      // todo update this in sync with path change. maybe never set path change on its own
      return { ...state, bookmarksDisplay: action.payload };
    case 'SET_SEARCH_PARAMS':
      window.history.pushState({}, '', `?${action.payload.toString()}`);
      return { ...state, searchParams: action.payload };
    default:
      throw new Error('Unhandled action type');
  }
}
const AppStateContext = createContext<[AppState, React.Dispatch<AppAction>]>(undefined!);

interface AppStateProviderProps {
  children: React.ReactNode;
}

export const AppStateProvider: React.FC<AppStateProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  console.log('iniital or later state: ', state)

  useEffect(() => {
    console.log('starts loading bookmarks')
    fetchBookmarks(dispatch);
  }, [])


  return (
    <AppStateContext.Provider value={[state, dispatch]}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppStateContext = () => useContext(AppStateContext);
