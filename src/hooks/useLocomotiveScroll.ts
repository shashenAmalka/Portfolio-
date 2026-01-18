import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

export const useLocomotiveScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    locomotiveScrollRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 0.8,
      lerp: 0.05,
    });

    // Update scroll on resize
    const handleResize = () => {
      locomotiveScrollRef.current?.update();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      locomotiveScrollRef.current?.destroy();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { scrollRef, locomotiveScroll: locomotiveScrollRef };
};
