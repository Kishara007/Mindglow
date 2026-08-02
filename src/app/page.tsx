"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const thresholdLineRef = useRef<HTMLDivElement>(null);
  const thresholdTextRef = useRef<HTMLDivElement>(null);
  const curatedRef = useRef<HTMLDivElement>(null);
  const descentLineRef = useRef<HTMLDivElement>(null);
  
  const [isHoveringSession, setIsHoveringSession] = useState(false);

  useGSAP(() => {
    // Scroll indicator pulse
    gsap.to(scrollIndicatorRef.current, {
      opacity: 0.2,
      y: 5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Threshold Line
    gsap.fromTo(
      thresholdLineRef.current,
      { scaleY: 0, transformOrigin: "top center" },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: "#section-threshold",
          start: "top 80%",
          end: "top 30%",
          scrub: 0.5,
        },
      }
    );

    // Threshold Text scrub opacity
    gsap.fromTo(
      thresholdTextRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: "#section-threshold",
          start: "top 60%",
          end: "center center",
          scrub: 0.5,
        },
      }
    );

    // Curated section stagger
    gsap.fromTo(
      ".curated-item",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: curatedRef.current,
          start: "top 70%",
        },
      }
    );

    // Descent Line
    gsap.fromTo(
      descentLineRef.current,
      { scaleY: 0, transformOrigin: "top center" },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: "#section-descent",
          start: "top 90%",
          end: "center center",
          scrub: true,
        },
      }
    );
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="relative w-full overflow-hidden">
      {/* Subtle background sparkles for premium feel */}
      <div className="absolute top-[30%] right-[10%] opacity-20 hidden md:block">
        <Sparkles size={48} strokeWidth={0.5} />
      </div>
      <div className="absolute bottom-[20%] left-[5%] opacity-20 hidden md:block">
        <Sparkles size={32} strokeWidth={0.5} />
      </div>

      {/* SECTION 01: THE ETHEREAL HERO */}
      <section className="relative w-full h-[100svh] flex flex-col items-center justify-center pt-8 pb-12 px-6 sm:px-12">
        {/* Nav Links */}
        <nav className="absolute top-0 left-0 w-full p-6 sm:p-10 flex justify-between items-center text-[12px] uppercase tracking-[0.2em] font-sans z-10 text-black/70">
          <div className="font-medium">Mindglow.</div>
          <div className="hover:text-black transition-colors cursor-pointer">Support</div>
        </nav>

        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-white rounded-full blur-[100px] opacity-70 pointer-events-none" />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="font-serif text-[clamp(3rem,9vw,7rem)] leading-[1.05] text-center text-black/90 z-10 tracking-tight"
        >
          Sanctuary of Stillness
        </motion.h1>

        <div
          ref={scrollIndicatorRef}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 font-sans text-[10px] uppercase tracking-[0.2em] text-black/50 flex flex-col items-center gap-3"
        >
          <span>Scroll to Enter</span>
          <ArrowDown size={14} strokeWidth={1.5} />
        </div>
      </section>

      {/* SECTION 02: THE THRESHOLD */}
      <section id="section-threshold" className="relative w-full min-h-[80vh] flex flex-col items-center justify-center px-6 sm:px-12 py-24 z-10">
        {/* Drop Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-black/20" ref={thresholdLineRef} />

        <div ref={thresholdTextRef} className="max-w-4xl w-full flex flex-col md:flex-row gap-12 md:gap-24 items-start md:items-end mt-24">
          <h2 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-tight text-black/90 flex-1">
            A quiet place <br /> for a loud mind.
          </h2>
          <div className="flex-1 border-l border-black/15 pl-6 md:pl-10">
            <span className="block font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-black/50 mb-5 font-medium">
              Sanctuary Statement
            </span>
            <p className="font-sans text-[clamp(0.95rem,1.5vw,1.1rem)] leading-relaxed text-black/70 max-w-sm">
              Architectural micro-instruments engineered to dissolve stress, pace neural rhythms, and clear cognitive overload.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 03: CURATED OVERVIEW */}
      <section className="relative w-full px-6 sm:px-12 py-32 flex flex-col items-center z-10" ref={curatedRef}>
        <div className="w-full max-w-5xl flex flex-col items-center text-center">
          <span className="curated-item block font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-black/50 mb-8 font-medium">
            Curated Instruments
          </span>
          <div className="w-[1px] h-16 bg-black/15 mb-8 curated-item" />
          <h2 className="curated-item font-serif text-[clamp(2.5rem,5.5vw,5rem)] leading-tight text-black/90 mb-16 tracking-tight">
            Micro-Tools for Mindful Space
          </h2>
          <div className="curated-item flex justify-end w-full max-w-2xl border-l border-black/15 pl-6 sm:pl-10 text-left ml-auto mr-0 md:mr-24">
            <p className="font-sans text-[clamp(0.95rem,1.5vw,1.1rem)] leading-relaxed text-black/70">
              Zero noise. Uncompromising clarity. <br className="hidden sm:block"/> Engineered for immediate psychological decompression.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 04: THE GALLERY */}
      <section className="relative w-full px-6 sm:px-12 py-24 flex justify-center z-10">
        <div className="w-full max-w-6xl flex flex-col gap-12">
          
          {/* Main Feature - 01 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">
            {/* Visual Column */}
            <div className="relative w-full aspect-[4/3] sm:aspect-square lg:aspect-[4/5] rounded-xl overflow-hidden flex items-center justify-center p-8 bg-[#E6E4DD]/40 border border-black/[0.03]">
              
              {/* Glowing Aura (Reacts to hover) */}
              <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
                animate={{
                  width: isHoveringSession ? "80%" : "60%",
                  height: isHoveringSession ? "80%" : "60%",
                  backgroundColor: isHoveringSession ? "#FFB84D" : "#FFC973",
                  opacity: isHoveringSession ? 0.35 : 0.2,
                  filter: "blur(100px)",
                }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />

              {/* Frosted Glass Container */}
              <div className="relative z-10 w-full max-w-[320px] aspect-[4/5] rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.04)] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-40 pointer-events-none" />
                
                {/* Visual Representation of the Lantern */}
                <div className="w-32 h-40 border border-white/40 rounded-[2rem] backdrop-blur-sm relative flex items-center justify-center bg-white/5 shadow-inner">
                   <motion.div 
                      className="w-16 h-24 bg-[#FFB84D] rounded-full blur-[16px]"
                      animate={{ opacity: [0.5, 0.9, 0.5], scale: [0.95, 1.05, 0.95] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   />
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div className="flex flex-col justify-center items-start lg:border-l lg:border-black/10 lg:pl-16">
              <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-black/50 mb-5 font-medium">
                01 / 60-Second Meditation
              </span>
              <h3 className="font-serif text-[clamp(3rem,4.5vw,4rem)] leading-tight text-black/90 mb-6 tracking-tight">
                The Lantern
              </h3>
              <p className="font-sans text-[clamp(1rem,1.2vw,1.1rem)] leading-relaxed text-black/70 mb-12 max-w-md">
                Release your thoughts into a sky lantern and watch them shrink into the infinite expanse of space. 
              </p>
              
              <button 
                onMouseEnter={() => setIsHoveringSession(true)}
                onMouseLeave={() => setIsHoveringSession(false)}
                className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-black/80 px-8 py-4 border border-black/15 rounded-full hover:bg-black hover:text-white transition-colors duration-500 ease-out flex items-center gap-2"
              >
                [ Enter Session ]
              </button>
            </div>
          </div>

          {/* Placeholders 02 & 03 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
             {[2, 3].map((num) => (
               <div key={num} className="border border-black/10 rounded-2xl p-8 sm:p-12 opacity-60 flex flex-col justify-between aspect-[2/1] sm:aspect-auto sm:h-72 hover:opacity-100 transition-opacity duration-500 cursor-default">
                 <span className="font-serif text-[2.5rem] text-black/30">0{num}</span>
                 <div className="font-sans text-[10px] uppercase tracking-[0.2em] text-black/40 text-center font-medium">
                   [ Coming Soon ]
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 05: THE DESCENT */}
      <section id="section-descent" className="relative w-full min-h-[80vh] flex flex-col justify-end px-6 sm:px-12 pb-8 pt-48 z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-48 bg-black/15" ref={descentLineRef} />
        
        <div className="flex-1 flex flex-col items-center justify-center text-center w-full max-w-5xl mx-auto my-24">
           <span className="block font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-black/50 mb-12 font-medium">
            Philosophy of Minimalism
          </span>
          <h2 className="font-serif italic text-[clamp(2.2rem,4.5vw,4.5rem)] leading-[1.1] text-black/85 max-w-5xl tracking-tight">
            "In an era of relentless distraction, silence is not the absence of sound, but the presence of clarity."
          </h2>
        </div>

        {/* Footer Base */}
        <footer className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 w-full pt-12 border-t border-black/10 text-[10px] uppercase tracking-[0.1em] font-sans text-black/60 items-center">
          <div className="text-center sm:text-left order-3 sm:order-1 font-medium">
            © 2026 Mindglow Studio
          </div>
          <div className="text-center font-serif normal-case italic text-2xl text-black/80 order-1 sm:order-2">
            Mindglow.
          </div>
          <div className="text-center sm:text-right order-2 sm:order-3 font-medium">
            Developed by PixelPie Studio
          </div>
        </footer>
      </section>
    </main>
  );
}
