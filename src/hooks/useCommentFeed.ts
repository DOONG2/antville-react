import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import getCommentsById from '../api/comment/getCommentsById'
import { commentsLimit } from '../lib/variable'
import FeedSlice from '../reducers/Slices/feed'
import { useRootState } from './useRootState'

export default function useCommentFeed(
  id: number,
  isBottomVisible: boolean,
  isScrolled: boolean,
  setScrolled: (isScrolled: boolean) => void
) {
  const { comments } = useRootState((state) => state.feed)
  const auth = useRootState((state) => state.auth)
  const { setComments } = FeedSlice.actions
  const dispatch = useDispatch()

  useEffect(() => {
    const getPostsApi = async () => {
      try {
        const result = await getCommentsById(id)
        dispatch(setComments(result))
      } catch (error) {
        console.log(error)
      }
    }
    getPostsApi()
  }, [auth])

  useEffect(() => {
    if (!isBottomVisible || isScrolled) return

    const postNextApi = async () => {
      if (comments === undefined || comments === null || comments.length < 1)
        return

      const cursor = comments[comments?.length - 1].id
      const result = await getCommentsById(id, cursor)
      const newResults = [...comments, ...result]
      dispatch(setComments(newResults))
      if (result.length < Number(commentsLimit)) setScrolled(true)
    }
    postNextApi()
  }, [isBottomVisible])
}
