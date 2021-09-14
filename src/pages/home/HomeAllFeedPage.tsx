import useInfinitePosts from './hooks/useInfinitePosts'
import FollowingEmpty from '../../components/feed/empty/FollowingEmpty'
import FeedSection from '../../components/feed/FeedSection'
import getPostsByUrl from '../../lib/api/post/getPostsByUrl'
import { HomePageProps } from './type'
import { activated_all, post_query_key } from '../../lib/variable'
import usePageView from '../../components/common/hooks/usePageView'
import HomeLoading from '../../components/home/HomeLoading'

function AllFeedPage({ id }: HomePageProps) {
  const { isLoading, posts } = useInfinitePosts({
    key: [post_query_key, id, { page: activated_all }],
    callback: (cursor) => getPostsByUrl('all', cursor),
  })
  usePageView('홈/전체')
  if (!posts) return <HomeLoading />

  return (
    <>
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
