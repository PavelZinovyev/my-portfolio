import localStyles from './styles.module.scss';
import styles from '../../styles.module.scss';
import { motion } from 'framer-motion';

import { RADAR_SECTIONS } from '@/constants/radar';
import { RadarChart } from '@/feature/RadarChart';
import { useState } from 'react';
import type { SectionHoverProps } from '@/types/Radar';
import { FADE_IN_RIGHT } from '@/constants/motion';
import { useLang } from '@/hooks/useLang';

export const Radar = () => {
  const { t } = useLang();
  const [hoveredSection, setHoveredSection] = useState<SectionHoverProps>(null);

  return (
    <motion.div className={styles.widgetWrapper} {...FADE_IN_RIGHT}>
      <header className={styles.headerContainer}>
        <h3>{t('skillRadarTitle')}</h3>
        <p className={styles.descriptionText}>
          {t('skillRadarDescriptionPart1')}
          <br />
          {t('skillRadarDescriptionPart2')}
        </p>
      </header>

      <div className={localStyles.legendaWrapper}>
        {RADAR_SECTIONS.map((section) => (
          <div
            key={section.key}
            className={localStyles.legendaItem}
            onMouseEnter={() => setHoveredSection(section.key)}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <div
              className={localStyles.dot}
              style={{
                background: hoveredSection === section.key ? section.hoverColor : section.color,
              }}
            />
            <span className={localStyles.text}>{t(`${section.key}`)}</span>
          </div>
        ))}
      </div>

      <div className={localStyles.radarWrapper}>
        <RadarChart data={RADAR_SECTIONS} hoveredSection={hoveredSection} />
      </div>
    </motion.div>
  );
};
