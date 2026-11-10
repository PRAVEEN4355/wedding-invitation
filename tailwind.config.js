/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        temple: {
          maroon: '#681C32',
          deep: '#451020',
          dark: '#1C050C',
          rich: '#541225',
          accent: '#83233F',
        },
        gold: {
          DEFAULT: '#C49A47',
          light: '#F3DB98',
          bright: '#F5CE36',
          antique: '#B38738',
          dark: '#8C6721',
          shimmer: '#FFE899',
        },
        ivory: {
          DEFAULT: '#FFF9ED',
          warm: '#FBF4E2',
          cream: '#F5ECDA',
          pure: '#FFFFFF',
        },
        sandalwood: {
          DEFAULT: '#D8C0A0',
          light: '#EADBC8',
          dark: '#B09472',
        },
        leaf: {
          DEFAULT: '#526B43',
          dark: '#384B2D',
          light: '#6E8F5A',
        },
        haldi: {
          DEFAULT: '#F5CE36',
          bright: '#FFD700',
          warm: '#E6A817',
          deep: '#D48806',
          light: '#FFF4C2',
        },
      },
      fontFamily: {
        serif: ['"Cinzel"', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        decorative: ['"Cinzel Decorative"', 'serif'],
        rozha: ['"Rozha One"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        brush: ['"Alex Brush"', 'cursive'],
        playfair: ['"Playfair Display"', 'serif'],
        marcellus: ['"Marcellus"', 'serif'],
        sans: ['"Outfit"', 'sans-serif'],
      },
      animation: {
        'flame-flicker': 'flame 1.4s ease-in-out infinite alternate',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatRev 7s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'bell-swing': 'bellSwing 2.2s ease-in-out infinite',
        'petal-fall': 'petalFall 12s linear infinite',
      },
      keyframes: {
        flame: {
          '0%': { transform: 'scale(1) rotate(-1.5deg)', opacity: '0.9', filter: 'drop-shadow(0 0 8px rgba(245, 206, 54, 0.85))' },
          '50%': { transform: 'scale(1.12, 0.94) rotate(2deg)', opacity: '1', filter: 'drop-shadow(0 0 16px rgba(255, 140, 0, 0.95))' },
          '100%': { transform: 'scale(0.95, 1.08) rotate(-1deg)', opacity: '0.85', filter: 'drop-shadow(0 0 10px rgba(245, 206, 54, 0.8))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(3deg)' },
        },
        floatRev: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(12px) rotate(-3deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.08)' },
        },
        bellSwing: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(6deg)' },
          '75%': { transform: 'rotate(-6deg)' },
        },
        petalFall: {
          '0%': { transform: 'translateY(-10%) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.9' },
          '90%': { opacity: '0.9' },
          '100%': { transform: 'translateY(110vh) rotate(360deg)', opacity: '0' },
        }
      },
    },
  },
  plugins: [],
}
