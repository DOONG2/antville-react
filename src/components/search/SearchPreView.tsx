import { useRootState } from '../common/hooks/useRootState'
import searchStorage from '../../lib/searchStorage'
import { StockListHeader } from '../../lib/styles/stockList'
import useSearchStocks from './hooks/useSearchStocks'
import { useDispatch } from 'react-redux'
import useCheckLogin from '../common/hooks/useCheckLogin'
import SearchPopularPreView from './SearchPopularPreView'
import useSearchUsers from './hooks/useSearchUsers'
import SearchStockHistory from './SearchStockHistory'
import { Button, HotStockListWrapper, Title } from '../../lib/styles/search'
import searchSlice from '../../reducers/Slices/search'
import SearchStock from './SearchStock'
import SearchUserHistory from './SearchUserHistory'
import styled from '@emotion/styled'
import SearchUser from './SearchUser'

type Props = {
  query: string
}

export default function SearchPreview({ query }: Props) {
  const { isFocusSearchBar } = useRootState((state) => state.view)
  const { setHistoryStocks, setHistoryUsers } = searchSlice.actions
  const dispatch = useDispatch()
  const { clear } = searchStorage
  const isLoggedIn = useCheckLogin()
  const { isLoading: isLoadingUser } = useSearchUsers({
    query,
  })
  const { isLoading: isLoadingStock } = useSearchStocks({
    query,
  })

  if (isLoadingStock || isLoadingUser) return <></>

  if (!isLoggedIn && query === '') return <SearchPopularPreView />

  if (query === '')
    return (
      <>
        {isFocusSearchBar && (
          <HotStockListWrapper isOpen={isFocusSearchBar}>
            <StockListHeader>
              <Title>최근 검색 종목</Title>
              <Button
                onClick={() => {
                  clear()
                  dispatch(setHistoryStocks(null))
                  dispatch(setHistoryUsers(null))
                }}
              >
                전체삭제
              </Button>
            </StockListHeader>
            <SearchStockHistory />
            <NewStockListHeader>
              <Title>최근 검색 유저</Title>
            </NewStockListHeader>
            <SearchUserHistory />
          </HotStockListWrapper>
        )}
      </>
    )

  return (
    <>
      <HotStockListWrapper isOpen={isFocusSearchBar}>
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
