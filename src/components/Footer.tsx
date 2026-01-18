import React from 'react';
import { GithubLogo, LinkedinLogo, Heart } from '@phosphor-icons/react';

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Footer: React.FC = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="relative py-16 overflow-hidden border-t border-border/50">
      {/* Background Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="floating-orb w-2 h-2 opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="footer-content">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            {/* Logo */}
            <a href="#home" className="text-2xl font-bold text-gradient">
              Shashen
            </a>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/shashenAmalka"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button-outline p-3 rounded-full group"
                aria-label="GitHub"
              >
                <GithubLogo
                  size={20}
                  weight="light"
                  className="text-foreground group-hover:text-primary transition-colors"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/shashen-amalka-0604373a1"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button-outline p-3 rounded-full group"
                aria-label="LinkedIn"
              >
                <LinkedinLogo
                  size={20}
                  weight="light"
                  className="text-foreground group-hover:text-primary transition-colors"
                />
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

          {/* Bottom Section - Center Aligned */}
          <div className="flex flex-col items-center justify-center gap-2 text-sm text-muted-foreground text-center">
            <p>Designed & Developed by Shashen</p>
            <p className="flex items-center gap-1">
              © 2026 Shashen
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
