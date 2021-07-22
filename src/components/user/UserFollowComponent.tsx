import styled from '@emotion/styled'
import useFollowUsersQuery, { UserFunction } from './hooks/useFollowUsersQuery'
import { grey030, grey080 } from '../../lib/styles/colors'

type Prop = {
  callback: UserFunction
  cachingKey: string
}

export default function UserFollowComponent({ callback, cachingKey }: Prop) {
  const { users } = useFollowUsersQuery({
    callback,
    cachingKey,
  })

  if (!users) return <></>

  return (
    <Wrapper>
      {users?.map((user) => (
        <Item key={`${user.id}-${cachingKey}`}>
          <Avatar></Avatar>
          <Nickname>{user.nickname}</Nickname>
        </Item>
      ))}
      <Item>
        <Avatar></Avatar>
        <Nickname></Nickname>
      </Item>
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
