import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Post } from '../../api/types'
import useGetStock from '../../hooks/useGetStock'
import { useRootState } from '../../hooks/useRootState'
import { BarWrapper, PostWrapper, Wrapper } from '../../mds/styled/wrapper'
import feedSlice from '../../reducers/Slices/feed'
import FeedStockSection from '../Feed/FeedStockSection'
import PostForm from '../Form/PostForm'
import SideBar from '../SideBar'
import StockInfo from './StockInfo'

export default function StockDetail() {
  const { ticker } = useParams<{ ticker: string }>()
  const { stock } = useGetStock(ticker)

  const {
    feed: { posts },
  } = useRootState((state) => state)
  const { setPosts, setStockId } = feedSlice.actions
  const dispatch = useDispatch()

  const addPost = (post?: Post) => {
    if (posts) post && dispatch(setPosts([post].concat(posts)))
  }

  useEffect(() => {
    if (stock) dispatch(setStockId(stock.stock.id))
  }, [stock])

  if (!stock) return <></>

  return (
    <>
      <Wrapper>
        <BarWrapper>
          <SideBar />
          <PostWrapper>
            <StockInfo stock={stock} />
            <PostForm addPost={addPost} />
            {stock && <FeedStockSection />}
          </PostWrapper>
        </BarWrapper>
      </Wrapper>
    </>
  )
}
