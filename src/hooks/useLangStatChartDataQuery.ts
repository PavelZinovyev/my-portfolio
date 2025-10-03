import { useQuery } from '@tanstack/react-query';

import { QUERYKEYS } from '../constants/queryKeys';

import { fetchRepoLangStats } from '../../api/github';

const REPO_NAME = 'my-portfolio';
const OWNER_NAME = 'PavelZinovyev';

export const useLangStatChartDataQuery = () => {
  const queryFn = async () => {
    return fetchRepoLangStats(OWNER_NAME, REPO_NAME);
  };

  const { data, ...rest } = useQuery({
    queryKey: QUERYKEYS.donutChartData(),
    queryFn,
    enabled: true,
    refetchInterval: 60 * 60 * 1000, // 60 mins
    staleTime: 3 * 60 * 1000,
  });

  return {
    data,
    ...rest,
  };
};
