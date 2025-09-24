import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { SCROLL_DOWN_DELAY } from '@/constants/scrollDownDelay';

export const ScrollDownBlock = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsVisible(true);
    }, SCROLL_DOWN_DELAY);

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(false);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timerId);
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.root}>
      <div className={`${styles.content} ${isVisible ? styles.visible : ''}`} />
    </div>
  );
};
