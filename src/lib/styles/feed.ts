import styled from '@emotion/styled'
import { grey020, grey030, grey060, grey080 } from './colors'

export const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: 0px 2px 5px rgba(32, 32, 32, 0.15);
  border-radius: 8px;
`

export const GifImage = styled.img`
  margin: 0 auto;
  margin-top: 15px;

  height: 270px;

  border: 1px solid ${grey030};
  border-radius: 8px;

  cursor: pointer;
`

export const FeedWrapper = styled.div`
  margin: 0 25px;
  padding: 25px 10px 27px 5px;
  border-bottom: 1px solid ${grey030};
  :last-child {
    border: none;
  }
`

export const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 5px;
`

export const FeedAvatar = styled.div`
  width: 50px;
  height: 50px;

  border-radius: 50px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    border: 0.5px solid ${grey020};
  }

  cursor: pointer;
`

export const FeedTop = styled.div`
  display: flex;
  align-items: flex-end;
`

export const NickNameWrapper = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;

  color: ${grey080};
  cursor: pointer;
`

export const PostTime = styled.div`
  font-weight: bold;
  font-size: 10px;
  line-height: 13px;

  color: ${grey060};
  margin-bottom: 2.5px;
  margin-left: 7px;
`

export const RightItem = styled.div`
  width: 100%;
  display: flex;
  margin-left: 19px;
  flex-direction: column;
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
  font-size: 16px;
  margin-top: 16px;
  line-height: 150%;
`
export const BottomWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  column-gap: 30px;
  font-size: 14px;
  line-height: 20px;

  color: ${grey060};
`

export const BottomItem = styled.div`
  display: flex;
  align-items: center;
  column-gap: 6px;
`

export const Count = styled.div`
  cursor: pointer;
`

export const FeedTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
`

export const TitleIconWrapper = styled.div`
  cursor: pointer;
  padding: 0 5px;
`

export const FeedText = styled.div`
  text-align: center;
  margin-left: 23px;
  font-weight: 400;
  font-size: 22px;
  line-height: 30px;

  color: #000000;
`
