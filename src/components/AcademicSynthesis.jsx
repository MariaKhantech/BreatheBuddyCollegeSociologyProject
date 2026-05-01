"use client";

import { motion } from "framer-motion";
import { ExternalLink, Fingerprint, Cpu } from "lucide-react";

export default function AcademicSynthesis({ isDarkMode }) {
  return (
    <section className="py-32 px-6 relative overflow-hidden z-10">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_250px] gap-12 md:gap-24 items-start">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-px bg-brand-cyan" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-cyan">
                  AI Results Part 5
                </span>
                <div className="w-12 h-px bg-brand-cyan" />
              </div>
              <h2
                className={`text-4xl sm:text-6xl font-black italic tracking-tighter uppercase leading-tight ${isDarkMode ? "text-white" : "text-emerald-950"}`}
              >
                AI Writing <br />
                <span className="text-brand-pink">Analysis</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={`space-y-8 text-lg sm:text-xl leading-relaxed font-medium ${isDarkMode ? "text-white/80" : "text-slate-700"}`}
            >
              <p className="indent-12">
                Breathwork is the practice of using intentional breathing
                techniques to influence physical, emotional, and mental states.
                It has become increasingly popular because it is simple, low
                cost, and easy to practice in many settings. Research suggests
                that breathwork may help reduce stress, improve mood, and
                support emotional regulation, which makes it a useful strategy
                for wellness and mental health.
              </p>

              <p>
                Fincham et al. (2023) found that breathwork was associated with
                lower stress, anxiety, and depressive symptoms in randomized
                controlled trials, showing that the practice has measurable
                benefits. In addition, Yilmaz Balban et al. (2023) reported that{" "}
                <span className="italic text-brand-cyan">
                  “Daily 5-min cyclic sighing has promise as an effective stress
                  management exercise.”
                </span>
              </p>

              <div
                className={`p-8 rounded-3xl border-l-4 ${isDarkMode ? "bg-white/5 border-brand-cyan/30" : "bg-slate-50 border-brand-cyan/20"}`}
              >
                <p className="text-base sm:text-lg leading-relaxed opacity-90 italic">
                  Because of these benefits, breathwork is often discussed as
                  both a self-care practice and a possible therapeutic tool.
                  This essay explains the value of breathwork, its effects on
                  the body and mind, and why it is gaining attention in health
                  research.
                </p>
              </div>

              <p className="opacity-80">
                Breathwork refers to the intentional regulation of breathing
                patterns and has gained attention as a potentially useful tool
                for stress and anxiety management. In a meta-analysis of
                randomized controlled trials, Fincham et al. (2023) found that
                breathwork was associated with lower stress, anxiety, and
                depressive symptoms. Likewise, Banushi et al. (2023) reported
                that a range of breathwork interventions yielded significant
                improvements in anxiety symptoms. Together, these studies
                suggest that breathwork may be a practical and accessible
                approach to supporting mental well-being.
              </p>

              <div className="space-y-6 pt-8 relative">
                <h4
                  className={`text-[16px] font-bold uppercase tracking-[0.2em] ${isDarkMode ? "text-brand-cyan" : "text-brand-pink"}`}
                >
                  Reflection of the Analysis
                </h4>

                <div
                  className={`relative p-8 rounded-[2rem] border backdrop-blur-xl transition-all duration-700 ${
                    isDarkMode
                      ? "bg-slate-950/40 border-white/5 shadow-2xl shadow-black/20"
                      : "bg-white/40 border-brand-cyan/10 shadow-xl shadow-brand-cyan/5"
                  }`}
                >
                  <div
                    className={`text-base leading-relaxed font-medium space-y-4 ${isDarkMode ? "text-white/80" : "text-slate-700"}`}
                  >
                    <p>
                      Using Perplexity AI was surprisingly exhausting and took
                      significantly longer than manual writing. The process
                      required over 30 inputs to fix repetitive structures and
                      incorrect word counts.
                    </p>
                    <p>
                      Most of that time was spent fact-checking the 2023 Banushi
                      abstract, because when I checked the article myself, I
                      found the AI had actually contradicted the real data. This
                      experience showed me that while AI pulls data fast, it
                      lacks the depth and transitions needed for college level
                      work.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-12 border-t border-brand-cyan/10 space-y-6">
                <div className="flex items-center gap-4">
                  <ExternalLink className="w-4 h-4 text-brand-pink" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-pink">
                    References
                  </span>
                </div>
                <div className="space-y-4 text-xs sm:text-sm font-mono opacity-60 leading-relaxed">
                  <p>
                    • Fincham, G. W., et al. (2023). &quot;Effect of breathwork
                    on stress and mental health: A meta-analysis.&quot;{" "}
                    <span className="italic">Scientific Reports</span>.
                  </p>
                  <p>
                    • Yilmaz Balban, M., et al. (2023). &quot;Brief structured
                    respiration practices enhance mood and reduce physiological
                    arousal.&quot;{" "}
                    <span className="italic">Cell Reports Medicine</span>.
                  </p>
                  <p>
                    • Banushi, B., et al. (2023). &quot;Breathwork interventions
                    for anxiety: A systematic review and meta-analysis.&quot;{" "}
                    <span className="italic">Frontiers in Psychology</span>.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className={`md:sticky md:top-24 space-y-12 py-4 border-t border-slate-200 md:border-t-0 md:border-l ${isDarkMode ? "border-white/10" : "border-slate-200"} md:pl-10`}
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-brand-pink">
                  <Fingerprint className="w-4 h-4" />
                  <span className="text-[10px] font-black uppercase tracking-widest font-mono">
                    Process ID
                  </span>
                </div>
                <p className="font-mono text-xs opacity-50 font-bold uppercase tracking-tighter">
                  [SYNTH-05-WRITE]
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-brand-cyan">
                  <Cpu className="w-4 h-4" />
                  <span className="text-[10px] font-black uppercase tracking-widest font-mono">
                    AI Model
                  </span>
                </div>
                <p className="font-mono text-xs opacity-50 font-bold uppercase tracking-tighter">
                  PERPLEXITY AI
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-black uppercase tracking-widest opacity-30 font-mono">
                  Synthesis Analysis
                </span>
              </div>

              <div className="pt-8 flex flex-col gap-4">
                <div
                  className={`p-4 rounded-xl border flex items-center justify-between ${isDarkMode ? "bg-white/5 border-white/10" : "bg-slate-50 border-slate-200"}`}
                >
                  <span className="text-[9px] font-bold uppercase tracking-widest opacity-40">
                    Confidence in AI writing
                  </span>
                  <span className="text-xs font-black text-emerald-500 font-mono">
                    60%
                  </span>
                </div>
                <div
                  className={`p-4 rounded-xl border flex items-center justify-between ${isDarkMode ? "bg-white/5 border-white/10" : "bg-slate-50 border-slate-200"}`}
                >
                  <span className="text-[9px] font-bold uppercase tracking-widest opacity-40">
                    Verification
                  </span>
                  <span className="text-xs ml-2 font-black text-brand-pink font-mono">
                    ACADEMIC - FAIL
                  </span>
                </div>
              </div>
            </div>

            <div className={`pt-8 hidden md:block`}>
              <div className="flex flex-wrap gap-2">
                {["NEURO", "SOMATIC", "TRAUMA"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] font-black border border-brand-cyan/20 text-brand-cyan px-2 py-0.5 rounded uppercase font-mono tracking-widest"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
