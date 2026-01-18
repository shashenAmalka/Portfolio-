import React, { useState, useEffect } from 'react';
import { List, X } from '@phosphor-icons/react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
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
            <div className="hidden md:flex items-center gap-3">
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
            <div className="hidden md:flex items-center gap-3 md:absolute md:right-6">
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

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 text-foreground"
              aria-label="Open menu"
            >
              <List size={28} weight="light" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-xl"
          onClick={() => setIsMenuOpen(false)}
        />
        <div
          className={`absolute inset-y-0 right-0 w-full max-w-sm bg-card/90 backdrop-blur-xl transform transition-transform duration-500 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6">
            <div className="flex justify-end">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-foreground"
                aria-label="Close menu"
              >
                <X size={28} weight="light" />
              </button>
            </div>
            <div className="flex flex-col gap-6 mt-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-2xl font-medium text-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="glow-button text-center mt-6"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
