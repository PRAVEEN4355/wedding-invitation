import React from 'react';

// Traditional Auspicious Diya Flame
export const AuspiciousDiya: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`inline-flex flex-col items-center justify-center ${className}`}>
      {/* Flickering Flame */}
      <div className="relative w-4 h-6 flex justify-center">
        <div className="w-3 h-5 bg-gradient-to-t from-amber-500 via-yellow-400 to-white rounded-full blur-[0.5px] animate-pulse" />
        <div className="absolute top-1 w-1.5 h-3 bg-yellow-200 rounded-full" />
      </div>
      {/* Brass Base */}
      <div className="w-8 h-3.5 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700 rounded-b-full shadow-sm border-t border-amber-300" />
    </div>
  );
};

// Traditional Temple Bell with swinging animation and photorealistic brass bell
export const TempleBell: React.FC<{ 
  className?: string; 
  style?: React.CSSProperties; 
  onClick?: () => void 
}> = ({ className = '', style, onClick }) => {
  return (
    <div 
      onClick={onClick}
      style={style}
      className={`relative flex flex-col items-center group cursor-pointer transition-transform hover:scale-110 active:scale-95 ${className}`}
      title="Ring sacred temple bell for blessings"
    >
      {/* Photorealistic Swinging Brass Temple Bell */}
      <div 
        style={{ transformOrigin: 'top center' }}
        className="relative animate-bell-swing filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.65)] hover:brightness-110 transition-all"
      >
        <img
          src="/images/realistic_temple_bell.png"
          alt="Authentic South Indian Brass Temple Bell"
          className="w-10 h-18 sm:w-14 sm:h-24 md:w-16 md:h-28 object-contain select-none pointer-events-auto"
          draggable={false}
        />
      </div>
    </div>
  );
};

// Authentic Photorealistic Mango Leaves Toran (Maavilai Thoranam) with Marigolds
export const MangoLeafToran: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full overflow-hidden flex items-center justify-center pointer-events-none select-none z-20 ${className}`}>
      <div className="w-full max-w-7xl relative h-10 sm:h-14 overflow-hidden rounded-b-md shadow-xs">
        <img
          src="/images/realistic_mango_leaf_toran.jpg"
          alt="Traditional South Indian Fresh Mango Leaf & Marigold Toran"
          className="w-full h-full object-cover object-top opacity-95"
        />
        {/* Soft bottom edge blend */}
        <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-t from-[#FFFDF7] to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

// Jasmine & Marigold Garland Border
export const FlowerGarland: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center space-x-1 py-2 overflow-hidden pointer-events-none select-none ${className}`}>
      {[...Array(24)].map((_, i) => (
        <div key={i} className="flex items-center space-x-0.5">
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white border border-amber-200/60 shadow-xs transform rotate-45" />
          {i % 3 === 0 && (
            <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-400 to-orange-500 shadow-xs" />
          )}
        </div>
      ))}
    </div>
  );
};

// Traditional Kolam Mandala SVG pattern in Gold for Light Backgrounds
export const KolamPattern: React.FC<{ className?: string; opacity?: string }> = ({ className = '', opacity = 'opacity-25' }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none ${opacity} ${className}`}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="kolam-grid-light" width="120" height="120" patternUnits="userSpaceOnUse">
            <circle cx="60" cy="60" r="48" fill="none" stroke="#C49A47" strokeWidth="0.8" strokeDasharray="3 3"/>
            <circle cx="60" cy="60" r="32" fill="none" stroke="#C49A47" strokeWidth="0.8"/>
            <circle cx="60" cy="60" r="16" fill="none" stroke="#8A223E" strokeWidth="0.8"/>
            <path d="M60 12 C68 28, 68 44, 60 60 C52 44, 52 28, 60 12 Z" fill="none" stroke="#C49A47" strokeWidth="0.8"/>
            <path d="M60 60 C68 76, 68 92, 60 108 C52 92, 52 76, 60 60 Z" fill="none" stroke="#C49A47" strokeWidth="0.8"/>
            <path d="M12 60 C28 68, 44 68, 60 60 C44 52, 28 52, 12 60 Z" fill="none" stroke="#C49A47" strokeWidth="0.8"/>
            <path d="M60 60 C76 68, 92 68, 108 60 C92 52, 76 52, 60 60 Z" fill="none" stroke="#C49A47" strokeWidth="0.8"/>
            <circle cx="0" cy="0" r="3.5" fill="#C49A47"/>
            <circle cx="120" cy="0" r="3.5" fill="#C49A47"/>
            <circle cx="0" cy="120" r="3.5" fill="#C49A47"/>
            <circle cx="120" cy="120" r="3.5" fill="#C49A47"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#kolam-grid-light)" />
      </svg>
    </div>
  );
};

// Traditional Gold Ornamental Corner Accents for Light Theme
export const GoldCornerAccents: React.FC = () => {
  return (
    <>
      <div className="absolute top-2.5 left-2.5 w-8 h-8 sm:w-12 sm:h-12 border-t-2 border-l-2 border-[#C49A47] pointer-events-none">
        <span className="absolute -top-1.5 -left-1.5 w-3 h-3 rounded-full bg-[#C49A47] shadow-sm" />
      </div>
      <div className="absolute top-2.5 right-2.5 w-8 h-8 sm:w-12 sm:h-12 border-t-2 border-r-2 border-[#C49A47] pointer-events-none">
        <span className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-[#C49A47] shadow-sm" />
      </div>
      <div className="absolute bottom-2.5 left-2.5 w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-l-2 border-[#C49A47] pointer-events-none">
        <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 rounded-full bg-[#C49A47] shadow-sm" />
      </div>
      <div className="absolute bottom-2.5 right-2.5 w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-r-2 border-[#C49A47] pointer-events-none">
        <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 rounded-full bg-[#C49A47] shadow-sm" />
      </div>
    </>
  );
};
