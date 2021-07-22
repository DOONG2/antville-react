import styled from '@emotion/styled'
import GooglePlayLabel from '../../static/svg/GooglePlayLabel'
import GooglePlayLogo from '../../static/svg/GooglePlayLogo'
import { SocialStoreButton } from '../../lib/styles/buttons'

const GooglePlayButton = () => {
  return (
    <Wrapper>
      <GooglePlayLogo />
      <GooglePlayLabel />
    </Wrapper>
  )
}

const Wrapper = styled(SocialStoreButton)``

export default GooglePlayButton
