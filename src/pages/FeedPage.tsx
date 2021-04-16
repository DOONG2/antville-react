import SideBar from '../components/SideBar'
import Feed from '../components/Feed'
import StockBar from '../components/StockBar'

export type FeedProps = {}

function FeedPage({}: FeedProps) {
  return (
    <>
      <StockBar />
      <SideBar />
      <Feed />
    </>
  )
}

export default FeedPage
