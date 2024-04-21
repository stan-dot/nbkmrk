
import React, { createContext, useContext, useState, useEffect } from 'react';

type ClipboardContextType = {}

// Define the context
const dev: boolean = import.meta.env.DEV;

const t: ClipboardContextType = {};

const ClipboardContext = createContext<ClipboardContextType>(t);

// Custom hook to use the bookmarks context
export const useClipboardContext = () => useContext(ClipboardContext);

function ClipboardProvider() {
  return (
    <div>ClipboardProvider</div>
  )
}

export default ClipboardProvider