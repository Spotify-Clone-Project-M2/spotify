'use client';

import '@/styles/globals.scss';
import useTranslation from '@/hooks/useTranslation';
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle';

export default function Home() {
  const { t, locale, changeLanguage } = useTranslation();

  return (
    <div>
      <h1>{t('common.welcome')}</h1>
      <ThemeToggle />

      <select value={locale} onChange={e => changeLanguage(e.target.value)}>
        <option value="fr">Français</option>
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="pt">Português</option>
        <option value="ru">Русский</option>
        <option value="pl">Polski</option>
        <option value="ar">العربية</option>
        <option value="ja">日本語</option>
        <option value="uk">Українська</option>
      </select>

      <nav>
        <ul>
          <li>{t('common.home')}</li>
          <li>{t('common.search')}</li>
          <li>{t('common.library')}</li>
          <li>{t('common.settings')}</li>
        </ul>
      </nav>
    </div>
  );
}
