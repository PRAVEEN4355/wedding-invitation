import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Download, ExternalLink } from 'lucide-react';
import { WEDDING_DATA } from '../config/weddingData';

interface InvitationLightboxProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InvitationLightbox: React.FC<InvitationLightboxProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md select-none"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full max-h-[92vh] flex flex-col rounded-3xl bg-temple-dark border-2 border-gold shadow-[0_0_50px_rgba(196,154,71,0.5)] overflow-hidden"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 bg-temple-deep border-b border-gold/40">
              <div>
                <h3 className="font-decorative text-lg sm:text-xl text-gold-light">
                  Original Wedding Invitation
                </h3>
                <p className="text-xs text-ivory/70 font-sans">
                  Chi. P. Praveen & Chi. Sou. A. Lakshmi Prasanna
                </p>
              </div>

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-black/40 hover:bg-gold/20 text-gold-light hover:text-white border border-gold/40 flex items-center justify-center transition-all cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image Preview Container */}
            <div className="relative flex-1 overflow-auto p-4 flex items-center justify-center bg-stone-950/80">
              <img
                src={WEDDING_DATA.venue.invitationImagePath}
                alt="Original Wedding Invitation Card - Praveen & Lakshmi Prasanna"
                className="max-h-[70vh] w-auto object-contain rounded-xl shadow-2xl border border-gold/30"
              />
            </div>

            {/* Modal Footer with Actions */}
            <div className="p-4 bg-temple-deep/90 border-t border-gold/30 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-ivory/70 font-serif italic hidden sm:inline-block">
                Preserved authentic wedding invitation
              </span>

              <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
                <a
                  href={WEDDING_DATA.venue.invitationImagePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-gold/40 text-gold-light font-sans font-semibold transition-all flex items-center space-x-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Full Image</span>
                </a>

                <a
                  href={WEDDING_DATA.venue.invitationImagePath}
                  download="Praveen_LakshmiPrasanna_Wedding_Invitation.png"
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-gold-light via-gold to-gold-dark text-temple-dark font-sans font-bold transition-all shadow-md flex items-center space-x-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Card</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

