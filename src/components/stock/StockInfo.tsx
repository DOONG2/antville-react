import styled from '@emotion/styled'
import { grey080 } from '../../lib/styles/colors'
import AVStock from '../../lib/models/av_stock'
import { SignIcon } from './SignIcon'
import AddWatchlistComponent from './AddWatchlistComponent'

type Props = {
  avStock: AVStock
}

export default function StockInfo({ avStock }: Props) {
  return (
    <Wrapper>
      <Inner>
        <TopWrapper>{avStock.description}</TopWrapper>
        <TitleWrapper>
          <Ticker>{avStock.title}</Ticker>
          {avStock.hasPrice && (
            <>
              <Price>{avStock.latest}</Price>
              <LastItem>
                <Bottom>
                  <IconWrapper>
                    <SignIcon sign={avStock.sign} />
                  </IconWrapper>
                  <Rate color={avStock.textColor}>
                    {avStock.change} ({avStock.changePercent}%)
                  </Rate>
                </Bottom>
              </LastItem>
            </>
          )}
        </TitleWrapper>
      </Inner>
      <Inner>
        <AddWatchlistComponent avStock={avStock} />
      </Inner>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`

const Inner = styled.div`
  display: flex;
  flex-direction: column;
`

const TopWrapper = styled.div`
  font-family: Roboto;
  font-size: 12px;
  line-height: 14px;

  color: ${grey080};
`

const TitleWrapper = styled.div`
  display: flex;
  margin-top: 3px;
`

const Ticker = styled.div`
  font-family: Roboto;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;

  color: ${grey080};
`

const Price = styled.div`
  font-family: Roboto;
  font-weight: 500;
  font-size: 34px;
  line-height: 40px;
  margin-left: 5px;

  color: ${grey080};
`

const Rate = styled.div`
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;

  color: ${(props) => props.color};
  margin-left: 4px;
`

const IconWrapper = styled.div`
  margin-left: 10px;
`

const LastItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  margin-bottom: 6px;
`

// const Top = styled.div`
//   font-family: Roboto;
//   font-style: normal;
//   font-weight: normal;
//   font-size: 10px;
//   line-height: 12px;

//   color: ${grey070};
// `

const Bottom = styled.div`
  display: flex;
  align-items: center;
`
