import styled from '@emotion/styled'
import useAuth from '../../hooks/useAuth'

interface Props {
  close: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const Group = styled.div`
  width: 118px;
`

const Item = styled.div`
  height: 34px;
  border-bottom: 0.5px solid #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 13px;
  line-height: 18px;

  color: #202020;
  cursor: pointer;
`

const FontRed = styled.div`
  display: inline;
  color: #fa4a61;
`

const ProfileDropDown = ({ close }: Props) => {
  const { logout } = useAuth()

  return (
    <Group onClick={close}>
      <Item>프로필 보기</Item>
      <Item>프로필 편집</Item>
      <Item>사용자 설정</Item>
      <Item>
        <FontRed
          onClick={() => {
            logout()
          }}
        >
          로그아웃
        </FontRed>
      </Item>
    </Group>
  )
}

export default ProfileDropDown
