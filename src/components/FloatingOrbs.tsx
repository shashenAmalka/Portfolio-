import React from 'react';

const FloatingOrbs: React.FC = () => {
  return (
    <>
      {/* Primary Orbs */}
      <div className="floating-orb w-64 h-64 top-20 left-10 opacity-60" />
      <div className="floating-orb floating-orb-cyan w-48 h-48 top-40 right-20 opacity-50 animation-delay-1000" />
      <div className="floating-orb floating-orb-pink w-32 h-32 bottom-40 left-1/4 opacity-40 animation-delay-2000" />
      <div className="floating-orb w-56 h-56 bottom-20 right-10 opacity-50 animation-delay-3000" />
      
      {/* Additional smaller orbs */}
      <div className="floating-orb floating-orb-cyan w-20 h-20 top-1/3 left-1/3 opacity-30" />
      <div className="floating-orb floating-orb-pink w-24 h-24 top-2/3 right-1/3 opacity-35 animation-delay-1000" />
    </>
  );
};

export default FloatingOrbs;
