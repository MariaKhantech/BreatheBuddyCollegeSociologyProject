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

  const textStyles = `text-lg md:text-xl leading-relaxed font-medium transition-colors duration-500 ${
    isDarkMode ? "text-white/80" : "text-emerald-950/80"
  }`;

  return (
    <section className="relative py-28 px-6 md:px-10 glass-card overflow-hidden group border-4 border-emerald-950/10 rounded-[4rem] shadow-2xl z-10">
      <div className="absolute inset-0 z-0 rounded-[3.5rem] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=1200&auto=format&fit=crop"
          alt="Beautiful Forest Background"
          fill
          className="object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-1000"
          sizes="100vw"
        />
        <div
          className={`absolute inset-0 ${
            isDarkMode ? "bg-slate-950/80" : "bg-white/80"
          } backdrop-blur-[2px] transition-colors duration-500`}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-24">
        <div className="space-y-12 flex flex-col items-center">
          <h2 className="text-5xl sm:text-7xl font-black italic tracking-tighter uppercase leading-[0.9] text-center">
            The <span className="text-brand-pink">Conclusion</span>
          </h2>

          <div className="w-full max-w-4xl">
            <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[3rem] overflow-hidden border-[8px] border-white/20 shadow-2xl group-hover:border-white/40 transition-all duration-700">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, scale: 1.05 }}
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
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent flex items-end p-8 pointer-events-none z-20">
                <p className="text-brand-cyan font-black text-2xl tracking-tighter italic uppercase drop-shadow-2xl">
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
          </div>

          <p className={`${textStyles} text-center max-w-3xl`}>
            Breathwork is a powerful tool meant to reconnect us with our bodies
            and minds, and this is simply not a landscape that is easy for AI to
            navigate. Being in this field, I have seen how incredibly diverse
            each person&apos;s subconscious is. The way someone navigates a spiritual
            experience or a trauma breakthrough is highly complex. While I found
            that AI can be a helpful tool for generating ideas and finding
            sources, it cannot replace the human touch and intuition required
            for actual breathwork sessions or even deep research. This practice
            is meant to ground us in our bodily senses and what is truly
            important in life. A machine is just not capable of understanding or
            explaining physical sensations the way another human can.
          </p>
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <p className={textStyles}>
              This need for human connection is especially true for children. In
              the video I included, you can see how much benefit kids get from
              meditation and conscious breathing. There is something profound
              about calming the mind and letting the subconscious reveal what
              needs to heal. For a ten-year-old, that might mean finally
              processing a stressful school event that their parents never even
              knew about, allowing them to feel it and move forward safely. How
              could an AI robot ever help a child navigate that kind of
              emotional processing? There is a depth to human connection and
              conversation that a machine can never replace. It can analyze data
              and recognize patterns, and it can certainly mimic empathy, but it
              can never truly feel emotions or understand the human experience.
            </p>
          </div>

          <div className="flex-1 w-full max-w-xl">
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div
            className={`p-10 md:p-14 rounded-[4rem] border-2 transition-all duration-700 ${
              isDarkMode
                ? "bg-emerald-950/30 border-emerald-500/20 shadow-[0_0_50px_-12px_rgba(16,185,129,0.1)]"
                : "bg-emerald-50/60 border-emerald-200/50 shadow-xl shadow-emerald-900/5"
            }`}
          >
            <p className={`${textStyles} text-center max-w-4xl`}>
              This same limitation applies to the academic side of this project.
              Right now, it is just not a good idea to fully rely on AI to write
              a research paper. It requires human oversight. In my
              experience, the AI provided resources that lacked substance,
              linked to some unhelpful websites, and even pulled incorrect data from
              an abstract to build a thesis. I found it frustrating to rely
              entirely on a machine to do the heavy lifting, especially when
              deep understanding is required. That being said, it is still a
              highly valuable tool for cutting down research time and assisting
              with smaller tasks. AI is a product that learns and improves at a
              rate even engineers struggle to keep up with. I have no doubt that
              it will eventually resolve all of the issues I encountered during
              this project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
