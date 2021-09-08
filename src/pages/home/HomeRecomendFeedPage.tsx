import useInfinitePosts from './hooks/useInfinitePosts'
import FollowingEmpty from '../../components/feed/empty/FollowingEmpty'
import FeedSection from '../../components/feed/FeedSection'
import FeedTab from '../../components/feed/FeedTab'
import PostForm from '../../components/post/PostForm'
import getPostsByUrl from '../../lib/api/post/getPostsByUrl'
import { HomePageProps } from './type'
import { activated_recommend, post_query_key } from '../../lib/variable'
import usePageView from '../../components/common/hooks/usePageView'
import { Wrapper } from '../../lib/styles/feed'

function HomeRecomendFeedPage({ id }: HomePageProps) {
  const { isLoading, posts } = useInfinitePosts({
    key: [post_query_key, id, { page: activated_recommend }],
    callback: (cursor) => getPostsByUrl(activated_recommend, cursor),
  })
  usePageView('홈/추천')
  if (!posts) return <></>
  return (
    <>
      <Wrapper>
        <PostForm extended={true} />
      </Wrapper>
      <Wrapper>
        <FeedTab />
        <FeedSection
          sectionKey={`recommend-${id}`}
          posts={posts}
          loading={isLoading}
          emptyComponent={<FollowingEmpty />}
        />
      </Wrapper>
    </>
  )
}

export default HomeRecomendFeedPage
