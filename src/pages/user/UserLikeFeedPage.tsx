import useInfinitePosts from '../home/hooks/useInfinitePosts'
import UserLikeEmpty from '../../components/feed/empty/UserLikeEmpty'
import FeedSection from '../../components/feed/FeedSection'
import getPostsByUserLike from '../../lib/api/post/getPostsByUserLike'
import { UserFeedPageProps } from './type'
import { post_query_key } from '../../lib/variable'
import usePageView from '../../components/common/hooks/usePageView'

function UserLikeFeedPage({ user }: UserFeedPageProps) {
  const { isLoading, posts } = useInfinitePosts({
    key: [post_query_key, user.id, { page: 'user-like' }],
    callback: (cursor) => getPostsByUserLike(user.id, cursor),
  })
  usePageView('프로필/좋아하는_게시물')
  if (!posts) return <></>
  return (
    <FeedSection
      sectionKey={`user-like-${user.id}`}
      posts={posts}
      loading={isLoading}
      emptyComponent={<UserLikeEmpty />}
    />
  )
}

export default UserLikeFeedPage
