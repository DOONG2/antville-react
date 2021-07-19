import styled from '@emotion/styled'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { User } from '../../api/types'
import usePutFollow from '../../hooks/usePutFollow'
import { useRootState } from '../../hooks/useRootState'
import { antblue050, grey010 } from '../../mds/styled/colors'
import viewSlice from '../../reducers/Slices/view'

type Prop = {
  user: User
}

const ButtonWrapper = styled.div``

const FollowButton = styled.div<{ isFollowing: boolean }>`
  margin-top: 24px;
  padding: 4px 22px;
  background-color: ${(p) => (p.isFollowing ? grey010 : antblue050)};
  border: 1px solid ${antblue050};
  border-radius: 3px;

  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-align: center;

  color: ${(p) => (p.isFollowing ? antblue050 : grey010)};

  cursor: pointer;
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
`

export default function SectionButtonComponent({ user }: Prop) {
  const { user: loginUser } = useRootState((state) => state)
  const { setIsOpenLoginForm } = viewSlice.actions
  const history = useHistory()
  const dispatch = useDispatch()
  const { putFollowApi, deleteFollowApi } = usePutFollow()

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
              else if (isFollowing) deleteFollowApi(user.id)
              else putFollowApi(user.id)
              setIsFollowing(!isFollowing)
            }}
          >
            {isFollowing ? '팔로잉' : '팔로우'}
          </FollowButton>
        )}
      </ButtonWrapper>
    </>
  )
}
