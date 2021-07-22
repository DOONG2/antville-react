import useInfinitePosts from '../../components/common/hooks/useInfinitePosts'
import FollowingEmpty from '../../components/feed/empty/FollowingEmpty'
import FeedSection from '../../components/feed/FeedSection'
import getPostsByUrl from '../../lib/api/post/getPostsByUrl'

function FollowingFeedPage() {
  const { isLoading, posts } = useInfinitePosts({
    key: 'following',
    callback: (cursor) => getPostsByUrl('following', cursor),
  })
  return (
    <FeedSection
      posts={posts}
      loading={isLoading}
      emptyComponent={<FollowingEmpty />}
    />
  )
}

export default FollowingFeedPage
