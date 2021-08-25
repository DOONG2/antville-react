import styled from '@emotion/styled'
import PostStock from '../../../lib/models/post_stock'
import { SignIcon } from '../../stock/SignIcon'

type Props = {
  postStock: PostStock
}

export default function FeedHistoryComponent({ postStock }: Props) {
  return (
    <PaddingWrapper>
      <Wrapper color={postStock.backgroundColor}>
        <VerticleLine color={postStock.textColor} />
        <InnerWrapper>
          <LeftItem>
            <div>{postStock.name}</div>
            <StockPriceText color={postStock.textColor}>
              <SignIcon sign={postStock.sign} />
              <MarginWrapper>{`${postStock.change} (${postStock.changePercent}%) `}</MarginWrapper>
            </StockPriceText>
          </LeftItem>
          <RightItem>
            <PrePrice>{`그때는 ${postStock.thenPrice}`}</PrePrice>
            <NowPrice>{`지금은 ${postStock.nowPrice}`}</NowPrice>
          </RightItem>
        </InnerWrapper>
      </Wrapper>
    </PaddingWrapper>
  )
}

const PaddingWrapper = styled.div`
  padding: 0 22px;
  width: 100%;
`

const Wrapper = styled.div`
  width: 100%;
  padding: 10px 21px;
  background-color: ${(props) => props.color};
  border-radius: 8px;

  display: flex;
`

const VerticleLine = styled.div`
  width: 3px;
  background-color: ${(props) => props.color};
  border-radius: 8px;
`

const InnerWrapper = styled.div`
  width: 100%;
  margin-left: 13px;
  display: flex;
  justify-content: space-between;
`

const LeftItem = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  color: #000000;
  display: grid;
`

const RightItem = styled.div`
  font-size: 14px;
  line-height: 20px;

  text-align: right;

  color: #646464;
  display: grid;
`

const StockPriceText = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.color};

  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  margin-top: 7px;
`

const MarginWrapper = styled.div`
  margin-left: 4.6px;
`

const PrePrice = styled.div``

const NowPrice = styled.div`
  margin-top: 6px;
`
