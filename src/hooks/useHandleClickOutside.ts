import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import viewSlice from '../reducers/Slices/view'
import { useRootState } from './useRootState'

const useHandleClickOutside = (ref: React.RefObject<HTMLElement>) => {
  const { isOpenLoginForm, isOpenSignUpForm } = useRootState(
    (state) => state.view
  )
  const { setIsOpenLoginForm, setIsOpenSignUpForm } = viewSlice.actions
  const dispatch = useDispatch()
  const { current } = ref

  const handleClickOutSide = (e: any): void => {
    if (!isOpenLoginForm && !isOpenSignUpForm) return
    if (!current?.contains(e.target)) {
      dispatch(setIsOpenLoginForm(false))
      dispatch(setIsOpenSignUpForm(false))
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleClickOutSide)
    return () => {
      window.removeEventListener('click', handleClickOutSide)
    }
  }, [isOpenLoginForm, isOpenSignUpForm])
}

export default useHandleClickOutside
