import useInfinitePosts from '../home/hooks/useInfinitePosts'
import UserEmpty from '../../components/feed/empty/UserEmpty'
import FeedSection from '../../components/feed/FeedSection'
import getPostsByUser from '../../lib/api/post/getPostsByUser'
import { UserFeedPageProps } from './type'

function UserAllFeedPage({ user }: UserFeedPageProps) {
  const { isLoading, posts } = useInfinitePosts({
    key: `user-all-${user.id}`,
    callback: (cursor) => getPostsByUser(user.id, cursor),
  })
  if (!posts) return <></>
  return (
    <FeedSection
      posts={posts}
      loading={isLoading}
      emptyComponent={<UserEmpty />}
    />
  )
}

export default UserAllFeedPage
