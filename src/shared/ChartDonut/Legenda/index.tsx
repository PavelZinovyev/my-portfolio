import type { FC } from 'react';
import styles from './styles.module.scss';

import type { LegendaProps } from '..';

export const Legenda: FC<LegendaProps> = ({ data }) => {
  if (data.length === 0) return null;

  return (
    <div className={styles.root}>
      {data.map((row) => (
        <div className={styles.row}>
          <div className={styles.circle}></div>
          <span className={styles.text}>{`${row.name} — ${row.value}%`}</span>
        </div>
      ))}
    </div>
  );
};
