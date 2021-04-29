import React from 'react'
import { Global } from '@emotion/react'
import Header from './components/Header'
import Routes from './Routes'
import globalStyle from './mds/theme/globalStyle'
import Helmet from './components/Helmet'
import useCheckUserEffect from './hooks/useCheckUserEffect'

function App() {
  useCheckUserEffect()
  return (
    <>
      <Helmet />
      <Header />
      <Routes />
      <Global styles={globalStyle} />
    </>
  )
}

export default App
