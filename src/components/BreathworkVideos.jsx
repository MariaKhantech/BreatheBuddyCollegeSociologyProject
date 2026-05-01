"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";

export default function BreathworkVideos({ isDarkMode }) {
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    {
      title: "Mastering Breath Control",
      description: "Tavi Castro demonstrates extreme lung capacity management.",
      videoId: "91L4OHAxYA4",
      duration: "0:58",
      type: "Elite Performance",
    },
    {
      title: "The Art of the Sigh",
      description: "Physiological sighing and recovery with Tavi Castro.",
      videoId: "7a0TZGQW8TQ",
      duration: "0:56",
      type: "Somatic Recovery",
    },
    {
      title: "Free Diver Mechanics",
      description: "Advanced thoracic mobility for peak performance.",
      videoId: "5YJeLYfU6Pk",
      duration: "1:00",
      type: "Technique",
    },
    {
      title: "The Wim Hof Method",
      description: "The foundational breathing technique for somatic science.",
      videoId: "pHZOQ1u7PI4",
      duration: "0:59",
      type: "Guided Session",
    },
    {
      title: "Conscious Connected Breath",
      description: "Demonstration of the continuous breathing loop.",
      videoId: "vcHTkTD1oUc",
      duration: "1:00",
      type: "Therapeutic",
    },
    {
      title: "Group Somatic Flow",
      description: "Group-based conscious connected breathing.",
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
          Breathwork <span className="text-brand-cyan">Experiments</span>
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
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
      </div>
    </section>
  );
}
