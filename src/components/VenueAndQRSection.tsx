import React from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DATA } from '../config/weddingData';
import { MapPin, Navigation, Share2, Eye, ExternalLink } from 'lucide-react';
import { GoldCornerAccents, KolamPattern } from './common/DecorativeOrnaments';

interface VenueAndQRSectionProps {
  onOpenInvitationModal: () => void;
}

export const VenueAndQRSection: React.FC<VenueAndQRSectionProps> = ({ onOpenInvitationModal }) => {
  const { venue } = WEDDING_DATA;

  const handleShareLocation = () => {
    if (navigator.share) {
      navigator.share({
        title: `${venue.fullName} - Praveen & Lakshmi Prasanna Wedding Venue`,
        text: `Venue Location for Praveen & Lakshmi Prasanna Wedding: ${venue.fullName}, ${venue.address}`,
        url: venue.googleMapsUrl,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(venue.googleMapsUrl);
      alert('Venue location link copied to clipboard!');
    }
  };

  return (
    <section id="venue-section" className="relative py-24 px-4 sm:px-6 bg-gradient-to-b from-[#FFFDF7] via-[#FAF4EA] to-[#F5ECE0] text-[#3D141F] overflow-hidden border-b border-[#C49A47]/30">
      <KolamPattern opacity="opacity-15" />

      <div className="relative z-20 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#FFF5DA] border border-[#C49A47] text-[#681C32] text-xs uppercase tracking-widest font-bold mb-3 shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-[#C49A47] animate-bounce" />
            <span>Sacred Destination & Navigation</span>
          </div>
          <h2 className="font-rozha text-3xl sm:text-5xl text-[#681C32] tracking-wide">
            Wedding Venue & Location
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#6B3A48] max-w-xl mx-auto mt-2 tracking-wide font-medium">
            Find your way easily to SRL Kalyana Mandapam, Venkatagiri with direct Google Maps guidance
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#C49A47] to-transparent mx-auto mt-4" />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left: Venue Details Card in Light Theme */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 relative p-4 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-white/95 border-2 border-[#C49A47] shadow-[0_15px_40px_rgba(104,28,50,0.1)] backdrop-blur-md"
          >
            <GoldCornerAccents />

            <div className="flex items-center space-x-3.5 sm:space-x-4 mb-5 sm:mb-6">
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#FFF5DA] via-[#F3DB98] to-[#C49A47] flex items-center justify-center text-[#681C32] shadow-md border border-[#8C6721] flex-shrink-0"
              >
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-[#681C32] fill-[#681C32]/20" />
              </motion.div>
              <div>
                <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#8C6721] font-sans font-bold">
                  Auspicious Mandapam
                </span>
                <h3 className="font-rozha text-xl sm:text-3xl text-[#681C32] font-bold">
                  {venue.fullName}
                </h3>
              </div>
            </div>

            <div className="space-y-2.5 sm:space-y-3 py-3 sm:py-4 border-y border-[#C49A47]/30 my-5 sm:my-6">
              <p className="font-serif text-base sm:text-lg text-[#380E1B] font-bold">
                {venue.address}
              </p>
              <p className="font-sans text-xs sm:text-sm text-[#6B3A48] font-medium">
                {venue.city}
              </p>
              <p className="text-[11px] sm:text-xs font-sans text-[#8C6721] italic pt-1 font-semibold">
                Landmark: Conveniently situated on Thirupathi Main Road with ample guest parking.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3 mt-6 w-full">
              <a
                href={venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#681C32] to-[#8C2242] text-white font-serif font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all border border-[#C49A47] text-center"
              >
                <Navigation className="w-4 h-4 fill-current flex-shrink-0" />
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70 flex-shrink-0" />
              </a>

              <button
                onClick={handleShareLocation}
                className="inline-flex items-center justify-center space-x-2 w-full sm:w-auto px-4 sm:px-5 py-3 sm:py-3.5 rounded-full bg-[#FFF5DA] hover:bg-[#FFEEC2] border border-[#C49A47] text-[#681C32] font-serif text-xs uppercase font-bold tracking-wider transition-all text-center cursor-pointer"
              >
                <Share2 className="w-4 h-4 text-[#C49A47] flex-shrink-0" />
                <span>Share Location</span>
              </button>

              <button
                onClick={onOpenInvitationModal}
                className="inline-flex items-center justify-center space-x-2 w-full sm:w-auto px-4 sm:px-5 py-3 sm:py-3.5 rounded-full bg-white hover:bg-stone-50 border border-[#C49A47] text-[#4A1224] font-serif text-xs uppercase font-bold tracking-wider transition-all shadow-xs text-center cursor-pointer"
              >
                <Eye className="w-4 h-4 text-[#C49A47] flex-shrink-0" />
                <span>Original Invitation Card</span>
              </button>
            </div>
          </motion.div>

          {/* Right: Original QR Code Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-5 relative p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/95 border-2 border-[#C49A47] shadow-[0_15px_40px_rgba(104,28,50,0.1)] backdrop-blur-md flex flex-col items-center text-center"
          >
            <GoldCornerAccents />

            <div className="relative p-3 sm:p-4 bg-white rounded-2xl shadow-md border-4 border-[#F3DB98] max-w-[220px] sm:max-w-[260px] w-full aspect-square flex items-center justify-center my-2">
              <img
                src={venue.qrImagePath}
                alt="Original Scannable Wedding Venue QR Code - SRL Kalyana Mandapam, Venkatagiri"
                className="w-full h-full object-contain select-none"
                style={{ imageRendering: 'pixelated' }}
                loading="eager"
              />
            </div>

            <div className="mt-4 flex flex-col items-center">
              <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-[#FFF5DA] text-[#681C32] border border-[#C49A47] text-[11px] sm:text-xs font-sans font-bold uppercase tracking-widest shadow-2xs">
                <span>📱</span>
                <span>Scan for Venue Location</span>
              </span>

              <p className="text-xs text-[#6B3A48] font-sans mt-2 max-w-xs font-medium">
                Scan with any smartphone camera to open exact turn-by-turn directions directly in Google Maps.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#C49A47]/30 w-full text-center">
              <a
                href={venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-[#681C32] hover:underline font-mono break-all block font-semibold"
              >
                {venue.googleMapsUrl}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
