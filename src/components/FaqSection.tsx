import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { faqData } from '../data/menu';
import { HelpCircle, ChevronDown } from 'lucide-react';

interface FaqSectionProps {
  currentLang: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-24 bg-[#F4FAFC] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#173D8F]/10 text-[#173D8F] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#20A8AD]" />
            <span>Questions Fréquentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#173D8F] tracking-tight mb-4">
            {t.faq.title}
          </h2>
          <p className="text-base text-gray-600 leading-relaxed font-normal">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            const question = item.question[currentLang];
            const answer = item.answer[currentLang];

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full p-5 sm:p-6 text-left rtl:text-right flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:bg-[#F4FAFC]"
                  aria-expanded={isOpen}
                >
                  <span className="font-extrabold text-[#173D8F] text-base sm:text-lg">
                    {question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#F4FAFC] flex items-center justify-center shrink-0 text-[#173D8F] transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#20A8AD]/10 text-[#20A8AD]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-100 pt-3 animate-in fade-in duration-150 font-normal">
                    {answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
