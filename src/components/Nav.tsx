import React from "react";
import { Home, Mail } from "lucide-react";
import { Button } from "./UI";

type TabKey = "home" | "contact";

export const Nav: React.FC<{
  active: TabKey;
  onChange: (t: TabKey) => void;
}> = ({ active, onChange }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="Wizedflow logo" className="h-10 w-10 rounded-xl object-contain ring-1 ring-green-200" />
        <span className="text-xl md:text-2xl font-bold tracking-tight text-green-900">Wizedflow</span>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" active={active === "home"} onClick={() => onChange("home")} iconLeft={<Home className="h-4 w-4" />}>
          Home
        </Button>
        <Button variant="ghost" active={active === "contact"} onClick={() => onChange("contact")} iconLeft={<Mail className="h-4 w-4" />}>
          Contact Us
        </Button>
      </div>
    </div>
  );
};
