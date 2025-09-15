import styles from './styles.module.scss';
import { Globe } from '../Globe';
import { ChartDonut } from '../ChartDonut';
import { useActivityChartData } from '../../hooks/useLangStatChartData';

export const About = () => {
  const { data, isLoading } = useActivityChartData();

  return (
    <section className={styles.about}>
      <div className={styles.aboutWrapper}>
        <div className={styles.widgetWrapper}>
          <header className={styles.headerContainer}>
            <h3>Code Palette</h3>
            <p className={styles.locationText}>
              Primary frameworks and languages
              <br />
              used in my work
            </p>
          </header>
          <div className={styles.donutWrapper}>
            <ChartDonut data={data} isLoading={isLoading} />
          </div>
        </div>
        <div className={styles.widgetWrapper}></div>
        <div className={`${styles.widgetWrapper} ${styles.globeWidget}`}>
          <header className={styles.headerContainer}>
            <h3>Time Zone</h3>
            <p className={styles.locationText}>
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
