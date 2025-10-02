import type { FC } from 'react';

import styles from './styles.module.scss';

import { BritishFlagIcon } from '../../assets/icons/BritishFlagIcon';
import { RussianFlagIcon } from '../../assets/icons/RussianFlagIcon';

import { useLang } from '@/hooks/useLang';

import type { LanguageToggleProps } from '@/types/Lang';

export const LanguageToggle: FC<LanguageToggleProps> = ({
  textColor,
  textActiveColor,
  visibility,
}) => {
  const { lang, toggle } = useLang();

  const isEnglish = lang === 'en';

  return (
    <div className={`${styles.root} ${visibility === 'desktop' ? styles.desktop : styles.mobile}`}>
      <span
        style={
          {
            '--lang-color': textColor,
            '--lang-hover-color': textActiveColor,
          } as React.CSSProperties
        }
        className={`${styles.lang} ${styles.en} ${isEnglish ? styles.active : ''}`}
      >
        EN
      </span>
      <label
        className={styles.toggle}
        onClick={() => {
          toggle();
        }}
      >
        <div className={styles.flagWrapper}>
          <div className={`${styles.flag} ${styles.en} ${isEnglish ? styles.active : ''}`}>
            <BritishFlagIcon />
          </div>
          <div className={`${styles.flag} ${styles.ru} ${!isEnglish ? styles.active : ''}`}>
            <RussianFlagIcon />
          </div>
        </div>
        <span className={`${styles.thumb} ${isEnglish ? styles.left : styles.right}`}></span>
      </label>
      <span
        style={
          {
            '--lang-color': textColor,
            '--lang-hover-color': textActiveColor,
          } as React.CSSProperties
        }
        className={`${styles.lang} ${styles.ru} ${!isEnglish ? styles.active : ''}`}
      >
        RU
      </span>
    </div>
  );
};
