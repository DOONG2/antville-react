import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'
import CalendarIcon from '../../static/svg/CalendarIcon'
import { useRootState } from '../common/hooks/useRootState'
import viewSlice from '../../reducers/Slices/view'
import MonthDate from '../common/MomentMonthDate'
import UserTopRightButton from './UserTopRightButton'
import { grey050, grey080 } from '../../lib/styles/colors'
import Modal from '../common/FormModal'
import FollowingList from './UserFollowingList'
import UserFollowerList from './UserFollowerList'
import { useRef } from 'react'
import UserIcon133 from '../../static/svg/UserIcon133'
import { User } from '../../lib/api/types'
import optimizeImage from '../../lib/utils/optimizeImage'

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
        <Info>
          <UserAvatar>
            {user.profileImg ? (
              <img
                src={optimizeImage(user.profileImg, 120)}
                alt="profile_image"
              />
            ) : (
              <UserIcon133 />
            )}
          </UserAvatar>
          <UserDetail>
            <Nickname>{user.nickname}</Nickname>
            <JoinDate>
              <CalendarIcon />
              <DateText>
                <MonthDate time={user.createdAt} />
                {`에 가입`}
              </DateText>
            </JoinDate>
            <FollowWrapper>
              <Following
                onClick={() => {
                  dispatch(setIsOpenFollowingModal(true))
                }}
              >
                {`${user.userCount.following}  팔로잉`}
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
                <ModalTitle>팔로잉</ModalTitle>
                <FollowingList user={user} modalParentRef={modalParentRef} />
              </Modal>
              <Follower
                onClick={() => dispatch(setIsOpenFollwerModal(true))}
              >{`${user.userCount.followers}  팔로워`}</Follower>
              <Modal
                modalParentRef={modalParentRef}
                shown={isOpenFollwerModal}
                width="448px"
                height="557px"
                close={() => {
                  dispatch(setIsOpenFollwerModal(false))
                }}
              >
                <ModalTitle>팔로워</ModalTitle>
                <UserFollowerList user={user} modalParentRef={modalParentRef} />
              </Modal>
            </FollowWrapper>
          </UserDetail>
        </Info>
        <UserTopRightButton user={user} />
      </Wrapper>
      <Introduction>{user.bio}</Introduction>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const UserAvatar = styled.div`
  width: 133px;
  height: 133px;
  border-radius: 50%;

  img {
    width: 133px;
    height: 133px;

    border-radius: 50%;
  }
`

const Info = styled.div`
  display: flex;
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
  margin-top: 18px;

  display: flex;
  align-items: center;
`

const FollowWrapper = styled.div`
  display: flex;
  column-gap: 14px;
  margin-top: 10px;

  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: ${grey080};
`

const DateText = styled.div`
  font-weight: 500;
  font-size: 16px;
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
  font-size: 14px;
  line-height: 140%;

  color: ${grey080};
  margin-top: 15px;
`

const ModalTitle = styled.div`
  position: absolute;
  top: 27px;
  left: 196px;

  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  text-align: center;

  color: ${grey080};
`
