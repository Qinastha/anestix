'use client';
import React, {
  createContext,
  useState,
  ReactNode,
  useMemo,
  useCallback,
  useEffect,
} from 'react';
import i18n from '@/i18n';

interface LanguageContextProps {
  language: string;
  changeLanguage: (lang: string) => void;
}

export const LanguageContext = createContext<LanguageContextProps>({
  language: 'ru',
  changeLanguage: () => {},
});

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<string>('ru');

  useEffect(() => {
    const controller = new AbortController();

    async function updateLanguage() {
      try {
        const response = await fetch('/api/get-language', {
          signal: controller.signal,
        });
        if (response.ok) {
          const data = await response.json();
          if (data.lang) {
            setLanguage(data.lang);
            i18n.changeLanguage(data.lang);
          }
        }
      } catch (error) {
        if (!(error instanceof DOMException && error.name === 'AbortError')) {
          console.error('Failed to fetch language from server:', error);
        }
      }
    }
    updateLanguage();

    return () => {
      controller.abort();
    };
  }, []);

  const changeLanguage = useCallback((lang: string) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);

    fetch('/api/set-language', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lang }),
    }).catch((error) => {
      console.error('Failed to update language cookie:', error);
    });
  }, []);

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
