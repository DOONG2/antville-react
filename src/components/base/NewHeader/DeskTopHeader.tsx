import styled from '@emotion/styled'
import AuthSignUpForm from '../../auth/AuthSignUpForm'
import AuthLoginForm from '../../auth/AuthLoginForm'
import { useRootState } from '../../common/hooks/useRootState'
import viewSlice from '../../../reducers/Slices/view'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import SearchBar from '../../search/Search'
import HeaderLogo from '../../../static/svg/HeaderLogo'
import NoticeIcon from '../../../static/svg/NoticeIcon'
import ProfileIcon from '../../../static/svg/ProfileIcon'
import useOnClickOutside from '../../common/hooks/useOnClickOutside'
import useElementSize from '../../common/hooks/useElementSize'
import { useRef } from 'react'
import HeaderUserDropDown from '../HeaderUserDropDown'
import HeaderNoticeDropDown from '../HeaderNoticeDropDown'
import DropdownIcon from '../../../static/svg/DropdownIcon'
import DropDown from '../../common/DropDown'
import Modal from '../../common/FormModal'
import { antblue050, grey080 } from '../../../lib/styles/colors'

function DeskTopHeader() {
  const user = useRootState((state) => state.user)
  const {
    setIsOpenLoginForm,
    setIsOpenSignUpForm,
    setIsOpenProfileDropDown,
    setIsOpenNoticeDropDown,
  } = viewSlice.actions
  const {
    isOpenLoginForm,
    isOpenSignUpForm,
    isOpenProfileDropDown,
    isOpenNoticeDropDown,
  } = useRootState((state) => state.view)
  const dispatch = useDispatch()
  const history = useHistory()

  const ProfileRef = useOnClickOutside({
    close: () => {
      dispatch(setIsOpenProfileDropDown(false))
    },
    isOpen: isOpenProfileDropDown,
  })
  const NoticeRef = useOnClickOutside({
    close: () => {
      dispatch(setIsOpenNoticeDropDown(false))
    },
    isOpen: isOpenNoticeDropDown,
  })

  const IconWrapperRef = useRef<HTMLDivElement>(null)
  const modalParentRef = useRef<HTMLDivElement>(null)

  const { height } = useElementSize(IconWrapperRef)

  return (
    <Wrapper>
      <HeaderWrapper>
        <LogoWrapper
          onClick={() => {
            history.push('/')
          }}
        >
          <HeaderLogo width={'19.1rem'} height={'3.6rem'} />
        </LogoWrapper>
        <SearchBar />
        <ButtonWrapper>
          <DownLoadButtonWrapper>
            <p>다운로드</p>
            <DropdownIcon />
          </DownLoadButtonWrapper>
          {user ? (
            <IconWrapper ref={IconWrapperRef}>
              <NoticeWrapper
                onClick={() => {
                  dispatch(setIsOpenNoticeDropDown(!isOpenNoticeDropDown))
                }}
                ref={NoticeRef}
              >
                <NoticeIcon />
                <DropDown
                  shown={isOpenNoticeDropDown}
                  parentHeight={height}
                  placement={'Center'}
                >
                  <HeaderNoticeDropDown id={user.id} />
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
                  placement={'Center'}
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
              <LoginTextButton
                onClick={() => dispatch(setIsOpenLoginForm(true))}
              >
                로그인
              </LoginTextButton>

              <SignUpTextButton
                onClick={() => dispatch(setIsOpenSignUpForm(true))}
              >
                가입하기
              </SignUpTextButton>

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
          )}
        </ButtonWrapper>
      </HeaderWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  border-bottom: 0.5px solid #e0e0e0;
  background-color: #ffffff;
`

const HeaderWrapper = styled.nav`
  max-width: 144rem;
  height: 10.5rem;
  display: flex;
  align-items: center;
  padding: 0 2.5rem;
  margin: 1.2rem auto 0 auto;
  justify-content: space-between;
`

const LogoWrapper = styled.div`
  cursor: pointer;
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`

const NoticeWrapper = styled.div`
  margin-left: 26px;
  cursor: pointer;
  position: relative;
`

const ProfileWrapper = styled.div`
  margin-left: 26px;
  cursor: pointer;
  position: relative;
`

const DownLoadButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  font-weight: bold;
  color: ${grey080};
  column-gap: 0.9rem;
  padding: 0.8rem;
  cursor: pointer;
`

const LoginTextButton = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${grey080};
  margin-left: 1.8rem;
  padding: 0.8rem;
  cursor: pointer;
`

const SignUpTextButton = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${antblue050};
  margin-left: 0.8rem;
  padding: 0.8rem;
  cursor: pointer;
`

export default DeskTopHeader
