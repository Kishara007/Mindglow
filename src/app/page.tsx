"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Sparkles, Menu, X } from "lucide-react";
import Link from "next/link";
import SupportModal from "../components/SupportModal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HERO_IMAGE = "https://res.cloudinary.com/dpx6w78bt/image/upload/f_auto/q_auto/v1785754353/improve_same_image_qulity_2K_202608031542_uisrsf.jpg";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const thresholdTextRef = useRef<HTMLDivElement>(null);
  const curatedRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLElement>(null);
  const descentRef = useRef<HTMLElement>(null);

  const [isHoveringSession, setIsHoveringSession] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  const heroBgRef = useRef<HTMLDivElement>(null);
  const heroBgContainerRef = useRef<HTMLDivElement>(null);
  const mindTextRef = useRef<HTMLSpanElement>(null);
  const glowTextRef = useRef<HTMLSpanElement>(null);
  const subheadRef = useRef<HTMLDivElement>(null);
  const supportNavRef = useRef<HTMLButtonElement>(null);



  // GSAP Creative Translation & Ambient Drift Pan Effect for Background Changes
  useEffect(() => {
    if (heroBgRef.current) {
      gsap.killTweensOf(heroBgRef.current);
      const tl = gsap.timeline();

      // Creative Entrance: Spatial Translation + Scale Bleed + Blur Reveal
      tl.fromTo(
        heroBgRef.current,
        {
          opacity: 0,
          scale: 1.22,
          x: 20,
          y: -10,
          filter: "blur(10px)",
        },
        {
          opacity: 0.85,
          scale: 1.10,
          x: 0,
          y: 0,
          filter: "blur(0px)",
          duration: 2.5,
          ease: "power3.out",
        }
      );

      // Continuous Slow Ambient Drift Pan (Ken Burns style)
      tl.to(
        heroBgRef.current,
        {
          x: -18,
          y: 10,
          scale: 1.15,
          duration: 12.2,
          ease: "none",
        },
        "-=0.5"
      );
    }
  }, []);

  useGSAP(
    () => {
      // Scroll indicator pulse
      gsap.to(scrollIndicatorRef.current, {
        y: 8,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Hero Scroll Animations (Parallax / Split text / Zoom)
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#section-hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.5, // Added 1.5s smoothing for a very silky scroll response
        },
      });

      heroTl
        .to(mindTextRef.current, { x: "-40vw", opacity: 0, ease: "none" }, 0)
        .to(glowTextRef.current, { x: "40vw", opacity: 0, ease: "none" }, 0)
        .to(subheadRef.current, { scale: 1.5, opacity: 0, ease: "none" }, 0)
        .to(heroBgContainerRef.current, { scale: 1.4, ease: "none" }, 0);

      // Fade out support button smoothly after sticking briefly
      gsap.to(supportNavRef.current, {
        y: -15,
        opacity: 0,
        pointerEvents: "none",
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#section-hero",
          start: "top+50 top", // Waits for 50px of scroll before starting to fade
          end: "+=150", // Completes fade over the next 150px
          scrub: true,
        },
      });



      // Threshold Text entrance animation
      gsap.fromTo(
        thresholdTextRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#section-threshold",
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Curated section stagger
      gsap.fromTo(
        ".curated-item",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: curatedRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Gallery section entrance
      gsap.fromTo(
        ".gallery-item",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: galleryRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Descent section entrance
      gsap.fromTo(
        ".descent-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: descentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <main ref={containerRef} className="relative w-full bg-[#f0efea] text-black selection:bg-black/10 selection:text-black overflow-hidden">
      
      <SupportModal isOpen={isSupportOpen} onClose={() => setIsSupportOpen(false)} />

      {/* FULLSCREEN NAVIGATION OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[#F5F5F0] flex flex-col justify-center items-center px-8 sm:px-12"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 sm:top-12 sm:right-12 p-4 rounded-full bg-black/5 hover:bg-black/10 transition-colors duration-300 cursor-pointer"
              aria-label="Close Menu"
            >
              <X size={24} className="text-black" />
            </button>

            {/* Menu Links */}
            <nav className="flex flex-col gap-6 sm:gap-10 w-full max-w-4xl">
              {[
                { num: "01", title: "Threshold", id: "section-threshold" },
                { num: "02", title: "Gallery", id: "section-gallery" },
                { num: "03", title: "Philosophy", id: "section-descent" },
                { num: "04", title: "Support", id: "support" },
              ].map((item, index) => (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group cursor-pointer flex items-baseline gap-4 sm:gap-8 border-b border-black/10 pb-4 sm:pb-6"
                  onClick={() => {
                    setIsMenuOpen(false);
                    if (item.id !== "support") {
                      setTimeout(() => {
                        document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                      }, 800);
                    } else {
                      setTimeout(() => setIsSupportOpen(true), 800);
                    }
                  }}
                >
                  <span className="font-sans text-[10px] sm:text-sm uppercase tracking-[0.2em] text-black/40 font-bold group-hover:text-black transition-colors duration-500">
                    {item.num}
                  </span>
                  <span className="font-serif text-[clamp(2.5rem,8vw,6rem)] leading-none text-black/80 group-hover:text-black group-hover:italic transition-all duration-500 origin-left">
                    {item.title}
                  </span>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FIXED GLOBAL NAVIGATION */}
      <nav className="fixed top-0 left-0 w-full p-6 sm:p-10 flex justify-end items-center text-[14px] uppercase tracking-[0.1em] font-sans z-40 text-black font-bold pointer-events-none">
        <div className="flex items-center gap-4 sm:gap-6 pointer-events-auto">
          <button 
            ref={supportNavRef} 
            onClick={() => setIsSupportOpen(true)} 
            className="hidden sm:inline-flex py-2.5 px-6 rounded-full bg-white/95 backdrop-blur-md border border-black/10 hover:bg-black hover:text-white hover:border-black hover:shadow-lg transition-all duration-300 min-h-[44px] items-center shadow-sm"
          >
            <span>Support</span>
          </button>
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="p-3 sm:py-2.5 sm:px-7 rounded-full bg-black text-white border border-white/20 hover:bg-black/80 hover:shadow-lg transition-all duration-300 min-h-[44px] flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.15)] gap-2 cursor-pointer aspect-square sm:aspect-auto"
          >
            <span className="hidden sm:inline">Menu</span>
            <Menu size={16} className="sm:hidden" />
          </button>
        </div>
      </nav>

      {/* SECTION 01: THE ETHEREAL HERO */}
      <section id="section-hero" className="relative w-full h-[100svh] flex flex-col items-center justify-start pt-[20vh] sm:pt-[15vh] pb-12 px-6 sm:px-12 overflow-hidden">
        {/* GSAP Animated Static Background */}
        <div ref={heroBgContainerRef} className="absolute inset-0 z-0 pointer-events-none overflow-hidden origin-center">
          <div
            ref={heroBgRef}
            className="absolute -inset-10 bg-cover bg-bottom scale-[1.15]"
            style={{
              backgroundImage: `url(${HERO_IMAGE})`,
            }}
          />

          {/* Scrim Overlay for Contrast: Subtle dark gradient to ensure text readability against bright backgrounds */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
        </div>



        {/* Main Head Text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="font-serif text-[clamp(3rem,9vw,7.5rem)] leading-[0.95] text-center text-black z-10 tracking-tight drop-shadow-[0_8px_30px_rgba(255,255,255,1)] font-medium flex mb-4"
        >
          <span ref={mindTextRef} className="inline-block">MIND</span>
          <span ref={glowTextRef} className="inline-block">GLOW.</span>
        </motion.h1>

        {/* Subhead inside Pill - Now plain integrated text below title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="z-10 origin-center"
        >
          <div ref={subheadRef}>
            <h2 
              className="font-sans text-[13px] sm:text-[15px] font-black uppercase tracking-[0.3em] text-black"
              style={{ textShadow: "0px 4px 20px rgba(255,255,255,1), 0px 0px 40px rgba(255,255,255,0.9), 0px 0px 10px rgba(255,255,255,1)" }}
            >
              Your Journey to Stillness
            </h2>
          </div>
        </motion.div>

        <button
          onClick={() => {
            document.getElementById("section-threshold")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center cursor-pointer z-20 group"
          style={{ bottom: "calc(3rem + env(safe-area-inset-bottom))" }}
          aria-label="Begin Your Journey"
        >
          <div className="flex items-center gap-2 sm:gap-4 font-sans text-[12px] font-bold uppercase tracking-[0.1em] sm:tracking-[0.14em] text-white bg-black/90 backdrop-blur-lg border-2 border-black px-6 py-3.5 sm:px-9 sm:py-5 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.25)] group-hover:bg-white group-hover:text-black transition-all duration-300">
            <span className="sm:hidden">Begin</span>
            <span className="hidden sm:inline">Begin Your Journey</span>
            <div ref={scrollIndicatorRef}>
              <ArrowDown size={18} strokeWidth={3} className="text-white group-hover:text-black transition-colors duration-300 scale-75 sm:scale-100" />
            </div>
          </div>
        </button>
      </section>

      {/* SECTION 02: THE THRESHOLD */}
      <section
        id="section-threshold"
        className="relative w-full min-h-[80vh] flex flex-col items-center justify-center px-8 sm:px-12 py-24 z-10"
      >

        <div
          ref={thresholdTextRef}
          className="max-w-4xl w-full flex flex-col md:flex-row gap-10 md:gap-16 items-start md:items-end mt-24"
        >
          <h2 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-tight text-black/90 flex-1">
            A quiet place <br /> for a loud mind.
          </h2>
          <div className="flex-1 border-l border-black/15 pl-6 md:pl-10">
            <span className="block font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-black/80 mb-5 font-bold">
              Sanctuary Statement
            </span>
            <p className="font-sans text-[clamp(0.95rem,1.5vw,1.1rem)] leading-relaxed text-black/90 max-w-sm">
              Architectural micro-instruments engineered to dissolve stress,
              pace neural rhythms, and clear cognitive overload.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 03: CURATED OVERVIEW */}
      <section
        className="relative w-full px-8 sm:px-12 py-32 flex flex-col items-center z-10"
        ref={curatedRef}
      >
        <div className="w-full max-w-5xl flex flex-col items-start text-left sm:items-center sm:text-center pt-16">
          <span className="curated-item block font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-black/80 mb-8 font-bold">
            Curated Instruments
          </span>
          <h2 className="curated-item font-serif text-[clamp(2.5rem,5.5vw,5rem)] leading-tight text-black/90 mb-16 tracking-tight">
            Micro-Tools for Mindful Space
          </h2>
          <div className="curated-item flex justify-start sm:justify-end w-full max-w-2xl text-left ml-0 mr-auto sm:ml-auto sm:mr-0 md:mr-24">
            <p className="font-sans text-[clamp(0.95rem,1.5vw,1.1rem)] leading-relaxed text-black/90">
              Zero noise. Uncompromising clarity.{" "}
              <br className="hidden sm:block" /> Engineered for immediate
              psychological decompression.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 04: THE GALLERY */}
      <section id="section-gallery" ref={galleryRef} className="relative w-full px-8 sm:px-12 py-24 flex justify-center z-10">
        <div className="w-full max-w-6xl flex flex-col gap-12">
          {/* Main Feature - 01 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">
            {/* Visual Column */}
            <div className="gallery-item relative w-full aspect-[4/3] sm:aspect-square lg:aspect-[4/5] rounded-xl overflow-hidden flex items-center justify-center p-8 bg-[#E6E4DD]/40 border border-black/[0.03]">
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
              <div className="relative z-10 w-full sm:max-w-[320px] aspect-[4/5] rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.04)] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-40 pointer-events-none" />

                {/* Visual Representation of the Lantern */}
                <motion.div 
                  className="relative w-40 h-52 rounded-[2rem] overflow-hidden border border-white/40 shadow-xl"
                  animate={{
                    y: [-4, 4, -4],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <img 
                    src="https://res.cloudinary.com/dpx6w78bt/image/upload/f_auto/q_auto/v1785765192/Cartoon_animation_style_2K_202608031922_qqjzpc.jpg" 
                    alt="The Lantern"
                    className="w-full h-full object-cover opacity-85 saturate-[0.8]"
                  />
                  {/* Inner shadow overlay to blend it into the glass */}
                  <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(255,255,255,0.6)] pointer-events-none rounded-[2rem]" />
                </motion.div>
              </div>
            </div>

            {/* Text Column */}
            <div className="gallery-item flex flex-col justify-center items-start lg:border-l lg:border-black/10 lg:pl-16">
              <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-black/80 mb-5 font-bold">
                01 / 60-Second Meditation
              </span>
              <h3 className="font-serif text-[clamp(3rem,4.5vw,4rem)] leading-tight text-black/90 mb-6 tracking-tight">
                The Lantern
              </h3>
              <p className="font-sans text-[clamp(1rem,1.2vw,1.1rem)] leading-relaxed text-black/70 mb-12 max-w-md">
                Release your thoughts into a sky lantern and watch them shrink
                into the infinite expanse of space.
              </p>

              <Link
                href="/lantern"
                onMouseEnter={() => setIsHoveringSession(true)}
                onMouseLeave={() => setIsHoveringSession(false)}
                className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-black/90 px-8 py-4 border border-black/30 bg-black/5 rounded-full hover:bg-black hover:text-white transition-colors duration-500 ease-out flex items-center gap-2"
              >
                Enter Session
              </Link>
            </div>
          </div>

          {/* Placeholders 02 & 03 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
            {[2, 3].map((num) => (
              <div
                key={num}
                className="gallery-item border border-black/10 rounded-2xl p-8 sm:p-12 opacity-60 flex flex-col justify-between aspect-[2/1] sm:aspect-auto sm:h-72 hover:opacity-100 transition-opacity duration-500 cursor-default"
              >
                <span className="font-serif text-[2.5rem] text-black/80">
                  0{num}
                </span>
                <div className="font-sans text-[10px] uppercase tracking-[0.2em] text-black text-center font-bold">
                  [ Coming Soon ]
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05: THE DESCENT (Conclusion) */}
      <section id="section-descent" ref={descentRef} className="relative w-full min-h-[80vh] flex flex-col items-center justify-center px-6 sm:px-12 py-32 z-10">

        <div className="w-full max-w-4xl text-center flex flex-col items-center">
          <span className="descent-item block font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-black/70 mb-8 font-bold">
            Philosophy of Minimalism
          </span>
          <h2 className="descent-item font-serif italic text-[clamp(2.2rem,4.5vw,4.5rem)] leading-[1.1] text-black/85 max-w-5xl tracking-tight">
            "In an era of relentless distraction, silence is not the absence of
            sound, but the presence of clarity."
          </h2>
        </div>
      </section>

      {/* GLOBAL FOOTER */}
      <footer className="w-full px-6 sm:px-12 py-8 border-t border-black/10 z-10 relative">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-black/70 font-bold">
              © 2026 Mindglow Studio
            </span>
          </div>
          
          <h2 className="font-serif text-xl tracking-[0.1em] uppercase text-black/90">MINDGLOW.</h2>
          
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-black/70 font-bold">
            Developed by Pixelpie Studio
          </span>
        </div>
      </footer>
    </main>
  );
}
