import styled from '@emotion/styled'
import { SocialStoreButton } from '../theme/buttons'
import GooglePlayLogo from '../../assets/svg/GooglePlayLogo'
import GooglePlayLabel from '../../assets/svg/GooglePlayLabel'

const Wrapper = styled(SocialStoreButton)`
  width: 13.5rem;
`

const GooglePlayButton = () => {
  return (
    <Wrapper>
      <GooglePlayLogo />
      <GooglePlayLabel />
    </Wrapper>
  )
}

export default GooglePlayButton
