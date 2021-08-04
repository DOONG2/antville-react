import { RefObject, useEffect, useState } from 'react'
import { useInfiniteQuery } from 'react-query'
import { useInfiniteScroll } from '../../common/hooks/useInfiniteScroll'
import { cacheStableTime } from '../../../lib/variable'
import { getSearchResponse, GifObject } from '../../../lib/api/tenor/types'

export interface Props {
  key: string
  callback: (cursor?: number) => Promise<getSearchResponse>
  ref?: RefObject<HTMLDivElement>
  query: string
}

export default function useInfiniteGif({ key, callback, ref, query }: Props) {
  const [gifs, setGifs] = useState<GifObject[] | undefined>()

  const { isLoading, data, error, isFetching, fetchNextPage, hasNextPage } =
    useInfiniteQuery(key, ({ pageParam: cursor }) => callback(cursor), {
      staleTime: cacheStableTime,
      getNextPageParam: (lastPage) => lastPage.next,
      enabled: query !== '',
    })
  useEffect(() => {
    if (data) {
      if (!gifs) return setGifs(data.pages[0].results)
      setGifs([...gifs, ...data.pages[data.pages.length - 1].results])
    } else setGifs(undefined)
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
    gifs,
    error,
    isFetching,
    setGifs,
  }
}
