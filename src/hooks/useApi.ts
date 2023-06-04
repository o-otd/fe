import { useState, useCallback } from 'react';

export const useApi = <T, U>(apiFunc: (params: T) => Promise<U>) => {
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(
    async (params: T) => {
      setError(null);
      try {
        const response = await apiFunc(params);
        return response; // API 호출의 결과를 반환합니다.
      } catch (err) {
        setError(err as Error);
        return null; // API 호출이 실패하면 null을 반환합니다.
      }
    },
    [apiFunc],
  );

  return { execute, error };
};
