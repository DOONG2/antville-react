import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import getPostsByUrl from '../api/post/getPostsByUrl'
import FeedSlice from '../reducers/Slices/feed'
import { useRootState } from './useRootState'

export default function usePostFeed(limit: string, isBottomVisible: boolean) {
  const { activatedTab, posts, isScrolled } = useRootState(
    (state) => state.feed
  )
  const auth = useRootState((state) => state.auth)
  const { setPosts, setScrolled } = FeedSlice.actions
  const dispatch = useDispatch()

  useEffect(() => {
    const getPostsApi = async () => {
      try {
        const result = await getPostsByUrl(activatedTab, limit)
        dispatch(setPosts(result))
      } catch (error) {
        console.log(error)
      }
    }
    getPostsApi()
  }, [activatedTab, auth])

  useEffect(() => {
    if (!isBottomVisible || isScrolled) return

    const postNextApi = async () => {
      if (posts === undefined || posts === null || posts.length < 1) return

      const cursor = posts[posts?.length - 1].id.toString()
      const result = await getPostsByUrl(activatedTab, limit, cursor)
      const newResults = [...posts, ...result]
      dispatch(setPosts(newResults))
      if (result.length < Number(limit)) dispatch(setScrolled(true))
    }
    postNextApi()
  }, [isBottomVisible])
}
