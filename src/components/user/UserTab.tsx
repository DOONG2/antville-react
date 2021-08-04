import styled from '@emotion/styled'
import { User } from '../../lib/api/types'
import { activated_user, activated_user_like } from '../../lib/variable'
import { antblue050, grey030, grey080 } from '../../lib/styles/colors'
import { useHistory } from 'react-router-dom'
import useGetRoutePath from '../feed2/hooks/useGetPath'

type Prop = {
  user: User
}

export default function UserTab({ user }: Prop) {
  const pathname = useGetRoutePath()
  const history = useHistory()

  return (
    <Wrapper>
      <Group
        isClicked={pathname === activated_user}
        onClick={() => history.push(`/user/${user.nickname}/profile`)}
      >
        <Count>{user.userCount.postCount}</Count>
        <Title>활동내역</Title>
      </Group>
      <Group
        isClicked={pathname === activated_user_like}
        onClick={() => history.push(`/user/${user.nickname}/profile/like`)}
      >
        <Count>{user.userCount.postLikeCount}</Count>
        <Title>좋아하는 게시물</Title>
      </Group>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  margin-top: 25px;
`

const Group = styled.div<{ isClicked: boolean }>`
  width: 100%;
  border-bottom: ${(p) =>
    p.isClicked ? `2px solid ${antblue050}` : `1px solid ${grey030}`};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: ${grey080};
  cursor: pointer;
`
const Count = styled.div``

const Title = styled.div`
  font-weight: 400;
  padding-top: 1px;
  padding-bottom: 11px;
`
