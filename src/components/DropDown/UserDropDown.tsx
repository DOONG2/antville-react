import styled from '@emotion/styled'
import { useHistory } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { useRootState } from '../../hooks/useRootState'

interface Props {
  close: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
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

const UserDropDown = ({ close }: Props) => {
  const { user } = useRootState((state) => state)

  if (!user) return <></>

  return <Group onClick={close}>ddd</Group>
}

export default UserDropDown
