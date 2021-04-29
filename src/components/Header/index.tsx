import styled from '@emotion/styled'
import { LoginButton, SignUpButton } from '../../mds/theme/buttons'
import SignUpForm from '../Form/SignUpForm'
import LoginForm from '../Form/LoginForm'
import FindPasswordForm from '../Form/FindPasswordForm'
import Modal from '../../mds/Modal'
import { useRootState } from '../../hooks/useRootState'
import viewSlice from '../../reducers/Slices/view'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import SerchBar from '../SearchBar'
import LogoWithIcon from '../../assets/svg/LogoWithIcon'

const Wrapper = styled.div`
  min-width: 144rem;
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

const ButtonWrapper = styled.div``

const NewLoginButton = styled(LoginButton)`
  margin-left: 1.6rem;
`

const NewSignUpButton = styled(SignUpButton)`
  margin-left: 1.6rem;
`

function Header() {
  const {
    setIsOpenLoginForm,
    setIsOpenSignUpForm,
    setIsOpenFindPasswordForm,
  } = viewSlice.actions
  const {
    isOpenLoginForm,
    isOpenSignUpForm,
    isOpenFindPasswordForm,
  } = useRootState((state) => state.view)
  const dispatch = useDispatch()
  const history = useHistory()

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
            shown={isOpenLoginForm}
            width="44.7rem"
            height="54.1rem"
            close={() => {
              dispatch(setIsOpenLoginForm(false))
            }}
          >
            <LoginForm />
          </Modal>
          <NewSignUpButton onClick={() => dispatch(setIsOpenSignUpForm(true))}>
            가입하기
          </NewSignUpButton>
          <Modal
            shown={isOpenSignUpForm}
            width="44.7rem"
            height="77.4rem"
            close={() => {
              dispatch(setIsOpenSignUpForm(false))
            }}
          >
            <SignUpForm />
          </Modal>
          <Modal
            shown={isOpenFindPasswordForm}
            width="44.7rem"
            height="46.8rem"
            close={() => {
              dispatch(setIsOpenFindPasswordForm(false))
            }}
          >
            <FindPasswordForm />
          </Modal>
        </ButtonWrapper>
      </HeaderWrapper>
    </Wrapper>
  )
}

export default Header
