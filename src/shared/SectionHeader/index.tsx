import type { FC } from 'react';
import styles from './styles.module.scss';

interface SectionHeaderProps {
  title: string;
}

export const SectionHeader: FC<SectionHeaderProps> = ({ title }) => {
  return <h2 className={styles.title}>{title}</h2>;
};
