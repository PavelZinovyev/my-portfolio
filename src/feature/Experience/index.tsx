import type { FC } from 'react';
import { EXPERIENCE_LIST } from '@/constants/experienceList';
import { Timeline } from './Timeline';
import { useLang } from '@/hooks/useLang';

export const Experience: FC = () => {
  const { lang } = useLang();

  return <Timeline data={EXPERIENCE_LIST[lang]} />;
};
