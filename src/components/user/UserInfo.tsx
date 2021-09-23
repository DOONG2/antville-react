import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'
import CalendarIcon from '../../static/svg/CalendarIcon'
import { useRootState } from '../common/hooks/useRootState'
import viewSlice from '../../reducers/Slices/view'
import MonthDate from '../common/MomentMonthDate'
import UserTopRightButton from './UserTopRightButton'
import { grey020, grey050, grey080 } from '../../lib/styles/colors'
import Modal from '../common/FormModal'
import UserFollowingList from './UserFollowingList'
import UserFollowerList from './UserFollowerList'
import { useRef } from 'react'
import UserIcon100 from '../../static/svg/UserIcon100'
import { User } from '../../lib/api/types'
import optimizeImage from '../../lib/utils/optimizeImage'
import { AvatarImage } from '../../lib/styles/post'
import media from '../../lib/styles/media'

type Props = {
  user: User
}

export default function UserInfo({ user }: Props) {
  const { isOpenFollowingModal, isOpenFollwerModal } = useRootState(
    (state) => state.view
  )
  const { setIsOpenFollowingModal, setIsOpenFollwerModal } = viewSlice.actions
  const dispatch = useDispatch()

  const modalParentRef = useRef<HTMLDivElement>(null)

  if (!user) return <></>

  return (
    <>
      <Wrapper>
        <Inner>
          <Info>
            <UserAvatar>
              {user.profileImg ? (
                <AvatarImage
                  src={optimizeImage(user.profileImg, 120)}
                  alt="profile_image"
                />
              ) : (
                <UserIcon100 />
              )}
            </UserAvatar>
            <UserDetail>
              <Nickname>{user.nickname}</Nickname>
              <FollowWrapper>
                <Following
                  onClick={() => {
                    dispatch(setIsOpenFollowingModal(true))
                  }}
                >
                  <Bold>{user.userCount.following}</Bold>
                  팔로잉
                </Following>
                <Modal
                  modalParentRef={modalParentRef}
                  shown={isOpenFollowingModal}
                  width="448px"
                  height="557px"
                  close={() => {
                    dispatch(setIsOpenFollowingModal(false))
                  }}
                >
                  <UserFollowingList
                    user={user}
                    modalParentRef={modalParentRef}
                  />
                </Modal>
                <Follower onClick={() => dispatch(setIsOpenFollwerModal(true))}>
                  <Bold>{user.userCount.followers}</Bold>
                  팔로워
                </Follower>
                <Modal
                  modalParentRef={modalParentRef}
                  shown={isOpenFollwerModal}
                  width="448px"
                  height="557px"
                  close={() => {
                    dispatch(setIsOpenFollwerModal(false))
                  }}
                >
                  <UserFollowerList
                    user={user}
                    modalParentRef={modalParentRef}
                  />
                </Modal>
              </FollowWrapper>
            </UserDetail>
          </Info>
          <UserTopRightButton user={user} />
        </Inner>
        <JoinDate>
          <CalendarIcon />
          <DateText>
            <MonthDate time={user.createdAt} />
            {`에 가입`}
          </DateText>
        </JoinDate>
        <Introduction>{user.bio}</Introduction>
      </Wrapper>
    </>
  )
}

const Bold = styled.div`
  display: inline;
  font-weight: bold;
  margin-right: 6.5px;
`

const Wrapper = styled.div`
  padding: 26px 33px 36px 33px;
`

const Inner = styled.div`
  display: flex;
  ${media.medium} {
    flex-direction: column;
  }
`

const UserAvatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;

  img {
    width: 100px;
    height: 100px;
    border: 0.5px solid ${grey020};
    border-radius: 50%;
  }
`

const Info = styled.div`
  display: flex;
  width: 100%;
`

const UserDetail = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  margin-left: 26px;
`

const Nickname = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 19px;

  color: ${grey080};
`

const JoinDate = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
`

const FollowWrapper = styled.div`
  display: flex;
  column-gap: 14px;
  margin-top: 16px;

  font-size: 20px;
  line-height: 24px;

  color: ${grey080};
`

const DateText = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;

  color: ${grey050};

  margin-left: 8px;
`

const Following = styled.div`
  display: flex;
  cursor: pointer;
`

const Follower = styled.div`
  display: flex;
  cursor: pointer;
`

const Introduction = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 160%;

  color: ${grey080};
  margin-top: 12px;
`
