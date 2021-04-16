import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'
import MemoLogoOnlyText from '../../assets/svg/LogoOnlyText'
import AppleStoreButton from '../../mds/Button/AppleStoreButton'
import GooglePlayButton from '../../mds/Button/GooglePlayButton'

import { SignUpButton } from '../../mds/theme/buttons'
import { FontBlue, SubDescription } from '../../mds/theme/fonts'
import viewSlice from '../../reducers/Slices/view'

const Wrapper = styled.div`
  width: 144rem;
  padding: 0 12rem;
  margin: 10rem auto;

  display: flex;
  justify-content: space-between;
`

const ContentsWrapper = styled.div``

const MockUpVideo = styled.video`
  width: 39.53rem;
  height: 82.56rem;
`

const Title = styled.div`
  font-family: Roboto;
  font-weight: 700;
  font-size: 4.8rem;
  line-height: 5.6rem;

  margin-top: 11rem;

  color: #202020;
`

const Description = styled.div`
  font-weight: bold;
  font-size: 2rem;
  line-height: 2.7rem;

  color: #202020;
  margin-top: 4.5rem;
`

const NewSignUpButton = styled(SignUpButton)`
  margin-top: 3rem;
`

const NewFontBlue = styled(FontBlue)`
  font-size: 1.2rem;
  cursor: pointer;
`

const BoldSubDescription = styled(SubDescription)`
  font-weight: 600;
  margin-top: 1rem;
`

const StoreWrapper = styled.div`
  margin-top: 6rem;
  display: flex;
  column-gap: 0.8rem;
`

const NewAppleStoreButton = styled(AppleStoreButton)``

const Landing = () => {
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
          <GooglePlayButton />
          <NewAppleStoreButton />
        </StoreWrapper>
      </ContentsWrapper>
      <MockUpVideo autoPlay loop playsInline muted>
        <source src="/videos/web_mockup.mp4" type="video/mp4" />
      </MockUpVideo>
    </Wrapper>
  )
}

export default Landing
