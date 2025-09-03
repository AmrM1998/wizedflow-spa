import React from "react";
import { Home, Mail } from "lucide-react";
import { Button } from "./UI";
import logo from "../images/wizedflow_icon_transparent.png";

type TabKey = "home" | "contact";

export const Nav: React.FC<{
  active: TabKey;
  onChange: (t: TabKey) => void;
  children?: React.ReactNode;
  darkMode?: boolean;
}> = ({ active, onChange, children, darkMode }) => (
  <div className="flex items-center justify-between w-full">
    <button className="flex items-center gap-1" onClick={() => onChange("home")}>
      <img src={logo} alt="Wizedflow logo" className="h-8 w-8" />
      <span className={`text-xl font-bold ${darkMode ? "text-green-100" : "text-green-900"}`}>izedflow</span>
    </button>
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
