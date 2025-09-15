import styles from './styles.module.scss';

import { Globe } from '../Globe';
import { ChartDonut } from '../ChartDonut';
import { useActivityChartData } from '../../hooks/useLangStatChartData';
import { RadarChart } from '../RadarChart';
import { InfoPlate } from '@/shared/InfoPlate';

export const About = () => {
  const { data, isLoading } = useActivityChartData();

  return (
    <section className={styles.about}>
      <div className={styles.aboutWrapper}>
        <div className={`${styles.widgetWrapper} ${styles.donutWidgetGap}`}>
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
        </div>
        <div className={styles.widgetWrapper}>
          <header className={styles.headerContainer}>
            <h3>Skill Radar</h3>
            <p className={styles.descriptionText}>
              Current strengths and growth areas
              <br />
              planned for 2026
            </p>
          </header>
          <div className={styles.radarWrapper}>
            <RadarChart />
          </div>
        </div>
        <div className={`${styles.widgetWrapper}`}>
          <header className={styles.headerContainer}>
            <h3>Time Zone</h3>
            <p className={styles.descriptionText}>
              Located in Moscow. Open to remote
              <br />
              work globally
            </p>
          </header>
          <figure className={styles.globWrapper}>
            <Globe />
          </figure>
        </div>
      </div>
    </section>
  );
};
