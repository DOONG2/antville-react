import { useEffect, useState } from 'react'
import { useInfiniteQuery } from 'react-query'
import { User } from '../../../lib/api/types'
import { cacheStableTime } from '../../../lib/variable'

export interface UserFunction {
  (cursor?: any): Promise<User[]>
}

interface Prop {
  callback: UserFunction
  cachingKey: string
}

export default function useFollowUsersQuery({ callback, cachingKey }: Prop) {
  const [users, setUsers] = useState<User[]>()

  const {
    isLoading,
    data,
    error,
    isFetching,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    [cachingKey],
    ({ pageParam: cursor }) => callback(cursor),
    {
      staleTime: cacheStableTime,
      getNextPageParam: (lastPage) => lastPage[lastPage.length - 1]?.id,
    }
  )

  useEffect(() => {
    if (data && !isFetchingNextPage) {
      const arr: User[] = []
      data.pages.map((posts) => arr.push(...posts))
      setUsers(arr)
    }
  }, [data])

  return {
    isLoading,
    users,
    error,
    isFetching,
    fetchNextPage,
    hasNextPage,
  }
}
