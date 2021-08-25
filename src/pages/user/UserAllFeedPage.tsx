import useInfinitePosts from '../home/hooks/useInfinitePosts'
import UserEmpty from '../../components/feed/empty/UserEmpty'
import FeedSection from '../../components/feed/FeedSection'
import getPostsByUser from '../../lib/api/post/getPostsByUser'
import { UserFeedPageProps } from './type'
import { post_query_key } from '../../lib/variable'

function UserAllFeedPage({ user }: UserFeedPageProps) {
  const { isLoading, posts } = useInfinitePosts({
    key: [post_query_key, user.id, { page: 'user-all' }],
    callback: (cursor) => getPostsByUser(user.id, cursor),
  })
  if (!posts) return <></>
  return (
    <FeedSection
      sectionKey={`user-all-${user.id}`}
      posts={posts}
      loading={isLoading}
      emptyComponent={<UserEmpty />}
    />
  )
}

export default UserAllFeedPage
