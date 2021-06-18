import { useQuery } from 'react-query'
import { useDispatch } from 'react-redux'
import getPostsByUrl from '../../api/post/getPostsByUrl'
import { cacheStableTime } from '../../lib/variable'
import FeedSlice from '../../reducers/Slices/feed'
import { useRootState } from '../useRootState'

export default function usePostQuery(cursor?: string) {
  const {
    feed: { activatedTab },
  } = useRootState((state) => state)
  const { setPosts } = FeedSlice.actions
  const dispatch = useDispatch()

  const { isLoading, data, error, isFetching } = useQuery(
    [activatedTab],
    () => getPostsByUrl(activatedTab, cursor),
    {
      staleTime: cacheStableTime,
    }
  )

  dispatch(setPosts(data))

  return { isLoading, data, error, isFetching }
}
