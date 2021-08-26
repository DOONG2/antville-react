import useInfinitePosts from './hooks/useInfinitePosts'
import WatchListEmpty from '../../components/feed/empty/WatchlistEmpty'
import FeedSection from '../../components/feed/FeedSection'
import FeedTab from '../../components/feed/FeedTab'
import PostForm from '../../components/post/PostForm'
import getPostsByUrl from '../../lib/api/post/getPostsByUrl'
import { HomePageProps } from './type'
import { post_query_key } from '../../lib/variable'
import usePageView from '../../components/common/hooks/usePageView'

function WatchlistFeedPage({ id }: HomePageProps) {
  const { isLoading, posts } = useInfinitePosts({
    key: [post_query_key, id, { page: 'watchlist' }],
    callback: (cursor) => getPostsByUrl('watchlist', cursor),
  })
  usePageView('홈/관심종목')
  if (!posts) return <></>
  return (
    <>
      <PostForm />
      <FeedTab />
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
