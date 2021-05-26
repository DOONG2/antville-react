import { useQuery } from 'react-query'
import { getPostAll } from '../../api/post/getPostAll'

const usePostAllQuery = (limit: string, cursor?: string) => {
  const { isLoading, data, error, isFetching } = useQuery('postAll', () =>
    getPostAll(limit, cursor)
  )

  return { isLoading, data, error, isFetching }
}

export default usePostAllQuery
