import React, { useState } from 'react';
import { OpeningTempleDoor } from './components/OpeningTempleDoor';
import { Navbar } from './components/Navbar';
import { ScrollProgress } from './components/ScrollProgress';
import { HeroSection } from './components/HeroSection';
import { LiveCountdown } from './components/LiveCountdown';
import { HaldiExperience } from './components/HaldiExperience';
import { FamilyIntroduction } from './components/FamilyIntroduction';
import { WeddingTimeline } from './components/WeddingTimeline';
import { VenueAndQRSection } from './components/VenueAndQRSection';
import { FinalBlessing } from './components/FinalBlessing';
import { InvitationLightbox } from './components/InvitationLightbox';
import { ShareInviteModal } from './components/ShareInviteModal';
import { FloatingPetals } from './components/common/FloatingPetals';
import { RoyalTemple3DBackground } from './components/3d/RoyalTemple3DBackground';

export const App: React.FC = () => {
  const [invitationOpened, setInvitationOpened] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const handleDoorOpen = () => {
    setInvitationOpened(true);
    window.scrollTo({ top: 0, behavior: 'instant' });
    const heroEl = document.getElementById('hero-section');
    if (heroEl) {
      heroEl.scrollIntoView({ behavior: 'instant', block: 'start' });
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FFFDF7] text-[#3D141F] font-sans selection:bg-[#C49A47] selection:text-white">
      {/* 1. Opening Fullscreen Golden Temple Door Experience */}
      {!invitationOpened && (
        <OpeningTempleDoor onOpen={handleDoorOpen} />
      )}

      {/* 2. Light Theme 3D Floating Petals & Gold Sparkles Background */}
      <RoyalTemple3DBackground />

      {/* Floating Ambient Jasmine & Marigold Petals */}
      <FloatingPetals count={20} type="mixed" />

      {/* Top Scroll Progress Line in Antique Gold */}
      <ScrollProgress />

      {/* Floating Header Navbar */}
      <Navbar 
        onOpenInvitationModal={() => setIsLightboxOpen(true)} 
        onOpenShareModal={() => setIsShareModalOpen(true)} 
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Section 1: Hero Couple Introduction */}
        <HeroSection
          onScrollToEvents={() => scrollToSection('events-section')}
          onScrollToVenue={() => scrollToSection('venue-section')}
          onOpenInvitationModal={() => setIsLightboxOpen(true)}
        />

        {/* Section 2: Live Wedding Countdown (Haldi & Wedding) */}
        <div id="countdown-section">
          <LiveCountdown />
        </div>

        {/* Section 3: Special Realistic Haldi Experience with Photorealistic Brass Urli */}
        <HaldiExperience />

        {/* Section 4: Groom and Bride Family Introduction */}
        <FamilyIntroduction />

        {/* Section 5: Wedding Celebration Timeline */}
        <WeddingTimeline />

        {/* Section 6: Venue and Original Scannable QR Code */}
        <VenueAndQRSection
          onOpenInvitationModal={() => setIsLightboxOpen(true)}
        />

        {/* Section 8: Final Blessing and Auspicious Farewell */}
        <FinalBlessing />
      </main>

      {/* High-Resolution Original Invitation Lightbox Modal */}
      <InvitationLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
      />

      {/* Share / WhatsApp Invite Link Generator Modal */}
      <ShareInviteModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />
    </div>
  );
};

export default App;
