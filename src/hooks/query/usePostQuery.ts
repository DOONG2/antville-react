import { useQuery } from 'react-query'
import { useDispatch } from 'react-redux'
import getPost from '../../api/post/getPost'
import FeedSlice from '../../reducers/Slices/feed'
import { useRootState } from '../useRootState'

export default function usePostQuery(limit: string, cursor?: string) {
  const { activatedTab } = useRootState((state) => state.feed)
  const { setPosts } = FeedSlice.actions
  const dispatch = useDispatch()

  const { isLoading, data, error, isFetching } = useQuery(activatedTab, () =>
    getPost(activatedTab, limit, cursor)
  )

  dispatch(setPosts(data))

  return { isLoading, data, error, isFetching }
}
