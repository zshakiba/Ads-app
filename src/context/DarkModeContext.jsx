"use client";
import { useState, useEffect, useContext, createContext } from "react";

export function useLocalStorageState(key, initialState) {
  const [value, setValue] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        const storedValue = localStorage.getItem(key);
        // If the key exists and the stored value is valid JSON, parse it
        if (storedValue !== null && storedValue !== "undefined") {
          return JSON.parse(storedValue);
        }
      } catch (error) {
        console.error("Error parsing localStorage value:", error);
      }
    }
    // If no valid value is found, return the initial state
    return initialState;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [value, key]);

  return [value, setValue];
}

// Your DarkModeProvider component
const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    "isDarkMode",
    () => typeof window !== 'undefined' && window.matchMedia("(prefers-color-scheme: dark)").matches || false
  );

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (isDarkMode) {
        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.remove("light-mode");
      } else {
        document.documentElement.classList.add("light-mode");
        document.documentElement.classList.remove("dark-mode");
      }
    }
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  
  if (context === undefined)
    throw new Error("DarkModeContext was used outside of DarkModeProvider");

  return context;
}
