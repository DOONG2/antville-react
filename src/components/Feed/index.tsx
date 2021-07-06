import React from 'react'
import { useDispatch } from 'react-redux'
import { Post } from '../../api/types'
import useCheckLogin from '../../hooks/useCheckLogin'
import { useRootState } from '../../hooks/useRootState'
import { BarWrapper, PostWrapper, Wrapper } from '../../mds/styled/wrapper'
import feedSlice from '../../reducers/Slices/feed'
import PostForm from '../Form/PostForm'
import SideBar from '../SideBar'
import FeedSection from './FeedSection'
import FeedTab from './FeedTab'

const Feed = () => {
  const {
    feed: { posts },
  } = useRootState((state) => state)
  const { setPosts } = feedSlice.actions
  const dispatch = useDispatch()

  const isLoggedIn = useCheckLogin()

  const addPost = (post?: Post) => {
    if (posts) post && dispatch(setPosts([post].concat(posts)))
  }

  return (
    <Wrapper>
      <BarWrapper>
        <SideBar />
        <PostWrapper>
          <PostForm addPost={addPost} />
          {isLoggedIn && <FeedTab />}
          <FeedSection />
        </PostWrapper>
      </BarWrapper>
    </Wrapper>
  )
}

export default Feed
