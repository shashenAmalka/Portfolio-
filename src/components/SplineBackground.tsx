import React, { Suspense, useEffect, useState } from 'react';

const LazySpline = React.lazy(() => import('@splinetool/react-spline'));

const SplineBackground: React.FC = () => {
  const [shouldLoad, setShouldLoad] = useState(false);

  // Delay Spline loading so the rest of the page renders first
  useEffect(() => {
    const timer = setTimeout(() => setShouldLoad(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="absolute inset-0 z-0"
      style={{ contain: 'layout style paint' }}
    >
      {shouldLoad && (
        <Suspense
          fallback={
            <div className="absolute inset-0 bg-background" />
          }
        >
          <LazySpline
            scene="https://prod.spline.design/rdNHNJdmf54iK9O3/scene.splinecode"
            className="absolute inset-0"
            style={{
              opacity: 0.9,
              willChange: 'transform',
            }}
          />
        </Suspense>
      )}

      {/* Previous 3D model (kept for future reference):
      <iframe
        src="https://my.spline.design/orb-A7M3YtW26IusuNlhalchKaL8/"
        frameBorder="0"
        width="100%"
        height="100%"
        className="absolute inset-0"
        style={{ 
          pointerEvents: 'auto',
          opacity: 0.9,
        }}
        title="3D Orb Background"
        loading="lazy"
        sandbox="allow-scripts allow-same-origin"
        referrerPolicy="no-referrer"
      />
      */}

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/80 pointer-events-none" />
    </div>
  );
};

export default SplineBackground;
