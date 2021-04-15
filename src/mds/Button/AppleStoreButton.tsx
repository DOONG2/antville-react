import styled from '@emotion/styled'
import AppleStoreLogo from '../../assets/svg/AppleStoreLogo'
import AppleStoreLabel from '../../assets/svg/AppleStoreLabel'
import { SocialStoreButton } from '../theme/buttons'

const Wrapper = styled(SocialStoreButton)``

const AppleStoreButton = () => {
  return (
    <Wrapper>
      <AppleStoreLogo />
      <AppleStoreLabel />
    </Wrapper>
  )
}

export default AppleStoreButton
