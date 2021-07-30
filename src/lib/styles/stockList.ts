import styled from '@emotion/styled'

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
`
export const StockListHeader = styled.div`
  color: #202020;
  font-weight: bold;
  font-size: 13px;
  line-height: 18px;
  padding: 1rem;

  display: flex;
  justify-content: space-between;
`

export const StockListGroup = styled.div`
  display: grid;
  padding: 1.1rem;
`

export const StockListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StockName = styled.div`
  font-family: Roboto;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;

  color: #202020;
`

export const StockPrice = styled.div`
  font-family: Roboto;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  text-align: right;

  color: #424242;
`

export const CompanyName = styled.div`
  font-family: Roboto;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;

  color: #757575;
`

export const UpDownRate = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;

  color: #3082f5;
`

export const UpDownIcon = styled.div`
  display: inline;
`
