import type { FC, ReactNode } from 'react';
import type { LangProps } from '@/types/Lang';

import { useState } from 'react';
import { TRANSLATIONS } from '@/constants/i18n';

import { LangContext } from './Context';

export const LangProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<LangProps>('en');
  const toggle = () => setLang((lang) => (lang === 'en' ? 'ru' : 'en'));
  const t = (key: keyof (typeof TRANSLATIONS)['en']) => TRANSLATIONS[lang][key];

  return <LangContext.Provider value={{ lang, t, toggle }}>{children}</LangContext.Provider>;
};
