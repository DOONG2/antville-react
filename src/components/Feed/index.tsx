import React from 'react'
import { useDispatch } from 'react-redux'
import { Post } from '../../api/types'
import { useRootState } from '../../hooks/useRootState'
import { BarWrapper, PostWrapper, Wrapper } from '../../mds/styled/wrapper'
import feedSlice from '../../reducers/Slices/feed'
import PostForm from '../Form/PostForm'
import SideBar from '../SideBar'
import FeedSection from './FeedSection'

const Feed = () => {
  const {
    feed: { posts },
  } = useRootState((state) => state)
  const { setPosts } = feedSlice.actions
  const dispatch = useDispatch()

  const addPost = (post?: Post) => {
    if (posts) post && dispatch(setPosts([post].concat(posts)))
  }

  return (
    <Wrapper>
      <BarWrapper>
        <SideBar />
        <PostWrapper>
          <PostForm addPost={addPost} />
          <FeedSection />
        </PostWrapper>
      </BarWrapper>
    </Wrapper>
  )
}

export default Feed
