import { useQuery } from '@tanstack/react-query';

import { QUERYKEYS } from '../constants/queryKeys';

// import { fetchGithubLangs } from '../ api/fetch';

export const useLangStatChartDataQuery = ({ authToken }: { authToken: string }) => {
  const queryFn = async () => {
    // return fetchGithubLangs(authToken);
    return authToken; // todo
  };

  const { data, ...rest } = useQuery({
    queryKey: QUERYKEYS.donutChartData(),
    queryFn,
    enabled: true,
    refetchInterval: 2 * 60 * 1000, // 2 mins
    staleTime: 3 * 60 * 1000,
  });

  console.log('data->', data);

  return {
    data,
    ...rest,
  };
};
