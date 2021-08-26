import Footer from '../../components/base/Footer'
import Header from '../../components/base/Header'
import usePageView from '../../components/common/hooks/usePageView'
import Landing from '../../components/landing/Landing'

function LandingPage() {
  usePageView('랜딩')
  return (
    <>
      <Header />
      <Landing />
      <Footer />
    </>
  )
}

export default LandingPage
