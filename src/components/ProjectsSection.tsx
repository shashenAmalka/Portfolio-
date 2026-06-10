import React, { useRef, useEffect } from 'react';
import { ArrowRight, GithubLogo, Globe } from '@phosphor-icons/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import project1 from '@/assets/project-1.png';
import project2 from '@/assets/project-2.png';
import project3 from '@/assets/project-3.png';
import project4 from '@/assets/project-4.png';
import project5 from '@/assets/ic_launcher - Copy.jpg';
import project6 from '@/assets/React and springboot  PAF.png';
import project7 from '@/assets/Lost&found.png';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'CareDesk',
    description: 'Support ticket management with real-time communication and satisfaction tracking.',
    image: project1,
    tech: ['Java', 'MySQL', 'Tailwind CSS'],
    githubUrl: 'https://github.com/shashenAmalka/Online-custom-care.git',
  },
  {
    id: 2,
    title: 'HelaMed',
    description: 'Healthcare management system with doctor channeling and laboratory modules.',
    image: project2,
    tech: ['React', 'Node.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/shashenAmalka/Hospital-Management-System.git',
  },
  {
    id: 3,
    title: 'HopeFlow',
    description: 'Blood donation platform connecting donors with recipients and managing appointments.',
    image: project3,
    tech: ['HTML', 'CSS', 'PHP'],
    githubUrl: 'https://github.com/shashenAmalka/Blood-donation-project.git',
  },
  {
    id: 4,
    title: 'PawFinder',
    description: 'Mobile application for pet adoption.',
    image: project4,
    tech: ['Kotlin', 'Firebase'],
    githubUrl: 'https://github.com/shashenAmalka',
  },
  {
    id: 5,
    title: 'Wellness Journey',
    description: 'Wellness and mental health tracking Android app to monitor daily well-being.',
    image: project5,
    tech: ['Kotlin', 'SharedPreferences'],
    githubUrl: 'https://github.com/shashenAmalka/Well-tracker.git',
  },
  {
    id: 6,
    title: 'Smart Campus Hub',
    description: 'Full-stack campus management platform for resource booking, maintenance ticketing with SLA tracking, and role-based workflows.',
    image: project6,
    tech: ['React', 'Spring Boot', 'MongoDB', 'JWT'],
    githubUrl: 'https://github.com/shashenAmalka/it3030-paf-2026-smart-campus',
  },
  {
    id: 7,
    title: 'Campus Lost & Found',
    description: 'AI-powered campus lost & found platform featuring AI matching, secure handovers, and real-time messaging.',
    image: project7,
    tech: ['Next.js', 'React', 'MongoDB', 'AI'],
    githubUrl: 'https://github.com/shashenAmalka/Lost-Found-System',
    liveUrl: 'https://lost-found-system-theta.vercel.app/',
  },
];

const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headingRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      // Staggered card animations
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.from(card, {
          y: 80,
          opacity: 0,
          scale: 0.92,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        });
      });

      // CTA button animation
      if (ctaRef.current) {
        gsap.from(ctaRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 92%',
            toggleActions: 'play none none none',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Card hover GSAP animation
  const handleMouseEnter = (index: number) => {
    const card = cardsRef.current[index];
    if (!card) return;
    gsap.to(card, {
      y: -6,
      scale: 1.02,
      duration: 0.35,
      ease: 'power2.out',
    });
    gsap.to(card.querySelector('.card-image'), {
      scale: 1.08,
      duration: 0.5,
      ease: 'power2.out',
    });
    gsap.to(card.querySelector('.card-glow'), {
      opacity: 0.4,
      duration: 0.4,
    });
    gsap.to(card.querySelector('.card-overlay'), {
      opacity: 1,
      duration: 0.3,
    });
  };

  const handleMouseLeave = (index: number) => {
    const card = cardsRef.current[index];
    if (!card) return;
    gsap.to(card, {
      y: 0,
      scale: 1,
      duration: 0.35,
      ease: 'power2.inOut',
    });
    gsap.to(card.querySelector('.card-image'), {
      scale: 1,
      duration: 0.5,
      ease: 'power2.inOut',
    });
    gsap.to(card.querySelector('.card-glow'), {
      opacity: 0,
      duration: 0.4,
    });
    gsap.to(card.querySelector('.card-overlay'), {
      opacity: 0,
      duration: 0.3,
    });
  };

  return (
    <section ref={sectionRef} id="projects" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-orb floating-orb-pink w-72 h-72 top-10 -left-24 opacity-15 blur-3xl" />
        <div className="floating-orb floating-orb-cyan w-64 h-64 top-1/3 -right-16 opacity-20 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div ref={headingRef} className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm mb-4">
            MY WORK
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Innovative solutions built with cutting-edge technologies and creative design.
          </p>
        </div>

        {/* 3-Column Grid — compact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="relative group cursor-pointer"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {/* Glow behind card */}
              <div className="card-glow absolute -inset-0.5 bg-gradient-to-br from-primary/50 via-accent/40 to-primary/50 rounded-xl blur-lg opacity-0 transition-none" />

              {/* Card */}
              <div className="relative rounded-xl overflow-hidden border border-white/[0.06] bg-card/80 backdrop-blur-md h-full flex flex-col">
                {/* Image */}
                <div className="relative h-40 sm:h-44 overflow-hidden bg-black/20">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`card-image w-full h-full transition-none ${
                      project.id === 4 || project.id === 5
                        ? 'object-contain p-3 bg-card/60'
                        : 'object-cover'
                    }`}
                  />
                  {/* Hover Overlay with GitHub / Live links */}
                  <div className="card-overlay absolute inset-0 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center gap-2 opacity-0 transition-none">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 w-32 py-2 rounded-lg bg-primary text-white text-xs font-semibold hover:bg-primary/95 transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Globe size={14} weight="bold" />
                        Live Demo
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 w-32 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-xs font-semibold hover:bg-white/20 transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <GithubLogo size={14} weight="bold" />
                      View Code
                    </a>
                  </div>
                  {/* Bottom gradient fade */}
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-card/90 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-2 flex-1">
                    {project.description}
                  </p>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[10px] font-semibold rounded-full bg-primary/10 text-primary border border-primary/15"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div ref={ctaRef} className="flex justify-center mt-12">
          <a
            href="https://github.com/shashenAmalka"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-button px-7 py-3.5 text-sm flex items-center gap-2.5 group"
          >
            <span>View All Projects</span>
            <ArrowRight size={18} weight="bold" className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
