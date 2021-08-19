import { RefObject, useEffect } from 'react'
import { useInfiniteQuery } from 'react-query'
import { useDispatch } from 'react-redux'
import { useInfiniteScroll } from '../../../components/common/hooks/useInfiniteScroll'
import { NoticeObject } from '../../../lib/api/notice/types'
import { cacheStableTime, notificationLimit } from '../../../lib/variable'
import notificationSlice from '../../../reducers/Slices/notification'
import { useRootState } from '../../common/hooks/useRootState'

export interface Props {
  key: string
  callback: (cursor?: number) => Promise<NoticeObject[]>
  ref?: RefObject<HTMLDivElement>
}

export default function useInfiniteNotices({ key, callback, ref }: Props) {
  const { notices } = useRootState((state) => state.notification)
  const { setNotices } = notificationSlice.actions
  const dispatch = useDispatch()
  const { isLoading, data, error, isFetching, fetchNextPage, hasNextPage } =
    useInfiniteQuery([key], ({ pageParam: cursor }) => callback(cursor), {
      staleTime: cacheStableTime,
      getNextPageParam: (lastPage) =>
        lastPage.length === notificationLimit &&
        lastPage[lastPage.length - 1]?.id,
      select: (data) => ({
        pages: data.pages.flat(),
        pageParams: data.pageParams,
      }),
    })

  useEffect(() => {
    if (data) dispatch(setNotices(data.pages))
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
