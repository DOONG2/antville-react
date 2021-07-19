import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'
import { User } from '../../api/types'
import getUserFollower from '../../api/user/getUserFollower'
import getUserFollowing from '../../api/user/getUserFollowing'
import CalendarIcon from '../../assets/svg/CalendarIcon'
import { useRootState } from '../../hooks/useRootState'
import Modal from '../../mds/Modal'
import { grey050, grey060, grey080 } from '../../mds/styled/colors'
import viewSlice from '../../reducers/Slices/view'
import MonthDate from './MonthDate'
import SectionButtonComponent from './SectionButtonComponent'
import UserFollowComponent from './UserFollowComponent'

type Prop = {
  user: User
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const UserAvatar = styled.div`
  width: 133px;
  height: 133px;

  border-radius: 50%;
  background-color: ${grey060};
`

const UserInfo = styled.div`
  display: flex;
`

const UserDetail = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  margin-left: 26px;
`

const Nickname = styled.div`
  font-family: Roboto;
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

  font-family: Roboto;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: ${grey080};
`

const DateText = styled.div`
  font-family: Roboto;
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

export default function UserSection({ user }: Prop) {
  const {
    view: { isOpenFollowingModal, isOpenFollwerModal },
  } = useRootState((state) => state)
  const { setIsOpenFollowingModal, setIsOpenFollwerModal } = viewSlice.actions
  const dispatch = useDispatch()

  return (
    <>
      <Wrapper>
        <UserInfo>
          <UserAvatar></UserAvatar>
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
                shown={isOpenFollowingModal}
                width="448px"
                height="557px"
                close={() => {
                  dispatch(setIsOpenFollowingModal(false))
                }}
              >
                <ModalTitle>팔로잉</ModalTitle>
                <UserFollowComponent
                  callback={(cursor) => getUserFollowing(user.id, cursor)}
                  cachingKey={`${user.id}-following`}
                />
              </Modal>
              <Follower
                onClick={() => dispatch(setIsOpenFollwerModal(true))}
              >{`${user.userCount.followers}  팔로워`}</Follower>
              <Modal
                shown={isOpenFollwerModal}
                width="448px"
                height="557px"
                close={() => {
                  dispatch(setIsOpenFollwerModal(false))
                }}
              >
                <ModalTitle>팔로워</ModalTitle>
                <UserFollowComponent
                  callback={(cursor) => getUserFollower(user.id, cursor)}
                  cachingKey={`${user.id}-follower`}
                />
              </Modal>
            </FollowWrapper>
          </UserDetail>
        </UserInfo>
        <SectionButtonComponent user={user} />
      </Wrapper>
      <Introduction>{user.bio}</Introduction>
    </>
  )
}
