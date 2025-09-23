import localStyles from './styles.module.scss';
import styles from '../../styles.module.scss';

import { RADAR_SECTIONS } from '@/constants/radar';
import { RadarChart } from '@/feature/RadarChart';
import { useState } from 'react';
import type { SectionHoverProps } from '@/types/Radar';

export const Radar = () => {
  const [hoveredSection, setHoveredSection] = useState<SectionHoverProps>(null);

  return (
    <div className={styles.widgetWrapper}>
      <header className={styles.headerContainer}>
        <h3>Skill Radar</h3>
        <p className={styles.descriptionText}>
          Current strengths and growth areas
          <br />
          planned for 2026
        </p>
      </header>

      <div className={localStyles.legendaWrapper}>
        {RADAR_SECTIONS.map((section) => (
          <div
            className={localStyles.legendaItem}
            key={section.key}
            onMouseEnter={() => setHoveredSection(section.key)}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <div className={localStyles.dot} style={{ background: section.color }} />
            <span className={localStyles.text}>{section.name}</span>
          </div>
        ))}
      </div>

      <div className={localStyles.radarWrapper}>
        <RadarChart data={RADAR_SECTIONS} hoveredSection={hoveredSection} />
      </div>
    </div>
  );
};
