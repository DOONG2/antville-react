import styled from '@emotion/styled'
import MoblieSearchIcon from '../../../static/svg/MoblieSearchIcon'
import HeaderLogo from '../../../static/svg/HeaderLogo'
import { useHistory } from 'react-router-dom'
import DrawerIcon from '../../../static/svg/DrawerIcon'
import { useState } from 'react'
import Drawer from '../../common/Drawer'
import useOnClickOutside from '../../common/hooks/useOnClickOutside'
import DrawerSideBar from './DrawerSideBar'

function MobileHeader() {
  const history = useHistory()
  const [isOpenDrawer, setIsOpenDrawer] = useState(false)
  const drawerRef = useOnClickOutside({
    close: () => {
      setIsOpenDrawer(false)
    },
    isOpen: isOpenDrawer,
  })
  return (
    <Wrapper>
      <IconWrapper ref={drawerRef}>
        <DrawerIcon onClick={() => setIsOpenDrawer(true)} cursor={'pointer'} />
        <Drawer shown={isOpenDrawer} close={() => setIsOpenDrawer(false)}>
          <DrawerSideBar />
        </Drawer>
      </IconWrapper>
      <LogoWrapper
        onClick={() => {
          history.push('/')
        }}
      >
        <HeaderLogo width={'8.1rem'} height={'1.5rem'} />
      </LogoWrapper>
      <IconWrapper>
        <MoblieSearchIcon />
      </IconWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  border-top: 0.5px solid #e0e0e0;
  border-bottom: 0.5px solid #e0e0e0;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  justify-content: space-between;
`

const LogoWrapper = styled.div`
  cursor: pointer;
`

const IconWrapper = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default MobileHeader
