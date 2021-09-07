import styled from '@emotion/styled'
import {
  WatchlistLoginButton,
  WatchlistSignUpButton,
} from '../../lib/styles/buttons'
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
            <Main>
              <MainLabel>
                관심 종목을 등록하고
                <br />
                원하시는 정보를 공유해보세요!
              </MainLabel>
              <ButtonWrapper>
                <WatchlistLoginButton>로그인</WatchlistLoginButton>
                <WatchlistSignUpButton>가입하기</WatchlistSignUpButton>
              </ButtonWrapper>
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
            <LoggedMain>
              <MainLabel>
                원하는 종목을 검색하고
                <br />
                관심 종목 리스트에 등록해보세요!
              </MainLabel>
            </LoggedMain>
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
            <Item>© 2021 Vivaces, Inc.</Item>
          </Group>
        </Footer>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  position: absolute;
  left: 24px;
`

const Main = styled.div`
  height: 301px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const ButtonWrapper = styled.div`
  margin-top: 31px;
  display: flex;
  column-gap: 15px;
`

const LoggedMain = styled.div`
  height: 250px;
  display: flex;
  justify-content: center;
`

const MainLabel = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  margin-top: 88px;
  text-align: center;
  color: #202020;
`

const Footer = styled.div`
  margin-top: 20px;
`

const Group = styled.div`
  display: flex;
  column-gap: 10px;
`

const Item = styled.div`
  color: ${grey040};

  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
`

const CursorItem = styled(Item)`
  cursor: pointer;
  :hover {
    color: ${grey080};
  }
`

const NewStockListWrapper = styled(StockListWrapper)`
  width: 297px;
  border-radius: 8px;
`

const ScrollBar = styled.div`
  overflow: overlay;
  height: 448px;
  ::-webkit-scrollbar {
    width: 5px; /*스크롤바의 너비*/
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${grey050}; /*스크롤바의 색상*/
    border-radius: 7px;
  }
`

export default HomeWatchlist
