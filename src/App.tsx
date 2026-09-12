import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Editorial } from './components/Editorial';
import { MenuSection } from './components/MenuSection';
import { ReservationSection } from './components/ReservationSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export function App() {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const saved = localStorage.getItem('sphere_lang') as Language;
        if (saved && ['fr', 'en', 'ar', 'zh'].includes(saved)) {
          return saved;
        }
      }
    } catch {
      // Ignore storage access errors in restricted iframe/private mode
    }
    return 'fr';
  });

  const handleLanguageChange = (lang: Language) => {
    if (['fr', 'en', 'ar', 'zh'].includes(lang)) {
      setCurrentLang(lang);
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          localStorage.setItem('sphere_lang', lang);
        }
      } catch {
        // Fallback silently if storage is restricted
      }
    }
  };

  useEffect(() => {
    document.documentElement.lang = currentLang;
    if (currentLang === 'ar') {
      document.documentElement.dir = 'rtl';
      document.body.classList.add('font-arabic');
    } else {
      document.documentElement.dir = 'ltr';
      document.body.classList.remove('font-arabic');
    }
  }, [currentLang]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-[#20A8AD] selection:text-white">
      {/* Sticky Header with Navigation & Language Switcher */}
      <Navbar 
        currentLang={currentLang} 
        onLanguageChange={handleLanguageChange} 
      />

      <main className="flex-grow">
        {/* Hero Section with Official Façade Background */}
        <Hero currentLang={currentLang} />

        {/* Editorial: The sea, without detours */}
        <Editorial currentLang={currentLang} />

        {/* Menu Section with Categories, DA Prices & Calorie Counts */}
        <MenuSection currentLang={currentLang} />

        {/* WhatsApp Reservation Form */}
        <ReservationSection currentLang={currentLang} />

        {/* Customer Reviews & Google Maps 4.4/5 Rating */}
        <ReviewsSection currentLang={currentLang} />

        {/* Interactive Google Map & Location Details */}
        <LocationSection currentLang={currentLang} />

        {/* Contact Information, Opening Hours & Socials */}
        <ContactSection currentLang={currentLang} />

        {/* Frequently Asked Questions */}
        <FaqSection currentLang={currentLang} />
      </main>

      {/* Footer with WebLab.Dz Agency Signature */}
      <Footer currentLang={currentLang} />

      {/* Floating Fast-Action WhatsApp & Call Buttons */}
      <FloatingActions currentLang={currentLang} />
    </div>
  );
}

export default App;
