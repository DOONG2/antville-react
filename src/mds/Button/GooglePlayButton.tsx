import styled from '@emotion/styled'
import { SocialStoreButton } from '../styled/buttons'
import GooglePlayLogo from '../../assets/svg/GooglePlayLogo'
import GooglePlayLabel from '../../assets/svg/GooglePlayLabel'

const Wrapper = styled(SocialStoreButton)``

const GooglePlayButton = () => {
  return (
    <Wrapper>
      <GooglePlayLogo />
      <GooglePlayLabel />
    </Wrapper>
  )
}

export default GooglePlayButton
