import styled from '@emotion/styled'
import { useHistory } from 'react-router-dom'
import useAuth from '../auth/hooks/useAuth'
import { useRootState } from '../common/hooks/useRootState'

type Props = {
  close: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export default function HeaderUserDropDown({ close }: Props) {
  const user = useRootState((state) => state.user)
  const { logout } = useAuth()
  const history = useHistory()

  if (!user) return <></>

  return (
    <Group onClick={close}>
      <Item
        onClick={() => {
          history.push(`/user/${user.nickname}/profile`)
        }}
      >
        프로필 보기
      </Item>
      <Item onClick={() => history.push('/user/edit')}>프로필 편집</Item>
      {/* <Item>사용자 설정</Item> */}
      <Item
        onClick={() => {
          logout()
        }}
      >
        <FontRed>로그아웃</FontRed>
      </Item>
    </Group>
  )
}

const Group = styled.div`
  width: 118px;

  box-shadow: 0px 4px 14px rgba(32, 32, 32, 0.12),
    0px 1.6711px 5.84887px rgba(32, 32, 32, 0.0862625),
    0px 0.893452px 3.12708px rgba(32, 32, 32, 0.0715329),
    0px 0.500862px 1.75302px rgba(32, 32, 32, 0.06),
    0px 0.266004px 0.931014px rgba(32, 32, 32, 0.0484671),
    0px 0.11069px 0.387416px rgba(32, 32, 32, 0.0337375);
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
