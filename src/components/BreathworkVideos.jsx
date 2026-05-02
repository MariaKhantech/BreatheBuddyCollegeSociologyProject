"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, X, ExternalLink } from "lucide-react";

export default function BreathworkVideos({ isDarkMode }) {
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    {
      title: "Mastering Breath Control",
      description:
        "Tavi Castro demonstrates extreme lung capacity management. He is a world record-holding free diver known for his breath-holding abilities.",
      videoId: "91L4OHAxYA4",
      duration: "0:58",
      type: "Elite Performance",
    },
    {
      title: "The Art of increasing Lung Capacity",
      description:
        "Tavi Castro explaining his methods of deep diving and long breath-holding.",
      videoId: "7a0TZGQW8TQ",
      duration: "0:56",
      type: "Somatic Recovery",
    },
    {
      title: "Nervous System Regulation",
      description:
        "Example of utilizing breathwork for nervous system regulation.",
      videoId: "5YJeLYfU6Pk",
      duration: "1:00",
      type: "Technique",
    },
    {
      title: "The Wim Hof Method",
      description:
        "Wim Hof is well known for his unique approach to breathwork and cold exposure.",
      videoId: "pHZOQ1u7PI4",
      duration: "0:59",
      type: "Guided Session",
    },
    {
      title: "Conscious Connected Breath",
      description:
        "Why breathwork is a powerful tool on a more scientific perspective.",
      videoId: "vcHTkTD1oUc",
      duration: "1:00",
      type: "Therapeutic",
    },
    {
      title: "Group Somatic Flow",
      description:
        "Example of what experiential consciousness looks like in a group setting.",
      videoId: "zvyLUo0mBZA",
      duration: "0:59",
      type: "Integration",
    },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        <h2
          className={`text-4xl font-black uppercase italic tracking-tighter ${isDarkMode ? "text-white" : "text-emerald-950"}`}
        >
          Breathwork <span className="text-brand-cyan">Examples</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, idx) => (
            <div
              key={idx}
              onClick={() => setActiveVideo(idx)}
              className={`group rounded-[2.5rem] border overflow-hidden shadow-xl transition-all duration-500 cursor-pointer ${
                isDarkMode
                  ? "bg-slate-950 border-white/10 hover:border-white/20"
                  : "bg-white border-slate-200 hover:border-brand-cyan/30"
              }`}
            >
              <div className="aspect-[9/10] relative bg-slate-950">
                {activeVideo === idx ? (
                  <div className="absolute inset-0 z-20">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0&iv_load_policy=3`}
                      className="w-full h-full"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveVideo(null);
                      }}
                      className="absolute top-4 right-4 z-30 p-2 bg-black/60 rounded-full text-white hover:bg-black transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ) : (
                  <div className="absolute inset-0">
                    <Image
                      src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                      alt={video.title}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-brand-cyan/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-white fill-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-lg text-[10px] font-bold text-white uppercase tracking-widest">
                      {video.duration}
                    </div>
                  </div>
                )}
              </div>

              <div className="p-8 space-y-2">
                <div className="flex justify-between items-start gap-4">
                  <h3
                    className={`text-xl font-black uppercase tracking-tight leading-none ${isDarkMode ? "text-white" : "text-emerald-950"}`}
                  >
                    {video.title}
                  </h3>
                  <span className="text-[9px] font-black border border-brand-pink/30 text-brand-pink px-2 py-0.5 rounded uppercase tracking-widest shrink-0">
                    {video.type}
                  </span>
                </div>
                <p
                  className={`text-sm leading-relaxed font-medium ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}
                >
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-12 border-t border-brand-cyan/10 space-y-6">
          <div className="flex items-center gap-4">
            <ExternalLink className="w-4 h-4 text-brand-pink" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-pink">
              References
            </span>
          </div>
          <div
            className={`space-y-4 text-xs sm:text-sm font-mono opacity-60 leading-relaxed ${
              isDarkMode ? "text-slate-300" : "text-slate-600"
            }`}
          >
            <p className="pl-8 -indent-8">
              IMD Breathwork [@IMDBreathwork]. (2024, November 11).
              &quot;Transformative breathwork session recap at Heal Hub with
              Flo&quot; [Video]. YouTube.
              https://www.youtube.com/shorts/image_95e3dc
            </p>
            <p className="pl-8 -indent-8">
              Hof, W. [@wimhof1]. (2026, April 25). &quot;Not waiting for the
              future. We’re building it in the ice&quot; [Video]. YouTube.
              https://www.youtube.com/shorts/image_95e361
            </p>
            <p className="pl-8 -indent-8">
              Raziel, C. [@CarlaRaziel]. (2025, March 14). &quot;Why breath work
              is so powerful | Gregg Braden&quot; [Video]. YouTube.
              https://www.youtube.com/watch?v=3Zw-fAVO2Q4&t=444s
            </p>
            <p className="pl-8 -indent-8">
              Castro, T. [@TaviCastroofficial]. (2025, June 9). &quot;Stop a
              panic attack in 30 seconds | Box breathing + IM8&quot; [Video].
              YouTube. https://www.youtube.com/shorts/image_95dcda
            </p>
            <p className="pl-8 -indent-8">
              Castro, T. [@TaviCastroofficial]. (2026, February 24). &quot;Viral
              deep dive Dubai freedive - Not AI. One breath. No tricks&quot;
              [Video]. YouTube. https://www.youtube.com/shorts/image_95dc94
            </p>
            <p className="pl-8 -indent-8">
              Castro, T. [@TaviCastroofficial]. (2026, January 14). &quot;Test
              your lungs with the real Aquaman Tavi Castro&quot; [Video].
              YouTube. https://www.youtube.com/shorts/image_95dbf9
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
