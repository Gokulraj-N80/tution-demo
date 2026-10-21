import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import HighlightsSection from './components/HighlightsSection';
import TeachersSection from './components/TeachersSection';
import CoursesSection from './components/CoursesSection';
import WhyChooseSection from './components/WhyChooseSection';
import BranchesSection from './components/BranchesSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AdmissionModal from './components/AdmissionModal';
import MobileBottomBar from './components/MobileBottomBar';
import ThemeSwitcher from './components/ThemeSwitcher';
import { useScrollReveal } from './utils/useScrollReveal';
import { useSmoothScroll } from './utils/useSmoothScroll';
import { useAgencyMotion } from './utils/useAgencyMotion';
import ScrollProgressBar from './components/ScrollProgressBar';

function App() {
  const [lang, setLang] = useState('ta'); // Default to Tamil ('ta')
  const [isAdmissionOpen, setIsAdmissionOpen] = useState(false);
  
  // Theme state: 'royal-blue' is the Primary/Default theme (Never deleted)
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('demo_tuition_theme') || localStorage.getItem('jp_goodwill_theme') || 'royal-blue';
    } catch {
      return 'royal-blue';
    }
  });

  // Apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  // Initialize Lenis smooth scroll and agency physics
  useSmoothScroll();
  useScrollReveal();
  useAgencyMotion();

  return (
    <div className="app-container">
      {/* Top Subtle Reading Progress Indicator */}
      <ScrollProgressBar />

      {/* Header with Nav, Language Toggle & Theme Switcher */}
      <Header
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
        onOpenAdmission={() => setIsAdmissionOpen(true)}
      />

      {/* Main Sections - 100% Light Theme */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          lang={lang}
          onOpenAdmission={() => setIsAdmissionOpen(true)}
        />

        {/* 2. Contact Us Section (Moved to Second Position) */}
        <ContactSection
          lang={lang}
        />

        {/* 3. About Us Section */}
        <AboutSection
          lang={lang}
          onOpenAdmission={() => setIsAdmissionOpen(true)}
        />

        {/* 4. Our Teachers / PG Faculty Section */}
        <TeachersSection
          lang={lang}
          onOpenAdmission={() => setIsAdmissionOpen(true)}
        />

        {/* 5. Key Highlights Section */}
        <HighlightsSection
          lang={lang}
          onOpenAdmission={() => setIsAdmissionOpen(true)}
        />

        {/* 6. Our Courses */}
        <CoursesSection
          lang={lang}
          onOpenAdmission={() => setIsAdmissionOpen(true)}
        />

        {/* 7. Why Choose Us */}
        <WhyChooseSection
          lang={lang}
          onOpenAdmission={() => setIsAdmissionOpen(true)}
        />

        {/* 8. Our Branches */}
        <BranchesSection
          lang={lang}
          onOpenAdmission={() => setIsAdmissionOpen(true)}
        />

        {/* 9. Our Photo Gallery */}
        <GallerySection
          lang={lang}
        />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onOpenAdmission={() => setIsAdmissionOpen(true)}
      />

      {/* Admission Enquiry Modal */}
      <AdmissionModal
        isOpen={isAdmissionOpen}
        onClose={() => setIsAdmissionOpen(false)}
        lang={lang}
      />

      {/* Sticky Mobile Bottom Bar (Phone, WhatsApp, Quick Apply) */}
      <MobileBottomBar
        lang={lang}
        onOpenAdmission={() => setIsAdmissionOpen(true)}
      />

      {/* Interactive Floating Theme Switcher */}
      <ThemeSwitcher
        currentTheme={theme}
        onThemeChange={setTheme}
        lang={lang}
      />
    </div>
  );
}

export default App;
