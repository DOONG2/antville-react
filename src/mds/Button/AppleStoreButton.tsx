import styled from '@emotion/styled'
import AppleStoreLogo from '../../assets/svg/AppleStoreLogo'
import AppleStoreLabel from '../../assets/svg/AppleStoreLabel'
import { SocialStoreButton } from '../styled/buttons'

const Wrapper = styled(SocialStoreButton)``

const LogoWrapper = styled.div`
  height: 2.4rem;
`

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

export default AppleStoreButton
