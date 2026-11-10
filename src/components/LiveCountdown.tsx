import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DATA } from '../config/weddingData';
import { CountdownState } from '../types/wedding';
import { Sparkles, Clock, PartyPopper, Heart } from 'lucide-react';
import { KolamPattern, GoldCornerAccents, AuspiciousDiya } from './common/DecorativeOrnaments';

function calculateCountdown(targetIsoDate: string, durationHours = 6): CountdownState {
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

// Single unit digit card in Light Gold / Ivory Theme with 3D Depth & Pulse
const CountdownCard: React.FC<{ value: number; label: string; isSeconds?: boolean }> = ({ 
  value, 
  label, 
  isSeconds = false 
}) => {
  const formatted = String(Math.max(0, value)).padStart(2, '0');

  return (
    <div className="flex flex-col items-center">
      <motion.div
        key={isSeconds ? formatted : undefined}
        initial={isSeconds ? { scale: 0.94, opacity: 0.85 } : undefined}
        animate={isSeconds ? { scale: 1, opacity: 1 } : undefined}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className={`relative w-14 sm:w-24 md:w-34 h-20 sm:h-32 md:h-40 rounded-xl sm:rounded-3xl bg-gradient-to-b from-white via-[#FFFDF7] to-[#FAF1DD] border-2 sm:border-[2.5px] ${
          isSeconds 
            ? 'border-[#C49A47] shadow-[0_8px_24px_rgba(245,206,54,0.35)] ring-1.5 sm:ring-2 ring-[#F5CE36]/30' 
            : 'border-[#C49A47] shadow-[0_8px_20px_rgba(104,28,50,0.1)]'
        } flex flex-col items-center justify-center overflow-hidden group hover:scale-105 hover:border-[#8C6721] transition-all duration-300`}
      >
        {/* Top Glass Reflection Layer */}
        <div className="absolute top-0 inset-x-0 h-1/2 bg-white/70 border-b border-[#C49A47]/20 pointer-events-none" />

        {/* Large Royal Digit Value */}
        <span className="font-rozha text-2xl sm:text-5xl md:text-7xl font-black text-[#681C32] tracking-tight drop-shadow-sm z-10">
          {formatted}
        </span>

        {/* Riveted Brass Corner Screws */}
        <span className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#C49A47]/70 shadow-2xs" />
        <span className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#C49A47]/70 shadow-2xs" />
        <span className="absolute bottom-1.5 left-1.5 sm:bottom-2 sm:left-2 w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#C49A47]/70 shadow-2xs" />
        <span className="absolute bottom-1.5 right-1.5 sm:bottom-2 sm:right-2 w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#C49A47]/70 shadow-2xs" />
      </motion.div>

      <span className="mt-2 text-[10px] sm:text-xs md:text-sm font-sans font-bold uppercase tracking-wider sm:tracking-[0.2em] text-[#8C6721]">
        {label}
      </span>
    </div>
  );
};

export const LiveCountdown: React.FC = () => {
  const [weddingCountdown, setWeddingCountdown] = useState<CountdownState>(() =>
    calculateCountdown(WEDDING_DATA.countdownDates.wedding, 6)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setWeddingCountdown(calculateCountdown(WEDDING_DATA.countdownDates.wedding, 6));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-20 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#FAF4EA] via-[#FFFDF7] to-[#FAF4EA] text-[#3D141F] overflow-hidden border-b border-[#C49A47]/30">
      <KolamPattern opacity="opacity-15" />

      {/* Ambient Floating Sparkles & Soft Golden Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-radial-gradient from-amber-300/25 via-amber-100/10 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="relative z-20 max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#FFF5DA] border border-[#C49A47] text-[#681C32] text-xs uppercase tracking-widest font-bold mb-3 shadow-xs">
            <Clock className="w-3.5 h-3.5 text-[#C49A47] animate-spin" style={{ animationDuration: '10s' }} />
            <span>Auspicious Muhurtham Countdown</span>
          </div>
          <h2 className="font-rozha text-3xl sm:text-5xl text-[#681C32] tracking-wide">
            Counting Every Sacred Second
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#6B3A48] max-w-xl mx-auto mt-2 tracking-wide font-medium">
            Until the divine holy union of Chi. P. Praveen & Chi. Sou. A. Lakshmi Prasanna
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#C49A47] to-transparent mx-auto mt-4" />
        </div>

        {/* Grand Animated Wedding Countdown Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl sm:rounded-3xl p-4 sm:p-10 md:p-12 bg-white/95 border-2 border-[#C49A47] shadow-[0_20px_50px_rgba(104,28,50,0.14)] backdrop-blur-md overflow-hidden"
        >
          <GoldCornerAccents />

          {/* Top Traditional Auspicious Diyas & Event Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between pb-4 sm:pb-5 border-b border-[#C49A47]/30 mb-6 sm:mb-8 gap-3 sm:gap-4 text-center sm:text-left">
            <div className="flex items-center space-x-3">
              <AuspiciousDiya className="scale-100 sm:scale-110 flex-shrink-0" />
              <div>
                <span className="text-[11px] sm:text-xs uppercase tracking-widest font-sans font-bold text-[#681C32] flex items-center justify-center sm:justify-start gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C49A47]" /> Sacred Kalyana Muhurtham
                </span>
                <h3 className="font-rozha text-xl sm:text-3xl text-[#681C32] mt-0.5 font-bold">
                  Wedding Countdown
                </h3>
              </div>
            </div>

            <div className="flex flex-col items-center sm:items-end">
              <div className="flex items-center space-x-1.5 mb-1 px-3 py-0.5 sm:py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-[10px] font-bold uppercase tracking-wider shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Live Ticking</span>
              </div>
              <span className="text-xs sm:text-sm font-serif text-[#380E1B] font-bold">Friday, 20 November 2026</span>
              <span className="text-[11px] sm:text-xs font-sans text-[#8C6721] font-semibold">4:30 AM – 6:00 AM (Mesham Lagnam)</span>
            </div>
          </div>

          {/* Countdown State Views */}
          {weddingCountdown.isEnded ? (
            <div className="py-12 text-center bg-rose-50 rounded-2xl border border-rose-200">
              <PartyPopper className="w-12 h-12 text-[#681C32] mx-auto mb-3 animate-bounce" />
              <h4 className="font-rozha text-2xl text-[#681C32] font-bold">Subham! The Sacred Wedding is Solemnized!</h4>
              <p className="text-sm text-[#5A2C18] mt-2 font-medium">Thank you for showering your divine love and blessings upon the couple.</p>
            </div>
          ) : weddingCountdown.isStarted ? (
            <div className="py-12 text-center bg-[#FFF5DA] rounded-2xl border-2 border-[#C49A47] animate-pulse shadow-md">
              <Sparkles className="w-12 h-12 text-[#C49A47] mx-auto mb-3 animate-spin" />
              <h4 className="font-rozha text-2xl sm:text-3xl text-[#681C32] font-bold">Kalyana Muhurtham is Underway!</h4>
              <p className="text-sm text-[#5A2C18] mt-2 font-semibold">The sacred rituals are taking place right now at SRL Kalyana Mandapam, Venkatagiri!</p>
            </div>
          ) : (
            /* Live 4-Unit Animated Digit Display */
            <div className="flex justify-center items-center py-3 sm:py-6 px-1 sm:px-2 gap-1.5 sm:gap-4 md:gap-6 w-full">
              <CountdownCard value={weddingCountdown.days} label="Days" />
              <span className="font-serif text-xl sm:text-4xl text-[#C49A47] -mt-4 sm:-mt-6 font-bold animate-pulse px-0.5 sm:px-1">:</span>
              <CountdownCard value={weddingCountdown.hours} label="Hours" />
              <span className="font-serif text-xl sm:text-4xl text-[#C49A47] -mt-4 sm:-mt-6 font-bold animate-pulse px-0.5 sm:px-1">:</span>
              <CountdownCard value={weddingCountdown.minutes} label="Minutes" />
              <span className="font-serif text-xl sm:text-4xl text-[#C49A47] -mt-4 sm:-mt-6 font-bold animate-pulse px-0.5 sm:px-1">:</span>
              <CountdownCard value={weddingCountdown.seconds} label="Seconds" isSeconds={true} />
            </div>
          )}

          {/* Bottom Auspicious Venue & Ritual Blessing Banner */}
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-[#C49A47]/30 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-2">
            <span className="text-[11px] sm:text-xs text-[#6B3A48] font-sans tracking-wide font-medium flex items-center justify-center sm:justify-start gap-1.5">
              <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600 animate-pulse flex-shrink-0" />
              Auspicious Subha Lagnam • Mangalyadharanam between 4:30 AM – 6:00 AM
            </span>

            <span className="text-[11px] sm:text-xs font-serif font-bold text-[#681C32] bg-[#FAF4EA] px-3.5 py-1.5 rounded-full border border-[#C49A47]/40 shadow-2xs">
              📍 SRL Kalyana Mandapam, Venkatagiri
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
