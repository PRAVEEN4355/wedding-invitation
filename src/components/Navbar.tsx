import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart, Calendar, MapPin, Users, Sparkles, Image as ImageIcon, BookOpen } from 'lucide-react';

interface NavbarProps {
  onOpenInvitationModal: () => void;
  onOpenShareModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInvitationModal, onOpenShareModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Countdown', href: '#countdown-section', icon: <Calendar className="w-4 h-4 text-[#C49A47]" /> },
    { name: 'Haldi', href: '#haldi-section', icon: <Sparkles className="w-4 h-4 text-amber-500" /> },
    { name: 'Families', href: '#family-section', icon: <Users className="w-4 h-4 text-[#C49A47]" /> },
    { name: 'Timeline', href: '#events-section', icon: <Calendar className="w-4 h-4 text-[#C49A47]" /> },
    { name: 'Venue & QR', href: '#venue-section', icon: <MapPin className="w-4 h-4 text-[#C49A47]" /> },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#C49A47]/40 shadow-sm py-2.5'
          : 'bg-[#FFFDF7]/90 backdrop-blur-md border-b border-[#C49A47]/25 shadow-xs py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center space-x-2 group cursor-pointer"
        >
          <span className="font-rozha text-base sm:text-xl font-bold text-[#681C32] tracking-wider group-hover:text-[#8C2242] transition-colors">
            PRAVEEN & LAKSHMI
          </span>
          <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600 animate-pulse" />
          <span className="hidden xl:inline font-serif text-xs text-[#8C6721] tracking-widest uppercase font-semibold">
            19-20 Nov 2026
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-5 text-xs uppercase tracking-widest font-sans font-bold">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="text-[#4A1224] hover:text-[#C49A47] transition-colors cursor-pointer"
            >
              {link.name}
            </button>
          ))}

          <button
            onClick={onOpenInvitationModal}
            className="px-4 py-2 rounded-full bg-[#FFF5DA] hover:bg-[#FFEEC2] border border-[#C49A47] text-[#681C32] font-serif text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer shadow-xs"
          >
            <ImageIcon className="w-3.5 h-3.5 text-[#C49A47]" />
            <span>Invitation Card</span>
          </button>

          {onOpenShareModal && (
            <button
              onClick={onOpenShareModal}
              className="px-3.5 py-2 rounded-full bg-gradient-to-r from-[#681C32] to-[#8C2242] text-white hover:brightness-110 font-serif text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer shadow-xs border border-[#C49A47]"
              title="Create personalized invite link for WhatsApp"
            >
              <span>💌</span>
              <span>Invite Relative</span>
            </button>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-2.5 lg:hidden">
          {onOpenShareModal && (
            <button
              onClick={onOpenShareModal}
              className="p-2 rounded-full bg-[#681C32] border border-[#C49A47] text-white text-xs font-serif shadow-xs"
              title="Personalize WhatsApp Invite"
            >
              💌
            </button>
          )}

          <button
            onClick={onOpenInvitationModal}
            className="p-2 rounded-full bg-[#FFF5DA] border border-[#C49A47] text-[#681C32] text-xs font-serif"
            title="View Invitation Card"
          >
            📜
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white border border-[#C49A47] text-[#681C32] hover:bg-[#FFF5DA]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 border-b border-[#C49A47] backdrop-blur-lg px-6 py-4 overflow-hidden max-h-[80vh] overflow-y-auto shadow-xl"
          >
            <div className="flex flex-col space-y-2.5">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="flex items-center space-x-3 py-2 text-sm font-sans uppercase tracking-wider text-[#4A1224] hover:text-[#681C32] font-semibold text-left border-b border-stone-100"
                >
                  {link.icon}
                  <span>{link.name}</span>
                </button>
              ))}

              <div className="pt-3 border-t border-[#C49A47]/30">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenInvitationModal();
                  }}
                  className="w-full py-2.5 rounded-full bg-gradient-to-r from-[#681C32] to-[#8C2242] text-white font-serif font-bold text-xs uppercase tracking-wider text-center shadow-md border border-[#C49A47]"
                >
                  View Original Invitation Card
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
