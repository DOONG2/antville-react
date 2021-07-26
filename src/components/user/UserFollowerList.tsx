import styled from '@emotion/styled'
import getUserFollower from '../../lib/api/user/getUserFollower'
import useInfiniteFollow from './hooks/useInfiniteFollow'
import { UserListPros } from './type'
import UserSection from './UserSection'

export default function UserFollowerList({ id, modalParentRef }: UserListPros) {
  const { isLoading, users } = useInfiniteFollow({
    key: `user-follower-${id}`,
    callback: (cursor) => getUserFollower(id, cursor),
    ref: modalParentRef,
  })

  if (!users) return <></>

  return (
    <Block>
      <UserSection
        users={users}
        isLoading={isLoading}
        elementKey={`user-follower-section-${id}-`}
      />
    </Block>
  )
}

const Block = styled.div``
