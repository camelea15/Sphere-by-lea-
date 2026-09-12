import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { MapPin, ExternalLink, Navigation, Car, Compass } from 'lucide-react';

interface LocationSectionProps {
  currentLang: Language;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const officialMapsUrl = 'https://maps.app.goo.gl/Y2e5yg7fmpy6373H9';
  const fallbackSearchUrl = 'https://www.google.com/maps/search/?api=1&query=186+Rue+Ferme+Pons+Kouba+16000+Algiers+Algeria';

  return (
    <section id="location" className="py-20 md:py-28 bg-[#F4FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#20A8AD]/10 text-[#20A8AD] text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Kouba 16000, Alger</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#173D8F] tracking-tight mb-4">
            {t.location.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            {t.location.subtitle}
          </p>
        </div>

        {/* Map Container & Action Panel */}
        <div className="bg-white rounded-3xl shadow-xl border border-[#173D8F]/10 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Interactive Embedded Google Map Iframe */}
          <div className="lg:col-span-8 min-h-[360px] lg:min-h-[480px] w-full relative bg-gray-100">
            <iframe
              title="Sphere by Léa Kouba Google Maps Location"
              src="https://maps.google.com/maps?q=186+Rue+Ferme+Pons,+Kouba+16000,+Alger&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 absolute inset-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Details & Quick Buttons Panel */}
          <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-white">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#173D8F]/10 text-[#173D8F] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#173D8F]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Adresse Exacte
                  </div>
                  <div className="text-sm font-bold text-[#173D8F] leading-snug mt-0.5">
                    186 Rue Ferme Pons, Kouba 16000, Alger, Algérie
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#20A8AD]/10 text-[#20A8AD] flex items-center justify-center shrink-0 mt-0.5">
                  <Car className="w-5 h-5 text-[#20A8AD]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Accès & Stationnement
                  </div>
                  <div className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                    {t.location.parkingNotice}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0799E8]/10 text-[#0799E8] flex items-center justify-center shrink-0 mt-0.5">
                  <Compass className="w-5 h-5 text-[#0799E8]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Repères
                  </div>
                  <div className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                    {t.location.landmarkNotice}
                  </div>
                </div>
              </div>
            </div>

            {/* Actions: Primary Maps link + Fallback search link */}
            <div className="space-y-3 pt-4 border-t border-gray-100">
              <a
                href={officialMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-bold bg-[#173D8F] text-white hover:bg-[#0f2a63] active:scale-95 shadow-md shadow-[#173D8F]/20 transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>{t.location.openInMaps}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <a
                href={fallbackSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold text-gray-600 hover:text-[#173D8F] hover:bg-[#F4FAFC] transition-colors"
              >
                <span>{t.location.fallbackSearch}</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
