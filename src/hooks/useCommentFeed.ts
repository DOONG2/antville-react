import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import getCommentsById from '../api/comment/getCommentsById'
import FeedSlice from '../reducers/Slices/feed'
import { useRootState } from './useRootState'

export default function useCommentFeed(
  id: number,
  limit: string,
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
        const result = await getCommentsById(id, limit)
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

      const cursor = comments[comments?.length - 1].id.toString()
      const result = await getCommentsById(id, limit, cursor)
      const newResults = [...comments, ...result]
      dispatch(setComments(newResults))
      if (result.length < Number(limit)) setScrolled(true)
    }
    postNextApi()
  }, [isBottomVisible])
}
