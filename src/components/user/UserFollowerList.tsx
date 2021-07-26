import getUserFollower from '../../lib/api/user/getUserFollower'
import useInfiniteFollow from './hooks/useInfiniteFollow'
import { UserListPros } from './type'
import UserSection from './UserSection'

export default function UserFollowerList({ id }: UserListPros) {
  const { isLoading, users } = useInfiniteFollow({
    key: `user-follower-${id}`,
    callback: (cursor) => getUserFollower(id, cursor),
  })

  if (!users) return <></>

  return (
    <>
      <UserSection users={users} isLoading={isLoading} />
    </>
  )
}
