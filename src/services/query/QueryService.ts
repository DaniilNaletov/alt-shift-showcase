import { QueryCache, QueryClient, QueryKey } from '@tanstack/react-query'
import { isAxiosError } from 'axios'

let queryClient: QueryClient

export const QueryService = {
  init: (config?: { onError?: (error: Error, queryKey: QueryKey) => void }) => {
    queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry(failureCount, error) {
            if (
              isAxiosError(error) &&
              (error.response?.status === 404 ||
                error.response?.status === 401 ||
                error.response?.status === 402 ||
                error.response?.status === 429)
            ) {
              return false
            }

            return failureCount < 2
          },
        },
      },
      queryCache: new QueryCache({
        onError(error, query) {
          config?.onError?.(error, query.queryKey)
        },
      }),
    })
  },

  getClient: () => {
    if (!queryClient) {
      throw new Error('QueryService not initialized')
    }

    return queryClient
  },
}
