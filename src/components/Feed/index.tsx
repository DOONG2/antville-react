import React from 'react'
import { BarWrapper, PostWrapper, Wrapper } from '../../mds/styled/feed'
import PostForm from '../Form/PostForm'
import SideBar from '../SideBar'
import FeedSection from './FeedSection'

const Feed = () => {
  return (
    <Wrapper>
      <BarWrapper>
        <SideBar />
        <PostWrapper>
          <PostForm />
          <FeedSection />
        </PostWrapper>
      </BarWrapper>
    </Wrapper>
  )
}

export default Feed
