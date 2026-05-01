"use client";

import { motion } from "motion/react";
import { Heart } from "lucide-react";

export default function RobotVisual({
  isDarkMode,
  isSpeaking,
  breathingStep,
  setChatMessage,
  setBreathingStep,
  setUserMood,
  setUserReflection,
  setUserDetailedSensations,
  setBreathworkSuggestion,
  setReflectionSentiment,
  setIsEnvironmentBright,
  speakHi,
}) {
  const handleHeartClick = () => {
    setUserMood("");
    setUserReflection("");
    setUserDetailedSensations("");
    setBreathworkSuggestion(null);
    setReflectionSentiment(null);
    setIsEnvironmentBright(false);
    setBreathingStep("prompt");
    speakHi("Are you ready to breathe?");
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6 }}
      className="w-full flex justify-center md:justify-start min-h-[400px]"
    >
      <div className="relative">
        {/* Glow */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-64 h-64 bg-brand-cyan/10 blur-3xl rounded-full"
          />
        </div>

        <motion.div
          animate={{
            y: [0, -20, 0],
            scale:
              breathingStep === "inhale"
                ? 1.15
                : breathingStep === "exhale"
                  ? 0.95
                  : 1,
          }}
          transition={{
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 4, ease: "easeInOut" },
          }}
          className="relative z-10"
        >
          <div className="flex flex-col items-center">
            {/* Ears */}
            <div className="absolute top-[-40px] w-full flex justify-center gap-32 z-20">
              {[0, 1].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    translateY: isSpeaking ? [-8, 8, -8] : [0, -10, 0],
                    rotate: i === 0 ? [-12, 12, -12] : [12, -12, 12],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                  }}
                  className={`w-16 h-20 bg-brand-pink border-4 border-emerald-950 shadow-xl ${
                    i === 0
                      ? "rounded-tl-[50px] rounded-br-[50px] -rotate-15"
                      : "rounded-tr-[50px] rounded-bl-[50px] rotate-15"
                  }`}
                />
              ))}
            </div>

            {/* Head */}
            <div className="relative w-72 h-48 bg-white border-4 border-emerald-950 rounded-[80px] flex items-center justify-center p-2 shadow-2xl z-10">
              <div className="w-full h-full bg-slate-950 rounded-[70px] border-4 border-emerald-900 flex flex-col items-center justify-center overflow-hidden">
                <div className="flex justify-between w-40 mb-3">
                  {[0, 1].map((_, i) => (
                    <div
                      key={i}
                      className="w-14 h-14 flex items-center justify-center"
                    >
                      <motion.div
                        animate={
                          isSpeaking
                            ? { scaleY: [1, 0.1, 1] }
                            : ["none", "hold1", "hold2", "completed"].includes(
                                  breathingStep,
                                )
                              ? { scaleY: 0.1 }
                              : { scaleY: [1, 1.1, 1] }
                        }
                        transition={
                          isSpeaking
                            ? { repeat: Infinity, duration: 0.15 }
                            : { duration: 0.5 }
                        }
                        className="w-12 h-12 bg-brand-cyan rounded-full shadow-[0_0_20px_rgba(45,212,191,0.5)]"
                      />
                    </div>
                  ))}
                </div>
                <motion.div
                  animate={
                    isSpeaking
                      ? { height: [4, 10, 4], width: [20, 30, 20] }
                      : ["inhale", "exhale"].includes(breathingStep)
                        ? { height: 14, width: 36, opacity: 1 }
                        : { height: 1.5, width: 20, opacity: 0.3 }
                  }
                  transition={{ duration: 0.5 }}
                  className="bg-brand-cyan/40 rounded-full shadow-[0_0_15px_rgba(157,226,234,0.3)]"
                />
              </div>
            </div>

            {/* Body */}
            <div className="relative mt-2 w-36 h-32 bg-white border-4 border-emerald-950 rounded-[50px] flex flex-col items-center justify-center shadow-xl">
              <button
                onClick={handleHeartClick}
                className="group/heart transition-transform hover:scale-110 active:scale-90 mb-1 z-20"
                aria-label="Start breathing session"
              >
                <Heart className="w-12 h-12 fill-brand-pink text-emerald-950" />
              </button>
              <div className="w-20 h-2.5 bg-brand-cyan border-2 border-emerald-950 rounded-full" />

              {/* Arms */}
              {[0, 1].map((_, i) => (
                <div
                  key={i}
                  className={`absolute top-6 ${i === 0 ? "-left-20" : "-right-20"} flex flex-col items-center`}
                >
                  <motion.div
                    animate={
                      i === 1
                        ? {
                            rotate: isSpeaking ? [-10, 40, -10] : [0, 15, 0],
                            translateY: [0, -5, 0],
                          }
                        : { translateY: [0, 5, 0] }
                    }
                    transition={{ repeat: Infinity, duration: 4 }}
                    className={`w-14 h-12 bg-brand-pink border-4 border-emerald-950 rounded-full shadow-lg ${
                      i === 0 ? "-rotate-12" : "rotate-12"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
