import React from "react";
import { Sun, Moon } from "lucide-react";

export const DarkModeToggle: React.FC<{
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}> = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`
        p-2 rounded-full transition-colors duration-200
        focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500
        dark:focus-visible:ring-offset-gray-900
        ${
          darkMode
            ? "bg-gray-700 text-yellow-400 hover:bg-gray-600"
            : "bg-gray-200 text-indigo-600 hover:bg-gray-300"
        }
      `}
      title={darkMode ? "Activate light mode" : "Activate dark mode"}
      aria-label="Toggle dark mode"
    >
      {darkMode ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};