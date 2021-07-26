import styled from '@emotion/styled'
import { grey030, grey080 } from '../../lib/styles/colors'
import { User } from '../../lib/api/types'

type Prop = {
  users: User[]
  isLoading: boolean
  emptyComponent?: React.ReactNode
}

export default function UserSection({
  users,
  isLoading,
  emptyComponent,
}: Prop) {
  return (
    <Wrapper>
      {users.map((user) => (
        <Item key={`${user.id}`}>
          <Avatar></Avatar>
          <Nickname>{user.nickname}</Nickname>
        </Item>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  border-top: 0.5px solid ${grey030};
`

const Item = styled.div`
  display: flex;
  padding: 10px 20px;
  align-items: center;

  border-bottom: 0.5px solid ${grey030};
`

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${grey080};
`

const Nickname = styled.div`
  margin-left: 15px;
`
