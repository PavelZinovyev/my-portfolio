import { useMemo } from 'react';

const CHART_WIDTH_SMALL = 20;
const CHART_WIDTH_WIDE = 30;

import { useLangStatChartDataQuery } from './useLangStatChartDataQuery';

export const useActivityChartData = ({ authToken }: { authToken: string }) => {
  const { data, ...rest } = useLangStatChartDataQuery({ authToken });

  let chartData = [
    {
      value: 10,
      color: '#BACCE7',
      type: 'solved',
      size: CHART_WIDTH_SMALL,
    },
    {
      value: 30,
      color: '#2F2F45',
      type: 'not-solved',
      size: CHART_WIDTH_WIDE,
    },
  ];

  const hasMoreActiveStudents = true;

  if (!hasMoreActiveStudents) {
    chartData = chartData.reverse();
  }

  const notSolvedPosition = useMemo(
    () => chartData?.find((position: any) => position.type === 'not-solved'),
    [data]
  );

  const maxPositionSize = useMemo(() => {
    return data ? Math.max(...chartData.map((position: any) => position.size)) : 0;
  }, [data]);

  return {
    data,
    chartData,
    notSolvedPosition,
    maxPositionSize,
    ...rest,
  };
};
