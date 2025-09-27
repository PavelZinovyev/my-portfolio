import type { FC } from 'react';
import type { SectionIdProps } from '@/types/Section';
import { useEffect, useRef, useState } from 'react';

import { HEADER_LIST } from '@/constants/headerList';

import styles from './styles.module.scss';

export const NavDesktop: FC<{
  currentSection: SectionIdProps;
  onSectionClick: (sectionId: SectionIdProps) => void;
}> = ({ currentSection, onSectionClick }) => {
  const highlightRef = useRef<HTMLDivElement | null>(null);
  const navRefs = useRef<Record<string, HTMLLIElement>>({});
  const [highlightVisible, setHighlightVisible] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setHighlightVisible(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const highlight = highlightRef.current;
    if (!highlight) return;

    const currentLink = navRefs.current[currentSection];
    const prevLink = Array.from(Object.values(navRefs.current)).find((el) =>
      el.classList.contains(styles.active)
    );

    if (!currentLink) return;

    const prevLeft = prevLink?.offsetLeft ?? currentLink.offsetLeft;
    const prevRight = prevLink
      ? prevLink.offsetLeft + prevLink.offsetWidth
      : currentLink.offsetLeft + currentLink.offsetWidth;

    const targetLeft = currentLink.offsetLeft;
    const targetRight = currentLink.offsetLeft + currentLink.offsetWidth;

    const minLeft = Math.min(prevLeft, targetLeft);
    const maxRight = Math.max(prevRight, targetRight);

    const timerId = setTimeout(() => {
      highlight.style.left = `${minLeft}px`;
      highlight.style.width = `${maxRight - minLeft}px`;
    }, 300);

    const timeoutId = setTimeout(() => {
      highlight.style.left = `${targetLeft}px`;
      highlight.style.width = `${currentLink.offsetWidth}px`;
    }, 300);

    return () => {
      [timeoutId, timerId].forEach((timer) => clearTimeout(timer));
    };
  }, [currentSection]);

  return (
    <nav className={styles.nav}>
      <ul className={styles.navMenu}>
        <div
          className={`${styles.highlight} ${highlightVisible ? styles.visible : ''}`}
          ref={highlightRef}
        ></div>
        {HEADER_LIST.map((el) => (
          <li
            className={styles.navLink}
            key={el.id}
            ref={(el) => {
              if (el) navRefs.current[el.dataset.id!] = el;
            }}
            data-id={el.id}
            onClick={() => onSectionClick(el.id)}
          >
            {el.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};
