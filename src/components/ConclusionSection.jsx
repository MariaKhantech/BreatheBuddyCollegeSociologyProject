"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function ConclusionSection({ isDarkMode }) {
  const images = [
    "/video/boy-under-trees.png",
    "/video/kids-on-walk.png",
    "/waterfalls.png",
    "/kids-underwaterfall.JPG",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative py-28 px-10 glass-card overflow-hidden group border-4 border-emerald-950/10 rounded-[4rem] shadow-2xl z-10">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=1200&auto=format&fit=crop"
          alt="Beautiful Forest Background"
          fill
          className="object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-1000"
          sizes="100vw"
        />
        <div
          className={`absolute inset-0 ${
            isDarkMode ? "bg-dark-bg/70" : "bg-light-bg/70"
          } backdrop-blur-[1px]`}
        />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <h2 className="text-5xl sm:text-7xl font-black italic tracking-tighter uppercase leading-[0.9]">
            The <span className="text-brand-pink">Conclusion</span>
          </h2>
          <p
            className={`text-xl leading-relaxed font-medium transition-colors duration-500 ${
              isDarkMode ? "text-white/70" : "text-emerald-950/80"
            }`}
          >
            True intelligence discovers itself in moments of stillness. Like the
            roots of an ancient tree, our AI models embrace deep, intentional
            growth.
          </p>
        </div>

        <div className="flex-1 w-full max-w-xl space-y-8">
          <div className="relative aspect-[4/3] rounded-[4rem] overflow-hidden border-[12px] border-white/20 shadow-[-20px_40px_80px_-20px_rgba(0,0,0,0.4)] group-hover:border-white/40 transition-all duration-700 hover:rotate-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={images[current]}
                  alt={`Personal Slide ${current}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-transparent to-transparent flex items-end p-12 pointer-events-none z-20">
              <p className="text-brand-cyan font-black text-3xl tracking-tighter italic uppercase drop-shadow-2xl">
                Nature is the ultimate AI.
              </p>
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
              {images.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                    idx === current ? "bg-brand-cyan w-4" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`relative aspect-video rounded-[3rem] overflow-hidden border-8 shadow-xl transition-all duration-700 hover:-rotate-1 ${
              isDarkMode ? "border-slate-800" : "border-white"
            }`}
          >
            <video
              src="/video/kid-meditation.MOV"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
