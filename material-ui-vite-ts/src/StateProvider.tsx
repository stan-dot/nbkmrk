import React, { createContext, useContext, useReducer } from 'react'
import Node from './classes/Node';

interface AppState {
  path: string;
  bookmarkTree: Node[];
  bookmarksDisplay: Node[];
  searchParams: URLSearchParams;
}

type AppAction =
  | { type: 'SET_PATH'; payload: string }
  | { type: 'SET_BOOKMARK_TREE'; payload: Node[] }
  | { type: 'SET_BOOKMARKS_DISPLAY'; payload: Node[] }
  | { type: 'SET_SEARCH_PARAMS'; payload: URLSearchParams };

const initialState: AppState = {
  path: window.location.pathname,
  bookmarkTree: [],  // Assuming an object, adjust based on actual data structure
  bookmarksDisplay: [],
  searchParams: new URLSearchParams(window.location.search),
};

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_PATH':
      window.history.pushState({}, '', action.payload);  // Update URL without reloading
      return { ...state, path: action.payload };
    case 'SET_BOOKMARK_TREE':
      return { ...state, bookmarkTree: action.payload };
    case 'SET_BOOKMARKS_DISPLAY':
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

  return (
    <AppStateContext.Provider value={[state, dispatch]}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppStateContext = () => useContext(AppStateContext);
