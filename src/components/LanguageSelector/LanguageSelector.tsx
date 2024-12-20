'use client';

import useTranslation from '@/hooks/useTranslation';

function LanguageSelector() {
  const { locale, changeLanguage, t } = useTranslation();
  const locales = ['fr', 'en', 'ar', 'pt', 'ru', 'pl', 'ja', 'uk', 'es'];

  const getLanguageName = (loc: string): string => {
    const names: Record<string, string> = {
      fr: 'Français',
      en: 'English',
      es: 'Español',
      pt: 'Português',
      ar: 'العربية',
      ru: 'Русский',
      pl: 'Polski',
      ja: '日本語',
      uk: 'Українська',
    };
    return names[loc] || loc;
  };

  return (
    <div className="relative inline-block">
      <select
        value={locale}
        onChange={e => changeLanguage(e.target.value)}
        className="bg-neutral-900 text-white rounded-md px-3 py-2 text-sm"
      >
        {locales.map(loc => (
          <option key={loc} value={loc}>
            {getLanguageName(loc)}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageSelector;
