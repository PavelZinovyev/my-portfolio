import styles from './styles.module.scss';
import { Globe } from '../Globe';
import { ChartDonut } from '../../shared/ChartDonut';
// import { useActivityChartData } from '../../hooks/useLangStatChartData';

const mockData1 = [
  { color: '#BACCE7', value: 70, name: 'SCSS' },
  { color: '#2F2F45', value: 30, name: 'TYPESCRIPT' },
];

export const About = () => {
  // const data = useActivityChartData({ authToken: '' });

  // напиши функцию кэширования: если параметры изменились -
  // вернуть вычисление с новыми параметрами, иначе вернуть результат из кэша

  return (
    <section className={styles.about}>
      <div className={styles.aboutWrapper}>
        <div className={styles.widgetWrapper}>
          <div className={styles.donutWrapper}>
            <ChartDonut data={mockData1} />
          </div>
        </div>
        <div className={styles.widgetWrapper}></div>
        <div className={`${styles.widgetWrapper} ${styles.globeWidget}`}>
          <h3>Time Zone</h3>
          <p className={styles.locationText}>
            Located in Moscow. Open to remote
            <br />
            work globally
          </p>
          <figure className={styles.globWrapper}>
            <Globe />
          </figure>
        </div>
      </div>
    </section>
  );
};
