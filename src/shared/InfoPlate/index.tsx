import styles from './styles.module.scss';
import type { FC } from 'react';
import { InfoIcon } from '@/assets/icons/InfoIcon';

interface InfoPlateProps {
  text: string;
}

export const InfoPlate: FC<InfoPlateProps> = ({ text }) => {
  return (
    <div className={styles.root}>
      <InfoIcon />
      <span className={styles.text}>{text}</span>
    </div>
  );
};
