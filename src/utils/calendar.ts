import { WeddingEvent } from '../types/wedding';

// Helper to format ISO to Google Calendar UTC string: YYYYMMDDTHHmmssZ
function formatGoogleCalendarDate(isoString: string): string {
  const date = new Date(isoString);
  return date.toISOString().replace(/-|:|\.\d+/g, '');
}

export function createGoogleCalendarUrl(event: WeddingEvent): string {
  const start = formatGoogleCalendarDate(event.isoDateStart);
  const end = formatGoogleCalendarDate(event.isoDateEnd);
  const title = encodeURIComponent(`Praveen ❤️ Lakshmi Prasanna - ${event.title}`);
  const details = encodeURIComponent(
    `${event.description}\n\nVenue: ${event.location}\nDress Code: ${event.dressCode || 'Traditional South Indian'}\n\nBless the couple!`
  );
  const location = encodeURIComponent(event.location);

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
}

export function createWhatsAppShareUrl(): string {
  const text = encodeURIComponent(
    `🙏 *Wedding Invitation: Praveen ❤️ Lakshmi Prasanna*\n\n` +
    `Together with our families, we joyfully invite you to celebrate our wedding ceremony on 19th & 20th November 2026 at SRL Kalyana Mandapam, Venkatagiri.\n\n` +
    `✨ *Events:*\n` +
    `• Haldi: 19th Nov 2:00 PM\n` +
    `• Reception: 19th Nov 7:00 PM\n` +
    `• Muhurtham: 20th Nov 4:30 AM - 6:00 AM\n\n` +
    `Your gracious presence is our greatest blessing!\n` +
    `View the wedding invitation website:`
  );
  return `https://api.whatsapp.com/send?text=${text}%20${encodeURIComponent(window.location.href)}`;
}

