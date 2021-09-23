import styled from '@emotion/styled'
import { useHistory } from 'react-router'
import { grey020, grey080, sky010 } from '../../../lib/styles/colors'
import { AvatarImage } from '../../../lib/styles/post'
import optimizeImage from '../../../lib/utils/optimizeImage'
import UserIcon79 from '../../../static/svg/UserIcon79'
import useAuth from '../../auth/hooks/useAuth'
import { useRootState } from '../../common/hooks/useRootState'

export default function DrawerHamburger() {
  const user = useRootState((state) => state.user)
  const { logout } = useAuth()
  const history = useHistory()

  if (!user) return <></>

  return (
    <Block>
      <UserWrapper>
        <Avatar>
          {user?.profileImg ? (
            <AvatarImage
              src={optimizeImage(user.profileImg, 79)}
              alt="post_form_avatar"
            />
          ) : (
            <UserIcon79 />
          )}
        </Avatar>
        <UserName>{user.nickname}</UserName>
      </UserWrapper>
      <Group>
        <Item>알림</Item>
        <Item
          onClick={() => {
            history.push(`/user/${user.nickname}/profile`)
          }}
        >
          프로필 보기
        </Item>
        <Item onClick={() => history.push('/user/edit')}>프로필 편집</Item>
        <Item
          style={{ color: '#FA4A61' }}
          onClick={() => {
            logout()
          }}
        >
          로그아웃
        </Item>
      </Group>
    </Block>
  )
}

const Block = styled.div`
  padding: 25px;
`

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Avatar = styled.div`
  margin-top: 9px;

  cursor: pointer;

  & > img {
    width: 79px;
    height: 79px;
    border-radius: 79px;
    border: 0.5px solid ${grey020};
  }
`

const UserName = styled.div`
  margin-top: 9px;
  font-weight: 500;
  font-size: 18px;
  line-height: 123%;
  color: ${grey080};
  word-break: break-all;
  cursor: pointer;
`

const Item = styled.div`
  font-size: 16px;
  padding: 15px 0;
  line-height: 170%;
  cursor: pointer;

  :hover {
    background-color: ${sky010};
  }
`

const Group = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
