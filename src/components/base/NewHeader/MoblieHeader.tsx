import styled from '@emotion/styled'
import MoblieSearchIcon from '../../../static/svg/MoblieSearchIcon'
import HeaderLogo from '../../../static/svg/HeaderLogo'
import { useHistory } from 'react-router-dom'
import DrawerIcon from '../../../static/svg/DrawerIcon'
import Drawer from '../../common/Drawer'
import useOnClickOutside from '../../common/hooks/useOnClickOutside'
import DrawerSideBar from './DrawerSideBar'
import HamburgerIcon from '../../../static/svg/HamburgerIcon'
import DrawerHamburger from './DrawerHamburger'
import { useDispatch } from 'react-redux'
import mobileViewSlice from '../../../reducers/Slices/mobileView'
import { useRootState } from '../../common/hooks/useRootState'
import SearchModal from '../../search/MobileSearchModal'
import Modal from '../../common/FormModal'
import { useRef } from 'react'

function MobileHeader() {
  const user = useRootState((state) => state.user)
  const history = useHistory()
  const dispatch = useDispatch()
  const { openLeftDrawer, openRightDrawer, openSearchModal, closeMoblieModal } =
    mobileViewSlice.actions
  const { isOpenLeftDrawer, isOpenRightDrawer, isOpenSearchModal } =
    useRootState((state) => state.mobileView)

  const drawerRef = useOnClickOutside({
    close: () => {
      dispatch(closeMoblieModal())
    },
    isOpen: isOpenLeftDrawer,
  })
  const modalParentRef = useRef<HTMLDivElement>(null)
  return (
    <Wrapper>
      <Modal
        modalParentRef={modalParentRef}
        shown={isOpenSearchModal}
        width="447px"
        height="541px"
        close={() => {
          dispatch(closeMoblieModal())
        }}
      >
        <SearchModal />
      </Modal>
      <IconGroup>
        <IconWrapper ref={drawerRef}>
          <DrawerIcon
            onClick={() => dispatch(openLeftDrawer())}
            cursor={'pointer'}
          />
          <Drawer
            side="left"
            shown={isOpenLeftDrawer}
            close={() => dispatch(closeMoblieModal())}
          >
            <DrawerSideBar />
          </Drawer>
        </IconWrapper>
        {user && <IconWrapper />}
      </IconGroup>
      <LogoWrapper
        onClick={() => {
          history.push('/')
        }}
      >
        <HeaderLogo width={'8.1rem'} height={'1.5rem'} />
      </LogoWrapper>
      <IconGroup>
        <IconWrapper>
          <MoblieSearchIcon onClick={() => dispatch(openSearchModal())} />
        </IconWrapper>
        {user && (
          <IconWrapper>
            <HamburgerIcon
              onClick={() => dispatch(openRightDrawer())}
              cursor={'pointer'}
            />

            <Drawer
              side="right"
              shown={isOpenRightDrawer}
              close={() => dispatch(closeMoblieModal())}
            >
              <DrawerHamburger />
            </Drawer>
          </IconWrapper>
        )}
      </IconGroup>
    </Wrapper>
  )
}

const IconGroup = styled.div`
  display: flex;
`

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
