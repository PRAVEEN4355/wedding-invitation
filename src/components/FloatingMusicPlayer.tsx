import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingAudio } from '../utils/audioEngine';
import { MusicOption } from '../types/wedding';
import { 
  Volume2, VolumeX, Play, Pause, ChevronUp, ChevronDown, 
  Disc, Sparkles, Heart, Flame, MapPin, Music, Droplets, Flower2
} from 'lucide-react';
import confetti from 'canvas-confetti';

type ActiveSection = 'hero' | 'haldi' | 'family' | 'timeline' | 'mandapam' | 'venue';

export const FloatingMusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<MusicOption>('traditional');
  const [volume, setVolume] = useState(0.75);
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeSection, setActiveSection] = useState<ActiveSection>('haldi');
  const [splashCount, setSplashCount] = useState(0);

  // Sync state with audio engine
  useEffect(() => {
    const syncState = () => {
      setIsPlaying(weddingAudio.getIsPlaying());
      setIsMuted(weddingAudio.getIsMuted());
      setCurrentTrack(weddingAudio.getCurrentTrack());
      setVolume(weddingAudio.getVolume());
    };

    const unsubscribe = weddingAudio.subscribe(syncState);
    syncState();
    return () => unsubscribe();
  }, []);

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.45;

      const haldiEl = document.getElementById('haldi-section');
      const familyEl = document.getElementById('family-section');
      const timelineEl = document.getElementById('events-section');
      const mandapamEl = document.getElementById('mandapam-section');
      const venueEl = document.getElementById('venue-section');

      if (venueEl && scrollPos >= venueEl.offsetTop) {
        setActiveSection('venue');
      } else if (mandapamEl && scrollPos >= mandapamEl.offsetTop) {
        setActiveSection('mandapam');
      } else if (timelineEl && scrollPos >= timelineEl.offsetTop) {
        setActiveSection('timeline');
      } else if (familyEl && scrollPos >= familyEl.offsetTop) {
        setActiveSection('family');
      } else if (haldiEl && scrollPos >= haldiEl.offsetTop) {
        setActiveSection('haldi');
      } else {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTogglePlay = () => {
    weddingAudio.toggle(currentTrack);
  };

  const handleToggleMute = () => {
    weddingAudio.toggleMute();
  };

  // Playful Haldi water splash burst
  const triggerWaterSplash = () => {
    setSplashCount(prev => prev + 1);
    weddingAudio.playTempleBell();
    // Confetti water drops effect
    try {
      confetti({
        particleCount: 25,
        spread: 60,
        origin: { x: 0.85, y: 0.8 },
        colors: ['#38bdf8', '#0284c7', '#fde047', '#f59e0b', '#ffffff'],
        ticks: 120,
        gravity: 1.2,
        scalar: 0.8,
      });
    } catch {
      // Fallback
    }
  };

  // Romantic flower blessing shower
  const triggerFlowerShower = () => {
    weddingAudio.playTempleBell();
    try {
      confetti({
        particleCount: 30,
        spread: 70,
        origin: { x: 0.85, y: 0.8 },
        colors: ['#f43f5e', '#fb7185', '#fbbf24', '#fde047', '#ffffff'],
        ticks: 150,
        gravity: 0.8,
        shapes: ['circle'],
        scalar: 0.9,
      });
    } catch {
      // Fallback
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end select-none pointer-events-none">
      <div className="pointer-events-auto">
        <AnimatePresence mode="wait">
          {isExpanded ? (
            /* ================= FULL 3D GLASS COMPANION CARD ================= */
            <motion.div
              key="glass-card"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-80 sm:w-92 rounded-3xl p-4 sm:p-5 text-[#3D141F] overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.65) 0%, rgba(255, 250, 240, 0.45) 50%, rgba(255, 255, 255, 0.35) 100%)',
                backdropFilter: 'blur(20px) saturate(190%)',
                WebkitBackdropFilter: 'blur(20px) saturate(190%)',
                border: '1.5px solid rgba(255, 255, 255, 0.85)',
                boxShadow: '0 20px 45px -10px rgba(104, 28, 50, 0.22), inset 0 1px 2px rgba(255, 255, 255, 0.95), inset 0 -1px 2px rgba(196, 154, 71, 0.2)',
              }}
            >
              {/* Top Glass Specular Shine */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-white/90 to-transparent pointer-events-none" />

              {/* Card Header: Active Section Title & Minimize Button */}
              <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#C49A47]/30">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 animate-pulse shadow-[0_0_8px_rgba(245,206,54,0.8)]" />
                  <span className="text-[11px] sm:text-xs font-serif font-bold uppercase tracking-wider text-[#681C32] flex items-center gap-1">
                    {activeSection === 'haldi' && <><span>💧</span> Haldi Water Splash</>}
                    {activeSection === 'family' && <><span>💐</span> Praveen & Lakshmi Family</>}
                    {activeSection === 'timeline' && <><span>🔥</span> Sacred Kalyana Muhurtham</>}
                    {activeSection === 'mandapam' && <><span>🏛️</span> Grand Mandapam Scene</>}
                    {activeSection === 'venue' && <><span>📍</span> SRL Kalyana Mandapam</>}
                    {activeSection === 'hero' && <><span>🕉️</span> Divine Temple Aura</>}
                  </span>
                </div>

                <div className="flex items-center space-x-1">
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="p-1 rounded-full hover:bg-black/5 text-[#681C32] transition-colors cursor-pointer"
                    title="Minimize"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* ================= DYNAMIC 3D ANIMATION STAGE ================= */}
              <div className="relative w-full h-36 sm:h-40 rounded-2xl overflow-hidden mb-3 border border-white/60 shadow-inner bg-gradient-to-b from-white/30 to-[#FAF4EA]/40 flex items-center justify-center">
                {/* Subtle glass reflection gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/5 via-transparent to-white/40 pointer-events-none" />

                {/* 1. HALDI ANIMATION: Boy taking water and splashing onto Girl */}
                {activeSection === 'haldi' && (
                  <div 
                    onClick={triggerWaterSplash}
                    className="relative w-full h-full flex items-center justify-between px-3 cursor-pointer group"
                    title="Tap to splash water!"
                  >
                    {/* Floating turmeric marigold petals background */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      {[...Array(6)].map((_, i) => (
                        <motion.span
                          key={i}
                          animate={{
                            y: [0, 80],
                            x: [0, (i % 2 === 0 ? 15 : -15)],
                            rotate: [0, 360],
                            opacity: [0, 0.8, 0],
                          }}
                          transition={{
                            duration: 3 + i * 0.5,
                            repeat: Infinity,
                            delay: i * 0.4,
                            ease: 'easeInOut',
                          }}
                          className="absolute w-2 h-2 rounded-full bg-amber-400 shadow-xs"
                          style={{ left: `${15 + i * 14}%`, top: '-10px' }}
                        />
                      ))}
                    </div>

                    {/* Boy Avatar (Groom Chi. Praveen in Haldi Attire) */}
                    <motion.div
                      animate={{
                        rotate: [0, -6, 4, 0],
                        x: [0, 2, -2, 0],
                      }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                      className="relative z-10 flex flex-col items-center"
                    >
                      {/* Brass Water Pot (Kinnam / Lota) Splashing Water */}
                      <motion.div
                        animate={{
                          rotate: [-5, -28, 5, -5],
                          y: [0, -3, 2, 0],
                        }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute -right-3 top-7 z-20"
                      >
                        <div className="w-6 h-6 rounded-b-full bg-gradient-to-br from-[#FFE899] via-[#C49A47] to-[#8C6721] border border-[#FFF0B3] shadow-md flex items-center justify-center">
                          <span className="w-3.5 h-1.5 rounded-full bg-sky-300 shadow-xs animate-pulse" />
                        </div>
                      </motion.div>

                      {/* Boy Head & Festive Haldi Yellow Kurta */}
                      <div className="w-10 h-10 rounded-full bg-[#E8C2A0] border-2 border-amber-600/40 relative shadow-sm overflow-hidden flex items-center justify-center">
                        {/* Hair */}
                        <div className="absolute top-0 inset-x-0 h-3 bg-amber-950 rounded-b-lg" />
                        {/* Smile & Joyful Eyes */}
                        <div className="mt-1 flex items-center space-x-1.5">
                          <span className="w-1 h-1 rounded-full bg-amber-950" />
                          <span className="w-1 h-1 rounded-full bg-amber-950" />
                        </div>
                        {/* Haldi mark on cheek */}
                        <span className="absolute bottom-2 right-1.5 w-1.5 h-1.5 rounded-full bg-yellow-400 shadow-xs" />
                      </div>
                      {/* Yellow Festive Kurta Body */}
                      <div className="w-12 h-12 bg-gradient-to-b from-[#F5CE36] to-[#E6A817] rounded-t-2xl mt-0.5 border border-amber-400/60 shadow-sm flex flex-col items-center pt-1">
                        <span className="w-1.5 h-4 bg-amber-600/40 rounded-full" />
                      </div>
                      <span className="mt-1 text-[9px] font-serif font-bold text-[#681C32] bg-white/70 px-2 py-0.5 rounded-full shadow-2xs">
                        Praveen
                      </span>
                    </motion.div>

                    {/* DYNAMIC 3D ANIMATED WATER SPLASH STREAM & PARTICLES */}
                    <div className="relative flex-1 h-24 mx-1 flex items-center justify-center overflow-visible">
                      <svg className="w-full h-full overflow-visible" viewBox="0 0 120 70">
                        <defs>
                          <linearGradient id="haldiWaterStream" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.95" />
                            <stop offset="60%" stopColor="#7dd3fc" stopOpacity="0.9" />
                            <stop offset="100%" stopColor="#fde047" stopOpacity="0.9" />
                          </linearGradient>
                          <filter id="waterGlow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="1.5" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                          </filter>
                        </defs>

                        {/* Animated Curved Water Jet Arcing from Boy to Girl */}
                        <motion.path
                          d="M 12 36 Q 60 10, 108 42"
                          fill="none"
                          stroke="url(#haldiWaterStream)"
                          strokeWidth="5"
                          strokeLinecap="round"
                          filter="url(#waterGlow)"
                          initial={{ pathLength: 0.2, strokeDashoffset: 0 }}
                          animate={{
                            strokeDasharray: ['15 10', '25 15', '15 10'],
                            strokeDashoffset: [0, -50],
                          }}
                          transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
                        />

                        {/* Secondary Sparkle Water Droplets Stream */}
                        <motion.path
                          d="M 14 38 Q 62 18, 106 44"
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="2"
                          strokeDasharray="4 8"
                          animate={{ strokeDashoffset: [0, -40] }}
                          transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
                        />

                        {/* Splashing Water Droplets bursting near Girl */}
                        {[...Array(6)].map((_, i) => (
                          <motion.circle
                            key={i}
                            r={i % 2 === 0 ? "2.5" : "1.8"}
                            fill={i % 3 === 0 ? "#fde047" : "#38bdf8"}
                            animate={{
                              cx: [95, 105 + (i * 3), 112 + (i * 2)],
                              cy: [40, 20 + (i * 6), 55 + (i * 3)],
                              opacity: [0, 1, 0],
                              scale: [0.5, 1.3, 0.2],
                            }}
                            transition={{
                              duration: 1.1,
                              repeat: Infinity,
                              delay: i * 0.18,
                              ease: 'easeOut',
                            }}
                          />
                        ))}
                      </svg>

                      {/* Ripple on ground */}
                      <motion.div
                        animate={{ scale: [0.8, 1.4, 0.8], opacity: [0.4, 0.9, 0.4] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="absolute bottom-1 right-2 w-10 h-3 rounded-full border border-sky-400/60 bg-sky-300/20"
                      />
                    </div>

                    {/* Girl Avatar (Bride Chi. Sou. Lakshmi Prasanna) */}
                    <motion.div
                      animate={{
                        rotate: [0, 5, -3, 0],
                        y: [0, -2, 1, 0],
                      }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                      className="relative z-10 flex flex-col items-center"
                    >
                      {/* Bride Head with Jasmine Flowers and Blushing Haldi cheeks */}
                      <div className="w-10 h-10 rounded-full bg-[#E5B895] border-2 border-amber-600/40 relative shadow-sm overflow-hidden flex items-center justify-center">
                        {/* Long Dark Braid & Jasmine Garland */}
                        <div className="absolute top-0 inset-x-0 h-3 bg-amber-950 rounded-b-md" />
                        <span className="absolute -top-0.5 right-1 w-3 h-1.5 rounded-full bg-white shadow-2xs" />
                        {/* Playful smiling eyes dodging splash */}
                        <div className="mt-1 flex items-center space-x-1.5">
                          <span className="w-1 h-1 rounded-full bg-amber-950" />
                          <span className="w-1 h-1 rounded-full bg-amber-950" />
                        </div>
                        {/* Haldi marks on both cheeks */}
                        <span className="absolute bottom-2 left-1.5 w-1.5 h-1.5 rounded-full bg-yellow-400 shadow-xs" />
                        <span className="absolute bottom-2 right-1.5 w-1.5 h-1.5 rounded-full bg-yellow-400 shadow-xs" />
                      </div>
                      {/* Traditional Yellow Haldi Saree & Floral Jewelry */}
                      <div className="w-12 h-12 bg-gradient-to-b from-[#FFD700] via-[#F5CE36] to-[#E6A817] rounded-t-2xl mt-0.5 border border-amber-400/60 shadow-sm flex flex-col items-center pt-1 relative">
                        {/* Floral Mala */}
                        <div className="w-8 h-4 rounded-full border border-rose-500/80 bg-rose-100/40" />
                      </div>
                      <span className="mt-1 text-[9px] font-serif font-bold text-[#681C32] bg-white/70 px-2 py-0.5 rounded-full shadow-2xs">
                        Lakshmi
                      </span>
                    </motion.div>

                    {/* Bottom Hint */}
                    <div className="absolute bottom-1 inset-x-0 flex justify-center pointer-events-none">
                      <span className="text-[9px] font-sans font-bold text-amber-800/80 bg-amber-100/70 px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-2xs">
                        <Droplets className="w-2.5 h-2.5 text-sky-600 animate-bounce" /> Tap to Splash Water!
                      </span>
                    </div>
                  </div>
                )}

                {/* 2. FAMILY & COUPLE ANIMATION: Royal Couple Namaste & Flower Blessing Shower */}
                {activeSection === 'family' && (
                  <div 
                    onClick={triggerFlowerShower}
                    className="relative w-full h-full flex items-center justify-around px-4 cursor-pointer group"
                    title="Tap for Flower Shower!"
                  >
                    {/* Cascading Golden Akshata & Pink Rose Petals */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      {[...Array(8)].map((_, i) => (
                        <motion.span
                          key={i}
                          animate={{
                            y: [-10, 110],
                            x: [0, (i % 2 === 0 ? 10 : -10)],
                            rotate: [0, 360],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 3.2,
                            repeat: Infinity,
                            delay: i * 0.35,
                            ease: 'linear',
                          }}
                          className={`absolute w-2 h-2 rounded-full shadow-2xs ${
                            i % 2 === 0 ? 'bg-rose-400' : 'bg-amber-300'
                          }`}
                          style={{ left: `${10 + i * 11}%`, top: '-5px' }}
                        />
                      ))}
                    </div>

                    {/* Groom: Chi. P. Praveen (B.Tech.) in Silk Pattu Veshti */}
                    <motion.div
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                      className="relative z-10 flex flex-col items-center"
                    >
                      {/* Groom Head with Tilak */}
                      <div className="w-11 h-11 rounded-full bg-[#E8C2A0] border-2 border-[#C49A47] relative shadow-sm flex items-center justify-center overflow-hidden">
                        <div className="absolute top-0 inset-x-0 h-3 bg-amber-950 rounded-b-md" />
                        {/* Sacred Red & Sandalwood Tilak */}
                        <div className="absolute top-3.5 w-1 h-2 bg-red-600 rounded-full" />
                        <div className="mt-2.5 flex items-center space-x-2">
                          <span className="w-1 h-1 rounded-full bg-amber-950" />
                          <span className="w-1 h-1 rounded-full bg-amber-950" />
                        </div>
                      </div>
                      {/* Royal Ivory & Gold Zari Pattu Silk */}
                      <div className="w-13 h-14 bg-gradient-to-b from-[#FFFDF7] to-[#FAF4EA] rounded-t-2xl mt-0.5 border border-[#C49A47] shadow-sm flex flex-col items-center pt-1.5 relative">
                        {/* Red Rose & Jasmine Garland */}
                        <div className="w-9 h-5 rounded-full border-2 border-rose-600 bg-rose-50/50 flex items-center justify-center">
                          <span className="w-2 h-2 rounded-full bg-rose-600" />
                        </div>
                      </div>
                      <span className="mt-1 text-[9px] font-serif font-bold text-[#681C32] bg-white/70 px-2 py-0.5 rounded-full shadow-2xs">
                        Praveen
                      </span>
                    </motion.div>

                    {/* Center: Divine Auspicious Kalasam & Twin Golden Hearts */}
                    <div className="relative flex flex-col items-center z-10 mx-1">
                      <motion.div
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                        className="mb-1"
                      >
                        <Heart className="w-6 h-6 text-rose-600 fill-rose-600 drop-shadow-[0_2px_8px_rgba(225,29,72,0.5)]" />
                      </motion.div>
                      
                      {/* Sacred Kalasam Pot */}
                      <div className="relative flex flex-col items-center">
                        {/* Coconut & Mango leaves */}
                        <div className="w-4 h-3 bg-amber-900 rounded-t-full relative">
                          <span className="absolute -left-1.5 top-0 w-2 h-2 bg-green-700 rounded-full" />
                          <span className="absolute -right-1.5 top-0 w-2 h-2 bg-green-700 rounded-full" />
                        </div>
                        {/* Brass Pot */}
                        <div className="w-7 h-5 rounded-b-xl bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-700 border border-yellow-200 shadow-sm" />
                      </div>

                      <span className="mt-1 text-[8px] font-serif uppercase tracking-widest text-[#8C6721] font-bold">
                        Two Families United
                      </span>
                    </div>

                    {/* Bride: Chi. Sou. A. Lakshmi Prasanna in Kanjivaram Silk */}
                    <motion.div
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: 0.3, ease: 'easeInOut' }}
                      className="relative z-10 flex flex-col items-center"
                    >
                      {/* Bride Head with Maang Tikka */}
                      <div className="w-11 h-11 rounded-full bg-[#E5B895] border-2 border-[#C49A47] relative shadow-sm flex items-center justify-center overflow-hidden">
                        <div className="absolute top-0 inset-x-0 h-3 bg-amber-950 rounded-b-md" />
                        {/* Golden Maang Tikka & Bindi */}
                        <div className="absolute top-2 w-1.5 h-1.5 rounded-full bg-[#F5CE36]" />
                        <div className="absolute top-3.5 w-1 h-1 rounded-full bg-red-600" />
                        <div className="mt-2.5 flex items-center space-x-2">
                          <span className="w-1 h-1 rounded-full bg-amber-950" />
                          <span className="w-1 h-1 rounded-full bg-amber-950" />
                        </div>
                      </div>
                      {/* Royal Maroon Kanjivaram Silk Saree */}
                      <div className="w-13 h-14 bg-gradient-to-b from-[#681C32] to-[#451020] rounded-t-2xl mt-0.5 border border-[#C49A47] shadow-sm flex flex-col items-center pt-1.5 relative">
                        {/* Red Rose & Jasmine Garland */}
                        <div className="w-9 h-5 rounded-full border-2 border-rose-600 bg-rose-50/50 flex items-center justify-center">
                          <span className="w-2 h-2 rounded-full bg-rose-600" />
                        </div>
                      </div>
                      <span className="mt-1 text-[9px] font-serif font-bold text-[#681C32] bg-white/70 px-2 py-0.5 rounded-full shadow-2xs">
                        Lakshmi
                      </span>
                    </motion.div>

                    {/* Bottom Hint */}
                    <div className="absolute bottom-1 inset-x-0 flex justify-center pointer-events-none">
                      <span className="text-[9px] font-sans font-bold text-[#681C32] bg-rose-100/70 px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-2xs">
                        <Flower2 className="w-2.5 h-2.5 text-rose-600 animate-spin-slow" /> Tap for Flower Blessings!
                      </span>
                    </div>
                  </div>
                )}

                {/* 3. TIMELINE & MUHURTHAM: Sacred Agni Flame & Mangalya Dharanam Knot */}
                {activeSection === 'timeline' && (
                  <div className="relative w-full h-full flex flex-col items-center justify-center px-4">
                    <div className="flex items-center justify-center space-x-6">
                      {/* Left Kuthu Vilakku */}
                      <div className="flex flex-col items-center">
                        <div className="w-2 h-4 bg-gradient-to-t from-orange-500 to-yellow-300 rounded-full animate-flame-flicker" />
                        <div className="w-4 h-8 bg-gradient-to-b from-yellow-500 to-amber-700 rounded-t-md border border-yellow-200" />
                      </div>

                      {/* Center: Sacred Agni Kundam & Thirumaangalyam */}
                      <div className="flex flex-col items-center">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1], rotate: [0, 3, -3, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="flex items-center justify-center mb-1"
                        >
                          {/* Sacred Gold Mangalsutra Knot */}
                          <div className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-600 border border-yellow-100 shadow-md text-[10px] font-serif font-bold text-amber-950 flex items-center gap-1">
                            <span>⚜️</span> Thirumaangalyam <span>⚜️</span>
                          </div>
                        </motion.div>

                        {/* Sacred Fire Altar */}
                        <div className="relative flex flex-col items-center">
                          <div className="w-6 h-8 bg-gradient-to-t from-red-600 via-orange-500 to-yellow-300 rounded-full blur-[0.5px] animate-flame-flicker" />
                          <div className="w-16 h-4 bg-gradient-to-r from-amber-800 via-amber-600 to-amber-800 rounded-sm border-t border-amber-400 shadow-md" />
                        </div>
                      </div>

                      {/* Right Kuthu Vilakku */}
                      <div className="flex flex-col items-center">
                        <div className="w-2 h-4 bg-gradient-to-t from-orange-500 to-yellow-300 rounded-full animate-flame-flicker" />
                        <div className="w-4 h-8 bg-gradient-to-b from-yellow-500 to-amber-700 rounded-t-md border border-yellow-200" />
                      </div>
                    </div>

                    <span className="mt-2 text-[10px] font-serif font-bold text-[#681C32] bg-white/70 px-3 py-0.5 rounded-full shadow-2xs">
                      20 Nov 2026 • 4:30 AM to 6:00 AM (Mesham Lagnam)
                    </span>
                  </div>
                )}

                {/* 4. MANDAPAM & VENUE: SRL Kalyana Mandapam & Festive Music */}
                {(activeSection === 'mandapam' || activeSection === 'venue') && (
                  <div className="relative w-full h-full flex flex-col items-center justify-center px-4">
                    {/* Grand Mandapam Arch */}
                    <div className="flex items-center justify-center space-x-3">
                      {/* Left Temple Pillar */}
                      <div className="w-3 h-16 bg-gradient-to-b from-amber-700 via-yellow-500 to-amber-900 rounded-t-sm shadow-sm" />
                      
                      {/* Center Shrine & Map Pin */}
                      <div className="flex flex-col items-center">
                        <motion.div
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <MapPin className="w-8 h-8 text-[#681C32] fill-rose-100 drop-shadow-md" />
                        </motion.div>
                        <p className="font-serif text-xs font-bold text-[#681C32] mt-1 text-center">
                          SRL Kalyana Mandapam
                        </p>
                        <p className="text-[10px] font-sans text-[#8C6721] font-semibold">
                          Thirupathi Road, Venkatagiri, AP
                        </p>
                      </div>

                      {/* Right Temple Pillar */}
                      <div className="w-3 h-16 bg-gradient-to-b from-amber-700 via-yellow-500 to-amber-900 rounded-t-sm shadow-sm" />
                    </div>
                  </div>
                )}

                {/* 5. HERO / DEFAULT: Divine Ganesha & Murugan with Realistic Swinging Bell */}
                {activeSection === 'hero' && (
                  <div className="relative w-full h-full flex items-center justify-around px-4">
                    {/* Lord Ganesha 3D Relief Icon */}
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full p-1 bg-gradient-to-br from-yellow-300 via-amber-500 to-amber-800 border border-yellow-200 shadow-md overflow-hidden">
                        <img
                          src="/images/divine_ganesha_relief.jpg"
                          alt="Lord Ganesha"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <span className="text-[9px] font-serif font-bold text-[#681C32] mt-1">Ganesha</span>
                    </div>

                    {/* Authentic Swinging Temple Bell */}
                    <div 
                      onClick={() => weddingAudio.playTempleBell()}
                      className="cursor-pointer flex flex-col items-center animate-bell-swing origin-top"
                      title="Ring Bell!"
                    >
                      <img
                        src="/images/realistic_temple_bell.png"
                        alt="Temple Bell"
                        className="w-10 h-16 object-contain filter drop-shadow-md"
                      />
                      <span className="text-[8px] font-sans text-amber-900 font-bold bg-amber-100/70 px-1.5 rounded-full mt-0.5">
                        Ring Bell
                      </span>
                    </div>

                    {/* Lord Murugan 3D Relief Icon */}
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full p-1 bg-gradient-to-br from-yellow-300 via-amber-500 to-amber-800 border border-yellow-200 shadow-md overflow-hidden">
                        <img
                          src="/images/divine_murugan_relief.jpg"
                          alt="Lord Murugan"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <span className="text-[9px] font-serif font-bold text-[#681C32] mt-1">Murugan</span>
                    </div>
                  </div>
                )}
              </div>

              {/* ================= COMPACT BGM CONTROLS IN GLASS FINISH ================= */}
              <div className="flex items-center justify-between pt-1">
                {/* Play / Pause Toggle Button */}
                <div className="flex items-center space-x-2.5">
                  <button
                    onClick={handleTogglePlay}
                    className="w-9 h-9 rounded-full bg-gradient-to-br from-[#681C32] via-[#85233F] to-[#681C32] text-white flex items-center justify-center shadow-md hover:brightness-110 active:scale-95 transition-all cursor-pointer border border-[#C49A47]"
                    title={isPlaying ? "Pause music" : "Play 30s Tamil movie BGM"}
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4 fill-current" />
                    ) : (
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    )}
                  </button>

                  <div>
                    <span className="text-[9px] font-sans text-[#8C6721] uppercase tracking-wider block font-bold leading-tight">
                      {isPlaying ? 'Playing BGM (Stops at 30s)' : 'Tamil Movie BGM (30s)'}
                    </span>
                    <span className="text-xs font-serif text-[#681C32] block font-bold truncate max-w-[130px]">
                      Tamil Wedding BGM
                    </span>
                  </div>
                </div>

                {/* Animated Equalizer Sound Waves when Playing */}
                <div className="flex items-center space-x-2">
                  {isPlaying ? (
                    <div className="flex items-end space-x-0.5 h-4 px-2 py-0.5 rounded-full bg-white/60 border border-[#C49A47]/30">
                      <span className="w-1 h-2 bg-[#C49A47] animate-pulse" />
                      <span className="w-1 h-3.5 bg-[#681C32] animate-bounce" />
                      <span className="w-1 h-1.5 bg-[#C49A47] animate-pulse" />
                      <span className="w-1 h-3 bg-[#681C32] animate-bounce" />
                    </div>
                  ) : (
                    <button
                      onClick={handleToggleMute}
                      className="text-[#681C32] hover:text-[#C49A47] p-1.5 rounded-full hover:bg-black/5 transition-colors cursor-pointer"
                      title={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted || volume === 0 ? <VolumeX className="w-4 h-4 text-red-500" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                  )}
                </div>
              </div>

              {/* Quick Section Tabs */}
              <div className="grid grid-cols-4 gap-1 mt-2.5 pt-2 border-t border-[#C49A47]/25 text-[9px] font-serif font-bold">
                <button
                  onClick={() => setActiveSection('haldi')}
                  className={`py-1 rounded-lg transition-all text-center cursor-pointer ${
                    activeSection === 'haldi' 
                      ? 'bg-amber-400 text-amber-950 shadow-2xs' 
                      : 'bg-white/50 text-[#681C32] hover:bg-white/80'
                  }`}
                >
                  Haldi Splash
                </button>
                <button
                  onClick={() => setActiveSection('family')}
                  className={`py-1 rounded-lg transition-all text-center cursor-pointer ${
                    activeSection === 'family' 
                      ? 'bg-rose-500 text-white shadow-2xs' 
                      : 'bg-white/50 text-[#681C32] hover:bg-white/80'
                  }`}
                >
                  Couple
                </button>
                <button
                  onClick={() => setActiveSection('timeline')}
                  className={`py-1 rounded-lg transition-all text-center cursor-pointer ${
                    activeSection === 'timeline' 
                      ? 'bg-[#681C32] text-white shadow-2xs' 
                      : 'bg-white/50 text-[#681C32] hover:bg-white/80'
                  }`}
                >
                  Muhurtham
                </button>
                <button
                  onClick={() => setActiveSection('venue')}
                  className={`py-1 rounded-lg transition-all text-center cursor-pointer ${
                    activeSection === 'venue' 
                      ? 'bg-[#C49A47] text-white shadow-2xs' 
                      : 'bg-white/50 text-[#681C32] hover:bg-white/80'
                  }`}
                >
                  Mandapam
                </button>
              </div>
            </motion.div>
          ) : (
            /* ================= MINIMIZED FLOATING 3D GLASS PILL ================= */
            <motion.div
              key="glass-pill"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsExpanded(true)}
              className="flex items-center space-x-2.5 p-2 pr-3.5 rounded-full cursor-pointer transition-all hover:scale-105 active:scale-95 shadow-lg"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.75) 0%, rgba(255, 250, 240, 0.55) 100%)',
                backdropFilter: 'blur(20px) saturate(190%)',
                WebkitBackdropFilter: 'blur(20px) saturate(190%)',
                border: '1.5px solid rgba(255, 255, 255, 0.85)',
                boxShadow: '0 12px 30px -6px rgba(104, 28, 50, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.9)',
              }}
            >
              {/* Play / Pause Toggle inside Pill */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleTogglePlay();
                }}
                className="w-9 h-9 rounded-full bg-gradient-to-br from-[#681C32] via-[#85233F] to-[#681C32] text-white flex items-center justify-center shadow-md hover:brightness-110 transition-all cursor-pointer border border-[#C49A47]"
                title={isPlaying ? "Pause music" : "Play 30s Tamil movie BGM"}
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 fill-current" />
                ) : (
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                )}
              </button>

              <div className="text-left">
                <span className="text-[9px] font-sans text-[#8C6721] uppercase tracking-wider block font-bold leading-none">
                  {activeSection === 'haldi' && '💧 Haldi Splash'}
                  {activeSection === 'family' && '💐 Couple Blessing'}
                  {activeSection === 'timeline' && '🔥 Muhurtham'}
                  {activeSection === 'mandapam' && '🏛️ Mandapam'}
                  {activeSection === 'venue' && '📍 Venue'}
                  {activeSection === 'hero' && '🕉️ Divine Blessings'}
                </span>
                <span className="text-xs font-serif text-[#681C32] font-bold block leading-tight">
                  3D Animation & Music
                </span>
              </div>

              <ChevronUp className="w-4 h-4 text-[#681C32]" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
