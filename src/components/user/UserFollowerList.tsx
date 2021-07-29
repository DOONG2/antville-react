import styled from '@emotion/styled'
import getUserFollower from '../../lib/api/user/getUserFollower'
import useInfiniteFollow from './hooks/useInfiniteFollow'
import { UserListPros } from './type'
import UserSection from './UserSection'

export default function UserFollowerList({
  user,
  modalParentRef,
}: UserListPros) {
  const { isLoading, users, setUsers } = useInfiniteFollow({
    key: `user-follower-${user.id}`,
    callback: (cursor) => getUserFollower(user.id, cursor),
    ref: modalParentRef,
  })

  if (!users) return <></>

  return (
    <Block>
      <UserSection
        users={users}
        isLoading={isLoading}
        setUsers={setUsers}
        elementKey={`user-follower-section-${user.id}-`}
      />
    </Block>
  )
}

const Block = styled.div``
