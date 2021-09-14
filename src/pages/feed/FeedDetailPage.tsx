import FeedDetailInfo from '../../components/feed/detail/FeedDetailInfo'
import { FeedPageProps } from './type'
import useInfiniteComment from './hooks/useInfiniteComment'
import getCommentsById from '../../lib/api/comment/getCommentsById'
import CommentSection from '../../components/comment/CommentSection'
import CommentForm from '../../components/comment/CommentForm'
import { useRef } from 'react'
import { comment_query_key } from '../../lib/variable'
import { Wrapper } from '../../lib/styles/feed'

export default function FeedDetailPage({ id, post }: FeedPageProps) {
  const { isLoading, comments } = useInfiniteComment({
    key: [comment_query_key, id],
    callback: (cursor) => getCommentsById(id, cursor),
  })
  const inputRef = useRef<any>(null)

  if (!comments) return <></>

  return (
    <>
      <Wrapper>
        <FeedDetailInfo post={post} inputRef={inputRef} />
      </Wrapper>
      <Wrapper>
        <CommentForm inputRef={inputRef} />
        <CommentSection comments={comments} loading={isLoading} />
      </Wrapper>
    </>
  )
}
