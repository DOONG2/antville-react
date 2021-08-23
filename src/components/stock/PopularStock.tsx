import styled from '@emotion/styled'
import React, { useState } from 'react'
import userOptionStorage from '../../lib/optionStorage'
import { popularStockCountLimit } from '../../lib/variable'
import PauseIcon from '../../static/svg/PauseIcon'
import PlayIcon from '../../static/svg/PlayIcon'
import useStockPopularQuery from './hooks/useStockPopularQuery'
import { PopularStockGroup } from './PopularStockGroup'

function PopularStock() {
  const { isLoading, stocks } = useStockPopularQuery()
  const [isPause, setIsPause] = useState<boolean>(
    userOptionStorage.getIsPause()
  )

  if (!stocks) return <></>

  return (
    <Wrapper>
      <BarWrapper>
        <LabelWrapper isPause={isPause}>
          <Label>실시간 인기 종목</Label>
          <IconWrapper
            onClick={() => {
              setIsPause(!isPause)
              userOptionStorage.setIsPause(!isPause)
            }}
          >
            {isPause ? <PlayIcon /> : <NewPauseIcon />}
          </IconWrapper>
        </LabelWrapper>

        {isLoading ? (
          ''
        ) : (
          <Group>
            <LeftSpan isPause={isPause} />
            <Inner isPause={isPause} length={stocks.length}>
              {stocks.length >= popularStockCountLimit
                ? [...stocks, ...stocks].map((stock) => (
                    <PopularStockGroup
                      key={`${stock.id}-stock-bar-popular`}
                      stock={stock}
                    />
                  ))
                : [...stocks, ...stocks, ...stocks, ...stocks].map(
                    (stock, idx) => (
                      <PopularStockGroup
                        key={`${stock.id}-stock-bar-popular-${idx}`}
                        stock={stock}
                      />
                    )
                  )}
            </Inner>
            <RightSpan isPause={isPause} />
          </Group>
        )}
      </BarWrapper>
    </Wrapper>
  )
}

const IconWrapper = styled.div`
  margin-top: 2.9px;
  cursor: pointer;
  display: flex;
`

const NewPauseIcon = styled(PauseIcon)`
  margin-top: 0.1px;
`

const Wrapper = styled.div`
  border-bottom: 0.5px solid #e0e0e0;
`

const BarWrapper = styled.div`
  display: flex;
  width: 144rem;
  padding: 0 2.4rem;
  height: 5.6rem;
  margin: 0 auto;
  align-items: center;
`

const Label = styled.div`
  color: rgba(117, 117, 117, 1);
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 22px;
`

const LabelWrapper = styled.div<{ isPause: boolean }>`
  margin-right: ${(p) => (p.isPause ? '15px' : '30px')};
  display: flex;
  column-gap: 9px;
  align-items: center;
  white-space: nowrap;
`

const Group = styled.div`
  display: flex;
  position: relative;

  overflow: hidden;
`

const Inner = styled.div<{ isPause: boolean; length: number }>`
  position: relative;
  z-index: 1;
  display: flex;

  ${(p) =>
    !p.isPause &&
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

const RightSpan = styled.div<{ isPause: boolean }>`
  display: ${(p) => (p.isPause ? 'none' : '')};
  position: absolute;
  height: 100%;
  z-index: 2;
  right: -1px;
  top: 0px;
  width: 50px;
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
