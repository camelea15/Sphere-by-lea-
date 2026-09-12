import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { Language } from '../types';

interface FloatingActionsProps {
  currentLang: Language;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ currentLang }) => {
  const whatsappUrl = 'https://wa.me/213770600007?text=Bonjour%20Sphere%20by%20Léa,%20je%20souhaite%20réserver%20une%20table';

  return (
    <div className="fixed bottom-5 right-5 rtl:right-auto rtl:left-5 z-40 flex flex-col gap-3">
      {/* Quick Phone call on mobile */}
      <a
        href="tel:+213770600007"
        className="w-12 h-12 rounded-full bg-[#173D8F] text-white flex sm:hidden items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform"
        aria-label="Appeler Sphere by Léa"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* WhatsApp Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20b858] hover:scale-105 active:scale-95 transition-all duration-200"
        aria-label="Discuter sur WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
        <span className="hidden md:inline-block text-xs font-extrabold tracking-wide whitespace-nowrap">
          {currentLang === 'ar' ? 'حجز عبر واتساب' : currentLang === 'zh' ? 'WhatsApp预订' : currentLang === 'en' ? 'WhatsApp Booking' : 'Réserver sur WhatsApp'}
        </span>
      </a>
    </div>
  );
};
