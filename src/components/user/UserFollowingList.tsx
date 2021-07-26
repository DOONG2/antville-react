import getUserFollowing from '../../lib/api/user/getUserFollowing'
import useInfiniteFollow from './hooks/useInfiniteFollow'
import { UserListPros } from './type'
import UserSection from './UserSection'

export default function UserFollowingList({ id }: UserListPros) {
  const { isLoading, users } = useInfiniteFollow({
    key: `user-following-${id}`,
    callback: (cursor) => getUserFollowing(id, cursor),
  })

  if (!users) return <></>

  return (
    <>
      <UserSection users={users} isLoading={isLoading} />
    </>
  )
}
