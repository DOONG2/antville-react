import useInfinitePosts from './hooks/useInfinitePosts'
import FollowingEmpty from '../../components/feed2/empty/FollowingEmpty'
import FeedSection from '../../components/feed2/FeedSection'
import FeedTab from '../../components/feed2/FeedTab'
import PostForm from '../../components/post/PostForm'
import getPostsByUrl from '../../lib/api/post/getPostsByUrl'
import { HomePageProps } from './type'

function FollowingFeedPage({ id }: HomePageProps) {
  const { isLoading, posts } = useInfinitePosts({
    key: `following-${id}`,
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
