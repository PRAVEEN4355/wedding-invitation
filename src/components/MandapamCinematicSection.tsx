import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MangoLeafToran, FlowerGarland, KolamPattern, GoldCornerAccents } from './common/DecorativeOrnaments';
import { Sparkles, Heart } from 'lucide-react';

export const MandapamCinematicSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'both' | 'mandapam' | 'lamp'>('both');

  return (
    <section id="mandapam-section" className="relative min-h-screen py-20 px-4 sm:px-6 bg-gradient-to-b from-[#FFFDF7] via-[#FAF4EA] to-[#F5ECE0] text-[#3D141F] overflow-hidden flex flex-col items-center justify-between border-b border-[#C49A47]/30">
      <KolamPattern opacity="opacity-15" />

      {/* Top Floral Arch */}
      <div className="w-full relative z-20 flex flex-col items-center">
        <MangoLeafToran />
        <FlowerGarland className="opacity-95 -mt-1" />
      </div>

      {/* Central Content */}
      <div className="relative z-10 w-full max-w-6xl my-auto flex flex-col items-center">
        {/* Title Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-[#FFF5DA] border border-[#C49A47] text-[#681C32] text-xs uppercase tracking-widest font-bold mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C49A47]" />
            <span>Divine Sanctum of Holy Matrimony</span>
          </div>

          <h2 className="font-rozha text-3xl sm:text-5xl md:text-6xl text-[#681C32] tracking-wider drop-shadow-sm">
            Mandapam & Mangala Vilakku
          </h2>

          <p className="font-serif italic text-base sm:text-lg text-[#6B3A48] max-w-2xl mx-auto mt-2 font-medium">
            Illuminated with traditional brass Kuthu Vilakku flames and blessed by sacred Vedic mantras at SRL Kalyana Mandapam
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#C49A47] to-transparent mx-auto mt-4" />
        </motion.div>

        {/* Tab Switcher */}
        <div className="flex items-center justify-center space-x-2 mb-8 bg-white/80 p-1.5 rounded-full border border-[#C49A47]/40 shadow-xs">
          <button
            onClick={() => setActiveTab('both')}
            className={`px-4 sm:px-6 py-2 rounded-full text-xs font-serif font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'both'
                ? 'bg-gradient-to-r from-[#681C32] to-[#8C2242] text-white shadow-sm'
                : 'text-[#681C32] hover:bg-[#FFF5DA]'
            }`}
          >
            All Views
          </button>
          <button
            onClick={() => setActiveTab('mandapam')}
            className={`px-4 sm:px-6 py-2 rounded-full text-xs font-serif font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'mandapam'
                ? 'bg-gradient-to-r from-[#681C32] to-[#8C2242] text-white shadow-sm'
                : 'text-[#681C32] hover:bg-[#FFF5DA]'
            }`}
          >
            🏛️ Kalyana Mandapam
          </button>
          <button
            onClick={() => setActiveTab('lamp')}
            className={`px-4 sm:px-6 py-2 rounded-full text-xs font-serif font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'lamp'
                ? 'bg-gradient-to-r from-[#681C32] to-[#8C2242] text-white shadow-sm'
                : 'text-[#681C32] hover:bg-[#FFF5DA]'
            }`}
          >
            🪔 Brass Kuthu Vilakku
          </button>
        </div>

        {/* Photorealistic Dual Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-stretch">
          {/* Card 1: Traditional South Indian Brass Kuthu Vilakku Lamp */}
          {(activeTab === 'both' || activeTab === 'lamp') && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`${
                activeTab === 'lamp' ? 'lg:col-span-12 max-w-2xl mx-auto' : activeTab === 'both' ? 'lg:col-span-5' : 'hidden'
              } relative rounded-3xl overflow-hidden border-2 border-[#C49A47] shadow-[0_20px_50px_rgba(104,28,50,0.12)] bg-white/95 p-4 sm:p-6 flex flex-col justify-between`}
            >
              <GoldCornerAccents />

              <div>
                {/* Lamp Image Container */}
                <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-lg border border-[#C49A47]/40 bg-[#FAF4EA]">
                  <img
                    src="/images/realistic_brass_kuthu_vilakku.jpg"
                    alt="Authentic Traditional South Indian Brass Kuthu Vilakku with Five Lit Flames and Jasmine Garlands"
                    className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />

                  {/* Flame Badge */}
                  <div className="absolute bottom-3 inset-x-0 flex justify-center px-3">
                    <div className="px-4 py-1.5 rounded-full bg-white/95 border border-[#C49A47] shadow-md flex items-center space-x-2 backdrop-blur-md">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping" />
                      <span className="font-serif text-xs font-bold text-[#681C32] tracking-wide">
                        Sacred Five-Wick Brass Kuthu Vilakku
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <h3 className="font-rozha text-xl sm:text-2xl text-[#681C32] font-bold">
                    Mangala Kuthu Vilakku
                  </h3>
                  <p className="font-serif italic text-xs sm:text-sm text-[#8C5D00] font-semibold mt-0.5">
                    "Deepam Jyothi Parabrahma" • The Flame of Divine Blessings
                  </p>
                  <p className="text-xs text-[#5A2C18] font-sans mt-2 leading-relaxed font-medium">
                    Adorned with fragrant jasmine strands (Mullai) and auspicious pink lotus petals. The five wicks symbolize health, wisdom, prosperity, longevity, and divine harmony for the newlyweds.
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#C49A47]/30 flex items-center justify-between text-xs text-[#8C6721] font-serif font-bold">
                <span>🪔 Auspicious Agni</span>
                <span>✨ Eternal Radiance</span>
              </div>
            </motion.div>
          )}

          {/* Card 2: Grand Wedding Mandapam */}
          {(activeTab === 'both' || activeTab === 'mandapam') && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className={`${
                activeTab === 'mandapam' ? 'lg:col-span-12 max-w-4xl mx-auto' : activeTab === 'both' ? 'lg:col-span-7' : 'hidden'
              } relative rounded-3xl overflow-hidden border-2 border-[#C49A47] shadow-[0_20px_50px_rgba(104,28,50,0.12)] bg-white/95 p-4 sm:p-6 flex flex-col justify-between`}
            >
              <GoldCornerAccents />

              <div>
                {/* Mandapam Image Container */}
                <div className="relative aspect-[16/10] sm:aspect-[16/11] w-full rounded-2xl overflow-hidden shadow-lg border border-[#C49A47]/40 bg-[#FAF4EA]">
                  <img
                    src="/images/realistic_mandapam.jpg"
                    alt="Authentic South Indian Temple Wedding Mandapam with Brass Kuthu Vilakku, Sacred Havan Fire, Carved Pillars and Banana Stems"
                    className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />

                  {/* Overlay Badge */}
                  <div className="absolute bottom-3 inset-x-0 flex justify-center px-3">
                    <div className="px-4 py-1.5 rounded-full bg-white/95 border border-[#C49A47] shadow-md flex items-center space-x-2 backdrop-blur-md">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping" />
                      <span className="font-serif text-xs font-bold text-[#681C32] tracking-wide">
                        SRL Kalyana Mandapam, Venkatagiri
                      </span>
                    </div>
                  </div>
                </div>

                {/* Mandapam Description */}
                <div className="w-full mt-4 text-center py-4 px-4 bg-gradient-to-br from-[#FFF9ED] via-[#FAF4EA] to-[#F5ECE0] rounded-2xl border border-[#C49A47]/30 shadow-inner">
                  <span className="text-2xl block mb-1">🏛️</span>
                  <h3 className="font-rozha text-xl sm:text-2xl text-[#681C32] font-bold mb-1">
                    Kalyana Muhurtha Mandapam
                  </h3>
                  <p className="font-serif italic text-xs sm:text-sm text-[#8C5D00] font-semibold mb-1">
                    Mesham Lagnam • Friday, 20 November 2026 • 4:30 AM – 6:00 AM
                  </p>
                  <p className="max-w-xl mx-auto text-xs sm:text-sm text-[#4A1B28] font-sans leading-relaxed">
                    Elegantly adorned with fragrant Madurai Jasmine garlands, golden Marigold torans, traditional banana trees (Vaazhai Maram), and the holy Havan Agni kundam.
                  </p>

                  <div className="mt-3 flex items-center justify-center space-x-2 text-rose-600">
                    <span className="h-px w-10 bg-[#C49A47]" />
                    <Heart className="w-3.5 h-3.5 fill-current animate-pulse" />
                    <span className="h-px w-10 bg-[#C49A47]" />
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#C49A47]/30 flex items-center justify-between text-xs text-[#8C6721] font-serif font-bold">
                <span>📍 Thirupathi Road, Venkatagiri</span>
                <span>🙏 All Relatives & Friends Welcome</span>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <div className="w-full relative z-20 flex justify-center mt-6">
        <FlowerGarland className="opacity-95" />
      </div>
    </section>
  );
};
