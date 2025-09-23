import styles from './styles.module.scss';

import { Radar } from './widgets/Radar';
import { GlobeWidget } from './widgets/Globe';
import { CodePalette } from './widgets/CodePalette';

export const About = () => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <CodePalette />
        <Radar />
        <GlobeWidget />
      </div>
    </div>
  );
};
