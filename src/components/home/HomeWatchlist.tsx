import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'
import {
  WatchlistLoginButton,
  WatchlistSignUpButton,
} from '../../lib/styles/buttons'
import { grey040, grey050, grey080 } from '../../lib/styles/colors'
import media from '../../lib/styles/media'
import { StockListWrapper, StockListHeader } from '../../lib/styles/stockList'
import { document_privacy_url, document_rules_url } from '../../lib/variable'
import viewSlice from '../../reducers/Slices/view'
import { Desktop } from '../common/Responsive'
import { WatchListStockGroup } from '../stock/WatchlistStockGroup'
import useGetWatchlist from './hooks/useGetWatchlist'

function HomeWatchlist() {
  const { isLoading, watchlist } = useGetWatchlist()
  const dispatch = useDispatch()

  const { setIsOpenLoginForm, setIsOpenSignUpForm } = viewSlice.actions

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
                <WatchlistLoginButton
                  onClick={() => dispatch(setIsOpenLoginForm(true))}
                >
                  로그인
                </WatchlistLoginButton>
                <WatchlistSignUpButton
                  onClick={() => dispatch(setIsOpenSignUpForm(true))}
                >
                  가입하기
                </WatchlistSignUpButton>
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
          <Desktop>
            <StockListHeader>관심 종목</StockListHeader>
          </Desktop>
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
        <Desktop>
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
        </Desktop>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  position: absolute;
  left: 24px;

  ${media.medium} {
    width: 100%;
    left: 0;
    position: static;
  }
`

const Main = styled.div`
  height: 30.1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const ButtonWrapper = styled.div`
  margin-top: 3.1rem;
  display: flex;
  column-gap: 1.5rem;
`

const LoggedMain = styled.div`
  height: 25rem;
  display: flex;
  justify-content: center;
  ${media.medium} {
    height: auto;
  }
`

const MainLabel = styled.div`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 150%;
  margin-top: 8.8rem;
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
  width: 29.7rem;
  border-radius: 8px;
  ${media.medium} {
    width: 100%;
    border-radius: 0;
  }
`

const ScrollBar = styled.div`
  overflow: overlay;
  height: 44.8rem;
  ${media.medium} {
    height: auto;
  }
  ::-webkit-scrollbar {
    width: 5px; /*스크롤바의 너비*/
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${grey050}; /*스크롤바의 색상*/
    border-radius: 7px;
  }
`

export default HomeWatchlist
