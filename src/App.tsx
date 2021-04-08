import React from 'react'
import { Global } from '@emotion/react'
import Header from './components/Header'
import Routes from './Routes'
import globalStyle from './mds/theme/globalStyle'

function App() {
  return (
    <>
      <Header />
      <Routes />
      <Global styles={globalStyle} />
    </>
  )
}

export default App
