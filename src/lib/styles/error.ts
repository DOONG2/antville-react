import styled from '@emotion/styled'
import { antblue050, grey050 } from './colors'

export const Block = styled.div``
export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h1 {
    margin-top: 55px;
    font-weight: 500;
    font-size: 37px;
    color: #000000;
  }

  & > h2 {
    margin-top: 43px;
    font-weight: 500;
    font-size: 26px;
    line-height: 148.2%;
    color: ${grey050};
    text-align: center;
  }
`

export const IconWrapper = styled.div`
  position: relative;
  margin-top: 290px;
`

export const ErrorWrapper = styled.div`
  position: absolute;
  top: -140px;
  right: -198px;
`

export const Button = styled.div`
  margin-top: 80px;
  padding: 15px 51px;
  background-color: ${antblue050};
  border-radius: 9px;
  font-weight: bold;
  font-size: 26px;
  color: #ffffff;
  cursor: pointer;
`
