import styled from '@emotion/styled'
import getUserFollowing from '../../lib/api/user/getUserFollowing'
import useInfiniteFollow from './hooks/useInfiniteFollow'
import { UserListPros } from './type'
import UserSection from './UserSection'

export default function UserFollowingList({
  id,
  modalParentRef,
}: UserListPros) {
  const { isLoading, users } = useInfiniteFollow({
    key: `user-following-${id}`,
    callback: (cursor) => getUserFollowing(id, cursor),
    ref: modalParentRef,
  })

  if (!users) return <></>

  return (
    <Block>
      <UserSection
        users={users}
        isLoading={isLoading}
        elementKey={`user-following-section-${id}-`}
      />
    </Block>
  )
}

const Block = styled.div``
