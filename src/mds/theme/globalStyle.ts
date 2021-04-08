import { css } from '@emotion/react'
import emotionReset from 'emotion-reset'

const globalStyle = css`
  ${emotionReset}

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }

  h1 {
    font-size: 48px;
    font-weight: bold;
  }
`

export default globalStyle
