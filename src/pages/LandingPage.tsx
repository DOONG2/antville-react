import React from 'react'
import Footer from '../components/Footer'
import Landing from '../components/Landing'

export type LandingProps = {}

function LandingPage({}: LandingProps) {
  return (
    <>
      <Landing />
      <Footer />
    </>
  )
}

export default LandingPage
