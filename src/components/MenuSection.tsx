import React, { useState, useMemo } from 'react';
import { Language, MenuCategoryId, MenuItem } from '../types';
import { translations } from '../data/translations';
import { menuItems } from '../data/menu';
import { 
  Utensils, 
  Flame, 
  Search, 
  Users, 
  Sparkles, 
  Calendar,
  ChefHat,
  Scale
} from 'lucide-react';

interface MenuSectionProps {
  currentLang: Language;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ currentLang }) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategoryId | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const t = translations[currentLang];

  const categories: { id: MenuCategoryId | 'all'; label: string; icon: string }[] = [
    { id: 'all', label: t.menu.allCategories, icon: '🌊' },
    { id: 'starters', label: t.menu.categories.starters, icon: '🥗' },
    { id: 'platters', label: t.menu.categories.platters, icon: '🦐' },
    { id: 'paellas', label: t.menu.categories.paellas, icon: '🥘' },
    { id: 'fish', label: t.menu.categories.fish, icon: '🐟' },
    { id: 'pasta', label: t.menu.categories.pasta, icon: '🍝' },
    { id: 'bread', label: t.menu.categories.bread, icon: '🥖' },
    { id: 'drinks', label: t.menu.categories.drinks, icon: '🍹' },
  ];

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const desc = item.translatedDesc ? item.translatedDesc[currentLang] || '' : '';
      const matchesSearch = 
        item.nameFr.toLowerCase().includes(query) ||
        desc.toLowerCase().includes(query) ||
        (item.notes && item.notes.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, currentLang]);

  const scrollToReservation = () => {
    const el = document.getElementById('reservation');
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
    <section id="menu" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#173D8F]/10 text-[#173D8F] text-xs font-bold uppercase tracking-wider mb-3">
            <Utensils className="w-3.5 h-3.5 text-[#20A8AD]" />
            <span>Spécialités Kouba</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#173D8F] tracking-tight mb-4">
            {t.menu.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            {t.menu.subtitle}
          </p>
        </div>

        {/* Search Bar & Category Filter Tabs */}
        <div className="mb-10 space-y-5">
          {/* Search Input */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-4 rtl:left-auto rtl:right-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.menu.searchPlaceholder}
              className="w-full pl-11 pr-4 rtl:pl-4 rtl:pr-11 py-3 rounded-full bg-[#F4FAFC] border border-[#173D8F]/15 text-sm text-gray-800 placeholder-gray-400 focus:bg-white focus:border-[#20A8AD] focus:ring-2 focus:ring-[#20A8AD]/20 transition-all outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 rtl:right-auto rtl:left-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600 font-bold"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#173D8F] text-white shadow-md shadow-[#173D8F]/25 scale-105'
                      : 'bg-[#F4FAFC] text-gray-700 hover:bg-[#173D8F]/10 border border-gray-200/60'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Special Highlight Banner for Selected Categories */}
        {selectedCategory === 'platters' && (
          <div className="mb-8 p-4 rounded-2xl bg-[#20A8AD]/10 border border-[#20A8AD]/30 text-center max-w-2xl mx-auto">
            <span className="text-xs sm:text-sm font-bold text-[#173D8F] flex items-center justify-center gap-2">
              <ChefHat className="w-4 h-4 text-[#20A8AD]" />
              <span>{t.menu.plattersSubtitle}</span>
            </span>
          </div>
        )}

        {selectedCategory === 'paellas' && (
          <div className="mb-8 p-5 rounded-2xl bg-[#0A1E4A] text-white max-w-3xl mx-auto shadow-md relative overflow-hidden">
            <div className="relative z-10 text-center sm:text-left rtl:sm:text-right">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#20A8AD] uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Recette Signature Maison</span>
              </div>
              <p className="text-sm text-blue-100 leading-relaxed font-medium">
                {t.menu.paellaDescription}
              </p>
            </div>
          </div>
        )}

        {selectedCategory === 'fish' && (
          <div className="mb-8 p-4 rounded-2xl bg-[#173D8F]/10 border border-[#173D8F]/20 text-center max-w-2xl mx-auto">
            <span className="text-xs sm:text-sm font-bold text-[#173D8F] flex items-center justify-center gap-2">
              <Flame className="w-4 h-4 text-[#20A8AD]" />
              <span>{t.menu.fishSubtitle}</span>
            </span>
          </div>
        )}

        {selectedCategory === 'bread' && (
          <div className="mb-8 p-4 rounded-2xl bg-amber-50 border border-amber-200/80 text-center max-w-2xl mx-auto">
            <span className="text-xs sm:text-sm font-bold text-amber-900 flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Cuit et servi chaud au panier pour accompagner vos plats et sauces</span>
            </span>
          </div>
        )}

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredItems.map((item) => {
            const desc = item.translatedDesc ? item.translatedDesc[currentLang] : '';
            return (
              <div
                key={item.id}
                className="flex flex-col justify-between p-5 sm:p-6 rounded-3xl bg-[#F4FAFC] border border-gray-200/80 hover:border-[#20A8AD]/60 hover:shadow-lg transition-all duration-300 group"
              >
                <div>
                  {/* Top Bar: French Name + Price Badge */}
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <h3 className="font-extrabold text-[#173D8F] text-base sm:text-lg leading-snug group-hover:text-[#20A8AD] transition-colors">
                      {item.nameFr}
                    </h3>
                    <div className="shrink-0 px-3 py-1.5 rounded-full bg-[#173D8F] text-white font-extrabold text-xs sm:text-sm shadow-sm whitespace-nowrap">
                      {typeof item.priceDa === 'number'
                        ? `${item.priceDa.toLocaleString()} ${t.menu.daCurrency}`
                        : `${item.priceDa} ${t.menu.daCurrency}`}
                    </div>
                  </div>

                  {/* Translated Description */}
                  {desc && (
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3 font-normal">
                      {desc}
                    </p>
                  )}

                  {/* Notes / Special details if any */}
                  {item.notes && (
                    <div className="text-xs text-[#20A8AD] font-semibold mb-3 italic">
                      {item.notes}
                    </div>
                  )}
                </div>

                {/* Bottom badges: Calories, Weight, Price/Kg, Portion */}
                <div className="pt-3 border-t border-gray-200/60 flex flex-wrap items-center gap-2 text-[11px] font-semibold text-gray-500">
                  {item.portion && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-gray-200 text-[#173D8F]">
                      <Users className="w-3 h-3 text-[#20A8AD]" />
                      <span>{item.portion}</span>
                    </span>
                  )}

                  {item.weightGrams && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-gray-200">
                      <Scale className="w-3 h-3 text-gray-400" />
                      <span>{item.weightGrams}</span>
                    </span>
                  )}

                  {item.calories && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-gray-200 text-amber-700">
                      <Flame className="w-3 h-3 text-amber-500" />
                      <span>{item.calories}</span>
                    </span>
                  )}

                  {item.pricePerKg && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#20A8AD]/10 text-[#173D8F] font-bold">
                      <span>{item.pricePerKg}</span>
                    </span>
                  )}

                  {item.isPopular && (
                    <span className="ml-auto rtl:ml-0 rtl:mr-auto inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#20A8AD] text-white font-bold text-[10px] uppercase">
                      Incontournable
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-[#F4FAFC] rounded-3xl border border-dashed border-gray-300">
            <p className="text-gray-500 text-sm">
              Aucun plat trouvé pour votre recherche. Essayez un autre mot-clé.
            </p>
          </div>
        )}

        {/* CTA Banner After Menu */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#173D8F] to-[#0A1E4A] text-white text-center sm:text-left rtl:sm:text-right flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-xl">
            <div className="text-xs font-bold text-[#20A8AD] uppercase tracking-wider mb-2">
              Sphere by Léa Kouba
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {t.menu.ctaBannerText}
            </h3>
          </div>
          <button
            onClick={scrollToReservation}
            className="relative z-10 shrink-0 inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm sm:text-base font-bold bg-[#20A8AD] text-white hover:bg-[#198d91] active:scale-95 shadow-lg shadow-[#20A8AD]/30 transition-all cursor-pointer"
          >
            <Calendar className="w-5 h-5" />
            <span>{t.menu.ctaBannerButton}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
