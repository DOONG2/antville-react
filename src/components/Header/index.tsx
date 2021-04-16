import React, { useRef } from 'react'
import styled from '@emotion/styled'
import { LoginButton, SignUpButton } from '../../mds/theme/buttons'
import SignUpForm from '../Form/SignUpForm'
import LoginForm from '../Form/LoginForm'
import Modal from '../../mds/Modal'
import { useRootState } from '../../hooks/useRootState'
import viewSlice from '../../reducers/Slices/view'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import SerchBar from '../SearchBar'
import LogoWithIcon from '../../assets/svg/LogoWithIcon'
import useHandleClickOutside from '../../hooks/useHandleClickOutside'

const Wrapper = styled.div`
  width: 100%;
  border-bottom: 0.5px solid #e0e0e0;
`

const HeaderWrapper = styled.nav`
  width: 144rem;
  height: 11.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5rem;
  margin: 0 auto;
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

const LogoTitle = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 2.4rem;
  line-height: 2.8rem;
  padding: 0.3rem;

  color: #202020;
`

const ButtonWrapper = styled.div``

const NewLoginButton = styled(LoginButton)`
  margin-left: 1.6rem;
`

const NewSignUpButton = styled(SignUpButton)`
  margin-left: 1.6rem;
`

export type HeaderProps = {}

function Header({}: HeaderProps) {
  const { setIsOpenLoginForm, setIsOpenSignUpForm } = viewSlice.actions
  const { isOpenLoginForm, isOpenSignUpForm } = useRootState(
    (state) => state.view
  )
  const dispatch = useDispatch()
  const history = useHistory()

  const loginRef = useRef<HTMLElement>(null)
  const signUpRef = useRef<HTMLElement>(null)

  useHandleClickOutside(loginRef)
  useHandleClickOutside(signUpRef)

  return (
    <Wrapper>
      <HeaderWrapper>
        <LogoWrapper onClick={() => history.push('/')}>
          <LogoWithIcon />
        </LogoWrapper>
        <SerchBar />
        <ButtonWrapper>
          <NewLoginButton onClick={() => dispatch(setIsOpenLoginForm(true))}>
            로그인
          </NewLoginButton>
          <Modal
            isOpen={isOpenLoginForm}
            width="44.7rem"
            height="54.1rem"
            setOpen={setIsOpenLoginForm}
            ref={loginRef}
          >
            <LoginForm />
          </Modal>
          <NewSignUpButton onClick={() => dispatch(setIsOpenSignUpForm(true))}>
            가입하기
          </NewSignUpButton>
          <Modal
            isOpen={isOpenSignUpForm}
            width="44.7rem"
            height="77.4rem"
            setOpen={setIsOpenSignUpForm}
            ref={signUpRef}
          >
            <SignUpForm />
          </Modal>
        </ButtonWrapper>
      </HeaderWrapper>
    </Wrapper>
  )
}

export default Header
