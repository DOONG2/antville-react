import useInfinitePosts from './hooks/useInfinitePosts'
import FollowingEmpty from '../../components/feed/empty/FollowingEmpty'
import FeedSection from '../../components/feed/FeedSection'
import FeedTab from '../../components/feed/FeedTab'
import PostForm from '../../components/post/PostForm'
import getPostsByUrl from '../../lib/api/post/getPostsByUrl'
import { HomePageProps } from './type'
import { post_query_key } from '../../lib/variable'

function FollowingFeedPage({ id }: HomePageProps) {
  const { isLoading, posts } = useInfinitePosts({
    key: [post_query_key, id, { page: 'following' }],
    callback: (cursor) => getPostsByUrl('following', cursor),
  })
  if (!posts) return <></>
  return (
    <>
      <PostForm />
      <FeedTab />
      <FeedSection
        sectionKey={`following-${id}`}
        posts={posts}
        loading={isLoading}
        emptyComponent={<FollowingEmpty />}
      />
    </>
  )
}

export default FollowingFeedPage
