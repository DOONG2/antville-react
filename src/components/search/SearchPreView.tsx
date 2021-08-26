import { StockListHeader } from '../../lib/styles/stockList'
import useSearchStocks from './hooks/useSearchStocks'
import SearchPopularPreView from './SearchPopularPreView'
import useSearchUsers from './hooks/useSearchUsers'
import { HotStockListWrapper, Title } from '../../lib/styles/search'
import SearchStock from './SearchStock'
import styled from '@emotion/styled'
import SearchUser from './SearchUser'
import { useRootState } from '../common/hooks/useRootState'

export default function SearchPreview() {
  const { query } = useRootState((state) => state.search)
  const { isLoading: isLoadingUser } = useSearchUsers({
    query,
  })
  const { isLoading: isLoadingStock } = useSearchStocks({
    query,
  })

  if (isLoadingStock || isLoadingUser) return <></>

  if (query === '') return <SearchPopularPreView />

  return (
    <>
      <HotStockListWrapper>
        <StockListHeader>
          <Title>종목</Title>
        </StockListHeader>
        <SearchStock />
        <NewStockListHeader>
          <Title>유저</Title>
        </NewStockListHeader>
        <SearchUser />
      </HotStockListWrapper>
    </>
  )
}

const NewStockListHeader = styled(StockListHeader)`
  border-top: 0.5px solid #0076e1;
`
