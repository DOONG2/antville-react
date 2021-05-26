import { useQuery } from 'react-query'
import getPost from '../../api/post/getPost'
import { useRootState } from '../useRootState'

export default function usePostQuery(limit: string, cursor?: string) {
  const { activatedTab } = useRootState((state) => state.feed)

  const { isLoading, data, error, isFetching } = useQuery(activatedTab, () =>
    getPost(activatedTab, limit, cursor)
  )

  return { isLoading, data, error, isFetching }
}
