import type { HeaderItemProps } from '@/types/Header';
import type { LangProps } from '@/types/Lang';

export const HEADER_LIST: Record<LangProps, HeaderItemProps[]> = {
  en: [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
  ],
  ru: [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
  ],
};
