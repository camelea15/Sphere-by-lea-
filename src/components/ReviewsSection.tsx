import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { reviewsData } from '../data/menu';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

interface ReviewsSectionProps {
  currentLang: Language;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section id="reviews" className="py-20 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Google Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#173D8F]/10 text-[#173D8F] text-xs font-bold uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5 fill-[#173D8F] text-[#173D8F]" />
              <span>{t.reviews.googleRating}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#173D8F] tracking-tight">
              {t.reviews.title}
            </h2>
          </div>

          {/* Google 4.4 Score Card */}
          <div className="inline-flex items-center gap-4 p-4 rounded-2xl bg-[#F4FAFC] border border-[#173D8F]/10 shadow-sm">
            <div className="flex flex-col">
              <span className="text-2xl font-black text-[#173D8F] leading-none">4.4 / 5</span>
              <div className="flex items-center gap-1 mt-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <div className="text-xs text-gray-500 border-l rtl:border-l-0 rtl:border-r border-gray-200 pl-3 rtl:pl-0 rtl:pr-3 leading-tight">
              <span className="font-bold text-gray-700 block">Avis Google Maps</span>
              <span>{t.reviews.verifiedCount}</span>
            </div>
          </div>
        </div>

        {/* 3 Exact Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewsData.map((review) => {
            const comment = review.comment[currentLang];
            return (
              <div
                key={review.id}
                className="p-6 sm:p-8 rounded-3xl bg-[#F4FAFC] border border-gray-200/80 hover:border-[#20A8AD]/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    {/* Stars */}
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-[#20A8AD]/30" />
                  </div>

                  {/* Comment Quote */}
                  <p className="text-gray-800 text-base leading-relaxed italic mb-6 font-medium">
                    “{comment}”
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200/60">
                  <div className="w-10 h-10 rounded-full bg-[#173D8F] text-white font-extrabold text-sm flex items-center justify-center">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#173D8F] flex items-center gap-1.5">
                      <span>{review.author}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#20A8AD]" />
                    </div>
                    <div className="text-[11px] text-gray-500 font-medium">
                      Client vérifié • {review.relativeTime}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
