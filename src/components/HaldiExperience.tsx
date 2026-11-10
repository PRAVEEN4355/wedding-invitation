import React from 'react';
import { motion } from 'framer-motion';
import { FlowerGarland, GoldCornerAccents } from './common/DecorativeOrnaments';
import { Sun, Calendar, Clock, MapPin, Sparkles } from 'lucide-react';
import { createGoogleCalendarUrl } from '../utils/calendar';
import { WEDDING_DATA } from '../config/weddingData';

export const HaldiExperience: React.FC = () => {
  const haldiEvent = WEDDING_DATA.events.find(e => e.id === 'haldi') || WEDDING_DATA.events[0];
  const calendarUrl = createGoogleCalendarUrl(haldiEvent);

  return (
    <section 
      id="haldi-section" 
      className="relative min-h-screen py-24 px-4 sm:px-6 bg-gradient-to-b from-[#FFFDF7] via-[#FFF9EC] to-[#FAF2DA] text-[#3D2106] overflow-hidden flex flex-col justify-center border-y-2 border-[#E8C86A]/40"
    >
      {/* Warm Golden Sunlight Glow */}
      <div className="absolute inset-0 bg-radial-gradient from-yellow-300/20 via-amber-200/10 to-transparent pointer-events-none" />

      {/* Top Garland */}
      <div className="absolute top-0 inset-x-0 z-20">
        <FlowerGarland className="bg-amber-100/60 border-b border-amber-300/40 py-2.5" />
      </div>

      <div className="relative z-20 max-w-6xl mx-auto w-full">
        {/* Haldi Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-[#FFF4C2] border border-[#F5CE36] text-[#8C5D00] text-xs sm:text-sm font-sans uppercase tracking-[0.2em] font-bold mb-3 shadow-xs">
            <Sun className="w-4 h-4 text-amber-500 animate-spin" style={{ animationDuration: '10s' }} />
            <span>Auspicious Nalangu & Haldi Ceremony</span>
          </div>

          <h2 className="font-rozha text-4xl sm:text-6xl md:text-7xl font-black text-[#5C3600] tracking-wide drop-shadow-sm">
            HALDI CEREMONY
          </h2>

          <p className="font-script text-2xl sm:text-4xl text-[#B87700] mt-1 font-semibold">
            "Let the celebrations begin!"
          </p>

          <p className="font-serif italic text-base sm:text-lg text-[#5A3810] max-w-2xl mx-auto mt-2 font-medium">
            An afternoon filled with pure turmeric, blooming marigolds, joyous laughter, and heartwarming family blessings.
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#E8B839] to-transparent mx-auto mt-4" />
        </motion.div>

        {/* Realistic Haldi Composition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Photorealistic South Indian Brass Urli & Rangoli Setup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-7 relative flex flex-col items-center justify-center"
          >
            <div className="relative w-full rounded-3xl overflow-hidden border-2 border-[#E5C058] shadow-[0_20px_50px_rgba(200,140,20,0.18)] bg-white/95 p-4 sm:p-6 backdrop-blur-sm">
              <GoldCornerAccents />

              {/* High-Resolution Local Photorealistic Haldi Image */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-lg border border-amber-300/80">
                <img
                  src="/images/realistic_south_indian_haldi.jpg"
                  alt="Authentic South Indian Haldi Nalangu Setup with Brass Urli, Marigolds, Turmeric, Sandalwood and Kumkum"
                  className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />

                {/* Bottom Auspicious Caption */}
                <div className="absolute bottom-4 inset-x-0 flex justify-center px-4">
                  <div className="px-5 py-2 rounded-full bg-white/95 border border-[#E5C058] shadow-lg flex items-center space-x-2 backdrop-blur-md">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping" />
                    <span className="font-serif text-xs sm:text-sm font-bold text-[#633900] tracking-wide">
                      Traditional Carved Brass Urli with Sacred Turmeric & Marigolds
                    </span>
                  </div>
                </div>
              </div>

              {/* Three Sacred Haldi Rituals */}
              <div className="grid grid-cols-3 gap-3 mt-5 text-center text-xs">
                <div className="p-3 rounded-2xl bg-[#FFF9E6] border border-amber-200 shadow-2xs">
                  <span className="text-xl block mb-1">🌼</span>
                  <strong className="text-[#633900] block font-serif">Nalangu</strong>
                  <span className="text-[10px] text-amber-800 font-sans font-medium">Turmeric blessing</span>
                </div>
                <div className="p-3 rounded-2xl bg-[#FFF9E6] border border-amber-200 shadow-2xs">
                  <span className="text-xl block mb-1">🪔</span>
                  <strong className="text-[#633900] block font-serif">Mangala Snanam</strong>
                  <span className="text-[10px] text-amber-800 font-sans font-medium">Purifying holy bath</span>
                </div>
                <div className="p-3 rounded-2xl bg-[#FFF9E6] border border-amber-200 shadow-2xs">
                  <span className="text-xl block mb-1">✨</span>
                  <strong className="text-[#633900] block font-serif">Aarathi</strong>
                  <span className="text-[10px] text-amber-800 font-sans font-medium">Elders' warding off evil</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Haldi Ceremony Details Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative p-6 sm:p-8 rounded-3xl bg-white/95 border-2 border-[#E5C058] shadow-[0_15px_40px_rgba(200,140,20,0.15)] backdrop-blur-md"
          >
            <GoldCornerAccents />

            <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-[#FFF4C2] border border-[#F5CE36] text-[#7A4B00] text-xs font-serif font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Groom Celebration</span>
            </div>

            <h3 className="font-rozha text-2xl sm:text-3xl text-[#5C3600] mb-3 leading-snug">
              Join us for the beautiful Haldi celebration of Praveen.
            </h3>

            <p className="font-sans text-xs sm:text-sm text-[#4A2D09] leading-relaxed mb-6 font-medium">
              Friends and family gather to apply sacred golden turmeric, fragrant sandalwood paste, and shower the groom with colorful marigold flower petals in this auspicious pre-wedding tradition.
            </p>

            {/* Event Specifics Box */}
            <div className="space-y-3.5 py-4 border-y border-amber-200/80 my-5">
              <div className="flex items-center space-x-3 text-[#3D2106]">
                <div className="p-2.5 rounded-xl bg-[#FFF6D4] text-[#8C5D00] border border-amber-300">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-amber-800 font-sans font-bold block">Date</span>
                  <span className="font-serif font-bold text-sm sm:text-base text-[#422405]">Thursday, 19 November 2026</span>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-[#3D2106]">
                <div className="p-2.5 rounded-xl bg-[#FFF6D4] text-[#8C5D00] border border-amber-300">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-amber-800 font-sans font-bold block">Timing</span>
                  <span className="font-serif font-bold text-sm sm:text-base text-[#422405]">2:00 PM onwards</span>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-[#3D2106]">
                <div className="p-2.5 rounded-xl bg-[#FFF6D4] text-[#8C5D00] border border-amber-300">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-amber-800 font-sans font-bold block">Venue</span>
                  <span className="font-serif font-bold text-sm sm:text-base text-[#422405]">SRL Kalyana Mandapam, Venkatagiri</span>
                </div>
              </div>
            </div>

            {/* Add to Calendar & Dress Code */}
            <div className="flex flex-col sm:flex-row items-center gap-3 mt-6">
              <a
                href={calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-gradient-to-r from-[#F5CE36] via-[#FFD700] to-[#E6A817] text-[#3D2106] font-serif font-black text-xs sm:text-sm tracking-wider uppercase shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all text-center"
              >
                Add Haldi to Calendar
              </a>

              <div className="w-full sm:w-auto text-center sm:text-right px-4 py-2 rounded-xl bg-[#FFF9E6] border border-amber-300">
                <span className="text-[10px] uppercase tracking-wider text-amber-800 font-sans font-bold block">Dress Code</span>
                <span className="text-xs text-[#522D04] font-serif font-bold">Vibrant Yellow</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
