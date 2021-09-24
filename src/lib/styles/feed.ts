import styled from '@emotion/styled'
import { grey020, grey030, grey060, grey080 } from './colors'
import media from './media'

export const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: 0px 2px 5px rgba(32, 32, 32, 0.15);
  border-radius: 8px;
`

export const GifImage = styled.img`
  margin: 0 auto;
  margin-top: 15px;
  width: 100%;

  border: 1px solid ${grey030};
  border-radius: 8px;

  cursor: pointer;
`

export const FeedWrapper = styled.div`
  margin: 0 2.5rem;
  padding: 2.5rem 1rem 2.7rem 0.5rem;
  :last-child {
    border: none;
  }
  ${media.medium} {
    margin: 0 1.5rem;
    padding: 1.5rem 0.5rem 1.7rem 0.25rem;
  }
`

export const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
`

export const FeedAvatar = styled.div`
  width: 5rem;
  height: 5rem;

  border-radius: 50px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50px;
    border: 0.5px solid ${grey020};
  }

  ${media.medium} {
    width: 3rem;
    height: 3rem;
  }

  cursor: pointer;
`

export const FeedTop = styled.div`
  display: flex;
  align-items: flex-end;
`

export const NickNameWrapper = styled.div<{ long?: boolean }>`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2rem;

  color: ${grey080};
  cursor: pointer;
  ${media.medium} {
    font-size: ${(p) => (p.long ? '1rem' : '1.4rem')};
  }
`

export const PostTime = styled.div`
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.3rem;

  color: ${grey060};
  margin-bottom: 0.25rem;
  margin-left: 0.7rem;
`

export const RightItem = styled.div`
  width: 100%;
  display: flex;
  margin-left: 1.9rem;
  flex-direction: column;
  ${media.medium} {
    margin-left: 1.5rem;
  }
`

export const IconWrapper = styled.div`
  margin-left: 9px;
  margin-bottom: 3px;
  display: flex;
  align-items: center;
`

export const LeftItem = styled.div`
  display: flex;
`

export const MiddleWrapper = styled.div`
  width: 100%;
  font-size: 1.6rem;
  margin-top: 1.6rem;
  line-height: 2rem;
  ${media.medium} {
    font-size: 1.4rem;
    line-height: 2rem;
  }
`
export const BottomWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  column-gap: 3rem;
  font-size: 1.4rem;
  line-height: 2rem;

  ${media.medium} {
    font-size: 1.3rem;
    line-height: 1.8rem;
  }

  color: ${grey060};
`

export const BottomItem = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.6rem;
`

export const Count = styled.div`
  cursor: pointer;
`

export const FeedTitle = styled.div`
  display: flex;
  align-items: center;
`

export const TitleIconWrapper = styled.div`
  cursor: pointer;
  padding: 0 5px;
`

export const FeedText = styled.div`
  text-align: center;
  margin-left: 23px;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;

  color: #000000;
`
