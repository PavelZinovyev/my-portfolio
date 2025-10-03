import styles from './styles.module.scss';
import { useEffect, useState } from 'react';

import type { FC } from 'react';
import type { SectionIdProps } from '@/types/Section';

import { useLang } from '@/hooks/useLang';
import { useWindowSize } from '@/hooks/useWindowSize';

import { NavMobile } from './NavMobile';
import { NavDesktop } from './NavDesktop';

import { Container } from '../../shared/Container';
import { LanguageToggle } from '../../shared/LanguageToggle';

export const Header: FC<{
  currentSection: SectionIdProps;
  onSectionClick: (sectionId: SectionIdProps) => void;
}> = ({ currentSection, onSectionClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  const { t } = useLang();
  const { width } = useWindowSize();

  const isMobile = width && width < 1024;

  if (!width) return null;

  return (
    <header className={`${styles.header} ${scrolled ? styles.blur : ''}`}>
      <Container>
        <div className={styles.headerWrapper}>
          <a className={styles.name} onClick={() => onSectionClick('home')}>
            {t('fio')}
          </a>
          {isMobile ? (
            <NavMobile onSectionClick={onSectionClick} />
          ) : (
            <NavDesktop currentSection={currentSection} onSectionClick={onSectionClick} />
          )}
          <LanguageToggle textColor="#a9afc3" textActiveColor="#ffffff" visibility={'desktop'} />
        </div>
      </Container>
    </header>
  );
};
