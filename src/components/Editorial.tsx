import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Anchor, ShieldCheck, Sparkles, Utensils } from 'lucide-react';
import seafoodPlatterImg from '../assets/images/seafood_platter_1789226651266.jpg';

interface EditorialProps {
  currentLang: Language;
}

export const Editorial: React.FC<EditorialProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section id="editorial" className="py-20 md:py-28 bg-[#F4FAFC] relative overflow-hidden">
      {/* Decorative subtle maritime wave effect */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#20A8AD]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#20A8AD]/10 text-[#20A8AD] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.editorial.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#173D8F] tracking-tight leading-tight">
              {t.editorial.title}
            </h2>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-normal">
              {t.editorial.text}
            </p>

            {/* Value cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-white shadow-sm border border-[#173D8F]/10 hover:border-[#20A8AD]/50 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-[#173D8F]/10 text-[#173D8F] flex items-center justify-center mb-3">
                  <Anchor className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#173D8F] text-sm mb-1">{t.editorial.highlight1.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{t.editorial.highlight1.desc}</p>
              </div>

              <div className="p-4 rounded-2xl bg-white shadow-sm border border-[#173D8F]/10 hover:border-[#20A8AD]/50 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-[#20A8AD]/10 text-[#20A8AD] flex items-center justify-center mb-3">
                  <Utensils className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#173D8F] text-sm mb-1">{t.editorial.highlight2.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{t.editorial.highlight2.desc}</p>
              </div>

              <div className="p-4 rounded-2xl bg-white shadow-sm border border-[#173D8F]/10 hover:border-[#20A8AD]/50 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-[#0799E8]/10 text-[#0799E8] flex items-center justify-center mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#173D8F] text-sm mb-1">{t.editorial.highlight3.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{t.editorial.highlight3.desc}</p>
              </div>
            </div>
          </div>

          {/* Right Image Presentation */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-[#173D8F]/15 group">
              <img
                src={seafoodPlatterImg || "/seafood_platter.jpg"}
                alt="Plateau de fruits de mer généreux chez Sphere by Léa Kouba"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('seafood_platter.jpg') && !target.src.includes('unsplash')) {
                    target.src = '/seafood_platter.jpg';
                  } else if (!target.src.includes('unsplash')) {
                    target.src = 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=80';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#173D8F]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white/40 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#20A8AD] uppercase tracking-wider">
                    Fraîcheur & Excellence
                  </div>
                  <div className="text-sm font-bold text-[#173D8F]">
                    Arrivages quotidiens sélectionnés au port
                  </div>
                </div>
                <span className="text-xs px-3 py-1.5 rounded-full font-bold bg-[#173D8F] text-white shrink-0">
                  100% Frais
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
