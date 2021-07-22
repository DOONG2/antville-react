import useInfinitePosts from '../../components/common/hooks/useInfinitePosts'
import ProfileEmpty from '../../components/feed/empty/UserLikeEmpty'
import FeedSection from '../../components/feed/FeedSection'
import getPostsByUser from '../../lib/api/post/getPostsByUser'
import { UserFeedPageProps } from './type'

function UserAllFeedPage({ user }: UserFeedPageProps) {
  const { isLoading, posts } = useInfinitePosts({
    key: `user-all-${user.id}`,
    callback: (cursor) => getPostsByUser(user.id, cursor),
  })

  return (
    <FeedSection
      posts={posts}
      loading={isLoading}
      emptyComponent={<ProfileEmpty />}
    />
  )
}

export default UserAllFeedPage
