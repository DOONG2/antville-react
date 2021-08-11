import { useEffect, useState } from 'react'
import { useInfiniteQuery } from 'react-query'
import { useInfiniteScroll } from '../../../components/common/hooks/useInfiniteScroll'
import { Post } from '../../../lib/api/types'
import { cacheStableTime } from '../../../lib/variable'

export interface Props {
  key: [string, number, { page: string }]
  callback: (cursor?: number) => Promise<Post[]>
}

export default function useInfinitePosts({ key, callback }: Props) {
  const [posts, setPosts] = useState<Post[] | undefined>()
  const { isLoading, data, error, isFetching, fetchNextPage, hasNextPage } =
    useInfiniteQuery(key, ({ pageParam: cursor }) => callback(cursor), {
      staleTime: cacheStableTime,
      getNextPageParam: (lastPage) => lastPage[lastPage.length - 1]?.id,
      select: (data) => ({
        pages: data.pages.flat(),
        pageParams: data.pageParams,
      }),
    })
  useEffect(() => {
    if (data) setPosts(data.pages)
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
    setPosts,
  }
}
