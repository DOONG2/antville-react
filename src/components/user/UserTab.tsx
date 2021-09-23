import styled from '@emotion/styled'
import { User } from '../../lib/api/types'
import { activated_user_like } from '../../lib/variable'
import { antblue050, grey030, grey080 } from '../../lib/styles/colors'
import { useHistory } from 'react-router-dom'
import useGetRoutePath from '../feed/hooks/useGetPath'

type Prop = {
  user: User
}

export default function UserTab({ user }: Prop) {
  const pathname = useGetRoutePath()
  const history = useHistory()

  const isLikeFeed = pathname === activated_user_like

  return (
    <Wrapper>
      <Inner>
        <Group
          isClicked={!isLikeFeed}
          onClick={() => history.push(`/user/${user.nickname}/profile`)}
        >
          <Count>{user.userCount.postCount}</Count>
          <Title>활동내역</Title>
        </Group>
        <Group
          isClicked={isLikeFeed}
          onClick={() => history.push(`/user/${user.nickname}/profile/like`)}
        >
          <Count>{user.userCount.postLikeCount}</Count>
          <Title>좋아하는 게시물</Title>
        </Group>
        <Indicator
          style={{
            left: `${isLikeFeed ? `50%` : 0}`,
          }}
        />
      </Inner>
    </Wrapper>
  )
}

const Indicator = styled.div`
  width: 50%;
  height: 3px;
  background-color: ${antblue050};
  border-radius: 3px;
  position: absolute;
  bottom: 0px;
  transition: 0.25s left ease-in-out;
`

const Inner = styled.div`
  position: relative;
  display: flex;
  margin: 25px 0 0 0;
  padding-top: 22px;
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
