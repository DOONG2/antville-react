import styled from '@emotion/styled'
import { grey040, grey050, grey080 } from '../../lib/styles/colors'
import { StockListWrapper, StockListHeader } from '../../lib/styles/stockList'
import { document_privacy_url, document_rules_url } from '../../lib/variable'
import { WatchListStockGroup } from '../stock/WatchlistStockGroup'
import useGetWatchlist from './hooks/useGetWatchlist'

function HomeWatchlist() {
  const { isLoading, watchlist } = useGetWatchlist()
  if (isLoading) return <></>

  if (watchlist === null)
    return (
      <>
        <Wrapper>
          <NewStockListWrapper>
            <StockListHeader>관심 종목</StockListHeader>
            <Main>
              <MainLabel>
                원하는 종목을 검색하고
                <br />
                관심 종목 리스트에 등록해보세요!
              </MainLabel>
            </Main>
          </NewStockListWrapper>
        </Wrapper>
      </>
    )

  return (
    <>
      <Wrapper>
        <NewStockListWrapper>
          <StockListHeader>관심 종목</StockListHeader>
          {watchlist.length > 0 ? (
            <ScrollBar>
              {watchlist.map((stock) => (
                <WatchListStockGroup
                  key={`${stock.id}-side-bar`}
                  stock={stock}
                />
              ))}
            </ScrollBar>
          ) : (
            <Main>
              <MainLabel>
                원하는 종목을 검색하고
                <br />
                관심 종목 리스트에 등록해보세요!
              </MainLabel>
            </Main>
          )}
        </NewStockListWrapper>
        <Footer>
          <Group>
            <CursorItem
              onClick={() => window.open(document_rules_url, '_black')}
            >
              약관
            </CursorItem>
            <CursorItem
              onClick={() => window.open(document_privacy_url, '_black')}
            >
              개인정보 처리방침
            </CursorItem>
            <Item>© 2021 Antville, Inc.</Item>
          </Group>
        </Footer>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  position: absolute;
  left: 2.4rem;
`

const Main = styled.div`
  height: 25rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MainLabel = styled.div`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 150%;

  text-align: center;

  color: #202020;
`

const Footer = styled.div`
  margin-top: 2rem;
`

const Group = styled.div`
  display: flex;
  column-gap: 1rem;
`

const Item = styled.div`
  color: ${grey040};

  font-weight: 500;
  font-size: 1.3rem;
  line-height: 1.8rem;
`

const CursorItem = styled(Item)`
  cursor: pointer;
  :hover {
    color: ${grey080};
  }
`

const NewStockListWrapper = styled(StockListWrapper)`
  width: 297px;
`

const ScrollBar = styled.div`
  overflow: auto;
  height: 459px;
  ::-webkit-scrollbar {
    width: 5px; /*스크롤바의 너비*/
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${grey050}; /*스크롤바의 색상*/
    border-radius: 7px;
  }
`

export default HomeWatchlist
