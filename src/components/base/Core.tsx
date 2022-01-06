import { Global } from '@emotion/react'
import GlobalStyle from 'src/styles/GlobalStyle'

export default function Core() {
  return (
    <>
      <Global styles={GlobalStyle} />
    </>
  )
}
