import { useState, useCallback } from 'react';

export const useApi = <T = void, U = void>(
  apiFunc: T extends void ? () => Promise<U> : (params: T) => Promise<U>,
) => {
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(
    async (params?: T) => {
      setError(null);
      try {
        const response = await apiFunc(params as T);
        return response;
      } catch (err) {
        setError(err as Error);
        return null;
      }
    },
    [apiFunc],
  );

  return { execute, error };
};
