"use client";

import { motion } from "motion/react";

export default function FeatureCard({
  icon,
  title,
  description,
  delay,
  isDarkMode,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -12, scale: 1.02 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, type: "spring" }}
      className="glass-card group cursor-default relative overflow-hidden h-full flex flex-col p-8"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/5 -mr-16 -mt-16 rounded-full group-hover:scale-150 transition-transform duration-700" />
      <div
        className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:rotate-12 transition-all duration-300 shadow-sm ${
          isDarkMode
            ? "bg-brand-pink/20 text-brand-pink border border-white/5"
            : "bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20"
        }`}
      >
        {icon}
      </div>
      <h2
        className={`text-2xl font-black mb-4 uppercase tracking-tighter ${isDarkMode ? "text-white" : "text-slate-800"}`}
      >
        {title}
      </h2>
      <p
        className={`text-base leading-relaxed ${isDarkMode ? "text-white/60" : "text-slate-600"}`}
      >
        {description}
      </p>
    </motion.div>
  );
}
