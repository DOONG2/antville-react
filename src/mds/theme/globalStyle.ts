import { css } from '@emotion/react'
import emotionReset from 'emotion-reset'

const globalStyle = css`
  ${emotionReset}

  @font-face {
    font-family: 'Noto Sans KR';
    font-weight: 100;
    src: url('/fonts/NotoSansKR-Thin.otf') format('opentype');
  }

  @font-face {
    font-family: 'Noto Sans KR';
    font-weight: 200;
    src: url('/fonts/NotoSansKR-Light.otf') format('opentype');
  }

  @font-face {
    font-family: 'Noto Sans KR';
    font-weight: 400;
    src: url('/fonts/NotoSansKR-Regular.otf') format('opentype');
  }

  @font-face {
    font-family: 'Noto Sans KR';
    font-weight: 500;
    src: url('/fonts/NotoSansKR-Medium.otf') format('opentype');
  }

  @font-face {
    font-family: 'Noto Sans KR';
    font-weight: 700;
    src: url('/fonts/NotoSansKR-Bold.otf') format('opentype');
  }

  @font-face {
    font-family: 'Noto Sans KR';
    font-weight: 900;
    src: url('/fonts/Roboto-Black.otf') format('opentype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 100;
    src: url('/fonts/Roboto-Thin.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 200;
    src: url('/fonts/Roboto-Light.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 400;
    src: url('/fonts/Roboto-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 500;
    src: url('/fonts/Roboto-Medium.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 700;
    src: url('/fonts/Roboto-Bold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 900;
    src: url('/fonts/Roboto-Black.ttf') format('truetype');
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }

  html {
    font-size: 62.5%;
  }

  html * {
    margin: 0;
    padding: 0;
    font-family: Noto Sans KR;

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
`

export default globalStyle
