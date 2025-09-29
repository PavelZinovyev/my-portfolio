import styles from '../../styles.module.scss';
import localStyles from './styles.module.scss';
import { ChartDonut } from '@/feature/ChartDonut';
import { InfoPlate } from '@/shared/InfoPlate';
import { useActivityChartData } from '@/hooks/useLangStatChartData';
import { motion } from 'framer-motion';

import { FADE_IN_LEFT } from '@/constants/motion';

export const CodePalette = () => {
  const { data, isLoading } = useActivityChartData();

  return (
    <motion.div
      className={`${styles.widgetWrapper} ${localStyles.donutWidgetGap}`}
      {...FADE_IN_LEFT}
    >
      <header className={styles.headerContainer}>
        <h3>Code Palette</h3>
        <p className={styles.descriptionText}>
          Primary frameworks and languages
          <br />
          used in my work
        </p>
      </header>
      <ChartDonut data={data} isLoading={isLoading} />
      <InfoPlate text={'Data from my public GitHub and private work repositories'} />
    </motion.div>
  );
};
