import styled from '@emotion/styled'
import useStockPopularQuery from './hooks/useStockPopularQuery'
import { PopularStockGroup } from './PopularStockGroup'

function PopularStock() {
  const { data } = useStockPopularQuery()

  if (data === undefined) return <></>

  const { stocks } = data

  return (
    <Wrapper>
      <BarWrapper>
        <LabelWrapper>
          <Label>실시간 인기 종목</Label>
          <IconWrapper></IconWrapper>
        </LabelWrapper>
        <Group>
          <LeftSpan />
          <Inner length={stocks.length}>
            {[...stocks, ...stocks].map((stock, index) => (
              <PopularStockGroup
                key={`${index}-stock-bar-popular`}
                stock={stock}
              />
            ))}
          </Inner>
          <RightSpan />
        </Group>
      </BarWrapper>
    </Wrapper>
  )
}

const IconWrapper = styled.div`
  margin-top: 1px;
  cursor: pointer;
  display: flex;
  align-items: center;
`

const Wrapper = styled.div`
  border-bottom: 0.5px solid #e0e0e0;
  background-color: #fff;
  width: 100%;
`

const BarWrapper = styled.div`
  display: flex;
  max-width: 144rem;
  padding: 0 2.4rem;
  height: 5.6rem;
  margin: 0 auto;
  align-items: center;
`

const Label = styled.div`
  color: rgba(117, 117, 117, 1);
  font-size: 1.6rem;
  font-weight: 700;
  margin-top: 0.02rem;
`

const LabelWrapper = styled.div`
  margin-right: 3rem;
  display: flex;
  column-gap: 1.4rem;
  align-items: center;
  white-space: nowrap;
`

const Group = styled.div`
  display: flex;
  position: relative;
  margin-top: 0.25rem;

  overflow: hidden;
`

const Inner = styled.div<{ length: number }>`
  position: relative;
  z-index: 1;
  display: flex;

  ${(p) =>
    `transition: transform ${p.length * 6}s linear 0s, -webkit-transform ${
      p.length * 6
    }s linear 0s;
  animation: ${p.length * 6}s linear 0s infinite normal none running slidein;

  
  @keyframes slidein {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }

  :hover {
    animation-play-state: paused;
  }`}
`

const RightSpan = styled.div`
  display: none;
  position: absolute;
  height: 100%;
  z-index: 2;
  right: -1px;
  top: 0px;
  width: 5rem;
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0),
    rgb(255, 255, 255)
  );
`

const LeftSpan = styled(RightSpan)`
  left: -1px;
  background-image: linear-gradient(
    90deg,
    rgb(255, 255, 255),
    rgba(255, 255, 255, 0)
  );
`

export default PopularStock
