import styles from './styles.module.scss';
import { Globe } from '../Globe';
import { ChartDonut } from '../../shared/ChartDonut';
import { useActivityChartData } from '../../hooks/useLangStatChartData';

// const mockData1 = [
//   { color: '#BACCE7', value: 70, name: 'SCSS' },
//   { color: '#2F2F45', value: 20, name: 'TYPESCRIPT' },
//   { color: '#2F2F45', value: 5, name: 'TYPESCRIPT' },
//   { color: '#2F2F45', value: 5, name: 'TYPESCRIPT' },
// ];

// {
//   "TypeScript": 11077,
//   "SCSS": 6562,
//   "JavaScript": 610,
//   "HTML": 301
// }

export const About = () => {
  const { data, isLoading } = useActivityChartData();

  if (isLoading) return <>Loading data...</>;

  // напиши функцию кэширования: если параметры изменились -
  // вернуть вычисление с новыми параметрами, иначе вернуть результат из кэша

  return (
    <section className={styles.about}>
      <div className={styles.aboutWrapper}>
        <div className={styles.widgetWrapper}>
          <div className={styles.donutWrapper}>
            <ChartDonut data={data} />
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
