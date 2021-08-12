import styled from '@emotion/styled'
import React from 'react'
import Polygon from '../../static/svg/Polygon'
import useStockPopularQuery from './hooks/useStockPopularQuery'
import { PopularStockGroup } from './PopularStockGroup'

function PopularStock() {
  const { isLoading, stocks } = useStockPopularQuery()

  return (
    <Wrapper>
      <BarWrapper>
        <Label>실시간 인기 종목</Label>
        <Polygon />
        {isLoading ? (
          ''
        ) : (
          <Group>
            {stocks?.map((stock) => (
              <PopularStockGroup stock={stock} />
            ))}
          </Group>
        )}
      </BarWrapper>
    </Wrapper>
  )
}

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
  justify-content: center;
`

const Label = styled.div`
  color: rgba(117, 117, 117, 1);
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 22px;

  margin-right: 0.9rem;
`

const Group = styled.div`
  display: flex;
`

export default PopularStock
