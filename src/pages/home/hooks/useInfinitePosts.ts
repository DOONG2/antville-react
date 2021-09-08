import { useInfiniteQuery } from 'react-query'
import { useInfiniteScroll } from '../../../components/common/hooks/useInfiniteScroll'
import { Post } from '../../../lib/api/types'
import {
  activated_stock,
  cacheStableTime,
  postLimit,
} from '../../../lib/variable'

export interface Props {
  key: [string, string, { page: string }]
  callback: (cursor?: number) => Promise<Post[]>
}

export default function useInfinitePosts({ key, callback }: Props) {
  const { isLoading, data, error, isFetching, fetchNextPage, hasNextPage } =
    useInfiniteQuery(key, ({ pageParam: cursor }) => callback(cursor), {
      staleTime: key[2].page === activated_stock ? undefined : cacheStableTime,
      getNextPageParam: (lastPage) =>
        lastPage.length === postLimit && lastPage[lastPage.length - 1]?.id,
      select: (data) => ({
        pages: data.pages.flat(),
        pageParams: data.pageParams,
      }),
    })

  useInfiniteScroll({
    onLoadMore: () => {
      if (!isLoading && !isFetching && hasNextPage) {
        fetchNextPage()
      }
    },
  })

  return {
    isLoading,
    posts: data?.pages,
    error,
    isFetching,
  }
}
