import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, GithubLogo, Globe } from '@phosphor-icons/react';
import project1 from '@/assets/project-1.png';
import project2 from '@/assets/project-2.png';
import project3 from '@/assets/project-3.png';
import project4 from '@/assets/project-4.png';
import project5 from '@/assets/ic_launcher - Copy.jpg';

const projects = [
  {
    id: 1,
    title: 'CareDesk',
    description: 'A support ticket management system with real-time communication and customer satisfaction tracking.',
    image: project1,
    tech: ['Java', 'MySQL', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: 'https://github.com/shashenAmalka/Online-custom-care.git',
  },
  {
    id: 2,
    title: 'HelaMed',
    description: 'Advanced healthcare management system with doctor channeling and laboratory modules.',
    image: project2,
    tech: ['React', 'Node.js', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: 'https://github.com/shashenAmalka/Hospital-Management-System.git',
  },
  {
    id: 3,
    title: 'HopeFlow',
    description: 'Blood donation platform connecting donors with recipients and managing appointments.',
    image: project3,
    tech: ['HTML', 'CSS', 'PHP'],
    liveUrl: '#',
    githubUrl: 'https://github.com/shashenAmalka/Blood-donation-project.git',
  },
  {
    id: 4,
    title: 'PawFinder',
    description: 'Mobile application for pet adoption.',
    image: project4,
    tech: ['Kotlin', 'Firebase'],
    liveUrl: '#',
    githubUrl: 'https://github.com/shashenAmalka',
  },
 {
    id: 5,
    title: 'Wellness Journey',
    description: 'A comprehensive wellness and mental health tracking Android app built with Kotlin that helps users monitor their daily well-being journey.',
    image: project5,
    tech: ['Kotlin', 'SharedPreferences'],
    liveUrl: '#',
    githubUrl: 'https://github.com/shashenAmalka/Well-tracker.git',
  },
];

const ProjectsSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-orb floating-orb-pink w-96 h-96 top-10 -left-32 opacity-20 blur-3xl" />
        <div className="floating-orb floating-orb-cyan w-80 h-80 top-1/3 -right-20 opacity-25 blur-3xl" />
        <div className="floating-orb w-72 h-72 bottom-20 left-1/4 opacity-15 blur-2xl" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }}>
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite',
        }} />
      </div>

      {/* Floating Code Symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['</>','{}','[]','()','=','*','#'].map((symbol, i) => (
          <div
            key={i}
            className="absolute text-primary/10 font-mono text-4xl font-bold animate-codeFloat"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 30}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${15 + i * 3}s`,
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm animate-pulse">
              MY WORK
            </span>
          </div>
          <h2 className="section-title mb-6 text-4xl md:text-5xl lg:text-6xl">
            {'Featured '.split('').map((char, i) => (
              <span
                key={i}
                className={`inline-block transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
                }`}
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                {char}
              </span>
            ))}
            <span className="text-gradient">
              {'Projects'.split('').map((char, i) => (
                <span
                  key={i}
                  className={`inline-block transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
                  }`}
                  style={{ transitionDelay: `${(9 + i) * 30}ms` }}
                >
                  {char}
                </span>
              ))}
            </span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative solutions combining cutting-edge technologies 
            with creative design to deliver exceptional digital experiences.
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-20 scale-90'
              }`}
              style={{
                transitionDelay: `${300 + index * 150}ms`,
              }}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated Glow Effect on Hover */}
              <div className={`absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl blur-xl transition-all duration-500 ${
                hoveredCard === project.id ? 'opacity-30 animate-pulse' : 'opacity-0'
              }`} />
              
              {/* Card Container with 3D Transform */}
              <div 
                className="relative project-card h-full overflow-hidden rounded-2xl transition-all duration-500"
                style={{
                  transform: hoveredCard === project.id 
                    ? 'perspective(1000px) rotateX(2deg) translateY(-10px) scale(1.03)' 
                    : 'perspective(1000px) rotateX(0deg) translateY(0) scale(1)',
                  boxShadow: hoveredCard === project.id 
                    ? '0 30px 60px -12px rgba(139, 92, 246, 0.3), 0 18px 36px -18px rgba(139, 92, 246, 0.2)'
                    : '0 10px 30px -10px rgba(0, 0, 0, 0.1)',
                }}
              >
                {/* Project Image with Overlay */}
                <div className="relative h-64 md:h-72 overflow-hidden bg-card/50">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full transition-all duration-700 group-hover:scale-110 ${
                      project.id === 4 || project.id === 5 
                        ? 'object-contain p-4' 
                        : 'object-cover group-hover:rotate-2'
                    }`}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />

                  {/* Quick Action Buttons Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <a
                      href={project.liveUrl}
                      className="glow-button px-6 py-3 text-sm transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75 flex items-center gap-2 shadow-2xl"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <Globe size={18} weight="bold" />
                        Live Demo
                      </span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="glass-button-outline px-6 py-3 text-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 flex items-center gap-2 shadow-2xl backdrop-blur-xl"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <GithubLogo size={18} weight="bold" />
                        Code
                      </span>
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-4 py-2 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm hover:bg-primary/20 hover:scale-105 transition-all duration-300 cursor-default"
                        style={{
                          animationDelay: `${techIndex * 100}ms`,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Gradient Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="flex justify-center mt-16">
          <a
            href="https://github.com/shashenAmalka"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-button px-8 py-4 text-base flex items-center gap-3 group"
          >
            <span>View All Projects</span>
            <ArrowRight size={20} weight="bold" className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
