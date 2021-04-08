import styled from '@emotion/styled'
import Logo from '../../assets/images/svg/Logo'
import SearchIcon from '../../assets/images/svg/SearchIcon'

const Wrapper = styled.div`
  width: 100%;
  border-bottom: 0.5px solid #e0e0e0;
`

const HeaderWrapper = styled.nav`
  width: 1140px;
  height: 117px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin: 0 auto;

  @media screen and (max-width: 1140px) {
    padding: 0 180px;
  }
`

const SerchBar = styled.div`
  width: 330px;
  height: 40px;
  position: relative;
`

const IconWrapper = styled.div`
  position: absolute;
  z-index: 2;
  top: 13px;
  left: 14px;
`

const SearchInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 40px 8px 40px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;

  background: #ffffff;
  border: 1px solid #bbbbbb;
  box-sizing: border-box;
  border-radius: 3px;

  color: #202020;

  ::placeholder {
    color: #aeaeae;
  }
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`

const LogoTitle = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 28px;
  padding: 3px;

  color: #202020;
`

const ButtonWrapper = styled.div``

const LoginButton = styled.button`
  width: 95px;
  height: 40px;
  margin-left: 16px;
  padding: 10px;

  background: #fafafa;
  color: #1942e0;
  border: 1px solid #1942e0;
  border-radius: 5px;

  font-family: Noto Sans;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
`

const SignUpButton = styled(LoginButton)`
  background: #1942e0;
  color: #fafafa;
  border: 1px solid #1942e0;
`

export type HeaderProps = {}

function Header({}: HeaderProps) {
  return (
    <Wrapper>
      <HeaderWrapper>
        <LogoWrapper>
          <Logo />
          <LogoTitle>앤트빌</LogoTitle>
        </LogoWrapper>
        <SerchBar>
          <IconWrapper>
            <SearchIcon />
          </IconWrapper>
          <SearchInput
            name="search"
            placeholder="키워드 혹은 @닉네임을 입력해주세요."
          />
        </SerchBar>
        <ButtonWrapper>
          <LoginButton>로그인</LoginButton>
          <SignUpButton>가입하기</SignUpButton>
        </ButtonWrapper>
      </HeaderWrapper>
    </Wrapper>
  )
}

export default Header
