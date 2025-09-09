import styles from './styles.module.scss';
import { Globe } from '../Globe';

export const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.aboutWrapper}>
        <div className={styles.widgetWrapper}>бублик</div>
        <div className={styles.widgetWrapper}></div>
        <div className={styles.widgetWrapper}>
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
