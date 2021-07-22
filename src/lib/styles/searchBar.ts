import styled from '@emotion/styled'

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
