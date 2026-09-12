export type Language = 'fr' | 'en' | 'ar' | 'zh';

export type MenuCategoryId = 
  | 'starters' 
  | 'platters' 
  | 'paellas' 
  | 'fish' 
  | 'pasta' 
  | 'bread'
  | 'drinks';

export interface MenuItem {
  id: string;
  nameFr: string;
  category: MenuCategoryId;
  priceDa: number | string; // e.g., 400 or "100–200"
  calories?: string;
  weightGrams?: string;
  pricePerKg?: string;
  portion?: string; // e.g., "1 person", "2 people"
  notes?: string;
  descriptionKey?: string;
  isPopular?: boolean;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: Record<Language, string>;
  relativeTime: string;
}

export interface FaqItem {
  id: string;
  question: Record<Language, string>;
  answer: Record<Language, string>;
}

export interface ReservationFormData {
  fullName: string;
  phone: string;
  message: string;
  date: string;
  time: string;
  guests: string;
}
