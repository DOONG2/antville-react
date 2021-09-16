import styled from '@emotion/styled'
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

import { antblue050, grey080 } from '../../../lib/styles/colors'
import HeaderDownloadDropDown from './HeaderDownloadDropDown'

function DeskTopHeader() {
  const user = useRootState((state) => state.user)
  const {
    setIsOpenLoginForm,
    setIsOpenSignUpForm,
    setIsOpenProfileDropDown,
    setIsOpenNoticeDropDown,
    setIsOpenDownloadDropDown,
  } = viewSlice.actions
  const {
    isOpenProfileDropDown,
    isOpenNoticeDropDown,
    isOpenDownloadDropDown,
  } = useRootState((state) => state.view)
  const dispatch = useDispatch()
  const history = useHistory()

  const DownloadRef = useOnClickOutside({
    close: () => {
      dispatch(setIsOpenDownloadDropDown(false))
    },
    isOpen: isOpenDownloadDropDown,
  })
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

  const { height } = useElementSize(IconWrapperRef)
  const { height: downloadHeight } = useElementSize(DownloadRef)

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
          <DownLoadButtonWrapper
            onClick={() => {
              dispatch(setIsOpenDownloadDropDown(!isOpenDownloadDropDown))
            }}
            ref={DownloadRef}
          >
            <DropDown
              shown={isOpenDownloadDropDown}
              parentHeight={downloadHeight}
              placement={'Center'}
            >
              <HeaderDownloadDropDown />
            </DropDown>
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
  position: relative;
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
