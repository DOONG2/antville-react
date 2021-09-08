import styled from '@emotion/styled'
import { User } from '../../lib/api/types'
import { activated_user, activated_user_like } from '../../lib/variable'
import { antblue050, grey030, grey080 } from '../../lib/styles/colors'
import { useHistory } from 'react-router-dom'
import useGetRoutePath from '../feed/hooks/useGetPath'

type Prop = {
  user: User
}

export default function UserTab({ user }: Prop) {
  const pathname = useGetRoutePath()
  const history = useHistory()

  return (
    <Wrapper>
      <Inner>
        <Group
          isClicked={pathname === activated_user}
          onClick={() => history.push(`/user/${user.nickname}/profile`)}
        >
          <Count>{user.userCount.postCount}</Count>
          <Title>활동내역</Title>
          <Line isClicked={pathname === activated_user} />
        </Group>
        <Group
          isClicked={pathname === activated_user_like}
          onClick={() => history.push(`/user/${user.nickname}/profile/like`)}
        >
          <Count>{user.userCount.postLikeCount}</Count>
          <Title>좋아하는 게시물</Title>
          <Line isClicked={pathname === activated_user_like} />
        </Group>
      </Inner>
    </Wrapper>
  )
}

const Line = styled.div<{ isClicked: boolean }>`
  visibility: ${(p) => (p.isClicked ? 'visible' : 'hidden')};
  width: 189px;
  height: 3px;
  background-color: ${antblue050};
  border-radius: 3px;
`

const Inner = styled.div`
  display: flex;
  margin: 25px 90px 0 90px;
  padding-top: 22px;
  column-gap: 158px;
`

const Wrapper = styled.div`
  border-bottom: 1px solid ${grey030};
`

const Group = styled.div<{ isClicked: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: ${(p) => (p.isClicked ? grey080 : grey030)};
  cursor: pointer;
`
const Count = styled.div`
  font-weight: bold;
  font-size: 20px;
  line-height: 19px;
`

const Title = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  margin-top: 7px;
  padding-bottom: 15px;
`
