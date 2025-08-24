import React from "react";
import { Home, Mail } from "lucide-react";
import { Button } from "./UI";

type TabKey = "home" | "contact";

export const Nav: React.FC<{
  active: TabKey;
  onChange: (t: TabKey) => void;
  children?: React.ReactNode;
  darkMode?: boolean;
}> = ({ active, onChange, children, darkMode }) => (
  <div className="flex items-center justify-between w-full">
    <div className="flex items-center gap-3">
      <span className={`text-xl font-bold ${darkMode ? "text-green-100" : "text-green-900"}`}>Wizedflow</span>
    </div>
    <div className="flex items-center gap-4">
      <button
        className={`px-3 py-1 rounded ${active === "home"
          ? darkMode ? "bg-green-700 text-green-100" : "bg-green-200 text-green-900"
          : darkMode ? "bg-transparent text-green-100 hover:bg-green-800" : "bg-transparent text-green-900 hover:bg-green-100"
        }`}
        onClick={() => onChange("home")}
      >Home</button>
      <button
        className={`px-3 py-1 rounded ${active === "contact"
          ? darkMode ? "bg-green-700 text-green-100" : "bg-green-200 text-green-900"
          : darkMode ? "bg-transparent text-green-100 hover:bg-green-800" : "bg-transparent text-green-900 hover:bg-green-100"
        }`}
        onClick={() => onChange("contact")}
      >Contact Us</button>
      {children}
    </div>
  </div>
);
