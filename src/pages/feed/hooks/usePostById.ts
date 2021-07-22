import { useEffect, useState } from 'react'
import getPostById from '../../../lib/api/post/getPostById'
import { Post } from '../../../lib/api/types'

export default function usePostById(id: string) {
  const [post, setPost] = useState<Post>()
  useEffect(() => {
    try {
      const getPostByIdApi = async () => {
        const result = await getPostById(id)
        setPost(result)
      }
      getPostByIdApi()
    } catch (error) {
      console.log(error)
    }
  }, [id])

  return post
}
