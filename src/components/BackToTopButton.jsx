"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTopButton({ isDarkMode }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex justify-center py-8">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToTop}
        className={`group flex items-center gap-3 px-8 py-4 rounded-2xl border-2 font-black uppercase tracking-widest text-xs transition-all ${
          isDarkMode
            ? "bg-slate-900/40 border-brand-cyan/30 text-brand-cyan hover:border-brand-cyan hover:bg-brand-cyan/10"
            : "bg-white border-emerald-950/10 text-emerald-950 hover:border-emerald-950/20 shadow-lg"
        }`}
      >
        <ArrowUp className="w-4 h-4 text-brand-cyan group-hover:-translate-y-1 transition-transform duration-300" />
        Back to Top
      </motion.button>
    </div>
  );
}
