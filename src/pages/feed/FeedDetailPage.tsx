import FeedDetailInfo from '../../components/feed/detail/FeedDetailInfo'
import { FeedPageProps } from './type'
import useInfiniteComment from '../../components/common/hooks/useInfiniteComment'
import getCommentsById from '../../lib/api/comment/getCommentsById'
import CommentSection from '../../components/comment/CommentSection'
import CommentForm from '../../components/comment/CommentForm'

export default function FeedDetailPage({ id, post }: FeedPageProps) {
  const { isLoading, comments } = useInfiniteComment({
    key: `feed-detail-${id}`,
    callback: (cursor) => getCommentsById(id, cursor),
  })
  return (
    <>
      <FeedDetailInfo post={post} />
      <CommentForm />
      <CommentSection comments={comments} loading={isLoading} />
    </>
  )
}
