import { RefObject, useEffect } from 'react'
import { useInfiniteQuery } from 'react-query'
import { useInfiniteScroll } from '../../common/hooks/useInfiniteScroll'
import { cacheStableTime } from '../../../lib/variable'
import { getSearchResponse } from '../../../lib/api/tenor/types'
import formSlice from '../../../reducers/Slices/form'
import { useRootState } from '../../common/hooks/useRootState'
import { useDispatch } from 'react-redux'

export interface Props {
  key: string
  callback: (cursor?: number) => Promise<getSearchResponse>
  ref?: RefObject<HTMLDivElement>
  query: string
}

export default function useInfiniteGif({ key, callback, ref, query }: Props) {
  const { gifs } = useRootState((state) => state.form)
  const { setGifs } = formSlice.actions
  const dispatch = useDispatch()

  const { isLoading, data, error, isFetching, fetchNextPage, hasNextPage } =
    useInfiniteQuery(key, ({ pageParam: cursor }) => callback(cursor), {
      staleTime: cacheStableTime,
      getNextPageParam: (lastPage) => lastPage.next,
      enabled: query !== '',
    })
  useEffect(() => {
    if (data) {
      if (!gifs) {
        dispatch(setGifs(data.pages[0].results))
        return
      }
      dispatch(setGifs([...gifs, ...data.pages[data.pages.length - 1].results]))
    } else dispatch(setGifs(undefined))
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
