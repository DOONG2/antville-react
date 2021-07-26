import { useEffect, useState } from 'react'
import { useInfiniteQuery } from 'react-query'
import { useInfiniteScroll } from '../../../components/common/hooks/useInfiniteScroll'
import { cacheStableTime } from '../../../lib/variable'
import { CommentObject } from '../../../lib/api/comment/types'

export interface Props {
  key: string
  callback: (cursor?: number) => Promise<CommentObject[]>
}

export default function useInfiniteComment({ key, callback }: Props) {
  const [comments, setComments] = useState<CommentObject[] | undefined>()
  const { isLoading, data, error, isFetching, fetchNextPage, hasNextPage } =
    useInfiniteQuery(key, ({ pageParam: cursor }) => callback(cursor), {
      staleTime: cacheStableTime,
      getNextPageParam: (lastPage) => lastPage[lastPage.length - 1]?.id,
    })
  useEffect(() => {
    if (data) {
      if (comments) {
        setComments([...comments, ...data.pages[data.pages.length - 1]])
      } else {
        setComments([...data.pages[0]])
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
    comments,
    error,
    isFetching,
    setComments,
  }
}
