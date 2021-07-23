import useInfinitePosts from '../../components/common/hooks/useInfinitePosts'
import UserLikeEmpty from '../../components/feed/empty/UserLikeEmpty'
import FeedSection from '../../components/feed/FeedSection'
import getPostsByUserLike from '../../lib/api/post/getPostsByUserLike'
import { UserFeedPageProps } from './type'

function UserLikeFeedPage({ user }: UserFeedPageProps) {
  const { isLoading, posts } = useInfinitePosts({
    key: `user-like-${user.id}`,
    callback: (cursor) => getPostsByUserLike(user.id, cursor),
  })
  if (!posts) return <></>
  return (
    <FeedSection
      posts={posts}
      loading={isLoading}
      emptyComponent={<UserLikeEmpty />}
    />
  )
}

export default UserLikeFeedPage
