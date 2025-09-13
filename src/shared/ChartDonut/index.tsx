import { Donut } from './Donut';
import { Legenda } from './Legenda';
import type { FC } from 'react';

import styles from './styles.module.scss';

interface LegendaItemProps {
  name: string;
  value: number;
  color: string;
}

export interface ChartDonutProps {
  data: LegendaItemProps[];
  segmentSize?: number;
  segmentGap?: number;
  innerPadding?: number;
  minAngle?: number;
}

export interface LegendaProps {
  data: LegendaItemProps[];
}

export const ChartDonut: FC<ChartDonutProps> = ({ data }) => {
  return (
    <div className={styles.root}>
      <div className={styles.donutContainer}>
        <Donut data={data} />
      </div>
      <Legenda data={data} />
    </div>
  );
};
