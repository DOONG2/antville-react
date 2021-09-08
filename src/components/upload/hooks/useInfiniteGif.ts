import { RefObject, useEffect } from 'react'
import { useInfiniteQuery } from 'react-query'
import { useInfiniteScroll } from '../../common/hooks/useInfiniteScroll'
import { cacheStableTime, gifLimit } from '../../../lib/variable'
import { getSearchResponse } from '../../../lib/api/tenor/types'
import formSlice from '../../../reducers/Slices/form'

import { useDispatch } from 'react-redux'

export interface Props {
  key: string
  callback: (cursor?: number) => Promise<getSearchResponse>
  ref?: RefObject<HTMLDivElement>
  query: string
}
export default function useInfiniteGif({ key, callback, ref, query }: Props) {
  const { setGifs } = formSlice.actions
  const dispatch = useDispatch()
  const { isLoading, data, error, isFetching, fetchNextPage, hasNextPage } =
    useInfiniteQuery(key, ({ pageParam: cursor }) => callback(cursor), {
      staleTime: cacheStableTime,
      getNextPageParam: (lastPage) =>
        lastPage.next !== gifLimit && lastPage.next,
      enabled: query !== '',
      select: (data) => ({
        pages: data.pages.map((page) => page.results).flat(),
        pageParams: data.pageParams,
      }),
    })
  useEffect(() => {
    if (data) dispatch(setGifs(data.pages))
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
    error,
    isFetching,
  }
}
