import type { FC } from 'react';
import styles from './styles.module.scss';

interface SkeletonProps {
  shape: 'round' | 'rectangle';
  width: number;
  height: number;
  animate?: boolean;
}

export const Skeleton: FC<SkeletonProps> = ({ shape, height, width, animate = false }) => {
  return (
    <div
      className={`${styles.root} ${styles[shape]} ${animate ? styles.animate : ''}`}
      style={{ width, height }}
    />
  );
};
