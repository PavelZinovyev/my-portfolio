import { Globe } from '../../../Globe';

import localStyles from './styles.module.scss';
import styles from '../../styles.module.scss';

export const GlobeWidget = () => {
  return (
    <div className={`${styles.widgetWrapper}`}>
      <header className={styles.headerContainer}>
        <h3>Time Zone</h3>
        <p className={styles.descriptionText}>
          Located in Moscow. Open to remote
          <br />
          work globally
        </p>
      </header>
      <figure className={localStyles.globeWrapper}>
        <Globe />
      </figure>
    </div>
  );
};
