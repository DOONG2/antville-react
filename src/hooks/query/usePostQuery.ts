import { useEffect } from 'react'
import { useInfiniteQuery } from 'react-query'
import { useDispatch } from 'react-redux'
import getPostsByUrl from '../../api/post/getPostsByUrl'
import { Post } from '../../api/types'
import { cacheStableTime } from '../../lib/variable'
import FeedSlice from '../../reducers/Slices/feed'
import { useRootState } from '../useRootState'

export default function usePostQuery() {
  const {
    feed: { activatedTab },
  } = useRootState((state) => state)
  const { setPosts } = FeedSlice.actions
  const dispatch = useDispatch()

  const {
    isLoading,
    data,
    error,
    isFetching,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    [activatedTab],
    ({ pageParam: cursor }) => getPostsByUrl(activatedTab, cursor),
    {
      staleTime: cacheStableTime,
      getNextPageParam: (lastPage) => lastPage[lastPage.length - 1]?.id,
    }
  )

  useEffect(() => {
    if (data && !isFetchingNextPage) {
      const arr: Post[] = []
      data.pages.map((posts) => arr.push(...posts))
      console.log(arr)
      dispatch(setPosts(arr))
    }
  }, [data])

  return {
    isLoading,
    data,
    error,
    isFetching,
    fetchNextPage,
    hasNextPage,
  }
}
