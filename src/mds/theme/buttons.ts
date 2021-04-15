import styled from '@emotion/styled'

export const LoginButton = styled.button`
  width: 9.5rem;
  height: 4rem;
  padding: 0.5rem;

  background: #fafafa;
  color: #1942e0;
  border: 1px solid #1942e0;
  border-radius: 5px;

  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2.2rem;

  cursor: pointer;
`

export const SignUpButton = styled(LoginButton)`
  background: #1942e0;
  color: #fafafa;
  border: 1px solid #1942e0;
`

export const SocialStoreButton = styled.button`
  width: 12rem;
  height: 4rem;

  padding: 0 0.8rem;
  color: #1942e0;
  background: #ffffff;
  font-weight: 600;
  mix-blend-mode: normal;

  border: 1px solid #1942e0;
  box-sizing: border-box;
  border-radius: 7px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
`
