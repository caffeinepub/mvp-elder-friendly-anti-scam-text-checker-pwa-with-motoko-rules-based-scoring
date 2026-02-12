import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, type Language, type Translations } from './translations';

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const stored = sessionStorage.getItem('app_language');
    // Safe fallback: if stored value is not a valid language, default to 'pt'
    const validLanguages: Language[] = ['pt', 'en', 'es', 'fr', 'de'];
    return validLanguages.includes(stored as Language) ? (stored as Language) : 'pt';
  });

  useEffect(() => {
    sessionStorage.setItem('app_language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  // Implement safe fallback: merge Portuguese baseline with active language
  // Any missing key in the active language will resolve to Portuguese
  const getTranslationsWithFallback = (): Translations => {
    const ptBase = translations.pt;
    const activeTranslations = translations[language];
    
    // If active language is Portuguese, return directly
    if (language === 'pt') {
      return ptBase as Translations;
    }
    
    // Merge: active language overrides Portuguese where keys exist
    return { ...ptBase, ...activeTranslations } as Translations;
  };

  const value: I18nContextType = {
    language,
    setLanguage,
    t: getTranslationsWithFallback(),
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
}
