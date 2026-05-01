"use client";

import { motion } from "motion/react";

export default function NatureEnvironment({ isDarkMode, isBright }) {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic Background Glow */}
      <motion.div
        animate={{
          opacity: isBright ? 0.6 : 0.2,
          scale: isBright ? 1.2 : 0.8,
        }}
        className={`absolute top-20 right-20 w-96 h-96 rounded-full blur-[80px] transition-colors duration-1000 ${
          isBright ? "bg-yellow-400/30" : "bg-slate-500/20"
        }`}
      />

      {/* ── Kawaii Sun Character ── */}
      <div className="absolute top-24 right-24 w-48 h-48 flex items-center justify-center">
        {/* Rotating Sun Rays */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              style={{
                transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-85px)`,
              }}
              className={`absolute top-1/2 left-1/2 w-4 h-10 rounded-full transition-colors duration-1000 ${
                isBright ? "bg-brand-yellow/60" : "bg-slate-400/30"
              }`}
            />
          ))}
        </motion.div>

        {/* Sun Face */}
        <motion.div
          animate={{ scale: isBright ? 1.1 : 1 }}
          className={`relative w-32 h-32 rounded-full border-4 transition-all duration-1000 flex flex-col items-center justify-center gap-2 shadow-2xl ${
            isBright
              ? "bg-brand-yellow border-yellow-500/50 shadow-yellow-500/20"
              : "bg-slate-300 border-slate-400/50 shadow-slate-900/10"
          }`}
        >
          {/* Eyes */}
          <div className="flex gap-6 mt-2">
            {isBright ? (
              <>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
              </>
            ) : (
              <>
                <motion.div
                  animate={{ y: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-1 bg-slate-600 rounded-full"
                />
                <motion.div
                  animate={{ y: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                  className="w-3 h-1 bg-slate-600 rounded-full"
                />
              </>
            )}
          </div>

          {/* Mouth */}
          <div className="mt-1">
            {isBright ? (
              <div className="w-6 h-3 border-b-4 border-slate-800 rounded-full" />
            ) : (
              <div className="w-4 h-2 border-t-2 border-slate-600 rounded-full opacity-60" />
            )}
          </div>

          {/* Cheeks */}
          <div className="flex justify-between w-full px-4 absolute bottom-8">
            <div
              className={`w-4 h-2 rounded-full transition-colors duration-1000 ${
                isBright ? "bg-brand-pink/40" : "bg-slate-400/20"
              }`}
            />
            <div
              className={`w-4 h-2 rounded-full transition-colors duration-1000 ${
                isBright ? "bg-brand-pink/40" : "bg-slate-400/20"
              }`}
            />
          </div>
        </motion.div>
      </div>

      {/* Rain Drops (only when NOT sunny) */}
      {!isBright && (
        <div className="absolute inset-0 z-0">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={`rain-${i}`}
              initial={{
                x: Math.random() * 1000,
                y: Math.random() * -500,
                opacity: 0,
              }}
              animate={{
                y: 1200,
                opacity: [0.6, isDarkMode ? 0.3 : 0.4, 0],
              }}
              transition={{
                duration: 0.8 + Math.random() * 1.2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "linear",
              }}
              className={`absolute w-[1px] h-12 ${
                isDarkMode ? "bg-white/40" : "bg-brand-cyan/60"
              }`}
            />
          ))}
        </div>
      )}

      {/* Floating Clouds */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`cloud-${i}`}
          initial={{
            x: Math.random() * 1000,
            y: Math.random() * 300 + 20,
            opacity: 0,
            scale: 0.6 + Math.random() * 0.8,
          }}
          animate={{
            x: [null, Math.random() > 0.5 ? 200 : -200],
            opacity: isDarkMode ? [0, 0.3, 0] : [0, 0.4, 0],
          }}
          transition={{
            duration: 25 + Math.random() * 15,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "linear",
          }}
          className="absolute"
        >
          <svg
            width="160"
            height="100"
            viewBox="0 0 160 100"
            fill="currentColor"
            className={`transition-colors duration-1000 ${
              isBright
                ? "text-emerald-500/50"
                : isDarkMode
                  ? "text-slate-500/70"
                  : "text-slate-600/60"
            }`}
          >
            <circle cx="40" cy="60" r="30" />
            <circle cx="80" cy="50" r="40" />
            <circle cx="120" cy="65" r="25" />
            <rect x="40" y="65" width="80" height="25" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
