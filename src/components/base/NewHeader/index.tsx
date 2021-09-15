import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useMediaQuery } from 'react-responsive'
import viewSlice from '../../../reducers/Slices/view'
import AuthLoginForm from '../../auth/AuthLoginForm'
import AuthSignUpForm from '../../auth/AuthSignUpForm'
import { useRootState } from '../../common/hooks/useRootState'
import Modal from '../../common/FormModal'
import DeskTopHeader from './DeskTopHeader'
import MobileHeader from './MoblieHeader'

function Header() {
  const isMobile = useMediaQuery({ maxWidth: 1024 })
  const { isOpenLoginForm, isOpenSignUpForm } = useRootState(
    (state) => state.view
  )
  const dispatch = useDispatch()
  const { setIsOpenLoginForm, setIsOpenSignUpForm } = viewSlice.actions
  const modalParentRef = useRef<HTMLDivElement>(null)
  return (
    <>
      {isMobile ? <MobileHeader /> : <DeskTopHeader />}
      <Modal
        modalParentRef={modalParentRef}
        shown={isOpenLoginForm}
        width="447px"
        height="541px"
        close={() => {
          dispatch(setIsOpenLoginForm(false))
        }}
      >
        <AuthLoginForm />
      </Modal>

      <Modal
        modalParentRef={modalParentRef}
        shown={isOpenSignUpForm}
        width="447px"
        height="774px"
        close={() => {
          dispatch(setIsOpenSignUpForm(false))
        }}
      >
        <AuthSignUpForm />
      </Modal>
      {/* <Modal
                modalParentRef={modalParentRef}
                shown={isOpenFindPasswordForm}
                width="447px"
                height="468px"
                close={() => {
                  dispatch(setIsOpenFindPasswordForm(false))
                }}
              >
                <FindPasswordForm />
              </Modal> */}
    </>
  )
}

export default Header
