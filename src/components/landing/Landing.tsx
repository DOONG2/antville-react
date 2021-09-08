import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'
import MemoLogoOnlyText from '../../static/svg/LogoOnlyText'
import AppleStoreButton from './AppleStoreButton'
import GooglePlayButton from './GooglePlayButton'

import { SignUpButton } from '../../lib/styles/buttons'
import { FontBlue, SubDescription } from '../../lib/styles/texts'
import viewSlice from '../../reducers/Slices/view'
import { APPLE_STORE_LINK, GOOGLE_PLAYSTORE_LINK } from '../../lib/variable'

function Landing() {
  const { setIsOpenLoginForm, setIsOpenSignUpForm } = viewSlice.actions
  const dispatch = useDispatch()

  return (
    <Wrapper>
      <ContentsWrapper>
        <Title>
          <MemoLogoOnlyText />
        </Title>
        <Description>
          앤트빌의 주민이 되어
          <br />
          여러분의 투자 의견을 공유해주세요!
        </Description>
        <NewSignUpButton onClick={() => dispatch(setIsOpenSignUpForm(true))}>
          가입하기
        </NewSignUpButton>
        <BoldSubDescription>
          이미 계정이 있으신가요?{' '}
          <NewFontBlue onClick={() => dispatch(setIsOpenLoginForm(true))}>
            로그인하기
          </NewFontBlue>
        </BoldSubDescription>
        <StoreWrapper>
          <GoogleWrapper
            onClick={() => window.location.assign(GOOGLE_PLAYSTORE_LINK)}
          >
            <NewGooglePlayButton />
          </GoogleWrapper>
          <AppleWrapper
            onClick={() => window.location.assign(APPLE_STORE_LINK)}
          >
            <NewAppleStoreButton />
          </AppleWrapper>
        </StoreWrapper>
      </ContentsWrapper>
      <MockUpVideo autoPlay loop playsInline muted>
        <source src="/videos/web_mockup.mp4" type="video/mp4" />
      </MockUpVideo>
    </Wrapper>
  )
}

const Wrapper = styled.div`
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

const AppleWrapper = styled.div``

export default Landing
