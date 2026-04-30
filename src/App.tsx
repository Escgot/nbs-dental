import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import { translations } from './translations';
import type { Language } from './translations';
import { Toaster } from './components/ui/sonner';

import { ThemeProvider } from 'next-themes';

export default function App() {
  const [lang, setLang] = useState<Language>('fr');
  const t = translations[lang];

  // Handle RTL and Title
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    document.title = t.title;
  }, [lang, t.title]);

  const toggleLang = () => {
    const langs: Language[] = ['fr', 'en', 'ar'];
    const currentIndex = langs.indexOf(lang);
    const nextIndex = (currentIndex + 1) % langs.length;
    setLang(langs[nextIndex]);
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Hero lang={lang} toggleLang={toggleLang} t={t} />
      <Toaster />
    </ThemeProvider>
  );
}
