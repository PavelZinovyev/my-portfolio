import type { FC } from 'react';
import { EXPERIENCE_LIST } from '@/constants/experienceList';
import { Timeline } from './Timeline';

export const Experience: FC = () => {
  return <Timeline data={EXPERIENCE_LIST} />;
};
