import { useEffect, useState } from 'react'
import getCommentById from '../api/comment/getCommentsById'
import { getCommentsByIdResponse } from '../api/comment/types'

export default function useCommentsById(id: number) {
  const [comment, setCommnet] = useState<getCommentsByIdResponse>()
  useEffect(() => {
    try {
      const getCommentByIdApi = async () => {
        const result = await getCommentById(id)
        setCommnet(result)
      }
      getCommentByIdApi()
    } catch (error) {
      console.log(error)
    }
  }, [id])

  return comment
}
