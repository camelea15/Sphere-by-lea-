import React from 'react';
import { BrandLogo } from './BrandLogo';
import { Language } from '../types';
import { translations } from '../data/translations';
import { 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook,
  Music2,
  Heart,
  ArrowUp
} from 'lucide-react';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#0A1E4A] text-white pt-16 pb-12 border-t border-[#173D8F]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo size="lg" />
            <p className="text-sm text-blue-200 leading-relaxed font-normal pt-2">
              Restaurant gastronomique spécialisé en poissons frais, fruits de mer et paellas artisanales, situé à Kouba, Alger.
            </p>
            <div className="pt-2 space-y-2.5">
              <a
                href="https://www.instagram.com/sphere_restaurant_by_lea/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#20A8AD]" />
                <span>Rejoignez nos +300k abonnés Instagram</span>
              </a>

              <div className="flex items-center gap-2">
                <a
                  href="https://www.facebook.com/share/1ajjLn7qh2/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#1877F2] text-xs font-semibold text-white transition-colors"
                  aria-label="Facebook Sphere by Léa"
                >
                  <Facebook className="w-3.5 h-3.5" />
                  <span>Facebook</span>
                </a>
                <a
                  href="https://www.tiktok.com/@sphere_restaurant_by_lea?_r=1&_t=ZS-99fuCIvUNgi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-black text-xs font-semibold text-white transition-colors"
                  aria-label="TikTok Sphere by Léa"
                >
                  <Music2 className="w-3.5 h-3.5 text-[#25F4EE]" />
                  <span>TikTok</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold text-[#20A8AD] uppercase tracking-wider mb-4">
              {t.footer.quickLinks}
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => handleNavClick(e, '#hero')}
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  onClick={(e) => handleNavClick(e, '#menu')}
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  {t.nav.menu}
                </a>
              </li>
              <li>
                <a
                  href="#reservation"
                  onClick={(e) => handleNavClick(e, '#reservation')}
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  {t.nav.reservation}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  {t.nav.contact}
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  onClick={(e) => handleNavClick(e, '#location')}
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  {t.nav.location}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Coordinates & Contact */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-bold text-[#20A8AD] uppercase tracking-wider mb-4">
              {t.footer.contactTitle}
            </div>
            <ul className="space-y-3 text-sm text-blue-100">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#20A8AD] shrink-0 mt-1" />
                <span>186 Rue Ferme Pons, Kouba 16000, Alger, Algérie</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#20A8AD] shrink-0" />
                <a href="tel:+213770600007" className="hover:text-white transition-colors">
                  +213 770 600 007 / 0770 60 00 07
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-300">
          <div className="flex items-center gap-2">
            <span>{t.footer.rights || '© 2026 Sphere by Léa — ( all rights reserved )'}</span>
          </div>

          {/* Agency Signature */}
          <div className="flex items-center gap-1.5 text-blue-200 font-medium">
            <span>Conçu & développé avec</span>
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400 inline" />
            <span>
              par{' '}
              <a
                href="https://www.instagram.com/weblab.dz?stkn=bHhkYzRyNGhnZDJu&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-bold tracking-wide hover:text-[#20A8AD] underline decoration-[#20A8AD]/50 hover:decoration-[#20A8AD] transition-colors"
              >
                WebLab.Dz
              </a>
            </span>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
