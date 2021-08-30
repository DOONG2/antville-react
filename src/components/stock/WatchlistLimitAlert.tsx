import styled from '@emotion/styled'
import { antpink050, grey040 } from '../../lib/styles/colors'
import AlertIcon from '../../static/svg/AlertIcon'

export default function WatchlistLimitAlert() {
  return (
    <Inner>
      <AlertIcon />
      <Text>관심종목은 20개까지 가능합니다.</Text>
    </Inner>
  )
}

const Inner = styled.div`
  width: 343px;
  height: 53px;
  background: ${antpink050};
  border-radius: 8px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 11px;
  box-shadow: 5px 5px 10px 0px ${grey040};
`

const Text = styled.div`
  font-size: 14px;
  line-height: 19px;
  font-weight: bold;
`
