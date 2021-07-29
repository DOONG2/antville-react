import styled from '@emotion/styled'
import getUserFollowing from '../../lib/api/user/getUserFollowing'
import useInfiniteFollow from './hooks/useInfiniteFollow'
import { UserListPros } from './type'
import UserSection from './UserSection'

export default function UserFollowingList({
  user,
  modalParentRef,
}: UserListPros) {
  const { isLoading, users, setUsers } = useInfiniteFollow({
    key: `user-following-${user.id}`,
    callback: (cursor) => getUserFollowing(user.id, cursor),
    ref: modalParentRef,
  })

  if (!users) return <></>

  return (
    <Block>
      <UserSection
        users={users}
        isLoading={isLoading}
        setUsers={setUsers}
        elementKey={`user-following-section-${user.id}-`}
      />
    </Block>
  )
}

const Block = styled.div``
