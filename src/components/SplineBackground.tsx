import React from 'react';

const SplineBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0">
      <iframe
        src="https://my.spline.design/orb-A7M3YtW26IusuNlhalchKaL8/"
        frameBorder="0"
        width="100%"
        height="100%"
        className="absolute inset-0"
        style={{ 
          pointerEvents: 'none',
          opacity: 0.9,
        }}
        title="3D Orb Background"
        loading="lazy"
      />
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/80" />
    </div>
  );
};

export default SplineBackground;
