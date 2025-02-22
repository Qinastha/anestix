'use client';
import React, {
  createContext,
  useState,
  ReactNode,
  useMemo,
  useCallback,
  useEffect,
} from 'react';
import i18n from 'i18next';

interface LanguageContextProps {
  language: string;
  changeLanguage: (lang: string) => void;
}

export const LanguageContext = createContext<LanguageContextProps>({
  language: '',
  changeLanguage: () => {},
});

interface LanguageProviderProps {
  children: ReactNode;
  initialLanguage: string;
}

export const LanguageProvider = ({
  children,
  initialLanguage,
}: LanguageProviderProps) => {
  const [language, setLanguage] = useState<string>(initialLanguage);

  useEffect(() => {
    if (i18n.language !== language) {
      i18n.changeLanguage(language);
    }
  }, [language]);

  const changeLanguage = useCallback(
    (lang: string) => {
      i18n.changeLanguage(lang);
      setLanguage(lang);

      fetch('/api/set-language', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lang }),
      }).catch((error) => {
        console.error('Failed to update language cookie:', error);
      });
    },
    [language]
  );

  const contextValue = useMemo(
    () => ({ language, changeLanguage }),
    [language, changeLanguage]
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};
