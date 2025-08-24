import React from "react";

export const Container: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-6xl px-4 md:px-6 ${className}`}>{children}</div>
);

export const Card: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className = "" }) => (
  <div className={`rounded-2xl shadow-lg bg-white/80 backdrop-blur p-6 md:p-8 ${className}`}>{children}</div>
);

export const Button: React.FC<React.PropsWithChildren<{
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "solid" | "ghost";
  active?: boolean;
  className?: string;
  iconLeft?: React.ReactNode;
}>> = ({ onClick, type = "button", variant = "solid", active, className = "", iconLeft, children }) => {
  const base = "inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium transition-transform active:scale-[0.98]";
  const solid = "bg-green-600 hover:bg-green-700 text-white shadow-sm shadow-green-600/20";
  const ghost = `bg-transparent text-green-700 hover:bg-green-50 ${active ? "ring-2 ring-green-600/40" : ""}`;
  return (
    <button onClick={onClick} type={type} className={`${base} ${variant === "solid" ? solid : ghost} ${className}`}>
      {iconLeft}
      {children}
    </button>
  );
};

export const Input: React.FC<{
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
}> = ({ id, label, type = "text", placeholder, value, onChange }) => (
  <label className="block">
    <span className="block text-sm font-medium text-green-900/80 mb-2">{label}</span>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-xl border border-green-200 bg-white px-4 py-3 text-green-950 placeholder-green-800/40 focus:outline-none focus:ring-4 focus:ring-green-500/20 focus:border-green-500"
    />
  </label>
);
