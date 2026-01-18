import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGsapAnimations = () => {
  useEffect(() => {
    // Floating orbs animation
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

    // Hero section animations
    const heroTimeline = gsap.timeline({ delay: 0.3 });
    
    heroTimeline
      .fromTo(
        '.hero-title',
        { opacity: 0, y: 60, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power3.out' }
      )
      .fromTo(
        '.hero-subtitle',
        { opacity: 0, y: 40, filter: 'blur(8px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo(
        '.hero-cta',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' },
        '-=0.3'
      );

    // About section scroll animations
    ScrollTrigger.create({
      trigger: '#about',
      start: 'top 80%',
      onEnter: () => {
        gsap.fromTo(
          '.about-image',
          { opacity: 0, x: -60, filter: 'blur(10px)' },
          { opacity: 1, x: 0, filter: 'blur(0px)', duration: 1, ease: 'power3.out' }
        );
        gsap.fromTo(
          '.about-content',
          { opacity: 0, x: 60, filter: 'blur(10px)' },
          { opacity: 1, x: 0, filter: 'blur(0px)', duration: 1, ease: 'power3.out', delay: 0.2 }
        );
        gsap.fromTo(
          '.skill-icon',
          { opacity: 0, scale: 0, y: 20 },
          { 
            opacity: 1, 
            scale: 1, 
            y: 0, 
            duration: 0.5, 
            stagger: 0.1, 
            ease: 'back.out(1.7)',
            delay: 0.5 
          }
        );
      },
    });

    // Projects section scroll animations
    ScrollTrigger.create({
      trigger: '#projects',
      start: 'top 80%',
      onEnter: () => {
        gsap.fromTo(
          '.section-header',
          { opacity: 0, y: 40, filter: 'blur(10px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, ease: 'power3.out' }
        );
        gsap.fromTo(
          '.project-card-item',
          { opacity: 0, y: 60, scale: 0.9 },
          { 
            opacity: 1, 
            y: 0, 
            scale: 1, 
            duration: 0.6, 
            stagger: 0.15, 
            ease: 'power3.out',
            delay: 0.3 
          }
        );
      },
    });

    // Contact section animations
    ScrollTrigger.create({
      trigger: '#contact',
      start: 'top 80%',
      onEnter: () => {
        gsap.fromTo(
          '.contact-form-element',
          { opacity: 0, x: -40 },
          { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
        );
        gsap.fromTo(
          '.social-icon',
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 0.4, stagger: 0.1, ease: 'back.out(1.7)', delay: 0.5 }
        );
      },
    });

    // Footer animations
    ScrollTrigger.create({
      trigger: '#footer',
      start: 'top 90%',
      onEnter: () => {
        gsap.fromTo(
          '.footer-content',
          { opacity: 0, y: 40, filter: 'blur(8px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, ease: 'power3.out' }
        );
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
};
