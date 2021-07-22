import { useEffect, useState } from 'react'
import getSubCommentsById from '../../../lib/api/comment/getSubCommentsById'
import { getCommentsByIdResponse } from '../../../lib/api/comment/types'
import { subCommentsLimit } from '../../../lib/variable'

export default function useSubCommentsById(
  id: number,
  isOpen: boolean,
  cursor?: string
) {
  const [comments, setCommnets] = useState<getCommentsByIdResponse>([])
  const [isEnded, setIsEnded] = useState<boolean>(false)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    if (isOpen === false) return undefined
    try {
      const getSubCommentsByIdApi = async () => {
        if (isEnded) return
        const result = await getSubCommentsById(id, cursor)
        if (result.length < Number(subCommentsLimit)) setIsEnded(true)
        setCommnets([...result.reverse(), ...comments])
        setIsLoaded(true)
      }
      getSubCommentsByIdApi()
    } catch (error) {
      console.log(error)
    }
  }, [id, isOpen, cursor])

  return { comments, isEnded, isLoaded }
}
