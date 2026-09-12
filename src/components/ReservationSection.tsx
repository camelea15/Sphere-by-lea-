import React, { useState } from 'react';
import { Language, ReservationFormData } from '../types';
import { translations } from '../data/translations';
import { 
  MessageCircle, 
  Calendar as CalendarIcon, 
  Clock, 
  Users, 
  CheckCircle2, 
  AlertCircle,
  Send
} from 'lucide-react';

interface ReservationSectionProps {
  currentLang: Language;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const [formData, setFormData] = useState<ReservationFormData>({
    fullName: '',
    phone: '',
    message: '',
    date: '',
    time: '',
    guests: '2',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ReservationFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const sanitizeInput = (val: string, maxLen: number): string => {
    // Remove dangerous control characters while keeping standard printable characters and unicode
    return val.replace(/[\u0000-\u0008\u000B-\u000C\u000E-\u001F\u007F-\u009F]/g, '').slice(0, maxLen);
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ReservationFormData, string>> = {};
    const cleanName = formData.fullName.trim();
    const cleanPhone = formData.phone.trim();
    const cleanMessage = formData.message.trim();

    if (!cleanName || cleanName.length < 2) {
      newErrors.fullName = t.reservation.errorName;
    } else if (cleanName.length > 100) {
      newErrors.fullName = 'Le nom est trop long (maximum 100 caractères)';
    }

    const phoneRegex = /^[+]?[\d\s\-().]{8,25}$/;
    if (!cleanPhone || cleanPhone.length < 8 || !phoneRegex.test(cleanPhone)) {
      newErrors.phone = t.reservation.errorPhone;
    }

    if (!cleanMessage || cleanMessage.length < 3) {
      newErrors.message = t.reservation.errorMessage;
    } else if (cleanMessage.length > 1000) {
      newErrors.message = 'Le message est trop long (maximum 1000 caractères)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    const safeName = sanitizeInput(formData.fullName.trim(), 100);
    const safePhone = sanitizeInput(formData.phone.trim(), 25);
    const safeGuests = sanitizeInput(formData.guests.trim(), 30);
    const safeDate = sanitizeInput(formData.date.trim(), 20);
    const safeTime = sanitizeInput(formData.time.trim(), 20);
    const safeMessage = sanitizeInput(formData.message.trim(), 1000);

    // Build the clean WhatsApp message text with all visitor inputs
    const greeting = t.reservation.waGreeting;
    const namePart = `• ${t.reservation.waName}: ${safeName}`;
    const phonePart = `• ${t.reservation.waPhone}: ${safePhone}`;
    const guestsPart = safeGuests ? `• ${t.reservation.waGuests}: ${safeGuests}` : '';
    const datePart = safeDate ? `• ${t.reservation.waDate}: ${safeDate}` : '';
    const timePart = safeTime ? `• ${t.reservation.waTime}: ${safeTime}` : '';
    const messagePart = `• ${t.reservation.waMessage}: ${safeMessage}`;

    const lines = [
      greeting,
      '',
      namePart,
      phonePart,
      guestsPart,
      datePart,
      timePart,
      messagePart,
      '',
      '— Réservation Sphere by Léa'
    ].filter(Boolean);

    const fullMessage = lines.join('\n');
    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappUrl = `https://wa.me/213770600007?text=${encodedMessage}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      if (typeof window !== 'undefined') {
        const win = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        if (win) {
          win.opener = null;
        }
      }
    }, 600);
  };

  return (
    <section id="reservation" className="py-20 md:py-28 bg-[#F4FAFC] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#20A8AD]/10 text-[#20A8AD] text-xs font-bold uppercase tracking-wider mb-3">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp Direct</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#173D8F] tracking-tight mb-4">
            {t.reservation.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            {t.reservation.subtitle}
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl shadow-xl border border-[#173D8F]/10 p-6 sm:p-10">
          {isSuccess ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-[#173D8F]">
                Demande transmise avec succès !
              </h3>
              <p className="text-sm text-gray-600 max-w-md mx-auto">
                Votre conversation WhatsApp avec l’équipe Sphere by Léa a été ouverte avec vos informations préremplies.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-2.5 rounded-full border border-gray-300 text-xs font-bold text-gray-700 hover:bg-gray-50"
                >
                  Modifier ma demande
                </button>
                <a
                  href="https://wa.me/213770600007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-bold hover:bg-[#20b858]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Rouvrir WhatsApp</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Row 1: Full Name & Phone Number (Required) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label 
                    htmlFor="fullName"
                    className="block text-xs font-bold text-[#173D8F] uppercase tracking-wider mb-2"
                  >
                    {t.reservation.fullNameLabel}
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    autoComplete="name"
                    maxLength={100}
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                    }}
                    placeholder={t.reservation.fullNamePlaceholder}
                    required
                    aria-invalid={!!errors.fullName}
                    className={`w-full px-4 py-3.5 rounded-2xl bg-[#F4FAFC] border text-sm text-gray-800 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-[#20A8AD]/20 transition-all outline-none ${
                      errors.fullName ? 'border-red-400 ring-1 ring-red-400' : 'border-gray-200 focus:border-[#20A8AD]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label 
                    htmlFor="phone"
                    className="block text-xs font-bold text-[#173D8F] uppercase tracking-wider mb-2"
                  >
                    {t.reservation.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    autoComplete="tel"
                    inputMode="tel"
                    maxLength={25}
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: undefined });
                    }}
                    placeholder={t.reservation.phonePlaceholder}
                    required
                    aria-invalid={!!errors.phone}
                    className={`w-full px-4 py-3.5 rounded-2xl bg-[#F4FAFC] border text-sm text-gray-800 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-[#20A8AD]/20 transition-all outline-none ${
                      errors.phone ? 'border-red-400 ring-1 ring-red-400' : 'border-gray-200 focus:border-[#20A8AD]'
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Optional fields (Date, Time, Guests) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label 
                    htmlFor="date"
                    className="block text-xs font-bold text-gray-600 mb-2 flex items-center gap-1"
                  >
                    <CalendarIcon className="w-3.5 h-3.5 text-[#20A8AD]" />
                    <span>{t.reservation.dateLabel}</span>
                  </label>
                  <input
                    type="date"
                    id="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#F4FAFC] border border-gray-200 text-sm text-gray-800 focus:bg-white focus:border-[#20A8AD] focus:ring-2 focus:ring-[#20A8AD]/20 transition-all outline-none"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="time"
                    className="block text-xs font-bold text-gray-600 mb-2 flex items-center gap-1"
                  >
                    <Clock className="w-3.5 h-3.5 text-[#20A8AD]" />
                    <span>{t.reservation.timeLabel}</span>
                  </label>
                  <select
                    id="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#F4FAFC] border border-gray-200 text-sm text-gray-800 focus:bg-white focus:border-[#20A8AD] focus:ring-2 focus:ring-[#20A8AD]/20 transition-all outline-none"
                  >
                    <option value="">Sélectionnez l'heure</option>
                    <option value="12:00">12:00 (Déjeuner)</option>
                    <option value="12:30">12:30 (Déjeuner)</option>
                    <option value="13:00">13:00 (Déjeuner)</option>
                    <option value="13:30">13:30 (Déjeuner)</option>
                    <option value="14:00">14:00 (Déjeuner)</option>
                    <option value="19:30">19:30 (Dîner)</option>
                    <option value="20:00">20:00 (Dîner)</option>
                    <option value="20:30">20:30 (Dîner)</option>
                    <option value="21:00">21:00 (Dîner)</option>
                    <option value="21:30">21:30 (Dîner)</option>
                    <option value="22:00">22:00 (Dîner)</option>
                  </select>
                </div>

                <div>
                  <label 
                    htmlFor="guests"
                    className="block text-xs font-bold text-gray-600 mb-2 flex items-center gap-1"
                  >
                    <Users className="w-3.5 h-3.5 text-[#20A8AD]" />
                    <span>{t.reservation.guestsLabel}</span>
                  </label>
                  <select
                    id="guests"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#F4FAFC] border border-gray-200 text-sm text-gray-800 focus:bg-white focus:border-[#20A8AD] focus:ring-2 focus:ring-[#20A8AD]/20 transition-all outline-none"
                  >
                    <option value="1 personne">{t.reservation.guestOptions.one}</option>
                    <option value="2 personnes">{t.reservation.guestOptions.two}</option>
                    <option value="3 à 4 personnes">{t.reservation.guestOptions.threeFour}</option>
                    <option value="5+ personnes">{t.reservation.guestOptions.fivePlus}</option>
                  </select>
                </div>
              </div>

              {/* Message / Special Requests (Required) */}
              <div>
                <label 
                  htmlFor="message"
                  className="block text-xs font-bold text-[#173D8F] uppercase tracking-wider mb-2"
                >
                  {t.reservation.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  maxLength={1000}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: undefined });
                  }}
                  placeholder={t.reservation.messagePlaceholder}
                  required
                  aria-invalid={!!errors.message}
                  className={`w-full px-4 py-3.5 rounded-2xl bg-[#F4FAFC] border text-sm text-gray-800 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-[#20A8AD]/20 transition-all outline-none ${
                    errors.message ? 'border-red-400 ring-1 ring-red-400' : 'border-gray-200 focus:border-[#20A8AD]'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Notice & CTA Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-gray-500 font-medium text-center sm:text-left rtl:sm:text-right">
                  {t.reservation.guaranteeText}
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold bg-[#25D366] text-white hover:bg-[#20b858] active:scale-95 shadow-lg shadow-[#25D366]/25 transition-all cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span>{t.reservation.redirecting}</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t.reservation.submitButton}</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
