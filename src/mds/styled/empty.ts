import styled from '@emotion/styled'
import { grey040 } from './colors'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Icon = styled.div`
  margin-top: 92px;
`

export const MainText = styled.div`
  font-family: Roboto;
  font-size: 24px;
  line-height: 150%;

  color: ${grey040};

  margin-top: 47px;
`

export const SubText = styled.div`
  font-family: Roboto;
  font-size: 16px;
  line-height: 180%;

  text-align: center;

  color: ${grey040};

  margin-top: 24px;
`
