import React, { useMemo } from 'react';

interface FloatingPetalsProps {
  count?: number;
  type?: 'mixed' | 'jasmine' | 'marigold' | 'gold';
  className?: string;
}

export const FloatingPetals: React.FC<FloatingPetalsProps> = ({ count = 20, type = 'mixed', className = '' }) => {
  const petals = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const left = Math.random() * 100;
      const delay = Math.random() * 8;
      const duration = 7 + Math.random() * 8;
      const size = 12 + Math.random() * 16;
      const rotate = Math.random() * 360;
      const petalType = type === 'mixed' 
        ? (i % 3 === 0 ? 'marigold' : (i % 3 === 1 ? 'jasmine' : 'gold'))
        : type;

      return { id: i, left, delay, duration, size, rotate, petalType };
    });
  }, [count, type]);

  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden z-10 ${className}`} aria-hidden="true">
      {petals.map((p) => {
        let bgStyle = '';
        let shape = 'rounded-full rounded-tr-none'; // Petal shape

        if (p.petalType === 'marigold') {
          bgStyle = 'bg-gradient-to-tr from-amber-500 via-yellow-400 to-orange-400 opacity-75 shadow-xs';
        } else if (p.petalType === 'jasmine') {
          bgStyle = 'bg-gradient-to-tr from-white via-ivory to-amber-100 opacity-80 shadow-xs border border-amber-100/50';
          shape = 'rounded-full rounded-bl-none';
        } else {
          bgStyle = 'bg-gradient-to-tr from-gold-light via-gold-bright to-gold-antique opacity-70 shadow-sm';
          shape = 'rounded-full';
        }

        return (
          <div
            key={p.id}
            className={`absolute ${shape} ${bgStyle}`}
            style={{
              left: `${p.left}%`,
              top: '-5%',
              width: `${p.size}px`,
              height: `${p.size * 1.3}px`,
              transform: `rotate(${p.rotate}deg)`,
              animation: `petalFall ${p.duration}s linear infinite`,
              animationDelay: `${p.delay}s`,
            }}
          />
        );
      })}
    </div>
  );
};

