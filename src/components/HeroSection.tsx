import React from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DATA } from '../config/weddingData';
import { MangoLeafToran, FlowerGarland, KolamPattern, GoldCornerAccents } from './common/DecorativeOrnaments';
import { Calendar, MapPin, Heart, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onScrollToEvents: () => void;
  onScrollToVenue: () => void;
  onOpenInvitationModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onScrollToEvents,
  onScrollToVenue,
  onOpenInvitationModal,
}) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden bg-gradient-to-b from-[#FFFDF7] via-[#FAF4EA] to-[#F5ECE0] text-[#3D141F] pt-20 sm:pt-24 pb-10 px-4 sm:px-6">
      {/* Kolam Pattern for Light Theme */}
      <KolamPattern opacity="opacity-20" />

      {/* Top Thoranam & Garland */}
      <div className="w-full relative z-20 flex flex-col items-center">
        <MangoLeafToran />
        <FlowerGarland className="opacity-95 -mt-1" />
      </div>

      {/* Main Center Content Box */}
      <div className="relative z-20 w-full max-w-4xl my-auto text-center flex flex-col items-center py-6">
        {/* Sacred Invocation Mantra */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-[#FFF5DA] border border-[#C49A47] text-[#681C32] mb-3 shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-[#C49A47] animate-spin" style={{ animationDuration: '8s' }} />
          <span className="font-rozha text-xs sm:text-base tracking-widest font-bold">
            {WEDDING_DATA.couple.blessingInvocation}
          </span>
          <Sparkles className="w-4 h-4 text-[#C49A47] animate-spin" style={{ animationDuration: '8s' }} />
        </motion.div>

        {/* Divine Blessings of Lord Ganesha & Lord Murugan */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center space-x-3 sm:space-x-6 mb-4"
        >
          <div className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#C49A47] shadow-xs">
            <span className="text-lg">🕉️</span>
            <span className="font-serif text-xs font-bold text-[#681C32] tracking-wider">Lord Ganesha</span>
          </div>
          <span className="text-[#C49A47] text-xs font-serif font-black">•</span>
          <div className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#C49A47] shadow-xs">
            <span className="text-lg">🦚</span>
            <span className="font-serif text-xs font-bold text-[#681C32] tracking-wider">Lord Murugan</span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[#6B3A48] text-xs sm:text-sm uppercase tracking-[0.25em] font-sans font-semibold mb-3"
        >
          {WEDDING_DATA.couple.invitationGreeting}
        </motion.p>

        {/* Grand Royal Couple Card in Light Theme with Gold Foil Ornamental Borders */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative w-full max-w-3xl p-6 sm:p-12 rounded-3xl bg-white/90 border-2 border-[#C49A47] shadow-[0_20px_60px_rgba(104,28,50,0.12)] backdrop-blur-md"
        >
          <GoldCornerAccents />

          {/* Groom Name */}
          <div className="flex flex-col items-center mb-1">
            <span className="font-script text-2xl sm:text-3xl text-[#9A6F25] tracking-wide">
              Chi.
            </span>
            <h1 className="font-rozha text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-wider text-[#681C32] drop-shadow-sm">
              PRAVEEN
            </h1>
            <span className="text-[#8C6721] text-xs sm:text-sm font-serif tracking-widest font-semibold mt-1">
              B.Tech.
            </span>
          </div>

          {/* Connecting Sacred Mangalyam Knot & Heart */}
          <div className="flex items-center justify-center my-3 sm:my-5">
            <div className="h-px w-16 sm:w-28 bg-[#C49A47]" />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="mx-4 p-3 rounded-full bg-[#FFF5DA] border-2 border-[#C49A47] shadow-md flex items-center justify-center"
            >
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-rose-600 fill-rose-600" />
            </motion.div>
            <div className="h-px w-16 sm:w-28 bg-[#C49A47]" />
          </div>

          {/* Bride Name */}
          <div className="flex flex-col items-center mt-1">
            <span className="font-script text-2xl sm:text-3xl text-[#9A6F25] tracking-wide">
              Chi. Sou.
            </span>
            <h2 className="font-rozha text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-wider text-[#681C32] drop-shadow-sm">
              LAKSHMI PRASANNA
            </h2>
            <div className="flex items-center space-x-2 mt-1">
              <span className="text-[#6B3A48] text-xs sm:text-sm font-serif italic">
                (Prasanna Lakshmi)
              </span>
              <span className="text-[#C49A47]">•</span>
              <span className="text-[#8C6721] text-xs sm:text-sm font-serif tracking-widest font-semibold">
                B.E.
              </span>
            </div>
          </div>

          {/* Romantic Tagline */}
          <div className="mt-8 pt-6 border-t border-[#C49A47]/40">
            <p className="font-script text-2xl sm:text-4xl text-[#8C5D00] tracking-wide">
              "{WEDDING_DATA.couple.tagline}"
            </p>
          </div>
        </motion.div>

        {/* Date & Venue Badges in Light Theme */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm"
        >
          <div className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white/90 border border-[#C49A47] text-[#4A1224] shadow-sm font-serif font-bold">
            <Calendar className="w-4 h-4 text-[#C49A47]" />
            <span>19 & 20 November 2026</span>
          </div>

          <div className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white/90 border border-[#C49A47] text-[#4A1224] shadow-sm font-serif font-bold">
            <MapPin className="w-4 h-4 text-[#C49A47]" />
            <span>SRL Kalyana Mandapam, Venkatagiri</span>
          </div>
        </motion.div>

        {/* Quick Action Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={onScrollToEvents}
            className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#681C32] to-[#8C2242] text-white font-serif font-bold text-xs sm:text-sm tracking-wider uppercase shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer border border-[#C49A47]"
          >
            Celebration Events
          </button>

          <button
            onClick={onScrollToVenue}
            className="px-7 py-3.5 rounded-full bg-[#FFF5DA] border-2 border-[#C49A47] text-[#681C32] font-serif font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md hover:bg-[#FFEEC2] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Venue & Map QR
          </button>

          <button
            onClick={onOpenInvitationModal}
            className="px-7 py-3.5 rounded-full bg-white border border-[#C49A47] text-[#4A1224] font-serif font-semibold text-xs sm:text-sm tracking-wider hover:border-[#681C32] hover:text-[#681C32] transition-all flex items-center space-x-2 cursor-pointer shadow-sm"
          >
            <span>📜</span>
            <span>View Original Invitation</span>
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-20 flex flex-col items-center mt-4">
        <span className="text-[11px] uppercase tracking-widest text-[#8C6721] font-sans font-semibold mb-1">
          Scroll for Auspicious Details
        </span>
        <div className="w-5 h-8 rounded-full border-2 border-[#C49A47] flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-2.5 bg-[#C49A47] rounded-full"
          />
        </div>
      </div>
    </section>
  );
};
