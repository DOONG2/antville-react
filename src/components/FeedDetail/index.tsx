import React from 'react'
import { BarWrapper, PostWrapper, Wrapper } from '../../mds/styled/wrapper'
import CommentForm from '../Form/CommentForm'
import SideBar from '../SideBar'
import CommentComponent from './CommentComponent'
import FeedDetailSection from './FeedDetailSection'

export default function FeedDetail() {
  return (
    <>
      <Wrapper>
        <BarWrapper>
          <SideBar />
          <PostWrapper>
            <FeedDetailSection />
            <CommentForm />
            <CommentComponent />
          </PostWrapper>
        </BarWrapper>
      </Wrapper>
    </>
  )
}
