import { Global } from '@emotion/react'
import GlobalStyle from '../../GlobalStyle'

export default function Core() {
  return (
    <>
      <Global styles={GlobalStyle} />
    </>
  )
}
