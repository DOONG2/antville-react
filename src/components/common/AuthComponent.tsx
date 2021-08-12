import { useDispatch } from 'react-redux'
import viewSlice from '../../reducers/Slices/view'
import useCheckLogin from './hooks/useCheckLogin'

interface AuthComponentProps {
  children: React.ReactNode
  callback: () => void
}

export default function AuthComponent({
  children,
  callback,
}: AuthComponentProps) {
  const isLoggedIn = useCheckLogin()
  const { setIsOpenLoginForm } = viewSlice.actions
  const dispatch = useDispatch()
  const showLoginModal = () => {
    if (!isLoggedIn) dispatch(setIsOpenLoginForm(true))
    else callback()
  }
  return <div onClick={showLoginModal}>{children}</div>
}
