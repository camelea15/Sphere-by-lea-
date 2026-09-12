import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Menu, X, Phone, Globe, ChevronDown, Check } from 'lucide-react';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

const languages: { code: Language; label: string; flag: string; nativeName: string }[] = [
  { code: 'fr', label: 'Français', flag: '🇫🇷', nativeName: 'Français' },
  { code: 'en', label: 'English', flag: '🇬🇧', nativeName: 'English' },
  { code: 'ar', label: 'العربية', flag: '🇩🇿', nativeName: 'العربية' },
  { code: 'zh', label: '中文', flag: '🇨🇳', nativeName: '简体中文' },
];

export const Navbar: React.FC<NavbarProps> = ({ currentLang, onLanguageChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const t = translations[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section
      const sections = ['hero', 'menu', 'reservation', 'location', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#menu', label: t.nav.menu, id: 'menu' },
    { href: '#reservation', label: t.nav.reservation, id: 'reservation' },
    { href: '#location', label: t.nav.location, id: 'location' },
    { href: '#contact', label: t.nav.contact, id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 90;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-[#173D8F]/10'
          : 'bg-gradient-to-b from-[#0A1E4A]/90 via-[#0A1E4A]/60 to-transparent'
      }`}
    >
      {/* Primary Top Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3.5 flex items-center justify-between">
        {/* Brand Identity */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#20A8AD] rounded-lg py-1 px-1 group shrink-0"
          aria-label="Sphere by Léa Home"
        >
          <BrandLogo size="md" inverted={isScrolled} />
        </a>

        {/* Desktop & Tablet Navigation Links: Menu, Réservation, Localisation, Contact */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 lg:px-4 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 ${
                  isActive
                    ? 'bg-[#173D8F] text-white shadow-sm'
                    : isScrolled
                    ? 'text-[#173D8F] hover:text-[#20A8AD] hover:bg-[#F4FAFC]'
                    : 'text-white hover:text-[#20A8AD] hover:bg-white/10'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right side controls: Single Language Selector + Quick Call + CTA + Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Exactly ONE Language Switcher Icon/Dropdown for the entire navbar */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full text-xs font-bold border transition-colors ${
                isScrolled
                  ? 'border-[#173D8F]/20 text-[#173D8F] bg-white hover:border-[#20A8AD]'
                  : 'border-white/30 text-white bg-black/20 hover:border-white'
              }`}
              aria-expanded={langDropdownOpen}
              aria-label="Changer de langue"
            >
              <Globe className="w-3.5 h-3.5 text-[#20A8AD]" />
              <span className="uppercase tracking-wider font-extrabold">{currentLang}</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {langDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setLangDropdownOpen(false)}
                />
                <div className="absolute right-0 rtl:right-auto rtl:left-0 mt-2 w-44 bg-white rounded-2xl shadow-xl border border-gray-100 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150 text-gray-800">
                  <div className="px-3 py-1.5 text-[11px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100">
                    Language / Langue / لغة
                  </div>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onLanguageChange(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3.5 py-2 text-xs font-semibold hover:bg-[#F4FAFC] transition-colors text-left rtl:text-right ${
                        currentLang === lang.code ? 'text-[#173D8F] font-bold bg-[#F4FAFC]' : 'text-gray-700'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-base">{lang.flag}</span>
                        <span>{lang.nativeName}</span>
                      </span>
                      {currentLang === lang.code && <Check className="w-3.5 h-3.5 text-[#20A8AD]" />}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Quick Call Button */}
          <a
            href="tel:+213770600007"
            className={`hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold border transition-colors ${
              isScrolled
                ? 'border-[#20A8AD]/40 text-[#20A8AD] hover:bg-[#20A8AD] hover:text-white'
                : 'border-white/40 text-white hover:bg-white hover:text-[#173D8F]'
            }`}
            aria-label="Appeler Sphere by Léa"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>0770 60 00 07</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-xl focus:outline-none transition-colors ${
              isScrolled ? 'text-[#173D8F] hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-gray-200 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2 mb-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-3 rounded-xl text-base font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#173D8F] text-white'
                      : 'text-[#173D8F] hover:bg-[#F4FAFC]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <div className="w-2 h-2 rounded-full bg-[#20A8AD]" />}
                </a>
              );
            })}
          </div>

          {/* Languages in Mobile Drawer */}
          <div className="pt-3 border-t border-gray-100 mb-4">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-1">
              Language / Langue
            </div>
            <div className="grid grid-cols-2 gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    onLanguageChange(lang.code);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold border transition-colors ${
                    currentLang === lang.code
                      ? 'border-[#20A8AD] bg-[#20A8AD]/10 text-[#173D8F]'
                      : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-base">{lang.flag}</span>
                  <span>{lang.nativeName}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Actions in Mobile Drawer */}
          <div className="pt-2">
            <a
              href="tel:+213770600007"
              className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl border border-[#173D8F] text-[#173D8F] font-bold text-xs hover:bg-[#173D8F]/5 active:scale-98 transition-transform w-full"
            >
              <Phone className="w-4 h-4" />
              <span>0770 60 00 07</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
