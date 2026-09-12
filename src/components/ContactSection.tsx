import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Navigation, 
  Instagram,
  Facebook,
  Music2
} from 'lucide-react';

interface ContactSectionProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const officialInstagramUrl = 'https://www.instagram.com/sphere_restaurant_by_lea/';
  const officialFacebookUrl = 'https://www.facebook.com/share/1ajjLn7qh2/?mibextid=wwXIfr';
  const officialTiktokUrl = 'https://www.tiktok.com/@sphere_restaurant_by_lea?_r=1&_t=ZS-99fuCIvUNgi';
  const officialMapsUrl = 'https://maps.app.goo.gl/Y2e5yg7fmpy6373H9';
  const whatsappUrl = 'https://wa.me/213770600007';

  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#173D8F]/10 text-[#173D8F] text-xs font-bold uppercase tracking-wider mb-3">
            <Phone className="w-3.5 h-3.5 text-[#20A8AD]" />
            <span>Informations & Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#173D8F] tracking-tight mb-4">
            {t.contact.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card 1: Details & Prominent Action Buttons */}
          <div className="lg:col-span-7 bg-[#F4FAFC] rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-sm flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-extrabold text-[#173D8F] tracking-tight border-b border-gray-200 pb-3">
                Coordonnées Directes
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-[#173D8F] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      {t.contact.phoneLabel}
                    </div>
                    <a
                      href="tel:+213770600007"
                      className="text-base font-extrabold text-[#173D8F] hover:text-[#20A8AD] transition-colors block mt-0.5"
                    >
                      +213 770 600 007
                    </a>
                    <span className="text-xs text-gray-500 block">
                      Format local : {t.contact.phoneLocal}
                    </span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      {t.contact.whatsappLabel}
                    </div>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-extrabold text-[#173D8F] hover:text-[#20A8AD] transition-colors block mt-0.5"
                    >
                      +213 770 600 007
                    </a>
                    <span className="text-xs text-[#20A8AD] font-semibold block">
                      Discussion instantanée
                    </span>
                  </div>
                </div>
              </div>

              {/* Address Row */}
              <div className="flex items-start gap-3.5 pt-2 border-t border-gray-200">
                <div className="w-11 h-11 rounded-2xl bg-white border border-gray-200 text-[#173D8F] flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5 text-[#173D8F]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    {t.contact.addressLabel}
                  </div>
                  <div className="text-sm sm:text-base font-bold text-[#173D8F] mt-0.5">
                    {t.contact.addressValue}
                  </div>
                </div>
              </div>
            </div>

            {/* Three Prominent Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-gray-200">
              <a
                href="tel:+213770600007"
                className="inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-[#173D8F] text-white text-xs sm:text-sm font-bold hover:bg-[#112d6a] active:scale-95 shadow-md shadow-[#173D8F]/20 transition-all text-center"
              >
                <Phone className="w-4 h-4" />
                <span>{t.contact.callNow}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-[#25D366] text-white text-xs sm:text-sm font-bold hover:bg-[#20b858] active:scale-95 shadow-md shadow-[#25D366]/20 transition-all text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.contact.messageWhatsApp}</span>
              </a>

              <a
                href={officialMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-white border border-[#173D8F]/20 text-[#173D8F] text-xs sm:text-sm font-bold hover:bg-gray-50 active:scale-95 transition-all text-center"
              >
                <Navigation className="w-4 h-4 text-[#20A8AD]" />
                <span>{t.contact.getDirections}</span>
              </a>
            </div>
          </div>

          {/* Card 2: Opening Hours & Social Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Opening Hours Card */}
            <div className="bg-[#0A1E4A] text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-white/10 text-[#20A8AD] flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#20A8AD] uppercase tracking-wider">
                    Service Continu
                  </div>
                  <h3 className="text-xl font-extrabold text-white tracking-tight">
                    {t.contact.hoursTitle}
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                {/* Sat-Thu */}
                <div className="p-4 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-between">
                  <span className="font-bold text-sm text-blue-100">
                    {t.contact.hoursSatThu}
                  </span>
                  <span className="font-extrabold text-sm text-white px-3 py-1 rounded-full bg-[#20A8AD]">
                    {t.contact.hoursSatThuTime}
                  </span>
                </div>

                {/* Friday */}
                <div className="p-4 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-between">
                  <span className="font-bold text-sm text-blue-100">
                    {t.contact.hoursFri}
                  </span>
                  <span className="font-extrabold text-sm text-white px-3 py-1 rounded-full bg-[#0799E8]">
                    {t.contact.hoursFriTime}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-xs text-blue-200">
                Service en salle & commandes à emporter ou en livraison selon disponibilité.
              </div>
            </div>

            {/* Social Channels Card */}
            <div className="bg-[#F4FAFC] rounded-3xl p-6 border border-gray-200/80 shadow-sm">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                Réseaux Sociaux Officiels
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {/* Instagram */}
                <a
                  href={officialInstagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-3.5 rounded-2xl bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-bold text-xs shadow-sm hover:opacity-95 active:scale-95 transition-all"
                  aria-label="Instagram Sphere by Léa (+300k abonnés)"
                >
                  <Instagram className="w-4 h-4 shrink-0" />
                  <span>Instagram (+300k)</span>
                </a>

                {/* Facebook */}
                <a
                  href={officialFacebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-3.5 rounded-2xl bg-[#1877F2] text-white font-bold text-xs shadow-sm hover:bg-[#166fe5] active:scale-95 transition-all"
                  aria-label="Facebook Sphere by Léa"
                >
                  <Facebook className="w-4 h-4 shrink-0" />
                  <span>Facebook</span>
                </a>

                {/* TikTok */}
                <a
                  href={officialTiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-3.5 rounded-2xl bg-black text-white font-bold text-xs shadow-sm hover:bg-neutral-800 active:scale-95 transition-all"
                  aria-label="TikTok Sphere by Léa"
                >
                  <Music2 className="w-4 h-4 shrink-0 text-[#25F4EE]" />
                  <span>TikTok</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
