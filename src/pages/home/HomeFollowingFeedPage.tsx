import useInfinitePosts from '../../components/common/hooks/useInfinitePosts'
import FollowingEmpty from '../../components/feed/empty/FollowingEmpty'
import FeedSection from '../../components/feed/FeedSection'
import getPostsByUrl from '../../lib/api/post/getPostsByUrl'
import { HomePageProps } from './type'

function FollowingFeedPage({ id }: HomePageProps) {
  const { isLoading, posts } = useInfinitePosts({
    key: `following-${id}`,
    callback: (cursor) => getPostsByUrl('following', cursor),
  })
  if (!posts) return <></>
  return (
    <FeedSection
      posts={posts}
      loading={isLoading}
      emptyComponent={<FollowingEmpty />}
    />
  )
}

export default FollowingFeedPage
