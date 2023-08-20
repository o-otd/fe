import {
  QueryFunctionContext,
  QueryKey,
  UseQueryOptions,
  useQuery,
} from 'react-query';

export const useApiQuery = <T, V>(
  queryKey: QueryKey,
  apiFunction: (params?: T) => Promise<V>,
  options?: UseQueryOptions<V, unknown, T>,
) => {
  return useQuery(
    queryKey,
    (context: QueryFunctionContext<QueryKey, T>) => {
      const params = context.queryKey[1];
      if (params) {
        return apiFunction(params as T);
      } else {
        return apiFunction();
      }
    },
    options,
  );
};
