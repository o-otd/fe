import { UseMutationOptions, useMutation } from '@tanstack/react-query';

export const useApiMutation = <T, V>(
  apiFunction: (params?: T) => Promise<V>,
  options?: UseMutationOptions<V, unknown, T>,
) => {
  return useMutation(apiFunction, options);
};
