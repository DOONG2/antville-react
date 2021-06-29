import React from 'react'
import { useDispatch } from 'react-redux'
import { CommentObject } from '../../api/comment/types'
import { useRootState } from '../../hooks/useRootState'
import { BarWrapper, PostWrapper, Wrapper } from '../../mds/styled/wrapper'
import feedSlice from '../../reducers/Slices/feed'
import CommentForm from '../Form/CommentForm'
import SideBar from '../SideBar'
import CommentComponent from './CommentComponent'
import FeedDetailSection from './FeedDetailSection'

export default function FeedDetail() {
  const {
    feed: { comments },
  } = useRootState((state) => state)
  const { setComments } = feedSlice.actions
  const dispatch = useDispatch()

  const addComment = (comment?: CommentObject) => {
    if (comments) comment && dispatch(setComments([comment].concat(comments)))
  }
  return (
    <>
      <Wrapper>
        <BarWrapper>
          <SideBar />
          <PostWrapper>
            <FeedDetailSection />
            <CommentForm addComment={addComment} />
            <CommentComponent />
          </PostWrapper>
        </BarWrapper>
      </Wrapper>
    </>
  )
}
