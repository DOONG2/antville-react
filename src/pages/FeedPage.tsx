import SideBar from '../components/SideBar'
import Feed from '../components/Feed'
import StockBar from '../components/StockBar'
import { useGoogleTokenState } from '../atoms/authState'

export type FeedProps = {}

function FeedPage({}: FeedProps) {
  const [googleToken, setGoogleToken] = useGoogleTokenState()
  return (
    <>
      <StockBar />
      <SideBar />
      <Feed />
    </>
  )
}

export default FeedPage
