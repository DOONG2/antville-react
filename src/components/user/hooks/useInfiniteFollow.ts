import { RefObject, useEffect, useState } from 'react'
import { useInfiniteQuery } from 'react-query'
import { useInfiniteScroll } from '../../common/hooks/useInfiniteScroll'
import { cacheStableTime } from '../../../lib/variable'
import { User } from '../../../lib/api/types'

export interface Props {
  key: string
  callback: (cursor?: number) => Promise<User[]>
  ref?: RefObject<HTMLDivElement>
}

export default function useInfiniteFollow({ key, callback, ref }: Props) {
  const [users, setUsers] = useState<User[] | undefined>()
  const { isLoading, data, error, isFetching, fetchNextPage, hasNextPage } =
    useInfiniteQuery(key, ({ pageParam: cursor }) => callback(cursor), {
      staleTime: cacheStableTime,
      getNextPageParam: (lastPage) => lastPage[lastPage.length - 1]?.id,
    })
  useEffect(() => {
    if (data) {
      if (users) {
        setUsers([...users, ...data.pages[data.pages.length - 1]])
      } else {
        setUsers([...data.pages[0]])
      }
    }
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
    users,
    error,
    isFetching,
    setUsers,
  }
}
