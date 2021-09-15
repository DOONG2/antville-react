import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'
import viewSlice from '../../reducers/Slices/view'
import media from '../../lib/styles/media'

function Landing() {
  const { setIsOpenLoginForm, setIsOpenSignUpForm } = viewSlice.actions
  const dispatch = useDispatch()

  return (
    <Wrapper>
      <LandingWrapper>
        <LeftContainerWrapper>
          <h1>
            투자자를 위한
            <br />
            소셜네트워크 서비스, 앤트빌
          </h1>
          <h5>앤트빌의 주민이 되어 여러분의 투자 의견을 공유해주세요!</h5>
          <ButtonWrapper>
            <StyledLoginButton
              onClick={() => dispatch(setIsOpenLoginForm(true))}
            >
              로그인
            </StyledLoginButton>
            <SignUpButton onClick={() => dispatch(setIsOpenSignUpForm(true))}>
              가입하기
            </SignUpButton>
          </ButtonWrapper>
        </LeftContainerWrapper>
        <RightContainerWrapper>
          <MockUpVideo autoPlay loop playsInline muted>
            <source src="/videos/web_mockup.mp4" type="video/mp4" />
          </MockUpVideo>
        </RightContainerWrapper>
      </LandingWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  ${media.medium} {
    height: auto;
  }
`

const LandingWrapper = styled.div`
  max-width: 144rem;
  display: flex;
  height: calc(100% - 11.7rem - 6.8rem);
  justify-content: space-between;
  margin: 0 auto;
  ${media.medium} {
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: auto;
    margin: 0;
  }
`

const LeftContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2.5rem;
  margin-top: 18.4rem;
  height: 100%;
  & > h1 {
    font-weight: 700;
    font-size: 5.5rem;
    line-height: 8rem;
    color: #202020;
    ${media.medium} {
      font-size: 2.5rem;
      line-height: 3.7rem;
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }
  & > h5 {
    font-weight: 400;
    font-size: 2.4rem;
    line-height: 3rem;
    color: #757575;
    margin-top: 1.8rem;
    margin-bottom: 9.1rem;
    ${media.medium} {
      font-size: 1.4rem;
      line-height: 1.7rem;
      margin-bottom: 2.9rem;
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }
  ${media.medium} {
    width: 100%;
    margin-top: 3.7rem;
    height: auto;
    justify-content: center;
    margin-left: 0;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  row-gap: 2.2rem;
  ${media.medium} {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    column-gap: 1.63rem;
  }
`

const StyledLoginButton = styled.button`
  width: 45.1rem;
  height: 6.6rem;
  background: #ffffff;
  color: #1942e0;
  border: 1px solid #1942e0;
  border-radius: 5px;
  font-weight: 700;
  font-size: 2.1rem;
  line-height: 2.6rem;
  cursor: pointer;
  ${media.medium} {
    width: 12.4rem;
    height: 4.14rem;
    font-weight: 700;
    font-size: 1.3rem;
    line-height: 1.6rem;
  }
`

const SignUpButton = styled(StyledLoginButton)`
  background: #1942e0;
  color: #fafafa;
  border: 1px solid #1942e0;
`

const RightContainerWrapper = styled.div`
  display: flex;
  margin-top: 8.6rem;
  margin-right: 5rem;
  height: 100%;
  ${media.medium} {
    width: 100%;
    justify-content: center;
    height: auto;
    margin-top: 0;
  }
`

const MockUpVideo = styled.video`
  height: 78.2rem;
  max-height: 100%;
  ${media.medium} {
    width: 25.7rem;
    justify-content: center;
    height: auto;
    margin-top: 5rem;
  }
`
/* const Wrapper = styled.div`
  width: 1440px;
  padding: 0 120px;
  margin: 100px auto;

  display: flex;
  justify-content: space-between;
`

const ContentsWrapper = styled.div``

const MockUpVideo = styled.video`
  width: 395.3px;
  height: 825.6px;
`

const Title = styled.div`
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;

  margin-top: 110px;

  color: #202020;
`

const Description = styled.div`
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;

  color: #202020;
  margin-top: 45px;
`

const NewSignUpButton = styled(SignUpButton)`
  margin-top: 30px;
`

const NewFontBlue = styled(FontBlue)`
  font-size: 12px;
  cursor: pointer;
`

const BoldSubDescription = styled(SubDescription)`
  font-weight: 600;
  margin-top: 10px;
`

const StoreWrapper = styled.div`
  margin-top: 60px;
  display: flex;
  column-gap: 8px;
`

const NewAppleStoreButton = styled(AppleStoreButton)``

const NewGooglePlayButton = styled(GooglePlayButton)``

const GoogleWrapper = styled.div``

const AppleWrapper = styled.div`` */

export default Landing
