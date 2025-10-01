import { Globe } from '../../../Globe';

import localStyles from './styles.module.scss';
import styles from '../../styles.module.scss';
import { useLang } from '@/hooks/useLang';

export const GlobeWidget = () => {
  const { t } = useLang();

  return (
    <div className={`${styles.widgetWrapper}`}>
      <header className={styles.headerContainer}>
        <h3>{t('timeZoneTitle')}</h3>
        <p className={styles.descriptionText}>
          {t('timeZoneDescriptionPart1')}
          <br />
          {t('timeZoneDescriptionPart2')}
        </p>
      </header>
      <figure className={localStyles.globeWrapper}>
        <Globe />
      </figure>
    </div>
  );
};
