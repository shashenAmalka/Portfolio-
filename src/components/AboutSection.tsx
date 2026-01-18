import React, { useEffect, useRef, useState } from 'react';
import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiRedux, 
  SiTailwindcss,
  SiGreensock,
  SiFramer,
  SiSass,
  SiBootstrap,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiGit,
  SiDocker,
  SiAmazon
} from 'react-icons/si';
import profileImage from '@/assets/profile.png';

interface Skill {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  name: string;
  color: string;
}

const skillCategories: Record<string, Skill[]> = {
  'FRONTEND': [
    { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
    { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
    { icon: SiReact, name: 'React', color: '#61DAFB' },
    { icon: SiNextdotjs, name: 'Next.Js', color: '#000000' },
    { icon: SiRedux, name: 'Redux', color: '#764ABC' },
    { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06B6D4' },
    { icon: SiGreensock, name: 'GSAP', color: '#88CE02' },
    { icon: SiFramer, name: 'Framer Motion', color: '#0055FF' },
    { icon: SiSass, name: 'Sass', color: '#CC6699' },
    { icon: SiBootstrap, name: 'Bootstrap', color: '#7952B3' },
  ],
  'BACKEND': [
    { icon: SiNodedotjs, name: 'Node.Js', color: '#339933' },
    { icon: SiNestjs, name: 'NestJS', color: '#E0234E' },
    { icon: SiExpress, name: 'Express.Js', color: '#000000' },
  ],
  'DATABASE': [
    { icon: SiMysql, name: 'MySQL', color: '#4479A1' },
    { icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1' },
    { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
    { icon: SiPrisma, name: 'Prisma', color: '#2D3748' },
  ],
  'TOOLS': [
    { icon: SiGit, name: 'Git', color: '#F05032' },
    { icon: SiDocker, name: 'Docker', color: '#2496ED' },
    { icon: SiAmazon, name: 'AWS', color: '#FF9900' },
  ],
};

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 3D Tilt effect for profile image
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    
    const rect = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Enhanced Background Elements with Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs */}
        <div className="floating-orb floating-orb-cyan w-72 h-72 -top-20 -right-20 opacity-30 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="floating-orb floating-orb-pink w-48 h-48 bottom-20 -left-10 opacity-25 animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        
        {/* Animated Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Profile Image with 3D Tilt Effect */}
          <div className={`about-image flex justify-center lg:justify-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
            <div 
              ref={imageRef}
              className="relative group cursor-pointer"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateY(${mousePosition.x * 10}deg) rotateX(${-mousePosition.y * 10}deg)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              {/* Animated Background Glow Effects */}
              <div className="absolute -inset-8 opacity-75">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-primary/40 to-transparent rounded-full blur-3xl animate-pulse" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-l from-accent/30 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
              
              {/* Floating Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 border border-primary/30 rounded-full animate-spin-slow opacity-50" style={{ animationDuration: '15s' }} />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-accent/30 rounded-full animate-spin-slow opacity-40" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />
              
              {/* Floating Tech Icons Background */}
              <div className="absolute -top-4 right-0 text-4xl opacity-20 animate-float" style={{ animationDelay: '0.5s' }}>💻</div>
              <div className="absolute bottom-10 -left-8 text-3xl opacity-20 animate-float" style={{ animationDelay: '1.5s' }}>⚡</div>
              <div className="absolute top-1/3 -right-10 text-2xl opacity-15 animate-float" style={{ animationDelay: '2s' }}>🚀</div>
              
              {/* Profile Image - Circular Modern Design */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden transition-all duration-700 group-hover:scale-105 group-hover:-translate-y-2 shadow-2xl bg-gradient-to-br from-primary/5 to-accent/5">
                <img
                  src={profileImage}
                  alt="Shashen - Web Developer"
                  className="w-full h-full object-contain relative z-10 scale-110"
                  style={{ 
                    filter: 'drop-shadow(0 30px 60px rgba(0, 0, 0, 0.4)) drop-shadow(0 10px 20px rgba(139, 92, 246, 0.2))',
                    objectPosition: 'center center'
                  }}
                />
              </div>
            </div>
          </div>

          {/* About Content with Staggered Animation */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}>
            <div>
              <h2 className="section-title mb-6 relative inline-block">
                {['A', 'b', 'o', 'u', 't', ' ', 'M', 'e'].map((char, i) => (
                  <span
                    key={i}
                    className={`inline-block transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                    }`}
                    style={{ 
                      transitionDelay: `${i * 50}ms`,
                      display: char === ' ' ? 'inline' : 'inline-block',
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                I'm a passionate web developer with expertise in building modern, 
                responsive, and user-centric web applications. With a keen eye for 
                design and a love for clean code, I transform ideas into immersive 
                digital experiences.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                My journey in web development has equipped me with a strong foundation 
                in frontend technologies, animation libraries like GSAP, and modern 
                frameworks. I'm constantly learning and exploring new technologies to 
                deliver cutting-edge solutions.
              </p>
            </div>

            {/* Categorized Skills */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8 text-gradient">
                Technologies & Skills
              </h3>
              <div className="space-y-8">
                {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
                  <div 
                    key={category} 
                    className={`flex items-start gap-6 transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${600 + categoryIndex * 150}ms` }}
                  >
                    {/* Category Label */}
                    <div className="min-w-[120px] pt-2">
                      <h4 className="text-lg font-bold text-muted-foreground uppercase tracking-wide">
                        {category}
                      </h4>
                    </div>
                    
                    {/* Skills Grid */}
                    <div className="flex-1 flex flex-wrap gap-4">
                      {skills.map((skill, skillIndex) => {
                        const Icon = skill.icon;
                        return (
                          <div
                            key={skill.name}
                            className={`group flex items-center gap-3 px-4 py-2.5 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:bg-card transition-all duration-300 cursor-pointer hover:scale-105 hover:-translate-y-0.5 ${
                              isVisible ? 'opacity-100' : 'opacity-0'
                            }`}
                            style={{ 
                              transitionDelay: `${700 + categoryIndex * 150 + skillIndex * 50}ms`,
                            }}
                          >
                            <Icon
                              className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                              style={{ color: skill.color }}
                            />
                            <span className="text-sm font-medium text-foreground whitespace-nowrap">
                              {skill.name}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
