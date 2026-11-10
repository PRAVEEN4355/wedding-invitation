import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check, Share2, ExternalLink, Sparkles, UserPlus } from 'lucide-react';
import { createGuestInviteUrl, createWhatsAppInviteText } from '../utils/guestManager';

interface ShareInviteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareInviteModal: React.FC<ShareInviteModalProps> = ({ isOpen, onClose }) => {
  const [guestName, setGuestName] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedMsg, setCopiedMsg] = useState(false);

  const inviteUrl = guestName.trim() ? createGuestInviteUrl(guestName) : '';
  const whatsAppText = guestName.trim() ? createWhatsAppInviteText(guestName) : '';

  const handleCopyLink = () => {
    if (!inviteUrl) return;
    navigator.clipboard.writeText(inviteUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleCopyWhatsAppMsg = () => {
    if (!whatsAppText) return;
    navigator.clipboard.writeText(whatsAppText);
    setCopiedMsg(true);
    setTimeout(() => setCopiedMsg(false), 2000);
  };

  const handleOpenWhatsApp = () => {
    if (!whatsAppText) return;
    const url = `https://wa.me/?text=${encodeURIComponent(whatsAppText)}`;
    window.open(url, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm select-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative w-full max-w-lg p-6 rounded-3xl bg-[#FFFDF7] border-2 border-[#C49A47] shadow-2xl text-[#3D141F]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-stone-100 text-[#681C32] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="text-center mb-5">
              <div className="w-12 h-12 rounded-full bg-[#FFF5DA] border border-[#C49A47] mx-auto flex items-center justify-center mb-2 shadow-xs">
                <Sparkles className="w-6 h-6 text-[#C49A47]" />
              </div>
              <h3 className="font-rozha text-xl sm:text-2xl text-[#681C32] tracking-wide">
                Personalized Guest Invitation
              </h3>
              <p className="font-sans text-xs text-[#8C6721] font-semibold mt-1">
                Generate a custom WhatsApp invitation with your guest's name
              </p>
            </div>

            {/* Guest Name Input */}
            <div className="mb-4">
              <label className="block text-xs font-serif font-bold uppercase tracking-wider text-[#681C32] mb-1.5">
                Relative / Friend Name:
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder="e.g. Ramesh Mama & Family, Karthik & Priya, Anand..."
                  className="w-full px-4 py-3 rounded-2xl border-2 border-[#C49A47]/60 focus:border-[#681C32] focus:outline-hidden bg-white text-sm font-sans font-medium text-[#3D141F] shadow-inner"
                />
              </div>
            </div>

            {/* Preview of Generated Link */}
            {guestName.trim() && (
              <div className="space-y-3 mb-5">
                <div className="p-3 rounded-2xl bg-[#FAF4EA] border border-[#C49A47]/40">
                  <p className="text-[11px] font-serif font-bold uppercase tracking-wider text-[#8C6721] mb-1">
                    Personalized Link:
                  </p>
                  <p className="text-xs font-mono text-[#681C32] break-all bg-white p-2 rounded-xl border border-stone-200">
                    {inviteUrl}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    onClick={handleCopyWhatsAppMsg}
                    className="py-3 px-4 rounded-xl bg-gradient-to-r from-[#681C32] to-[#8C2242] text-white font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md hover:brightness-110 active:scale-95 transition-all cursor-pointer border border-[#C49A47]"
                  >
                    {copiedMsg ? <Check className="w-4 h-4 text-green-300" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedMsg ? "Copied Message!" : "Copy WhatsApp Invite"}</span>
                  </button>

                  <button
                    onClick={handleOpenWhatsApp}
                    className="py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 text-white font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Send on WhatsApp</span>
                  </button>
                </div>

                <div className="text-center pt-1">
                  <a
                    href={inviteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-serif font-bold text-[#8C6721] hover:text-[#681C32] underline"
                  >
                    <span>Preview invitation as {guestName}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}

            {!guestName.trim() && (
              <div className="p-4 rounded-2xl bg-[#FFF5DA]/70 border border-[#C49A47]/30 text-center text-xs text-[#8C6721] font-sans font-medium mb-4">
                Type your relative or friend's name above to create their customized link!
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
