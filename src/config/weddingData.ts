import { WeddingEvent, MusicTrack } from '../types/wedding';

export const WEDDING_DATA = {
  couple: {
    groom: {
      title: "Chi.",
      name: "P. Praveen",
      degree: "B.Tech.",
      parents: "Smt. Saraswathi & Sri Periyasamy (Late)",
      location: "Krishnagiri, Bargur",
      relation: "Son of Smt. Saraswathi & Sri Periyasamy (Late)",
      avatarText: "P",
    },
    bride: {
      title: "Chi. Sou.",
      name: "A. Lakshmi Prasanna",
      alias: "(Prasanna Lakshmi)",
      degree: "B.E.",
      parents: "D/o. Sri A. Mohan & Smt. Aruna",
      location: "Venkatagiri, Tirupathi",
      relation: "Daughter of Sri A. Mohan & Smt. Aruna",
      avatarText: "L",
    },
    tagline: "Two Hearts, One Beautiful Journey",
    blessingInvocation: "|| Sri Veeragaran Angalamman Thunai ||",
    blessingSubtext: "With the blessings of our families",
    invitationGreeting: "Together with our families, we invite you to celebrate",
  },

  familyMembers: {
    awaitingPresence: [
      { name: "Sri Prasanth & Smt. Visalakshmi", role: "Brother & Sister-in-law" },
      { name: "Smt. Priyanka & Sri Mughil Arasan", role: "Sister & Brother-in-law" },
      { name: "A. Geethanjali, A. Hemanth Reddy", role: "Beloved Family" }
    ],
    compliments: "With Best Compliments From : Relatives & Friends"
  },

  venue: {
    name: "Sri Kalyana Mandapam",
    fullName: "SRL Kalyana Mandapam",
    address: "Thirupathi Road, Venkatagiri",
    city: "Venkatagiri, Andhra Pradesh",
    // Verified Google Maps link decoded directly from the uploaded QR code
    googleMapsUrl: "https://maps.app.goo.gl/ZQQssGJjE8Ev4NVE6?g_st=ic",
    embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15518.271165158652!2d79.5701!3d13.9622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb2b781a8b1dd31%3A0xb37a892b19f187a5!2sVenkatagiri%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    qrImagePath: "/original_qr.png",
    invitationImagePath: "/original_invitation.png",
  },

  events: [
    {
      id: "haldi",
      number: "01",
      title: "Haldi Ceremony",
      tamilTitle: "நலங்கு / மஞ்சள் திருவிழா",
      date: "19 November 2026",
      day: "Thursday",
      time: "2:00 PM onwards",
      theme: "haldi",
      themeColor: "#F5CE36",
      description: "An auspicious afternoon filled with fragrant turmeric paste, vibrant marigold flowers, joyous laughter, and heartwarming blessings.",
      isoDateStart: "2026-11-19T14:00:00+05:30",
      isoDateEnd: "2026-11-19T17:00:00+05:30",
      location: "SRL Kalyana Mandapam, Venkatagiri",
      dressCode: "Vibrant Yellow / Mustard Traditional Attire",
    },
    {
      id: "reception",
      number: "02",
      title: "Wedding Reception",
      tamilTitle: "வரவேற்பு நிகழ்ச்சி",
      date: "19 November 2026",
      day: "Thursday",
      time: "7:00 PM onwards",
      theme: "reception",
      themeColor: "#681C32",
      description: "An enchanting evening of celebration, musical melodies, and a sumptuous traditional feast to welcome and bless the newlyweds.",
      isoDateStart: "2026-11-19T19:00:00+05:30",
      isoDateEnd: "2026-11-19T22:30:00+05:30",
      location: "SRL Kalyana Mandapam, Thirupathi Road, Venkatagiri",
      dressCode: "Traditional Silk Sarees, Kurtas & Formal Elegance",
    },
    {
      id: "muhurtham",
      number: "03",
      title: "Kalyana Muhurtham",
      tamilTitle: "சுப முகூர்த்தம் (மேஷம் லக்னம்)",
      date: "20 November 2026",
      day: "Friday",
      time: "4:30 AM – 6:00 AM",
      theme: "muhurtham",
      themeColor: "#C49A47",
      description: "The sacred Vedic wedding ritual and Mangalyadharanam under the auspicious Mesham Lagnam, sealing an eternal bond amidst Agni and family blessings.",
      isoDateStart: "2026-11-20T04:30:00+05:30",
      isoDateEnd: "2026-11-20T06:00:00+05:30",
      location: "SRL Kalyana Mandapam, Thirupathi Road, Venkatagiri",
      dressCode: "South Indian Traditional Pattu Veshti & Kanchipuram Silk",
    },
  ] as WeddingEvent[],

  countdownDates: {
    haldi: "2026-11-19T14:00:00+05:30",
    wedding: "2026-11-20T04:30:00+05:30",
  },

  musicTracks: [
    {
      id: 'traditional',
      name: "Mangala Vaidhyam",
      subtitle: "Nadaswaram & Thavil Raga Kalyani",
      instrument: "Nadaswaram & Thavil",
      tempo: 96,
    },
    {
      id: 'romantic',
      name: "Anbe Sivam Flute",
      subtitle: "Soft Flute & Acoustic Strings",
      instrument: "Bansuri Flute & Swarmandal",
      tempo: 78,
    }
  ] as MusicTrack[],
};

