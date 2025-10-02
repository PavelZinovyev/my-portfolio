import { useContext } from 'react';
import { LangContext } from '@/shared/LanguageToggle/Context';

export const useLang = () => {
  const context = useContext(LangContext);

  if (!context) throw new Error('context was not set');

  return context;
};
