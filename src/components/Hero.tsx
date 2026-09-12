import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Compass, MessageCircle, Star, Users, Fish, ArrowDown } from 'lucide-react';

interface HeroProps {
  currentLang: Language;
}

export const Hero: React.FC<HeroProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 80;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image: Official Restaurant Façade with Dark Blue Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/facade.jpg"
          alt="Restaurant Façade Sphere by Léa Kouba Algiers"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.src.includes('sphere_facade')) {
              target.src = '/src/assets/images/sphere_facade_1789226609228.jpg';
            }
          }}
        />
        {/* Subtle Dark Blue Gradient Overlay for High Contrast Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071739]/90 via-[#0E2A68]/80 to-[#173D8F]/75 backdrop-blur-[1px]" />
        {/* Subtle coastal light gradient at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F4FAFC] to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        {/* Decorative Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#20A8AD] text-xs sm:text-sm font-semibold mb-6 shadow-inner animate-in fade-in slide-in-from-top-4 duration-500">
          <Fish className="w-4 h-4 text-[#20A8AD]" />
          <span className="text-white tracking-wide">Kouba, Alger — {t.hero.trustSeafood}</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-md">
          Sphère <span className="text-[#20A8AD] font-light">by Léa</span>
        </h1>

        {/* Main Headline */}
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-50 max-w-3xl mx-auto mb-5 leading-snug">
          {t.hero.headline}
        </p>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg text-blue-100/90 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          {t.hero.subtitle}
        </p>

        {/* Two Highly Visible Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            onClick={() => handleScrollTo('menu')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-bold bg-[#20A8AD] text-white hover:bg-[#198d91] active:scale-95 shadow-xl shadow-[#20A8AD]/30 transition-all cursor-pointer"
          >
            <Compass className="w-5 h-5" />
            <span>{t.hero.exploreMenu}</span>
          </button>

          <a
            href="https://wa.me/213770600007?text=Bonjour%20Sphere%20by%20Léa,%20je%20souhaite%20réserver%20une%20table"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-bold bg-white text-[#173D8F] hover:bg-gray-100 active:scale-95 shadow-xl transition-all cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 text-[#25D366]" />
            <span>{t.hero.bookWhatsApp}</span>
          </a>
        </div>

        {/* Trust Indicators Below Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 max-w-3xl mx-auto">
          {/* Trust 1: Seafood Specialty */}
          <div className="flex items-center justify-center gap-3 px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-left rtl:text-right">
            <div className="w-10 h-10 rounded-xl bg-[#20A8AD]/20 flex items-center justify-center shrink-0">
              <Fish className="w-5 h-5 text-[#20A8AD]" />
            </div>
            <div>
              <div className="text-xs text-blue-200 uppercase font-semibold tracking-wider">Restaurant Spécialisé</div>
              <div className="text-sm font-bold text-white">{t.hero.trustSeafood}</div>
            </div>
          </div>

          {/* Trust 2: Google Rating 4.4/5 */}
          <div className="flex items-center justify-center gap-3 px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-left rtl:text-right">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 flex items-center justify-center shrink-0">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
            </div>
            <div>
              <div className="text-xs text-blue-200 uppercase font-semibold tracking-wider">Avis Vérifiés</div>
              <div className="text-sm font-bold text-white">{t.hero.trustRating}</div>
            </div>
          </div>

          {/* Trust 3: Over 300,000 Instagram followers */}
          <div className="flex items-center justify-center gap-3 px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-left rtl:text-right">
            <div className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 text-pink-300" />
            </div>
            <div>
              <div className="text-xs text-blue-200 uppercase font-semibold tracking-wider">Communauté</div>
              <div className="text-sm font-bold text-white">{t.hero.trustFollowers}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Down indicator */}
      <button
        onClick={() => handleScrollTo('editorial')}
        aria-label="Scroll to editorial section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-[#173D8F] transition-all cursor-pointer animate-bounce"
      >
        <ArrowDown className="w-4 h-4" />
      </button>
    </section>
  );
};
