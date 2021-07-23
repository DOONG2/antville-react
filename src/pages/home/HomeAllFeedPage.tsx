import useInfinitePosts from '../../components/common/hooks/useInfinitePosts'
import FollowingEmpty from '../../components/feed/empty/FollowingEmpty'
import FeedSection from '../../components/feed/FeedSection'
import getPostsByUrl from '../../lib/api/post/getPostsByUrl'
import { HomePageProps } from './type'

function AllFeedPage({ id }: HomePageProps) {
  const { isLoading, posts } = useInfinitePosts({
    key: `all-${id}`,
    callback: (cursor) => getPostsByUrl('all', cursor),
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

export default AllFeedPage
