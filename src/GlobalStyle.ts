import { css } from '@emotion/react'
import { sky040, sky050 } from './lib/styles/colors'

const globalStyle = css`
  html {
    font-size: 62.5%;
  }

  html * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    a {
      color: ${sky040};
      text-decoration: none;
      :link {
        text-decoration: none;
      }
      :visited {
        text-decoration: none;
      }
      :hover {
        color: ${sky050};
      }
    }

    h1 {
      font-size: 4.8rem;
      font-weight: bold;
    }
    input {
      padding-bottom: 5px;
    }
    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px #ffffff inset;
    }
  }
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue',
      'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕', 나눔고딕,
      'Nanum Gothic', 'Noto Sans KR', 'Noto Sans CJK KR', arial, 돋움, Dotum,
      Tahoma, Geneva, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default globalStyle
