import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SupportModal({ isOpen, onClose }: SupportModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-[#F9F9F6] rounded-[1.5rem] shadow-2xl p-8 md:p-10 text-center z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close Support Modal"
              className="absolute top-5 right-5 text-black/40 hover:text-black/80 transition-colors p-1"
            >
              <X size={20} strokeWidth={1.5} />
            </button>

            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-black/40 mb-4 block">
              Community Support
            </span>

            <h2 className="font-serif text-4xl md:text-[2.75rem] leading-none text-[#2C2C28] mb-5 tracking-tight">
              Support Mindglow
            </h2>

            <p className="font-sans text-[13px] md:text-[15px] text-black/50 leading-[1.8] mb-8">
              Mindglow is an ad-free, open-access sanctuary built for mental stillness. If this project brought you a moment of peace, a virtual coffee supports ongoing development.
            </p>

            <a
              href="https://ko-fi.com/kishara"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#242424] hover:bg-black text-[#F9F9F6] font-sans text-[11px] font-bold uppercase tracking-[0.15em] px-8 py-3.5 rounded-full transition-all hover:-translate-y-0.5 shadow-lg shadow-black/10"
            >
              <span className="text-base leading-none">☕</span> Buy me a coffee
            </a>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
