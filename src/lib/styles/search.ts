import styled from '@emotion/styled'
import { grey020, grey040, grey080, grey050, sky010 } from './colors'
import { StockListGroup, StockListWrapper } from './stockList'

export const SerchBar = styled.div`
  width: 49.2rem;
  height: 4.9rem;
  position: relative;
  padding: 0 3.3rem;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 47px;
  background-color: ${grey020};
  border-radius: 47px;
`

export const IconWrapper = styled.div`
  position: absolute;
  z-index: 2;
  top: 1.1rem;
  left: 3.3rem;
`

export const SearchInput = styled.input`
  width: 100%;
  padding: 1.1rem 2rem 0.9rem 2.2rem;
  font-size: 1.6rem;
  font-weight: 500;
  border: none;

  background: ${grey020};
  box-sizing: border-box;

  color: ${grey080};

  :focus {
    outline: none;
  }
  &::placeholder {
    color: ${grey050};
  }
`

export const HotStockListWrapper = styled(StockListWrapper)`
  position: absolute;

  width: 40.1rem;
  top: 5.9rem;
  left: 50%;
  transform: translate(-50%, 0);

  z-index: 1000;
`

export const Title = styled.div``

export const Button = styled.div`
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
  position: relative;
  z-index: 1000;
`

export const HistoryIconWrapper = styled.div`
  position: absolute;
  right: 12px;
  top: 10px;
  padding: 10px;
  cursor: pointer;
  z-index: 1001;
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
  position: relative;
`

export const Inner = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  cursor: pointer;
  :hover {
    background-color: ${sky010};
  }
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
    border: 0.5px solid ${grey020};
  }

  cursor: pointer;
`

export const Nickname = styled.div`
  font-weight: 600;
  font-size: 13px;
  line-height: 15px;

  color: ${grey080};
  margin-left: 8px;
`

export const Icon = styled.div`
  position: absolute;
  top: 10px;
  cursor: pointer;
  padding: 10px;
  right: 12px;
`
