import type { FC } from 'react';
import styles from './styles.module.scss';
import { motion } from 'framer-motion';

import { FADE_IN_TOP } from '@/constants/motion';

interface SectionHeaderProps {
  title: string;
}

export const SectionHeader: FC<SectionHeaderProps> = ({ title }) => {
  return (
    <motion.h2 className={styles.title} {...FADE_IN_TOP}>
      {title}
    </motion.h2>
  );
};
