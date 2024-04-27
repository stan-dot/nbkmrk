import React, { createContext, useContext, useEffect, useReducer } from 'react'
import Node from './classes/Node';
import { MockBookmarkTreeNode } from './classes/mockdata';

interface AppState {
  // pathLastName: string;
  path: Node[];
  bookmarkTree: Node[];
  bookmarksDisplay: Node[];
  searchParams: URLSearchParams;
}

type AppAction =
  { type: 'NAVIGATE'; payload: Node }
  | { type: 'SET_PATH'; payload: Node }
  | { type: "REFRESH_LIST"; payload: null }
  | { type: 'SET_BOOKMARK_TREE'; payload: Node[] }
  | { type: 'SET_BOOKMARKS_DISPLAY'; payload: Node[] }
  | { type: 'RESET_SEARCH'; payload: undefined }
  | { type: 'SET_SEARCH_PARAMS'; payload: URLSearchParams };


const initialState: AppState = {
  // pathLastName: window.location.pathname,
  path: [],
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


export async function displayNewChildren(node: Node, dispatch: React.Dispatch<AppAction>): Promise<void> {
  const c = await node.getChildren();
  const childNodes: Node[] = c.map(c => new Node(c));
  dispatch({ type: 'SET_BOOKMARKS_DISPLAY', payload: childNodes })
}


export async function getDisplayBasedOnSearch(searchParams: URLSearchParams, dispatch: React.Dispatch<AppAction>) {
  const title: string | null = searchParams.get('title');
  // const url: string | null = searchParams.get('url')
  if (title) {
    const bs: MockBookmarkTreeNode[] = await chrome.bookmarks.search(title);
    const ns = bs.map(b => new Node(b))
    dispatch({ type: 'SET_BOOKMARKS_DISPLAY', payload: ns })
  }
}

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'NAVIGATE':
      let n1: Node = action.payload;
      // displayNewChildren(n1, dispatch)
      window.history.pushState({}, '', action.payload.object.title);  // Update URL without reloading
      return { ...state, path: [n1] }
    case 'SET_PATH':
      let n2 = action.payload
      // todo here get the full tree
      window.history.pushState({}, '', action.payload.object.title);  // Update URL without reloading
      return { ...state, path: [n2] }
    case 'SET_BOOKMARK_TREE':
      return { ...state, bookmarkTree: action.payload };
    case 'SET_BOOKMARKS_DISPLAY':
      // todo update this in sync with path change. maybe never let path change on its own
      return { ...state, bookmarksDisplay: action.payload };
    case 'REFRESH_LIST':
      return { ...state, searchParams: new URLSearchParams() }
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
