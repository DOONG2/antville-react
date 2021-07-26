import styled from '@emotion/styled'
import { LoginButton, SignUpButton } from '../../lib/styles/buttons'
import AuthSignUpForm from '../auth/AuthSignUpForm'
import AuthLoginForm from '../auth/AuthLoginForm'
import FindPasswordForm from '../auth/AuthFindPasswordForm'
import { useRootState } from '../common/hooks/useRootState'
import viewSlice from '../../reducers/Slices/view'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import SearchBar from '../search/Search'
import LogoWithIcon from '../../static/svg/LogoWithIcon'
import useCheckLogin from '../common/hooks/useCheckLogin'
import NoticeIcon from '../../static/svg/NoticeIcon'
import ProfileIcon from '../../static/svg/ProfileIcon'
import useOnClickOutside from '../common/hooks/useOnClickOutside'
import useElementSize from '../common/hooks/useElementSize'
import React, { useRef } from 'react'
import HeaderUserDropDown from './HeaderUserDropDown'
import NoticeDropDown from './HeaderNoticeDropDown'
import DropDown from '../common/DropDown'
import Modal from '../common/Modal'

function Header() {
  const {
    setIsOpenLoginForm,
    setIsOpenSignUpForm,
    setIsOpenFindPasswordForm,
    setIsOpenProfileDropDown,
    setIsOpenNoticeDropDown,
  } = viewSlice.actions
  const {
    view: {
      isOpenLoginForm,
      isOpenSignUpForm,
      isOpenFindPasswordForm,
      isOpenProfileDropDown,
      isOpenNoticeDropDown,
    },
  } = useRootState((state) => state)
  const dispatch = useDispatch()
  const history = useHistory()
  const isLoggedIn = useCheckLogin()

  const ProfileRef = useOnClickOutside({
    close: () => {
      if (isOpenProfileDropDown) dispatch(setIsOpenProfileDropDown(false))
    },
    isOpen: isOpenProfileDropDown,
  })
  const NoticeRef = useOnClickOutside({
    close: () => {
      if (isOpenNoticeDropDown) dispatch(setIsOpenNoticeDropDown(false))
    },
    isOpen: isOpenNoticeDropDown,
  })

  const IconWrapperRef = useRef<HTMLDivElement>(null)
  const modalParentRef = useRef<HTMLDivElement>(null)

  const { height } = useElementSize(IconWrapperRef)

  return (
    <Wrapper>
      <HeaderWrapper isLoggedIn={isLoggedIn}>
        <LogoWrapper onClick={() => history.push('/')}>
          <LogoWithIcon />
        </LogoWrapper>
        <SearchBar />
        <ButtonWrapper>
          {isLoggedIn ? (
            <IconWrapper ref={IconWrapperRef}>
              <NoticeWrapper
                onClick={() =>
                  dispatch(setIsOpenNoticeDropDown(!isOpenNoticeDropDown))
                }
                ref={NoticeRef}
              >
                <NoticeIcon />
                <DropDown
                  shown={isOpenNoticeDropDown}
                  parentHeight={height}
                  placement={'Right'}
                >
                  <NoticeDropDown />
                </DropDown>
              </NoticeWrapper>
              <ProfileWrapper
                onClick={() =>
                  dispatch(setIsOpenProfileDropDown(!isOpenProfileDropDown))
                }
                ref={ProfileRef}
              >
                <ProfileIcon />
                <DropDown
                  shown={isOpenProfileDropDown}
                  parentHeight={height}
                  placement={'Right'}
                >
                  <HeaderUserDropDown
                    close={() => {
                      dispatch(setIsOpenProfileDropDown(false))
                    }}
                  />
                </DropDown>
              </ProfileWrapper>
            </IconWrapper>
          ) : (
            <>
              <NewLoginButton
                onClick={() => dispatch(setIsOpenLoginForm(true))}
              >
                로그인
              </NewLoginButton>
              <Modal
                modalParentRef={modalParentRef}
                shown={isOpenLoginForm}
                width="44.7rem"
                height="54.1rem"
                close={() => {
                  dispatch(setIsOpenLoginForm(false))
                }}
              >
                <AuthLoginForm />
              </Modal>
              <NewSignUpButton
                onClick={() => dispatch(setIsOpenSignUpForm(true))}
              >
                가입하기
              </NewSignUpButton>
              <Modal
                modalParentRef={modalParentRef}
                shown={isOpenSignUpForm}
                width="44.7rem"
                height="77.4rem"
                close={() => {
                  dispatch(setIsOpenSignUpForm(false))
                }}
              >
                <AuthSignUpForm />
              </Modal>
              <Modal
                modalParentRef={modalParentRef}
                shown={isOpenFindPasswordForm}
                width="44.7rem"
                height="46.8rem"
                close={() => {
                  dispatch(setIsOpenFindPasswordForm(false))
                }}
              >
                <FindPasswordForm />
              </Modal>
            </>
          )}
        </ButtonWrapper>
      </HeaderWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-width: 144rem;
  border-bottom: 0.5px solid #e0e0e0;
`

const HeaderWrapper = styled.nav<{ isLoggedIn: boolean }>`
  width: 144rem;
  height: 11.7rem;
  display: flex;
  justify-content: ${(props) =>
    props.isLoggedIn ? 'normal' : 'space-between'};
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
  margin-left: 3.4rem;
`

const NewSignUpButton = styled(SignUpButton)`
  margin-left: 1.6rem;
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;

  position: relative;
`

const NoticeWrapper = styled.div`
  margin-left: 2.6rem;
  cursor: pointer;
`

const ProfileWrapper = styled.div`
  margin-left: 2.6rem;
  cursor: pointer;
`

export default Header
