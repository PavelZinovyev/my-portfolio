import { useState } from 'react';
import styles from './styles.module.scss';
import type { SectionIdProps } from '@/types/Section';
import type { FC } from 'react';
import { HEADER_LIST } from '@/constants/headerList';

export const NavMobile: FC<{ onSectionClick: (section: SectionIdProps) => void }> = ({
  onSectionClick,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [pendingSection, setPendingSection] = useState<SectionIdProps | null>(null);

  const handleToggleMenu = (section: SectionIdProps) => {
    setIsMenuOpen(false);
    setPendingSection(section);
  };

  const handleTransitionEnd = (e: React.TransitionEvent<HTMLUListElement>) => {
    if (e.propertyName === 'transform' && !isMenuOpen) {
      if (pendingSection) onSectionClick(pendingSection);
      setPendingSection(null);
    }
  };

  return (
    <nav>
      <div className={styles.menuToggle}>
        <input
          type="checkbox"
          className={styles.menuCheckbox}
          checked={isMenuOpen}
          onChange={() => setIsMenuOpen((prev) => !prev)}
        />
        {Array.from({ length: 3 }).map((_, idx) => (
          <div className={styles.line} key={idx} />
        ))}

        <ul className={styles.menu} onTransitionEnd={(e) => handleTransitionEnd(e)}>
          {HEADER_LIST.map((section) => (
            <li key={section.id} onClick={() => handleToggleMenu(section.id)}>
              {section.name}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
