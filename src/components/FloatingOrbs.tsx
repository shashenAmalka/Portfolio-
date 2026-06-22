import React from 'react';

/**
 * Reduced from 6 orbs → 3, each uses will-change and translateZ(0)
 * to ensure they render on their own GPU layer.
 * The blur(40px) in CSS is kept but fewer elements = less GPU work.
 */
const FloatingOrbs: React.FC = () => {
  return (
    <>
      <div
        className="floating-orb w-64 h-64 top-20 left-10 opacity-50"
        style={{ willChange: 'transform', transform: 'translateZ(0)' }}
      />
      <div
        className="floating-orb floating-orb-cyan w-48 h-48 top-40 right-20 opacity-40 animation-delay-1000"
        style={{ willChange: 'transform', transform: 'translateZ(0)' }}
      />
      <div
        className="floating-orb floating-orb-pink w-32 h-32 bottom-40 left-1/4 opacity-30 animation-delay-2000"
        style={{ willChange: 'transform', transform: 'translateZ(0)' }}
      />
    </>
  );
};

export default FloatingOrbs;
