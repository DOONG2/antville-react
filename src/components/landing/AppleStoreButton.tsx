import styled from '@emotion/styled'
import AppleStoreLogo from '../../static/svg/AppleStoreLogo'
import AppleStoreLabel from '../../static/svg/AppleStoreLabel'
import { SocialStoreButton } from '../../lib/styles/buttons'

const AppleStoreButton = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <AppleStoreLogo />
      </LogoWrapper>
      <AppleStoreLabel />
    </Wrapper>
  )
}

const Wrapper = styled(SocialStoreButton)``

const LogoWrapper = styled.div`
  height: 2.4rem;
`

export default AppleStoreButton
