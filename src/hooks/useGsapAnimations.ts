import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGsapAnimations = () => {
  useEffect(() => {
    // Suppress GSAP warnings for missing targets
    gsap.config({ nullTargetWarn: false });

    // Floating orbs animation - only if elements exist
    const floatingOrbs = gsap.utils.toArray('.floating-orb');
    if (floatingOrbs.length > 0) {
      gsap.to('.floating-orb', {
        y: -30,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: {
          each: 0.5,
          from: 'random',
        },
      });
    }

    // Hero section animations - only if elements exist
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroCta = document.querySelector('.hero-cta');

    if (heroTitle || heroSubtitle || heroCta) {
      const heroTimeline = gsap.timeline({ delay: 0.3 });

      if (heroTitle) {
        heroTimeline.fromTo(
          '.hero-title',
          { opacity: 0, y: 60, filter: 'blur(10px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power3.out' }
        );
      }

      if (heroSubtitle) {
        heroTimeline.fromTo(
          '.hero-subtitle',
          { opacity: 0, y: 40, filter: 'blur(8px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, ease: 'power3.out' },
          heroTitle ? '-=0.5' : undefined
        );
      }

      if (heroCta) {
        heroTimeline.fromTo(
          '.hero-cta',
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' },
          (heroTitle || heroSubtitle) ? '-=0.3' : undefined
        );
      }
    }

    // Note: About, Projects, Contact, and Footer sections use CSS-based animations
    // via IntersectionObserver in their respective components. GSAP animations
    // are disabled here to prevent targeting non-existent elements.

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
};
