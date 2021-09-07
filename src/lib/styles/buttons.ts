import styled from '@emotion/styled'
import { antblue050 } from './colors'

export const LoginButton = styled.button`
  padding: 9px 25px;

  background: #fafafa;
  color: #1942e0;
  border: 1px solid #1942e0;
  border-radius: 5px;

  font-weight: 700;
  font-size: 16px;
  line-height: 22px;

  cursor: pointer;
`

export const SignUpButton = styled(LoginButton)`
  background: #1942e0;
  color: #fafafa;
  border: 1px solid #1942e0;
`

export const SocialStoreButton = styled.button`
  width: 135px;
  height: 48px;

  padding: 0 8px;
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

export const WatchlistLoginButton = styled.button`
  padding: 10px 25px;
  font-weight: bold;
  color: ${antblue050};
  border-radius: 5px;
  border: 1px solid ${antblue050};
  background-color: #fff;
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  cursor: pointer;
`

export const WatchlistSignUpButton = styled.button`
  padding: 10px 18px;
  font-weight: bold;
  color: #fff;
  border-radius: 5px;
  border: 1px solid ${antblue050};
  background-color: ${antblue050};

  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  cursor: pointer;
`
