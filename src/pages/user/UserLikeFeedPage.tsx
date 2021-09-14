import useInfinitePosts from '../home/hooks/useInfinitePosts'
import UserLikeEmpty from '../../components/feed/empty/UserLikeEmpty'
import FeedSection from '../../components/feed/FeedSection'
import getPostsByUserLike from '../../lib/api/post/getPostsByUserLike'
import { UserFeedPageProps } from './type'
import { activated_user_like, post_query_key } from '../../lib/variable'
import usePageView from '../../components/common/hooks/usePageView'
import HomeLoading from '../../components/home/HomeLoading'

function UserLikeFeedPage({ user }: UserFeedPageProps) {
  const { isLoading, posts } = useInfinitePosts({
    key: [post_query_key, String(user.id), { page: activated_user_like }],
    callback: (cursor) => getPostsByUserLike(user.id, cursor),
  })
  usePageView('프로필/좋아하는_게시물')
  if (!posts) return <HomeLoading />
  return (
    <FeedSection
      sectionKey={`user-like-${user.id}`}
      posts={posts}
      loading={isLoading}
      emptyComponent={<UserLikeEmpty />}
      keyId={String(user.id)}
    />
  )
}

export default UserLikeFeedPage
