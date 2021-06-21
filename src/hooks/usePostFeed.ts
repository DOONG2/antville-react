import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import getPostsByUrl from '../api/post/getPostsByUrl'
import { postLimit } from '../lib/variable'
import feedSlice from '../reducers/Slices/feed'
import { useRootState } from './useRootState'

export default function usePostFeed(
  isBottomVisible: boolean,
  isScrolled: boolean,
  setScrolled: (isScrolled: boolean) => void
) {
  const {
    feed: { activatedTab, posts },
    auth,
    post: { isSubmitted },
  } = useRootState((state) => state)
  const { setPosts } = feedSlice.actions
  const dispatch = useDispatch()

  useEffect(() => {
    const getPostsApi = async () => {
      try {
        const result = await getPostsByUrl(activatedTab)
        dispatch(setPosts(result))
      } catch (error) {
        console.log(error)
      }
    }
    getPostsApi()
  }, [activatedTab, auth, isSubmitted])

  useEffect(() => {
    if (!isBottomVisible || isScrolled) return

    const postNextApi = async () => {
      if (posts === undefined || posts === null || posts.length < 1) return

      const cursor = posts[posts?.length - 1].id.toString()
      const result = await getPostsByUrl(activatedTab, cursor)
      const newResults = [...posts, ...result]
      dispatch(setPosts(newResults))
      if (result.length < Number(postLimit)) setScrolled(true)
    }
    postNextApi()
  }, [isBottomVisible])
}
