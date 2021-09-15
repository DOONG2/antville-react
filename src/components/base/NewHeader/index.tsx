import { useMediaQuery } from 'react-responsive'
import DeskTopHeader from './DeskTopHeader'
import MobileHeader from './MoblieHeader'

function Header() {
  const isMobile = useMediaQuery({ maxWidth: 1024 })
  return isMobile ? <MobileHeader /> : <DeskTopHeader />
}

export default Header
