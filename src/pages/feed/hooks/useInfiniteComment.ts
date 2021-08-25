import { useEffect, useState } from 'react'
import { useInfiniteQuery } from 'react-query'
import { useInfiniteScroll } from '../../../components/common/hooks/useInfiniteScroll'
import { cacheStableTime, commentsLimit } from '../../../lib/variable'
import { Comment } from '../../../lib/api/comment/types'

export interface Props {
  key: [string, number]
  callback: (cursor?: number) => Promise<Comment[]>
}

export default function useInfiniteComment({ key, callback }: Props) {
  const [comments, setComments] = useState<Comment[] | undefined>()
  const { isLoading, data, error, isFetching, fetchNextPage, hasNextPage } =
    useInfiniteQuery(key, ({ pageParam: cursor }) => callback(cursor), {
      staleTime: cacheStableTime,
      getNextPageParam: (lastPage) =>
        lastPage.length === commentsLimit && lastPage[lastPage.length - 1]?.id,
      select: (data) => ({
        pages: data.pages.flat(),
        pageParams: data.pageParams,
      }),
    })
  useEffect(() => {
    if (data) setComments(data.pages)
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
    comments,
    error,
    isFetching,
    setComments,
  }
}
