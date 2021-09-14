import useInfinitePosts from './hooks/useInfinitePosts'
import WatchListEmpty from '../../components/feed/empty/WatchlistEmpty'
import FeedSection from '../../components/feed/FeedSection'
import getPostsByUrl from '../../lib/api/post/getPostsByUrl'
import { HomePageProps } from './type'
import { activated_watchlist, post_query_key } from '../../lib/variable'
import usePageView from '../../components/common/hooks/usePageView'
import HomeLoading from '../../components/home/HomeLoading'

function WatchlistFeedPage({ id }: HomePageProps) {
  const { isLoading, posts } = useInfinitePosts({
    key: [post_query_key, id, { page: activated_watchlist }],
    callback: (cursor) => getPostsByUrl(activated_watchlist, cursor),
  })
  usePageView('홈/관심종목')
  if (!posts) return <HomeLoading />
  return (
    <>
      <FeedSection
        sectionKey={`watchlist-${id}`}
        posts={posts}
        loading={isLoading}
        emptyComponent={<WatchListEmpty />}
      />
    </>
  )
}

export default WatchlistFeedPage
