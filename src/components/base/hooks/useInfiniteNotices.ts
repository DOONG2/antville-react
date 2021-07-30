import { RefObject, useEffect, useState } from 'react'
import { useInfiniteQuery } from 'react-query'
import { useInfiniteScroll } from '../../../components/common/hooks/useInfiniteScroll'
import { NoticeObject } from '../../../lib/api/notice/types'
import { cacheStableTime } from '../../../lib/variable'

export interface Props {
  key: string
  callback: (cursor?: number) => Promise<NoticeObject[]>
  ref?: RefObject<HTMLDivElement>
}

export default function useInfiniteNotices({ key, callback, ref }: Props) {
  const [notices, setNotices] = useState<NoticeObject[] | undefined>()
  const { isLoading, data, error, isFetching, fetchNextPage, hasNextPage } =
    useInfiniteQuery(key, ({ pageParam: cursor }) => callback(cursor), {
      staleTime: cacheStableTime,
      getNextPageParam: (lastPage) => lastPage[lastPage.length - 1]?.id,
    })
  useEffect(() => {
    if (data) {
      if (notices) {
        setNotices([...notices, ...data.pages[data.pages.length - 1]])
      } else {
        setNotices([...data.pages[0]])
      }
    } else setNotices(undefined)
  }, [data])
  useInfiniteScroll({
    onLoadMore: () => {
      if (!isLoading && !isFetching && hasNextPage) {
        fetchNextPage()
      }
    },
    ref,
  })

  return {
    isLoading,
    notices,
    error,
    isFetching,
    setNotices,
  }
}
