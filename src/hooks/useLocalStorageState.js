"use client"; // Ensures this code runs only on the client side
import { useState, useEffect } from "react";

export function useLocalStorageState(key, initialState) {
  const [value, setValue] = useState(initialState);

  // Initialize state from localStorage (client-side only)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem(key);
      if (storedValue !== null && storedValue !== "undefined") {
        try {
          setValue(JSON.parse(storedValue));
        } catch (error) {
          console.error("Error parsing stored value:", error);
          setValue(initialState);
        }
      }
    }
  }, [key, initialState]);

  // Update localStorage when value changes (client-side only)
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
}
