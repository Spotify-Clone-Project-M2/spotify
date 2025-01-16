'use client';

import { useLayoutEffect, useState, useCallback } from 'react';
import { useTranslationContext } from '@/providers/TranslationProvider';
import styles from './ThemeToggle.module.scss';

export default function ThemeToggle() {
  const { t } = useTranslationContext();
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);

      const event = new Event('themechange');
      document.dispatchEvent(event);

      return newTheme;
    });
  }, []);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={styles.themeToggle}
      aria-label={t('common.darkMode')}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}
