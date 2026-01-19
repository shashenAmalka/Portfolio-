import React, { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Navigation - Always visible on desktop */}
      <nav
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'nav-glass py-4' : 'py-6'
        }`}
      >
        <div className="container mx-auto px-6">
          {/* Centered Navigation Container */}
          <div className="flex items-center justify-center gap-4">
            {/* Logo */}
            <a
              href="#home"
              className="text-2xl font-bold text-gradient md:absolute md:left-6"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
            >
              Shashen
            </a>

            {/* Desktop Navigation - Centered Glass Buttons */}
            <div className="flex items-center gap-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`glass-button-outline px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive 
                        ? 'bg-primary/20 border-primary text-primary shadow-lg shadow-primary/20' 
                        : 'hover:bg-primary/10 hover:border-primary'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3 md:absolute md:right-6">
              {/* Hire Me Button */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="glow-button text-sm px-6 py-2"
              >
                <span>Hire Me</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Liquid Glass Buttons (Visible on Scroll) */}
      <div
        className={`md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'translate-y-0 opacity-100' 
            : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="nav-glass py-3 px-4">
          <div className="flex items-center justify-center gap-2 overflow-x-auto scrollbar-hide">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`glass-button-outline px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                    isActive 
                      ? 'bg-primary/20 border-primary text-primary shadow-lg shadow-primary/20' 
                      : 'hover:bg-primary/10 hover:border-primary'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="glow-button text-xs px-4 py-1.5 rounded-full whitespace-nowrap flex-shrink-0"
            >
              <span>Hire Me</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
