"use client";

import { motion } from "motion/react";
import { Bot, Sparkles, Loader2, AlertTriangle } from "lucide-react";

export default function ChatInterface({
  isDarkMode,
  chatMessage,
  breathingStep,
  timer,
  isSpeaking,
  isAiThinking,
  userMood,
  userReflection,
  userDetailedSensations,
  reflectionSentiment,
  breathworkSuggestion,
  setUserMood,
  setUserReflection,
  setUserDetailedSensations,
  setBreathingStep,
  setChatMessage,
  speakHi,
  handleMoodSubmit,
  handleReflectionSubmit,
  handleDetailedReflectionSubmit,
  startBreathing,
  resetBreathing,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 }}
      className="w-full flex justify-center md:justify-end"
    >
      <div
        className={`glass-card p-6 sm:p-8 border-4 relative w-full max-w-lg rounded-[3.5rem] text-left transition-all hover:scale-[1.01] ${
          isDarkMode
            ? "bg-slate-900/60 border-brand-cyan/30 shadow-[0_0_40px_rgba(45,212,191,0.15)]"
            : "bg-white/95 border-emerald-950/10 shadow-2xl"
        }`}
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-brand-cyan flex items-center justify-center shrink-0 shadow-lg shadow-brand-cyan/30 -rotate-3">
            <Bot className="w-7 h-7 text-white" />
          </div>
          <div className="flex-1 space-y-4">
            <div className="flex justify-between items-center">
              <span
                className={`font-black text-[10px] tracking-[0.2em] uppercase ${isDarkMode ? "text-brand-pink" : "text-brand-pink/80"}`}
              >
                Breathing Buddy
              </span>
              <div
                className={`flex items-center gap-1.5 font-mono text-[10px] ${isDarkMode ? "text-brand-cyan/80" : "opacity-40"}`}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
                LIVE_FEED
              </div>
            </div>

            <div
              className={`text-xl font-bold leading-relaxed italic pr-2 ${isDarkMode ? "text-white" : "text-emerald-950"}`}
            >
              &quot;{chatMessage}&quot;
            </div>

            {breathingStep === "prompt" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col gap-3 py-3 border-t border-brand-cyan/20"
              >
                <p
                  className={`text-[10px] font-black uppercase tracking-widest ${isDarkMode ? "text-brand-pink/90" : "text-brand-pink/70"}`}
                >
                  Awaiting Confirmation:
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setBreathingStep("mood");
                      const msg =
                        "Excellent. Before we begin, how are you feeling in this moment?";
                      setChatMessage(msg);
                      speakHi(msg);
                    }}
                    className="bg-brand-cyan px-6 py-2.5 text-emerald-950 font-black rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all text-[10px] uppercase tracking-tighter"
                  >
                    YES
                  </button>
                  <button
                    onClick={() => {
                      setBreathingStep("declined");
                      speakHi("No problem. Come back when you are ready.");
                    }}
                    className="bg-white border-2 border-brand-pink/30 px-6 py-2.5 text-brand-pink font-black rounded-xl hover:scale-105 active:scale-95 transition-all text-[10px] uppercase tracking-tighter"
                  >
                    NO
                  </button>
                </div>
              </motion.div>
            )}

            {breathingStep === "mood" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col gap-3 py-3 border-t border-brand-cyan/20"
              >
                <p
                  className={`text-[10px] font-black uppercase tracking-widest italic ${isDarkMode ? "text-brand-pink/90" : "text-brand-pink/70"}`}
                >
                  Personalizing your session...
                </p>
                <div className="relative">
                  <input
                    type="text"
                    value={userMood}
                    onChange={(e) => setUserMood(e.target.value)}
                    onKeyDown={(e) =>
                      e.key === "Enter" && handleMoodSubmit(userMood)
                    }
                    placeholder="e.g. A bit stressed, anxious, tired..."
                    disabled={isAiThinking}
                    className={`w-full bg-slate-900/40 border-2 border-brand-cyan/20 rounded-xl px-4 py-3 text-xs font-medium text-white placeholder:text-white/20 focus:border-brand-cyan/60 focus:outline-none transition-all pr-12 ${isAiThinking ? "opacity-50" : ""}`}
                  />
                  <button
                    onClick={() => handleMoodSubmit(userMood)}
                    disabled={isAiThinking || !userMood.trim()}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-brand-cyan flex items-center justify-center hover:scale-105 active:scale-95 disabled:opacity-30 transition-all"
                  >
                    {isAiThinking ? (
                      <Loader2 className="w-4 h-4 text-emerald-950 animate-spin" />
                    ) : (
                      <Sparkles className="w-4 h-4 text-emerald-950" />
                    )}
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Stressed", "Anxious", "Tired", "Okay"].map((mood) => (
                    <button
                      key={mood}
                      onClick={() => {
                        setUserMood(mood);
                        handleMoodSubmit(mood);
                      }}
                      disabled={isAiThinking}
                      className={`px-3 py-1.5 rounded-full border border-brand-cyan/20 text-[10px] font-bold transition-all ${isDarkMode ? "text-brand-cyan/80" : "text-brand-cyan/60"} hover:border-brand-cyan hover:text-brand-cyan`}
                    >
                      {mood}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {breathingStep === "ready" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-3 border-t border-brand-cyan/20"
              >
                <button
                  onClick={startBreathing}
                  className="bg-brand-cyan px-10 py-3 text-emerald-950 font-black rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all text-xs uppercase tracking-widest"
                >
                  START
                </button>
              </motion.div>
            )}

            {["inhale", "hold1", "exhale", "hold2"].includes(breathingStep) && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-6 gap-4 border-t border-brand-cyan/20"
              >
                <div className="text-6xl font-black text-brand-cyan animate-pulse">
                  {timer}
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-pink">
                  {breathingStep === "inhale" && "Inhale deeply"}
                  {breathingStep === "hold1" && "Steady hold"}
                  {breathingStep === "exhale" && "Exhale slowly"}
                  {breathingStep === "hold2" && "Final hold"}
                </div>
                <button
                  onClick={resetBreathing}
                  className="mt-2 px-4 py-2 border-2 border-brand-pink/30 text-brand-pink text-[10px] font-black uppercase rounded-xl hover:bg-brand-pink/5 active:scale-95 transition-all tracking-tighter"
                >
                  STOP EXERCISE
                </button>
              </motion.div>
            )}

            {breathingStep === "completed" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col gap-4 py-3 border-t border-brand-cyan/20"
              >
                {!breathworkSuggestion ? (
                  <div className="relative">
                    <input
                      type="text"
                      value={userReflection}
                      onChange={(e) => setUserReflection(e.target.value)}
                      onKeyDown={(e) =>
                        e.key === "Enter" &&
                        handleReflectionSubmit(userReflection)
                      }
                      placeholder="How are you feeling now?"
                      disabled={isAiThinking}
                      className={`w-full bg-slate-900/40 border-2 border-brand-cyan/20 rounded-xl px-4 py-2 text-xs text-white placeholder:text-white/20 focus:border-brand-cyan transition-all pr-12 ${isAiThinking ? "opacity-50" : ""}`}
                    />
                    <button
                      onClick={() => handleReflectionSubmit(userReflection)}
                      disabled={isAiThinking || !userReflection.trim()}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-brand-cyan flex items-center justify-center hover:scale-105 disabled:opacity-30 transition-all"
                    >
                      {isAiThinking ? (
                        <Loader2 className="w-4 h-4 text-emerald-950 animate-spin" />
                      ) : (
                        <Sparkles className="w-4 h-4 text-emerald-950" />
                      )}
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className={`p-4 rounded-2xl border transition-all ${
                        reflectionSentiment === "positive"
                          ? "bg-emerald-500/10 border-emerald-500/30"
                          : "bg-brand-pink/10 border-brand-pink/30"
                      }`}
                    >
                      <p
                        className={`text-[10px] font-black uppercase tracking-widest mb-2 flex items-center gap-2 ${
                          reflectionSentiment === "positive"
                            ? "text-emerald-400"
                            : "text-brand-pink"
                        }`}
                      >
                        <Sparkles className="w-3 h-3" /> AI RECOMMENDATION
                      </p>
                      <div className="relative">
                        <button
                          disabled
                          className={`w-full text-left p-3 rounded-xl bg-white/5 border opacity-40 cursor-not-allowed ${
                            reflectionSentiment === "positive"
                              ? "border-emerald-500/20"
                              : "border-brand-pink/20"
                          }`}
                        >
                          <span className="text-xs font-bold text-white italic block mb-1">
                            {reflectionSentiment === "positive"
                              ? "Deepen your peace"
                              : "Try recommended technique"}
                          </span>
                          <span
                            className={`text-[9px] font-black uppercase tracking-tighter ${
                              reflectionSentiment === "positive"
                                ? "text-emerald-400"
                                : "text-brand-cyan"
                            }`}
                          >
                            Prototype Only - Future Feature
                          </span>
                        </button>
                        <div className="absolute top-2 right-2">
                          <div className="px-2 py-0.5 bg-emerald-950/80 border border-brand-cyan/30 rounded text-[8px] font-black text-brand-cyan uppercase tracking-tighter">
                            🔒 LOCKED
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    {reflectionSentiment === "negative" && (
                      <button
                        onClick={startBreathing}
                        className="w-full bg-brand-cyan py-3 text-emerald-950 text-[10px] font-black uppercase rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg"
                      >
                        Try Box Breathing Again
                      </button>
                    )}
                    <button
                      onClick={resetBreathing}
                      className={`w-full bg-white/10 py-3 text-[10px] font-black uppercase rounded-xl hover:bg-brand-pink hover:text-white transition-all shadow-lg ${isDarkMode ? "text-brand-cyan brightness-125" : "text-brand-cyan"}`}
                    >
                      End Session
                    </button>
                  </div>
                )}
              </motion.div>
            )}

            {breathingStep === "detailed_reflection" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col gap-4 py-3 border-t border-brand-cyan/20"
              >
                <div className="relative">
                  <input
                    type="text"
                    value={userDetailedSensations}
                    onChange={(e) => setUserDetailedSensations(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleDetailedReflectionSubmit(userDetailedSensations);
                        setBreathingStep("completed");
                      }
                    }}
                    placeholder="Physical/emotional sensations..."
                    disabled={isAiThinking}
                    className={`w-full bg-slate-900/40 border-2 border-brand-cyan/20 rounded-xl px-4 py-2 text-xs text-white placeholder:text-white/20 focus:border-brand-cyan transition-all pr-12 ${isAiThinking ? "opacity-50" : ""}`}
                  />
                  <button
                    onClick={() => {
                      handleDetailedReflectionSubmit(userDetailedSensations);
                      setBreathingStep("completed");
                    }}
                    disabled={isAiThinking || !userDetailedSensations.trim()}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-brand-cyan flex items-center justify-center hover:scale-105 disabled:opacity-30 transition-all"
                  >
                    {isAiThinking ? (
                      <Loader2 className="w-4 h-4 text-emerald-950 animate-spin" />
                    ) : (
                      <Sparkles className="w-4 h-4 text-emerald-950" />
                    )}
                  </button>
                </div>
                <button
                  onClick={resetBreathing}
                  className={`w-full bg-white/10 py-3 text-[10px] font-black uppercase rounded-xl hover:bg-brand-pink hover:text-white transition-all ${isDarkMode ? "text-brand-cyan" : "text-brand-cyan"}`}
                >
                  End Session
                </button>
              </motion.div>
            )}

            {isSpeaking && (
              <motion.div
                className="flex gap-1 h-6 items-end"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [4, 20, 6] }}
                    transition={{
                      repeat: Infinity,
                      duration: 0.4,
                      delay: i * 0.04,
                    }}
                    className="w-1 bg-brand-cyan rounded-full"
                  />
                ))}
              </motion.div>
            )}
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-white/10 flex items-start gap-2 opacity-60">
          <AlertTriangle
            className={`w-12 h-12 mt-0.5 ${isDarkMode ? "text-yellow-500" : "text-slate-600"}`}
          />
          <p
            className={`text-[10px] leading-relaxed ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}
          >
            <strong>Disclaimer:</strong> This application is for educational and
            testing purposes only. The responses provided by the AI are
            generated by a language model and should not be construed as medical
            advice, diagnosis, or treatment. Always consult with a qualified
            healthcare professional for any medical concerns.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
