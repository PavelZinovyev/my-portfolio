import { useState } from 'react';
import { LANGS_COLORS } from '@/constants/langsList';
import type { ChartDonutProps } from '@/types/ChartDonut';

import styles from './styles.module.scss';

export const ChartDonut = ({
  data,
  segmentSize = 20,
  segmentGap = 10,
  innerPadding = 0,
  minAngle = 2,
}: ChartDonutProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  const radius = 50 - segmentSize / 2;
  const gapDegrees = segmentGap;

  const totalValue = data?.reduce((sum, item) => sum + item.value, 0);

  if (!data || data.length === 0 || !totalValue) return null;

  if (data.length) {
    let startAngle = 0;

    const segments = data.map((item, index) => {
      const value = item.value === 0 ? 0.001 : item.value;
      const angle = Math.max((value / totalValue) * (360 - data.length * gapDegrees + 2), minAngle);

      const adjustedStartAngle = startAngle - minAngle / 2;
      const endAngle = adjustedStartAngle + angle;

      const startCoordX = 50 + radius * Math.cos((adjustedStartAngle * Math.PI) / 180);
      const startCoordY = 50 + radius * Math.sin((adjustedStartAngle * Math.PI) / 180);

      const endCoordX = 50 + radius * Math.cos((endAngle * Math.PI) / 180);
      const endCoordY = 50 + radius * Math.sin((endAngle * Math.PI) / 180);

      const largeArcFlag = angle <= 180 ? 0 : 1;

      const pathData = `M ${startCoordX} ${startCoordY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endCoordX} ${endCoordY}`;

      startAngle = endAngle + gapDegrees;

      const rectStartAngle = adjustedStartAngle - 90;
      const rectEndAngle = endAngle - 90;

      const currentHeight = hovered === index ? 25 : segmentSize;

      return (
        <g
          key={index}
          className={styles.segment}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
        >
          <>
            <rect
              className={styles.cap}
              x={startCoordX + innerPadding - 2}
              y={startCoordY + innerPadding - currentHeight / 2}
              width={3}
              height={hovered === index ? 25 : segmentSize}
              rx={2}
              ry={2}
              fill={item.color}
              transform={`rotate(${rectStartAngle}, ${startCoordX + innerPadding}, ${
                startCoordY + innerPadding
              })`}
            />
            <path
              className={styles.path}
              d={pathData}
              fill="none"
              stroke={item.color}
              strokeWidth={hovered === index ? 25 : segmentSize}
              transform={`translate(${innerPadding},${innerPadding})`}
            />
            <rect
              className={styles.cap}
              x={endCoordX + innerPadding - 1}
              y={endCoordY + innerPadding - currentHeight / 2}
              width={3}
              height={hovered === index ? 25 : segmentSize}
              rx={2}
              ry={2}
              fill={item.color}
              transform={`rotate(${rectEndAngle}, ${endCoordX + innerPadding}, ${
                endCoordY + innerPadding
              })`}
            />
          </>
        </g>
      );
    });

    const svgWidth = 100 + innerPadding * 2;
    const svgHeight = 100 + innerPadding * 2;

    return (
      <div className={styles.root}>
        <div className={styles.donutContainer}>
          <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} width="100%" height="100%">
            {segments}
          </svg>
        </div>
        <div className={styles.legenda}>
          {data?.map((row, i) => (
            <div className={styles.row} key={i}>
              <div
                className={styles.circle}
                style={{ backgroundColor: LANGS_COLORS[row.name as keyof typeof LANGS_COLORS] }}
              ></div>
              <span className={styles.text}>{`${row.name} — ${row.value}%`}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
};
