import { useEffect, useState } from 'react'
import { useInfiniteQuery } from 'react-query'
import { useInfiniteScroll } from './useInfiniteScroll'
import { Post } from '../../../lib/api/types'
import { cacheStableTime } from '../../../lib/variable'

export interface Props {
  key: string
  callback: (cursor?: number) => Promise<Post[]>
}

export default function useInfinitePosts({ key, callback }: Props) {
  const [posts, setPosts] = useState<Post[] | undefined>()
  const { isLoading, data, error, isFetching, fetchNextPage, hasNextPage } =
    useInfiniteQuery(key, ({ pageParam: cursor }) => callback(cursor), {
      staleTime: cacheStableTime,
      getNextPageParam: (lastPage) => lastPage[lastPage.length - 1]?.id,
    })
  useEffect(() => {
    if (data) {
      if (posts) {
        setPosts([...posts, ...data.pages[data.pages.length - 1]])
      } else {
        setPosts([...data.pages[0]])
      }
    }
  }, [data])
  useInfiniteScroll({
    onLoadMore: () => {
      if (!isLoading && !isFetching && hasNextPage) {
        fetchNextPage()
      }
    },
  })

  return {
    isLoading,
    posts,
    error,
    isFetching,
  }
}
