import useInfinitePosts from '../../components/common/hooks/useInfinitePosts'
import WatchListEmpty from '../../components/feed/empty/WatchlistEmpty'
import FeedSection from '../../components/feed/FeedSection'
import getPostsByUrl from '../../lib/api/post/getPostsByUrl'

function WatchlistFeedPage() {
  const { isLoading, posts } = useInfinitePosts({
    key: 'watchlist',
    callback: (cursor) => getPostsByUrl('watchlist', cursor),
  })
  return (
    <FeedSection
      posts={posts}
      loading={isLoading}
      emptyComponent={<WatchListEmpty />}
    />
  )
}

export default WatchlistFeedPage
