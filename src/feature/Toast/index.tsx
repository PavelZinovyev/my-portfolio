import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

import type { FC } from 'react';
import type { ToastViewProps } from '@/types/Toast';

import { iconMapper } from './iconMapper';

export const Toast: FC<ToastViewProps> = ({ message, type, onDone, closing }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!closing) {
      requestAnimationFrame(() => setIsVisible(true));
      const timerId = setTimeout(() => setIsVisible(false), 3000);
      return () => clearTimeout(timerId);
    } else {
      setIsVisible(false);
    }
  }, [closing]);

  useEffect(() => {
    if (!isVisible) {
      const timeout = setTimeout(onDone, 300);
      return () => clearTimeout(timeout);
    }
  }, [isVisible, onDone]);

  const ToastIcon = iconMapper[type];

  return (
    <div className={`${styles.root} ${isVisible ? styles.visible : ''}`}>
      <ToastIcon />
      <span className={styles.text}>{message}</span>
    </div>
  );
};
