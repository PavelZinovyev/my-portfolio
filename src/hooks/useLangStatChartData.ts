import { useLangStatChartDataQuery } from './useLangStatChartDataQuery';
import { mixFrameworks } from '../utils/mixFrameworks';

export const useActivityChartData = () => {
  const { data, ...rest } = useLangStatChartDataQuery();

  const combinedData = mixFrameworks(data);

  return {
    data: combinedData,
    ...rest,
  };
};
