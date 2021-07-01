import { useEffect } from 'react'
import { useInfiniteQuery } from 'react-query'
import { useDispatch } from 'react-redux'
import getPostsByStock from '../../api/post/getPostsByStock'
import { Post } from '../../api/types'
import { cacheStableTime } from '../../lib/variable'
import feedSlice from '../../reducers/Slices/feed'

interface Props {
  id: string
}

export default function usePostStockQuery({ id }: Props) {
  const { setPosts } = feedSlice.actions
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
    ['getPostsByStock'],
    ({ pageParam: cursor }) => getPostsByStock(id, cursor),
    {
      staleTime: cacheStableTime,
      getNextPageParam: (lastPage) => lastPage[lastPage.length - 1]?.id,
    }
  )

  useEffect(() => {
    if (data && !isFetchingNextPage) {
      const arr: Post[] = []
      data.pages.map((posts) => arr.push(...posts))
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
