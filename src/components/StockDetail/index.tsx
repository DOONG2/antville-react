import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Post } from '../../api/types'
import { useRootState } from '../../hooks/useRootState'
import { BarWrapper, PostWrapper, Wrapper } from '../../mds/styled/wrapper'
import feedSlice from '../../reducers/Slices/feed'
import FeedStockSection from '../Feed/FeedStockSection'
import PostForm from '../Form/PostForm'
import SideBar from '../SideBar'
import StockInfo from './StockInfo'

export default function StockDetail() {
  const { id } = useParams<{ id: string }>()
  const {
    feed: { posts },
  } = useRootState((state) => state)
  const { setPosts } = feedSlice.actions
  const dispatch = useDispatch()

  const addPost = (post?: Post) => {
    if (posts) post && dispatch(setPosts([post].concat(posts)))
  }
  return (
    <>
      <Wrapper>
        <BarWrapper>
          <SideBar />
          <PostWrapper>
            <StockInfo />
            <PostForm addPost={addPost} />
            <FeedStockSection id={id} />
          </PostWrapper>
        </BarWrapper>
      </Wrapper>
    </>
  )
}
