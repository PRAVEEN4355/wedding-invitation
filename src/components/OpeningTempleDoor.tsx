import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TempleBell } from './common/DecorativeOrnaments';
import { weddingAudio } from '../utils/audioEngine';
import { getGuestNameFromUrl } from '../utils/guestManager';
import confetti from 'canvas-confetti';

interface OpeningTempleDoorProps {
  onOpen: () => void;
}

export const OpeningTempleDoor: React.FC<OpeningTempleDoorProps> = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const guestName = useMemo(() => getGuestNameFromUrl(), []);

  const handleOpenInvitation = () => {
    if (isOpening) return;
    setIsOpening(true);

    weddingAudio.playTempleBell();
    setTimeout(() => {
      weddingAudio.playShankham();
    }, 250);

    weddingAudio.play('traditional');

    confetti({
      particleCount: 90,
      spread: 90,
      origin: { y: 0.55 },
      colors: ['#FFD700', '#F5CE36', '#C49A47', '#FF8C00', '#FFFFFF', '#681C32']
    });

    setTimeout(() => {
      setIsOpen(true);
      onOpen();
      // Ensure landing starting right at the top of the invitation
      window.scrollTo({ top: 0, behavior: 'instant' });
      const hero = document.getElementById('hero-section');
      if (hero) {
        hero.scrollIntoView({ behavior: 'instant', block: 'start' });
      }
    }, 2200);
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A0B0E] overflow-hidden select-none"
        >
          {/* 1. Revealed Sanctum Background: Photorealistic Lord Ganesha & Lord Murugan Temple */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/realistic_divine_ganesha_murugan.jpg"
              alt="Sacred South Indian Temple Sanctum with Lord Ganesha and Lord Murugan"
              className="w-full h-full object-cover brightness-90 filter"
            />
            {/* Soft divine warm golden radial glow */}
            <div className="absolute inset-0 bg-radial-gradient from-amber-400/20 via-black/40 to-black/70" />
          </div>

          {/* 2. Top Realistic Mango Leaf Toran & Hanging Temple Bells */}
          <div className="absolute top-0 inset-x-0 z-30 flex flex-col items-center">
            {/* Realistic Mango Leaf Garland Image Banner */}
            <div className="w-full h-10 sm:h-16 overflow-hidden relative shadow-md">
              <img
                src="/images/realistic_mango_leaf_toran.jpg"
                alt="Sacred South Indian Fresh Mango Leaf & Marigold Toran"
                className="w-full h-full object-cover object-top opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Realistic Swinging Brass Temple Bells */}
            <div className="w-full max-w-5xl flex justify-around px-4 sm:px-12 -mt-1 z-30 pointer-events-auto">
              <TempleBell style={{ animationDelay: '0s', animationDuration: '2.5s' }} onClick={() => weddingAudio.playTempleBell()} />
              <TempleBell className="hidden md:flex" style={{ animationDelay: '0.5s', animationDuration: '2.8s' }} onClick={() => weddingAudio.playTempleBell()} />
              <TempleBell className="hidden sm:flex" style={{ animationDelay: '0.2s', animationDuration: '2.3s' }} onClick={() => weddingAudio.playTempleBell()} />
              <TempleBell className="hidden md:flex" style={{ animationDelay: '0.7s', animationDuration: '2.7s' }} onClick={() => weddingAudio.playTempleBell()} />
              <TempleBell style={{ animationDelay: '0.4s', animationDuration: '2.4s' }} onClick={() => weddingAudio.playTempleBell()} />
            </div>
          </div>

          {/* 3. Two Grand 3D Golden Wooden Temple Doors with Ganesha & Murugan Reliefs */}
          <div className="relative w-full h-full flex overflow-hidden perspective-[1600px] z-10">
            {/* Left Temple Door */}
            <motion.div
              animate={isOpening ? { rotateY: -105, x: '-25%', opacity: 0.15 } : { rotateY: 0, x: 0 }}
              transition={{ duration: 2.0, ease: [0.65, 0, 0.35, 1] }}
              style={{ transformOrigin: 'left center' }}
              className="w-1/2 h-full relative overflow-hidden border-r-2 sm:border-r-4 border-[#5E3F10] shadow-[15px_0_40px_rgba(0,0,0,0.8)]"
            >
              {/* Photorealistic Door Texture */}
              <img
                src="/images/realistic_temple_entrance_doors.jpg"
                alt="Golden Temple Door Left"
                className="absolute inset-0 w-full h-full object-cover object-left filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-950/40 via-amber-900/20 to-black/50" />

              {/* Ornate Inset Panel: Lord Ganesha Blessing (Visible on Tablets & Desktops) */}
              <div className="hidden sm:flex absolute inset-4 sm:inset-8 lg:inset-10 border-2 border-[#E5C058]/80 rounded-lg flex-col justify-between items-center p-3 sm:p-5 bg-black/35 backdrop-blur-[1px] shadow-2xl">
                <div className="px-4 py-1.5 rounded-full bg-[#3D141F]/80 border border-[#C49A47] text-[#F5CE36] text-xs sm:text-sm font-serif tracking-widest uppercase font-bold shadow-md -translate-x-3 sm:-translate-x-8 lg:-translate-x-14">
                  卐 Sri Maha Ganapathi 卐
                </div>

                {/* 3D Golden Ganesha 3D Logo (Shifted to Left for Center Card Clearance) */}
                <div className="relative my-auto flex flex-col items-center -translate-x-4 sm:-translate-x-10 md:-translate-x-14 lg:-translate-x-20 transition-transform">
                  <div className="w-26 h-26 sm:w-38 sm:h-38 md:w-44 md:h-44 rounded-full p-1.5 bg-gradient-to-br from-[#FFE79A] via-[#C49A47] to-[#784A0E] shadow-[0_0_35px_rgba(245,206,54,0.45)] border-2 border-[#FFF0B3] flex items-center justify-center overflow-hidden">
                    <img
                      src="/images/divine_ganesha_relief.jpg"
                      alt="Lord Ganesha 3D"
                      className="w-full h-full object-cover rounded-full filter brightness-105"
                    />
                  </div>
                  <span className="mt-3 px-4 py-1 rounded-full bg-amber-950/85 border border-amber-500/50 text-[#F5CE36] text-[11px] sm:text-xs font-serif uppercase tracking-widest font-bold shadow-md">
                    Subham
                  </span>
                </div>

                <div className="text-[11px] sm:text-xs text-amber-200/90 font-serif tracking-widest uppercase font-semibold text-center -translate-x-3 sm:-translate-x-8 lg:-translate-x-14">
                  Auspicious Beginnings
                </div>
              </div>
            </motion.div>

            {/* Right Temple Door */}
            <motion.div
              animate={isOpening ? { rotateY: 105, x: '25%', opacity: 0.15 } : { rotateY: 0, x: 0 }}
              transition={{ duration: 2.0, ease: [0.65, 0, 0.35, 1] }}
              style={{ transformOrigin: 'right center' }}
              className="w-1/2 h-full relative overflow-hidden border-l-2 sm:border-l-4 border-[#5E3F10] shadow-[-15px_0_40px_rgba(0,0,0,0.8)]"
            >
              {/* Photorealistic Door Texture */}
              <img
                src="/images/realistic_temple_entrance_doors.jpg"
                alt="Golden Temple Door Right"
                className="absolute inset-0 w-full h-full object-cover object-right filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-amber-950/40 via-amber-900/20 to-black/50" />

              {/* Ornate Inset Panel: Lord Murugan Blessing (Visible on Tablets & Desktops) */}
              <div className="hidden sm:flex absolute inset-4 sm:inset-8 lg:inset-10 border-2 border-[#E5C058]/80 rounded-lg flex-col justify-between items-center p-3 sm:p-5 bg-black/35 backdrop-blur-[1px] shadow-2xl">
                <div className="px-4 py-1.5 rounded-full bg-[#3D141F]/80 border border-[#C49A47] text-[#F5CE36] text-xs sm:text-sm font-serif tracking-widest uppercase font-bold shadow-md translate-x-3 sm:translate-x-8 lg:translate-x-14">
                  ✨ Sri Subramanya Swamy ✨
                </div>

                {/* 3D Golden Murugan 3D Logo (Shifted to Right for Center Card Clearance) */}
                <div className="relative my-auto flex flex-col items-center translate-x-4 sm:translate-x-10 md:translate-x-14 lg:translate-x-20 transition-transform">
                  <div className="w-26 h-26 sm:w-38 sm:h-38 md:w-44 md:h-44 rounded-full p-1.5 bg-gradient-to-br from-[#FFE79A] via-[#C49A47] to-[#784A0E] shadow-[0_0_35px_rgba(245,206,54,0.45)] border-2 border-[#FFF0B3] flex items-center justify-center overflow-hidden">
                    <img
                      src="/images/divine_murugan_relief.jpg"
                      alt="Lord Murugan 3D"
                      className="w-full h-full object-cover rounded-full filter brightness-105"
                    />
                  </div>
                  <span className="mt-3 px-4 py-1 rounded-full bg-amber-950/85 border border-amber-500/50 text-[#F5CE36] text-[11px] sm:text-xs font-serif uppercase tracking-widest font-bold shadow-md">
                    Kalyanam
                  </span>
                </div>

                <div className="text-[11px] sm:text-xs text-amber-200/90 font-serif tracking-widest uppercase font-semibold text-center translate-x-3 sm:translate-x-8 lg:translate-x-14">
                  Divine Eternal Grace
                </div>
              </div>
            </motion.div>
          </div>

          {/* 4. Central Royal Invitation Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className={`absolute z-40 max-w-[92vw] sm:max-w-md md:max-w-[460px] mx-auto p-4 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl bg-white/95 border-2 border-[#C49A47] shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-md text-center transition-all ${
              isOpening ? 'scale-110 opacity-0 transition-all duration-1000' : ''
            }`}
          >
            {/* Personalized Guest Badge */}
            {guestName ? (
              <div className="mb-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-[#FFF5DA] via-[#FFE8B3] to-[#FFF5DA] border border-[#C49A47] text-[#681C32] inline-flex items-center space-x-1.5 shadow-xs max-w-full">
                <span>🌸</span>
                <span className="font-serif text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#8C6721] truncate">
                  Special Invitation for: <span className="text-[#681C32] font-rozha text-xs sm:text-sm font-black capitalize ml-1">{guestName}</span>
                </span>
                <span>🌸</span>
              </div>
            ) : (
              <div className="mb-2 px-3 py-1 rounded-full bg-[#FFF5DA] border border-[#C49A47]/60 text-[#681C32] inline-flex items-center space-x-1 shadow-2xs">
                <span className="font-serif text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#8C6721]">
                  Warmly Welcoming You & Your Family
                </span>
              </div>
            )}

            {/* Top Invocation from Official Card */}
            <p className="font-rozha text-[#681C32] tracking-widest text-xs sm:text-base md:text-lg mb-0.5 sm:mb-1 font-bold drop-shadow-sm">
              || Sri Veeragaran Angalamman Thunai ||
            </p>

            <p className="text-[#5A2C18] text-[11px] sm:text-xs md:text-sm font-sans mb-2 tracking-wider font-semibold">
              With the blessings of our families
            </p>

            <div className="w-20 sm:w-24 h-0.5 bg-gradient-to-r from-transparent via-[#C49A47] to-transparent mx-auto mb-2 sm:mb-3" />

            <p className="text-[#380E1B] text-[10px] sm:text-xs tracking-wider uppercase font-sans mb-2 sm:mb-3 font-semibold">
              Together with our families, we invite you to celebrate
            </p>

            {/* Couple Names */}
            <div className="my-2 sm:my-3">
              <span className="font-script text-xl sm:text-2xl text-[#9A6F25]">Chi.</span>
              <h1 className="font-rozha text-2xl sm:text-4xl md:text-5xl text-[#681C32] tracking-wider drop-shadow-sm font-black">
                P. PRAVEEN
              </h1>
              <span className="text-[#8C6721] text-[10px] sm:text-xs font-serif tracking-widest font-semibold block -mt-0.5 mb-1">
                B.Tech.
              </span>

              <div className="flex items-center justify-center my-1 text-rose-600">
                <span className="h-px w-10 sm:w-12 bg-[#C49A47]" />
                <span className="mx-2 sm:mx-3 text-lg sm:text-2xl animate-pulse">❤️</span>
                <span className="h-px w-10 sm:w-12 bg-[#C49A47]" />
              </div>

              <span className="font-script text-xl sm:text-2xl text-[#9A6F25]">Chi. Sou.</span>
              <h2 className="font-rozha text-xl sm:text-3xl md:text-4xl text-[#681C32] tracking-wider drop-shadow-sm font-black">
                A. LAKSHMI PRASANNA
              </h2>
              <span className="text-[#8C6721] text-[10px] sm:text-xs font-serif tracking-widest font-semibold block -mt-0.5">
                B.E. <span className="font-serif italic text-[#6B3A48]">(Prasanna Lakshmi)</span>
              </span>
            </div>

            <p className="text-[#7A4D00] text-sm sm:text-lg font-script mb-3 sm:mb-5">
              "Two Hearts, One Beautiful Journey"
            </p>

            {/* Action Button */}
            <button
              onClick={handleOpenInvitation}
              disabled={isOpening}
              className="relative w-full sm:w-auto inline-flex items-center justify-center px-5 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-base font-serif font-bold text-white bg-gradient-to-r from-[#681C32] via-[#85233F] to-[#681C32] border border-[#E5C058] rounded-full shadow-[0_0_25px_rgba(104,28,50,0.4)] hover:shadow-[0_0_35px_rgba(104,28,50,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 group overflow-hidden cursor-pointer"
            >
              <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="mr-1.5 sm:mr-2 text-lg sm:text-xl">🪔</span>
              <span className="tracking-widest uppercase font-serif font-black">
                {isOpening ? "Entering Mandapam..." : "OPEN WEDDING INVITATION"}
              </span>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
