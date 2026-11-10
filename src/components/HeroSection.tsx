import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DATA } from '../config/weddingData';
import { FlowerGarland, KolamPattern, GoldCornerAccents } from './common/DecorativeOrnaments';
import { getGuestNameFromUrl } from '../utils/guestManager';
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
  const guestName = useMemo(() => getGuestNameFromUrl(), []);

  return (
    <section id="hero-section" className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden bg-gradient-to-b from-[#FFFDF7] via-[#FAF4EA] to-[#F5ECE0] text-[#3D141F] pt-20 sm:pt-24 pb-10 px-4 sm:px-6">
      {/* Kolam Pattern for Light Theme */}
      <KolamPattern opacity="opacity-20" />

      {/* Top Personalized Guest Welcome Banner & Garland */}
      <div className="w-full relative z-20 flex flex-col items-center">
        {/* Personalized Guest Invitation Banner right at the top */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="my-1.5 px-4 py-1.5 sm:px-7 sm:py-2.5 rounded-full bg-gradient-to-r from-[#FFF5DA] via-[#FFE8B3] to-[#FFF5DA] border-2 border-[#C49A47] text-[#681C32] shadow-md inline-flex items-center space-x-1.5 sm:space-x-2 max-w-[95vw]"
        >
          <span className="text-sm sm:text-lg">🌸</span>
          <span className="font-serif text-[11px] sm:text-sm tracking-wider uppercase font-bold text-[#8C6721] truncate">
            {guestName ? (
              <>
                Special Invitation For: <span className="font-rozha text-[#681C32] font-black text-xs sm:text-base capitalize ml-1">{guestName}</span>
              </>
            ) : (
              <>
                Warmly Welcoming <span className="font-rozha text-[#681C32] font-black text-xs sm:text-base ml-1">You & Your Family</span>
              </>
            )}
          </span>
          <span className="text-sm sm:text-lg">🌸</span>
        </motion.div>

        <FlowerGarland className="opacity-95 -mt-0.5" />
      </div>

      {/* Main Center Content Box */}
      <div className="relative z-20 w-full max-w-2xl my-2 text-center flex flex-col items-center py-2">
        {/* Sacred Invocation Mantra */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#FFF5DA] border border-[#C49A47] text-[#681C32] mb-2.5 shadow-2xs"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C49A47] animate-spin" style={{ animationDuration: '8s' }} />
          <span className="font-rozha text-xs sm:text-sm tracking-widest font-bold">
            {WEDDING_DATA.couple.blessingInvocation}
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#C49A47] animate-spin" style={{ animationDuration: '8s' }} />
        </motion.div>

        {/* Divine Blessings of Lord Ganesha & Lord Murugan with 3D Logos */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center space-x-3 sm:space-x-4 mb-2.5"
        >
          <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/95 border border-[#C49A47] shadow-2xs">
            <img
              src="/images/divine_ganesha_relief.jpg"
              alt="Lord Ganesha"
              className="w-5 h-5 rounded-full object-cover border border-[#C49A47]"
            />
            <span className="font-serif text-[11px] font-bold text-[#681C32] tracking-wider">Lord Ganesha</span>
          </div>
          <span className="text-[#C49A47] text-xs font-serif font-black">•</span>
          <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/95 border border-[#C49A47] shadow-2xs">
            <img
              src="/images/divine_murugan_relief.jpg"
              alt="Lord Murugan"
              className="w-5 h-5 rounded-full object-cover border border-[#C49A47]"
            />
            <span className="font-serif text-[11px] font-bold text-[#681C32] tracking-wider">Lord Murugan</span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[#6B3A48] text-[11px] sm:text-xs uppercase tracking-[0.2em] font-sans font-semibold mb-2.5"
        >
          {WEDDING_DATA.couple.invitationGreeting}
        </motion.p>

        {/* Compact & Beautiful Royal Couple Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative w-full max-w-[92vw] sm:max-w-xl md:max-w-2xl p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white/95 border-2 border-[#C49A47] shadow-[0_12px_35px_rgba(104,28,50,0.1)] backdrop-blur-md"
        >
          <GoldCornerAccents />

          {/* Groom Name */}
          <div className="flex flex-col items-center">
            <span className="font-script text-base sm:text-2xl text-[#9A6F25] tracking-wide">
              Chi.
            </span>
            <h1 className="font-rozha text-2xl sm:text-4xl md:text-5xl font-black tracking-wider text-[#681C32] drop-shadow-xs">
              PRAVEEN
            </h1>
            <span className="text-[#8C6721] text-[10px] sm:text-xs font-serif tracking-widest font-semibold mt-0.5">
              B.Tech.
            </span>
          </div>

          {/* Connecting Sacred Mangalyam Knot & Heart */}
          <div className="flex items-center justify-center my-1.5 sm:my-2.5">
            <div className="h-px w-8 sm:w-16 bg-[#C49A47]" />
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="mx-2.5 sm:mx-3 p-1 sm:p-1.5 rounded-full bg-[#FFF5DA] border border-[#C49A47] shadow-xs flex items-center justify-center"
            >
              <Heart className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-rose-600 fill-rose-600" />
            </motion.div>
            <div className="h-px w-8 sm:w-16 bg-[#C49A47]" />
          </div>

          {/* Bride Name */}
          <div className="flex flex-col items-center">
            <span className="font-script text-base sm:text-2xl text-[#9A6F25] tracking-wide">
              Chi. Sou.
            </span>
            <h2 className="font-rozha text-xl sm:text-3xl md:text-4xl font-black tracking-wider text-[#681C32] drop-shadow-xs">
              LAKSHMI PRASANNA
            </h2>
            <div className="flex items-center space-x-1.5 mt-0.5">
              <span className="text-[#6B3A48] text-[10px] sm:text-xs font-serif italic">
                (Prasanna Lakshmi)
              </span>
              <span className="text-[#C49A47] text-xs">•</span>
              <span className="text-[#8C6721] text-[10px] sm:text-xs font-serif tracking-widest font-semibold">
                B.E.
              </span>
            </div>
          </div>

          {/* Romantic Tagline */}
          <div className="mt-2.5 sm:mt-3 pt-2 sm:pt-2.5 border-t border-[#C49A47]/30">
            <p className="font-script text-sm sm:text-xl text-[#8C5D00] tracking-wide">
              "{WEDDING_DATA.couple.tagline}"
            </p>
          </div>
        </motion.div>

        {/* Date & Venue Badges in Light Theme */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 w-full sm:w-auto text-xs sm:text-sm"
        >
          <div className="flex items-center justify-center space-x-2 w-full sm:w-auto px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/90 border border-[#C49A47] text-[#4A1224] shadow-sm font-serif font-bold text-center">
            <Calendar className="w-4 h-4 text-[#C49A47] flex-shrink-0" />
            <span>19 & 20 November 2026</span>
          </div>

          <div className="flex items-center justify-center space-x-2 w-full sm:w-auto px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/90 border border-[#C49A47] text-[#4A1224] shadow-sm font-serif font-bold text-center">
            <MapPin className="w-4 h-4 text-[#C49A47] flex-shrink-0" />
            <span>SRL Kalyana Mandapam, Venkatagiri</span>
          </div>
        </motion.div>

        {/* Quick Action Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto max-w-xs sm:max-w-none"
        >
          <button
            onClick={onScrollToEvents}
            className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#681C32] to-[#8C2242] text-white font-serif font-bold text-xs sm:text-sm tracking-wider uppercase shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer border border-[#C49A47] text-center"
          >
            Celebration Events
          </button>

          <button
            onClick={onScrollToVenue}
            className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#FFF5DA] border-2 border-[#C49A47] text-[#681C32] font-serif font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md hover:bg-[#FFEEC2] hover:scale-105 active:scale-95 transition-all cursor-pointer text-center"
          >
            Venue & Map QR
          </button>

          <button
            onClick={onOpenInvitationModal}
            className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white border border-[#C49A47] text-[#4A1224] font-serif font-semibold text-xs sm:text-sm tracking-wider hover:border-[#681C32] hover:text-[#681C32] transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-sm text-center"
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
