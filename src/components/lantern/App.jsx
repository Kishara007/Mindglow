/* ============================================================
   App.jsx — Root Application Component
   
   Orchestrates all child components and manages:
   - Phase state machine: 'input' → 'meditation' → 'resolution'
   - Language selection (passed to all children via props)
   
   Components:
   - Starfield:         Three.js deep-space background (Client-only / SSR disabled)
   - MeditationPhase:   Core UI with input, star, and phases
   - AudioManager:      Ambient audio with mute toggle (Client-only / SSR disabled)
   - LanguageSelector:  Multi-language dropdown picker
   ============================================================ */

'use client';

import { useState, useCallback, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import MeditationPhase from './MeditationPhase';
import LanguageSelector from './LanguageSelector';

// Dynamically import Three.js and Audio components with SSR disabled
// to prevent window/canvas hydration mismatch in Next.js App Router
const Starfield = dynamic(() => import('./Starfield'), { ssr: false });
const AudioManager = dynamic(() => import('./AudioManager'), { ssr: false });

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  /* ============================================================
     Phase State Machine
     - 'input':      User types their thought
     - 'meditation': 60-second shrinking star meditation
     - 'resolution': Final message with restart option
   ============================================================ */
  const [phase, setPhase] = useState('input');
  
  /* ============================================================
     User's Thought State
     Lifted here so both MeditationPhase and Starfield can access it.
   ============================================================ */
  const [thought, setThought] = useState('');

  /* ============================================================
     Language State
     Default to English; user can switch via the selector
   ============================================================ */
  const [lang, setLang] = useState('en');

  const handlePhaseChange = useCallback((newPhase) => {
    setPhase(newPhase);
  }, []);

  const handleLangChange = useCallback((newLang) => {
    setLang(newLang);
  }, []);

  return (
    <>
      {/* Animated Background Layer */}
      <div className={`bg-layer-zoom ${phase === 'input' ? 'is-input' : ''}`}>
        <div className="bg-layer-pan" />
      </div>

      {/* Three.js Starfield — Loaded client-side only */}
      {mounted && <Starfield phase={phase} thought={thought} />}

      {/* Main UI Layer — Input, Star, Phrases, Resolution */}
      <MeditationPhase
        phase={phase}
        onPhaseChange={handlePhaseChange}
        lang={lang}
        thought={thought}
        setThought={setThought}
      />

      {/* Back Button — Top-left corner */}
      <Link
        href="/#section-gallery"
        style={{
          position: 'fixed',
          top: '1.5rem',
          left: '1.5rem',
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.5rem 1rem',
          background: 'rgba(10, 5, 32, 0.6)',
          border: '1px solid rgba(183, 148, 246, 0.2)',
          borderRadius: '100px',
          color: '#ffffff',
          textShadow: '0 2px 8px rgba(0, 0, 0, 0.9), 0 0 20px rgba(0, 0, 0, 0.6)',
          fontFamily: "'Outfit', sans-serif",
          fontSize: '0.8rem',
          fontWeight: 400,
          letterSpacing: '0.05em',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          textDecoration: 'none',
          opacity: phase === 'meditation' ? 0.4 : 1,
          pointerEvents: phase === 'meditation' ? 'none' : 'auto',
        }}
        onMouseEnter={(e) => {
          if (phase !== 'meditation') {
            e.currentTarget.style.borderColor = 'rgba(183, 148, 246, 0.4)';
            e.currentTarget.style.boxShadow = '0 0 15px rgba(183, 148, 246, 0.15)';
            e.currentTarget.style.color = '#e8e0ff';
          }
        }}
        onMouseLeave={(e) => {
          if (phase !== 'meditation') {
            e.currentTarget.style.borderColor = 'rgba(183, 148, 246, 0.2)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.color = '#ffffff';
          }
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        <span className="hidden sm:inline">Return</span>
      </Link>

      {/* Language Selector — Top-right corner */}
      <LanguageSelector
        currentLang={lang}
        onLangChange={handleLangChange}
        disabled={phase === 'meditation'}
      />

      {/* Audio Manager — Loaded client-side only */}
      {mounted && (
        <AudioManager
          shouldPlay={phase === 'meditation'}
          phase={phase}
        />
      )}
    </>
  );
}
