import FeedDetailInfo from '../../components/feed2/detail/FeedDetailInfo'
import { FeedPageProps } from './type'
import useInfiniteComment from './hooks/useInfiniteComment'
import getCommentsById from '../../lib/api/comment/getCommentsById'
import CommentSection from '../../components/comment/CommentSection'
import CommentForm from '../../components/comment/CommentForm'

export default function FeedDetailPage({ id, post }: FeedPageProps) {
  const { isLoading, comments, setComments } = useInfiniteComment({
    key: `feed-detail-${id}`,
    callback: (cursor) => getCommentsById(id, cursor),
  })

  if (!comments) return <></>

  return (
    <>
      <FeedDetailInfo post={post} />
      <CommentForm
        addComment={(comment) => {
          if (!comment) return
          setComments([comment].concat(comments))
        }}
      />
      <CommentSection comments={comments} loading={isLoading} />
    </>
  )
}
