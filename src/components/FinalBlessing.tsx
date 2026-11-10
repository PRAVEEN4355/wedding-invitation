import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DATA } from '../config/weddingData';
import { createWhatsAppShareUrl } from '../utils/calendar';
import { FlowerGarland, MangoLeafToran, KolamPattern, GoldCornerAccents } from './common/DecorativeOrnaments';
import { Share2, Heart, Check, Copy } from 'lucide-react';
import confetti from 'canvas-confetti';

export const FinalBlessing: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleShareWhatsApp = () => {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#FFD700', '#F5CE36', '#C49A47', '#FF8C00', '#681C32']
    });
    window.open(createWhatsAppShareUrl(), '_blank');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer className="relative py-24 px-4 sm:px-6 bg-gradient-to-b from-[#F5ECE0] via-[#FAF4EA] to-[#FFFDF7] text-[#3D141F] overflow-hidden flex flex-col items-center justify-between border-t border-[#C49A47]/30">
      <KolamPattern opacity="opacity-15" />

      {/* Top Garland */}
      <div className="w-full relative z-20 flex flex-col items-center mb-8">
        <MangoLeafToran />
        <FlowerGarland className="opacity-95 -mt-1" />
      </div>

      <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Animated Namaste Mudra Symbol */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="relative mb-6"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#FFF5DA] via-[#F3DB98] to-[#C49A47] p-0.5 shadow-md flex items-center justify-center border-2 border-[#8C6721]">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-4xl sm:text-5xl shadow-inner">
              🙏
            </div>
          </div>
        </motion.div>

        {/* Closing Blessing Card in Light Theme */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative p-6 sm:p-12 rounded-3xl bg-white/95 border-2 border-[#C49A47] shadow-[0_20px_50px_rgba(104,28,50,0.12)] backdrop-blur-md w-full"
        >
          <GoldCornerAccents />

          <p className="font-serif italic text-base sm:text-xl text-[#4A1224] leading-relaxed mb-6 max-w-2xl mx-auto font-medium">
            "With the blessings of our elders and the love of our family and friends, we invite you to be part of our special day."
          </p>

          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#C49A47] to-transparent mx-auto mb-6" />

          {/* Couple Names */}
          <div className="my-6">
            <h3 className="font-rozha text-3xl sm:text-5xl md:text-6xl font-black text-[#681C32] tracking-wider drop-shadow-sm">
              PRAVEEN
            </h3>
            <div className="flex items-center justify-center my-2 text-rose-600">
              <span className="h-px w-10 bg-[#C49A47]" />
              <Heart className="w-5 h-5 mx-3 fill-current text-rose-600 animate-pulse" />
              <span className="h-px w-10 bg-[#C49A47]" />
            </div>
            <h4 className="font-rozha text-2xl sm:text-4xl md:text-5xl font-black text-[#681C32] tracking-wider drop-shadow-sm">
              LAKSHMI PRASANNA
            </h4>
          </div>

          <p className="font-script text-2xl sm:text-3xl text-[#8C5D00] font-bold tracking-wide mt-6">
            "Your presence is our greatest blessing."
          </p>

          <p className="text-xs sm:text-sm font-sans text-[#8C6721] tracking-widest uppercase mt-4 font-bold">
            {WEDDING_DATA.familyMembers.compliments}
          </p>

          {/* Share & Invite Buttons */}
          <div className="mt-8 pt-6 border-t border-[#C49A47]/30 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={handleShareWhatsApp}
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-serif font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              <span>Share on WhatsApp</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-[#FFF5DA] hover:bg-[#FFEEC2] border border-[#C49A47] text-[#681C32] font-serif font-bold text-xs sm:text-sm tracking-wider uppercase transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-xs"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-[#C49A47]" />}
              <span>{copied ? 'Link Copied!' : 'Copy Invitation Link'}</span>
            </button>
          </div>
        </motion.div>

        {/* Footer Credit & Copyright */}
        <div className="mt-12 text-center text-xs text-[#8C6721] font-sans space-y-1 font-medium">
          <p>© 2026 Praveen ❤️ Lakshmi Prasanna Wedding Celebration.</p>
          <p className="text-[11px] text-[#A67C2E]">Crafted with devotion, culture, and eternal love.</p>
        </div>
      </div>
    </footer>
  );
};
