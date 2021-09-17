import styled from '@emotion/styled'
import { grey080 } from './colors'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`

export const Item = styled.div`
  display: flex;
  padding: 10px 20px;
  align-items: center;
  cursor: pointer;
`

export const UserItem = styled(Item)`
  justify-content: space-between;
`

export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${grey080};
`

export const Nickname = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  margin-left: 15px;
  cursor: pointer;
`
