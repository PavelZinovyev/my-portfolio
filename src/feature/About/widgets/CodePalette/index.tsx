import styles from '../../styles.module.scss';
import localStyles from './styles.module.scss';
import { ChartDonut } from '@/feature/ChartDonut';
import { InfoPlate } from '@/shared/InfoPlate';
import { useActivityChartData } from '@/hooks/useLangStatChartData';
import { motion } from 'framer-motion';

import { FADE_IN_LEFT } from '@/constants/motion';
import { useLang } from '@/hooks/useLang';

export const CodePalette = () => {
  const { t } = useLang();
  const { data, isLoading } = useActivityChartData();

  return (
    <motion.div
      className={`${styles.widgetWrapper} ${localStyles.donutWidgetGap}`}
      {...FADE_IN_LEFT}
    >
      <header className={styles.headerContainer}>
        <h3>{t('codePaletteTitle')}</h3>
        <p className={styles.descriptionText}>
          {t('codePaletteDescriptionPart1')}
          <br />
          {t('codePaletteDescriptionPart2')}
        </p>
      </header>
      <ChartDonut data={data} isLoading={isLoading} />
      <InfoPlate text={t('codePaletteBanner')} />
    </motion.div>
  );
};
