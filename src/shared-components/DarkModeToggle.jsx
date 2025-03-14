"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Sync with localStorage or system preference
    const savedMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
  };

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? (
        <SunIcon className="w-5 h-5 text-primary-900" />
      ) : (
        <MoonIcon className="w-5 h-5 text-primary-900" />
      )}
    </button>
  );
};

export default DarkModeToggle;
