import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TempleBell } from './common/DecorativeOrnaments';
import { weddingAudio } from '../utils/audioEngine';
import confetti from 'canvas-confetti';

interface OpeningTempleDoorProps {
  onOpen: () => void;
}

export const OpeningTempleDoor: React.FC<OpeningTempleDoorProps> = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

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
            <div className="w-full h-12 sm:h-16 overflow-hidden relative shadow-md">
              <img
                src="/images/realistic_mango_leaf_toran.jpg"
                alt="Sacred South Indian Fresh Mango Leaf & Marigold Toran"
                className="w-full h-full object-cover object-top opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Swinging Temple Bells */}
            <div className="w-full max-w-4xl flex justify-around px-8 -mt-2">
              <TempleBell onClick={() => weddingAudio.playTempleBell()} />
              <TempleBell className="hidden sm:flex" onClick={() => weddingAudio.playTempleBell()} />
              <TempleBell onClick={() => weddingAudio.playTempleBell()} />
            </div>
          </div>

          {/* 3. Two Grand 3D Golden Wooden Temple Doors with Ganesha & Murugan Reliefs */}
          <div className="relative w-full h-full flex overflow-hidden perspective-[1600px] z-10">
            {/* Left Temple Door */}
            <motion.div
              animate={isOpening ? { rotateY: -105, x: '-25%', opacity: 0.15 } : { rotateY: 0, x: 0 }}
              transition={{ duration: 2.0, ease: [0.65, 0, 0.35, 1] }}
              style={{ transformOrigin: 'left center' }}
              className="w-1/2 h-full relative overflow-hidden border-r-4 border-[#5E3F10] shadow-[15px_0_40px_rgba(0,0,0,0.8)]"
            >
              {/* Photorealistic Door Texture */}
              <img
                src="/images/realistic_temple_entrance_doors.jpg"
                alt="Golden Temple Door Left"
                className="absolute inset-0 w-full h-full object-cover object-left filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-950/40 via-amber-900/20 to-black/50" />

              {/* Ornate Inset Panel: Lord Ganesha Blessing */}
              <div className="absolute inset-4 sm:inset-10 border-2 border-[#E5C058]/80 rounded-lg flex flex-col justify-between items-center p-4 bg-black/35 backdrop-blur-[1px] shadow-2xl">
                <div className="px-4 py-1.5 rounded-full bg-[#3D141F]/80 border border-[#C49A47] text-[#F5CE36] text-xs sm:text-sm font-serif tracking-widest uppercase font-bold shadow-md">
                  卐 Sri Maha Ganapathi 卐
                </div>

                {/* Golden Ganesha Emblem */}
                <div className="relative my-auto flex flex-col items-center">
                  <div className="w-24 h-24 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-br from-[#FFE79A] via-[#C49A47] to-[#784A0E] shadow-[0_0_30px_rgba(245,206,54,0.35)] border-2 border-[#FFF0B3] flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full rounded-full bg-gradient-to-b from-[#4A1525] to-[#20070E] flex flex-col items-center justify-center text-center p-2">
                      <span className="text-4xl sm:text-6xl drop-shadow-md">🕉️</span>
                      <span className="font-rozha text-[11px] sm:text-xs text-[#F5CE36] tracking-wider mt-1 font-bold">
                        Vighnaharta
                      </span>
                    </div>
                  </div>
                  <span className="mt-3 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-500/50 text-[#F5CE36] text-[10px] sm:text-xs font-serif uppercase tracking-widest font-bold">
                    Subham
                  </span>
                </div>

                <div className="text-[11px] sm:text-xs text-amber-200/90 font-serif tracking-widest uppercase font-semibold text-center">
                  Auspicious Beginnings
                </div>
              </div>
            </motion.div>

            {/* Right Temple Door */}
            <motion.div
              animate={isOpening ? { rotateY: 105, x: '25%', opacity: 0.15 } : { rotateY: 0, x: 0 }}
              transition={{ duration: 2.0, ease: [0.65, 0, 0.35, 1] }}
              style={{ transformOrigin: 'right center' }}
              className="w-1/2 h-full relative overflow-hidden border-l-4 border-[#5E3F10] shadow-[-15px_0_40px_rgba(0,0,0,0.8)]"
            >
              {/* Photorealistic Door Texture */}
              <img
                src="/images/realistic_temple_entrance_doors.jpg"
                alt="Golden Temple Door Right"
                className="absolute inset-0 w-full h-full object-cover object-right filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-amber-950/40 via-amber-900/20 to-black/50" />

              {/* Ornate Inset Panel: Lord Murugan Blessing */}
              <div className="absolute inset-4 sm:inset-10 border-2 border-[#E5C058]/80 rounded-lg flex flex-col justify-between items-center p-4 bg-black/35 backdrop-blur-[1px] shadow-2xl">
                <div className="px-4 py-1.5 rounded-full bg-[#3D141F]/80 border border-[#C49A47] text-[#F5CE36] text-xs sm:text-sm font-serif tracking-widest uppercase font-bold shadow-md">
                  ✨ Sri Subramanya Swamy ✨
                </div>

                {/* Golden Murugan Emblem */}
                <div className="relative my-auto flex flex-col items-center">
                  <div className="w-24 h-24 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-br from-[#FFE79A] via-[#C49A47] to-[#784A0E] shadow-[0_0_30px_rgba(245,206,54,0.35)] border-2 border-[#FFF0B3] flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full rounded-full bg-gradient-to-b from-[#4A1525] to-[#20070E] flex flex-col items-center justify-center text-center p-2">
                      <span className="text-3xl sm:text-5xl drop-shadow-md">🦚</span>
                      <span className="font-rozha text-[11px] sm:text-xs text-[#F5CE36] tracking-wider mt-1 font-bold">
                        Vetri Vel
                      </span>
                    </div>
                  </div>
                  <span className="mt-3 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-500/50 text-[#F5CE36] text-[10px] sm:text-xs font-serif uppercase tracking-widest font-bold">
                    Kalyanam
                  </span>
                </div>

                <div className="text-[11px] sm:text-xs text-amber-200/90 font-serif tracking-widest uppercase font-semibold text-center">
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
            className={`absolute z-40 max-w-lg mx-4 p-6 sm:p-9 rounded-3xl bg-white/95 border-2 border-[#C49A47] shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-md text-center transition-all ${
              isOpening ? 'scale-110 opacity-0 transition-all duration-1000' : ''
            }`}
          >
            {/* Top Invocation from Official Card */}
            <p className="font-rozha text-[#681C32] tracking-widest text-sm sm:text-lg mb-1 font-bold drop-shadow-sm">
              || Sri Veeragaran Angalamman Thunai ||
            </p>

            <p className="text-[#5A2C18] text-xs sm:text-sm font-sans mb-3 tracking-wider font-semibold">
              With the blessings of our families
            </p>

            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#C49A47] to-transparent mx-auto mb-3" />

            <p className="text-[#380E1B] text-[11px] sm:text-xs tracking-wider uppercase font-sans mb-3 font-semibold">
              Together with our families, we invite you to celebrate
            </p>

            {/* Couple Names */}
            <div className="my-4">
              <span className="font-script text-2xl text-[#9A6F25]">Chi.</span>
              <h1 className="font-rozha text-3xl sm:text-5xl text-[#681C32] tracking-wider drop-shadow-sm">
                P. PRAVEEN
              </h1>
              <span className="text-[#8C6721] text-xs font-serif tracking-widest font-semibold block -mt-1 mb-1">
                B.Tech.
              </span>

              <div className="flex items-center justify-center my-1 text-rose-600">
                <span className="h-px w-12 bg-[#C49A47]" />
                <span className="mx-3 text-xl sm:text-2xl animate-pulse">❤️</span>
                <span className="h-px w-12 bg-[#C49A47]" />
              </div>

              <span className="font-script text-2xl text-[#9A6F25]">Chi. Sou.</span>
              <h2 className="font-rozha text-2xl sm:text-4xl text-[#681C32] tracking-wider drop-shadow-sm">
                A. LAKSHMI PRASANNA
              </h2>
              <span className="text-[#8C6721] text-xs font-serif tracking-widest font-semibold block -mt-1">
                B.E. <span className="font-serif italic text-[#6B3A48]">(Prasanna Lakshmi)</span>
              </span>
            </div>

            <p className="text-[#7A4D00] text-base sm:text-xl font-script mb-5">
              "Two Hearts, One Beautiful Journey"
            </p>

            {/* Action Button */}
            <button
              onClick={handleOpenInvitation}
              disabled={isOpening}
              className="relative inline-flex items-center justify-center px-8 py-3.5 text-sm sm:text-base font-serif font-bold text-white bg-gradient-to-r from-[#681C32] via-[#85233F] to-[#681C32] border border-[#E5C058] rounded-full shadow-[0_0_25px_rgba(104,28,50,0.4)] hover:shadow-[0_0_35px_rgba(104,28,50,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 group overflow-hidden cursor-pointer"
            >
              <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="mr-2 text-xl">🪔</span>
              <span className="tracking-widest uppercase font-serif font-black">
                {isOpening ? "Entering Mandapam..." : "OPEN WEDDING INVITATION"}
              </span>
            </button>

            <p className="text-[11px] text-[#633900] mt-3 tracking-wider flex items-center justify-center gap-1.5 font-sans">
              <span>🎵</span>
              <span>Tap to enter with Tamil Wedding BGM</span>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
