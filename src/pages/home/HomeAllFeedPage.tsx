import useInfinitePosts from './hooks/useInfinitePosts'
import FollowingEmpty from '../../components/feed/empty/FollowingEmpty'
import FeedSection from '../../components/feed/FeedSection'
import FeedTab from '../../components/feed/FeedTab'
import PostForm from '../../components/post/PostForm'
import getPostsByUrl from '../../lib/api/post/getPostsByUrl'
import { HomePageProps } from './type'
import { post_query_key } from '../../lib/variable'

function AllFeedPage({ id }: HomePageProps) {
  const { isLoading, posts, setPosts } = useInfinitePosts({
    key: [post_query_key, id, { page: 'all' }],
    callback: (cursor) => getPostsByUrl('all', cursor),
  })
  if (!posts) return <></>

  return (
    <>
      <PostForm
        addPost={(post) => {
          if (!post) return
          setPosts([post].concat(posts))
        }}
      />
      <FeedTab />
      <FeedSection
        sectionKey={`all-${id}`}
        posts={posts}
        loading={isLoading}
        emptyComponent={<FollowingEmpty />}
      />
    </>
  )
}

export default AllFeedPage
