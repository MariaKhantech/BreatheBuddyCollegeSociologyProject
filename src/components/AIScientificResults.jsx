"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Book, Globe, FlaskConical } from "lucide-react";

export default function AIScientificResults({ isDarkMode }) {
  const [activeTab, setActiveTab] = useState(0);

  const sections = [
    {
      title: "Books",
      icon: <Book className="w-5 h-5" />,
      color: "from-brand-cyan to-emerald-400",
      accent: "text-brand-cyan",
      bg: "bg-brand-cyan/5",
      items: [
        {
          label: "Breath: The New Science of a Lost Art",
          sub: "by James Nestor",
        },
        {
          label: "The Body Keeps the Score",
          sub: "by Bessel van der Kolk (2014)",
        },
        {
          label: "Waking the Tiger: Healing Trauma",
          sub: "by Peter A. Levine",
        },
      ],
    },
    {
      title: "Web",
      icon: <Globe className="w-5 h-5" />,
      color: "from-brand-pink to-rose-400",
      accent: "text-brand-pink",
      bg: "bg-brand-pink/5",
      items: [
        { label: "Othership: Breathwork for Healing Trauma", link: "#" },
        { label: "Firefly Therapy Austin: Breathwork & Trauma", link: "#" },
        { label: "Healing Brainwaves: Breathwork Guide", link: "#" },
      ],
    },
    {
      title: "Studies",
      icon: <FlaskConical className="w-5 h-5" />,
      color: "from-amber-400 to-orange-500",
      accent: "text-amber-500",
      bg: "bg-amber-500/5",
      items: [
        { label: "Breath-Based Meditation & PTSD", sub: "PMC4309518 Study" },
        {
          label: "Treating PTSD with Connected Breathing",
          sub: "Clinical Case Study",
        },
        { label: "Breathwork for Chronic Stress", sub: "MDPI Public Health" },
      ],
    },
  ];

  return (
    <section className="pt-8 pb-24 px-6 relative z-10 w-full">
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[500px] rounded-[100%] blur-[120px] opacity-20 pointer-events-none transition-colors duration-1000 bg-gradient-to-tr ${sections[activeTab].color}`}
      />
      <div className="text-center mb-10 relative z-10 max-w-4xl mx-auto">
        <h2
          className={`text-3xl md:text-4xl font-black italic tracking-tighter uppercase ${isDarkMode ? "text-white" : "text-emerald-950"}`}
        >
          How does breathwork{" "}
          <span className={sections[activeTab].accent}>
            transform a client’s trauma through breathing?
          </span>
        </h2>
        <div className="flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-brand-pink/30" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-pink shrink-0">
            Thesis Suggestions AI Part 2
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-brand-pink/30" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div
          className={`rounded-[3.5rem] border overflow-hidden shadow-2xl transition-all duration-700 backdrop-blur-xl ${isDarkMode ? "bg-slate-900/80 border-slate-700/50" : "bg-white/90 border-slate-200/60"}`}
        >
          <div
            className={`flex border-b ${isDarkMode ? "border-slate-800" : "border-slate-100"}`}
          >
            {sections.map((section, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`cursor-pointer flex-1 py-6 flex flex-col md:flex-row items-center justify-center gap-2 transition-all duration-300 ${
                  activeTab === idx
                    ? `${section.accent} ${isDarkMode ? "bg-slate-800/50" : "bg-slate-50"} border-b-2 border-current`
                    : `border-b-2 border-transparent ${isDarkMode ? "text-slate-500 hover:text-slate-300" : "text-slate-400 hover:text-slate-600"}`
                }`}
              >
                {section.icon}
                <span className="font-bold tracking-widest uppercase text-xs">
                  {section.title}
                </span>
              </button>
            ))}
          </div>

          <div className="p-8 md:p-12 min-h-[320px] flex flex-col justify-between">
            <div className="space-y-4">
              {sections[activeTab].items.map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={idx}
                  className={`p-6 rounded-2xl border transition-all hover:scale-[1.02] cursor-pointer ${sections[activeTab].bg} ${
                    isDarkMode
                      ? "border-white/5 hover:border-white/10"
                      : "border-slate-100 shadow-sm hover:shadow-md"
                  }`}
                >
                  <h4
                    className={`font-bold text-lg ${isDarkMode ? "text-white" : "text-slate-900"}`}
                  >
                    {item.label}
                  </h4>
                  {item.sub && (
                    <p
                      className={`text-sm mt-1 font-medium ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}
                    >
                      {item.sub}
                    </p>
                  )}
                  {item.link && (
                    <a
                      href={item.link}
                      className={`text-[10px] font-black uppercase tracking-widest mt-3 inline-block transition-opacity hover:opacity-70 ${sections[activeTab].accent}`}
                    >
                      View Resource &rarr;
                    </a>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-col items-center"
            >
              <div
                className={`w-50 h-[1px] rounded-full mb-6 ${isDarkMode ? "bg-slate-950" : "bg-slate-200"}`}
              />

              <p
                className={`text-sm md:text-base leading-relaxed text-center font-medium ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
