import React from 'react'
import { BarWrapper, PostWrapper, Wrapper } from '../../mds/styled/wrapper'
import PostForm from '../Form/PostForm'
import SideBar from '../SideBar'
import FeedDetailSection from './FeedDetailSection'

export default function FeedDetail() {
  return (
    <>
      <Wrapper>
        <BarWrapper>
          <SideBar />
          <PostWrapper>
            <PostForm />
            <FeedDetailSection />
          </PostWrapper>
        </BarWrapper>
      </Wrapper>
    </>
  )
}
