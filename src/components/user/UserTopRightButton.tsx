import styled from '@emotion/styled'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { User } from '../../lib/api/types'
import { useRootState } from '../common/hooks/useRootState'
import { antblue050, grey010 } from '../../lib/styles/colors'
import viewSlice from '../../reducers/Slices/view'
import { followEvent } from '../../lib/utils/ga'
import putFollow from '../../lib/api/user/putFollow'
import deleteFollow from '../../lib/api/user/deleteFollow'
import PeopleIcon from '../../static/svg/PeopleIcon'

type Prop = {
  user: User
}

export default function UserTopRightButton({ user }: Prop) {
  const loginUser = useRootState((state) => state.user)
  const { setIsOpenLoginForm } = viewSlice.actions
  const history = useHistory()
  const dispatch = useDispatch()

  const [isFollowing, setIsFollowing] = useState(user.isFollowing)
  return (
    <>
      <ButtonWrapper>
        {loginUser?.id === user.id && (
          <EditButton onClick={() => history.push('/user/edit')}>
            프로필 편집
          </EditButton>
        )}
        {loginUser?.id !== user.id && (
          <FollowButton
            isFollowing={isFollowing}
            onClick={() => {
              if (!loginUser) return dispatch(setIsOpenLoginForm(true))
              else if (isFollowing) deleteFollow(user.id)
              else {
                putFollow(user.id)
                followEvent(user.nickname)
              }
              setIsFollowing(!isFollowing)
            }}
          >
            <IconWrapper color={isFollowing ? antblue050 : '#fff'}>
              <PeopleIcon />
            </IconWrapper>
            {isFollowing ? '팔로잉' : '팔로우'}
          </FollowButton>
        )}
      </ButtonWrapper>
    </>
  )
}

const IconWrapper = styled.div<{ color: string }>`
  display: flex;
  align-items: center;

  g {
    fill: ${(p) => p.color};
  }

  path {
    fill: ${(p) => p.color};
  }
`

const ButtonWrapper = styled.div``

const FollowButton = styled.div<{ isFollowing: boolean }>`
  margin-top: 11px;
  padding: 9px 24px;
  background-color: ${(p) => (p.isFollowing ? grey010 : antblue050)};
  border: 1px solid ${antblue050};
  border-radius: 7px;

  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  text-align: center;

  color: ${(p) => (p.isFollowing ? antblue050 : grey010)};

  cursor: pointer;
  display: flex;
  align-items: center;
  column-gap: 5px;
`

const EditButton = styled.div`
  margin-top: 24px;
  padding: 4px 10px;

  background: #fafafa;

  border: 1px solid ${antblue050};
  border-radius: 3px;

  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: center;

  color: ${antblue050};

  cursor: pointer;
  white-space: nowrap;
`
