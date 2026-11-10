import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DATA } from '../config/weddingData';
import { CountdownState } from '../types/wedding';
import { Sparkles, Clock, PartyPopper } from 'lucide-react';
import { KolamPattern } from './common/DecorativeOrnaments';

function calculateCountdown(targetIsoDate: string, durationHours = 4): CountdownState {
  const targetTime = new Date(targetIsoDate).getTime();
  const now = Date.now();
  const diff = targetTime - now;
  const endTime = targetTime + durationHours * 60 * 60 * 1000;

  if (diff <= 0) {
    if (now < endTime) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isStarted: true, isEnded: false };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isStarted: true, isEnded: true };
    }
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds, isStarted: false, isEnded: false };
}

// Single unit digit card in Light Gold / Ivory Theme
const CountdownCard: React.FC<{ value: number; label: string }> = ({ value, label }) => {
  const formatted = String(Math.max(0, value)).padStart(2, '0');

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-16 sm:w-24 md:w-28 h-20 sm:h-28 md:h-32 rounded-2xl bg-gradient-to-b from-white via-[#FFFBF2] to-[#FAF1DD] border-2 border-[#C49A47] shadow-[0_8px_20px_rgba(104,28,50,0.08)] flex flex-col items-center justify-center overflow-hidden group hover:border-[#8C6721] hover:scale-105 transition-all duration-300">
        <div className="absolute top-0 inset-x-0 h-1/2 bg-white/60 border-b border-[#C49A47]/20 pointer-events-none" />

        <span className="font-rozha text-3xl sm:text-5xl md:text-6xl font-black text-[#681C32] tracking-tight drop-shadow-sm z-10">
          {formatted}
        </span>

        <span className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-[#C49A47]/60" />
        <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#C49A47]/60" />
        <span className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-[#C49A47]/60" />
        <span className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-[#C49A47]/60" />
      </div>

      <span className="mt-2 text-[10px] sm:text-xs md:text-sm font-sans font-bold uppercase tracking-[0.2em] text-[#8C6721]">
        {label}
      </span>
    </div>
  );
};

export const LiveCountdown: React.FC = () => {
  const [haldiCountdown, setHaldiCountdown] = useState<CountdownState>(() =>
    calculateCountdown(WEDDING_DATA.countdownDates.haldi, 4)
  );

  const [weddingCountdown, setWeddingCountdown] = useState<CountdownState>(() =>
    calculateCountdown(WEDDING_DATA.countdownDates.wedding, 6)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setHaldiCountdown(calculateCountdown(WEDDING_DATA.countdownDates.haldi, 4));
      setWeddingCountdown(calculateCountdown(WEDDING_DATA.countdownDates.wedding, 6));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-20 px-4 sm:px-6 bg-gradient-to-b from-[#FAF4EA] via-[#FFFDF7] to-[#FAF4EA] text-[#3D141F] overflow-hidden border-b border-[#C49A47]/30">
      <KolamPattern opacity="opacity-15" />

      <div className="relative z-20 max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#FFF5DA] border border-[#C49A47] text-[#681C32] text-xs uppercase tracking-widest font-bold mb-3 shadow-xs">
            <Clock className="w-3.5 h-3.5 text-[#C49A47]" />
            <span>Auspicious Muhurtham Timers</span>
          </div>
          <h2 className="font-rozha text-3xl sm:text-5xl text-[#681C32] tracking-wide">
            Live Wedding Countdown
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#6B3A48] max-w-xl mx-auto mt-2 tracking-wide font-medium">
            Counting down every sacred second until the grand union in Asia/Kolkata (IST)
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#C49A47] to-transparent mx-auto mt-4" />
        </div>

        {/* Two Live Countdown Timers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* 1. HALDI COUNTDOWN */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl p-6 sm:p-8 bg-white/95 border-2 border-[#E5C058] shadow-[0_15px_40px_rgba(200,140,20,0.12)] backdrop-blur-md flex flex-col justify-between"
          >
            <div className="flex items-center justify-between pb-4 border-b border-amber-200/80 mb-6">
              <div>
                <span className="text-xs uppercase tracking-widest font-sans font-bold text-[#8C5D00] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Haldi Celebration
                </span>
                <h3 className="font-rozha text-xl sm:text-2xl text-[#5C3600] mt-1 font-bold">
                  Haldi Countdown
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs font-serif text-[#3D2106] block font-bold">19 November 2026</span>
                <span className="text-[11px] font-sans text-amber-800 block font-semibold">Thursday • 2:00 PM IST</span>
              </div>
            </div>

            {haldiCountdown.isEnded ? (
              <div className="py-8 text-center bg-amber-50 rounded-2xl border border-amber-200">
                <PartyPopper className="w-10 h-10 text-amber-600 mx-auto mb-2" />
                <h4 className="font-serif text-lg text-[#5C3600] font-bold">Thank you for celebrating with us!</h4>
                <p className="text-xs text-[#5A3810] mt-1">The joyous Haldi ceremony concluded with eternal smiles.</p>
              </div>
            ) : haldiCountdown.isStarted ? (
              <div className="py-8 text-center bg-amber-100 rounded-2xl border border-amber-300 animate-pulse">
                <Sparkles className="w-10 h-10 text-amber-600 mx-auto mb-2" />
                <h4 className="font-rozha text-xl text-[#5C3600] font-bold">The celebration has begun!</h4>
                <p className="text-xs text-[#5A3810] mt-1 font-semibold">Join the turmeric and flower festivity right now!</p>
              </div>
            ) : (
              <div className="flex justify-around items-center py-4">
                <CountdownCard value={haldiCountdown.days} label="Days" />
                <span className="font-serif text-2xl text-[#C49A47] -mt-6 font-bold">:</span>
                <CountdownCard value={haldiCountdown.hours} label="Hours" />
                <span className="font-serif text-2xl text-[#C49A47] -mt-6 font-bold">:</span>
                <CountdownCard value={haldiCountdown.minutes} label="Mins" />
                <span className="font-serif text-2xl text-[#C49A47] -mt-6 font-bold">:</span>
                <CountdownCard value={haldiCountdown.seconds} label="Secs" />
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-amber-200/80 text-center">
              <span className="text-xs text-amber-900 font-sans tracking-wide font-medium">
                Turmeric paste, vibrant marigold petals & blessings awaiting Praveen
              </span>
            </div>
          </motion.div>

          {/* 2. WEDDING COUNTDOWN */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-3xl p-6 sm:p-8 bg-white/95 border-2 border-[#C49A47] shadow-[0_15px_40px_rgba(104,28,50,0.12)] backdrop-blur-md flex flex-col justify-between"
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#C49A47]/30 mb-6">
              <div>
                <span className="text-xs uppercase tracking-widest font-sans font-bold text-[#681C32] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C49A47]" /> Sacred Union (Muhurtham)
                </span>
                <h3 className="font-rozha text-xl sm:text-2xl text-[#681C32] mt-1 font-bold">
                  Wedding Countdown
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs font-serif text-[#380E1B] block font-bold">20 November 2026</span>
                <span className="text-[11px] font-sans text-[#8C6721] block font-semibold">Friday • 4:30 AM IST</span>
              </div>
            </div>

            {weddingCountdown.isEnded ? (
              <div className="py-8 text-center bg-rose-50 rounded-2xl border border-rose-200">
                <PartyPopper className="w-10 h-10 text-[#681C32] mx-auto mb-2" />
                <h4 className="font-serif text-lg text-[#681C32] font-bold">Thank you for celebrating with us!</h4>
                <p className="text-xs text-[#5A2C18] mt-1">The sacred Kalyanam has been solemnized with divine blessings.</p>
              </div>
            ) : weddingCountdown.isStarted ? (
              <div className="py-8 text-center bg-[#FFF5DA] rounded-2xl border border-[#C49A47] animate-pulse">
                <Sparkles className="w-10 h-10 text-[#C49A47] mx-auto mb-2" />
                <h4 className="font-rozha text-xl text-[#681C32] font-bold">The celebration has begun!</h4>
                <p className="text-xs text-[#5A2C18] mt-1 font-semibold">Kalyana Muhurtham is now underway at SRL Kalyana Mandapam!</p>
              </div>
            ) : (
              <div className="flex justify-around items-center py-4">
                <CountdownCard value={weddingCountdown.days} label="Days" />
                <span className="font-serif text-2xl text-[#C49A47] -mt-6 font-bold">:</span>
                <CountdownCard value={weddingCountdown.hours} label="Hours" />
                <span className="font-serif text-2xl text-[#C49A47] -mt-6 font-bold">:</span>
                <CountdownCard value={weddingCountdown.minutes} label="Mins" />
                <span className="font-serif text-2xl text-[#C49A47] -mt-6 font-bold">:</span>
                <CountdownCard value={weddingCountdown.seconds} label="Secs" />
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-[#C49A47]/30 text-center">
              <span className="text-xs text-[#6B3A48] font-sans tracking-wide font-medium">
                Auspicious Subha Lagnam • Mangalyadharanam between 4:30 AM – 6:00 AM
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
