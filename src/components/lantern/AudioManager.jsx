'use client';

/* ============================================================
   AudioManager.jsx — Ambient Audio Controller
   
   Manages meditation audio playback with smooth fade-in/out.
   Features:
   - Mute/unmute toggle in the corner
   - Smooth volume fading using GSAP
   - Auto-plays when meditation phase starts
   - Uses a relaxing ambient audio tone (placeholder URL)
   ============================================================ */

import { useRef, useState, useEffect, useCallback } from 'react';
import gsap from 'gsap';

/* ============================================================
   SVG Icons for Mute/Unmute states
   ============================================================ */
function SpeakerOnIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
    </svg>
  );
}

function SpeakerOffIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  );
}

/* ============================================================
   AudioManager Component
   
   @param {boolean} shouldPlay - Whether audio should be playing
   @param {string}  phase      - Current app phase ('input' | 'meditation' | 'resolution')
   ============================================================ */
export default function AudioManager({ shouldPlay, phase }) {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false); // Default to unmuted
  const [audioReady, setAudioReady] = useState(false);

  // Initialize audio element on mount
  useEffect(() => {
    const audio = new Audio();
    
    // Use a publicly available ambient audio file
    // This is a relaxing ambient space sound
    audio.src = 'https://cdn.pixabay.com/audio/2022/02/23/audio_ea70ad08e3.mp3';
    audio.loop = true;
    audio.volume = 0;
    audio.preload = 'auto';
    
    audio.addEventListener('canplaythrough', () => {
      setAudioReady(true);
    });

    audioRef.current = audio;
    
    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
        audioRef.current = null;
      }
    };
  }, []);

  // Handle play/pause based on phase and mute state
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (shouldPlay && !isMuted) {
      // Attempt to play with a smooth fade-in
      const playPromise = audio.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Smooth fade-in over 2 seconds using GSAP
            gsap.to(audio, {
              volume: 0.35,
              duration: 2,
              ease: 'power2.out',
            });
          })
          .catch((err) => {
            // Autoplay was blocked — user needs to interact first
            console.log('Audio autoplay blocked:', err.message);
          });
      }
    } else if (!shouldPlay || isMuted) {
      // Smooth fade-out, then pause
      gsap.to(audio, {
        volume: 0,
        duration: 1,
        ease: 'power2.in',
        onComplete: () => {
          audio.pause();
        },
      });
    }
  }, [shouldPlay, isMuted]);

  // Reset audio when returning to input phase
  useEffect(() => {
    if (phase === 'input' && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 0;
    }
  }, [phase]);

  // Toggle mute/unmute
  const toggleMute = useCallback(() => {
    setIsMuted((prev) => !prev);
  }, []);

  return (
    <button
      id="audio-toggle-btn"
      className="audio-toggle"
      onClick={toggleMute}
      aria-label={isMuted ? 'Unmute ambient audio' : 'Mute ambient audio'}
      title={isMuted ? 'Unmute' : 'Mute'}
      style={{ pointerEvents: 'auto' }}
    >
      {isMuted ? <SpeakerOffIcon /> : <SpeakerOnIcon />}
    </button>
  );
}
