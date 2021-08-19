import styled from '@emotion/styled'
import { grey030, grey060, grey080 } from './colors'

export const GifImage = styled.img`
  margin: 0 auto;
  margin-top: 15px;

  height: 270px;

  border: 1px solid ${grey030};
  border-radius: 8px;

  cursor: pointer;
`

export const FeedWrapper = styled.div`
  border-top: 1px solid #ececec;
`

export const TopWrapper = styled.div`
  padding: 13px 24px 0 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const FeedAvatar = styled.div`
  width: 50px;
  height: 50px;

  border-radius: 50px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }

  cursor: pointer;
`

export const NickNameWrapper = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;

  color: ${grey080};

  margin-left: 20px;
  padding-bottom: 5px;

  cursor: pointer;
`

export const PostTime = styled.div`
  font-weight: 600;
  font-size: 10px;
  line-height: 14px;

  color: ${grey060};

  margin-left: 7px;
`

export const IconWrapper = styled.div`
  margin-left: 9px;
  display: flex;
  align-items: center;
`

export const LeftItem = styled.div`
  display: flex;
  align-items: center;
`

export const MiddleWrapper = styled.div`
  width: 100%;
  padding-left: 97px;
  padding-right: 40px;

  font-size: 16px;
  line-height: 150%;
`
export const BottomWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  padding-left: 97px;
  column-gap: 30px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;

  color: #757575;
`

export const BottomItem = styled.div`
  display: flex;
  align-items: center;
  column-gap: 6px;
  padding-bottom: 13px;
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
