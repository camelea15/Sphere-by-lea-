import { Language } from '../types';

export interface TranslationContent {
  nav: {
    home: string;
    menu: string;
    reservation: string;
    contact: string;
    location: string;
    bookTable: string;
    quickCall: string;
  };
  hero: {
    title: string;
    headline: string;
    subtitle: string;
    exploreMenu: string;
    bookWhatsApp: string;
    trustSeafood: string;
    trustRating: string;
    trustFollowers: string;
  };
  editorial: {
    badge: string;
    title: string;
    text: string;
    highlight1: { title: string; desc: string };
    highlight2: { title: string; desc: string };
    highlight3: { title: string; desc: string };
  };
  menu: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    allCategories: string;
    categories: {
      starters: string;
      platters: string;
      paellas: string;
      fish: string;
      pasta: string;
      bread: string;
      drinks: string;
    };
    plattersSubtitle: string;
    paellaDescription: string;
    fishSubtitle: string;
    daCurrency: string;
    portionPerson: string;
    portionPeople: string;
    cookingOptions: string;
    freshDaily: string;
    ctaBannerText: string;
    ctaBannerButton: string;
    calorieLabel: string;
    weightLabel: string;
    pricePerKgLabel: string;
  };
  reservation: {
    title: string;
    subtitle: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    dateLabel: string;
    timeLabel: string;
    guestsLabel: string;
    guestOptions: {
      one: string;
      two: string;
      threeFour: string;
      fivePlus: string;
    };
    submitButton: string;
    redirecting: string;
    requiredNotice: string;
    guaranteeText: string;
    errorName: string;
    errorPhone: string;
    errorMessage: string;
    waGreeting: string;
    waName: string;
    waPhone: string;
    waDate: string;
    waTime: string;
    waGuests: string;
    waMessage: string;
  };
  contact: {
    title: string;
    subtitle: string;
    addressLabel: string;
    addressValue: string;
    phoneLabel: string;
    phoneLocal: string;
    whatsappLabel: string;
    hoursTitle: string;
    hoursSatThu: string;
    hoursSatThuTime: string;
    hoursFri: string;
    hoursFriTime: string;
    callNow: string;
    messageWhatsApp: string;
    getDirections: string;
    socialSoon: string;
  };
  location: {
    title: string;
    subtitle: string;
    openInMaps: string;
    fallbackSearch: string;
    parkingNotice: string;
    landmarkNotice: string;
  };
  reviews: {
    title: string;
    googleRating: string;
    verifiedCount: string;
  };
  faq: {
    title: string;
    subtitle: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    contactInfo: string;
    hours: string;
    rights: string;
  };
  floatingWa: {
    tooltip: string;
    chatWithUs: string;
  };
}

export const translations: Record<Language, TranslationContent> = {
  fr: {
    nav: {
      home: 'Accueil',
      menu: 'Menu',
      reservation: 'Réservation',
      contact: 'Contact',
      location: 'Localisation',
      bookTable: 'Réserver une table',
      quickCall: 'Appeler',
    },
    hero: {
      title: 'Sphere by Léa',
      headline: 'La destination des amoureux de poisson frais à Alger',
      subtitle: 'De la mer à votre assiette : poissons frais, fruits de mer généreux et saveurs méditerranéennes au cœur de Kouba.',
      exploreMenu: 'Découvrir le menu',
      bookWhatsApp: 'Réserver via WhatsApp',
      trustSeafood: 'Spécialité Poissons & Fruits de Mer',
      trustRating: 'Note Google : 4.4/5',
      trustFollowers: '+300 000 abonnés Instagram',
    },
    editorial: {
      badge: 'Qualité & Fraîcheur',
      title: 'La mer, sans détours',
      text: 'Chez Sphere by Léa, nos poissons et fruits de mer sont sélectionnés chaque jour avec le plus grand soin pour vous offrir une fraîcheur et une qualité d’exception dans chaque assiette.',
      highlight1: {
        title: 'Arrivages Quotidiens',
        desc: 'Poissons sauvages et fruits de mer frais reçus chaque matin directement des ports.',
      },
      highlight2: {
        title: 'Recettes Méditerranéennes',
        desc: 'Bouillons faits maison, assaisonnements derssa authentiques et cuisson maîtrisée.',
      },
      highlight3: {
        title: 'Convivialité & Partage',
        desc: 'Grands plateaux généreux et paellas cuites à la commande à partager en famille.',
      },
    },
    menu: {
      title: 'Notre Carte Gourmande',
      subtitle: 'Une sélection raffinée de prises du jour, plateaux royaux, paellas maison et délices de la mer.',
      searchPlaceholder: 'Rechercher un plat...',
      allCategories: 'Tout le menu',
      categories: {
        starters: 'Entrées',
        platters: 'Plateaux de Fruits de Mer',
        paellas: 'Paellas Maison',
        fish: 'Poissons Frais',
        pasta: 'Pâtes et Gratins',
        bread: 'Corbeille de Pain Maison',
        drinks: 'Boissons et Desserts',
      },
      plattersSubtitle: 'Servi avec riz ou frites',
      paellaDescription: 'Riz fondant mijoté lentement dans un fumet de poisson maison, garni généreusement de sépia, calamar, crevettes et poisson blanc. Sublimé par des crevettes royales grillées et des moules de roche.',
      fishSubtitle: 'Choix de cuisson : grillé ou friture',
      daCurrency: 'DA',
      portionPerson: 'personne',
      portionPeople: 'personnes',
      cookingOptions: 'Grillé ou Frit',
      freshDaily: 'Arrivage du jour',
      ctaBannerText: 'Envie de poissons et fruits de mer frais ? Réservez votre table dès maintenant.',
      ctaBannerButton: 'Réserver une table',
      calorieLabel: 'kcal',
      weightLabel: 'poids net',
      pricePerKgLabel: 'prix au kg',
    },
    reservation: {
      title: 'Réservez votre table',
      subtitle: 'Pour les réservations, demandes spéciales ou événements privés, contactez-nous directement sur WhatsApp.',
      fullNameLabel: 'Nom complet *',
      fullNamePlaceholder: 'Ex: Karim Benali',
      phoneLabel: 'Numéro de téléphone *',
      phonePlaceholder: 'Ex: 0770 60 00 07',
      messageLabel: 'Message ou demande particulière *',
      messagePlaceholder: 'Précisez vos souhaits (terrasse, anniversaire, préférences de cuisson...)',
      dateLabel: 'Date souhaitée (optionnel)',
      timeLabel: 'Heure souhaitée (optionnel)',
      guestsLabel: 'Nombre de personnes (optionnel)',
      guestOptions: {
        one: '1 personne',
        two: '2 personnes',
        threeFour: '3 à 4 personnes',
        fivePlus: '5 personnes ou plus',
      },
      submitButton: 'Envoyer ma demande via WhatsApp',
      redirecting: 'Ouverture de WhatsApp...',
      requiredNotice: '* Champs obligatoires',
      guaranteeText: 'Réponse rapide garantie par notre équipe pendant les horaires de service.',
      errorName: 'Veuillez saisir votre nom complet.',
      errorPhone: 'Veuillez saisir un numéro de téléphone valide.',
      errorMessage: 'Veuillez écrire votre message.',
      waGreeting: 'Bonjour Sphere by Léa, je souhaite réserver une table :',
      waName: 'Nom',
      waPhone: 'Téléphone',
      waDate: 'Date souhaitée',
      waTime: 'Heure souhaitée',
      waGuests: 'Nombre de personnes',
      waMessage: 'Message / Demande',
    },
    contact: {
      title: 'Contactez-nous',
      subtitle: 'Notre équipe est ravie de vous accueillir au restaurant ou de répondre à vos demandes.',
      addressLabel: 'Adresse',
      addressValue: '186 Rue Ferme Pons, Kouba 16000, Alger, Algérie',
      phoneLabel: 'Téléphone',
      phoneLocal: '0770 60 00 07',
      whatsappLabel: 'WhatsApp direct',
      hoursTitle: 'Horaires d’ouverture',
      hoursSatThu: 'Samedi au Jeudi',
      hoursSatThuTime: '11h30 – 23h30',
      hoursFri: 'Vendredi',
      hoursFriTime: '14h30 – 23h30',
      callNow: 'Appeler maintenant',
      messageWhatsApp: 'Écrire sur WhatsApp',
      getDirections: 'Itinéraire Google Maps',
      socialSoon: 'Lien officiel à venir',
    },
    location: {
      title: 'Nous trouver à Kouba',
      subtitle: 'Un emplacement chaleureux et facile d’accès au 186 Rue Ferme Pons.',
      openInMaps: 'Ouvrir dans Google Maps',
      fallbackSearch: 'Rechercher sur Google Maps',
      parkingNotice: 'Stationnement accessible à proximité du restaurant.',
      landmarkNotice: 'Kouba 16000, Alger — Repère Ferme Pons.',
    },
    reviews: {
      title: 'Ce que disent nos clients',
      googleRating: 'Note Google : 4.4/5',
      verifiedCount: 'Basé sur les avis certifiés de nos convives',
    },
    faq: {
      title: 'Questions fréquentes',
      subtitle: 'Tout ce que vous devez savoir pour votre venue chez Sphere by Léa.',
    },
    footer: {
      tagline: 'Votre escapade marine au cœur de Kouba.',
      quickLinks: 'Navigation',
      contactInfo: 'Coordonnées',
      hours: 'Horaires de service',
      rights: '© 2026 Sphere by Léa — Tous droits réservés ( all rights reserved ).',
    },
    floatingWa: {
      tooltip: 'Discuter sur WhatsApp',
      chatWithUs: 'Réserver / Poser une question',
    },
  },
  en: {
    nav: {
      home: 'Home',
      menu: 'Menu',
      reservation: 'Reservation',
      contact: 'Contact',
      location: 'Location',
      bookTable: 'Book a table',
      quickCall: 'Call',
    },
    hero: {
      title: 'Sphere by Léa',
      headline: 'The destination for fresh seafood lovers in Algiers',
      subtitle: 'From the sea to your plate: fresh fish, generous seafood, and Mediterranean flavors in the heart of Kouba.',
      exploreMenu: 'Explore the menu',
      bookWhatsApp: 'Book via WhatsApp',
      trustSeafood: 'Fresh Seafood Specialty',
      trustRating: 'Google rating: 4.4/5',
      trustFollowers: 'Over 300,000 Instagram followers',
    },
    editorial: {
      badge: 'Quality & Freshness',
      title: 'The sea, without detours',
      text: 'At Sphere by Léa, our seafood is carefully selected every day to offer exceptional freshness and quality in every dish.',
      highlight1: {
        title: 'Daily Dock Arrivals',
        desc: 'Wild fish and prime seafood delivered every single morning from coastal fishermen.',
      },
      highlight2: {
        title: 'Mediterranean Recipes',
        desc: 'Homemade stocks, authentic derssa seasonings, and precision cooking methods.',
      },
      highlight3: {
        title: 'Sharing & Conviviality',
        desc: 'Generous seafood platters and freshly simmered paellas made to share with loved ones.',
      },
    },
    menu: {
      title: 'Our Gourmet Menu',
      subtitle: 'A refined selection of daily catches, royal seafood platters, homemade paellas, and coastal delights.',
      searchPlaceholder: 'Search dishes...',
      allCategories: 'Full menu',
      categories: {
        starters: 'Starters',
        platters: 'Seafood Platters',
        paellas: 'Homemade Paellas',
        fish: 'Fresh Fish',
        pasta: 'Pasta & Gratins',
        bread: 'Corbeille de Pain Maison',
        drinks: 'Drinks & Desserts',
      },
      plattersSubtitle: 'Served with rice or fries',
      paellaDescription: 'Soft rice slowly cooked in homemade fish stock, generously filled with cuttlefish, calamari, shrimp, and white fish. Finished with grilled king prawns and rock mussels.',
      fishSubtitle: 'Cooking choice: grilled or fried',
      daCurrency: 'DA',
      portionPerson: 'person',
      portionPeople: 'people',
      cookingOptions: 'Grilled or Fried',
      freshDaily: 'Catch of the Day',
      ctaBannerText: 'Craving fresh seafood? Book your table now.',
      ctaBannerButton: 'Book a table',
      calorieLabel: 'kcal',
      weightLabel: 'net weight',
      pricePerKgLabel: 'price per kg',
    },
    reservation: {
      title: 'Book your table',
      subtitle: 'For reservations, special requests, or private events, contact us directly on WhatsApp.',
      fullNameLabel: 'Full name *',
      fullNamePlaceholder: 'E.g., Karim Benali',
      phoneLabel: 'Phone number *',
      phonePlaceholder: 'E.g., +213 770 600 007',
      messageLabel: 'Message or special request *',
      messagePlaceholder: 'Please specify special wishes (terrace, celebration, cooking preferences...)',
      dateLabel: 'Preferred date (optional)',
      timeLabel: 'Preferred time (optional)',
      guestsLabel: 'Number of guests (optional)',
      guestOptions: {
        one: '1 person',
        two: '2 people',
        threeFour: '3 to 4 people',
        fivePlus: '5 or more people',
      },
      submitButton: 'Send my request via WhatsApp',
      redirecting: 'Opening WhatsApp...',
      requiredNotice: '* Required fields',
      guaranteeText: 'Fast response guaranteed by our team during service hours.',
      errorName: 'Please enter your full name.',
      errorPhone: 'Please enter a valid phone number.',
      errorMessage: 'Please enter your message.',
      waGreeting: 'Hello Sphere by Léa, I would like to book a table:',
      waName: 'Full Name',
      waPhone: 'Phone',
      waDate: 'Preferred Date',
      waTime: 'Preferred Time',
      waGuests: 'Number of Guests',
      waMessage: 'Message / Special Request',
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Our hospitality team is delighted to welcome you or answer your inquiries.',
      addressLabel: 'Address',
      addressValue: '186 Rue Ferme Pons, Kouba 16000, Algiers, Algeria',
      phoneLabel: 'Phone',
      phoneLocal: '0770 60 00 07',
      whatsappLabel: 'Direct WhatsApp',
      hoursTitle: 'Opening Hours',
      hoursSatThu: 'Saturday to Thursday',
      hoursSatThuTime: '11:30 AM – 11:30 PM',
      hoursFri: 'Friday',
      hoursFriTime: '2:30 PM – 11:30 PM',
      callNow: 'Call now',
      messageWhatsApp: 'Message on WhatsApp',
      getDirections: 'Get directions',
      socialSoon: 'Official link coming soon',
    },
    location: {
      title: 'Find Us in Kouba',
      subtitle: 'A welcoming, easily accessible destination at 186 Rue Ferme Pons, Algiers.',
      openInMaps: 'Open in Google Maps',
      fallbackSearch: 'Search on Google Maps',
      parkingNotice: 'Convenient parking available near the restaurant.',
      landmarkNotice: 'Kouba 16000, Algiers — Landmark: Ferme Pons.',
    },
    reviews: {
      title: 'What our guests say',
      googleRating: 'Google rating: 4.4/5',
      verifiedCount: 'Based on authentic verified dining reviews',
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about your dining experience at Sphere by Léa.',
    },
    footer: {
      tagline: 'Your seafood escape in the heart of Kouba.',
      quickLinks: 'Navigation',
      contactInfo: 'Contact Info',
      hours: 'Service Hours',
      rights: '© 2026 Sphere by Léa — ( all rights reserved ).',
    },
    floatingWa: {
      tooltip: 'Chat on WhatsApp',
      chatWithUs: 'Book / Ask a question',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      menu: 'قائمة الطعام',
      reservation: 'الحجز',
      contact: 'اتصل بنا',
      location: 'الموقع',
      bookTable: 'احجز طاولة',
      quickCall: 'اتصال',
    },
    hero: {
      title: 'Sphere by Léa',
      headline: 'الوجهة الأولى لعشاق السمك الطازج في الجزائر العاصمة',
      subtitle: 'من البحر مباشرة إلى طبقكم: أسماك طازجة، فواكه بحر سخية ونكهات متوسطية أصيلة في قلب القبة.',
      exploreMenu: 'استكشف قائمة الطعام',
      bookWhatsApp: 'احجز عبر واتساب',
      trustSeafood: 'تخصص أسماك وفواكه بحر طازجة',
      trustRating: 'تقييم جوجل: 4.4/5',
      trustFollowers: 'أكثر من 300,000 متابع على إنستغرام',
    },
    editorial: {
      badge: 'الجودة والنزاهة',
      title: 'البحر، بدون أي وسيط',
      text: 'في مطعم Sphere by Léa، ننتقي يومياً أسماكنا وفواكه البحر بعناية فائقة لنقدم لكم طزاجة استثنائية وجودة لا تضاهى في كل طبق.',
      highlight1: {
        title: 'وصول يومي طازج',
        desc: 'أسماك بحرية وفواكه بحر تصل كل صباح طازجة مباشرة من الموانئ الساحلية.',
      },
      highlight2: {
        title: 'وصفات متوسطية راقية',
        desc: 'مرق سمك منزلي الصنع، تتبيلات متبّلة بالدروسة الجزائرية وطهي متقن.',
      },
      highlight3: {
        title: 'أجواء عائلية ومشاركة',
        desc: 'أطباق وصواني بحرية فاخرة وبايلا محضرة عند الطلب للمشاركة مع الأحباب.',
      },
    },
    menu: {
      title: 'قائمة مأكولاتنا الشهية',
      subtitle: 'تشكيلة مختارة بعناية من صيد اليوم، صواني المأكولات البحرية الملكية، البايلا المنزلية وألذ أطباق البحر.',
      searchPlaceholder: 'ابحث عن طبق...',
      allCategories: 'جميع الأطباق',
      categories: {
        starters: 'المقبلات',
        platters: 'صواني فواكه البحر',
        paellas: 'البايلا المنزلية',
        fish: 'الأسماك الطازجة',
        pasta: 'المعكرونة والغراتان',
        bread: 'سلة الخبز المنزلي',
        drinks: 'المشروبات والتحليات',
      },
      plattersSubtitle: 'تقدم مع الأرز أو البطاطس المقلية',
      paellaDescription: 'أرز شهي مطهو ببطء في مرق سمك محضر منزلياً، محشو بسخاء بالسيبيا، الكالامار، الجمبري والسمك الأبيض. مزين بالجمبري الملكي المشوي وبلح البحر الصخري.',
      fishSubtitle: 'خيار الطهي: مشوي أو مقلي',
      daCurrency: 'دج',
      portionPerson: 'شخص',
      portionPeople: 'أشخاص',
      cookingOptions: 'مشوي أو مقلي',
      freshDaily: 'صيد اليوم الطازج',
      ctaBannerText: 'هل ترغب في تذوق أشهى الأسماك وفواكه البحر؟ احجز طاولتك الآن.',
      ctaBannerButton: 'احجز طاولة',
      calorieLabel: 'سعرة حرارية',
      weightLabel: 'الوزن الصافي',
      pricePerKgLabel: 'السعر للكيلوغرام',
    },
    reservation: {
      title: 'احجز طاولتك',
      subtitle: 'للحجوزات أو الطلبات الخاصة أو المناسبات العائلية، تواصلوا معنا مباشرة عبر واتساب.',
      fullNameLabel: 'الاسم الكامل *',
      fullNamePlaceholder: 'مثال: كريم بن علي',
      phoneLabel: 'رقم الهاتف *',
      phonePlaceholder: 'مثال: 0770 60 00 07',
      messageLabel: 'الرسالة أو الطلب الخاص *',
      messagePlaceholder: 'يرجى تحديد رغباتكم (جلسة خارجية، عيد ميلاد، تفضيلات الطهي...)',
      dateLabel: 'التاريخ المفضل (اختياري)',
      timeLabel: 'الوقت المفضل (اختياري)',
      guestsLabel: 'عدد الضيوف (اختياري)',
      guestOptions: {
        one: 'شخص واحد',
        two: 'شخصان',
        threeFour: '3 إلى 4 أشخاص',
        fivePlus: '5 أشخاص أو أكثر',
      },
      submitButton: 'إرسال طلبي عبر واتساب',
      redirecting: 'جاري فتح تطبيق واتساب...',
      requiredNotice: '* الحقول المطلوبة',
      guaranteeText: 'نضمن لكم رداً سريعاً من فريقنا خلال ساعات العمل الرسمية.',
      errorName: 'يرجى إدخال اسمك الكامل.',
      errorPhone: 'يرجى إدخال رقم هاتف صحيح.',
      errorMessage: 'يرجى كتابة رسالتك.',
      waGreeting: 'مرحباً مطعم Sphere by Léa، أود حجز طاولة :',
      waName: 'الاسم الكامل',
      waPhone: 'رقم الهاتف',
      waDate: 'التاريخ المفضل',
      waTime: 'الوقت المفضل',
      waGuests: 'عدد الضيوف',
      waMessage: 'الرسالة / الطلب الخاص',
    },
    contact: {
      title: 'اتصل بنا',
      subtitle: 'فريقنا يسعد دائماً باستقبالكم في المطعم أو الإجابة على كافة استفساراتكم.',
      addressLabel: 'العنوان',
      addressValue: '186 شارع فيرم بونز، القبة 16000، الجزائر العاصمة، الجزائر',
      phoneLabel: 'الهاتف',
      phoneLocal: '0770 60 00 07',
      whatsappLabel: 'واتساب مباشر',
      hoursTitle: 'أوقات العمل',
      hoursSatThu: 'من السبت إلى الخميس',
      hoursSatThuTime: '11:30 صباحاً – 11:30 مساءً',
      hoursFri: 'الجمعة',
      hoursFriTime: '2:30 بعد الظهر – 11:30 مساءً',
      callNow: 'اتصل الآن',
      messageWhatsApp: 'راسلنا على واتساب',
      getDirections: 'الاتجاهات على خرائط جوجل',
      socialSoon: 'الرابط الرسمي قريباً',
    },
    location: {
      title: 'موقعنا في القبة',
      subtitle: 'موقع مريح وسهل الوصول في 186 شارع فيرم بونز، القبة.',
      openInMaps: 'فتح في خرائط جوجل',
      fallbackSearch: 'البحث في خرائط جوجل',
      parkingNotice: 'أماكن ركن مريحة متوفرة بالقرب من المطعم.',
      landmarkNotice: 'القبة 16000، الجزائر العاصمة — المعلم: فيرم بونز.',
    },
    reviews: {
      title: 'آراء زبائننا الكرام',
      googleRating: 'تقييم جوجل: 4.4/5',
      verifiedCount: 'بناءً على تقييمات موثوقة لضيوف مطعمنا',
    },
    faq: {
      title: 'الأسئلة الشائعة',
      subtitle: 'كل ما تحتاج معرفته عن زيارتك لمطعم Sphere by Léa.',
    },
    footer: {
      tagline: 'ملاذكم البحري الفاخر في قلب القبة.',
      quickLinks: 'روابط سريعة',
      contactInfo: 'بيانات الاتصال',
      hours: 'ساعات الخدمة',
      rights: '© 2026 Sphere by Léa — جميع الحقوق محفوظة ( all rights reserved ).',
    },
    floatingWa: {
      tooltip: 'محادثة عبر واتساب',
      chatWithUs: 'احجز / اطرح سؤالك',
    },
  },
  zh: {
    nav: {
      home: '首页',
      menu: '菜单',
      reservation: '预订',
      contact: '联系我们',
      location: '位置指引',
      bookTable: '预订餐桌',
      quickCall: '电话咨询',
    },
    hero: {
      title: 'Sphere by Léa',
      headline: '阿尔及尔新鲜海鲜爱好者的心仪之所',
      subtitle: '从深海直达餐盘：在库巴核心地段品味鲜鱼、丰盛海鲜与地中海风味。',
      exploreMenu: '探索精选菜单',
      bookWhatsApp: '通过WhatsApp预订',
      trustSeafood: '新鲜海鲜与鲜鱼特色专长',
      trustRating: '谷歌评分：4.4/5',
      trustFollowers: 'Instagram超过30万关注者',
    },
    editorial: {
      badge: '卓越品质与极致新鲜',
      title: '源于大海，纯正原味',
      text: '在 Sphere by Léa，我们每日精挑细选最优质的新鲜海鲜与鲜鱼，确保端上餐桌的每一道佳肴都保持着顶级鲜美与品质。',
      highlight1: {
        title: '每日清晨直达',
        desc: '野生海鱼与精选海鲜每天早晨直接从沿海港口新鲜送达。',
      },
      highlight2: {
        title: '地中海风味料理',
        desc: '独家秘制鱼汤底料、阿尔及利亚风味香料与炉火纯青的烹饪手艺。',
      },
      highlight3: {
        title: '欢聚与分享盛宴',
        desc: '丰盛的海鲜大拼盘与即点即煮的西班牙海鲜饭，与亲朋好友共享美味。',
      },
    },
    menu: {
      title: '我们的特色美食单',
      subtitle: '每日捕获新鲜海鱼、皇家海鲜拼盘、招牌手工海鲜饭与地中海美味。',
      searchPlaceholder: '搜索菜品...',
      allCategories: '全部菜单',
      categories: {
        starters: '开胃菜与沙拉',
        platters: '海鲜大拼盘',
        paellas: '招牌海鲜饭',
        fish: '新鲜海鱼',
        pasta: '意面与焗烤',
        bread: '手工自制面包篮',
        drinks: '饮品与甜点',
      },
      plattersSubtitle: '配米饭或薯条',
      paellaDescription: '采用秘制鲜鱼高汤慢火慢炖而成的软糯米饭，搭配乌贼、鱿鱼、海虾和白肉鱼。顶部点缀香烤大红虾与新鲜青口贝。',
      fishSubtitle: '烹饪方式可选：香烤 (Grillé) 或 酥炸 (Friture)',
      daCurrency: 'DA',
      portionPerson: '人份',
      portionPeople: '人份',
      cookingOptions: '香烤或酥炸',
      freshDaily: '每日新鲜直达',
      ctaBannerText: '想品尝最新鲜的海洋美味？立即预约您的餐桌。',
      ctaBannerButton: '立即预订餐桌',
      calorieLabel: '千卡',
      weightLabel: '净重',
      pricePerKgLabel: '每公斤价格',
    },
    reservation: {
      title: '预订您的餐桌',
      subtitle: '如需预约席位、特殊要求或私人聚会，请直接通过WhatsApp与我们联系。',
      fullNameLabel: '您的姓名 *',
      fullNamePlaceholder: '例如：Karim Benali',
      phoneLabel: '联系电话 *',
      phonePlaceholder: '例如：0770 60 00 07',
      messageLabel: '留言或特殊要求 *',
      messagePlaceholder: '请注明要求（如户外露台、生日聚会、烹饪偏好等）',
      dateLabel: '预订日期（选填）',
      timeLabel: '预订时间（选填）',
      guestsLabel: '就餐人数（选填）',
      guestOptions: {
        one: '1人',
        two: '2人',
        threeFour: '3至4人',
        fivePlus: '5人或以上',
      },
      submitButton: '通过WhatsApp发送预订',
      redirecting: '正在打开WhatsApp...',
      requiredNotice: '* 必填项',
      guaranteeText: '在营业时间内，我们的团队将迅速为您确认预订。',
      errorName: '请输入您的完整姓名。',
      errorPhone: '请输入有效的联系电话。',
      errorMessage: '请输入您的预订留言或要求。',
      waGreeting: '您好 Sphere by Léa，我想预订一张餐桌：',
      waName: '姓名',
      waPhone: '电话',
      waDate: '预订日期',
      waTime: '预订时间',
      waGuests: '就餐人数',
      waMessage: '留言/特殊要求',
    },
    contact: {
      title: '联系与营业信息',
      subtitle: '我们的团队非常高兴能在餐厅迎接您的光临，或为您提供解答。',
      addressLabel: '餐厅地址',
      addressValue: '186 Rue Ferme Pons, Kouba 16000, 阿尔及尔, 阿尔及利亚',
      phoneLabel: '预订热线',
      phoneLocal: '0770 60 00 07',
      whatsappLabel: 'WhatsApp直连',
      hoursTitle: '营业时间',
      hoursSatThu: '周六至周四',
      hoursSatThuTime: '11:30 – 23:30',
      hoursFri: '周五',
      hoursFriTime: '14:30 – 23:30',
      callNow: '立即致电',
      messageWhatsApp: 'WhatsApp聊天',
      getDirections: '获取地图路线',
      socialSoon: '官方链接即将上线',
    },
    location: {
      title: '库巴门店位置',
      subtitle: '座落于阿尔及尔库巴市中心 186 Rue Ferme Pons，交通便利。',
      openInMaps: '在谷歌地图中打开',
      fallbackSearch: '谷歌地图搜索',
      parkingNotice: '餐厅附近配备便捷停车位。',
      landmarkNotice: 'Kouba 16000, Algiers — 地标：Ferme Pons。',
    },
    reviews: {
      title: '客人的赞誉与评价',
      googleRating: '谷歌评分：4.4/5',
      verifiedCount: '来自就餐顾客的真实认证评价',
    },
    faq: {
      title: '常见问题解答',
      subtitle: '关于您在 Sphere by Léa 餐厅用餐的一切须知。',
    },
    footer: {
      tagline: '阿尔及尔库巴心之所向的海鲜圣地。',
      quickLinks: '快速链接',
      contactInfo: '联系信息',
      hours: '营业时间',
      rights: '© 2026 Sphere by Léa — 保留所有权利 ( all rights reserved )。',
    },
    floatingWa: {
      tooltip: 'WhatsApp 在线咨询',
      chatWithUs: '预订餐桌 / 咨询问题',
    },
  },
};
