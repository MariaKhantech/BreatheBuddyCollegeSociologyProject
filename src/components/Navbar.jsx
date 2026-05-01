"use client";

import { Bot, Sun, Moon } from "lucide-react";

export default function Navbar({ isDarkMode, onToggleDark }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-6">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xl font-black italic tracking-tighter cursor-default text-brand-cyan">
          <Bot className="w-6 h-6" />
          BREATHE BUDDY
        </div>
        <button
          onClick={onToggleDark}
          aria-label={
            isDarkMode ? "Switch to light mode" : "Switch to dark mode"
          }
          className={`p-2 rounded-full border transition-all ${
            isDarkMode
              ? "bg-white/5 border-white/10 text-brand-yellow hover:scale-110"
              : "bg-white border-brand-cyan/30 text-brand-pink hover:scale-110 shadow-lg"
          }`}
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>
      </div>
    </nav>
  );
}
