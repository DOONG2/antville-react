import useInfinitePosts from '../../components/common/hooks/useInfinitePosts'
import FollowingEmpty from '../../components/feed/empty/FollowingEmpty'
import FeedSection from '../../components/feed/FeedSection'
import getPostsByUrl from '../../lib/api/post/getPostsByUrl'

function AllFeedPage() {
  const { isLoading, posts } = useInfinitePosts({
    key: 'all',
    callback: (cursor) => getPostsByUrl('all', cursor),
  })
  return (
    <FeedSection
      posts={posts}
      loading={isLoading}
      emptyComponent={<FollowingEmpty />}
    />
  )
}

export default AllFeedPage
