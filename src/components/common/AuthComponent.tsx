import { useDispatch } from 'react-redux'
import viewSlice from '../../reducers/Slices/view'
import { useRootState } from './hooks/useRootState'

interface AuthComponentProps {
  children: React.ReactNode
  callback: () => void
}

export default function AuthComponent({
  children,
  callback,
}: AuthComponentProps) {
  const user = useRootState((state) => state.user)
  const { setIsOpenLoginForm } = viewSlice.actions
  const dispatch = useDispatch()
  const showLoginModal = () => {
    if (!user) dispatch(setIsOpenLoginForm(true))
    else callback()
  }
  return <div onClick={showLoginModal}>{children}</div>
}
