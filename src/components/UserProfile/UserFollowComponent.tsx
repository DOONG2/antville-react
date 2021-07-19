import styled from '@emotion/styled'
import { useEffect, useRef } from 'react'
import useFollowUsersQuery, {
  UserFunction,
} from '../../hooks/query/useFollowUsersQuery'
import { useIntersectionObserver } from '../../hooks/useInfiniteScroll'
import { grey030, grey080 } from '../../mds/styled/colors'

type Prop = {
  callback: UserFunction
  cachingKey: string
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  border-top: 0.5px solid ${grey030};
`

const Bottom = styled.div<{ isOpen?: boolean }>`
  display: ${(p) => (p.isOpen ? 'initial' : 'none')};
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

export default function UserFollowComponent({ callback, cachingKey }: Prop) {
  const bottomRef = useRef<HTMLDivElement>(null)

  const isBottomVisible = useIntersectionObserver(
    bottomRef,
    {
      threshold: 0,
    },
    false
  )

  const { users, fetchNextPage, hasNextPage } = useFollowUsersQuery({
    callback,
    cachingKey,
  })

  useEffect(() => {
    isBottomVisible && hasNextPage && fetchNextPage()
  }, [isBottomVisible])

  if (!users) return <></>

  return (
    <Wrapper>
      {users?.map((user) => (
        <Item key={`${user.id}-${cachingKey}`}>
          <Avatar></Avatar>
          <Nickname>{user.nickname}</Nickname>
        </Item>
      ))}
      <Bottom ref={bottomRef} isOpen={hasNextPage}>
        <Item>
          <Avatar></Avatar>
          <Nickname></Nickname>
        </Item>
      </Bottom>
    </Wrapper>
  )
}
