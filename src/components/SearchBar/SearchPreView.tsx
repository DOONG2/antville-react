import styled from '@emotion/styled'
import CloseIconGrey from '../../assets/svg/CloseIconGrey'
import useStockPopularQuery from '../../hooks/query/useStockPopularQuery'
import { useRootState } from '../../hooks/useRootState'
import { grey040 } from '../../mds/styled/colors'
import {
  CompanyName,
  StockListGroup,
  StockListHeader,
  StockListItem,
  StockListWrapper,
  StockName,
  UpDownRate,
} from '../../mds/styled/stockList'

const HotStockListWrapper = styled(StockListWrapper)<{ isOpen: boolean }>`
  position: absolute;
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};

  width: 32.8rem;
  top: 5.2rem;

  z-index: 2;
`

const Title = styled.div``

const Button = styled.div`
  font-family: Roboto;
  font-weight: 500;
  font-size: 10px;
  line-height: 0;

  color: #ffffff;
  background: ${grey040};
  border-radius: 46px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 8px;

  cursor: pointer;
`

const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 0.5px solid #f0f0f0;
`

const IconWrapper = styled.div`
  margin-right: 22px;
  cursor: pointer;
`

export default function SearchPreview() {
  const { isFocusSearchBar } = useRootState((state) => state.view)
  const { data } = useStockPopularQuery()

  if (!data) return <></>

  return (
    <>
      <HotStockListWrapper isOpen={isFocusSearchBar}>
        <StockListHeader>
          <Title>최근 검색어</Title>
          <Button>전체삭제</Button>
        </StockListHeader>
        {data?.stocks.map((stock) => (
          <ListWrapper key={`${stock.id}-search-bar`}>
            <StockListGroup>
              <StockListItem>
                <StockName>{stock.krName}</StockName>
              </StockListItem>
              <StockListItem>
                <CompanyName>{stock.symbol}</CompanyName>
                <UpDownRate></UpDownRate>
              </StockListItem>
            </StockListGroup>
            <IconWrapper>
              <CloseIconGrey />
            </IconWrapper>
          </ListWrapper>
        ))}
      </HotStockListWrapper>
    </>
  )
}
