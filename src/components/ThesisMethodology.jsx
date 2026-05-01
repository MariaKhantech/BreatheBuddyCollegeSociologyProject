"use client";

import { motion } from "framer-motion";
import { Activity, Brain, ShieldCheck, Book } from "lucide-react";

export default function ThesisMethodology({ isDarkMode }) {
  const points = [
    {
      title: "Thesis example one",
      text: "By increasing interoceptive awareness, breathwork empowers clients to recognize and manage physical manifestations of stress before they escalate into emotional crises.",
      icon: <Activity className="w-6 h-6" />,
    },
    {
      title: "Thesis example two",
      text: "Controlled breathing improves oxygen-carbon dioxide exchange, which optimizes prefrontal cortex function and allows clients to engage more effectively in traditional talk therapy.",
      icon: <Brain className="w-6 h-6" />,
    },
    {
      title: "Thesis example three",
      text: "Breathwork enhances the therapeutic alliance by providing clients with immediate, tangible self-soothing techniques that build agency and confidence in their own recovery.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
  ];

  return (
    <section className="pt-24 pb-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2
              className={`text-4xl sm:text-5xl font-black italic tracking-tighter uppercase leading-none ${isDarkMode ? "text-white" : "text-emerald-950"}`}
            >
              How does breathwork{" "}
              <span className="text-brand-cyan">help a client?</span>
            </h2>

            <div className="flex items-center justify-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-brand-pink/30" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-pink shrink-0">
                Thesis Suggestions AI Part 3
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-brand-pink/30" />
            </div>

            <p
              className={`text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-medium transition-colors duration-500 ${isDarkMode ? "text-white/80" : "text-slate-500"}`}
            >
              The following suggestions were synthesized by the Gemini API by
              analyzing peer-reviewed literature and clinical studies.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-6">
          {points.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-8 rounded-[2.5rem] border flex flex-col md:flex-row gap-8 items-center ${
                isDarkMode
                  ? "bg-slate-900/40 border-white/5"
                  : "bg-white border-brand-cyan/10 shadow-xl shadow-brand-cyan/5"
              }`}
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${isDarkMode ? "bg-brand-cyan/20 text-brand-cyan" : "bg-brand-cyan/10 text-brand-cyan"}`}
              >
                {point.icon}
              </div>
              <div className="space-y-2 text-center md:text-left">
                <h3
                  className={`text-xl font-black uppercase tracking-tighter ${isDarkMode ? "text-white" : "text-slate-900"}`}
                >
                  {point.title}
                </h3>
                <p
                  className={`text-lg leading-relaxed ${isDarkMode ? "text-white/60" : "text-slate-600"}`}
                >
                  {point.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`relative p-10 mt-4 rounded-[3.5rem] border overflow-hidden shadow-2xl transition-all duration-700 ${
            isDarkMode
              ? "bg-slate-950 border-white/10"
              : "bg-white border-slate-200/60"
          }`}
        >
          <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
            <div
              className={`w-20 h-20 rounded-3xl flex items-center justify-center shrink-0 shadow-lg ${isDarkMode ? "bg-brand-pink text-white" : "bg-emerald-950 text-white"}`}
            >
              <Book className="w-10 h-10" />
            </div>

            <div className="space-y-6 flex-1 text-center md:text-left">
              <div className="space-y-1">
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-brand-pink">
                  Ask an Expert the Librarian Part 4
                </h3>
                <p
                  className={`text-3xl font-black italic tracking-tighter uppercase ${isDarkMode ? "text-white" : "text-emerald-950"}`}
                >
                  Research <span className="text-brand-cyan">Process</span>
                </p>
              </div>

              <div className="space-y-4">
                <p
                  className={`text-base sm:text-lg leading-relaxed font-medium ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}
                >
                  During a consultation, the librarian suggested that the first
                  two AI-generated thesis statements were the strongest because
                  they focused on concrete physical reactions to stress. She
                  recommended merging them to create a more robust thesis
                  centered on the prefrontal cortex and vagus nerve, noting that
                  a strong thesis should act as &quot;guardrails&quot; to keep
                  the research focused.
                </p>
                <p
                  className={`text-base sm:text-lg leading-relaxed font-medium ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}
                >
                  She also warned that AI often suggests paywalled articles and
                  skips foundational context. Ultimately, the library database
                  proved much more efficient for finding accessible,
                  peer-reviewed materials.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
