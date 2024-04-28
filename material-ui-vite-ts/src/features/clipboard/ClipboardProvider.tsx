import React, { createContext, useState, useContext } from 'react';
import Node from '../../classes/Node';

type ClipboardProviderType = {
  clipboard: Node[]
  copyToClipboard: (ns: Node[]) => void
  clearClipboard: () => void
}

const defaultClipboard: ClipboardProviderType = {
  clipboard: [],
  copyToClipboard: function (ns: Node[]): void {
    throw new Error('Function not implemented.');
  },
  clearClipboard: function (): void {
    throw new Error('Function not implemented.');
  }
};

// Create the context
const ClipboardContext = createContext(defaultClipboard);

// Custom hook for using the clipboard context
export const useClipboard = () => useContext(ClipboardContext);

// Provider component
export const ClipboardProvider = ({ children }: { children: React.ReactElement }) => {
  const [clipboard, setClipboard] = useState<Node[]>([]);

  const copyToClipboard = (ns: Node[]) => {
    setClipboard(ns);
    console.log('Bookmark copied to clipboard:', ns);
  };

  const clearClipboard = () => {
    setClipboard([]);
    console.log('Clipboard cleared');
  };

  return (
    <ClipboardContext.Provider value={{ clipboard, copyToClipboard, clearClipboard }}>
      {children}
    </ClipboardContext.Provider>
  );
};
