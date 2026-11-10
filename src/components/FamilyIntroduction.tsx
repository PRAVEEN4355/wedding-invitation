import React from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DATA } from '../config/weddingData';
import { GoldCornerAccents, KolamPattern } from './common/DecorativeOrnaments';
import { Heart, Users } from 'lucide-react';

export const FamilyIntroduction: React.FC = () => {
  const { groom, bride } = WEDDING_DATA.couple;
  const { awaitingPresence, compliments } = WEDDING_DATA.familyMembers;

  return (
    <section id="family-section" className="relative py-24 px-4 sm:px-6 bg-gradient-to-b from-[#FFFDF7] via-[#FAF4EA] to-[#F5ECE0] text-[#3D141F] overflow-hidden border-b border-[#C49A47]/30">
      <KolamPattern opacity="opacity-15" />

      <div className="relative z-20 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#FFF5DA] border border-[#C49A47] text-[#681C32] text-xs uppercase tracking-widest font-bold mb-3 shadow-xs">
            <Users className="w-3.5 h-3.5 text-[#C49A47]" />
            <span>Family Heritage & Auspicious Lineage</span>
          </div>
          <h2 className="font-rozha text-3xl sm:text-5xl text-[#681C32] tracking-wide">
            Groom & Bride Families
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#6B3A48] max-w-xl mx-auto mt-2 tracking-wide font-medium">
            With the sacred blessings of our beloved parents and elders
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#C49A47] to-transparent mx-auto mt-4" />
        </div>

        {/* Groom & Bride Two Cards Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          {/* 1. GROOM CARD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative p-6 sm:p-10 rounded-3xl bg-white/95 border-2 border-[#C49A47] shadow-[0_15px_40px_rgba(104,28,50,0.1)] backdrop-blur-md flex flex-col justify-between"
          >
            <GoldCornerAccents />

            <div>
              <div className="flex items-center justify-between border-b border-[#C49A47]/30 pb-3 mb-6">
                <span className="text-xs uppercase tracking-widest text-[#681C32] font-sans font-bold flex items-center gap-1.5">
                  <span>🤵</span> Groom
                </span>
                <span className="text-xs font-serif text-[#8C6721] italic font-semibold">Mapillai</span>
              </div>

              <div className="text-center my-4">
                <span className="font-script text-2xl text-[#9A6F25]">
                  {groom.title}
                </span>
                <h3 className="font-rozha text-3xl sm:text-4xl lg:text-5xl font-black text-[#681C32] my-1 drop-shadow-sm">
                  {groom.name}
                </h3>
                <span className="inline-block px-3.5 py-1 rounded-full bg-[#FFF5DA] text-[#681C32] font-serif text-xs font-bold tracking-wider border border-[#C49A47]">
                  {groom.degree}
                </span>
              </div>

              <div className="mt-8 pt-6 border-t border-[#C49A47]/30 text-center space-y-2">
                <span className="text-xs uppercase tracking-wider text-[#8C6721] font-sans font-bold block">
                  Beloved Son of
                </span>
                <p className="font-serif text-base sm:text-lg text-[#380E1B] font-bold">
                  {groom.parents}
                </p>
                <p className="font-sans text-xs sm:text-sm text-[#6B3A48] font-medium">
                  {groom.location}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#C49A47]/20 flex items-center justify-center space-x-1.5">
              {[...Array(7)].map((_, i) => (
                <span key={i} className="w-2.5 h-2.5 rounded-full bg-amber-100 border border-[#C49A47]/40 shadow-2xs" />
              ))}
            </div>
          </motion.div>

          {/* Central Connecting Heart */}
          <div className="hidden md:flex absolute inset-y-0 left-1/2 -translate-x-1/2 items-center justify-center pointer-events-none z-30">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="p-3.5 rounded-full bg-[#FFF5DA] border-2 border-[#C49A47] shadow-lg"
            >
              <Heart className="w-7 h-7 text-rose-600 fill-rose-600" />
            </motion.div>
          </div>

          {/* 2. BRIDE CARD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative p-6 sm:p-10 rounded-3xl bg-white/95 border-2 border-[#C49A47] shadow-[0_15px_40px_rgba(104,28,50,0.1)] backdrop-blur-md flex flex-col justify-between"
          >
            <GoldCornerAccents />

            <div>
              <div className="flex items-center justify-between border-b border-[#C49A47]/30 pb-3 mb-6">
                <span className="text-xs uppercase tracking-widest text-[#681C32] font-sans font-bold flex items-center gap-1.5">
                  <span>👰</span> Bride
                </span>
                <span className="text-xs font-serif text-[#8C6721] italic font-semibold">Manapenn</span>
              </div>

              <div className="text-center my-4">
                <span className="font-script text-2xl text-[#9A6F25]">
                  {bride.title}
                </span>
                <h3 className="font-rozha text-2xl sm:text-3.5xl lg:text-4xl font-black text-[#681C32] my-1 drop-shadow-sm">
                  {bride.name}
                </h3>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-[#6B3A48] text-xs font-serif italic">
                    {bride.alias}
                  </span>
                  <span className="text-[#C49A47]">•</span>
                  <span className="inline-block px-3.5 py-1 rounded-full bg-[#FFF5DA] text-[#681C32] font-serif text-xs font-bold tracking-wider border border-[#C49A47]">
                    {bride.degree}
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#C49A47]/30 text-center space-y-2">
                <span className="text-xs uppercase tracking-wider text-[#8C6721] font-sans font-bold block">
                  Beloved Daughter of
                </span>
                <p className="font-serif text-base sm:text-lg text-[#380E1B] font-bold">
                  {bride.parents}
                </p>
                <p className="font-sans text-xs sm:text-sm text-[#6B3A48] font-medium">
                  {bride.location}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#C49A47]/20 flex items-center justify-center space-x-1.5">
              {[...Array(7)].map((_, i) => (
                <span key={i} className="w-2.5 h-2.5 rounded-full bg-amber-100 border border-[#C49A47]/40 shadow-2xs" />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Welcoming Family Members Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-14 p-6 sm:p-8 rounded-3xl bg-white/90 border border-[#C49A47]/50 backdrop-blur-sm text-center shadow-md"
        >
          <h4 className="font-rozha text-lg sm:text-xl text-[#681C32] uppercase tracking-wider mb-4 font-bold">
            Awaiting Your Gracious Presence
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm max-w-4xl mx-auto">
            {awaitingPresence.map((member, idx) => (
              <div key={idx} className="p-3.5 rounded-2xl bg-[#FFF9ED] border border-[#C49A47]/40 shadow-2xs">
                <p className="font-serif font-bold text-[#380E1B]">{member.name}</p>
                <p className="text-[11px] text-[#8C6721] font-sans mt-0.5 font-medium">{member.role}</p>
              </div>
            ))}
          </div>

          <p className="font-serif italic text-[#8C6721] text-xs sm:text-sm mt-6 font-semibold">
            {compliments}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
