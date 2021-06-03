import styled from '@emotion/styled'
import React from 'react'
import PostForm from '../Form/PostForm'
import SideBar from '../SideBar'
import FeedSection from './FeedSection'

const Wrapper = styled.div`
  min-width: 144rem;
`

const BarWrapper = styled.div`
  width: 144rem;
  padding: 3rem 0 0 0;
  margin: 0 auto;
  position: relative;
`

const PostWrapper = styled.div`
  width: 68.4rem;
  margin: 0 auto;
  padding-bottom: 30px;
  position: relative;
`

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
