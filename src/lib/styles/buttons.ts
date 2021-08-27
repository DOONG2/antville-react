import styled from '@emotion/styled'

export const LoginButton = styled.button`
  padding: 9px 25px;

  background: #fafafa;
  color: #1942e0;
  border: 1px solid #1942e0;
  border-radius: 5px;

  font-weight: 700;
  font-size: 16px;
  line-height: 2.2rem;

  cursor: pointer;
`

export const SignUpButton = styled(LoginButton)`
  background: #1942e0;
  color: #fafafa;
  border: 1px solid #1942e0;
`

export const SocialStoreButton = styled.button`
  width: 13.5rem;
  height: 4.8rem;

  padding: 0 0.8rem;
  color: #1942e0;
  background: #fafafa;
  font-weight: 600;
  mix-blend-mode: normal;

  border: 1px solid #a6a6a6;
  box-sizing: border-box;
  border-radius: 7px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0px 8px;

  cursor: pointer;
`
