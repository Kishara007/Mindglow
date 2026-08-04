'use client';

/* ============================================================
   LanguageSelector.jsx — Cosmic-Themed Language Picker
   
   A floating dropdown in the top-right corner that lets users
   pick their preferred language. Styled to match the deep-space
   aesthetic with glassmorphism and glow effects.
   ============================================================ */

import { useState, useRef, useEffect, useCallback } from 'react';
import { getLanguageCodes, getLanguageLabel } from './translations';

/* ============================================================
   Globe SVG Icon
   ============================================================ */
function GlobeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" />
    </svg>
  );
}

/* ============================================================
   LanguageSelector Component
   
   @param {string}   currentLang - Currently selected language code
   @param {function} onLangChange - Callback when language changes
   @param {boolean}  disabled    - Disable during meditation
   ============================================================ */
export default function LanguageSelector({ currentLang, onLangChange, disabled = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef(null);

  const languages = getLanguageCodes();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  const handleSelect = useCallback((code) => {
    onLangChange(code);
    setIsOpen(false);
    setSearchQuery('');
  }, [onLangChange]);

  const toggleOpen = useCallback(() => {
    if (!disabled) setIsOpen((prev) => !prev);
    if (isOpen) setSearchQuery(''); // reset search when closing
  }, [disabled, isOpen]);

  const filteredLanguages = languages.filter((code) =>
    getLanguageLabel(code).toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div ref={dropdownRef} style={styles.container}>
      {/* Trigger Button — shows globe icon + current language */}
      <button
        id="language-selector-btn"
        onClick={toggleOpen}
        style={{
          ...styles.trigger,
          ...(disabled ? styles.triggerDisabled : {}),
          ...(isOpen ? styles.triggerActive : {}),
        }}
        aria-label="Select language"
        aria-expanded={isOpen}
        disabled={disabled}
      >
        <GlobeIcon />
        <span style={styles.currentLang}>{getLanguageLabel(currentLang)}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          style={{
            transition: 'transform 0.3s ease',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div style={styles.dropdown}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={styles.searchInput}
            onClick={(e) => e.stopPropagation()}
            autoFocus
          />
          <div style={styles.optionsContainer}>
            {filteredLanguages.length === 0 ? (
              <div style={styles.noResults}>No matches found</div>
            ) : (
              filteredLanguages.map((code) => (
                <button
                  key={code}
                  onClick={() => handleSelect(code)}
                  style={{
                    ...styles.option,
                    ...(code === currentLang ? styles.optionActive : {}),
                  }}
                  onMouseEnter={(e) => {
                    if (code !== currentLang) {
                      e.currentTarget.style.background = 'rgba(183, 148, 246, 0.1)';
                      e.currentTarget.style.color = '#e8e0ff';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (code !== currentLang) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = 'rgba(167, 139, 250, 0.7)';
                    }
                  }}
                >
                  {getLanguageLabel(code)}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* ============================================================
   Inline Styles — Cosmic glassmorphism design
   Using inline styles to keep component self-contained
   ============================================================ */
const styles = {
  container: {
    position: 'fixed',
    top: '1.5rem',
    right: '1.5rem',
    zIndex: 50,
    pointerEvents: 'auto',
  },

  trigger: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    background: 'rgba(10, 5, 32, 0.6)',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'rgba(183, 148, 246, 0.2)',
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
  },

  triggerActive: {
    borderColor: 'rgba(183, 148, 246, 0.4)',
    boxShadow: '0 0 15px rgba(183, 148, 246, 0.15)',
    color: '#e8e0ff',
  },

  triggerDisabled: {
    opacity: 0.4,
    cursor: 'not-allowed',
  },

  currentLang: {
    minWidth: '60px',
    textAlign: 'center',
  },

  dropdown: {
    position: 'absolute',
    top: 'calc(100% + 0.5rem)',
    right: 0,
    width: '200px',
    background: 'rgba(10, 5, 32, 0.92)',
    border: '1px solid rgba(183, 148, 246, 0.15)',
    borderRadius: '12px',
    padding: '0.4rem',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 20px rgba(124, 58, 237, 0.1)',
    animation: 'fadeInDropdown 0.2s ease-out',
  },

  searchInput: {
    width: '100%',
    padding: '0.5rem 0.8rem',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(183, 148, 246, 0.2)',
    borderRadius: '8px',
    color: '#e8e0ff',
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.8rem',
    outline: 'none',
    marginBottom: '0.4rem',
  },

  optionsContainer: {
    maxHeight: '260px',
    overflowY: 'auto',
  },

  noResults: {
    padding: '0.5rem 0.8rem',
    color: 'rgba(167, 139, 250, 0.5)',
    fontSize: '0.8rem',
    textAlign: 'center',
    fontStyle: 'italic',
  },

  option: {
    display: 'block',
    width: '100%',
    padding: '0.55rem 0.8rem',
    background: 'transparent',
    border: 'none',
    borderRadius: '8px',
    color: 'rgba(167, 139, 250, 0.7)',
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.82rem',
    fontWeight: 400,
    textAlign: 'left',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },

  optionActive: {
    background: 'rgba(124, 58, 237, 0.2)',
    color: '#e8e0ff',
    fontWeight: 500,
  },
};
