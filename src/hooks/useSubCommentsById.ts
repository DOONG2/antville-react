import { useEffect, useState } from 'react'
import getSubCommentsById from '../api/comment/getSubCommentsById'
import { getCommentsByIdResponse } from '../api/comment/types'
import { subCommentsLimit } from '../lib/variable'

export default function useSubCommentsById(
  id: number,
  isOpen: boolean,
  cursor?: string
) {
  const [comments, setCommnets] = useState<getCommentsByIdResponse>([])
  const [isEnded, setIsEnded] = useState<boolean>(false)

  useEffect(() => {
    if (isOpen === false) return undefined
    try {
      const getSubCommentsByIdApi = async () => {
        const result = await getSubCommentsById(id, cursor)
        if (result.length < Number(subCommentsLimit)) setIsEnded(true)
        setCommnets([...result.reverse(), ...comments])
      }
      getSubCommentsByIdApi()
    } catch (error) {
      console.log(error)
    }
  }, [id, isOpen, cursor])

  return { comments, isEnded }
}
