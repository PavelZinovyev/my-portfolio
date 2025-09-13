import styles from './styles.module.scss';
import type { ChartDonutProps } from '..';

// const SEGMENT_SIZE_HOVER = 30; todo

export const Donut = ({
  data,
  segmentSize = 20,
  segmentGap = 5,
  innerPadding = 1,
  minAngle = 2,
}: ChartDonutProps) => {
  const radius = 50 - segmentSize / 2;
  const gapDegrees = segmentGap;

  const totalValue = data.reduce((sum, item) => sum + item.value, 0);

  if (data.length) {
    // если синий сегмент === 0, то черный сегмент делаем уже синего
    const adjustedData =
      data[0].value === 0
        ? [
            { ...data[0], size: data[1].value },
            { ...data[1], size: data[0].value },
          ]
        : data;

    const sortedData =
      adjustedData[0].value > adjustedData[1].value
        ? [adjustedData[0], adjustedData[1]]
        : [adjustedData[1], adjustedData[0]];

    // тот сегмент, чей value больше будет начинаться из 0 градусов
    let startAngle =
      data[0].value === 0 || data[1].value === 0 || data[0].value === data[1].value
        ? segmentGap
        : 0;

    const segments = sortedData.map((item, index) => {
      const value = item.value === 0 ? 0.001 : item.value;
      const angle = Math.max(
        (value / totalValue) * (360 - sortedData.length * gapDegrees),
        minAngle
      );

      const adjustedStartAngle = startAngle - minAngle / 2;
      const endAngle = adjustedStartAngle + angle;

      const startCoordX = 50 + radius * Math.cos((adjustedStartAngle * Math.PI) / 180);
      const startCoordY = 50 + radius * Math.sin((adjustedStartAngle * Math.PI) / 180);

      const endCoordX = 50 + radius * Math.cos((endAngle * Math.PI) / 180);
      const endCoordY = 50 + radius * Math.sin((endAngle * Math.PI) / 180);

      const largeArcFlag = angle <= 180 ? 0 : 1;

      const pathData = `M ${startCoordX} ${startCoordY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endCoordX} ${endCoordY}`;

      startAngle = endAngle + gapDegrees;

      return (
        <path
          className={styles.path}
          key={index}
          d={pathData}
          fill="none"
          stroke={item.color}
          strokeWidth={segmentSize}
          transform={`translate(${innerPadding},${innerPadding})`}
        />
      );
    });

    const svgWidth = 100 + innerPadding * 2;
    const svgHeight = 100 + innerPadding * 2;

    return (
      <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} width="100%" height="100%">
        {segments}
      </svg>
    );
  }
};
