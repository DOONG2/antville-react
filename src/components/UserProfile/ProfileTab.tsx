import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'
import { User } from '../../api/types'
import { useRootState } from '../../hooks/useRootState'
import { activated_user, activated_user_like } from '../../lib/variable'
import { antblue050, grey030, grey080 } from '../../mds/styled/colors'
import feedSlice from '../../reducers/Slices/feed'

type Prop = {
  user: User
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
export default function ProfileTab({ user }: Prop) {
  const {
    feed: { activatedUseTab },
  } = useRootState((state) => state)
  const { setTabUser, setTabUserLike } = feedSlice.actions

  const dispatch = useDispatch()
  return (
    <Wrapper>
      <Group
        isClicked={activatedUseTab === activated_user}
        onClick={() => dispatch(setTabUser())}
      >
        <Count>{user.userCount.postCount}</Count>
        <Title>활동내역</Title>
      </Group>
      <Group
        isClicked={activatedUseTab === activated_user_like}
        onClick={() => dispatch(setTabUserLike())}
      >
        <Count>{user.userCount.postLikeCount}</Count>
        <Title>좋아하는 게시물</Title>
      </Group>
    </Wrapper>
  )
}
