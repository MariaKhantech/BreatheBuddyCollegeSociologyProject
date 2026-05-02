"use client";

import { Bot } from "lucide-react";

export default function Footer({ isDarkMode }) {
  return (
    <footer
      className={`border-t py-16 px-6 ${isDarkMode ? "border-emerald-950/20 bg-emerald-950/40" : "border-brand-cyan/20 bg-white/50"} backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-3 text-3xl font-black italic tracking-tighter text-brand-cyan uppercase">
          <Bot className="w-10 h-10" />
          BREATHE BUDDY
        </div>
        
        <div className="text-center md:text-right space-y-2">
    
          <p className="text-[10px] font-mono tracking-widest text-brand-cyan uppercase">
            © copyright 2024 Maria Khan
          </p>
        </div>
      </div>
    </footer>
  );
}
