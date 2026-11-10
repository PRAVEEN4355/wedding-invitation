import React from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DATA } from '../config/weddingData';
import { createGoogleCalendarUrl } from '../utils/calendar';
import { Calendar, Clock, MapPin, Sparkles, ExternalLink } from 'lucide-react';
import { GoldCornerAccents, KolamPattern } from './common/DecorativeOrnaments';

export const WeddingTimeline: React.FC = () => {
  return (
    <section id="events-section" className="relative py-24 px-4 sm:px-6 bg-gradient-to-b from-[#F5ECE0] via-[#FAF4EA] to-[#FFFDF7] text-[#3D141F] overflow-hidden border-b border-[#C49A47]/30">
      <KolamPattern opacity="opacity-15" />

      <div className="relative z-20 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#FFF5DA] border border-[#C49A47] text-[#681C32] text-xs uppercase tracking-widest font-bold mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C49A47]" />
            <span>Sacred Schedule of Festivities</span>
          </div>
          <h2 className="font-rozha text-3xl sm:text-5xl text-[#681C32] tracking-wide">
            Wedding Celebration Timeline
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#6B3A48] max-w-xl mx-auto mt-2 tracking-wide font-medium">
            Three auspicious gatherings filled with tradition, music, love, and sacred rituals
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#C49A47] to-transparent mx-auto mt-4" />
        </div>

        {/* Timeline Event Cards */}
        <div className="space-y-10 relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-1 bg-gradient-to-b from-[#F5CE36] via-[#C49A47] to-[#8C6721] rounded-full opacity-50 pointer-events-none" />

          {WEDDING_DATA.events.map((event, index) => {
            const calendarUrl = createGoogleCalendarUrl(event);
            const isEven = index % 2 === 0;

            let cardThemeClass = '';
            let badgeBg = '';
            let iconSymbol = '🪔';

            if (event.theme === 'haldi') {
              cardThemeClass = 'border-[#E5C058] bg-white/95 shadow-[0_15px_35px_rgba(200,140,20,0.1)]';
              badgeBg = 'bg-[#FFF4C2] text-[#8C5D00] border-[#F5CE36]';
              iconSymbol = '🌼';
            } else if (event.theme === 'reception') {
              cardThemeClass = 'border-[#C49A47] bg-white/95 shadow-[0_15px_35px_rgba(104,28,50,0.1)]';
              badgeBg = 'bg-rose-50 text-[#681C32] border-rose-300';
              iconSymbol = '✨';
            } else {
              cardThemeClass = 'border-[#C49A47] bg-white/95 shadow-[0_15px_35px_rgba(104,28,50,0.12)]';
              badgeBg = 'bg-[#FFF5DA] text-[#681C32] border-[#C49A47]';
              iconSymbol = '🪔';
            }

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row items-center gap-6 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Event Card Box */}
                <div className="w-full md:w-[46%]">
                  <div className={`relative p-6 sm:p-8 rounded-3xl border-2 backdrop-blur-md ${cardThemeClass}`}>
                    <GoldCornerAccents />

                    {/* Top Row */}
                    <div className="flex items-center justify-between pb-3 border-b border-[#C49A47]/20 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-sans font-bold uppercase tracking-widest border ${badgeBg}`}>
                        EVENT {event.number}
                      </span>
                      {event.tamilTitle && (
                        <span className="text-xs font-serif text-[#8C6721] italic font-semibold">
                          {event.tamilTitle}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-rozha text-2xl sm:text-3xl font-bold text-[#681C32] mb-2">
                      {event.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-[#4A1B28] leading-relaxed mb-6 font-medium">
                      {event.description}
                    </p>

                    {/* Event Metadata Details */}
                    <div className="space-y-2.5 py-3 border-y border-[#C49A47]/20 my-4 text-xs sm:text-sm">
                      <div className="flex items-center space-x-2 text-[#380E1B]">
                        <Calendar className="w-4 h-4 text-[#C49A47] flex-shrink-0" />
                        <span className="font-bold">{event.date} ({event.day})</span>
                      </div>
                      <div className="flex items-center space-x-2 text-[#380E1B]">
                        <Clock className="w-4 h-4 text-[#C49A47] flex-shrink-0" />
                        <span className="font-medium">{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-[#5A2C18]">
                        <MapPin className="w-4 h-4 text-[#C49A47] flex-shrink-0" />
                        <span className="truncate">{event.location}</span>
                      </div>
                    </div>

                    {/* Add to Google Calendar Button */}
                    <div className="mt-5 flex items-center justify-between pt-2">
                      <a
                        href={calendarUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#FFF5DA] hover:bg-[#FFEEC2] border border-[#C49A47] text-[#681C32] font-serif text-xs font-bold uppercase tracking-wider transition-all hover:scale-105 active:scale-95 shadow-sm"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Add to Google Calendar</span>
                        <ExternalLink className="w-3 h-3 ml-1 opacity-70" />
                      </a>

                      {event.dressCode && (
                        <span className="hidden sm:inline-block text-[10px] text-[#8C6721] font-sans font-semibold italic max-w-[140px] text-right truncate" title={event.dressCode}>
                          {event.dressCode}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Central Milestone Icon */}
                <div className="hidden md:flex flex-col items-center justify-center w-[8%] z-30">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFF5DA] via-[#F3DB98] to-[#C49A47] border-2 border-[#8C6721] shadow-md flex items-center justify-center text-lg cursor-pointer"
                  >
                    <span>{iconSymbol}</span>
                  </motion.div>
                </div>

                <div className="hidden md:block w-full md:w-[46%]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
