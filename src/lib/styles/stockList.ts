import styled from '@emotion/styled'
import { grey060, grey070, sky050 } from './colors'
import media from './media'

export const StockListWrapper = styled.div`
  display: flex;
  flex-direction: column;

  background: #ffffff;
  box-shadow: 0px 4px 14px rgba(32, 32, 32, 0.12),
    0px 1.6711px 5.84887px rgba(32, 32, 32, 0.0862625),
    0px 0.893452px 3.12708px rgba(32, 32, 32, 0.0715329),
    0px 0.500862px 1.75302px rgba(32, 32, 32, 0.06),
    0px 0.266004px 0.931014px rgba(32, 32, 32, 0.0484671),
    0px 0.11069px 0.387416px rgba(32, 32, 32, 0.0337375);
  overflow: hidden;
  ${media.medium} {
    box-shadow: none;
  }
`
export const StockListHeader = styled.div`
  color: #202020;
  font-weight: bold;
  font-size: 15px;
  line-height: 19px;
  padding: 16px 16px 7px 16px;

  display: flex;
  justify-content: space-between;
`

export const StockListGroup = styled.div`
  display: grid;
  padding: 11px 18px;
`

export const StockListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StockName = styled.div`
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;

  color: #202020;
`

export const StockPrice = styled.div`
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  text-align: right;

  color: ${grey070};
`

export const CompanyName = styled.div`
  font-size: 12px;
  line-height: 15px;
  padding-right: 5px;
  color: ${grey060};
`

export const UpDownRate = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;

  color: ${sky050};

  display: flex;
  align-items: center;
  column-gap: 4px;
`

export const UpDownIcon = styled.div`
  display: inline;
`
