import React from 'react'
import { Global } from '@emotion/react'
import Header from './components/Header'
import Routes from './Routes'
import globalStyle from './mds/theme/globalStyle'
import Helmet from './components/Helmet'

function App() {
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
