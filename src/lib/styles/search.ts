import styled from '@emotion/styled'
import { grey040, grey080, sky010 } from './colors'
import { StockListGroup, StockListWrapper } from './stockList'

export const SerchBar = styled.div<{ isLoggedIn: boolean }>`
  width: 33rem;
  height: 4rem;
  position: relative;
  margin-left: ${(props) => (props.isLoggedIn ? 'auto' : '0')};
`

export const IconWrapper = styled.div`
  position: absolute;
  z-index: 2;
  top: 1.3rem;
  left: 1.4rem;
`

export const SearchInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 2rem 0.8rem 3.8rem;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.2rem;

  background: #ffffff;
  border: 1px solid #bbbbbb;
  box-sizing: border-box;
  border-radius: 3px;

  color: #202020;

  &::placeholder {
    color: #aeaeae;
  }
`

export const HotStockListWrapper = styled(StockListWrapper)<{
  isOpen: boolean
}>`
  position: absolute;
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};

  width: 32.8rem;
  top: 5.2rem;

  z-index: 2;
`

export const Title = styled.div``

export const Button = styled.div`
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

export const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HoverListWrapper = styled(ListWrapper)`
  cursor: pointer;
  :hover {
    background-color: ${sky010};
  }
`

export const HistoryIconWrapper = styled.div`
  margin-right: 12px;
  padding: 10px;
  cursor: pointer;
`

export const NewStockListGroup = styled(StockListGroup)`
  width: 100%;
  border: none;
  cursor: pointer;
`

export const EmptyWrapper = styled.div`
  padding: 93px 75px 133px 75px;

  font-weight: 400;
  font-size: 16px;
  line-height: 150%;

  text-align: center;

  color: ${grey080};
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  position: relative;

  cursor: pointer;
  :hover {
    background-color: ${sky010};
  }
`

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const Item = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

export const FeedAvatar = styled.div`
  margin-left: 12px;
  width: 30px;
  height: 30px;

  border-radius: 30px;

  img {
    width: 30px;
    height: 30px;
    border-radius: 30px;
  }

  cursor: pointer;
`

export const Nickname = styled.div`
  font-family: Roboto;
  font-weight: 600;
  font-size: 13px;
  line-height: 15px;

  color: ${grey080};
  margin-left: 8px;
`

export const Icon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  margin-right: 12px;
`
