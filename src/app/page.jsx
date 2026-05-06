"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";

import { GoogleGenAI } from "@google/genai";
import NatureEnvironment from "@/components/NatureEnvironment";
import Navbar from "@/components/Navbar";
import ChatInterface from "@/components/ChatInterface";
import RobotVisual from "@/components/RobotVisual";
import Footer from "@/components/Footer";
import AIScientificResults from "@/components/AIScientificResults";
import ThesisMethodology from "@/components/ThesisMethodology";
import AcademicSynthesis from "@/components/AcademicSynthesis";
import BreathworkVideos from "@/components/BreathworkVideos";
import ConclusionSection from "@/components/ConclusionSection";
import BackToTop from "@/components/BackToTopButton";

export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isEnvironmentBright, setIsEnvironmentBright] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [chatMessage, setChatMessage] = useState(
    "Hi there! I'm your AI Breathwork companion.",
  );
  const [breathingStep, setBreathingStep] = useState("none");
  const [timer, setTimer] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [isAiThinking, setIsAiThinking] = useState(false);
  const [userMood, setUserMood] = useState("");
  const [userReflection, setUserReflection] = useState("");
  const [userDetailedSensations, setUserDetailedSensations] = useState("");
  const [reflectionSentiment, setReflectionSentiment] = useState(null);
  const [breathworkSuggestion, setBreathworkSuggestion] = useState(null);

  const [sessionHistory, setSessionHistory] = useState([]);

  const cleanAI = (text) => text.replace(/\*/g, "").replace(/\s+/g, " ").trim();

  useEffect(() => {
    const saved = localStorage.getItem("wellness_history");
    if (saved) setSessionHistory(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("wellness_history", JSON.stringify(sessionHistory));
  }, [sessionHistory]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const speakHi = (customText, onEnd) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();

    const text = customText || "Hi there! I'm your AI wellness companion.";
    setChatMessage(text);
    const utterance = new SpeechSynthesisUtterance(text);

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => {
      setIsSpeaking(false);
      if (onEnd) onEnd();
    };
    utterance.onerror = () => {
      setIsSpeaking(false);
      if (onEnd) onEnd();
    };

    const voices = window.speechSynthesis.getVoices();
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isMobile) {
      // ✅ Desktop — keep exactly as it was, nothing changes
      const preferredVoice =
        voices.find((v) => v.name.includes("Google US English")) ||
        voices.find((v) => v.name.includes("Female")) ||
        voices.find((v) => v.lang.startsWith("en")) ||
        voices[0];
      utterance.voice = preferredVoice;
      utterance.pitch = .5;
      utterance.rate = 2.0;
    } else {
 
      const preferredVoice =
  
        voices.find(
          (v) => v.name.includes("Google") && v.lang.startsWith("en"),
        ) ||
        voices.find((v) => v.lang === "en-US" && v.localService === false) ||
  
        voices.find((v) => v.name === "Samantha") ||
        voices.find((v) => v.name.includes("Karen")) ||
        voices.find((v) => v.name.includes("Moira")) ||
    
        voices.find((v) => v.lang === "en-US") ||
        voices.find((v) => v.lang.startsWith("en")) ||
        voices[0];
      utterance.voice = preferredVoice;

      utterance.pitch = 1.2;
      utterance.rate = 1.0;
    }

    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const loadVoices = () => window.speechSynthesis.getVoices();
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  const startBreathingStep = (step, message) => {
    setBreathingStep(step);
    setTimer(4);
    setTimerActive(false);
    speakHi(message, () => setTimerActive(true));
  };

  const startBreathing = () =>
    startBreathingStep("inhale", "Take a deep breath slowly for four seconds.");

  const resetBreathing = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window)
      window.speechSynthesis.cancel();
    setBreathingStep("none");
    setTimer(0);
    setTimerActive(false);
    setIsSpeaking(false);
    setUserMood("");
    setUserReflection("");
    setUserDetailedSensations("");
    setBreathworkSuggestion(null);
    setReflectionSentiment(null);
    setIsEnvironmentBright(false);
    setChatMessage("Breathing session ended. Ready whenever you are.");
  };

  useEffect(() => {
    let interval;
    if (
      timerActive &&
      timer > 0 &&
      ["inhale", "hold1", "exhale", "hold2"].includes(breathingStep)
    ) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerActive, timer, breathingStep]);

  useEffect(() => {
    if (!timerActive || timer !== 0) return;
    if (breathingStep === "inhale")
      startBreathingStep("hold1", "Now hold for four seconds.");
    else if (breathingStep === "hold1")
      startBreathingStep("exhale", "Exhale slowly for four seconds.");
    else if (breathingStep === "exhale")
      startBreathingStep("hold2", "Hold at the exhale for four seconds.");
    else if (breathingStep === "hold2") {
      setTimerActive(false);
      setBreathingStep("completed");
      const msg =
        "Congratulations! You have completed your first box breathing exercise. How are you feeling now?";
      setChatMessage(msg);
      speakHi(msg);
    }
  }, [timer, timerActive, breathingStep]);

  const handleMoodSubmit = async (mood) => {
    if (!mood.trim()) return;
    setIsAiThinking(true);
    try {
      const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
      if (!apiKey) {
        const text =
          "I'm here with you. Let's find some space together with this breath.";
        setChatMessage(text);
        setBreathingStep("ready");
        speakHi(text);
        return;
      }
      const ai = new GoogleGenAI({ apiKey });
      console.log("Generating AI response with mood:", mood);
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `The user says they are feeling: "${mood}". As an empathetic AI wellness bot, provide a warm, 1-sentence acknowledgement that validates their feeling and gently transitions them to a box breathing exercise. Keep it under 25 words. Be poetic but grounded.`,
      });
      const text =
        response.text || "I hear you. Let's find some space together.";
      setChatMessage(text);
      setBreathingStep("ready");
      speakHi(text);
      setSessionHistory((prev) =>
        [{ mood, date: new Date().toLocaleDateString() }, ...prev].slice(0, 5),
      );
    } catch {
      const fallback =
        "I'm here with you. Let's take a moment to reset your rhythm.";
      setChatMessage(fallback);
      setBreathingStep("ready");
      speakHi(fallback);
    } finally {
      setIsAiThinking(false);
    }
  };

  const handleReflectionSubmit = async (reflection) => {
    console.log("User reflection submitted:", reflection);
    if (!reflection.trim()) return;
    setIsAiThinking(true);
    setUserReflection("");
    try {
      const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
      if (!apiKey) {
        const text =
          "Thank you for sharing. I will be here whenever you need a moment of peace.";
        setChatMessage(text);
        speakHi(text, () => setBreathingStep("none"));
        return;
      }
      const ai = new GoogleGenAI({ apiKey });
      const sentimentResponse = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `The user felt "${userMood}" before breathing. Now they say: "${reflection}". Start with [HAPPY] if positive, [SAD] if not. Under 10 words.`,
      });
      const isPositive = (sentimentResponse.text || "")
        .toUpperCase()
        .includes("[HAPPY]");
      if (isPositive) {
        setReflectionSentiment("positive");
        setIsEnvironmentBright(true);
        const finalResponse = await ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents:
            "The user is feeling good after breathing. Provide a beautiful 1-sentence closing blessing. Under 25 words.",
        });
        // ✅ Clean asterisks before display or speech
        const cleanedText = cleanAI(
          finalResponse.text ||
            "May your peace follow you through the rest of your day.",
        );
        setChatMessage(cleanedText);
        setBreathworkSuggestion(cleanedText);
        speakHi(cleanedText);
      } else {
        setReflectionSentiment("negative");
        const detailMsg =
          "I notice you're still carrying some weight. Could you tell me more about the physical and emotional sensations you're feeling right now?";
        setChatMessage(detailMsg);
        setBreathingStep("detailed_reflection");
        speakHi(detailMsg);
      }
    } catch {
      const fallback = "Thank you for reflecting. I'm here for you.";
      setChatMessage(fallback);
      speakHi(fallback);
    } finally {
      setIsAiThinking(false);
    }
  };

  const handleDetailedReflectionSubmit = async (details) => {
    console.log("User detailed sensations submitted:", details);
    if (!details.trim()) return;
    setIsAiThinking(true);
    setUserDetailedSensations("");
    try {
      const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
      if (!apiKey) return;
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `User felt "${userMood}" before. After breathing: "${userReflection}". Details: "${details}". Suggest a specific breathing technique and 1-sentence encouragement. Under 35 words.`,
      });
    
      const text = cleanAI(
        response.text ||
          "Let's try one more cycle of focus to ground your energy.",
      );
      setChatMessage(text);
      setBreathworkSuggestion(text);
      speakHi(text);
    } catch {
      const fallback =
        "Let's stay in this space a bit longer. Another round of breathing might help.";
      setChatMessage(fallback);
      setBreathworkSuggestion(fallback);
      speakHi(fallback);
    } finally {
      setIsAiThinking(false);
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "bg-dark-bg text-white" : "bg-light-bg text-slate-800"} overflow-x-hidden relative`}
    >
      <svg className="hidden absolute w-0 h-0">
        <defs>
          <filter id="boil-1">
            <feTurbulence
              baseFrequency="0.02"
              numOctaves="2"
              result="noise"
              seed="1"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="2"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
          <filter id="boil-2">
            <feTurbulence
              baseFrequency="0.02"
              numOctaves="2"
              result="noise"
              seed="2"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="2.5"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
          <filter id="boil-3">
            <feTurbulence
              baseFrequency="0.02"
              numOctaves="2"
              result="noise"
              seed="3"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="2"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
          <filter id="boil-4">
            <feTurbulence
              baseFrequency="0.02"
              numOctaves="2"
              result="noise"
              seed="4"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="2.5"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <style>{`
        @keyframes boilAnim {
          0% { filter: url(#boil-1); }
          25% { filter: url(#boil-2); }
          50% { filter: url(#boil-3); }
          75% { filter: url(#boil-4); }
          100% { filter: url(#boil-1); }
        }
        .text-boil {
          display: inline-block;
          animation: boilAnim 0.3s infinite step-end;
        }
      `}</style>

      <NatureEnvironment
        isDarkMode={isDarkMode}
        isBright={isEnvironmentBright}
      />

      <Navbar
        isDarkMode={isDarkMode}
        onToggleDark={() => setIsDarkMode((v) => !v)}
      />

      <main className="relative pt-24 pb-20 px-6 sm:px-12 max-w-7xl mx-auto space-y-40">
        <section className="min-h-[90vh] flex flex-col items-center justify-center pt-10 gap-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 w-full max-w-4xl"
          >
            <h1 className="text-6xl sm:text-8xl font-extrabold leading-[0.95] tracking-tight">
              Breathe <br />
              <span className="text-brand-cyan">Buddy</span>
            </h1>
            <p
              className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mt-6 transition-colors duration-500 ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}
            >
              Hi! My name is
              <span className="text-boil inline-block font-bold text-brand-pink mx-1">
                Maria Khan.
              </span>
              My project explores AI from two different angles. First, I wanted
              to look at how AI could help breathwork facilitators by building a
              prototype called Breathe Buddy. That was actually my original plan
              for the AI added bonus project, but since I couldn&apos;t make it,
              I rolled it into this presentation. Second, I wanted to test if I
              could rely on AI to research and write this entire paper on
              breathwork I hope you enjoy your experience. Remember to click on
              the robot&apos;s{" "}
              <span className="text-brand-pink font-bold underline underline-offset-4 decoration-2">
                heart
              </span>{" "}
              to begin.
            </p>
            <p
              className={`text-sm md:text-base max-w-2xl mx-auto mt-8 font-medium italic transition-colors duration-500 ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}
            >
              * Please note: The Breathe Buddy prototype is an early build and
              the bot may contain bugs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="w-full flex flex-col items-center gap-4 z-20 mb-12 sm:mb-20"
          >
            <span className="text-[10px] font-black tracking-[0.4em] text-brand-pink uppercase mb-2">
              Instructions
            </span>
            <div
              className={`px-8 py-5 rounded-3xl border-2 font-black text-xs uppercase tracking-[0.2em] shadow-2xl ${isDarkMode ? "bg-emerald-950/60 border-emerald-900/40 text-brand-cyan" : "bg-white border-brand-cyan/20 text-emerald-950"}`}
            >
              To try box breathing with this Breathe Buddy, click on the{" "}
              <span className="text-brand-pink underline underline-offset-4 decoration-2">
                heart
              </span>{" "}
              to begin
            </div>
          </motion.div>

          <div className="w-full grid md:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl mx-auto">
            <ChatInterface
              isDarkMode={isDarkMode}
              chatMessage={chatMessage}
              breathingStep={breathingStep}
              timer={timer}
              isSpeaking={isSpeaking}
              isAiThinking={isAiThinking}
              userMood={userMood}
              userReflection={userReflection}
              userDetailedSensations={userDetailedSensations}
              reflectionSentiment={reflectionSentiment}
              breathworkSuggestion={breathworkSuggestion}
              setUserMood={setUserMood}
              setUserReflection={setUserReflection}
              setUserDetailedSensations={setUserDetailedSensations}
              setBreathingStep={setBreathingStep}
              setChatMessage={setChatMessage}
              speakHi={speakHi}
              handleMoodSubmit={handleMoodSubmit}
              handleReflectionSubmit={handleReflectionSubmit}
              handleDetailedReflectionSubmit={handleDetailedReflectionSubmit}
              startBreathing={startBreathing}
              resetBreathing={resetBreathing}
            />
            <RobotVisual
              isDarkMode={isDarkMode}
              isSpeaking={isSpeaking}
              breathingStep={breathingStep}
              setChatMessage={setChatMessage}
              setBreathingStep={setBreathingStep}
              setUserMood={setUserMood}
              setUserReflection={setUserReflection}
              setUserDetailedSensations={setUserDetailedSensations}
              setBreathworkSuggestion={setBreathworkSuggestion}
              setReflectionSentiment={setReflectionSentiment}
              setIsEnvironmentBright={setIsEnvironmentBright}
              speakHi={speakHi}
            />
          </div>
        </section>

        <section className="relative z-10 w-full max-w-4xl mx-auto py-16">
          <div
            className={`glass-card p-10 md:p-14 text-center rounded-[3rem] border-2 ${isDarkMode ? "bg-slate-800/50 border-slate-700" : "bg-white/70 border-brand-cyan/20"}`}
          >
            <h2
              className={`text-3xl md:text-4xl font-black italic tracking-tighter uppercase mb-6 ${isDarkMode ? "text-white" : "text-emerald-950"}`}
            >
              About Breathe Buddy as a{" "}
              <span className="text-brand-pink">Prototype</span>
            </h2>

            <p
              className={`text-lg leading-relaxed mb-8 ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}
            >
              When investigating the potential use of AI in breathwork as a tool
              and within researching it as an overall topic, I found that while
              technology can guide a practice, it has very specific boundaries.
            </p>

            <h3
              className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-emerald-950"}`}
            >
              What is Breathwork?
            </h3>
            <p
              className={`text-lg leading-relaxed mb-6 ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}
            >
              Breathwork is the art of actively and consciously controlling your
              breath to affect your physical and emotional states. While these
              techniques have been used for thousands of years, they are
              increasingly recognized today for their ability to regulate the
              nervous system, expand lung capacity, and facilitate shifts into
              deeper brainwave states such as alpha, theta, and gamma.
            </p>

            <h3
              className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-emerald-950"}`}
            >
              The Breathe Buddy Prototype
            </h3>
            <p
              className={`text-lg leading-relaxed mb-4 ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}
            >
              To investigate the practical applications of AI in this field, I
              developed Breathe Buddy. This prototype explores how automation
              and the Gemini Generative AI can assist with immediate nervous
              system regulation through a responsive process.
            </p>
            <ul
              className={`list-disc list-inside md:list-outside pl-6 mb-6 text-lg leading-relaxed text-left ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}
            >
              <li className="mb-2">
                <strong>Initial Analysis:</strong> At the start, the Gemini API
                analyzes the symptoms described by the user to identify their
                current state.
              </li>
              <li className="mb-2">
                <strong>Active Practice:</strong> The user is then guided
                through a breathing technique like Box Breathing.
              </li>
              <li className="mb-2">
                <strong>Post-Session Evaluation:</strong> After practicing, the
                bot asks the user how they are feeling. If they do not feel
                better, a new prompt triggers with further analysis and
                suggestions driven by AI in the background. If they feel fine,
                it gives them a pleasant message and the webpage turns into a
                sunny atmosphere. Literally...
              </li>
              <li className="mb-2">
                <strong>Adaptive Correction:</strong> The third prompt if the
                user suggested not feeling better after the first breathing
                round, uses AI to analyze the specific feedback and symptoms to
                find a different breathing technique to try based on the
                emotional and physical symptoms described. This is currently a
                conceptual locked feature to illustrate the example of the
                limitations of AI in Breathwork.
              </li>
            </ul>

            <h3
              className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-emerald-950"}`}
            >
              The Reality of AI in Breathwork
            </h3>
            <p
              className={`text-lg leading-relaxed mb-4 ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}
            >
              This research really highlights the difference between a digital
              tool and actual human expertise. A bot like Breathe Buddy is great
              for the logistical side of things including analyzing symptoms,
              keeping track of breath counts, and being available 24/7. However,
              it just cannot replicate the held space that a professional
              facilitator provides, which is crucial for this kind of work.
            </p>
            <p
              className={`text-lg leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}
            >
              Conscious connected Breathwork is often a deep journey into the
              subconscious mind. A human practitioner brings the kind of
              emotional and physical support you need to navigate intense
              sensations or spiritual experiences safely. During my research, I
              found that AI can sometimes be dismissive of those spiritual
              moments or even give out misleading information that can encourage
              the ego mind. At the end of the day, AI is good to assess basic
              regulation, but the depth and safety of a truly transformative
              journey still require a human presence.
            </p>
            <p
              className={`mt-6 text-lg leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}
            >
              So, how about researching Breathwork with AI? Let&apos;s take a
              closer look at the research process and findings in the next
              sections!
            </p>
          </div>
        </section>
        <AIScientificResults isDarkMode={isDarkMode} />
        <ThesisMethodology isDarkMode={isDarkMode} />
        <AcademicSynthesis isDarkMode={isDarkMode} />
        <ConclusionSection isDarkMode={isDarkMode} />
        <BreathworkVideos isDarkMode={isDarkMode} />
        <BackToTop />
      </main>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
