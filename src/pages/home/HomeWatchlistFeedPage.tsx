import useInfinitePosts from './hooks/useInfinitePosts'
import WatchListEmpty from '../../components/feed/empty/WatchlistEmpty'
import FeedSection from '../../components/feed/FeedSection'
import FeedTab from '../../components/feed/FeedTab'
import PostForm from '../../components/post/PostForm'
import getPostsByUrl from '../../lib/api/post/getPostsByUrl'
import { HomePageProps } from './type'

function WatchlistFeedPage({ id }: HomePageProps) {
  const { isLoading, posts } = useInfinitePosts({
    key: `watchlist-${id}`,
    callback: (cursor) => getPostsByUrl('watchlist', cursor),
  })
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
