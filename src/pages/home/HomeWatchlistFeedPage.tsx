import useInfinitePosts from '../../components/common/hooks/useInfinitePosts'
import WatchListEmpty from '../../components/feed/empty/WatchlistEmpty'
import FeedSection from '../../components/feed/FeedSection'
import getPostsByUrl from '../../lib/api/post/getPostsByUrl'
import { HomePageProps } from './type'

function WatchlistFeedPage({ id }: HomePageProps) {
  const { isLoading, posts } = useInfinitePosts({
    key: `watchlist-${id}`,
    callback: (cursor) => getPostsByUrl('watchlist', cursor),
  })
  if (!posts) return <></>
  return (
    <FeedSection
      posts={posts}
      loading={isLoading}
      emptyComponent={<WatchListEmpty />}
    />
  )
}

export default WatchlistFeedPage
