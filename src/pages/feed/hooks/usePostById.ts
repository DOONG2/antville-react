import { useEffect, useState } from 'react'
import getPostById from '../../../lib/api/post/getPostById'
import { Post } from '../../../lib/api/types'

export default function usePostById(id: string) {
  const [post, setPost] = useState<Post>()
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const getPostByIdApi = async () => {
      try {
        const result = await getPostById(id)
        setPost(result)
      } catch (_) {
      } finally {
        setIsLoading(false)
      }
    }
    getPostByIdApi()
  }, [id])

  return { post, isLoading }
}
