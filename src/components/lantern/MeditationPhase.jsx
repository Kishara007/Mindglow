'use client';

/* ============================================================
   MeditationPhase.jsx — Core Meditation Experience
   
   This is the heart of the app. It manages the 3 phases:
   1. INPUT:      User types their stressful thought
   2. MEDITATION: 60-second shrinking star with calming phrases
   3. RESOLUTION: Final message + restart option
   
   GSAP Timelines:
   - Track 1: Star shrink (scale 1 → 0 over 60s, linear)
   - Track 2: Sequential calming phrases with fade in/hold/fade out
   
   Anti-Gravity:
   - Continuous sine-wave translation on X/Y axes
   - Creates organic floating/bobbing motion
   ============================================================ */

import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import gsap from 'gsap';
import { getTranslation } from './translations';

/* ============================================================
   Phrase timing config — timestamps for each calming phrase.
   The actual text comes from the translations module based
   on the user's selected language.
   ============================================================ */
const PHRASE_TIMINGS = [
  { startAt: 0, duration: 8 },
  { startAt: 9, duration: 8 },
  { startAt: 18, duration: 8 },
  { startAt: 27, duration: 8 },
  { startAt: 36, duration: 8 },
  { startAt: 45, duration: 7 },
  { startAt: 53, duration: 7 },
];

/* ============================================================
   MEDITATION_DURATION — Total meditation time in seconds
   ============================================================ */
const MEDITATION_DURATION = 60;

/* ============================================================
   MeditationPhase Component
   
   @param {string}   phase       - Current phase ('input' | 'meditation' | 'resolution')
   @param {function} onPhaseChange - Callback to update phase in parent
   @param {string}   lang        - Current language code (e.g., 'en', 'hi', 'ar')
   ============================================================ */
export default function MeditationPhase({ phase, onPhaseChange, lang = 'en', thought, setThought }) {
  // Get all translated strings for the current language
  const t = useMemo(() => getTranslation(lang), [lang]);
  
  // Refs for DOM elements that GSAP will animate
  const starRef = useRef(null);           // The central glowing star
  const starWrapperRef = useRef(null);     // Wrapper for anti-gravity float
  const inputRef = useRef(null);           // Input field
  const promptRef = useRef(null);          // "What is bothering you?" label
  const submitBtnRef = useRef(null);       // Done button
  const enterHintRef = useRef(null);       // "Press enter" hint
  const phraseRef = useRef(null);          // Calming phrase text
  const resolutionRef = useRef(null);      // Final message
  const restartBtnRef = useRef(null);      // Restart button
  const supportRef = useRef(null);         // Support message and link
  const progressRef = useRef(null);        // Timer ring SVG circle
  const audioCtxRef = useRef(null);        // Web Audio API context for typing sounds
  
  // GSAP timeline refs
  const mainTimelineRef = useRef(null);    // Master 60s timeline
  const floatTimelineRef = useRef(null);   // Anti-gravity float loop

  /* ============================================================
     Anti-Gravity Float Effect
     
     Creates a continuous floating motion using GSAP's sine ease.
     The star gently bobs up/down and sways left/right,
     simulating zero-gravity weightlessness.
   ============================================================ */
  const startAntiGravityFloat = useCallback(() => {
    if (!starWrapperRef.current) return;

    // Kill any existing float animation
    if (floatTimelineRef.current) {
      floatTimelineRef.current.kill();
    }

    // Create an infinite timeline for the floating effect
    const floatTl = gsap.timeline({ repeat: -1, yoyo: true });

    floatTl
      // Primary vertical bob — slow, dreamy sine wave
      .to(starWrapperRef.current, {
        y: -12,                    // Float 12px upward
        duration: 4,               // 4 seconds per bob
        ease: 'sine.inOut',        // Smooth sine easing
      })
      .to(starWrapperRef.current, {
        y: 8,                      // Float back down
        duration: 3.5,
        ease: 'sine.inOut',
      })
      .to(starWrapperRef.current, {
        y: -5,                     // Smaller bob
        duration: 3,
        ease: 'sine.inOut',
      });

    // Separate X-axis sway on a different timeline for organic motion
    // Different durations prevent predictable patterns
    gsap.to(starWrapperRef.current, {
      x: 6,
      duration: 5,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    });

    // Subtle rotation adds to the floating feel
    gsap.to(starWrapperRef.current, {
      rotation: 1.5,
      duration: 7,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    });

    floatTimelineRef.current = floatTl;
  }, []);



  /* ============================================================
     Handle Thought Submission
     
     Triggered when user presses Enter or clicks Done.
     Transitions from INPUT phase to MEDITATION phase.
   ============================================================ */
  const handleSubmit = useCallback(() => {
    if (!thought.trim()) return;
    
    // Fade out UI elements (prompt, button, hint)
    const tl = gsap.timeline({
      onComplete: () => {
        onPhaseChange('meditation');
      },
    });

    tl.to([promptRef.current, submitBtnRef.current, enterHintRef.current], {
      opacity: 0,
      y: -10,
      duration: 0.4,
      ease: 'power2.in',
      stagger: 0.08,
    })
    // Animate text being absorbed into the lantern
    .to(inputRef.current, {
      scale: 0.2,
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power3.in',
    }, '-=0.2');
  }, [thought, onPhaseChange]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  }, [handleSubmit]);

  /* ============================================================
     Typing Sound Effect
     
     Generates a soft, subtle tap sound using the Web Audio API
     to provide engaging auditory feedback while typing.
   ============================================================ */
  const playTypingSound = useCallback(() => {
    try {
      if (!audioCtxRef.current) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          audioCtxRef.current = new AudioContext();
        }
      }
      const ctx = audioCtxRef.current;
      if (!ctx) return;
      
      // Resume context if suspended (browser autoplay policy)
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Create nodes
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      // Configure a soft, woody "thock" sound
      // Use triangle or sine for softer sound, square for clicky
      osc.type = 'sine';
      
      // Randomize pitch slightly for natural feel
      const baseFreq = 400 + (Math.random() * 50 - 25);
      osc.frequency.setValueAtTime(baseFreq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(baseFreq / 2, ctx.currentTime + 0.05);

      // Shaping the sound envelope (very short attack, quick decay)
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.15, ctx.currentTime + 0.005);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

      // Optional: Add a lowpass filter to muffle it slightly
      filter.type = 'lowpass';
      filter.frequency.value = 1500;

      // Connect graph
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      // Play and cleanup
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.05);
    } catch (err) {
      // Ignore errors if audio context is not supported or fails
      console.warn("Typing sound failed:", err);
    }
  }, []);

  /* ============================================================
     MEDITATION PHASE — Main 60-Second GSAP Timeline
     
     This effect runs when phase transitions to 'meditation'.
     It orchestrates:
     1. Star shrink from scale(1) to scale(0) over 60s
     2. Sequential calming phrase animations
     3. Timer ring progress
     4. Anti-gravity float effect
     5. Sparkle particles
   ============================================================ */
  useEffect(() => {
    if (phase !== 'meditation') return;

    // Start the floating effect immediately
    startAntiGravityFloat();

    /* ---- Build the master timeline ---- */
    const masterTl = gsap.timeline({
      onComplete: () => {
        // Meditation complete → transition to resolution phase
        // Clean up float effect
        if (floatTimelineRef.current) floatTimelineRef.current.kill();
        gsap.killTweensOf(starWrapperRef.current);
        onPhaseChange('resolution');
      },
    });

    /* ---- Track 1: Star Shrink ---- */
    // Scale the entire star from 1 → 0 over the full meditation duration
    // Uses power3.out ease so it shrinks quickly initially (becoming a "speck" by 27s)
    // and then very slowly vanishes over the remaining time.
    masterTl.to(starRef.current, {
      scale: 0,
      duration: MEDITATION_DURATION,
      ease: 'power3.out',
    }, 0); // Start at time 0

    /* ---- Track 1b: Star opacity fade near the end ---- */
    // Fade the star's opacity as it gets very small (last 10 seconds)
    masterTl.to(starRef.current, {
      opacity: 0,
      duration: 10,
      ease: 'power2.in',
    }, MEDITATION_DURATION - 10); // Start 10s before end

    /* ---- Track 2: Calming Phrases (translated) ---- */
    // Each phrase fades in, holds, then fades out
    // Phrase text comes from the translations module
    PHRASE_TIMINGS.forEach(({ startAt, duration }, index) => {
      const phraseText = t.phrases[index] || '';
      const fadeInDur = 1.5;   // Time to fade in
      const fadeOutDur = 1.5;  // Time to fade out
      const holdDur = duration - fadeInDur - fadeOutDur; // Time visible

      // Fade in the phrase
      masterTl.to(phraseRef.current, {
        opacity: 1,
        duration: fadeInDur,
        ease: 'power2.out',
        onStart: () => {
          // Set the translated text content when this phrase starts
          if (phraseRef.current) {
            phraseRef.current.textContent = phraseText;
          }
        },
      }, startAt);

      // Fade out the phrase after holding
      masterTl.to(phraseRef.current, {
        opacity: 0,
        duration: fadeOutDur,
        ease: 'power2.in',
      }, startAt + fadeInDur + holdDur);
    });



    mainTimelineRef.current = masterTl;

    // Cleanup when this effect is torn down
    return () => {
      if (mainTimelineRef.current) {
        mainTimelineRef.current.kill();
      }
      if (floatTimelineRef.current) {
        floatTimelineRef.current.kill();
      }
      gsap.killTweensOf(starWrapperRef.current);
    };
  }, [phase, onPhaseChange, startAntiGravityFloat, t]);

  /* ============================================================
     RESOLUTION PHASE — Final message fade-in
     
     After meditation completes, show the resolution message
     and restart button with elegant fade-in animations.
   ============================================================ */
  useEffect(() => {
    if (phase !== 'resolution') return;

    const tl = gsap.timeline();

    tl.to(resolutionRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: 'power2.out',
    })
    .to(restartBtnRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
    }, '-=0.5')
    .to(supportRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: 'power2.out',
    }, '-=0.5');
  }, [phase]);

  /* ============================================================
     INPUT PHASE — Entrance animation
     
     Fade in the prompt, star, input, and button when the
     input phase starts (initial load or after restart).
   ============================================================ */
  useEffect(() => {
    if (phase !== 'input') return;

    // Reset all elements to initial state
    gsap.set([promptRef.current], { opacity: 0, y: 15 });
    gsap.set(starRef.current, { scale: 1, opacity: 1 });
    gsap.set(starWrapperRef.current, { x: 0, y: 0, rotation: 0 });
    if (inputRef.current) gsap.set(inputRef.current, { opacity: 0 });
    gsap.set([submitBtnRef.current, enterHintRef.current], { opacity: 0, y: 10 });
    if (resolutionRef.current) gsap.set(resolutionRef.current, { opacity: 0, y: 20 });
    if (restartBtnRef.current) gsap.set(restartBtnRef.current, { opacity: 0, y: 20 });
    if (supportRef.current) gsap.set(supportRef.current, { opacity: 0, y: 20 });

    // Entrance animation timeline
    const entranceTl = gsap.timeline();

    entranceTl
      .to(promptRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
      })
      .to(inputRef.current, {
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
      }, '-=0.3')
      .to([submitBtnRef.current, enterHintRef.current], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.15,
      }, '-=0.3');

    // Start a gentle idle float for the star even during input phase
    startAntiGravityFloat();

    return () => {
      if (floatTimelineRef.current) {
        floatTimelineRef.current.kill();
      }
      gsap.killTweensOf(starWrapperRef.current);
    };
  }, [phase, startAntiGravityFloat]);

  /* ============================================================
     Handle Restart — Return to input phase
   ============================================================ */
  const handleRestart = useCallback(() => {
    setThought('');
    onPhaseChange('input');
  }, [onPhaseChange]);

  /* ============================================================
     Render — Conditional rendering based on current phase
   ============================================================ */
  return (
    <div className="ui-layer no-select">
      {/* ---- INPUT & MEDITATION PHASES ---- */}
      {phase !== 'resolution' && (
        <>
          {/* Prompt label above the star */}
          <p ref={promptRef} className="prompt-label" style={{ opacity: 0 }}>
            {t.prompt}
          </p>

          {/* Anti-gravity wrapper — GSAP animates this for float */}
          <div ref={starWrapperRef} style={{ position: 'relative' }}>
            {/* The Central Container — 3D WebGL Star renders behind this */}
            <div ref={starRef} className="central-container">
              {/* Input field — visible during input phase */}
              {phase === 'input' && (
                <textarea
                  ref={inputRef}
                  className="thought-input"
                  placeholder={t.placeholder}
                  value={thought}
                  onChange={(e) => {
                    setThought(e.target.value);
                    playTypingSound();
                  }}
                  onKeyDown={handleKeyDown}
                  maxLength={200}
                  rows={4}
                  autoFocus
                  id="thought-input-field"
                  style={{ opacity: 0, resize: 'none', overflow: 'hidden' }}
                />
              )}
            </div>
          </div>

          {/* Submit button — visible during input phase */}
          {phase === 'input' && (
            <div style={{ position: 'absolute', bottom: '12%', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
              <button
                ref={submitBtnRef}
                className="submit-btn"
                onClick={handleSubmit}
                id="submit-thought-btn"
                style={{ opacity: 0, marginTop: 0 }}
              >
                {t.done}
              </button>
              <span ref={enterHintRef} className="enter-hint" style={{ opacity: 0 }}>
                {t.enterHint}
              </span>
            </div>
          )}
        </>
      )}

      {/* Calming phrases — positioned at bottom, GSAP controls opacity */}
      {phase === 'meditation' && (
        <div ref={phraseRef} className="calming-phrase" />
      )}

      {/* ---- RESOLUTION PHASE ---- */}
      {phase === 'resolution' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1
            ref={resolutionRef}
            className="resolution-message"
            style={{ opacity: 0, transform: 'translateY(20px)' }}
          >
            {t.resolution}
          </h1>
          <button
            ref={restartBtnRef}
            className="restart-btn"
            onClick={handleRestart}
            id="restart-btn"
            style={{ opacity: 0, transform: 'translateY(20px)' }}
          >
            {t.restart}
          </button>
          
          <div 
            ref={supportRef}
            className="support-container"
            style={{ opacity: 0, transform: 'translateY(20px)' }}
          >
            <p className="support-message">
              I hope this brought you a moment of peace. If you'd like to support my work, a virtual coffee is deeply appreciated.
            </p>
            <a 
              href="https://buymeacoffee.com/kisharadilz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="support-link"
            >
              ☕ Buy me a coffee
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
