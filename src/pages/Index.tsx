import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { useGsapAnimations } from '@/hooks/useGsapAnimations';
import { ThemeProvider } from '@/contexts/ThemeContext';

const Index: React.FC = () => {
  useGsapAnimations();

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-background overflow-x-hidden">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
