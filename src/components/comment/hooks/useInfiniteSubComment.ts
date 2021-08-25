import { useEffect, useState } from 'react'
import { useInfiniteQuery } from 'react-query'
import { cacheStableTime, subCommentsLimit } from '../../../lib/variable'
import { Comment } from '../../../lib/api/comment/types'

export interface Props {
  key: [string, number]
  callback: (cursor?: number) => Promise<Comment[]>
  isOpen: boolean
}

export default function useInfiniteSubComment({
  key,
  callback,
  isOpen,
}: Props) {
  const [subComments, setSubComments] = useState<Comment[] | undefined>()
  const { isLoading, data, error, isFetching, fetchNextPage, hasNextPage } =
    useInfiniteQuery(key, ({ pageParam: cursor }) => callback(cursor), {
      enabled: isOpen,
      staleTime: cacheStableTime,
      getNextPageParam: (lastPage) =>
        lastPage.length === subCommentsLimit &&
        lastPage[lastPage.length - 1]?.id,

      select: (data) => ({
        pages: data.pages.flat(),
        pageParams: data.pageParams,
      }),
    })
  useEffect(() => {
    if (data) setSubComments(data.pages)
  }, [data])

  return {
    isLoading,
    subComments,
    error,
    isFetching,
    hasNextPage,
    setSubComments,
    onLoadMore: () => {
      if (!isLoading && !isFetching && hasNextPage) {
        fetchNextPage()
      }
    },
  }
}
