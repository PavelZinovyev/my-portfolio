import { createContext } from 'react';
import type { LangProps } from '@/types/Lang';
import { TRANSLATIONS } from '@/constants/i18n';

export const LangContext = createContext<{
  lang: LangProps;
  t: (key: keyof (typeof TRANSLATIONS)['en']) => string;
  toggle: () => void;
} | null>(null);
