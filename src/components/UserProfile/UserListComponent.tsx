import styled from '@emotion/styled'
import { User } from '../../api/types'

type Prop = {
  users?: User[]
}

const Wrapper = styled.div``

export default function UserListComponent({ users }: Prop) {
  return (
    <>
      <Wrapper>{users?.map((user) => user.id)}</Wrapper>
    </>
  )
}
