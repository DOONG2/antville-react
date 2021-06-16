import { useEffect, useState } from 'react'
import getSubCommentById from '../api/comment/getSubCommentsById'
import { getCommentsByIdResponse } from '../api/comment/types'

export default function useSubCommentsById(id: number, isOpen: boolean) {
  const [comment, setCommnet] = useState<getCommentsByIdResponse>()

  useEffect(() => {
    if (isOpen === false) return undefined
    try {
      const getSubCommentsByIdApi = async () => {
        const result = await getSubCommentById(id)
        setCommnet(result.reverse())
      }
      getSubCommentsByIdApi()
    } catch (error) {
      console.log(error)
    }
  }, [id, isOpen])

  return comment
}
