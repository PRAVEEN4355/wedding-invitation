// Helper for Personalized Guest Links & WhatsApp Invites
export const getGuestNameFromUrl = (): string | null => {
  if (typeof window === 'undefined') return null;
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('to') || urlParams.get('name') || urlParams.get('guest') || urlParams.get('for');
    if (!name) return null;
    const clean = decodeURIComponent(name.replace(/\+/g, ' ')).trim();
    return clean.length > 0 ? clean : null;
  } catch {
    return null;
  }
};

export const createGuestInviteUrl = (guestName: string): string => {
  if (typeof window === 'undefined') return '';
  const baseUrl = window.location.origin + window.location.pathname;
  return `${baseUrl}?to=${encodeURIComponent(guestName.trim())}`;
};

export const createWhatsAppInviteText = (guestName: string): string => {
  const link = createGuestInviteUrl(guestName);
  return `🙏 *|| Sri Veeragaran Angalamman Thunai ||* 🙏\n\nDear *${guestName}*,\n\nTogether with our families, we cordially invite you and your family to celebrate the auspicious wedding ceremony of:\n\n✨ *Chi. P. PRAVEEN, B.Tech.* & *Chi. Sou. A. LAKSHMI PRASANNA, B.E.* (Prasanna Lakshmi)\n\n🗓️ *Muhurtham:* Friday, 20th November 2026 (4:30 AM – 6:00 AM)\n🎉 *Haldi & Reception:* Thursday, 19th November 2026\n📍 *Venue:* SRL Kalyana Mandapam, Thirupathi Road, Venkatagiri, AP.\n\n👉 *Please tap below to view your personalized 3D Wedding Invitation:* \n${link}\n\nAwaiting your gracious presence, love, and blessings! ❤️`;
};

